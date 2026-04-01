import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../../..");
const NEWSLETTER_ROOT = resolve(__dirname, "../..");

function loadEnv() {
  const envPath = resolve(NEWSLETTER_ROOT, "tools", ".env");
  try {
    const content = readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env is optional for build-only workflows
  }
}

loadEnv();

export const config = {
  siteBaseUrl: process.env.SITE_BASE_URL || "https://blap64.com",
  resendApiKey: process.env.RESEND_API_KEY || "",
  newsletterFrom:
    process.env.NEWSLETTER_FROM ||
    "Benjamin Lappalainen <newsletter@blap64.com>",
  audienceId: process.env.AUDIENCE_ID || "",
  testEmail: process.env.TEST_EMAIL || "",
  subscribeEndpoint:
    process.env.SUBSCRIBE_ENDPOINT ||
    "https://newsletter-subscribe.blap64.workers.dev",
  turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || "",
  paths: {
    root: ROOT,
    newsletterRoot: NEWSLETTER_ROOT,
    posts: resolve(NEWSLETTER_ROOT, "posts"),
    output: resolve(NEWSLETTER_ROOT, "output"),
    templates: resolve(NEWSLETTER_ROOT, "templates"),
  },
};
