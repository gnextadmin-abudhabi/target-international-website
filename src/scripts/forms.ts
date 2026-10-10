// Progressive enhancement for [data-ajax-form] forms: submit with fetch,
// show a loading state and an inline success / error message.
// Also wires up [data-dropzone] file pickers (drag & drop CV upload).

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = /\.(pdf|doc|docx)$/i;

function setStatus(form: HTMLFormElement, kind: 'success' | 'error' | '', text = '') {
  const box = form.querySelector<HTMLElement>('[data-form-status]');
  if (!box) return;
  box.hidden = !kind;
  box.dataset.kind = kind;
  box.querySelector('[data-form-status-text]')!.textContent = text;
  if (kind) box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelectorAll<HTMLFormElement>('form[data-ajax-form]').forEach((form) => {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.querySelector<HTMLElement>('[data-label]');
  const idleText = label?.textContent ?? '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus(form, '');

    const dz = form.querySelector<HTMLElement>('[data-dropzone]');
    if (dz) {
      const input = dz.querySelector<HTMLInputElement>('input[type="file"]')!;
      if (input.required && !input.files?.length) {
        dz.dataset.invalid = 'true';
        setStatus(form, 'error', dz.dataset.msgRequired || 'Please attach your CV.');
        return;
      }
    }
    if (!form.reportValidity()) return;

    button?.setAttribute('disabled', '');
    if (label) label.textContent = form.dataset.sending || 'Sending…';

    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        form.reset();
        form.querySelectorAll<HTMLElement>('[data-dropzone]').forEach((d) => d.dispatchEvent(new Event('dz:reset')));
        setStatus(form, 'success', form.dataset.success || 'Thank you! We will get back to you soon.');
      } else {
        setStatus(form, 'error', form.dataset.error || data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus(form, 'error', form.dataset.error || 'Network error. Please try again.');
    } finally {
      button?.removeAttribute('disabled');
      if (label) label.textContent = idleText;
    }
  });
});

document.querySelectorAll<HTMLElement>('[data-dropzone]').forEach((dz) => {
  const input = dz.querySelector<HTMLInputElement>('input[type="file"]')!;
  const empty = dz.querySelector<HTMLElement>('[data-dz-empty]')!;
  const chosen = dz.querySelector<HTMLElement>('[data-dz-file]')!;
  const nameEl = dz.querySelector<HTMLElement>('[data-dz-name]')!;
  const sizeEl = dz.querySelector<HTMLElement>('[data-dz-size]')!;
  const errEl = dz.querySelector<HTMLElement>('[data-dz-error]')!;

  const show = (file: File | null, error = '') => {
    errEl.textContent = error;
    errEl.hidden = !error;
    dz.dataset.invalid = error ? 'true' : 'false';
    if (file && !error) {
      nameEl.textContent = file.name;
      sizeEl.textContent = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
      empty.hidden = true;
      chosen.hidden = false;
      dz.dataset.filled = 'true';
    } else {
      empty.hidden = false;
      chosen.hidden = true;
      dz.dataset.filled = 'false';
    }
  };

  const accept = (file?: File) => {
    if (!file) return show(null);
    if (!ALLOWED.test(file.name)) {
      input.value = '';
      return show(null, dz.dataset.msgType || 'Please upload a PDF or Word file.');
    }
    if (file.size > MAX_BYTES) {
      input.value = '';
      return show(null, dz.dataset.msgSize || 'The file must be 5 MB or smaller.');
    }
    show(file);
  };

  input.addEventListener('change', () => accept(input.files?.[0]));

  ['dragenter', 'dragover'].forEach((t) =>
    dz.addEventListener(t, (e) => {
      e.preventDefault();
      dz.dataset.drag = 'true';
    }),
  );
  ['dragleave', 'drop'].forEach((t) =>
    dz.addEventListener(t, (e) => {
      e.preventDefault();
      dz.dataset.drag = 'false';
    }),
  );
  dz.addEventListener('drop', (e) => {
    const file = (e as DragEvent).dataTransfer?.files?.[0];
    if (!file) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    accept(file);
  });

  dz.querySelector('[data-dz-remove]')?.addEventListener('click', (e) => {
    e.preventDefault();
    input.value = '';
    show(null);
  });
  dz.addEventListener('dz:reset', () => show(null));
});
