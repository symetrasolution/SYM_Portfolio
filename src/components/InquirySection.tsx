import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { useContent } from '../i18n/useContent';
import { submitInquiry } from '../lib/api';

interface InquirySectionProps {
  onOpenBooking: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const inq = content.inquiry;
  const contact = content.contact;
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectCity, setProjectCity] = useState(contact.projectCities[0]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [consent, setConsent] = useState(false);
  /** Honeypot: must stay empty (bots fill it). */
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await submitInquiry({
        kind: 'quick',
        fullName,
        phone: phoneNumber,
        city: projectCity,
        consent,
        website,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-[#062b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#062b24] rounded-3xl border border-[#F4F1EB]/15 shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle gold line on top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c7aa79] via-[#c7aa79] to-[#c7aa79]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Private Demonstration Copy (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-3">
                {inq.eyebrow}
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F1EB] tracking-tight mb-5"
                style={{ textWrap: 'balance' }}
              >
                {inq.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed max-w-xl mb-8">
                {inq.sub}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 bg-[#F4F1EB] hover:bg-white active:scale-[0.99] text-[#062b24] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>{inq.demoCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>

                <a
                  href={contact.hotlineHref}
                  className="px-6 py-3.5 bg-[#0a3930] hover:bg-[#0d4436] text-[#F4F1EB] border border-[#F4F1EB]/20 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c7aa79]" />
                  <span>{inq.callCta}</span>
                </a>
              </div>

              {/* Studio Direct Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#F4F1EB]/15">
                {contact.studios.map((studio) => (
                  <div key={studio.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0d4436] border border-[#F4F1EB]/15 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#c7aa79]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#aabdb5] block">
                        {studio.label}
                      </span>
                      <a
                        href={studio.phoneHref}
                        className="text-sm font-semibold text-[#F4F1EB] hover:text-[#c7aa79] font-mono"
                        dir="ltr"
                      >
                        {studio.phoneDisplay}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Direct Project Inquiry Card (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0a3930] rounded-2xl p-6 sm:p-8 border border-[#F4F1EB]/15 shadow-inner">
                {status === 'success' ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-[#F4F1EB]/20 border border-[#c7aa79] flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-[#c7aa79]" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#F4F1EB] mb-2">
                      {inq.successTitle}
                    </h3>
                    <p className="text-xs text-[#aabdb5] mb-4">
                      {inq.successBody.replace('{city}', projectCity)}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs text-[#c7aa79] font-semibold underline"
                    >
                      {inq.again}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-sm font-serif font-bold text-[#F4F1EB] uppercase tracking-wider mb-5">
                      {inq.formTitle}
                    </h3>

                    <div className="space-y-4 mb-5">
                      <div>
                        <label htmlFor="inq-name" className="block text-[11px] font-bold uppercase tracking-wider text-[#aabdb5] mb-1.5">
                          {inq.nameLabel}
                        </label>
                        <input
                          id="inq-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={inq.namePh}
                          className="w-full px-3.5 py-2.5 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] placeholder-[#6E7B72] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79]"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-phone" className="block text-[11px] font-bold uppercase tracking-wider text-[#aabdb5] mb-1.5">
                          {inq.phoneLabel}
                        </label>
                        <input
                          id="inq-phone"
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder={inq.phonePh}
                          dir="ltr"
                          className="w-full px-3.5 py-2.5 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] placeholder-[#6E7B72] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79] text-start"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-city" className="block text-[11px] font-bold uppercase tracking-wider text-[#aabdb5] mb-1.5">
                          {inq.cityLabel}
                        </label>
                        <select
                          id="inq-city"
                          value={projectCity}
                          onChange={(e) => setProjectCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-[#0a3930] border border-[#F4F1EB]/20 rounded-xl text-xs text-[#F4F1EB] focus:outline-none focus:ring-1 focus:ring-[#c7aa79] focus:border-[#c7aa79]"
                        >
                          {contact.projectCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
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
                    <label htmlFor="inq-consent" className="mb-4 flex items-start gap-2.5 cursor-pointer">
                      <input
                        id="inq-consent"
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#c7aa79] shrink-0"
                      />
                      <span className="text-[11px] text-[#aabdb5] leading-relaxed">
                        {inq.consent}
                      </span>
                    </label>

                    <p className="text-[11px] text-[#aabdb5] leading-relaxed mb-4">
                      {inq.privacy}
                    </p>

                    {status === 'error' && (
                      <div className="mb-4 p-3 rounded-xl bg-[#FBEBE9] border border-[#E7B8B2] text-[11px] text-[#8C2F26] leading-relaxed" role="alert">
                        {inq.failed}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3 px-5 bg-[#0f4f3e] hover:bg-[#156047] active:scale-[0.99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                    >
                      {status === 'sending' ? inq.sending : inq.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
