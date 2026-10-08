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

export interface RoomZone {
  id: string;
  name: string;
  tabLabel: string;
  nodeNumber: number;
  area: string;
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
    temperature: string;
    dimming: string;
    curtainState: string;
  };
  scenes: {
    id: string;
    name: string;
    description: string;
    temperature: string;
    dimming: string;
    curtainState: string;
  }[];
  latency: string;
  circuits: number;
}

export interface ResidenceProject {
  id: string;
  title: string;
  location: string;
  country: string;
  status: string;
  image: string;
  description: string;
  specs: {
    circuits: number;
    protocol: string;
    controlPoints: number;
    completion: string;
  };
}

export interface Scenario {
  id: string;
  number: string;
  title: string;
  iconName: string;
  description: string;
  automationSequence: string[];
}
