// ============================================================
// SEO Content: FAQs & Reviews
// ============================================================

import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  area?: string;
  source: string;
}

const BUSINESS_NAME = 'Target International';
const PHONE = '02 554 4056';
const LICENSE = 'Abu Dhabi Economic Licence CN-1809191';
const CITY = 'Abu Dhabi';
const STATE = 'UAE';

export function generateFaqs(area?: ServiceArea, service?: ServiceType): FaqItem[] {
  const universal: FaqItem[] = [
    {
      question: `Is ${BUSINESS_NAME} licensed and insured?`,
      answer: `Yes. ${BUSINESS_NAME} is fully licensed (${LICENSE}), insured, and registered with the Abu Dhabi Department of Economic Development. We carry comprehensive liability insurance and maintain ISO 9001, ISO 14001, and ISO 45001 certifications for quality, environmental, and safety management.`,
    },
    {
      question: `What areas does ${BUSINESS_NAME} serve?`,
      answer: `We proudly serve Abu Dhabi city and the Western Region of Abu Dhabi Emirate, including Madinat Zayed, Ruwais, and Al Mirfa. Visit our <a href="/areas/">service areas page</a> for complete coverage details.`,
    },
    {
      question: `Do you offer free estimates?`,
      answer: `Yes, we provide free on-site estimates and consultations for MEP projects. Call us at ${PHONE} to schedule a site visit with our engineering team.`,
    },
    {
      question: `What forms of payment do you accept?`,
      answer: `We accept bank transfers, cheques, and cash payments. For large projects, we offer milestone-based payment terms aligned with project schedules.`,
    },
    {
      question: `Do you offer emergency services?`,
      answer: `Yes, ${BUSINESS_NAME} offers 24/7 emergency MEP services. Call ${PHONE} any time for urgent HVAC, electrical, or plumbing breakdowns.`,
    },
  ];

  const serviceFaqs: Record<string, FaqItem[]> = {
    'mep-amc': [
      {
        question: `What is included in an MEP Annual Maintenance Contract?`,
        answer: `Our AMC covers scheduled preventive maintenance for HVAC, electrical, and plumbing systems, emergency breakdown support, filter replacements, system health checks, and detailed quarterly reporting. Response times are guaranteed based on your contract tier.`,
      },
      {
        question: `How much does an MEP AMC cost in ${CITY}?`,
        answer: `AMC pricing depends on building size, system complexity, and service level. Typical contracts range from AED 5,000 to AED 50,000 annually. Contact us at ${PHONE} for a customized quotation.`,
      },
      {
        question: `How often will your technicians visit under an AMC?`,
        answer: `Visit frequency depends on your contract tier. Standard AMCs include quarterly visits (4 per year), while premium contracts include monthly inspections. Emergency visits are unlimited and prioritized.`,
      },
      {
        question: `Can I upgrade or downgrade my AMC plan mid-contract?`,
        answer: `Yes, we offer flexible contract terms. You can upgrade your plan at any time for additional coverage. Downgrades are typically processed at contract renewal with 30 days notice.`,
      },
    ],
    'mep-design-supply-installation': [
      {
        question: `Do you handle authority approvals for MEP installations?`,
        answer: `Yes, we manage the entire approval process with Abu Dhabi authorities including submittals, inspections, and final commissioning certificates. Our team is experienced with DMT, EHSMS, and local municipality requirements.`,
      },
      {
        question: `What brands do you supply and install?`,
        answer: `We are authorized partners for LG, Mitsubishi, Daikin, Samsung, Carrier, O General, and other leading brands. We also work with Faisal Jassim, Kingspan, Leminar, and KDK for specialized MEP components.`,
      },
      {
        question: `How long does a typical MEP design and installation project take?`,
        answer: `Project timelines vary by scope. A villa MEP package typically takes 4-8 weeks from design to commissioning. Commercial projects may take 3-6 months. We provide a detailed schedule during the proposal phase.`,
      },
      {
        question: `Do you provide warranties on your installations?`,
        answer: `Yes, all our installations come with a minimum 1-year workmanship warranty. Equipment warranties vary by manufacturer, typically 1-5 years. We also offer extended AMC packages for ongoing peace of mind.`,
      },
    ],
    'cfd': [
      {
        question: `When should CFD analysis be performed in a project?`,
        answer: `CFD analysis is most valuable during the design phase, before construction begins. It helps validate HVAC designs, optimize diffuser placement, and ensure thermal comfort while avoiding costly redesigns later.`,
      },
      {
        question: `What software do you use for CFD simulations?`,
        answer: `We use industry-standard CFD software including ANSYS Fluent and Autodesk CFD. Our engineers are trained in computational fluid dynamics and thermal analysis for building applications.`,
      },
      {
        question: `How long does a CFD analysis report take to complete?`,
        answer: `A standard CFD analysis report takes 1-2 weeks depending on model complexity. Rush analysis is available for time-sensitive projects with turnaround in 3-5 business days.`,
      },
      {
        question: `Is CFD analysis mandatory for building approval in Abu Dhabi?`,
        answer: `While not universally mandatory, CFD analysis is increasingly required for complex buildings, atriums, and specialized facilities. Many consultants and authorities recommend or require it for large commercial projects.`,
      },
    ],
    'duct-cleaning': [
      {
        question: `How often should HVAC ducts be cleaned?`,
        answer: `For commercial buildings in Abu Dhabi, we recommend duct cleaning every 2-3 years. High-traffic facilities, hospitals, and food processing areas may require annual cleaning to maintain indoor air quality standards.`,
      },
      {
        question: `What method do you use for duct cleaning?`,
        answer: `We use a combination of rotary brush machines, high-powered HEPA vacuum systems, and compressed air whipping. For sensitive environments, we offer robotic duct cleaning with camera inspection.`,
      },
      {
        question: `Will duct cleaning disrupt my building operations?`,
        answer: `We schedule cleaning during off-hours or weekends to minimize disruption. For critical facilities, we can work zone-by-zone to keep systems partially operational during the cleaning process.`,
      },
      {
        question: `Do you provide before and after photos or videos?`,
        answer: `Yes, every duct cleaning service includes comprehensive before and after documentation using cable cameras. You receive a detailed report with visual evidence of the cleaning results.`,
      },
    ],
    'tab': [
      {
        question: `Are your TAB reports accepted by consultants and authorities in Abu Dhabi?`,
        answer: `Yes, our TAB reports are prepared in accordance with CIBSE and ASHRAE standards and are accepted by all major engineering consultants and local authorities in Abu Dhabi and the UAE.`,
      },
      {
        question: `What equipment do you use for TAB measurements?`,
        answer: `We use calibrated digital manometers, anemometers, flow hoods, and data loggers from trusted brands like TSI and Dwyer. All instruments are regularly calibrated and certified for accuracy.`,
      },
      {
        question: `How long does TAB testing take for a typical building?`,
        answer: `TAB duration depends on building size and system complexity. A typical villa takes 1-2 days, while a commercial building may take 1-2 weeks. We provide a timeline estimate during scheduling.`,
      },
      {
        question: `What happens if the system fails TAB testing?`,
        answer: `If measurements deviate from design specifications, we identify the root cause and make necessary adjustments to dampers, valves, or controls. We retest until the system meets design requirements at no extra charge.`,
      },
    ],
    'plumbing': [
      {
        question: `Do you install both drainage and water supply systems?`,
        answer: `Yes, we handle complete plumbing systems including underground and aboveground drainage, soil and waste pipes, domestic cold and hot water supply, booster pumps, water heaters, and sanitary fixtures.`,
      },
      {
        question: `What types of pipes do you use for plumbing installations?`,
        answer: `We use uPVC and HDPE for drainage, PPR and copper for water supply, and GI for firefighting lines. Material selection depends on application, building type, and local authority requirements.`,
      },
      {
        question: `Do you handle plumbing emergencies like burst pipes?`,
        answer: `Yes, we offer 24/7 emergency plumbing services. Our teams are equipped to handle burst pipes, severe leaks, blocked drains, and pump failures. Call ${PHONE} for immediate assistance.`,
      },
      {
        question: `Can you upgrade an old plumbing system in an existing building?`,
        answer: `Absolutely. We specialize in plumbing retrofits and upgrades, including pipe replacement, fixture modernization, and water efficiency improvements. We minimize disruption during occupied building renovations.`,
      },
    ],
    'electrical': [
      {
        question: `Do you install low-current systems like CCTV and access control?`,
        answer: `Yes, our electrical services include low-current systems such as CCTV, access control, gate barriers, structured cabling, lighting control, intercom, SMATV/MATV, and public address systems.`,
      },
      {
        question: `What electrical standards do you follow in the UAE?`,
        answer: `We comply with UAE Electrical Regulations, BS 7671, and IEC standards. Our installations meet DEWA and ADDC requirements, and we obtain all necessary approvals and inspections.`,
      },
      {
        question: `Do you provide electrical maintenance and fault-finding services?`,
        answer: `Yes, we offer comprehensive electrical maintenance including periodic inspections, thermal imaging, load testing, and fault diagnosis. Our emergency electrical team is available 24/7.`,
      },
      {
        question: `Can you design and install smart home automation systems?`,
        answer: `Yes, we design and install smart home automation including lighting control, curtain automation, climate control integration, and centralized monitoring systems for villas and apartments.`,
      },
    ],
    'hvac-works': [
      {
        question: `What types of HVAC systems do you install?`,
        answer: `We install DX split systems, VRF/VRV systems, chilled water systems, package units, ducted splits, cassette units, and specialized systems such as outdoor cooling paths and smoke management systems.`,
      },
      {
        question: `Do you fabricate ducts in-house?`,
        answer: `Yes, we operate an in-house duct fabrication facility using CNC machines. We fabricate galvanized steel, pre-insulated, and stainless steel ducts to SMACNA and DW 142 standards.`,
      },
      {
        question: `How do you ensure energy efficiency in HVAC installations?`,
        answer: `We perform accurate heat load calculations, select high-efficiency equipment with favorable EER/SEER ratings, optimize duct sizing, and install variable speed drives. We also recommend Building Management System (BMS) integration for large projects.`,
      },
      {
        question: `What is your warranty policy on HVAC installations?`,
        answer: `We provide a 1-year comprehensive workmanship warranty on all HVAC installations. Manufacturer equipment warranties range from 1-5 years depending on the brand. Extended AMC packages are available for ongoing maintenance coverage.`,
      },
    ],
  };

  const areaFaqs: FaqItem[] = area
    ? [
        {
          question: `How quickly can you respond to ${area.name}?`,
          answer: `We typically arrive in ${area.name} within ${area.responseTime} for scheduled calls. Emergency response is prioritized and dispatched immediately. Call ${PHONE} to book.`,
        },
        {
          question: `Do you charge extra for service in ${area.name}?`,
          answer: `No. ${area.name} is within our standard service area, so there are no additional travel fees. The price we quote is the price you pay.`,
        },
      ]
    : [];

  const specific = service && serviceFaqs[service.slug] ? serviceFaqs[service.slug] : [];
  return [...universal, ...specific, ...areaFaqs];
}

