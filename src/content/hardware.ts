import type { HardwareCategory } from '../types';

/**
 * Hardware categories — moved verbatim from src/data/mockData.ts (Phase 1),
 * with the two "Coming Soon" badges from HardwareCompatibility.tsx folded in
 * as roadmap entries. Phase 2 will re-map current protocols to
 * Zigbee / Tuya (local key) and keep KNX, DALI-2, AC as roadmap only.
 */
export const HARDWARE_CATEGORIES: HardwareCategory[] = [
  {
    title: 'Lighting Systems',
    description:
      'Smooth 0-100% dimming, DALI-2 addressing, tunable CCT white circadian matching, RGBW architectural cove strips.',
    icon: 'lightbulb',
    protocols: ['DALI-2', 'KNX', '0-10V', 'Phase Dimming'],
    status: 'current',
  },
  {
    title: 'Curtains & Blinds',
    description:
      'Somfy RTS & RS485, Dooya ultra-silent motors, bespoke motorized heavy drapery tracks with percentage positioning.',
    icon: 'blinds',
    protocols: ['RS485', 'Somfy RTS', 'Dry Contact', 'Zigbee Pro'],
    status: 'current',
  },
  {
    title: 'Sensors & Environmental',
    description:
      'Millimeter-wave (mmWave) presence radar, magnetic door contacts, water flood detection, smoke, air quality & CO2 sensors.',
    icon: 'activity',
    protocols: ['mmWave Radar', 'Modbus', 'BACnet', 'Zigbee 3.0'],
    status: 'current',
  },
  {
    title: 'Cameras & Surveillance',
    description:
      'Local ONVIF/RTSP NVR streaming, zero cloud mandatory subscriptions, continuous recording directly to on-site encrypted storage.',
    icon: 'camera',
    protocols: ['ONVIF Profile S/T', 'RTSP Direct', 'PoE+ Gigabit', 'Local NVMe'],
    status: 'current',
  },
  {
    title: 'Access & Smart Locks',
    description:
      'High-speed biometric fingerprint scanners, temporary visitor keypads, encrypted NFC badges, manual keyed failsafe overrides.',
    icon: 'lock',
    protocols: ['Wiegand', 'OSDP v2', 'Encrypted NFC', 'Fail-Secure Solenoid'],
    status: 'current',
  },
  {
    title: 'Switches & Interfaces',
    description:
      'Tempered glass touch consoles, anodized aluminium tactile push toggles, hidden in-wall relays matching any luxury designer plate.',
    icon: 'toggle-left',
    protocols: ['KNX Bus', 'Ultra-Low Voltage', 'Dry Contact', 'Ethernet PoE'],
    status: 'current',
  },
  {
    title: 'Air Conditioning (VRF & Split)',
    description: 'Roadmap item — integration details to be confirmed.',
    icon: 'wind',
    protocols: [],
    status: 'roadmap',
  },
  {
    title: 'KNX Protocol Bridge',
    description: 'Roadmap item — integration details to be confirmed.',
    icon: 'network',
    protocols: ['KNX'],
    status: 'roadmap',
  },
];
