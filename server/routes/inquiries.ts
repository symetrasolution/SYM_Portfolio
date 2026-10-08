import { Router } from 'express';
import type { InquiryStore } from '../store';
import { inquirySchema } from '../validate';
import { sendInquiryEmail, sendWhatsAppStub } from '../notify';

export function inquiriesRouter(store: InquiryStore) {
  const router = Router();

  router.post('/', async (req, res) => {
    const parsed = inquirySchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        ok: false,
        error: 'validation',
        details: parsed.error.issues.map((i) => ({
          field: i.path.join('.'),
          message: i.message,
        })),
      });
      return;
    }

    // Honeypot filled → pretend success without storing anything.
    if (parsed.data.website && parsed.data.website.trim() !== '') {
      res.json({ ok: true });
      return;
    }

    try {
      const stored = await store.save({
        ...parsed.data,
        ip: req.ip ?? 'unknown',
      });
      // Email is primary delivery but never blocks the user response.
      void sendInquiryEmail(stored).then(() => sendWhatsAppStub(stored));
      res.status(201).json({ ok: true, id: stored.id });
    } catch (err) {
      console.error('[inquiries] store failed:', err);
      res.status(500).json({ ok: false, error: 'server' });
    }
  });

  return router;
}
