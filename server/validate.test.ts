import { describe, expect, it } from 'vitest';
import { inquirySchema } from './validate';

const bookingBase = {
  kind: 'booking',
  role: 'villa_owner',
  format: 'showroom',
  fullName: 'Test User',
  email: 't@example.com',
  countryCode: '+966',
  phone: '50 123 4567',
  city: 'Riyadh, KSA',
  window: 'morning',
  consent: true,
} as const;

describe('inquiry validation', () => {
  it('accepts a valid booking and a valid quick inquiry', () => {
    expect(inquirySchema.safeParse({ ...bookingBase, website: '' }).success).toBe(
      true,
    );
    expect(
      inquirySchema.safeParse({
        kind: 'quick',
        fullName: 'Q User',
        phone: '+201001234567',
        city: 'Cairo, Egypt',
        consent: true,
      }).success,
    ).toBe(true);
  });

  it('rejects missing consent, bad email and short phone', () => {
    expect(
      inquirySchema.safeParse({ ...bookingBase, consent: false }).success,
    ).toBe(false);
    expect(
      inquirySchema.safeParse({ ...bookingBase, email: 'not-an-email' }).success,
    ).toBe(false);
    expect(inquirySchema.safeParse({ ...bookingBase, phone: '123' }).success).toBe(
      false,
    );
  });

  it('rejects unknown enums and oversized bodies-in-miniature', () => {
    expect(
      inquirySchema.safeParse({ ...bookingBase, window: 'midnight' }).success,
    ).toBe(false);
    expect(
      inquirySchema.safeParse({ ...bookingBase, fullName: 'x'.repeat(200) }).success,
    ).toBe(false);
  });
});
