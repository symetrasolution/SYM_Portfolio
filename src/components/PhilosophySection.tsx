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
            Local-First Philosophy
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-5"
            style={{ textWrap: 'balance' }}
          >
            True Luxury is Complete Peace of Mind.
          </h2>
          <p className="text-sm sm:text-base text-[#A6B4AD] leading-relaxed max-w-2xl mx-auto">
            Your home should keep working when the internet drops — and your daily life should stay inside your own walls.
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
                All automations, schedules and wall-switch actions run through the Home Assistant hub in your home — not through an internet server.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">Works Without Internet</span>
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
                When you travel, you check in on your home over secure remote access (VPN) — a private road back to your own system.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">Secure Remote Access (VPN)</span>
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
                Camera recordings and activity history are stored on hardware inside your home — not uploaded to someone else's servers.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1C362B]">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2BE76]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="uppercase tracking-wider">Stays In Your Home</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
