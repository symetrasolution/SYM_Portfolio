export type UserRole = 'villa_owner' | 'architect_designer' | 'commercial_partner';

export type ExperienceFormat = 'showroom' | 'onsite' | 'virtual';

export type DemoWindow = 'morning' | 'afternoon' | 'evening';

export interface BookingFormData {
  role: UserRole;
  format: ExperienceFormat;
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  city: string;
  window: DemoWindow;
}

/**
 * Room zones are qualitative only (TRUTH RULES): no areas, latencies,
 * circuit counts, temperatures or dimming figures. If the owner supplies
 * verified values, extend this type and CONTENT_TODO.md together.
 */
export interface RoomZone {
  id: string;
  name: string;
  tabLabel: string;
  nodeNumber: number;
  category: string;
  title: string;
  hardwareNodes: {
    icon: string;
    title: string;
    description: string;
  }[];
  activeScene: {
    name: string;
    description: string;
  };
  scenes: {
    id: string;
    name: string;
    description: string;
  }[];
}

/**
 * Portfolio entries are illustrative "In progress" placeholders with no
 * specs. Replace with real projects when available (see CONTENT_TODO.md).
 */
export interface ResidenceProject {
  id: string;
  title: string;
  location: string;
  country: string;
  status: 'In progress';
  image: string;
  description: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalAppendixItem {
  title: string;
  description: string;
}

export interface Scenario {
  id: string;
  number: string;
  title: string;
  iconName: string;
  description: string;
  automationSequence: string[];
}

export type HardwareStatus = 'current' | 'roadmap';

export interface HardwareCategory {
  title: string;
  description: string;
  icon: string;
  protocols: string[];
  status: HardwareStatus;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface PartnershipInfo {
  eyebrow: string;
  headline: string;
  allianceName: string;
  cities: string[];
}

export interface StudioContact {
  city: string;
  label: string;
  phoneDisplay: string;
  phoneHref: string;
}

export interface ContactInfo {
  engineerHotlineHref: string;
  engineerHotlineLabel: string;
  engineerHotlineDisplay: string;
  emails: { label: string; href: string }[];
  studios: StudioContact[];
  projectCities: string[];
  countryCodes: { code: string; flag: string; label: string }[];
  demoWindows: { id: DemoWindow; label: string; hours: string }[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SiteMeta {
  name: string;
  tagline: string;
  description: string;
}
