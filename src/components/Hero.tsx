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
import { HERO_IMAGE } from '../content/site';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
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
            <span>Architectural Calm • On-Premises Compute</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#14231C] tracking-tight leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            One smart brain inside your home.{' '}
            <span className="text-[#8B7340]">Fully private.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#4A554E] leading-relaxed max-w-2xl mb-8"
          >
            Intelligent living engineered for complete privacy and local reliability in Egypt &amp; Saudi Arabia.
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
              <span>Schedule Showroom Demo</span>
              <ArrowRight className="w-4 h-4 text-[#E2BE76] transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#architecture"
              className="px-6 py-3.5 bg-[#EFECE3] hover:bg-[#E5E1D5] text-[#14231C] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore System Architecture</span>
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
            src={HERO_IMAGE}
            alt="Symetra Luxury Modern Villa Living Room with Integrated Architectural Automation"
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
                  100% In-Villa Local Compute
                </span>
                <span className="text-[10px] text-[#A8B2AC]">
                  Zero Cloud Dependence • Direct Neural Bus
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="bg-[#14231C]/80 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white text-xs flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#E2BE76]" />
                <span>Response Latency: &lt;10ms</span>
              </div>
              <div className="bg-[#14231C]/80 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white text-xs flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Encrypted P2P Tunnel</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pain Points Cards (Matching Image 1.png exactly!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-5">
                <Layers className="w-5 h-5 text-[#8B7340]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#14231C] mb-2 font-serif">
                Too many apps
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                Different vendors forcing 6+ disconnected applications, fragmented daily routines, conflicting notifications, and endless logins.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-semibold text-[#8C958E]">
              <span className="tracking-wider uppercase">Fragmented Ecosystem</span>
              <span className="text-[#C53030]">✕</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-5">
                <WifiOff className="w-5 h-5 text-[#8B7340]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#14231C] mb-2 font-serif">
                Depends on the internet
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                When the internet connection drops or cloud servers fail, your physical switches, lights, and automated climate schedules stop responding.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-semibold text-[#8C958E]">
              <span className="tracking-wider uppercase">External Server Lag</span>
              <span className="text-[#C53030]">✕</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DA] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F6F4EE] border border-[#E8E2D5] flex items-center justify-center text-[#14231C] mb-5">
                <CloudOff className="w-5 h-5 text-[#8B7340]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#14231C] mb-2 font-serif">
                Your data leaves your home
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed mb-6">
                Camera streams, personal voices, and sensitive family habits are broadcast to overseas cloud infrastructure, compromising private moments.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-semibold text-[#8C958E]">
              <span className="tracking-wider uppercase">Third-Party Cloud Exposure</span>
              <span className="text-[#C53030]">✕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
