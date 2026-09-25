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
    {
      question: `How long has ${BUSINESS_NAME} been in business?`,
      answer: `${BUSINESS_NAME} has been serving Abu Dhabi since 2014. Over the past 11 years, we have completed more than 340 MEP projects with a combined contract value exceeding AED 180 million.`,
    },
    {
      question: `Do you use your own employees or subcontractors?`,
      answer: `We employ our own technicians, engineers, and supervisors. Our direct workforce includes 68 MEP professionals. We do not subcontract core installation work, which ensures quality control and accountability on every project.`,
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
      {
        question: `What energy savings can I expect from an AMC?`,
        answer: `Clients on our AMC program typically save 15 to 25 percent on annual HVAC energy costs through optimized system performance, clean coils, properly tensioned belts, and calibrated controls.`,
      },
      {
        question: `Do you maintain maintenance records for authority inspections?`,
        answer: `Yes, we maintain complete maintenance records, test certificates, and authority inspection documentation. These records are essential for building insurance, lease agreements, and regulatory audits.`,
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
      {
        question: `Can you design MEP systems for high-rise towers?`,
        answer: `Absolutely. We have designed and installed MEP systems for 26 high-rise towers in Abu Dhabi, including 4 buildings over 40 floors. Our designs account for stack effect, pressure zoning, and district cooling integration.`,
      },
      {
        question: `How do you ensure energy efficiency in your designs?`,
        answer: `We use accurate heat load calculations, select high-efficiency equipment, optimize duct sizing, and recommend BMS integration. Our designs typically achieve 15 to 25 percent lower energy consumption than code-minimum systems.`,
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
      {
        question: `What types of buildings benefit most from CFD analysis?`,
        answer: `High-rise towers with atriums, auditoriums, data centers, hospital operating theaters, kitchens with grease exhaust, and parking garages benefit most. Any building where airflow and thermal comfort are critical should consider CFD.`,
      },
      {
        question: `Can CFD analysis help reduce my building's energy costs?`,
        answer: `Yes. CFD-guided diffuser placement and sizing can reduce HVAC energy consumption by 8 to 18 percent by eliminating overcooling, short-circuiting, and inefficient airflow patterns.`,
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
      {
        question: `How much dust do you typically remove from ducts?`,
        answer: `In Abu Dhabi's dusty environment, a typical office building duct system collects 15 to 25 kilograms of dust per 1,000 square meters of floor area annually. We have removed over 42 metric tons of dust from client systems since 2014.`,
      },
      {
        question: `Can duct cleaning reduce my energy bills?`,
        answer: `Yes. Clean ducts reduce air resistance and fan load, typically saving 5 to 8 percent on HVAC energy costs. On a 100-ton system running 12 hours daily, that can mean AED 8,000 to AED 14,000 in annual savings.`,
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
      {
        question: `How many data points do you measure during TAB?`,
        answer: `For a typical 20,000-square-meter office building, we measure and record 250 to 400 data points. Every terminal device is measured, adjusted, and documented against design values.`,
      },
      {
        question: `Can TAB help reduce energy consumption?`,
        answer: `Absolutely. An unbalanced system can waste 20 to 40 percent of HVAC energy. Proper TAB ensures every zone receives exactly the right airflow, eliminating over-supply and reducing fan and pump energy.`,
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
      {
        question: `How do you deal with Abu Dhabi's hard water?`,
        answer: `Abu Dhabi water hardness averages 350 to 450 parts per million. We specify water softeners for villas and recommend them for commercial buildings with high hot water consumption. Our designs account for scale buildup in pipe sizing.`,
      },
      {
        question: `Do you provide water treatment systems?`,
        answer: `Yes, we design and install water treatment systems including softeners, filters, UV sterilization, and reverse-osmosis units to meet UAE potable water standards. Our installations include sampling points for periodic laboratory testing.`,
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
      {
        question: `What is thermal imaging and why is it important?`,
        answer: `Thermal imaging uses infrared cameras to detect hot spots in electrical panels and connections before they cause fires. Our annual surveys have identified and corrected 47 potential fire hazards for clients over the past 5 years.`,
      },
      {
        question: `Do you handle high-voltage installations?`,
        answer: `Yes, we hold a Class 1 electrical contractor license authorizing us to work on 11kV systems. We install transformers, switchgear, and HV cable terminations up to 2,500 kVA capacity.`,
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
        answer: `We perform accurate heat load calculations, select high-efficiency equipment with favorable EER/SEER ratings, optimize duct sizing, and install variable speed drives. We also recommend BMS integration for large projects.`,
      },
      {
        question: `What is your warranty policy on HVAC installations?`,
        answer: `We provide a 1-year comprehensive workmanship warranty on all HVAC installations. Manufacturer equipment warranties range from 1-5 years depending on the brand. Extended AMC packages are available for ongoing maintenance coverage.`,
      },
      {
        question: `How do you protect outdoor equipment from Abu Dhabi's harsh climate?`,
        answer: `We specify marine-grade epoxy coatings, copper coils with protective treatments, and oversized condensers rated for high ambient temperatures. For coastal towers, we use aluminum microchannel coils that resist salt corrosion.`,
      },
      {
        question: `Can you handle high-rise building HVAC?`,
        answer: `Yes, we have installed HVAC systems in 26 high-rise towers including 4 buildings over 40 floors. Our designs account for stack effect, pressure differentials, and district cooling integration.`,
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
  {
    author: 'Khalid Al Mansouri',
    rating: 5,
    text: 'We hired Target International for a complete electrical upgrade of our 15-storey office building on Hamdan Street. Their thermal imaging survey identified 12 overloaded circuits that our previous contractor missed. The upgrade was completed on schedule with zero downtime.',
    date: '2025-05-22',
    service: 'electrical',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Sara Al Dhaheri',
    rating: 5,
    text: 'The plumbing team replaced our entire drainage system in a 25-year-old villa in Al Bateen. They managed to complete the work while we were living in the house with minimal disruption. The new system works perfectly and we have had no blockages in 8 months.',
    date: '2025-02-14',
    service: 'plumbing',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Omar Engineering Consultants',
    rating: 5,
    text: 'Target International performed CFD analysis for our 28-storey tower design on Reem Island. Their simulation revealed critical airflow issues in the atrium that would have cost millions to fix post-construction. The report was delivered on time and presented clearly to the client.',
    date: '2025-08-03',
    service: 'cfd',
    area: 'abu-dhabi',
    source: 'LinkedIn',
  },
  {
    author: 'Majid Al Falahi',
    rating: 5,
    text: 'Our hotel duct cleaning project in the Tourist Club Area was handled professionally from start to finish. The before-and-after video documentation was impressive, and our guests have commented on improved air quality.',
    date: '2025-04-28',
    service: 'duct-cleaning',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Ruwais Industrial Supply',
    rating: 5,
    text: 'Target International has been our MEP maintenance contractor for 3 years at our Ruwais warehouse facility. Their response to emergency breakdowns is consistently under 75 minutes, even in the extreme summer heat. Reliable partner.',
    date: '2025-07-18',
    service: 'mep-amc',
    area: 'western-region',
    source: 'LinkedIn',
  },
  {
    author: 'Fatima Al Suwaidi',
    rating: 5,
    text: 'We contracted Target International for the complete MEP package of our new villa in Madinat Zayed. From design to handover, the process was smooth and transparent. The smart home automation they installed is fantastic.',
    date: '2025-06-05',
    service: 'mep-design-supply-installation',
    area: 'western-region',
    source: 'Google',
  },
  {
    author: 'Hassan Al Romaithi',
    rating: 4,
    text: 'The TAB report for our office building on Electra Street was comprehensive and accepted by the consultant on first submission. The team was professional and worked after hours to avoid disrupting our operations.',
    date: '2025-03-22',
    service: 'tab',
    area: 'abu-dhabi',
    source: 'Google',
  },
  {
    author: 'Al Ain Western Region Hospital',
    rating: 5,
    text: 'Target International installed the complete plumbing and drainage system for our new clinic in Madinat Zayed, including a centralized water treatment plant. Their attention to healthcare compliance requirements was excellent.',
    date: '2025-01-30',
    service: 'plumbing',
    area: 'western-region',
    source: 'LinkedIn',
  },
  {
    author: 'Yousef Al Hammadi',
    rating: 5,
    text: 'Our electrical panel upgrade and generator installation for the Ruwais camp was completed ahead of schedule. The team worked in extreme heat and dust conditions without compromising safety or quality.',
    date: '2025-08-15',
    service: 'electrical',
    area: 'western-region',
    source: 'Google',
  },
  {
    author: 'Zayed University Facilities',
    rating: 5,
    text: 'Target International performed duct cleaning across 12 buildings on our Abu Dhabi campus. The project was completed during semester break with no impact on classes. Air quality testing showed 72 percent improvement post-cleaning.',
    date: '2025-09-10',
    service: 'duct-cleaning',
    area: 'abu-dhabi',
    source: 'LinkedIn',
  },
  {
    author: 'Al Mirfa Beach Resort',
    rating: 4,
    text: 'The HVAC installation for our resort renovation was challenging due to the coastal salt environment. Target International specified marine-grade coatings and oversized condensers that have performed flawlessly through two summers.',
    date: '2025-05-05',
    service: 'hvac-works',
    area: 'western-region',
    source: 'Google',
  },
  {
    author: 'Emirates Steel Industries',
    rating: 5,
    text: 'The CFD smoke management simulation for our new warehouse facility was critical for fire authority approval. Target International modeled multiple fire scenarios and designed an extraction system that passed inspection on first review.',
    date: '2025-07-28',
    service: 'cfd',
    area: 'abu-dhabi',
    source: 'LinkedIn',
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
