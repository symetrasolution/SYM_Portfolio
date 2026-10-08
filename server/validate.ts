import { z } from 'zod';

const nonEmpty = (max: number) =>
  z
    .string()
    .trim()
    .min(1, 'required')
    .max(max, 'too_long');

const phoneField = z
  .string()
  .trim()
  .min(7, 'phone_too_short')
  .max(20, 'too_long')
  .regex(/^[+()\d][\d\s().-]*$/, 'phone_invalid');

const baseFields = {
  fullName: nonEmpty(120),
  consent: z.literal(true, {
    message: 'consent_required',
  }),
  /** Honeypot: humans leave it empty; bots fill it. */
  website: z.string().max(500).optional().default(''),
};

export const bookingSchema = z.object({
  kind: z.literal('booking'),
  role: z.enum(['villa_owner', 'architect_designer', 'commercial_partner']),
  format: z.enum(['showroom', 'onsite', 'virtual']),
  email: z.string().trim().max(254).email('email_invalid'),
  countryCode: z.string().trim().min(2).max(6).regex(/^\+\d+$/, 'code_invalid'),
  phone: phoneField,
  city: nonEmpty(120),
  window: z.enum(['morning', 'afternoon', 'evening']),
  ...baseFields,
});

export const quickSchema = z.object({
  kind: z.literal('quick'),
  phone: phoneField,
  city: nonEmpty(120),
  ...baseFields,
});

export const inquirySchema = z.discriminatedUnion('kind', [
  bookingSchema,
  quickSchema,
]);

export type InquiryPayload = z.infer<typeof inquirySchema>;
