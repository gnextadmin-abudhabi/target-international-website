// Photography assignments for pages whose data files carry no image field.

const areaImages: Record<string, string> = {
  'abu-dhabi': '/images/project-chiller.webp',
  'western-region': '/images/about-team.webp',
};

const blogImages: Record<string, string> = {
  'importance-of-tab-reports-uae': '/images/project-tab-report.webp',
  'signs-you-need-mep-amc': '/images/services/electrical.webp',
  'how-to-choose-mep-contractor-abu-dhabi': '/images/about-team.webp',
};

export const areaImage = (slug: string): string => areaImages[slug] ?? '/images/hero.webp';

export const blogImage = (slug: string): string => blogImages[slug] ?? '/images/project-tab-report.webp';
