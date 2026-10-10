import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Network,
  Cpu,
  Smartphone,
  ChevronDown,
  ArrowRight,
  Radio,
} from 'lucide-react';
import { useContent } from '../i18n/useContent';

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'network':
      return <Network className="w-6 h-6 text-[#c7aa79]" />;
    case 'cpu':
      return <Cpu className="w-6 h-6 text-[#c7aa79]" />;
    case 'smartphone':
      return <Smartphone className="w-6 h-6 text-[#c7aa79]" />;
    default:
      return <Radio className="w-6 h-6 text-[#c7aa79]" />;
  }
};

interface HowItWorksProps {
  onOpenBooking: () => void;
}

/**
 * Plain-language explainer for non-technical visitors, with an expandable
 * technical appendix for engineers. Visual language matches the rest of
 * the portfolio (cards, badges, motion).
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const how = content.how;
  const reduceMotion = useReducedMotion();
  const [appendixOpen, setAppendixOpen] = useState(false);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#062b24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-2">
            {how.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4F1EB] tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            {how.title}
          </h2>
          <p className="text-sm sm:text-base text-[#d5e0da] leading-relaxed max-w-2xl mx-auto">
            {how.sub}
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
          {how.steps.map((step, idx) => {
            const isDark = idx === 1;
            return (
              <motion.div
                key={step.number}
                whileHover={{ y: -4 }}
                className={`rounded-3xl p-8 border flex flex-col justify-between relative transition-all ${
                  isDark
                    ? 'bg-[#0a3930] border-[#F4F1EB]/15 text-white shadow-xl'
                    : 'bg-[#0a3930] border-[#F4F1EB]/15 shadow-sm'
                }`}
              >
                {isDark && (
                  <div className="absolute top-0 end-0 -me-16 -mt-16 w-48 h-48 rounded-full bg-[#F4F1EB]/10 blur-3xl pointer-events-none" />
                )}
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${
                      isDark
                        ? 'bg-[#0d4436] border-[#F4F1EB]/15'
                        : 'bg-[#0e4a3a] border-[#F4F1EB]/15'
                    }`}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-widest block mb-2 ${
                      isDark ? 'text-[#c7aa79]' : 'text-[#aabdb5]'
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-3 font-serif ${
                      isDark ? 'text-white' : 'text-[#F4F1EB]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? 'text-[#aabdb5]' : 'text-[#aabdb5]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                {idx < how.steps.length - 1 && (
                  <div className="hidden lg:flex absolute -end-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#F4F1EB] border-4 border-[#062b24] items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-[#F4F1EB] rtl:-scale-x-100" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Technical appendix for engineers */}
        <div className="max-w-4xl mx-auto bg-[#0a3930] rounded-3xl border border-[#F4F1EB]/15 shadow-sm overflow-hidden">
          <button
            onClick={() => setAppendixOpen(!appendixOpen)}
            aria-expanded={appendixOpen}
            className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-start hover:bg-[#0d4436]/60 transition-colors"
          >
            <div>
              <span className="text-xs font-semibold text-[#c7aa79] uppercase tracking-wider block">
                {how.appendixEyebrow}
              </span>
              <span className="text-lg font-serif font-bold text-[#F4F1EB]">
                {how.appendixTitle}
              </span>
            </div>
            <span
              className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                appendixOpen
                  ? 'bg-[#0f4f3e] border-[#3A4A40] rotate-180'
                  : 'bg-[#0a3930] border-[#F4F1EB]/20'
              }`}
            >
              <ChevronDown
                className={`w-4 h-4 ${appendixOpen ? 'text-[#c7aa79]' : 'text-[#d5e0da]'}`}
              />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {appendixOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-7 pb-7 pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#F4F1EB]/15">
                  {how.appendix.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-[#0d4436] border border-[#F4F1EB]/15 mt-3"
                    >
                      <h4 className="text-xs font-bold text-[#F4F1EB] mb-1 font-mono">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#aabdb5] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      onClick={onOpenBooking}
                      className="text-[11px] font-semibold text-[#c7aa79] hover:text-[#F4F1EB] flex items-center gap-1.5 transition-colors"
                    >
                      <span>{how.appendixCta}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
