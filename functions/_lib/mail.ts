// Shared helpers for the form endpoints (Cloudflare Pages Functions).
//
// Required Cloudflare environment variables (Settings → Variables and Secrets):
//   RESEND_API_KEY  secret API key from https://resend.com (domain targetinternational.ae verified there)
// Optional:
//   MAIL_TO         recipient address, defaults to info@targetinternational.ae
//   MAIL_FROM       sender, defaults to "Target International Website <website@targetinternational.ae>"

export interface Env {
  RESEND_API_KEY?: string;
  MAIL_TO?: string;
  MAIL_FROM?: string;
}

export interface Attachment {
  filename: string;
  content: string; // base64
}

const DEFAULT_TO = 'info@targetinternational.ae';
const DEFAULT_FROM = 'Target International Website <website@targetinternational.ae>';

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/** Trimmed text field, capped to a sensible length. */
export const field = (form: FormData, name: string, max = 2000) => String(form.get(name) ?? '').trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Simple, readable HTML email: a title and a table of label/value rows. */
export function renderEmail(title: string, rows: [string, string][]) {
  const body = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 14px;background:#f8f9fa;border:1px solid #e6eaf0;font-weight:600;color:#1a2d42;width:170px;vertical-align:top">${escapeHtml(k)}</td>` +
        `<td style="padding:10px 14px;border:1px solid #e6eaf0;color:#2a3f5c;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join('');
  const html =
    `<div style="font-family:Arial,sans-serif;max-width:640px">` +
    `<h2 style="color:#152236;margin:0 0 6px">${escapeHtml(title)}</h2>` +
    `<p style="color:#5e7499;margin:0 0 18px;font-size:13px">Sent from the targetinternational.ae website</p>` +
    `<table style="border-collapse:collapse;width:100%;font-size:14px">${body}</table></div>`;
  const text = `${title}\n\n` + rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  return { html, text };
}

export async function sendMail(
  env: Env,
  msg: { subject: string; html: string; text: string; replyTo?: string; attachments?: Attachment[] },
) {
  if (!env.RESEND_API_KEY) {
    return { ok: false, error: 'Email service is not configured (RESEND_API_KEY missing).' };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM || DEFAULT_FROM,
      to: [env.MAIL_TO || DEFAULT_TO],
      subject: msg.subject,
      html: msg.html,
      text: msg.text,
      reply_to: msg.replyTo,
      attachments: msg.attachments,
    }),
  });
  if (!res.ok) {
    return { ok: false, error: `Email service error ${res.status}: ${(await res.text()).slice(0, 300)}` };
  }
  return { ok: true };
}

/** Base64-encode an uploaded file without blowing the stack on large files. */
export async function toBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}