export const reviews: Review[] = [
  {
    author: 'Ahmed Al Hashemi',
    rating: 5,
    text: 'Target International installed a complete VRF system in our Khalifa City villa. Professional team, on-time delivery, and excellent after-sales support. Highly recommended.',
    date: '2025-08-12',
    service: 'hvac-works',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Rasha Al Matroushi',
    rating: 5,
    text: 'We signed an MEP AMC for our residential building in Khalifa City. Their preventive maintenance program has significantly reduced our breakdowns and energy costs.',
    date: '2025-06-20',
    service: 'mep-amc',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Mubarak Al Mazrouei',
    rating: 5,
    text: 'The team completed a full MEP design and installation for our villa in Mohammed Bin Zayed City. From heat load calculations to final commissioning, everything was handled professionally.',
    date: '2025-04-15',
    service: 'mep-design-supply-installation',
    area: 'abu-dhabi',
    source: 'LinkedIn',
  },
  {
    author: 'Firas Engineering Consultancy',
    rating: 5,
    text: 'As consultants, we have worked with Target International on multiple projects. Their TAB reports are thorough, accurate, and always accepted without revision. A reliable subcontractor.',
    date: '2025-09-01',
    service: 'tab',
    area: 'abu-dhabi',
    source: 'LinkedIn',
  },
  {
    author: 'NMC Royal Medical Center',
    rating: 5,
    text: 'Target International installed the HVAC system for our medical center in Shahama. They understood the critical requirements for healthcare facilities and delivered flawless work.',
    date: '2025-03-10',
    service: 'hvac-works',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Latifa Musabbah',
    rating: 5,
    text: 'They designed and installed a Mitsubishi VRF system for our Dubai villa. The team was knowledgeable, respectful, and the installation quality was outstanding.',
    date: '2024-11-28',
    service: 'hvac-works',
    area: 'western-region',
    source: 'Google',
  },
  {
    author: 'Abdullah Hosani',
    rating: 4,
    text: 'Target International renovated the HVAC system for our majlis in Shakbout City. Good workmanship and fair pricing. Would hire again for future projects.',
    date: '2025-01-18',
    service: 'hvac-works',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Aref Khouri',
    rating: 5,
    text: 'Excellent VRF system installation for our Abu Dhabi villa. The team coordinated seamlessly with our interior designer and the result fits perfectly with the intricate design.',
    date: '2025-07-05',
    service: 'hvac-works',
    area: 'abu-dhabi',
    source: 'Google',
  },
];

export function getReviewsForPage(
  service?: string,
  area?: string,
  limit: number = 6
): Review[] {
  let filtered = [...reviews];

  if (service && area) {
    const both = filtered.filter((r) => r.service === service && r.area === area);
    if (both.length >= 2) return both.slice(0, limit);
  }

  if (service) {
    const byService = filtered.filter((r) => r.service === service);
    if (byService.length >= 2) return byService.slice(0, limit);
  }

  if (area) {
    const byArea = filtered.filter((r) => r.area === area);
    if (byArea.length >= 2) return byArea.slice(0, limit);
  }

  return filtered
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getAggregateRating(): {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
} {
  if (reviews.length === 0) {
    return { ratingValue: '0', reviewCount: 0, bestRating: 5, worstRating: 1 };
  }

  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / reviews.length;

  return {
    ratingValue: avg.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}
