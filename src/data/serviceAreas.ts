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
  detailedDescription: string;
  localLandmarks: string[];
  buildingTypes: string[];
  climateNotes: string;
  keyStats: { label: string; value: string }[];
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
    description:
      'Target International provides comprehensive MEP contracting and maintenance services throughout Abu Dhabi city, serving commercial towers, residential villas, hospitals, and industrial facilities with fast response times.',
    detailedDescription: `Abu Dhabi is the capital of the United Arab Emirates and the largest city in the emirate, with a population of approximately 1.5 million residents and a built environment spanning over 400 square kilometers. The city is home to some of the region's most prestigious developments including the Corniche waterfront, Reem Island, Saadiyat Island, Al Maryah Island, and Yas Island. This concentration of high-value real estate creates exceptional demand for reliable MEP services.

The city's building stock is diverse: 180-plus high-rise towers over 20 floors, 12,000-plus residential villas, 85 hotels, 14 shopping malls, 6 major hospitals, and numerous government buildings, schools, and industrial facilities. Many buildings are less than 15 years old and were constructed during the 2008 to 2015 development boom, meaning their MEP systems are entering the critical 10-to-20-year maintenance window where major component replacement becomes necessary.

Abu Dhabi's climate is among the most challenging on earth for MEP systems. Summer temperatures regularly exceed 45 degrees Celsius with humidity reaching 90 percent during August and September. The city receives less than 100 millimeters of annual rainfall but experiences severe dust storms from the Empty Quarter that infiltrate buildings and clog HVAC filters within weeks. Coastal salt spray corrodes outdoor equipment, reducing condenser coil life by 40 percent compared to inland locations. These conditions make preventive maintenance not optional but essential for system survival.

Target International has been serving Abu Dhabi since 2014, completing over 240 projects in the city. Our Musaffah workshop and warehouse are located 20 minutes from central Abu Dhabi, enabling 30-to-45-minute emergency response times. We maintain a spare parts inventory of AED 450,000 specifically for Abu Dhabi contracts and employ 52 technicians who live within the city limits.`,
    localLandmarks: [
      'Sheikh Zayed Grand Mosque',
      'Emirates Palace',
      'Corniche Road',
      'Reem Island',
      'Saadiyat Island',
      'Al Maryah Island',
      'Yas Island',
      'Khalifa City',
      'Mussafah Industrial Area',
      'Abu Dhabi International Airport',
    ],
    buildingTypes: [
      'High-Rise Office Towers',
      'Luxury Residential Villas',
      'Hotels & Resorts',
      'Shopping Malls',
      'Hospitals & Clinics',
      'Government Buildings',
      'Industrial Warehouses',
      'Educational Institutions',
    ],
    climateNotes:
      'Summer temperatures exceed 45°C with 90% humidity. Dust storms from the Empty Quarter clog filters within 3-4 weeks. Coastal salt spray reduces outdoor equipment life by 40%. Peak cooling loads occur July-August at 120% of design capacity.',
    keyStats: [
      { label: 'Population', value: '1.5 Million' },
      { label: 'High-Rise Towers', value: '180+' },
      { label: 'Residential Villas', value: '12,000+' },
      { label: 'Hotels', value: '85' },
      { label: 'Shopping Malls', value: '14' },
      { label: 'Hospitals', value: '6 Major' },
      { label: 'Peak Summer Temp', value: '45°C+' },
      { label: 'Annual Rainfall', value: '<100mm' },
    ],
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
    description:
      'We extend our MEP services to the Western Region of Abu Dhabi, including Madinat Zayed, Ruwais, and Al Mirfa, delivering reliable HVAC, electrical, and plumbing solutions for remote projects and industrial zones.',
    detailedDescription: `The Western Region of Abu Dhabi Emirate, also known as Al Gharbia, covers approximately 60,000 square kilometers — roughly 80 percent of the emirate's land area — yet is home to only 250,000 residents. The region is defined by vast desert, significant oil and gas infrastructure, and rapidly growing urban centers including Madinat Zayed (the regional capital), Ruwais (home to the Ruwais Refinery, one of the world's largest oil refineries), Al Mirfa, and Sila. Despite its remote location, the Western Region represents some of the most technically demanding MEP work in the UAE.

The region's economy is dominated by the oil and gas sector. The Ruwais Industrial Complex, operated by ADNOC, processes 837,000 barrels of oil per day and employs over 20,000 workers. Supporting this industry are extensive worker accommodation camps, administrative buildings, maintenance workshops, and port facilities — all requiring robust MEP systems operating in extreme conditions. Beyond oil and gas, the Western Region has seen significant residential development, with new compounds in Madinat Zayed and Ruwais housing families working in the industrial sector.

The climate in the Western Region is even more severe than Abu Dhabi city. Summer temperatures routinely reach 50 degrees Celsius, and the proximity to open desert means sandstorms are more frequent and intense. Salinity is extremely high in coastal areas like Ruwais and Al Mirfa, where seawater total dissolved solids exceed 45,000 parts per million — nearly 50 percent saltier than typical seawater. This salinity destroys unprotected metal equipment within 3 to 5 years. Groundwater is generally non-potable and requires extensive treatment for any building use.

Target International has been serving the Western Region since 2016, completing 42 projects including 8 industrial MEP packages, 12 residential compounds, 6 commercial buildings, and 4 remote camp facilities. We maintain dedicated service teams in Madinat Zayed and Ruwais to ensure 60-to-90-minute response times across the region. Our Musaffah workshop fabricates ductwork and assembles electrical panels for Western Region projects with next-day delivery.`,
    localLandmarks: [
      'Ruwais Refinery & Industrial Complex',
      'Madinat Zayed City Center',
      'Al Mirfa Beach & Port',
      'Sila Border Crossing',
      'Liwa Oasis',
      'Qasr Al Sarab Resort',
      'Ruwais Port',
      'ADNOC Industrial City',
      'Western Region Municipality',
      'Zayed University Western Campus',
    ],
    buildingTypes: [
      'Industrial Facilities & Refineries',
      'Worker Accommodation Camps',
      'Residential Compounds',
      'Commercial Buildings',
      'Port & Logistics Facilities',
      'Government Offices',
      'Schools & Clinics',
      'Remote Desert Camps',
    ],
    climateNotes:
      'Temperatures reach 50°C in summer. Sandstorms are more frequent and severe than Abu Dhabi city. Coastal salinity is 50% higher than typical seawater, destroying unprotected metal in 3-5 years. Groundwater requires extensive treatment.',
    keyStats: [
      { label: 'Population', value: '250,000' },
      { label: 'Land Area', value: '60,000 km²' },
      { label: 'Oil Processed Daily', value: '837K Barrels' },
      { label: 'Industrial Workers', value: '20,000+' },
      { label: 'Peak Summer Temp', value: '50°C' },
      { label: 'Seawater Salinity', value: '45,000+ ppm' },
      { label: 'Projects Completed', value: '42' },
      { label: 'Response Time', value: '60-90 min' },
    ],
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
