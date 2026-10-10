import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { useContent } from '../i18n/useContent';

export const TurnkeyMethodology: React.FC = () => {
  const content = useContent();
  const method = content.method;
  const steps = method.steps;
  const PARTNERSHIP = method.partnership;

  return (
    <section id="turnkey" className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#508876] block mb-2">
            {method.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#142d28] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {method.title}
          </h2>
          <p className="text-sm sm:text-base text-[#476058] leading-relaxed max-w-2xl mx-auto">
            {method.sub}
          </p>
        </div>

        {/* 5 Steps Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Connector Line behind steps (hidden on mobile) */}
          <div className="hidden lg:block absolute top-7 start-12 end-12 h-0.5 bg-[#142d28]/15 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-start lg:items-center text-start lg:text-center group"
              >
                {/* Number Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#0D4C3C] text-[#F4F1EB] flex items-center justify-center font-bold text-sm tracking-wide mb-5 shadow-md border-4 border-[#F4F1EB] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#c7aa79] group-hover:text-[#062b24]">
                  {step.number}
                </div>

                <h3 className="text-base font-bold text-[#142d28] mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="text-xs text-[#476058] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Systems Partnership Banner: Symetra Solution × Conecta */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#142d28]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="w-12 h-12 rounded-xl bg-[#0D4C3C] text-[#F4F1EB] flex items-center justify-center font-bold text-sm shadow-sm"
                aria-label={PARTNERSHIP.symetraLogoLabel}
              >
                S
              </div>
              <span className="text-[#60A5FA] font-bold">×</span>
              <div
                className="w-12 h-12 rounded-xl border-2 border-dashed border-[#60A5FA]/50 bg-[#60A5FA]/10 text-[#60A5FA] flex items-center justify-center"
                aria-label={PARTNERSHIP.conectaLogoLabel}
                title={PARTNERSHIP.conectaLogoTitle}
              >
                <Award className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8db5a2] block">
                {PARTNERSHIP.eyebrow}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#142d28]">
                {PARTNERSHIP.headline}
              </h4>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 text-end">
            <span className="text-xs font-semibold text-[#142d28]">
              {PARTNERSHIP.allianceName}
            </span>
            <div className="flex items-center gap-2 text-xs text-[#476058]">
              {PARTNERSHIP.cities.map((city, i) => (
                <span key={city} className="flex items-center gap-2">
                  {i > 0 && <span>•</span>}
                  <span>{city}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
