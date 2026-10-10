import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, HardDrive, Wifi, CheckCircle2 } from 'lucide-react';
import { useContent } from '../i18n/useContent';

const CARD_ICONS = [
  <Wifi key="wifi" className="w-6 h-6 text-[#c7aa79]" />,
  <Lock key="lock" className="w-6 h-6 text-[#c7aa79]" />,
  <HardDrive key="drive" className="w-6 h-6 text-[#c7aa79]" />,
];

export const PhilosophySection: React.FC = () => {
  const content = useContent();
  const ph = content.philosophy;

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#062b24] text-white relative overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F4F1EB]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c7aa79] block mb-3">
            {ph.eyebrow}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            {ph.title}
          </h2>
          <p className="text-sm sm:text-base text-[#aabdb5] leading-relaxed max-w-2xl mx-auto">
            {ph.sub}
          </p>
        </div>

        {/* 3 Dark Emerald Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ph.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#0a3930]/90 rounded-3xl p-8 border border-[#F4F1EB]/15 hover:border-[#9dd7c2]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0d4436] border border-[#F4F1EB]/15 flex items-center justify-center text-[#c7aa79] mb-6">
                  {CARD_ICONS[i] ?? <ShieldCheck className="w-6 h-6 text-[#c7aa79]" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#aabdb5] leading-relaxed mb-8">
                  {card.body}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F4F1EB]/15">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#c7aa79]">
                  <CheckCircle2 className="w-4 h-4 text-[#9dd7c2]" />
                  <span className="uppercase tracking-wider">{card.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
