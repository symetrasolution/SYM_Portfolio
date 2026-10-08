import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, HardDrive, Wifi, CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#0C1813] text-white relative overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E2BE76]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-3">
            Zero-Cloud Philosophy
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            True Luxury is Complete Peace of Mind.
          </h2>
          <p className="text-sm sm:text-base text-[#A6B4AD] leading-relaxed max-w-2xl mx-auto">
            Your private living spaces should never be monetized, streamed overseas, or rendered disabled by external internet service blackouts.
          </p>
        </div>

        {/* 3 Dark Emerald Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#11231C]/90 rounded-3xl p-8 border border-[#1E362C] hover:border-[#2C4D3F] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#172E24] border border-[#274B3B] flex items-center justify-center text-[#E2BE76] mb-6">
                <Wifi className="w-6 h-6 text-[#E2BE76]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                Runs locally, even without internet
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B4AD] leading-relaxed mb-8">
                All automations, timed schedules, and wall keypad actions run straight through your villa's local hub. Complete independence from global network drops.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">100% Local Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#11231C]/90 rounded-3xl p-8 border border-[#1E362C] hover:border-[#2C4D3F] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#172E24] border border-[#274B3B] flex items-center justify-center text-[#E2BE76] mb-6">
                <Lock className="w-6 h-6 text-[#E2BE76]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                Secure remote access
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B4AD] leading-relaxed mb-8">
                When you travel abroad, our encrypted direct peer-to-peer tunnel connects you safely back to your residence. Zero intermediate data harvesting or paid subscriptions.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">End-To-End Cryptography</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#11231C]/90 rounded-3xl p-8 border border-[#1E362C] hover:border-[#2C4D3F] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#172E24] border border-[#274B3B] flex items-center justify-center text-[#E2BE76] mb-6">
                <HardDrive className="w-6 h-6 text-[#E2BE76]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                Your data stays in your home
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B4AD] leading-relaxed mb-8">
                Video feeds, activity logs, presence maps, and door events are written strictly to hardware located within your private property boundaries.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">Absolute Data Sovereignty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
