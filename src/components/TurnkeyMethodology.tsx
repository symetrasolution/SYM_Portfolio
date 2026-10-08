import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { METHODOLOGY_STEPS, PARTNERSHIP } from '../content/methodology';

export const TurnkeyMethodology: React.FC = () => {
  const steps = METHODOLOGY_STEPS;

  return (
    <section id="turnkey" className="py-20 lg:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B3934B] block mb-2">
            Turnkey Methodology
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14231C] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            From Blueprint to Handover
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E] leading-relaxed max-w-2xl mx-auto">
            A disciplined engineering lifecycle tailored to luxury residences under construction or undergoing high-end refurbishment.
          </p>
        </div>

        {/* 5 Steps Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Connector Line behind steps (hidden on mobile) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E2DDD0] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Number Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#14231C] text-white flex items-center justify-center font-bold text-sm tracking-wide mb-5 shadow-md border-4 border-[#FAF8F2] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#8B7340]">
                  {step.number}
                </div>

                <h3 className="text-base font-bold text-[#14231C] mb-2 font-serif">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C6660] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Systems Partnership Banner: Symetra Solution × Conecta */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DA] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="w-12 h-12 rounded-xl bg-[#14231C] text-[#E2BE76] flex items-center justify-center font-bold text-sm shadow-sm"
                aria-label="Symetra Solution logo"
              >
                S
              </div>
              <span className="text-[#B3934B] font-bold">×</span>
              <div
                className="w-12 h-12 rounded-xl border-2 border-dashed border-[#C9C2B2] bg-[#F7F5EE] text-[#858E87] flex items-center justify-center"
                aria-label="Conecta logo (to be supplied)"
                title="Conecta logo — see CONTENT_TODO.md"
              >
                <Award className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#858E87] block">
                {PARTNERSHIP.eyebrow}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#14231C]">
                {PARTNERSHIP.headline}
              </h4>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 text-right">
            <span className="text-xs font-semibold text-[#14231C]">
              {PARTNERSHIP.allianceName}
            </span>
            <div className="flex items-center gap-2 text-xs text-[#6B756E]">
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
