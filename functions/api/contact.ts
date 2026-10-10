// POST /api/contact — emails a contact form submission.
import { type Env, json, isEmail, field, renderEmail, sendMail } from '../_lib/mail';

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Invalid form data.' }, 400);
  }

  // Honeypot: real visitors never fill this hidden field
  if (field(form, 'company_website')) return json({ ok: true });

  const name = field(form, 'name', 120);
  const email = field(form, 'email', 160);
  const phone = field(form, 'phone', 40);
  const service = field(form, 'service', 120);
  const area = field(form, 'area', 120);
  const message = field(form, 'message', 5000);
  const lang = field(form, 'lang', 5) === 'ar' ? 'Arabic' : 'English';

  if (!name || !isEmail(email) || !message) {
    return json({ ok: false, error: 'Please fill in your name, a valid email and a message.' }, 422);
  }

  const { html, text } = renderEmail('New contact enquiry', [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Service', service],
    ['Area', area],
    ['Message', message],
    ['Site language', lang],
  ]);

  const sent = await sendMail(env, { subject: `Website enquiry from ${name}`, html, text, replyTo: email });
  if (!sent.ok) {
    console.error(sent.error);
    return json({ ok: false, error: 'We could not send your message right now. Please call or email us directly.' }, 502);
  }
  return json({ ok: true });
};
