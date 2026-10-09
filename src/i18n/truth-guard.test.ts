import { describe, expect, it } from 'vitest';
import { enBundle } from './locales/en';
import { arBundle } from './locales/ar';

/**
 * Truth-rule guards (both languages): KNX / DALI-2 are never 'current',
 * rooms carry no metric figures, projects carry no specs.
 */
describe('truth rules', () => {
  for (const [lang, bundle] of [
    ['en', enBundle],
    ['ar', arBundle],
  ] as const) {
    it(`[${lang}] KNX/DALI-2 appear only as roadmap`, () => {
      for (const cat of bundle.hardware.categories) {
        const hay = `${cat.title} ${cat.protocols.join(' ')}`.toLowerCase();
        if (cat.status === 'current') {
          expect(hay, cat.title).not.toMatch(/knx|dali/);
        }
      }
      const roadmap = bundle.hardware.categories.filter(
        (c) => c.status === 'roadmap',
      );
      expect(roadmap.length).toBeGreaterThanOrEqual(3);
    });

    it(`[${lang}] rooms carry no metric figures`, () => {
      const dump = JSON.stringify(bundle.floor.rooms);
      expect(dump).not.toMatch(/\d+\s?(ms|m²)/);
      expect(dump.toLowerCase()).not.toMatch(/circuits|latency/);
    });

    it(`[${lang}] projects are spec-free placeholders`, () => {
      for (const p of bundle.projects.items) {
        expect(p.status).toBe('In progress');
        expect(p).not.toHaveProperty('specs');
      }
    });
  }
});
