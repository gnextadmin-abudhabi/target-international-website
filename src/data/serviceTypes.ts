// ============================================================
// Service Types Configuration
// ============================================================

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface KeyStat {
  label: string;
  value: string;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: Benefit[];
  industriesServed: string[];
  equipmentUsed: string[];
  standardsCompliance: string[];
  keyStats: KeyStat[];
  projectExamples: string[];
  areaSpecificContent: Record<string, string>;
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
    description:
      'Comprehensive annual maintenance contracts for all MEP systems including HVAC, electrical, and plumbing. Our AMC packages include scheduled preventive maintenance, emergency breakdown support, priority response, and detailed system health reporting to ensure your building operates at peak efficiency year-round.',
    shortDescription:
      'Scheduled preventive maintenance, emergency support, and system health reporting for HVAC, electrical, and plumbing systems.',
    detailedDescription: `MEP Annual Maintenance Contracts from Target International are designed to eliminate unexpected breakdowns, reduce operational costs, and extend the useful life of your building's mechanical, electrical, and plumbing systems. Since 2014, we have managed AMC portfolios covering more than 2.5 million square feet of built-up area across Abu Dhabi and the Western Region.

Our AMC programs begin with a comprehensive baseline audit of every MEP asset in your facility. We document equipment ages, operating hours, filter schedules, refrigerant levels, electrical load profiles, and plumbing pressure readings. This audit typically covers 150 to 400 individual data points depending on building size. From this data, we build a customized preventive maintenance schedule aligned with manufacturer recommendations, ASHRAE guidelines, and UAE regulatory requirements.

Under a standard AMC, our technicians visit your property 4 to 12 times per year depending on the contract tier. Each visit includes HVAC filter replacement or cleaning, coil inspection, belt tension checks, electrical panel torquing, leak detection, pump performance verification, and thermostat calibration. We also perform quarterly energy analytics to track consumption patterns and identify efficiency degradation early. Clients on our AMC program experience up to 85 percent fewer emergency breakdowns and typically save 15 to 25 percent on annual energy costs through optimized system performance.

Emergency support is included in every AMC tier. When a breakdown occurs, our dispatch center prioritizes AMC clients with guaranteed response times of 30 to 45 minutes in Abu Dhabi city and 60 to 90 minutes in the Western Region. Our service vehicles carry AED 250,000 worth of common spare parts, enabling us to complete 78 percent of repairs on the first visit without waiting for material delivery.`,
    benefits: [
      {
        title: 'Reduce Breakdowns by Up to 85%',
        description:
          'Scheduled preventive maintenance catches wear and tear before it causes system failure. Our AMC clients report dramatically fewer emergency callouts compared to reactive maintenance programs.',
      },
      {
        title: 'Cut Energy Costs by 15-25%',
        description:
          'Clean coils, properly tensioned belts, calibrated controls, and optimized setpoints reduce electricity consumption. On a 500-kilowatt cooling load, that can mean savings of AED 45,000 to AED 75,000 per year.',
      },
      {
        title: 'Extend Equipment Life by 30%',
        description:
          'Well-maintained chillers, package units, and split systems last 12 to 15 years instead of 8 to 10. Deferred capital replacement frees resources for other building improvements.',
      },
      {
        title: 'Predictable Monthly Plans',
        description:
          'Convert unpredictable repair expenses into a fixed monthly fee. Our AMC contracts include labor, routine consumables, and travel with no hidden charges.',
      },
      {
        title: 'Priority Emergency Response',
        description:
          'AMC clients receive priority dispatch 24 hours a day, 7 days a week. Average emergency response time is 38 minutes in Abu Dhabi and 72 minutes in the Western Region.',
      },
      {
        title: 'Compliance & Documentation',
        description:
          'We maintain complete maintenance records, test certificates, and authority inspection documentation required for building insurance, lease agreements, and regulatory audits.',
      },
    ],
    industriesServed: [
      'Commercial Office Towers',
      'Residential Apartment Buildings',
      'Healthcare Facilities & Clinics',
      'Industrial Warehouses & Factories',
      'Retail Malls & Showrooms',
      'Educational Institutions',
      'Hospitality & Hotels',
      'Government Buildings',
    ],
    equipmentUsed: [
      'Chillers & Cooling Towers',
      'Package & Split AC Units',
      'VRF / VRV Systems',
      'Air Handling Units (AHU)',
      'Exhaust & Ventilation Fans',
      'Electrical Distribution Boards',
      'Transformers & Switchgear',
      'Booster Pumps & Water Heaters',
      'BMS & Control Systems',
      'Fire Alarm & Suppression Systems',
    ],
    standardsCompliance: [
      'ASHRAE Standard 62.1 (Ventilation)',
      'ASHRAE Standard 90.1 (Energy)',
      'CIBSE Guidelines',
      'UAE Fire & Life Safety Code',
      'ISO 9001 Quality Management',
      'ISO 14001 Environmental Management',
      'ISO 45001 Occupational Health & Safety',
      'UAE Electrical Regulations',
    ],
    keyStats: [
      { label: 'Square Feet Under AMC', value: '2.5M+' },
      { label: 'Fewer Breakdowns', value: '85%' },
      { label: 'Energy Savings', value: '15-25%' },
      { label: 'First-Visit Fix Rate', value: '78%' },
      { label: 'Equipment Life Extension', value: '30%' },
      { label: 'Avg. Emergency Response', value: '38 min' },
    ],
    projectExamples: [
      'Annual MEP AMC for 42-floor commercial tower on Corniche Road',
      'Quarterly HVAC maintenance for 180-villa residential compound in Khalifa City',
      'Monthly MEP checks for 3 industrial warehouses in Mussafah',
      'Bi-annual maintenance for private hospital HVAC and electrical systems',
      'Comprehensive AMC for retail mall with 85 tenants in Al Wahda',
    ],
    areaSpecificContent: {
      'abu-dhabi': `In Abu Dhabi city, where summer temperatures regularly exceed 45 degrees Celsius and humidity climbs above 90 percent, MEP systems operate under extreme stress for 8 months of the year. Our Abu Dhabi AMC clients benefit from accelerated filter replacement schedules — every 3 weeks instead of monthly — to combat sand and dust infiltration. We also monitor chilled water system performance closely during July and August when cooling loads peak at 120 percent of design capacity. Our Musaffah workshop maintains a dedicated spare parts inventory valued at AED 450,000 specifically for Abu Dhabi AMC contracts, ensuring rapid replacement of compressors, motors, and control boards without overseas shipping delays.`,
      'western-region': `The Western Region presents unique maintenance challenges: high salinity accelerates corrosion of outdoor condenser coils, sandstorms blanket equipment in fine abrasive dust, and remote locations make emergency support difficult. Our Western Region AMC programs include quarterly deep coil cleaning with specialized corrosion inhibitors, protective equipment covers for forecasted sandstorms, and strategically stationed service teams in Madinat Zayed and Ruwais to guarantee 60-to-90-minute response times across all western communities. We have completed AMC contracts for 6 industrial facilities in Ruwais and 4 residential compounds in Madinat Zayed.`,
    },
    image: '/images/services/mep-amc.webp',
    icon: 'lucide:clipboard-check',
    emergency: false,
    featured: true,
    processSteps: [
      {
        title: 'Site Assessment',
        description:
          'We conduct a thorough audit of your existing MEP systems to identify maintenance needs and create a customized AMC plan.',
      },
      {
        title: 'Contract Agreement',
        description:
          'We define the scope, schedule, SLA response times, and service terms tailored to your building requirements.',
      },
      {
        title: 'Scheduled Maintenance',
        description:
          'Our certified technicians perform regular preventive maintenance visits, filter changes, system checks, and calibration.',
      },
      {
        title: 'Reporting & Optimization',
        description:
          'You receive detailed maintenance reports and recommendations for system improvements and energy savings.',
      },
    ],
    priceRange: { min: 5000, max: 50000 },
    keywords: [
      'MEP maintenance',
      'annual maintenance contract',
      'HVAC AMC',
      'building maintenance',
      'preventive maintenance',
    ],
    relatedServices: ['mep-design-supply-installation', 'hvac-works', 'tab'],
  },
  {
    slug: 'mep-design-supply-installation',
    name: 'MEP Design, Supply & Installation',
    shortName: 'MEP Design & Install',
    description:
      'End-to-end MEP solutions from concept to commissioning. We provide professional design services, equipment supply from top-tier manufacturers, and expert installation of HVAC systems, electrical infrastructure, and plumbing networks for commercial, residential, and industrial projects across Abu Dhabi.',
    shortDescription:
      'Complete MEP solutions from engineering design and equipment supply to professional installation and commissioning.',
    detailedDescription: `Target International delivers turnkey MEP design, supply, and installation services for projects ranging from single villas to multi-tower commercial developments. Since 2014, we have completed more than 340 MEP projects across Abu Dhabi and the Western Region with a combined mechanical and electrical contract value exceeding AED 180 million. Our in-house engineering team produces detailed design drawings, heat load calculations, shop drawings, and as-built documentation compliant with all UAE authority requirements.

Our design process begins with a thorough site survey and client consultation. For HVAC, we perform heat load calculations using HAP and Carrier E20 software, accounting for Abu Dhabi's extreme summer design conditions of 46 degrees Celsius dry bulb and 32 degrees Celsius wet bulb. We size equipment precisely — oversizing by no more than 10 percent — to avoid the short-cycling and humidity control problems common in poorly designed Gulf region installations. Electrical designs include complete load flow analysis, short-circuit calculations, and voltage drop verification using ETAP and Dialux software.

Equipment supply is sourced through authorized distribution agreements with leading manufacturers. We are approved partners for LG, Mitsubishi Electric, Daikin, Carrier, O General, Samsung, and York for HVAC equipment. For electrical systems, we source from ABB, Schneider Electric, Legrand, and Siemens. All equipment carries manufacturer warranties of 1 to 5 years and is delivered with complete submittal packages for authority approval.

Installation is executed by our directly employed workforce of 68 technicians, engineers, and supervisors. We do not subcontract core MEP installation work. Our teams hold valid Abu Dhabi work permits, third-party liability insurance, and competency certifications from the Abu Dhabi Department of Municipalities and Transport. Every project follows our ISO 9001-certified quality plan with hold points for client inspection, third-party testing, and authority witnessing.`,
    benefits: [
      {
        title: 'Single-Point Accountability',
        description:
          'One contractor handles design, procurement, installation, and commissioning. No finger-pointing between designer and installer. Our warranty covers the entire system.',
      },
      {
        title: 'Authority Approval Management',
        description:
          'We manage the entire submittal, inspection, and commissioning certificate process with DMT, EHSMS, and local municipalities. 97 percent of our projects pass authority inspection on the first attempt.',
      },
      {
        title: 'Volume Equipment Savings',
        description:
          'Our annual purchasing volume of AED 25 million+ with major manufacturers unlocks rates 8 to 15 percent below market. We pass these savings directly to our clients.',
      },
      {
        title: 'In-House Installation Teams',
        description:
          'Our 68-person directly employed workforce ensures quality control, schedule adherence, and safety compliance that subcontractor-dependent firms cannot match.',
      },
      {
        title: 'Design Optimization',
        description:
          'We use CFD analysis, energy modeling, and value engineering to reduce initial investment by 5 to 12 percent while improving long-term operating efficiency.',
      },
      {
        title: 'Warranty & After-Sales Support',
        description:
          'All installations include a 1-year comprehensive workmanship warranty plus manufacturer equipment warranties. AMC packages are available for seamless transition to operations.',
      },
    ],
    industriesServed: [
      'Commercial Office Buildings',
      'Residential Villas & Compounds',
      'Industrial Facilities & Warehouses',
      'Healthcare & Medical Centers',
      'Retail & Shopping Malls',
      'Hotels & Hospitality',
      'Educational Campuses',
      'Mixed-Use Developments',
    ],
    equipmentUsed: [
      'LG Multi V VRF Systems',
      'Mitsubishi Electric City Multi',
      'Daikin VRV & Chillers',
      'Carrier AquaEdge Chillers',
      'O General Split & Ducted Units',
      'ABB Transformers & Switchgear',
      'Schneider Electric Distribution Boards',
      'Siemens BMS & Controls',
      'Grundfos Pumps',
      'Kingspan Duct Insulation',
    ],
    standardsCompliance: [
      'ASHRAE Standards 55, 62.1, 90.1',
      'SMACNA Duct Construction Standards',
      'DW 142 Ductwork Specifications',
      'BS 7671 Electrical Regulations',
      'UAE Fire & Life Safety Code',
      'CIBSE Guides A, B, & C',
      'NFPA 13, 14, 20 (Fire Protection)',
      'Local Authority Regulations (DMT, EHSMS)',
    ],
    keyStats: [
      { label: 'Projects Completed', value: '340+' },
      { label: 'Contract Value Delivered', value: 'AED 180M+' },
      { label: 'Direct Workforce', value: '68' },
      { label: 'Authority Pass Rate', value: '97%' },
      { label: 'Equipment Savings', value: '8-15%' },
      { label: 'Design Cost Reduction', value: '5-12%' },
    ],
    projectExamples: [
      'Complete MEP fit-out for 28-storey office tower on Reem Island',
      'Villa MEP package for 45 luxury villas in Saadiyat Island',
      'Industrial MEP for 12,000 sqm warehouse in KIZAD',
      'HVAC and electrical for 120-bed medical center in Shahama',
      'MEP retrofit for 3-star hotel with 85 rooms in Tourist Club Area',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi city's dense urban environment demands MEP designs that maximize space efficiency while meeting stringent authority requirements. Our Abu Dhabi projects account for rooftop structural loading limits on high-rise towers, coordinate MEP routing around post-tensioned slabs, and design around limited plant room space typical of buildings on Corniche Road and Reem Island. We have completed 240 projects in Abu Dhabi city alone, including 18 high-rise towers where we designed and installed centralized chilled water plants with capacities from 500 to 3,500 refrigerant tons. Our Musaffah fabrication facility produces ductwork, pipe supports, and cable trays with same-day delivery to Abu Dhabi city sites.`,
      'western-region': `Western Region projects require MEP systems engineered for harsh environmental conditions. Ambient temperatures in Ruwais reach 50 degrees Celsius, salinity corrodes outdoor equipment within 3 to 5 years if unprotected, and sand infiltration destroys standard air filters in weeks. Our Western Region designs specify marine-grade coatings, oversized condensers for high ambient operation, heavy-duty sand filters, and redundant cooling systems for critical industrial processes. We have delivered 8 industrial MEP packages in Ruwais, 6 residential compounds in Madinat Zayed, and 4 remote camp facilities with self-contained sewage treatment and reverse-osmosis water systems.`,
    },
    image: '/images/services/mep-design-supply-installation.webp',
    icon: 'lucide:drafting-compass',
    emergency: false,
    featured: true,
    processSteps: [
      {
        title: 'Design & Engineering',
        description:
          'Our engineers create detailed MEP designs, heat load calculations, and shop drawings compliant with UAE regulations and ASHRAE standards.',
      },
      {
        title: 'Equipment Supply',
        description:
          'We source high-quality equipment from trusted partners including LG, Mitsubishi, Daikin, Samsung, and Carrier at competitive prices.',
      },
      {
        title: 'Professional Installation',
        description:
          'Our skilled installation teams execute the work to the highest standards, ensuring safety, efficiency, and compliance with local authorities.',
      },
      {
        title: 'Testing & Commissioning',
        description:
          'We perform full system testing, balancing, and commissioning to verify performance before handover.',
      },
    ],
    priceRange: { min: 25000, max: 500000 },
    keywords: [
      'MEP design',
      'HVAC installation',
      'MEP contracting',
      'building services',
      'MEP supply',
    ],
    relatedServices: ['mep-amc', 'cfd', 'hvac-works'],
  },
  {
    slug: 'cfd',
    name: 'CFD (Computer Flow Dynamics)',
    shortName: 'CFD Analysis',
    description:
      'Advanced Computational Fluid Dynamics analysis for optimizing airflow, thermal comfort, and energy efficiency in buildings. Our CFD simulations help architects and engineers validate HVAC designs, predict temperature distribution, and ensure compliance with indoor air quality standards before construction begins.',
    shortDescription:
      'Advanced airflow and thermal simulations to validate HVAC designs and optimize building performance before construction.',
    detailedDescription: `Computational Fluid Dynamics analysis from Target International provides building designers and MEP engineers with precise, data-driven insights into airflow patterns, thermal distribution, and indoor air quality before a single duct is fabricated or diffuser is placed. Our CFD team has completed 65 simulation projects for developments totaling over 1.2 million square meters across Abu Dhabi, identifying design flaws that would have cost AED 2.5 million to rectify post-construction.

CFD analysis uses numerical methods to solve the Navier-Stokes equations governing fluid motion and heat transfer within a 3D computational model of your building. We create detailed geometric models from architectural CAD files, then define boundary conditions including outdoor air temperature, solar radiation, occupancy loads, equipment heat gains, and HVAC supply air parameters. Our simulations run on high-performance workstations with 64-core processors and 256GB RAM, processing 5 to 15 million computational cells per model with convergence criteria of 10^-4 residual error.

The output includes color-mapped temperature contours, velocity vector plots, age-of-air distributions, and PMV/PPD comfort indices for every zone in the building. We identify problematic areas such as thermal stratification in atriums, stagnant air pockets in deep floor plates, diffuser short-circuiting, and inadequate ventilation in corner offices. For one 35-storey Abu Dhabi tower, our CFD analysis revealed that the original diffuser layout would create 6-degree Celsius temperature variations across the open-plan office floor. Our recommended diffuser relocation and sizing adjustments reduced this to 1.2 degrees Celsius, within ASHRAE 55 comfort criteria.

CFD is particularly valuable for complex building types: atriums and double-height lobbies, auditoriums and theaters, data centers with high heat densities, hospital operating theaters requiring laminar airflow, kitchens with grease-laden exhaust, and parking garages with carbon monoxide management. We also perform smoke management simulations for fire engineering approval, modeling smoke layer descent, evacuation visibility, and extraction system effectiveness per UAE Fire and Life Safety Code requirements.`,
    benefits: [
      {
        title: 'Eliminate Costly Design Errors',
        description:
          'Identify HVAC layout problems before construction when changes require hundreds of dirhams in CAD time, not hundreds of thousands in demolition and rework.',
      },
      {
        title: 'Optimize Energy Efficiency',
        description:
          'CFD-guided diffuser placement and sizing can reduce HVAC energy consumption by 8 to 18 percent by eliminating overcooling and short-circuiting.',
      },
      {
        title: 'Ensure Thermal Comfort Compliance',
        description:
          'Verify PMV and PPD indices meet ASHRAE 55 standards for every occupied zone. Our reports include point-by-point comfort mapping.',
      },
      {
        title: 'Accelerate Authority Approvals',
        description:
          'CFD reports strengthen submittal packages for DMT and consultant review. Projects with CFD validation pass design review 40 percent faster.',
      },
      {
        title: 'Validate Smoke Management Design',
        description:
          'Simulate fire scenarios to demonstrate smoke layer height, tenability, and extraction capacity for fire authority approval.',
      },
      {
        title: 'Reduce commissioning time',
        description:
          'Buildings designed with CFD guidance require 30 to 50 percent less site balancing and commissioning time because systems perform closer to design intent from day one.',
      },
    ],
    industriesServed: [
      'Commercial High-Rise Towers',
      'Shopping Malls & Atriums',
      'Healthcare Facilities',
      'Data Centers',
      'Industrial Process Facilities',
      'Hotels & Resorts',
      'Sports & Entertainment Venues',
      'Educational Buildings',
    ],
    equipmentUsed: [
      'ANSYS Fluent Simulation Software',
      'Autodesk CFD',
      'OpenFOAM Open-Source Solver',
      'High-Performance Workstations (64-core, 256GB RAM)',
      'ParaView Visualization Suite',
      'BIM 360 Model Integration',
      'ASHRAE Thermal Comfort Toolkit',
      'NIST Smoke Transport Models',
    ],
    standardsCompliance: [
      'ASHRAE Standard 55 (Thermal Comfort)',
      'ASHRAE Standard 62.1 (Ventilation)',
      'ASHRAE Standard 90.1 (Energy)',
      'CIBSE AM11 (Environmental Design)',
      'UAE Fire & Life Safety Code',
      'NFPA 92 (Smoke Control Systems)',
      'ISO 7730 (Ergonomics of the Thermal Environment)',
    ],
    keyStats: [
      { label: 'CFD Projects Completed', value: '65+' },
      { label: 'Area Simulated', value: '1.2M sqm' },
      { label: 'Design Errors Prevented', value: 'AED 2.5M' },
      { label: 'Energy Reduction', value: '8-18%' },
      { label: 'Faster Authority Approval', value: '40%' },
      { label: 'Less Commissioning Time', value: '30-50%' },
    ],
    projectExamples: [
      'CFD analysis for 35-storey office tower atrium in Al Reem Island',
      'Smoke management simulation for 5-level underground parking garage',
      'Thermal comfort optimization for 800-seat auditorium in Saadiyat',
      'Data center cooling validation for 2MW IT load facility',
      'Hospital operating theater laminar airflow verification',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi's extreme climate makes CFD analysis especially valuable. Summer design conditions of 46 degrees Celsius ambient, combined with high solar gain on glass curtain walls, create challenging thermal environments in buildings along Corniche Road and Sheikh Zayed Street. Our Abu Dhabi CFD projects consistently reveal that standard diffuser layouts designed for temperate climates fail to maintain comfort in these conditions. For a recent 28-storey tower near the Corniche, our analysis showed that west-facing perimeter zones experienced afternoon temperatures 4 degrees Celsius above setpoint due to solar load overwhelming the original diffuser capacity. We recommended increasing diffuser neck sizes by 25 percent and relocating 12 diffusers away from solar exposure, which brought all zones into ASHRAE 55 compliance.`,
      'western-region': `The Western Region's harsh desert environment — with 50-degree Celsius peak temperatures, abrasive sand, and high salinity — creates unique CFD modeling requirements. Our Western Region analyses focus on dust infiltration patterns through building envelopes, corrosion-prone exhaust plume trajectories, and the performance of oversized condensers needed for high-ambient operation. For an industrial facility in Ruwais, we modeled fume exhaust dispersion to ensure worker safety perimeters met EHSMS requirements. The simulation revealed that prevailing winds would carry exhaust toward the main office building; our recommended stack height increase of 3 meters and relocation of 2 exhaust fans eliminated the issue before construction.`,
    },
    image: '/images/services/cfd.webp',
    icon: 'lucide:cpu',
    emergency: false,
    featured: false,
    processSteps: [
      {
        title: 'Model Preparation',
        description:
          'We build a detailed 3D computational model of your building geometry and MEP systems for accurate simulation.',
      },
      {
        title: 'Simulation Setup',
        description:
          'Our engineers define boundary conditions, airflow rates, heat loads, and environmental parameters for the analysis.',
      },
      {
        title: 'CFD Analysis',
        description:
          'We run high-fidelity simulations to visualize airflow patterns, temperature distribution, and identify potential issues.',
      },
      {
        title: 'Reporting & Recommendations',
        description:
          'You receive a comprehensive report with visualizations and actionable recommendations to optimize your design.',
      },
    ],
    priceRange: { min: 8000, max: 75000 },
    keywords: [
      'CFD analysis',
      'computational fluid dynamics',
      'airflow simulation',
      'thermal comfort',
      'HVAC design validation',
    ],
    relatedServices: ['mep-design-supply-installation', 'hvac-works'],
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning & Sanitization',
    shortName: 'Duct Cleaning',
    description:
      'Professional HVAC duct cleaning and sanitization services using rotary brush machines, high-powered vacuum units, and approved disinfectants. We remove dust, allergens, mold, and contaminants to improve indoor air quality, system efficiency, and occupant health in commercial and residential buildings.',
    shortDescription:
      'Thorough duct cleaning and sanitization to improve indoor air quality and HVAC system efficiency.',
    detailedDescription: `Target International provides professional HVAC duct cleaning and sanitization services for commercial, residential, and industrial buildings across Abu Dhabi and the Western Region. Since 2014, we have cleaned more than 180,000 linear meters of ductwork — equivalent to the distance from Abu Dhabi to Dubai and back — removing an estimated 42 metric tons of accumulated dust, debris, mold, and biological contaminants from building ventilation systems.

Duct cleaning is not merely a hygiene service: it is a critical maintenance procedure that directly impacts energy consumption, equipment lifespan, and occupant health. A 1-millimeter layer of dust on duct surfaces increases air resistance by 7 to 10 percent, forcing fans to work harder and consuming 5 to 8 percent more electricity. In Abu Dhabi's dusty environment, ducts can accumulate 3 to 5 millimeters of dust within 18 to 24 months if filters are not changed regularly. Our cleaning process restores duct surfaces to near-factory condition, improving airflow and reducing energy costs immediately.

Our cleaning methodology follows NADCA ACR 2021 standards and UAE indoor air quality guidelines. We begin with a comprehensive video inspection using robotic cable cameras to document contamination levels and identify damaged duct sections. For rectangular ducts, we use rotary brush machines with nylon or steel bristles matched to duct material. For round flexible ducts, we employ compressed air whipping with HEPA-filtered vacuum extraction at 4,000 cubic feet per minute. All debris is captured at the source — nothing is pushed deeper into the system.

Sanitization uses EPA-registered disinfectants and fogging agents safe for occupied spaces. We treat the entire duct system including supply and return plenums, VAV boxes, and diffusers. For buildings with mold concerns, we apply antimicrobial coatings that inhibit regrowth for 12 to 24 months. Post-cleaning verification includes second video inspection, airborne particle counting, and air velocity measurement to confirm system performance improvement.`,
    benefits: [
      {
        title: 'Improve Indoor Air Quality by 60%',
        description:
          'Post-cleaning airborne particle counts typically drop by 60 to 80 percent. This is especially important for asthma sufferers, allergy patients, and immunocompromised individuals.',
      },
      {
        title: 'Reduce Energy Costs by 5-8%',
        description:
          'Clean ducts reduce air resistance and fan load. On a 100-ton HVAC system running 12 hours daily, that translates to AED 8,000 to AED 14,000 annual savings.',
      },
      {
        title: 'Eliminate Odors & Mold',
        description:
          'Our sanitization process eliminates bacteria, mold spores, and odor-causing organic matter. Antimicrobial coatings prevent regrowth for up to 24 months.',
      },
      {
        title: 'Extend Equipment Life',
        description:
          'Clean ducts prevent dust from reaching coils, filters, and fans. This reduces equipment wear and can extend system life by 3 to 5 years.',
      },
      {
        title: 'Compliance & Documentation',
        description:
          'We provide before/after video documentation, particle count reports, and cleaning certificates required by healthcare regulators, insurance companies, and facility managers.',
      },
      {
        title: 'Minimize Operational Disruption',
        description:
          'We work nights, weekends, and zone-by-zone to keep your building operational. Most commercial duct cleaning projects complete within 2 to 4 days.',
      },
    ],
    industriesServed: [
      'Commercial Office Buildings',
      'Residential Villas & Apartments',
      'Healthcare Facilities & Clinics',
      'Hotels & Serviced Apartments',
      'Retail Malls & Restaurants',
      'Educational Institutions',
      'Industrial Facilities',
      'Government Buildings',
    ],
    equipmentUsed: [
      'Rotary Brush Duct Cleaning Machines',
      'HEPA-Filtered Vacuum Extractors (4,000 CFM)',
      'Robotic Cable Inspection Cameras',
      'Compressed Air Whipping Systems',
      'EPA-Registered Disinfectant Fogging Machines',
      'Antimicrobial Coating Applicators',
      'Airborne Particle Counters',
      'Thermal Anemometers',
    ],
    standardsCompliance: [
      'NADCA ACR 2021 (Duct Cleaning Standards)',
      'ASHRAE Standard 62.1 (IAQ)',
      'UAE Indoor Air Quality Guidelines',
      'EPA Safer Choice Disinfectants',
      'Dubai Municipality IAQ Regulations',
      'WHO Indoor Air Quality Guidelines',
    ],
    keyStats: [
      { label: 'Linear Meters Cleaned', value: '180,000+' },
      { label: 'Dust Removed', value: '42 Tons' },
      { label: 'IAQ Improvement', value: '60-80%' },
      { label: 'Energy Savings', value: '5-8%' },
      { label: 'Projects Completed', value: '210+' },
      { label: 'Avg. Project Duration', value: '2-4 Days' },
    ],
    projectExamples: [
      'Complete duct cleaning for 42-storey office tower (12,000 linear meters)',
      'Hospital HVAC sanitization for 85-bed medical center in Shahama',
      'Retail mall duct cleaning across 120 tenant units in Al Wahda',
      'Residential compound cleaning for 180 villas in Khalifa City',
      'Hotel duct restoration for 120-room property in Tourist Club Area',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi city's coastal desert environment creates extreme dust loading in HVAC systems. Fine sand particles from the Empty Quarter and construction dust from ongoing development along Reem Island and Al Maryah Island infiltrate buildings continuously. Our Abu Dhabi duct cleaning clients include 14 high-rise towers where we clean ductwork every 18 to 24 months. The dust accumulation rate in Abu Dhabi is 2 to 3 times higher than in European cities: a typical office building duct system collects 15 to 25 kilograms of dust per 1,000 square meters of floor area annually. We schedule cleaning during the cooler months (November to March) when buildings can operate with reduced HVAC capacity.`,
      'western-region': `The Western Region's proximity to open desert and industrial zones creates some of the most severe duct contamination conditions in the UAE. Our Western Region cleaning projects consistently remove 30 to 50 percent more dust per linear meter than Abu Dhabi city projects. Saline dust from coastal areas in Ruwais corrodes galvanized ductwork from the inside out if not cleaned regularly. For industrial facilities in Ruwais, we clean every 12 months instead of the standard 24-month interval. We have completed duct cleaning for 6 industrial plants, 4 residential compounds, and 2 hotels in the Western Region, totaling 28,000 linear meters.`,
    },
    image: '/images/services/duct-cleaning.webp',
    icon: 'lucide:wind',
    emergency: false,
    featured: false,
    processSteps: [
      {
        title: 'Inspection',
        description:
          'We use cable cameras and inspection tools to assess the condition of your ductwork and identify contamination levels.',
      },
      {
        title: 'Cleaning',
        description:
          'Our rotary brush machines and high-powered vacuums loosen and extract dust, debris, and buildup from the entire duct system.',
      },
      {
        title: 'Sanitization',
        description:
          'We apply EPA-approved disinfectants and fogging treatments to eliminate bacteria, mold, and odors.',
      },
      {
        title: 'Final Verification',
        description:
          'Post-cleaning inspection confirms the ducts are clean, and we provide a detailed report with before/after documentation.',
      },
    ],
    priceRange: { min: 3000, max: 35000 },
    keywords: [
      'duct cleaning',
      'HVAC sanitization',
      'indoor air quality',
      'duct maintenance',
      'ventilation cleaning',
    ],
    relatedServices: ['mep-amc', 'hvac-works', 'tab'],
  },
  {
    slug: 'tab',
    name: 'TAB (Testing, Adjusting & Balancing) Reports',
    shortName: 'TAB Reports',
    description:
      'Comprehensive Testing, Adjusting, and Balancing services for HVAC systems. Our certified technicians use precision instruments to measure airflow, water flow, and system performance, ensuring your installation operates at design specifications for optimal comfort, efficiency, and compliance with CIBSE and ASHRAE standards.',
    shortDescription:
      'Certified testing, adjusting, and balancing of HVAC systems with detailed reports accepted by all major consultants.',
    detailedDescription: `Testing, Adjusting, and Balancing from Target International ensures that your HVAC system delivers exactly the airflow, water flow, and thermal output specified in the design documents. Since 2014, we have produced 155 TAB reports for projects totaling 890,000 square meters across Abu Dhabi. Our reports are accepted without revision by all major engineering consultants including Khatib & Alami, AECOM, WS Atkins, and Parsons, and are approved by Abu Dhabi authorities on first submission in 96 percent of cases.

TAB is not optional fine-tuning: it is a fundamental commissioning procedure required by ASHRAE Standard 111, CIBSE Commissioning Code A, and UAE building regulations. An unbalanced system can waste 20 to 40 percent of HVAC energy by over-supplying some zones while starving others. Temperature variations of 4 to 8 degrees Celsius between adjacent rooms are common in unbalanced buildings. Our TAB process systematically measures, adjusts, and documents every terminal device until the entire system performs within 10 percent of design values.

Our TAB team holds Level 2 certification from the National Environmental Balancing Bureau (NEBB) and uses calibrated instrumentation traceable to NIST standards. Equipment includes TSI AccuBalance air capture hoods (accurate to +/- 3 percent), Dwyer digital manometers (0.1 Pascal resolution), TSI thermal anemometers, ultrasonic flow meters for hydronic systems, and data-logging temperature sensors. All instruments are calibrated every 12 months with certificates maintained for audit purposes.

The TAB process follows a strict protocol: pre-TAB inspection of installed equipment against design submittals, baseline measurement of all terminal devices before adjustment, systematic balancing of air and water circuits from terminals back to mains, control verification and setpoint optimization, and final measurement documentation. For a typical 20,000-square-meter office building, we measure and record 250 to 400 data points. The resulting report includes executive summary, methodology, instrument calibration certificates, design versus actual comparison tables, deficiency list, and as-tested control sequences.`,
    benefits: [
      {
        title: 'Eliminate Hot & Cold Spots',
        description:
          'Systematic balancing ensures every room receives design airflow. Post-TAB temperature variation across zones is typically under 1.5 degrees Celsius.',
      },
      {
        title: 'Save 20-40% on HVAC Energy',
        description:
          'Balanced systems avoid over-supply and fan over-speed. On a 500-ton chiller plant, that can mean AED 120,000 to AED 200,000 annual energy savings.',
      },
      {
        title: 'Guaranteed Consultant Acceptance',
        description:
          'Our reports follow NEBB and CIBSE formats precisely. 96 percent pass consultant and authority review on first submission without revision requests.',
      },
      {
        title: 'Extend Equipment Life',
        description:
          'Properly balanced pumps and fans operate at design load instead of overload. This reduces bearing wear, motor heat, and vibration, extending life by 20 to 30 percent.',
      },
      {
        title: 'Compliance & Warranty Protection',
        description:
          'Manufacturer warranties often require TAB documentation. Our reports protect your warranty coverage and satisfy authority inspection requirements.',
      },
      {
        title: 'Data-Driven Maintenance',
        description:
          'TAB baseline data becomes the reference for future maintenance. Deviations from baseline indicate filter clogging, damper drift, or control faults before occupants complain.',
      },
    ],
    industriesServed: [
      'Commercial Office Buildings',
      'Healthcare Facilities',
      'Hotels & Hospitality',
      'Shopping Malls',
      'Industrial Facilities',
      'Residential Towers',
      'Educational Buildings',
      'Data Centers',
    ],
    equipmentUsed: [
      'TSI AccuBalance Air Capture Hoods',
      'Dwyer Digital Manometers',
      'TSI Thermal Anemometers',
      'Ultrasonic Flow Meters',
      'Data-Logging Temperature Sensors',
      'Pitot Tube Arrays',
      'Hydronic Balancing Valves',
      'BACnet Diagnostic Tools',
    ],
    standardsCompliance: [
      'ASHRAE Standard 111 (Testing, Adjusting, Balancing)',
      'CIBSE Commissioning Code A (Air Distribution)',
      'CIBSE Commissioning Code W (Water Distribution)',
      'NEBB Procedural Standards',
      'UAE Building Regulations',
      'SMACNA TAB Standards',
    ],
    keyStats: [
      { label: 'TAB Reports Delivered', value: '155+' },
      { label: 'Area Commissioned', value: '890K sqm' },
      { label: 'First-Pass Approval Rate', value: '96%' },
      { label: 'Energy Savings', value: '20-40%' },
      { label: 'Data Points per Building', value: '250-400' },
      { label: 'Temp Variation Post-TAB', value: '<1.5°C' },
    ],
    projectExamples: [
      'TAB for 35-storey commercial tower with 380 VAV boxes on Reem Island',
      'Hospital HVAC balancing for 120-bed facility in Shahama',
      'Retail mall TAB across 95 tenant units and central plant in Al Wahda',
      'Industrial warehouse balancing for 8,000 sqm distribution center in Mussafah',
      'Residential tower TAB for 240 apartments with district cooling in Al Reem',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi's high-rise density creates complex TAB challenges. Tall buildings experience stack effect pressure differentials of 50 to 80 Pascals between ground floor and rooftop, which can overwhelm HVAC balancing if not accounted for. Our Abu Dhabi TAB procedures include stack effect measurement, stairwell pressurization verification, and lobby air curtain adjustment. We have balanced systems in 22 high-rise towers ranging from 15 to 48 floors. District cooling connections in newer developments such as Al Reem Island require additional hydronic balancing to integrate with chilled water networks operating at 5.5 degrees Celsius supply temperature. Our Musaffah depot maintains a dedicated TAB instrument inventory valued at AED 180,000 to ensure no project waits for equipment availability.`,
      'western-region': `Western Region TAB projects face environmental and logistical challenges that Abu Dhabi city projects do not. Dust infiltration through poorly sealed building envelopes creates rapid filter loading that changes system balance within weeks of commissioning. Our Western Region TAB reports include recommended re-balancing schedules: every 6 months for industrial facilities and every 12 months for commercial buildings, compared to the standard 18 to 24 months in the city. For a recent 6,000-square-meter industrial facility in Ruwais, our TAB revealed that 34 percent of diffusers were delivering less than 70 percent of design airflow due to duct leakage in sand-damaged joints. We recommended and implemented duct sealing that restored design performance and reduced fan energy by 18 percent.`,
    },
    image: '/images/services/tab.webp',
    icon: 'lucide:activity',
    emergency: false,
    featured: false,
    processSteps: [
      {
        title: 'Pre-Testing Survey',
        description:
          'We review design specifications, inspect installed equipment, and establish baseline measurements.',
      },
      {
        title: 'Air & Water Balancing',
        description:
          'Using calibrated anemometers, manometers, and flow meters, we balance air and water distribution to design values.',
      },
      {
        title: 'System Adjustments',
        description:
          'We adjust dampers, valves, and controls to achieve optimal performance and uniform comfort throughout the building.',
      },
      {
        title: 'Certified TAB Report',
        description:
          'You receive a detailed, consultant-approved TAB report documenting all measurements, adjustments, and compliance certifications.',
      },
    ],
    priceRange: { min: 5000, max: 45000 },
    keywords: [
      'TAB report',
      'testing adjusting balancing',
      'HVAC commissioning',
      'air balancing',
      'water balancing',
    ],
    relatedServices: ['mep-design-supply-installation', 'hvac-works', 'mep-amc'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Services',
    shortName: 'Plumbing',
    description:
      'Complete plumbing solutions including underground and aboveground drainage systems, domestic cold and hot water supply, sanitary fixtures, water heaters, booster pumps, and water treatment systems. We design, supply, and install plumbing infrastructure for villas, commercial buildings, and industrial facilities.',
    shortDescription:
      'Full plumbing services including drainage, water supply, fixtures, and water treatment for all building types.',
    detailedDescription: `Target International provides comprehensive plumbing design, supply, and installation services for residential, commercial, and industrial projects across Abu Dhabi and the Western Region. Since 2014, our plumbing division has completed 290 projects with a combined pipe installation length exceeding 380,000 linear meters — enough to circle Yas Island 12 times. Our plumbing team includes 24 licensed plumbers, 4 plumbing engineers, and 3 CAD technicians who produce shop drawings, isometric diagrams, and hydraulic calculations for every project.

Our plumbing capabilities cover the full spectrum of building water systems. For drainage, we design and install underground soil and waste networks, aboveground drainage stacks, grease separators for kitchens, oil separators for car parks, and sewage pumping stations where gravity drainage is not feasible. For water supply, we size booster pump systems, design hot water circulation loops, select water heaters and calorifiers, and specify water treatment equipment including softeners, filters, and reverse-osmosis units for potable water quality compliance with UAE Standards ESMA and ADQCC.

Material selection is critical in Abu Dhabi's aggressive water chemistry. Groundwater hardness exceeds 400 parts per million in many areas, causing rapid scale buildup in pipes and fixtures. We specify uPVC and HDPE for drainage, PPR for cold water, copper for hot water, and stainless steel for specialized applications. For high-rise buildings, we design pressure zoning with break tanks and booster sets to maintain 2 to 3 bar pressure at the highest fixture without exceeding 5 bar at the lowest — preventing pipe noise, valve damage, and excessive water consumption.

Emergency plumbing services are available 24 hours a day for burst pipes, severe leaks, blocked drains, pump failures, and water heater breakdowns. Our emergency vehicles carry pipe repair clamps, pipe freezing kits, temporary pumps, and common fittings for immediate response. Average emergency response time is 32 minutes in Abu Dhabi city and 65 minutes in the Western Region.`,
    benefits: [
      {
        title: 'Licensed & Experienced Plumbers',
        description:
          'Our 24 licensed plumbers average 8 years of experience each. We do not subcontract plumbing work to unknown third parties.',
      },
      {
        title: 'Complete System Design',
        description:
          'We handle hydraulic calculations, pipe sizing, pump selection, and fixture scheduling. Our designs prevent low pressure, water hammer, and drainage odors.',
      },
      {
        title: 'Emergency Response 24/7',
        description:
          'Burst pipes and pump failures cannot wait. Our emergency team responds in 32 minutes (Abu Dhabi) or 65 minutes (Western Region) around the clock.',
      },
      {
        title: 'Authority Approval Management',
        description:
          'We obtain all plumbing approvals from local municipalities and water authorities. Our submittal packages include hydraulic calculations, material specifications, and test protocols.',
      },
      {
        title: 'Water Quality Compliance',
        description:
          'We design and install water treatment systems to meet UAE potable water standards. Our installations include sampling points for periodic laboratory testing.',
      },
      {
        title: 'Comprehensive Contracts',
        description:
          'Our plumbing quotations include all labor, materials, testing, and approvals with no hidden costs. Change orders are documented and approved before execution.',
      },
    ],
    industriesServed: [
      'Residential Villas & Compounds',
      'Commercial Office Buildings',
      'Hotels & Serviced Apartments',
      'Healthcare Facilities',
      'Industrial Facilities',
      'Retail & Restaurants',
      'Educational Institutions',
      'Government Buildings',
    ],
    equipmentUsed: [
      'uPVC & HDPE Drainage Pipes',
      'PPR Hot & Cold Water Pipes',
      'Copper Tubing & Fittings',
      'Stainless Steel Pipes',
      'Grundfos Booster Pump Sets',
      'Ariston & Bradford Water Heaters',
      'Water Softeners & RO Units',
      'Sewage & Drainage Pumps',
    ],
    standardsCompliance: [
      'UAE Plumbing Code & Regulations',
      'BS EN 12056 (Drainage Systems)',
      'BS 6700 (Water Supply Design)',
      'Dubai Municipality Plumbing Guidelines',
      'ESMA Potable Water Standards',
      'ADQCC Water Quality Requirements',
      'IPC / UPC International Codes',
    ],
    keyStats: [
      { label: 'Plumbing Projects', value: '290+' },
      { label: 'Pipe Installed', value: '380K+ m' },
      { label: 'Licensed Plumbers', value: '24' },
      { label: 'Emergency Response', value: '32 min' },
      { label: 'Pressure Zone Design', value: '2-3 bar' },
      { label: 'Water Hardness Managed', value: '400+ ppm' },
    ],
    projectExamples: [
      'Complete plumbing for 45 luxury villas in Saadiyat Island',
      'Drainage and water supply for 28-storey residential tower on Reem Island',
      'Industrial plumbing for 3 factories in Mussafah Industrial Area',
      'Hotel plumbing renovation for 85-room property in Tourist Club Area',
      'Medical center plumbing including RO system in Shahama',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi city's high groundwater table — typically 2 to 4 meters below ground level — makes underground drainage installation challenging. Our Abu Dhabi plumbing designs include dewatering plans, waterproof pipe bedding, and sump pump systems for basement drainage. Water hardness in Abu Dhabi averages 350 to 450 parts per million, causing scale buildup that reduces pipe diameter by 15 to 20 percent over 10 years in unsoftened systems. We specify water softeners for all Abu Dhabi villa projects and recommend them for commercial buildings with high hot water consumption. Our Abu Dhabi plumbing team has completed 210 projects in the city, including 18 high-rise towers where we designed pressure-boosting systems serving up to 35 floors.`,
      'western-region': `The Western Region's remote location and limited municipal infrastructure require self-sufficient plumbing designs. Many Western Region projects rely on septic tanks and soakaways rather than municipal sewage connections. We design septic systems with 20-to-30-year capacity, including leach field sizing based on soil percolation tests. Water supply in the Western Region often comes from private wells with high salinity and bacterial contamination; we design and install multi-stage filtration and UV sterilization systems to produce potable water meeting ADQCC standards. For a recent 50-villa compound in Madinat Zayed, we installed a centralized water treatment plant processing 120,000 liters per day, serving all villas through a metered distribution network.`,
    },
    image: '/images/services/plumbing.webp',
    icon: 'lucide:droplets',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'Design & Planning',
        description:
          'We create plumbing layouts, pipe routing plans, and fixture schedules based on your building requirements and local codes.',
      },
      {
        title: 'Material Supply',
        description:
          'We procure high-quality pipes, fittings, fixtures, pumps, and water heaters from trusted manufacturers.',
      },
      {
        title: 'Installation',
        description:
          'Our licensed plumbers install drainage, water supply, and sanitary systems with precision and compliance to UAE standards.',
      },
      {
        title: 'Testing & Handover',
        description:
          'We perform pressure testing, leak detection, and system flushing before final inspection and handover.',
      },
    ],
    priceRange: { min: 8000, max: 120000 },
    keywords: [
      'plumbing services',
      'drainage systems',
      'water supply',
      'sanitary installation',
      'plumbing maintenance',
    ],
    relatedServices: ['mep-design-supply-installation', 'mep-amc', 'electrical'],
  },
  {
    slug: 'electrical',
    name: 'Electrical Services',
    shortName: 'Electrical',
    description:
      'Full-scope electrical contracting including HT/LT switchgear, transformers, distribution boards, cabling and termination, lighting and small power systems, fire alarm and emergency systems, low current systems (CCTV, access control, structured cabling), lightning protection, and smart home automation.',
    shortDescription:
      'Complete electrical contracting from power distribution and lighting to low-current systems and smart home automation.',
    detailedDescription: `Target International provides full-scope electrical contracting services for commercial, residential, and industrial projects across Abu Dhabi and the Western Region. Our electrical division has completed 265 projects since 2014, installing over 2,800 kilometers of cable, 340 distribution boards, and 45 transformer substations. We hold a Class 1 electrical contractor license from the Abu Dhabi Department of Energy and employ 31 licensed electricians, 5 electrical engineers, and 2 BMS programmers.

Our electrical capabilities span high-voltage and low-voltage systems. On the high-voltage side, we install 11kV switchgear, oil and dry-type transformers up to 2,500 kVA, HV cable termination, and protection relay configuration. On the low-voltage side, we design and install main distribution boards, sub-distribution panels, final circuit wiring, lighting control systems, emergency power systems including generators and UPS, and fire alarm systems compliant with UAE Fire and Life Safety Code and NFPA 72.

Low-current systems are an increasingly important part of our electrical portfolio. We design and install structured cabling networks (Cat 6A and fiber optic), CCTV systems with IP cameras and video management software, access control with card readers and biometric devices, gate barrier systems, intercom and public address systems, SMATV/MATV distribution, lighting control via DALI and KNX protocols, and smart home automation integrating climate, lighting, curtains, and security through centralized touch panels and mobile apps.

Electrical safety is our highest priority. Every installation follows BS 7671 wiring regulations, UAE electrical codes, and manufacturer installation guidelines. We perform insulation resistance testing, continuity testing, polarity verification, earth electrode resistance measurement, and thermal imaging surveys to identify hot spots before they cause failures. Our electrical maintenance program includes annual infrared thermography that has prevented 47 potential fires in client facilities over the past 5 years.`,
    benefits: [
      {
        title: 'Class 1 Licensed Contractor',
        description:
          'We hold the highest electrical contractor classification from the Abu Dhabi Department of Energy, authorizing us to work on 11kV systems and large-scale installations.',
      },
      {
        title: 'In-House Engineering & Installation',
        description:
          'Our 31 licensed electricians and 5 engineers handle everything from load calculations to final commissioning. No work is subcontracted to unqualified third parties.',
      },
      {
        title: '24/7 Emergency Electrical Service',
        description:
          'Power failures, tripped breakers, and electrical faults are resolved quickly. Our emergency team carries spare breakers, cables, and temporary power equipment.',
      },
      {
        title: 'Thermal Imaging Preventive Maintenance',
        description:
          'Our annual infrared surveys detect loose connections and overloads before they cause fires. We have identified and corrected 47 potential fire hazards for clients in 5 years.',
      },
      {
        title: 'Smart Home & BMS Integration',
        description:
          'We integrate lighting, climate, security, and AV systems through KNX, DALI, and BACnet protocols. Control everything from a single touch panel or smartphone app.',
      },
      {
        title: 'Complete Authority Approvals',
        description:
          'We manage DEWA, ADDC, and municipality approvals for all electrical work. Our submittal packages include single-line diagrams, load schedules, and test certificates.',
      },
    ],
    industriesServed: [
      'Commercial Office Buildings',
      'Residential Villas & Apartments',
      'Industrial Facilities & Warehouses',
      'Healthcare Facilities',
      'Retail & Shopping Malls',
      'Hotels & Hospitality',
      'Educational Institutions',
      'Data Centers',
    ],
    equipmentUsed: [
      'ABB Switchgear & Transformers',
      'Schneider Electric Distribution Boards',
      'Siemens Protection Relays',
      'Legrand Wiring Devices',
      'Hikvision CCTV Systems',
      'Honeywell Fire Alarm Panels',
      'KNX & DALI Lighting Controls',
      'Generac & Cummins Generators',
    ],
    standardsCompliance: [
      'BS 7671 (IET Wiring Regulations)',
      'IEC 60364 (Electrical Installations)',
      'UAE Electrical Regulations',
      'NFPA 70 (National Electrical Code)',
      'NFPA 72 (Fire Alarm Systems)',
      'DEWA / ADDC Distribution Guidelines',
      'IEEE Standards',
      'CENELEC Harmonized Standards',
    ],
    keyStats: [
      { label: 'Electrical Projects', value: '265+' },
      { label: 'Cable Installed', value: '2,800+ km' },
      { label: 'Licensed Electricians', value: '31' },
      { label: 'DBs Installed', value: '340+' },
      { label: 'Transformers Installed', value: '45' },
      { label: 'Fire Hazards Prevented', value: '47' },
    ],
    projectExamples: [
      'Complete electrical for 35-storey mixed-use tower on Reem Island',
      'HV substation and LV distribution for 12,000 sqm factory in Mussafah',
      'Smart home automation for 25 luxury villas in Saadiyat Island',
      'Fire alarm and emergency lighting for 120-bed hospital in Shahama',
      'Data center electrical including UPS and generator in Khalifa City',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi city's electrical infrastructure is among the most reliable in the region, but building-internal electrical systems face unique challenges. High cooling loads create electrical demand peaks of 150 to 200 watts per square meter in commercial buildings — 40 percent higher than European equivalents. Our Abu Dhabi electrical designs account for these loads with appropriately sized transformers, switchgear, and cabling. We have installed 38 transformer substations in Abu Dhabi city, ranging from 500 kVA villa units to 2,500 kVA commercial substations. The coastal environment accelerates corrosion of outdoor electrical enclosures; we specify marine-grade powder coating and stainless steel hardware for all outdoor installations. Our Abu Dhabi electrical team has completed 190 projects in the city.`,
      'western-region': `Western Region electrical projects must account for limited grid capacity, long transmission distances, and harsh environmental conditions. Voltage drop can exceed acceptable limits on long feeder runs to remote sites; we design oversized conductors and install voltage regulators where necessary. For industrial facilities in Ruwais, we have installed 6 dedicated substations with 11kV incoming supply, oil-filled transformers, and comprehensive protection systems. Solar power integration is increasingly popular in the Western Region due to abundant sunshine and grid independence needs. We have designed and installed 4 solar PV systems totaling 850 kW capacity for Western Region clients, reducing their DEWA bills by 60 to 75 percent.`,
    },
    image: '/images/services/electrical.webp',
    icon: 'lucide:zap',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'System Design',
        description:
          'We design electrical distribution, lighting, and low-current systems based on load calculations and project specifications.',
      },
      {
        title: 'Equipment Procurement',
        description:
          'We supply transformers, switchgear, DBs, cables, and fixtures from approved manufacturers meeting UAE standards.',
      },
      {
        title: 'Installation & Termination',
        description:
          'Our electrical teams install conduit, cabling, panels, and fixtures with strict adherence to safety regulations.',
      },
      {
        title: 'Testing & Certification',
        description:
          'We conduct insulation resistance testing, continuity checks, and commissioning before authority approvals.',
      },
    ],
    priceRange: { min: 15000, max: 250000 },
    keywords: [
      'electrical contracting',
      'low voltage',
      'lighting installation',
      'fire alarm',
      'smart home',
    ],
    relatedServices: ['mep-design-supply-installation', 'mep-amc', 'plumbing'],
  },
  {
    slug: 'hvac-works',
    name: 'HVAC Works',
    shortName: 'HVAC',
    description:
      'Specialized HVAC services including heat load calculations, equipment selection, duct fabrication per SMACNA/DW 142 standards, chilled water and DX system installation, VRF/VRV systems, smoke management, staircase pressurization, noise and vibration control, and full commissioning in accordance with ASHRAE and CIBSE standards.',
    shortDescription:
      'Specialized HVAC design, duct fabrication, system installation, and commissioning for all building types.',
    detailedDescription: `Target International is one of Abu Dhabi's leading HVAC specialists, providing design, duct fabrication, equipment supply, installation, and commissioning for projects from single villas to multi-tower commercial developments. Our HVAC division has completed 310 projects since 2014, installing over 12,500 refrigerant tons of cooling capacity and fabricating 85,000 square meters of ductwork in our Musaffah facility. We are authorized dealers and installers for LG, Mitsubishi Electric, Daikin, Carrier, O General, Samsung, and York.

Our HVAC design process begins with accurate heat load calculations using Carrier HAP and Trane TRACE software. Abu Dhabi's extreme climate requires careful attention to solar gain, infiltration, and ventilation loads. We design for 46 degrees Celsius ambient dry bulb and 32 degrees Celsius wet bulb — conditions that exceed ASHRAE design conditions for most global locations. Our designs account for radiant asymmetry from large glazing areas, latent loads from occupancy and ventilation, and diversity factors based on actual UAE building usage patterns rather than generic tables.

Duct fabrication is performed in-house at our 1,200-square-meter Musaffah workshop using CNC plasma cutting, automated coil lines, and Pittsburgh lock forming machines. We fabricate galvanized steel ducts to SMACNA standards, pre-insulated ducts to DW 142 specifications, and stainless steel ducts for kitchen exhaust and corrosive environments. Our shop produces 300 to 500 square meters of ductwork per day with quality control including leak testing, dimension verification, and coating thickness measurement. In-house fabrication ensures quality, reduces delivery times from 2 weeks to 2 days, and eliminates coordination problems with external suppliers.

Installation is performed by our directly employed workforce of 35 HVAC technicians and 8 supervisors. We install DX split systems, VRF/VRV multi-split systems, chilled water plants with cooling towers, package rooftop units, ducted splits, cassette units, and specialized systems including smoke extraction, staircase pressurization, and outdoor cooling paths. Every installation includes refrigerant leak testing, duct leakage testing per SMACNA standards, vibration isolation, acoustic lining where required, and full commissioning with TAB integration.`,
    benefits: [
      {
        title: 'In-House Duct Fabrication',
        description:
          'Our Musaffah workshop produces 300-500 sqm of ductwork daily. In-house fabrication cuts delivery time from 2 weeks to 2 days and ensures SMACNA/DW 142 compliance.',
      },
      {
        title: 'Authorized Dealer for 7 Major Brands',
        description:
          'We are authorized partners for LG, Mitsubishi, Daikin, Carrier, O General, Samsung, and York. This means genuine equipment, full manufacturer warranties, and competitive rates.',
      },
      {
        title: 'Extreme Climate Expertise',
        description:
          'Abu Dhabi\'s 46°C design temperature and high humidity demand oversized condensers, corrosion-resistant coatings, and carefully calculated loads. We design for reality, not textbook conditions.',
      },
      {
        title: 'Directly Employed Installation Teams',
        description:
          'Our 35 HVAC technicians are Target International employees, not subcontractors. This ensures consistent quality, schedule reliability, and accountability.',
      },
      {
        title: 'Energy-Optimized Designs',
        description:
          'We select high-EER equipment, optimize duct sizing, and recommend BMS integration. Our designs typically achieve 15 to 25 percent lower energy consumption than code-minimum systems.',
      },
      {
        title: 'Complete Commissioning & TAB',
        description:
          'Every system we install is fully tested, balanced, and commissioned before handover. We produce as-built drawings, operation manuals, and training for your facilities team.',
      },
    ],
    industriesServed: [
      'Commercial Office Towers',
      'Residential Villas & Compounds',
      'Hotels & Hospitality',
      'Healthcare Facilities',
      'Industrial Facilities',
      'Retail & Shopping Malls',
      'Educational Institutions',
      'Government Buildings',
    ],
    equipmentUsed: [
      'LG Multi V VRF Systems',
      'Mitsubishi Electric City Multi',
      'Daikin VRV & Chillers',
      'Carrier AquaEdge Chillers',
      'O General Split & Ducted Units',
      'Samsung DVM Systems',
      'York YK Chillers',
      'Cooling Towers & Pumps',
    ],
    standardsCompliance: [
      'ASHRAE Standard 55 (Thermal Comfort)',
      'ASHRAE Standard 62.1 (Ventilation)',
      'ASHRAE Standard 90.1 (Energy)',
      'SMACNA Duct Construction Standards',
      'DW 142 Ductwork Specifications',
      'CIBSE Guides A, B, & C',
      'UAE Fire & Life Safety Code',
      'NFPA 92 (Smoke Control)',
    ],
    keyStats: [
      { label: 'HVAC Projects', value: '310+' },
      { label: 'Cooling Capacity Installed', value: '12,500+ RT' },
      { label: 'Ductwork Fabricated', value: '85K+ sqm' },
      { label: 'Workshop Capacity', value: '300-500 sqm/day' },
      { label: 'Direct HVAC Technicians', value: '35' },
      { label: 'Energy Reduction', value: '15-25%' },
    ],
    projectExamples: [
      'Complete HVAC for 42-storey office tower with 3,500 RT central plant on Corniche',
      'VRF installation for 85 villas in Saadiyat Island luxury compound',
      'Industrial HVAC for 15,000 sqm warehouse with 800 RT packaged units in Mussafah',
      'Hotel HVAC renovation including chiller replacement for 120-room property',
      'Hospital HVAC with laminar flow operating theaters in Shahama',
    ],
    areaSpecificContent: {
      'abu-dhabi': `Abu Dhabi city's high-rise concentration and coastal location create unique HVAC challenges. Sea salt corrosion reduces the life of standard condenser coils from 10 years to 5 to 6 years if not protected. Our Abu Dhabi designs specify copper coils with epoxy coating or aluminum microchannel coils for coastal towers. Stack effect in high-rise buildings creates pressure differentials of 50 to 80 Pascals between ground and roof, requiring carefully designed shaft pressurization and lobby air curtains. We have installed HVAC systems in 26 high-rise towers in Abu Dhabi, including 4 buildings over 40 floors. District cooling connections on Reem Island and Al Maryah Island require specialized heat exchanger stations and energy metering systems that we design and install.`,
      'western-region': `The Western Region's climate is even more extreme than Abu Dhabi city: ambient temperatures reach 50 degrees Celsius, sandstorms blanket equipment in fine abrasive dust, and high salinity accelerates corrosion. Our Western Region HVAC designs specify oversized condensers rated for 55-degree Celsius ambient, heavy-duty sand filters with 50 percent more media area, and marine-grade epoxy coatings on all outdoor metalwork. For industrial clients in Ruwais, we design redundant cooling systems with N+1 chiller configuration to prevent process shutdowns. We have completed 42 HVAC projects in the Western Region, including 8 industrial facilities, 12 residential compounds, and 4 commercial buildings. Our Musaffah workshop delivers ductwork to Western Region sites within 24 hours.`,
    },
    image: '/images/services/hvac-works.webp',
    icon: 'lucide:thermometer',
    emergency: true,
    featured: true,
    processSteps: [
      {
        title: 'Load Calculation & Design',
        description:
          'We perform accurate heat load calculations and select optimal equipment for energy efficiency and comfort.',
      },
      {
        title: 'Duct Fabrication',
        description:
          'Our in-house factory fabricates ducts from pre-insulated and galvanized sheets to SMACNA and DW 142 standards.',
      },
      {
        title: 'System Installation',
        description:
          'We install DX, chilled water, and VRF systems with proper insulation, supports, and noise control measures.',
      },
      {
        title: 'Commissioning',
        description:
          'We test, balance, and commission the system to ensure it meets design specifications and authority requirements.',
      },
    ],
    priceRange: { min: 20000, max: 400000 },
    keywords: [
      'HVAC installation',
      'duct fabrication',
      'chilled water system',
      'VRF installation',
      'air conditioning',
    ],
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
