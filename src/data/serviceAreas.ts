// ============================================================
// Service Areas Configuration
// ============================================================

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  population: number;
  lat: number;
  lng: number;
  description: string;
  featured: boolean;
  nearby: string[];
  responseTime: string;
  priority: 'primary' | 'secondary' | 'tertiary';
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    county: 'Abu Dhabi Emirate',
    state: 'AD',
    zipCodes: ['00000', '11111', '22222'],
    population: 1500000,
    lat: 24.4539,
    lng: 54.3773,
    description: 'Target International provides comprehensive MEP contracting and maintenance services throughout Abu Dhabi city, serving commercial towers, residential villas, hospitals, and industrial facilities with fast response times.',
    featured: true,
    nearby: ['western-region'],
    responseTime: '30-45 minutes',
    priority: 'primary',
  },
  {
    slug: 'western-region',
    name: 'Western Region',
    county: 'Abu Dhabi Emirate',
    state: 'AD',
    zipCodes: ['00000'],
    population: 250000,
    lat: 23.6391,
    lng: 53.7488,
    description: 'We extend our MEP services to the Western Region of Abu Dhabi, including Madinat Zayed, Ruwais, and Al Mirfa, delivering reliable HVAC, electrical, and plumbing solutions for remote projects and industrial zones.',
    featured: true,
    nearby: ['abu-dhabi'],
    responseTime: '60-90 minutes',
    priority: 'secondary',
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(slug: string): ServiceArea[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.nearby
    .map((nearbySlug) => getAreaBySlug(nearbySlug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  const area = getAreaBySlug(slug);
  if (area) return area.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getFeaturedAreas(): ServiceArea[] {
  return serviceAreas.filter((area) => area.featured);
}

export function getCounties(): string[] {
  return [...new Set(serviceAreas.map((area) => area.county))];
}
