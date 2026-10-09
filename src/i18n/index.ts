// ============================================================
// Internationalisation helpers (English default, Arabic under /ar/)
// ============================================================

export type Lang = 'en' | 'ar';

export const LANGS: Lang[] = ['en', 'ar'];

/** Language of a page, derived from its URL: everything under /ar/ is Arabic. */
export function getLang(url: URL): Lang {
  return url.pathname === '/ar' || url.pathname.startsWith('/ar/') ? 'ar' : 'en';
}

export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Prefix an English site path with /ar for the Arabic site. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === 'en' || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (path === '/ar' || path.startsWith('/ar/')) return path;
  return `/ar${path.startsWith('/') ? path : `/${path}`}`;
}

/** The same page in the other language. */
export function alternatePath(pathname: string, target: Lang): string {
  const base = pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
  return localizePath(base, target);
}

/** Inline translation picker: `t('Our Services', 'خدماتنا')`. */
export const translator = (lang: Lang) => (en: string, ar: string) => (lang === 'ar' ? ar : en);

/** Dates with Western digits in both languages. */
export function formatDate(iso: string, lang: Lang, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }): string {
  const date = new Date(iso.length === 10 ? `${iso}T00:00:00` : iso);
  return date.toLocaleDateString(lang === 'ar' ? 'ar-AE-u-nu-latn' : 'en-US', opts);
}

/** Shared interface strings used by the layout and common components. */
export const ui = {
  en: {
    navServices: 'Services',
    navAreas: 'Areas',
    navAreasLong: 'Service Areas',
    navAbout: 'About',
    navInsights: 'Insights',
    navContact: 'Contact',
    getQuote: 'Get a Quote',
    home: 'Home',
    toggleMenu: 'Toggle menu',
    language: 'Language',
    footerServices: 'Services',
    footerAreas: 'Areas',
    footerContact: 'Contact',
    footerEstablished: 'Licensed, insured, and locally established since',
    rights: 'All rights reserved.',
    poweredBy: 'Powered by',
    certifications: 'Certifications',
    iso9001: 'ISO 9001 Certified',
    iso14001: 'ISO 14001 Certified',
    iso45001: 'ISO 45001 Certified',
    contactUs: 'Contact Us',
    call: 'Call',
    email: 'Email',
  },
  ar: {
    navServices: 'الخدمات',
    navAreas: 'المناطق',
    navAreasLong: 'مناطق الخدمة',
    navAbout: 'من نحن',
    navInsights: 'المقالات',
    navContact: 'اتصل بنا',
    getQuote: 'اطلب عرض سعر',
    home: 'الرئيسية',
    toggleMenu: 'فتح القائمة',
    language: 'اللغة',
    footerServices: 'الخدمات',
    footerAreas: 'المناطق',
    footerContact: 'تواصل معنا',
    footerEstablished: 'مرخّصة ومؤمّنة ومؤسسة محلياً منذ عام',
    rights: 'جميع الحقوق محفوظة.',
    poweredBy: 'تطوير',
    certifications: 'الشهادات',
    iso9001: 'حاصلة على شهادة ISO 9001',
    iso14001: 'حاصلة على شهادة ISO 14001',
    iso45001: 'حاصلة على شهادة ISO 45001',
    contactUs: 'تواصل معنا',
    call: 'اتصل',
    email: 'البريد الإلكتروني',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export const useUi = (lang: Lang) => ui[lang];
