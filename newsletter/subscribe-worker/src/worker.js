export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = env.ALLOWED_ORIGIN || "https://blap64.xyz";

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return Response.json(
        { error: "Method not allowed" },
        { status: 405, headers: corsHeaders }
      );
    }

    if (!origin.endsWith("blap64.xyz") && origin !== "http://localhost:4322") {
      return Response.json(
        { error: "Forbidden" },
        { status: 403, headers: corsHeaders }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "Invalid request body" },
        { status: 400, headers: corsHeaders }
      );
    }

    const { email, token } = body;

    if (!token) {
      return Response.json(
        { error: "Verification required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: request.headers.get("CF-Connecting-IP"),
        }),
      }
    );

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return Response.json(
        { error: "Verification failed. Please try again." },
        { status: 403, headers: corsHeaders }
      );
    }

    if (!email || typeof email !== "string") {
      return Response.json(
        { error: "Email is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400, headers: corsHeaders }
      );
    }

    try {
      const res = await fetch("https://api.resend.com/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          segments: [{ id: env.RESEND_SEGMENT_ID }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          return Response.json(
            { message: "You're already subscribed!" },
            { status: 200, headers: corsHeaders }
          );
        }
        return Response.json(
          { error: data.message || "Failed to subscribe" },
          { status: res.status, headers: corsHeaders }
        );
      }

      return Response.json(
        { message: "Subscribed successfully" },
        { status: 200, headers: corsHeaders }
      );
    } catch {
      return Response.json(
        { error: "Internal server error" },
        { status: 500, headers: corsHeaders }
      );
    }
  },
};
