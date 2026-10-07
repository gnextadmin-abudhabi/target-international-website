// ============================================================
// Localised data access: the same records in English or Arabic.
// Arabic translations only override text fields; slugs, images,
// icons and flags always come from the English source data.
// ============================================================

import type { Lang } from './index';
import { business, type Business } from '../data/business';
import { serviceTypes, type ServiceType } from '../data/serviceTypes';
import { serviceAreas, type ServiceArea } from '../data/serviceAreas';
import { generateFaqs, reviews, getReviewsForPage, type FaqItem, type Review } from '../data/seoContent';
import { businessAr } from '../data/ar/business';
import { servicesA } from '../data/ar/services-a';
import { servicesB } from '../data/ar/services-b';
import { areasAr } from '../data/ar/areas';
import { generateFaqsAr, reviewsAr } from '../data/ar/seoContent';

const servicesAr = { ...servicesA, ...servicesB };

export function getBusiness(lang: Lang): Business {
  return lang === 'ar' ? { ...business, ...businessAr } : business;
}

export function getServices(lang: Lang): ServiceType[] {
  if (lang === 'en') return serviceTypes;
  return serviceTypes.map((s) => ({ ...s, ...servicesAr[s.slug] }));
}

export function getService(slug: string, lang: Lang): ServiceType | undefined {
  return getServices(lang).find((s) => s.slug === slug);
}

export function getAreas(lang: Lang): ServiceArea[] {
  if (lang === 'en') return serviceAreas;
  return serviceAreas.map((a) => ({ ...a, ...areasAr[a.slug] }));
}

export function getArea(slug: string, lang: Lang): ServiceArea | undefined {
  return getAreas(lang).find((a) => a.slug === slug);
}

export function getNearby(slug: string, lang: Lang): ServiceArea[] {
  const area = getArea(slug, lang);
  if (!area) return [];
  return area.nearby
    .map((s) => getArea(s, lang))
    .filter((a): a is ServiceArea => a !== undefined);
}

/** FAQs for a page; pass the already-localised area/service records. */
export function getFaqs(lang: Lang, area?: ServiceArea, service?: ServiceType): FaqItem[] {
  return lang === 'ar' ? generateFaqsAr(area, service) : generateFaqs(area, service);
}

export function getReviews(lang: Lang): Review[] {
  return lang === 'ar' ? reviewsAr : reviews;
}

/** Most relevant reviews for a page, in the page language (Arabic reviews mirror the English order). */
export function getPageReviews(lang: Lang, serviceSlug?: string, areaSlug?: string, limit = 3): Review[] {
  const picked = getReviewsForPage(serviceSlug, areaSlug, limit);
  if (lang === 'en') return picked;
  return picked.map((r) => reviewsAr[reviews.indexOf(r)] ?? r);
}

export function averageRating(): number {
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}
