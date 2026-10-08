import nodemailer from 'nodemailer';
import type { StoredInquiry } from './store';

type Transporter = ReturnType<typeof nodemailer.createTransport>;

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (transporter) return transporter;
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });
  return transporter;
}

function describe(inquiry: StoredInquiry): string {
  const lines = [
    `Reference: ${inquiry.id}`,
    `Received: ${inquiry.createdAt}`,
    `Kind: ${inquiry.kind}`,
    `Name: ${inquiry.fullName}`,
    `City: ${inquiry.city}`,
  ];
  if (inquiry.kind === 'booking') {
    lines.push(
      `Role: ${inquiry.role}`,
      `Format: ${inquiry.format}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.countryCode} ${inquiry.phone}`,
      `Window: ${inquiry.window}`,
    );
  } else {
    lines.push(`Phone: ${inquiry.phone}`);
  }
  return lines.join('\n');
}

/**
 * Primary delivery channel. Resolves false (never throws) when SMTP is
 * unconfigured or fails — the route still saves the inquiry and returns
 * success to the user, while the failure is logged for ops.
 */
export async function sendInquiryEmail(
  inquiry: StoredInquiry,
): Promise<boolean> {
  const tx = getTransporter();
  const to = process.env.INQUIRY_TO;
  if (!tx || !to) {
    console.warn(
      '[inquiries] SMTP not configured (SMTP_HOST/INQUIRY_TO) — skipping email, inquiry saved.',
    );
    return false;
  }
  try {
    await tx.sendMail({
      from: process.env.INQUIRY_FROM ?? process.env.SMTP_USER ?? 'no-reply@localhost',
      to,
      subject: `New inquiry ${inquiry.id} — ${inquiry.fullName} (${inquiry.city})`,
      text: describe(inquiry),
    });
    return true;
  } catch (err) {
    console.error('[inquiries] SMTP send failed (inquiry saved):', err);
    return false;
  }
}

/** WhatsApp hook — stubbed. Logs for now; wire a provider in a later phase. */
export function sendWhatsAppStub(inquiry: StoredInquiry): void {
  const hook = process.env.WHATSAPP_WEBHOOK_URL;
  if (!hook) {
    console.log(`[whatsapp-stub] new inquiry ${inquiry.id} (${inquiry.city})`);
    return;
  }
  // TODO: POST to the configured WhatsApp provider. See CONTENT_TODO.md.
  console.log(
    `[whatsapp-stub] WHATSAPP_WEBHOOK_URL is set but no provider wired yet — inquiry ${inquiry.id} not forwarded.`,
  );
}
