const ALLOWED_ORIGINS = ["https://blap64.com", "http://localhost:4322"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API = "https://api.resend.com";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    const corsHeaders = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin",
    };
    const reply = (body, status) =>
      Response.json(body, { status, headers: corsHeaders });

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return reply({ error: "Method not allowed" }, 405);
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return reply({ error: "Forbidden" }, 403);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return reply({ error: "Invalid request body" }, 400);
    }

    const email = String(body.email ?? "").trim().toLowerCase();
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return reply({ error: "Invalid email address" }, 400);
    }

    if (!body.token) {
      return reply({ error: "Verification required" }, 400);
    }

    if (!(await verifyTurnstile(body.token, request, env))) {
      return reply({ error: "Verification failed. Please try again." }, 403);
    }

    try {
      const added = await addContact(email, env);
      if (!added) return reply({ message: "You're already subscribed!" }, 200);
      return reply({ message: "Subscribed successfully" }, 200);
    } catch (error) {
      console.error(error.message);
      return reply({ error: "Failed to subscribe. Try again later." }, 502);
    }
  },
};

// Checks the Turnstile token with Cloudflare, and that it was solved on our
// site (TURNSTILE_HOSTNAME in wrangler.toml). Fails closed if either isn't set.
async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY || !env.TURNSTILE_HOSTNAME) return false;
  if (typeof token !== "string") return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP"),
    }),
  });
  const outcome = await response.json();
  return outcome.success === true && outcome.hostname === env.TURNSTILE_HOSTNAME;
}

// Adds the contact to the newsletter segment (and topic, if one is set).
// Returns false if the email is already a contact. Throws on any Resend error.
async function addContact(email, env) {
  if (!env.RESEND_API_KEY || !env.RESEND_SEGMENT_ID) {
    throw new Error("RESEND_API_KEY or RESEND_SEGMENT_ID is not set");
  }
  const headers = {
    Authorization: `Bearer ${env.RESEND_API_KEY}`,
    "Content-Type": "application/json",
  };

  const existing = await fetch(`${RESEND_API}/contacts/${encodeURIComponent(email)}`, { headers });
  if (existing.ok) return false;
  if (existing.status !== 404) {
    throw new Error(`Resend contact lookup failed: ${existing.status} ${await existing.text()}`);
  }

  const contact = {
    email,
    unsubscribed: false,
    segments: [{ id: env.RESEND_SEGMENT_ID }],
  };
  if (env.RESEND_TOPIC_ID) {
    contact.topics = [{ id: env.RESEND_TOPIC_ID, subscription: "opt_in" }];
  }

  const created = await fetch(`${RESEND_API}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify(contact),
  });
  if (!created.ok) {
    throw new Error(`Resend contact create failed: ${created.status} ${await created.text()}`);
  }
  return true;
}
