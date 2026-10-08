import type { Scenario } from '../types';

/** Daily routine scenarios — moved verbatim from src/data/mockData.ts (Phase 1). */
export const SCENARIOS: Scenario[] = [
  {
    id: 'arriving_home',
    number: 'SCENARIO 01',
    title: 'Arriving Home',
    iconName: 'home',
    description:
      'Lights illuminate pathways smoothly, climate shifts to preferred comfort, and exterior perimeter gates disarm upon authorized arrival.',
    automationSequence: [
      'Perimeter vehicle transponder recognized',
      'Exterior driveway lanterns ramp to 60%',
      'HVAC transitions from eco (26°C) to comfort (22°C)',
      'Security deadbolts unlock with local audit stamp',
    ],
  },
  {
    id: 'good_night',
    number: 'SCENARIO 02',
    title: 'Good Night',
    iconName: 'moon',
    description:
      'Single tap beside the master bed locks all perimeter deadbolts, arms lower-level motion sensors, and gently turns off all interior luminaires.',
    automationSequence: [
      'Master bedside keypad triggered',
      'Interior luminaires smoothly fade to 0% over 8s',
      'All 8 perimeter exterior doors double-deadbolted',
      'Ground floor mmWave sensors armed for sentry patrol',
    ],
  },
  {
    id: 'away_mode',
    number: 'SCENARIO 03',
    title: 'Away Mode',
    iconName: 'plane',
    description:
      'Simulates natural presence with random soft lighting patterns, lowers AC power consumption to eco-mode, and triggers instant alerts upon unexpected motion.',
    automationSequence: [
      'Master key fob exit confirmed',
      'HVAC setpoint shifted to high-efficiency 27°C',
      'Natural occupancy simulation algorithm engaged',
      'Main domestic water supply solenoid safely closed',
    ],
  },
  {
    id: 'movie_time',
    number: 'SCENARIO 04',
    title: 'Movie Time',
    iconName: 'film',
    description:
      'Curtains glide shut, chandeliers dim to 10%, screen backlights transition to soft amber, and architectural acoustic profiles balance perfectly.',
    automationSequence: [
      'Private cinema room switch pressed',
      'Motorized velvet acoustic drapes glide 100% closed',
      'Architectural downlights dim to warm 10% candlelight',
      'Subwoofers power on and AVR zone switches to Cinema EQ',
    ],
  },
];
