import { localizePath, type Lang } from '../i18n';

export const serviceUrl = (serviceSlug: string, lang: Lang = 'en') => localizePath(`/services/${serviceSlug}/`, lang);
export const areaUrl = (areaSlug: string, lang: Lang = 'en') => localizePath(`/areas/${areaSlug}/`, lang);
export const comboUrl = (areaSlug: string, serviceSlug: string, lang: Lang = 'en') =>
  localizePath(`/services/${areaSlug}/${serviceSlug}/`, lang);
export const contactUrl = (lang: Lang = 'en') => localizePath('/contact/', lang);
export const aboutUrl = (lang: Lang = 'en') => localizePath('/about/', lang);
export const blogUrl = (slug?: string, lang: Lang = 'en') => localizePath(slug ? `/blog/${slug}/` : '/blog/', lang);
export const servicesUrl = (lang: Lang = 'en') => localizePath('/services/', lang);
export const areasUrl = (lang: Lang = 'en') => localizePath('/areas/', lang);
export const careersUrl = (lang: Lang = 'en') => localizePath('/careers/', lang);
export const homeUrl = (lang: Lang = 'en') => localizePath('/', lang);
export const projectsUrl = (slug?: string, lang: Lang = 'en') => localizePath(slug ? `/projects/${slug}/` : '/projects/', lang);
