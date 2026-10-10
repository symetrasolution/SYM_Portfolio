import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Building,
  DraftingCompass,
  Briefcase,
  Home,
  FileCheck2,
  Video,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowRight,
  Download,
} from 'lucide-react';
import { UserRole, ExperienceFormat, DemoWindow, BookingFormData } from '../types';
import { useContent } from '../i18n/useContent';
import { COUNTRY_CODES } from '../i18n/shared';
import { submitInquiry } from '../lib/api';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const content = useContent();
  const bk = content.booking;
  const contact = content.contact;

  const [formData, setFormData] = useState<BookingFormData>({
    role: 'villa_owner',
    format: 'showroom',
    fullName: '',
    email: '',
    countryCode: COUNTRY_CODES[0].code,
    phone: '',
    city: contact.defaultBookingCity,
    window: 'afternoon',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  /** Server-issued reference — shown only when the API returns one. */
  const [refId, setRefId] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  /** Honeypot: must stay empty (bots fill it). */
  const [website, setWebsite] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleRoleChange = (role: UserRole) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleFormatChange = (format: ExperienceFormat) => {
    setFormData((prev) => ({ ...prev, format }));
  };

  const handleWindowChange = (demoWindow: DemoWindow) => {
    setFormData((prev) => ({ ...prev, window: demoWindow }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const result = await submitInquiry({
        kind: 'booking',
        role: formData.role,
        format: formData.format,
        fullName: formData.fullName,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        city: formData.city,
        window: formData.window,
        consent,
        website,
      });
      setRefId(result.id ?? null);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const formatLabel =
    formData.format === 'showroom'
      ? bk.formatShowroom
      : formData.format === 'onsite'
        ? bk.formatOnsite
        : bk.formatVirtual;

  const windowHours =
    contact.windows.find((w) => w.id === formData.window)?.hours ?? '';

  const handleDownloadCalendar = () => {
    const code = refId ?? 'pending';
    const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Symetra Solution//Sanctuary Demo//EN
BEGIN:VEVENT
UID:${code}@symetra.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Symetra Private Sanctuary Demonstration (${formData.format.toUpperCase()})
DESCRIPTION:VIP Architectural Automation Consultation. Reservation Code: ${code}. Location: ${formData.city}. Format: ${formData.format}.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([calendarContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Symetra_Demonstration_${code}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetModal = () => {
    setStatus('idle');
    setRefId(null);
    onClose();
  };

  if (!isOpen) return null;

  const roles: { id: UserRole; label: string; icon: React.ReactNode }[] = [
    { id: 'villa_owner', label: bk.roleOwner, icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'architect_designer', label: bk.roleArchitect, icon: <DraftingCompass className="w-3.5 h-3.5" /> },
    { id: 'commercial_partner', label: bk.rolePartner, icon: <Briefcase className="w-3.5 h-3.5" /> },
  ];

  const formats: {
    id: ExperienceFormat;
    title: string;
    body: string;
    icon: React.ReactNode;
  }[] = [
    { id: 'showroom', title: bk.showroomTitle, body: bk.showroomBody, icon: <Building className="w-4 h-4 text-[#c7aa79]" /> },
    { id: 'onsite', title: bk.onsiteTitle, body: bk.onsiteBody, icon: <FileCheck2 className="w-4 h-4 text-[#c7aa79]" /> },
    { id: 'virtual', title: bk.virtualTitle, body: bk.virtualBody, icon: <Video className="w-4 h-4 text-[#c7aa79]" /> },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#062b24]/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0a3930] rounded-2xl shadow-2xl border border-[#F4F1EB]/15 overflow-hidden my-6 z-10"
          role="dialog"
          aria-modal="true"
          aria-label={bk.title}
        >
          {status === 'success' ? (
            /* Success State Confirmation Card */
            <div className="p-8 sm:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F4F1EB]/20 border border-[#c7aa79] flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#c7aa79]" />
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-[#c7aa79]">
                {bk.successEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F1EB] mt-2 mb-3">
                {bk.successTitle}
              </h2>
              <p className="text-sm text-[#d5e0da] max-w-md mx-auto mb-6">
                {bk.successBody.replace('{name}', formData.fullName || bk.guestFallback)}
              </p>

              {/* VIP Pass Summary Card */}
              <div className="bg-[#0a3930] rounded-xl border border-[#F4F1EB]/15 p-5 text-start mb-6 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-3 border-b border-[#F4F1EB]/15">
                  <span className="text-xs text-[#8db5a2] uppercase font-semibold">{bk.passTitle}</span>
                  {refId && (
                    <span className="font-mono text-xs font-bold text-[#F4F1EB] bg-[#0a3930] px-2.5 py-1 rounded border border-[#F4F1EB]/20" dir="ltr">
                      {refId}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
                  <div>
                    <span className="text-[#aabdb5] block">{bk.formatLabel}</span>
                    <span className="font-medium text-[#F4F1EB] capitalize">
                      {formatLabel}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#aabdb5] block">{bk.windowLabel}</span>
                    <span className="font-medium text-[#F4F1EB] capitalize">
                      {formData.window} ({windowHours})
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#aabdb5] block">{bk.locationLabel}</span>
                    <span className="font-medium text-[#F4F1EB]">{formData.city}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#0a3930] border border-[#F4F1EB]/20 hover:bg-[#0d4436] text-xs font-semibold text-[#F4F1EB] rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#c7aa79]" />
                  <span>{bk.calendarCta}</span>
                </button>
                <button
                  onClick={resetModal}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0f4f3e] hover:bg-[#156047] text-xs font-semibold text-white rounded-xl transition-all shadow-sm"
                >
                  {bk.done}
                </button>
              </div>
            </div>
          ) : (
            /* Standard Booking Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* Header Row with Badge & Close */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4f3e] text-[#E5E9E7] text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#9dd7c2]"></span>
                  <span className="tracking-wide">{bk.badge}</span>
                  <span className="text-[#aabdb5]">·</span>
                  <span className="text-[#aabdb5]">{bk.badgeCities}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-[#0e4a3a] hover:bg-[#1E2C25] flex items-center justify-center text-[#d5e0da] hover:text-[#F4F1EB] transition-colors"
                  aria-label={bk.closeDialog}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#F4F1EB] tracking-tight">
                  {bk.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#aabdb5] mt-1 leading-relaxed">
                  {bk.sub}
                </p>
              </div>

              {/* 1. I AM INQUIRING AS */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8db5a2] mb-2">
                  {bk.step1}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => handleRoleChange(role.id)}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                        formData.role === role.id
                          ? 'bg-[#0f4f3e] text-white border-[#3A4A40] shadow-sm'
                          : 'bg-[#0a3930] text-[#d5e0da] border-[#F4F1EB]/15 hover:border-[#F4F1EB]/30'
                      }`}
                    >
                      {role.icon}
                      <span>{role.label}</span>
                      {formData.role === role.id && (
                        <Check className="w-3.5 h-3.5 text-[#c7aa79] ms-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. PREFERRED EXPERIENCE FORMAT */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8db5a2] mb-2">
                  {bk.step2}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {formats.map((format) => (
                    <div
                      key={format.id}
                      onClick={() => handleFormatChange(format.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.format === format.id
                          ? 'bg-[#0d4436] border-[#c7aa79] shadow-sm ring-1 ring-[#c7aa79]'
                          : 'bg-[#0a3930] border-[#F4F1EB]/15 hover:border-[#F4F1EB]/30'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          {format.icon}
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              formData.format === format.id
                                ? 'border-[#c7aa79] bg-[#c7aa79] text-white'
                                : 'border-[#F4F1EB]/30'
                            }`}
                          >
                            {formData.format === format.id && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <h4 className="text-xs font-bold text-[#F4F1EB]">{format.title}</h4>
                        <p className="text-[11px] text-[#8db5a2] mt-1 leading-snug">
                          {format.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. CONTACT & RESIDENCE LOCATION */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8db5a2] mb-2">
                  {bk.step3}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="bk-name" className="block text-[11px] font-medium text-[#8db5a2] mb-1">
                      {bk.nameLabel}
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder={bk.namePh}
                      className="w-full px-3 py-2 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] placeholder-[#6E7B72] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79]"
                    />
                  </div>
                  <div>
                    <label htmlFor="bk-email" className="block text-[11px] font-medium text-[#8db5a2] mb-1">
                      {bk.emailLabel}
                    </label>
                    <input
                      id="bk-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={bk.emailPh}
                      dir="ltr"
                      className="w-full px-3 py-2 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] placeholder-[#6E7B72] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79] text-start"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="bk-phone" className="block text-[11px] font-medium text-[#8db5a2] mb-1">
                      {bk.phoneLabel}
                    </label>
                    <div className="flex">
                      <select
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        dir="ltr"
                        className="px-2.5 py-2 bg-[#0e4a3a] border border-e-0 border-[#F4F1EB]/20 rounded-s-xl text-xs font-medium text-[#F4F1EB] focus:outline-none"
                      >
                        {COUNTRY_CODES.map((cc, i) => (
                          <option
                            key={cc.code}
                            value={cc.code}
                            title={contact.countryLabels[i] ?? cc.code}
                          >
                            {cc.flag} {cc.code}
                          </option>
                        ))}
                      </select>
                      <input
                        id="bk-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={bk.phonePh}
                        dir="ltr"
                        className="w-full px-3 py-2 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-e-xl text-xs text-[#F4F1EB] placeholder-[#6E7B72] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79] text-start"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bk-city" className="block text-[11px] font-medium text-[#8db5a2] mb-1">
                      {bk.cityLabel}
                    </label>
                    <select
                      id="bk-city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79]"
                    >
                      {contact.bookingCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. PREFERRED DEMONSTRATION WINDOW */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#8db5a2] mb-2">
                  {bk.step4}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {contact.windows.map((win) => (
                    <button
                      key={win.id}
                      type="button"
                      onClick={() => handleWindowChange(win.id)}
                      className={`py-2 px-2 text-center rounded-xl border text-xs transition-all ${
                        formData.window === win.id
                          ? 'bg-[#0d4436] border-[#c7aa79] text-[#F4F1EB] font-semibold ring-1 ring-[#c7aa79]'
                          : 'bg-[#0a3930] border-[#F4F1EB]/15 text-[#d5e0da] hover:border-[#F4F1EB]/30'
                      }`}
                    >
                      <div className="font-medium text-xs">{win.label}</div>
                      <div className="text-[10px] text-[#aabdb5]" dir="ltr">{win.hours}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Honeypot (bots fill it, humans never see it) */}
              <div className="absolute -start-[9999px] top-0" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              {/* Consent */}
              <label htmlFor="bk-consent" className="mb-4 flex items-start gap-2.5 cursor-pointer">
                <input
                  id="bk-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#c7aa79] shrink-0"
                />
                <span className="text-[11px] text-[#aabdb5] leading-relaxed">
                  {bk.consent}
                </span>
              </label>

              {/* Privacy Note Box */}
              <div className="mb-6 p-3 rounded-xl bg-[#0d4436] border border-[#F4F1EB]/15 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#9dd7c2] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#aabdb5] leading-relaxed">
                  <span className="font-semibold text-[#F4F1EB]">
                    {bk.privacyTitle}
                  </span>{' '}
                  {bk.privacyBody}
                </p>
              </div>

              {status === 'error' && (
                <div className="mb-4 p-3 rounded-xl bg-[#FBEBE9] border border-[#E7B8B2] text-[11px] text-[#8C2F26] leading-relaxed" role="alert">
                  {bk.failed}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:flex-1 py-3 px-5 bg-[#F4F1EB] hover:bg-white active:scale-[0.99] disabled:opacity-60 text-[#062b24] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>{status === 'sending' ? bk.sending : bk.submit}</span>
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 text-xs font-semibold text-[#8db5a2] hover:text-[#F4F1EB] hover:bg-[#0e4a3a] rounded-xl transition-colors"
                >
                  {bk.cancel}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
