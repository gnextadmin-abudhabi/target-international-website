// POST /api/careers — emails a job application with the CV attached.
import { type Env, json, isEmail, field, renderEmail, sendMail, toBase64 } from '../_lib/mail';

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED = /\.(pdf|doc|docx)$/i;

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Invalid form data.' }, 400);
  }

  if (field(form, 'company_website')) return json({ ok: true });

  const name = field(form, 'name', 120);
  const email = field(form, 'email', 160);
  const phone = field(form, 'phone', 40);
  const position = field(form, 'position', 120);
  const experience = field(form, 'experience', 40);
  const location = field(form, 'location', 120);
  const notice = field(form, 'notice', 80);
  const linkedin = field(form, 'linkedin', 300);
  const message = field(form, 'message', 5000);
  const lang = field(form, 'lang', 5) === 'ar' ? 'Arabic' : 'English';
  const cv = form.get('cv');

  if (!name || !isEmail(email) || !phone || !position) {
    return json({ ok: false, error: 'Please fill in your name, email, phone and position.' }, 422);
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return json({ ok: false, error: 'Please attach your CV.' }, 422);
  }
  if (!ALLOWED.test(cv.name)) {
    return json({ ok: false, error: 'CV must be a PDF or Word document.' }, 422);
  }
  if (cv.size > MAX_CV_BYTES) {
    return json({ ok: false, error: 'CV must be 5 MB or smaller.' }, 413);
  }

  const { html, text } = renderEmail('New job application', [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Position', position],
    ['Experience', experience],
    ['Current location', location],
    ['Notice period', notice],
    ['LinkedIn', linkedin],
    ['Cover message', message],
    ['CV', `${cv.name} (${Math.round(cv.size / 1024)} KB, attached)`],
    ['Site language', lang],
  ]);

  const safeName = cv.name.replace(/[^\w.\- ]+/g, '_').slice(-120);
  const sent = await sendMail(env, {
    subject: `Job application: ${position} — ${name}`,
    html,
    text,
    replyTo: email,
    attachments: [{ filename: safeName, content: await toBase64(cv) }],
  });
  if (!sent.ok) {
    console.error(sent.error);
    return json({ ok: false, error: 'We could not submit your application right now. Please email your CV to us directly.' }, 502);
  }
  return json({ ok: true });
};
