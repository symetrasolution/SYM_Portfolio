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
    <section id="inquiry" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F2] rounded-3xl border border-[#E8E2D5] shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle gold line on top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B3934B] via-[#E2BE76] to-[#B3934B]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Private Demonstration Copy (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B3934B] block mb-3">
                {inq.eyebrow}
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231C] tracking-tight mb-5"
                style={{ textWrap: 'balance' }}
              >
                {inq.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-xl mb-8">
                {inq.sub}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 bg-[#E2BE76] hover:bg-[#D4AF63] active:scale-[0.99] text-[#14231C] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>{inq.demoCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>

                <a
                  href={contact.hotlineHref}
                  className="px-6 py-3.5 bg-white hover:bg-[#F7F4EB] text-[#14231C] border border-[#DDD7C8] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B3934B]" />
                  <span>{inq.callCta}</span>
                </a>
              </div>

              {/* Studio Direct Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#EAE6DC]">
                {contact.studios.map((studio) => (
                  <div key={studio.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F4F1EA] border border-[#E2DDD0] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#8B7340]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B64] block">
                        {studio.label}
                      </span>
                      <a
                        href={studio.phoneHref}
                        className="text-sm font-semibold text-[#14231C] hover:text-[#8B7340] font-mono"
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
              <div className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-8 border border-[#E4DEC9] shadow-inner">
                {status === 'success' ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-[#E2BE76]/20 border border-[#E2BE76] flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-[#8B7340]" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#14231C] mb-2">
                      {inq.successTitle}
                    </h3>
                    <p className="text-xs text-[#5C6660] mb-4">
                      {inq.successBody.replace('{city}', projectCity)}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-xs text-[#8B7340] font-semibold underline"
                    >
                      {inq.again}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-sm font-serif font-bold text-[#14231C] uppercase tracking-wider mb-5">
                      {inq.formTitle}
                    </h3>

                    <div className="space-y-4 mb-5">
                      <div>
                        <label htmlFor="inq-name" className="block text-[11px] font-bold uppercase tracking-wider text-[#5F6B64] mb-1.5">
                          {inq.nameLabel}
                        </label>
                        <input
                          id="inq-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={inq.namePh}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] placeholder-[#A8B2AC] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-phone" className="block text-[11px] font-bold uppercase tracking-wider text-[#5F6B64] mb-1.5">
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
                          className="w-full px-3.5 py-2.5 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] placeholder-[#A8B2AC] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B] text-start"
                        />
                      </div>

                      <div>
                        <label htmlFor="inq-city" className="block text-[11px] font-bold uppercase tracking-wider text-[#5F6B64] mb-1.5">
                          {inq.cityLabel}
                        </label>
                        <select
                          id="inq-city"
                          value={projectCity}
                          onChange={(e) => setProjectCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#DDD7C8] rounded-xl text-xs text-[#14231C] focus:outline-none focus:ring-1 focus:ring-[#B3934B] focus:border-[#B3934B]"
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
                        className="mt-0.5 w-4 h-4 accent-[#14231C] shrink-0"
                      />
                      <span className="text-[11px] text-[#556059] leading-relaxed">
                        {inq.consent}
                      </span>
                    </label>

                    <p className="text-[11px] text-[#5F6B64] leading-relaxed mb-4">
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
                      className="w-full py-3 px-5 bg-[#14231C] hover:bg-[#1E332A] active:scale-[0.99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
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
