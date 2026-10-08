import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1612] text-white pt-20 pb-12 border-t border-[#1C2C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C2C23]">
          {/* Brand & Mission Statement (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#192F25] text-[#E2BE76] flex items-center justify-center font-bold text-sm tracking-wider border border-[#2A4B3C]">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                Symetra Solution
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A6B4AD] leading-relaxed mb-6 max-w-sm">
              Intelligent living engineered for complete privacy and local reliability in Egypt &amp; Saudi Arabia.
            </p>

            <span className="text-[11px] font-mono tracking-widest uppercase text-[#E2BE76] font-semibold block">
              Architectural Calm • Local Compute
            </span>
          </div>

          {/* Navigation Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              Navigation
            </span>
            <ul className="space-y-3 text-xs text-[#A6B4AD]">
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#living-spaces" className="hover:text-white transition-colors">
                  Hardware &amp; Nodes
                </a>
              </li>
              <li>
                <a href="#living-spaces" className="hover:text-white transition-colors">
                  Atmosphere Scenarios
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Zero-Cloud Privacy
                </a>
              </li>
              <li>
                <a href="#residences" className="hover:text-white transition-colors">
                  Private Residences
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Studios (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              Regional Studios
            </span>
            <div className="space-y-4 text-xs text-[#A6B4AD]">
              <div>
                <span className="font-semibold text-white block">Riyadh</span>
                <span className="text-[11px]">Al Malqa District, KSA</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Jeddah</span>
                <span className="text-[11px]">Al Shati District, KSA</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Cairo</span>
                <span className="text-[11px]">Fifth Settlement, New Cairo, EG</span>
              </div>
            </div>
          </div>

          {/* Direct Desk & Certification (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              Direct Desk
            </span>
            <div className="space-y-2.5 text-xs text-[#A6B4AD] mb-6">
              <a
                href="mailto:concierge@symetra.com"
                className="hover:text-white transition-colors block font-mono"
              >
                concierge@symetra.com
              </a>
              <a
                href="mailto:support.ksa@symetra.com"
                className="hover:text-white transition-colors block font-mono"
              >
                support.ksa@symetra.com
              </a>
              <a
                href="tel:+966118204000"
                className="hover:text-white transition-colors block font-mono"
              >
                +966 11 820 4000
              </a>
              <a
                href="tel:+20228105000"
                className="hover:text-white transition-colors block font-mono"
              >
                +20 2 2810 5000
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14261E] border border-[#244234] text-[11px] font-mono text-[#E2BE76]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>KNX • Matter • DALI Certified</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8A81]">
          <p>© 2025 Symetra Solution. All rights reserved. Crafted for GCC &amp; Egypt.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
