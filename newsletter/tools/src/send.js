import { Resend } from "resend";
import { config } from "./config.js";

function getClient() {
  if (!config.resendApiKey) {
    throw new Error(
      "RESEND_API_KEY not set. Add it to .env in the project root."
    );
  }
  return new Resend(config.resendApiKey);
}

export async function sendTestEmail(emailHtml, frontmatter) {
  if (!config.testEmail) {
    throw new Error("TEST_EMAIL not set. Add it to .env in the project root.");
  }

  const resend = getClient();

  const { data, error } = await resend.emails.send({
    from: config.newsletterFrom,
    to: [config.testEmail],
    subject: `[TEST] ${frontmatter.title}`,
    html: emailHtml,
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
  return data;
}

export async function sendBroadcast(emailHtml, frontmatter) {
  if (!config.audienceId) {
    throw new Error("AUDIENCE_ID not set. Add it to .env in the project root.");
  }

  const resend = getClient();

  const { data, error } = await resend.broadcasts.create({
    audienceId: config.audienceId,
    from: config.newsletterFrom,
    subject: frontmatter.title,
    html: emailHtml,
  });

  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);

  const { data: sendData, error: sendError } = await resend.broadcasts.send(
    data.id
  );

  if (sendError)
    throw new Error(`Resend send error: ${JSON.stringify(sendError)}`);
  return sendData;
}
