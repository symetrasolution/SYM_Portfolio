import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Shield,
  Layers,
  WifiOff,
  CloudOff,
  Cpu,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { useContent } from '../i18n/useContent';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const content = useContent();
  const hero = content.hero;
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow & Hero Copy */}
        <motion.div style={{ y: contentY }} className="max-w-3xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B3934B] mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B3934B]"></span>
            <span>{hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#14231C] tracking-tight leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {hero.titleStart}{' '}
            <span className="text-[#8B7340]">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#4A554E] leading-relaxed max-w-2xl mb-8"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 bg-[#14231C] hover:bg-[#1C3228] active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-[#E2BE76] rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>

            <a
              href="#architecture"
              className="px-6 py-3.5 bg-[#EFECE3] hover:bg-[#E5E1D5] text-[#14231C] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>{hero.secondaryCta}</span>
              <ChevronDown className="w-4 h-4 text-[#6B756E]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual Carrier with Live Architectural Overlay Pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2DDD0] mb-16 aspect-[16/9] max-h-[560px] group"
        >
          <motion.img
            src={content.site.heroImage}
            alt={hero.imgAlt}
            style={{ y: imageY, scale: imageScale }}
            className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
            referrerPolicy="no-referrer"
          />

          {/* Measured Ambient Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1612]/70 via-transparent to-transparent pointer-events-none" />

          {/* Floating Telemetry & System Node Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-auto">
            <div className="bg-[#14231C]/90 backdrop-blur-md border border-[#E2BE76]/30 px-4 py-2.5 rounded-xl text-white flex items-center gap-3 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
              </span>
              <div>
                <span className="text-xs font-bold tracking-wide block">
                  {hero.liveTitle}
                </span>
                <span className="text-[10px] text-[#A8B2AC]">
                  {hero.liveSub}
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="bg-[#14231C]/80 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white text-xs flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#E2BE76]" />
                <span>{hero.offlineBadge}</span>
              </div>
              <div className="bg-[#14231C]/80 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white text-xs flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>{hero.vpnBadge}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Layers className="w-5 h-5 text-[#8B7340]" />, card: hero.cards[0] },
            { icon: <WifiOff className="w-5 h-5 text-[#8B7340]" />, card: hero.cards[1] },
            { icon: <CloudOff className="w-5 h-5 text-[#8B7340]" />, card: hero.cards[2] },
          ].map(({ icon, card }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-5">
                  {icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14231C] mb-2 font-serif">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                  {card.body}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-semibold text-[#8C958E]">
                <span className="tracking-wider uppercase">{card.tag}</span>
                <span className="text-[#C53030]" aria-hidden="true">✕</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
