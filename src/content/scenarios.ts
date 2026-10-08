import type { Scenario } from '../types';

/**
 * Daily routine scenarios — qualitative only (TRUTH RULES).
 * No temperatures, timers, counts or brand-specific steps.
 */
export const SCENARIOS: Scenario[] = [
  {
    id: 'arriving_home',
    number: 'SCENARIO 01',
    title: 'Arriving Home',
    iconName: 'home',
    description:
      'The house notices your arrival and gets ready: paths light up, the entrance opens for you, and everything settles to comfort.',
    automationSequence: [
      'Your arrival is recognized at the gate',
      'Driveway and entrance lights come on',
      'The door unlocks for you',
      'The home settles into its welcome scene',
    ],
  },
  {
    id: 'good_night',
    number: 'SCENARIO 02',
    title: 'Good Night',
    iconName: 'moon',
    description:
      'One tap beside the bed settles the whole home: lights fade out, doors lock, and the ground floor keeps a quiet watch.',
    automationSequence: [
      'Master bedside button pressed',
      'Interior lights fade out gently',
      'Doors lock for the night',
      'Ground-floor sensors keep a quiet watch',
    ],
  },
  {
    id: 'away_mode',
    number: 'SCENARIO 03',
    title: 'Away Mode',
    iconName: 'plane',
    description:
      'Leaving for a trip? The home looks lived-in, stays efficient, and lets you check in securely from anywhere.',
    automationSequence: [
      'Away mode confirmed as you leave',
      'Lights follow a lived-in pattern',
      'Water supply closes for safety',
      'Check in anytime over secure remote access',
    ],
  },
  {
    id: 'movie_time',
    number: 'SCENARIO 04',
    title: 'Movie Time',
    iconName: 'film',
    description:
      'One scene dims the room, closes the curtains, and sets the sound — the cinema comes to you.',
    automationSequence: [
      'Movie scene started',
      'Curtains glide closed',
      'Lights dim to a soft glow',
      'Sound switches to cinema mode',
    ],
  },
];
