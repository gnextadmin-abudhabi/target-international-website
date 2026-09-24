// ============================================================
// Business Configuration
// ============================================================

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  phoneSecondary: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  website: string;
  googleBusinessUrl: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    linkedin: string;
    nextdoor: string;
    yelp: string;
  };
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  owner: string;
  legalName: string;
  hours: BusinessHours[];
  emergencyService: boolean;
  emergencyCta: string;
  logo: string;
  logoWhite: string;
  ogImage: string;
}

export const business: Business = {
  name: 'Target International',
  shortName: 'Target International',
  tagline: 'Complete MEP contracting solutions from design and supply to installation, testing, and commissioning across Abu Dhabi and the Western Region.',
  description: 'Target International is a leading MEP contracting company in Abu Dhabi, UAE. We specialize in HVAC, electrical, and plumbing services including annual maintenance contracts, design and installation, CFD analysis, duct cleaning, TAB reports, and complete MEP solutions for commercial, residential, and industrial projects.',

  phone: '02 554 4056',
  phoneHref: 'tel:+97125544056',
  phoneSecondary: '+971 50 502 0014',
  email: 'info@targetinternational.ae',

  address: {
    street: 'Elite Business Zone - Building D, 16, Musaffah - M 44',
    city: 'Abu Dhabi',
    state: 'Abu Dhabi',
    stateCode: 'AD',
    zip: '114389',
    country: 'United Arab Emirates',
  },
  coordinates: {
    lat: 24.4539,
    lng: 54.3773,
  },

  website: 'https://www.targetinternational.ae',
  googleBusinessUrl: '',

  socialMedia: {
    facebook: 'https://www.facebook.com/Target-International-MEP-contracting-solutions-239500936402046/',
    instagram: '',
    twitter: 'https://twitter.com/targetae',
    youtube: '',
    linkedin: 'https://www.linkedin.com/in/target-international-a4096711a',
    nextdoor: '',
    yelp: '',
  },

  license: 'Abu Dhabi Economic Licence CN-1809191',
  yearEstablished: 2014,
  serviceRadius: 'Abu Dhabi and the Western Region',
  owner: 'Majdi Hamdi Harouni',
  legalName: 'Target International Air Conditioning Contracting Maintenance L.L.C',

  hours: [
    { days: 'Saturday - Thursday', hours: '8:00 AM - 6:00 PM' },
    { days: 'Friday', hours: 'Closed' },
  ],
  emergencyService: true,
  emergencyCta: '24/7 Emergency MEP Service Available',

  logo: '/images/logo-transparent.png',
  logoWhite: '/images/logo-white.png',
  ogImage: '/images/og-image.jpg',
};

export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
