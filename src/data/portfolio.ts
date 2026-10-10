// ============================================================
// Portfolio projects
// Media (images/videos) lives in portfolio-media.json, generated from the
// client's raw files in /source-media by the media optimisation script.
// ============================================================

import media from './portfolio-media.json';
import type { Lang } from '../i18n';

export interface PortfolioMedia {
  type: 'image' | 'video';
  src: string;
  thumb: string;
  poster?: string;
  w: number;
  h: number;
  group?: 'before' | 'after';
  cover?: boolean;
}

interface Localized {
  title: string;
  category: string;
  location: string;
  scope: string;
  summary: string;
}

export interface PortfolioProject {
  slug: string;
  /** Category key used for the filter bar */
  categoryKey: 'hvac' | 'villa' | 'outdoor' | 'maintenance';
  en: Localized;
  ar: Localized;
}

const projects: PortfolioProject[] = [
  {
    slug: 'building-full-hvac',
    categoryKey: 'hvac',
    en: {
      title: 'Building Construction Project',
      category: 'Full HVAC Solution',
      location: 'Abu Dhabi',
      scope: 'Full HVAC solution: ductwork, indoor units and services',
      summary:
        'Full HVAC solution for a building construction project, covering ductwork, indoor unit installation and ceiling services through to the finished, fully conditioned interiors.',
    },
    ar: {
      title: 'مشروع إنشاء مبنى',
      category: 'حل تكييف متكامل',
      location: 'أبوظبي',
      scope: 'حل تكييف متكامل: مجاري الهواء والوحدات الداخلية والخدمات',
      summary:
        'حل متكامل لأنظمة التكييف والتهوية لمشروع إنشاء مبنى، يشمل مجاري الهواء وتركيب الوحدات الداخلية وخدمات الأسقف وصولاً إلى المساحات الداخلية المكيّفة بالكامل.',
    },
  },
  {
    slug: 'private-villa',
    categoryKey: 'villa',
    en: {
      title: 'Private Villa',
      category: 'Villa HVAC',
      location: 'Abu Dhabi',
      scope: 'Concealed ducted HVAC with linear slot diffusers',
      summary:
        'Complete HVAC installation for a private villa, from ductwork and ceiling services during construction to the finished interiors with concealed linear slot diffusers.',
    },
    ar: {
      title: 'فيلا خاصة',
      category: 'تكييف الفلل',
      location: 'أبوظبي',
      scope: 'تكييف مخفي بمجاري هواء وناشرات خطية',
      summary:
        'تركيب متكامل لأنظمة التكييف والتهوية في فيلا خاصة، من أعمال مجاري الهواء والخدمات في الأسقف أثناء الإنشاء وحتى التشطيبات النهائية بناشرات هواء خطية مخفية.',
    },
  },
  {
    slug: 'al-ghaf-park',
    categoryKey: 'outdoor',
    en: {
      title: 'Al Ghaf Park',
      category: 'Outdoor Cooling',
      location: 'Khalifa City, Abu Dhabi',
      scope: 'Outdoor cooling for public park walkways',
      summary:
        'Outdoor cooling works for Al Ghaf Park in Khalifa City, keeping shaded public walkways and seating areas comfortable in the Abu Dhabi climate.',
    },
    ar: {
      title: 'حديقة الغاف',
      category: 'التبريد الخارجي',
      location: 'مدينة خليفة، أبوظبي',
      scope: 'تبريد خارجي لممرات الحديقة العامة',
      summary:
        'أعمال التبريد الخارجي لحديقة الغاف في مدينة خليفة، لتوفير أجواء مريحة في الممرات المظللة ومناطق الجلوس العامة في ظل مناخ أبوظبي.',
    },
  },
  {
    slug: 'bahya-villa',
    categoryKey: 'villa',
    en: {
      title: 'Bahya Villa',
      category: 'VRF Systems',
      location: 'Al Bahya, Abu Dhabi',
      scope: 'Samsung VRF units supply & installation',
      summary: 'Supply and installation of Samsung VRF air conditioning units for a residential villa in Al Bahya.',
    },
    ar: {
      title: 'فيلا الباهية',
      category: 'أنظمة VRF',
      location: 'الباهية، أبوظبي',
      scope: 'توريد وتركيب وحدات Samsung VRF',
      summary: 'توريد وتركيب وحدات تكييف Samsung VRF لفيلا سكنية في منطقة الباهية.',
    },
  },
  {
    slug: 'qubaisi-villa',
    categoryKey: 'villa',
    en: {
      title: 'Al Qubaisi Villa',
      category: 'Villa HVAC',
      location: 'Abu Dhabi',
      scope: 'Supply & installation of outdoor units',
      summary: 'Supply and installation of air conditioning outdoor units for the Al Qubaisi private villa.',
    },
    ar: {
      title: 'فيلا القبيسي',
      category: 'تكييف الفلل',
      location: 'أبوظبي',
      scope: 'توريد وتركيب الوحدات الخارجية',
      summary: 'توريد وتركيب الوحدات الخارجية لأنظمة التكييف في فيلا القبيسي الخاصة.',
    },
  },
  {
    slug: 'vip-project',
    categoryKey: 'hvac',
    en: {
      title: 'VIP Project',
      category: 'HVAC Works',
      location: 'Abu Dhabi',
      scope: 'HVAC works for a VIP residence and dining pavilion',
      summary: 'HVAC works for a VIP residence, including the climate control of its glass dining pavilion.',
    },
    ar: {
      title: 'مشروع كبار الشخصيات',
      category: 'أعمال التكييف',
      location: 'أبوظبي',
      scope: 'أعمال تكييف لمقر كبار الشخصيات وجناح الطعام',
      summary: 'أعمال التكييف والتهوية لمقر كبار الشخصيات، بما في ذلك التحكم في مناخ جناح الطعام الزجاجي.',
    },
  },
  {
    slug: 'duct-cleaning',
    categoryKey: 'maintenance',
    en: {
      title: 'Duct Cleaning & Sanitization',
      category: 'Maintenance',
      location: 'Abu Dhabi',
      scope: 'Duct cleaning with before / after inspection',
      summary: 'Duct cleaning and sanitization, documented with before and after inspection videos of the ductwork.',
    },
    ar: {
      title: 'تنظيف وتعقيم مجاري الهواء',
      category: 'الصيانة',
      location: 'أبوظبي',
      scope: 'تنظيف مجاري الهواء مع فحص قبل وبعد',
      summary: 'تنظيف وتعقيم مجاري الهواء، موثّق بمقاطع فيديو لفحص مجاري الهواء قبل التنظيف وبعده.',
    },
  },
];

