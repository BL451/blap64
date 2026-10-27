import { Resend } from "resend";
import { config } from "./config.js";

function getClient() {
  if (!config.resendApiKey) {
    throw new Error(
      "RESEND_API_KEY not set. Add it to newsletter/tools/.env."
    );
  }
  return new Resend(config.resendApiKey);
}

export async function sendTestEmail(emailHtml, frontmatter) {
  if (!config.testEmail) {
    throw new Error("TEST_EMAIL not set. Add it to newsletter/tools/.env.");
  }

  const resend = getClient();

  const { data, error } = await resend.emails.send({
    from: config.newsletterFrom,
    replyTo: config.replyTo || undefined,
    to: [config.testEmail],
    subject: `[TEST] ${frontmatter.title}`,
    html: emailHtml,
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
  return data;
}

export async function sendBroadcast(emailHtml, frontmatter) {
  if (!config.segmentId) {
    throw new Error("SEGMENT_ID not set. Add it to newsletter/tools/.env.");
  }

  const resend = getClient();

  // With a topic set, unsubscribing opts out of this topic only, not everything in the account
  const { data, error } = await resend.broadcasts.create({
    segmentId: config.segmentId,
    topicId: config.topicId || undefined,
    from: config.newsletterFrom,
    replyTo: config.replyTo || undefined,
    subject: frontmatter.title,
    html: emailHtml,
    send: true,
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
  return data;
}
