import { describe, expect, it } from 'vitest';
import { enBundle } from './locales/en';
import { arBundle } from './locales/ar';

/** EN↔AR structural parity: same ids, same lengths, no missing entries. */
describe('bundle parity', () => {
  it('rooms match by id, node and scene count', () => {
    expect(arBundle.floor.rooms.map((r) => r.id)).toEqual(
      enBundle.floor.rooms.map((r) => r.id),
    );
    for (const enRoom of enBundle.floor.rooms) {
      const arRoom = arBundle.floor.rooms.find((r) => r.id === enRoom.id);
      expect(arRoom, `room ${enRoom.id}`).toBeDefined();
      expect(arRoom!.hardwareNodes.length).toBe(enRoom.hardwareNodes.length);
      expect(arRoom!.scenes.map((s) => s.id)).toEqual(
        enRoom.scenes.map((s) => s.id),
      );
    }
  });

  it('scenarios, hardware, steps and projects match by id/count', () => {
    expect(arBundle.moments.scenarios.map((s) => s.id)).toEqual(
      enBundle.moments.scenarios.map((s) => s.id),
    );
    expect(arBundle.hardware.categories.length).toBe(
      enBundle.hardware.categories.length,
    );
    expect(arBundle.method.steps.length).toBe(enBundle.method.steps.length);
    expect(arBundle.projects.items.map((p) => p.id)).toEqual(
      enBundle.projects.items.map((p) => p.id),
    );
    expect(arBundle.how.steps.length).toBe(enBundle.how.steps.length);
    expect(arBundle.how.appendix.length).toBe(enBundle.how.appendix.length);
    expect(arBundle.contact.windows.map((w) => w.id)).toEqual(
      enBundle.contact.windows.map((w) => w.id),
    );
  });

  it('SEO meta strings are present in both languages', () => {
    for (const bundle of [enBundle, arBundle]) {
      expect(bundle.site.metaTitle.length).toBeGreaterThan(10);
      expect(bundle.site.metaDescription.length).toBeGreaterThan(20);
    }
  });
});