export const categoryLabels: Record<PortfolioProject['categoryKey'], { en: string; ar: string }> = {
  hvac: { en: 'HVAC Projects', ar: 'مشاريع التكييف' },
  villa: { en: 'Villas', ar: 'الفلل' },
  outdoor: { en: 'Outdoor Cooling', ar: 'التبريد الخارجي' },
  maintenance: { en: 'Maintenance', ar: 'الصيانة' },
};

const allMedia = media as Record<string, PortfolioMedia[]>;

export function getProjects(lang: Lang) {
  return projects.map((p) => {
    const items = allMedia[p.slug] ?? [];
    const cover = items.find((m) => m.cover) ?? items[0];
    return {
      slug: p.slug,
      categoryKey: p.categoryKey,
      ...p[lang],
      media: items,
      cover,
      coverSrc: cover?.type === 'video' ? cover.poster! : cover?.src,
      coverThumb: cover?.thumb,
      photoCount: items.filter((m) => m.type === 'image').length,
      videoCount: items.filter((m) => m.type === 'video').length,
      hasBeforeAfter: items.some((m) => m.group === 'before') && items.some((m) => m.group === 'after'),
    };
  });
}

export type LocalizedProject = ReturnType<typeof getProjects>[number];

export function getProject(slug: string, lang: Lang) {
  return getProjects(lang).find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
