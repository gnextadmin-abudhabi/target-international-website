// ============================================================
// Service Types Configuration
// ============================================================

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  emergency: boolean;
  featured: boolean;
  processSteps: ProcessStep[];
  priceRange: { min: number; max: number };
  keywords: string[];
  relatedServices: string[];
}

export const serviceTypes: ServiceType[] = [
  {
    slug: 'mep-amc',
    name: 'MEP Annual Maintenance Contracts',
    shortName: 'MEP AMC',
    description: 'Comprehensive annual maintenance contracts for all MEP systems including HVAC, electrical, and plumbing. Our AMC packages include scheduled preventive maintenance, emergency breakdown support, priority response, and detailed system health reporting to ensure your building operates at peak efficiency year-round.',
    shortDescription: 'Scheduled preventive maintenance, emergency support, and system health reporting for HVAC, electrical, and plumbing systems.',
    image: '/images/services/mep-amc.webp',
    icon: 'lucide:clipboard-check',
    emergency: false,
    featured: true,
    processSteps: [
      { title: 'Site Assessment', description: 'We conduct a thorough audit of your existing MEP systems to identify maintenance needs and create a customized AMC plan.' },
      { title: 'Contract Agreement', description: 'We define the scope, schedule, SLA response times, and pricing tailored to your building requirements and budget.' },
      { title: 'Scheduled Maintenance', description: 'Our certified technicians perform regular preventive maintenance visits, filter changes, system checks, and calibration.' },
      { title: 'Reporting & Optimization', description: 'You receive detailed maintenance reports and recommendations for system improvements and energy savings.' },
    ],
    priceRange: { min: 5000, max: 50000 },
    keywords: ['MEP maintenance', 'annual maintenance contract', 'HVAC AMC', 'building maintenance', 'preventive maintenance'],
    relatedServices: ['mep-design-supply-installation', 'hvac-works', 'tab'],
  },
  {
    slug: 'mep-design-supply-installation',
    name: 'MEP Design, Supply & Installation',
    shortName: 'MEP Design & Install',
    description: 'End-to-end MEP solutions from concept to commissioning. We provide professional design services, equipment supply from top-tier manufacturers, and expert installation of HVAC systems, electrical infrastructure, and plumbing networks for commercial, residential, and industrial projects across Abu Dhabi.',
    shortDescription: 'Complete MEP solutions from engineering design and equipment supply to professional installation and commissioning.',
    image: '/images/services/mep-design-supply-installation.webp',
    icon: 'lucide:drafting-compass',
    emergency: false,
    featured: true,
    processSteps: [
      { title: 'Design & Engineering', description: 'Our engineers create detailed MEP designs, heat load calculations, and shop drawings compliant with UAE regulations and ASHRAE standards.' },
      { title: 'Equipment Supply', description: 'We source high-quality equipment from trusted partners including LG, Mitsubishi, Daikin, Samsung, and Carrier at competitive prices.' },
      { title: 'Professional Installation', description: 'Our skilled installation teams execute the work to the highest standards, ensuring safety, efficiency, and compliance with local authorities.' },
      { title: 'Testing & Commissioning', description: 'We perform full system testing, balancing, and commissioning to verify performance before handover.' },
    ],
    priceRange: { min: 25000, max: 500000 },
    keywords: ['MEP design', 'HVAC installation', 'MEP contracting', 'building services', 'MEP supply'],
    relatedServices: ['mep-amc', 'cfd', 'hvac-works'],
  },
  {
    slug: 'cfd',
    name: 'CFD (Computer Flow Dynamics)',
    shortName: 'CFD Analysis',
    description: 'Advanced Computational Fluid Dynamics analysis for optimizing airflow, thermal comfort, and energy efficiency in buildings. Our CFD simulations help architects and engineers validate HVAC designs, predict temperature distribution, and ensure compliance with indoor air quality standards before construction begins.',
    shortDescription: 'Advanced airflow and thermal simulations to validate HVAC designs and optimize building performance before construction.',
    image: '/images/services/cfd.webp',
    icon: 'lucide:cpu',
    emergency: false,
    featured: false,
    processSteps: [
      { title: 'Model Preparation', description: 'We build a detailed 3D computational model of your building geometry and MEP systems for accurate simulation.' },
      { title: 'Simulation Setup', description: 'Our engineers define boundary conditions, airflow rates, heat loads, and environmental parameters for the analysis.' },
      { title: 'CFD Analysis', description: 'We run high-fidelity simulations to visualize airflow patterns, temperature distribution, and identify potential issues.' },
      { title: 'Reporting & Recommendations', description: 'You receive a comprehensive report with visualizations and actionable recommendations to optimize your design.' },
    ],
    priceRange: { min: 8000, max: 75000 },
    keywords: ['CFD analysis', 'computational fluid dynamics', 'airflow simulation', 'thermal comfort', 'HVAC design validation'],
    relatedServices: ['mep-design-supply-installation', 'hvac-works'],
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning & Sanitization',
    shortName: 'Duct Cleaning',
    description: 'Professional HVAC duct cleaning and sanitization services using rotary brush machines, high-powered vacuum units, and approved disinfectants. We remove dust, allergens, mold, and contaminants to improve indoor air quality, system efficiency, and occupant health in commercial and residential buildings.',
    shortDescription: 'Thorough duct cleaning and sanitization to improve indoor air quality and HVAC system efficiency.',
    image: '/images/services/duct-cleaning.webp',
    icon: 'lucide:wind',
    emergency: false,
    featured: false,
    processSteps: [
      { title: 'Inspection', description: 'We use cable cameras and inspection tools to assess the condition of your ductwork and identify contamination levels.' },
      { title: 'Cleaning', description: 'Our rotary brush machines and high-powered vacuums loosen and extract dust, debris, and buildup from the entire duct system.' },
      { title: 'Sanitization', description: 'We apply EPA-approved disinfectants and fogging treatments to eliminate bacteria, mold, and odors.' },
      { title: 'Final Verification', description: 'Post-cleaning inspection confirms the ducts are clean, and we provide a detailed report with before/after documentation.' },
    ],
    priceRange: { min: 3000, max: 35000 },
    keywords: ['duct cleaning', 'HVAC sanitization', 'indoor air quality', 'duct maintenance', 'ventilation cleaning'],
    relatedServices: ['mep-amc', 'hvac-works', 'tab'],
  },
  {
    slug: 'tab',
    name: 'TAB (Testing, Adjusting & Balancing) Reports',
    shortName: 'TAB Reports',
    description: 'Comprehensive Testing, Adjusting, and Balancing services for HVAC systems. Our certified technicians use precision instruments to measure airflow, water flow, and system performance, ensuring your installation operates at design specifications for optimal comfort, efficiency, and compliance with CIBSE and ASHRAE standards.',
    shortDescription: 'Certified testing, adjusting, and balancing of HVAC systems with detailed reports accepted by all major consultants.',
    image: '/images/services/tab.webp',
    icon: 'lucide:activity',
    emergency: false,
    featured: false,
    processSteps: [
      { title: 'Pre-Testing Survey', description: 'We review design specifications, inspect installed equipment, and establish baseline measurements.' },
      { title: 'Air & Water Balancing', description: 'Using calibrated anemometers, manometers, and flow meters, we balance air and water distribution to design values.' },
      { title: 'System Adjustments', description: 'We adjust dampers, valves, and controls to achieve optimal performance and uniform comfort throughout the building.' },
      { title: 'Certified TAB Report', description: 'You receive a detailed, consultant-approved TAB report documenting all measurements, adjustments, and compliance certifications.' },
    ],
    priceRange: { min: 5000, max: 45000 },
    keywords: ['TAB report', 'testing adjusting balancing', 'HVAC commissioning', 'air balancing', 'water balancing'],
    relatedServices: ['mep-design-supply-installation', 'hvac-works', 'mep-amc'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Services',
    shortName: 'Plumbing',
    description: 'Complete plumbing solutions including underground and aboveground drainage systems, domestic cold and hot water supply, sanitary fixtures, water heaters, booster pumps, and water treatment systems. We design, supply, and install plumbing infrastructure for villas, commercial buildings, and industrial facilities.',
    shortDescription: 'Full plumbing services including drainage, water supply, fixtures, and water treatment for all building types.',
    image: '/images/services/plumbing.webp',
    icon: 'lucide:droplets',
    emergency: true,
    featured: true,
    processSteps: [
      { title: 'Design & Planning', description: 'We create plumbing layouts, pipe routing plans, and fixture schedules based on your building requirements and local codes.' },
      { title: 'Material Supply', description: 'We procure high-quality pipes, fittings, fixtures, pumps, and water heaters from trusted manufacturers.' },
      { title: 'Installation', description: 'Our licensed plumbers install drainage, water supply, and sanitary systems with precision and compliance to UAE standards.' },
      { title: 'Testing & Handover', description: 'We perform pressure testing, leak detection, and system flushing before final inspection and handover.' },
    ],
    priceRange: { min: 8000, max: 120000 },
    keywords: ['plumbing services', 'drainage systems', 'water supply', 'sanitary installation', 'plumbing maintenance'],
    relatedServices: ['mep-design-supply-installation', 'mep-amc', 'electrical'],
  },
  {
    slug: 'electrical',
    name: 'Electrical Services',
    shortName: 'Electrical',
    description: 'Full-scope electrical contracting including HT/LT switchgear, transformers, distribution boards, cabling and termination, lighting and small power systems, fire alarm and emergency systems, low current systems (CCTV, access control, structured cabling), lightning protection, and smart home automation.',
    shortDescription: 'Complete electrical contracting from power distribution and lighting to low-current systems and smart home automation.',
    image: '/images/services/electrical.webp',
    icon: 'lucide:zap',
    emergency: true,
    featured: true,
    processSteps: [
      { title: 'System Design', description: 'We design electrical distribution, lighting, and low-current systems based on load calculations and project specifications.' },
      { title: 'Equipment Procurement', description: 'We supply transformers, switchgear, DBs, cables, and fixtures from approved manufacturers meeting UAE standards.' },
      { title: 'Installation & Termination', description: 'Our electrical teams install conduit, cabling, panels, and fixtures with strict adherence to safety regulations.' },
      { title: 'Testing & Certification', description: 'We conduct insulation resistance testing, continuity checks, and commissioning before authority approvals.' },
    ],
    priceRange: { min: 15000, max: 250000 },
    keywords: ['electrical contracting', 'low voltage', 'lighting installation', 'fire alarm', 'smart home'],
    relatedServices: ['mep-design-supply-installation', 'mep-amc', 'plumbing'],
  },
  {
    slug: 'hvac-works',
    name: 'HVAC Works',
    shortName: 'HVAC',
    description: 'Specialized HVAC services including heat load calculations, equipment selection, duct fabrication per SMACNA/DW 142 standards, chilled water and DX system installation, VRF/VRV systems, smoke management, staircase pressurization, noise and vibration control, and full commissioning in accordance with ASHRAE and CIBSE standards.',
    shortDescription: 'Specialized HVAC design, duct fabrication, system installation, and commissioning for all building types.',
    image: '/images/services/hvac-works.webp',
    icon: 'lucide:thermometer',
    emergency: true,
    featured: true,
    processSteps: [
      { title: 'Load Calculation & Design', description: 'We perform accurate heat load calculations and select optimal equipment for energy efficiency and comfort.' },
      { title: 'Duct Fabrication', description: 'Our in-house factory fabricates ducts from pre-insulated and galvanized sheets to SMACNA and DW 142 standards.' },
      { title: 'System Installation', description: 'We install DX, chilled water, and VRF systems with proper insulation, supports, and noise control measures.' },
      { title: 'Commissioning', description: 'We test, balance, and commission the system to ensure it meets design specifications and authority requirements.' },
    ],
    priceRange: { min: 20000, max: 400000 },
    keywords: ['HVAC installation', 'duct fabrication', 'chilled water system', 'VRF installation', 'air conditioning'],
    relatedServices: ['mep-design-supply-installation', 'tab', 'duct-cleaning', 'mep-amc'],
  },
];

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((service) => service.slug === slug);
}

export function getServiceName(slug: string): string {
  const service = getServiceBySlug(slug);
  if (service) return service.name;
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.emergency);
}

export function getFeaturedServices(): ServiceType[] {
  return serviceTypes.filter((service) => service.featured);
}

export function getRelatedServices(slug: string): ServiceType[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is ServiceType => s !== undefined);
}
