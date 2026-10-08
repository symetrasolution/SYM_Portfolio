import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useContent } from '../i18n/useContent';

export const Footer: React.FC = () => {
  const content = useContent();
  const ft = content.footer;
  const contact = content.contact;

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
                {content.site.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A6B4AD] leading-relaxed mb-6 max-w-sm">
              {content.site.description}
            </p>

            <span className="text-[11px] font-mono tracking-widest uppercase text-[#E2BE76] font-semibold block">
              {content.site.tagline}
            </span>
          </div>

          {/* Navigation Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              {ft.navTitle}
            </span>
            <ul className="space-y-3 text-xs text-[#A6B4AD]">
              {ft.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Studios (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              {ft.studiosTitle}
            </span>
            <div className="space-y-4 text-xs text-[#A6B4AD]">
              {contact.regionalStudios.map((studio) => (
                <div key={studio.city}>
                  <span className="font-semibold text-white block">{studio.city}</span>
                  <span className="text-[11px]">{studio.district}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Desk & Certification (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2BE76] block mb-5">
              {ft.deskTitle}
            </span>
            <div className="space-y-2.5 text-xs text-[#A6B4AD] mb-6">
              {contact.emails.map((email) => (
                <a
                  key={email.href}
                  href={email.href}
                  className="hover:text-white transition-colors block font-mono"
                  dir="ltr"
                >
                  {email.label}
                </a>
              ))}
              <a
                href={contact.hotlineHref}
                className="hover:text-white transition-colors block font-mono"
                dir="ltr"
              >
                {contact.hotlineDisplay}
              </a>
              {contact.studios.map((studio) => (
                <a
                  key={studio.phoneHref}
                  href={studio.phoneHref}
                  className="hover:text-white transition-colors block font-mono"
                  dir="ltr"
                >
                  {studio.phoneDisplay}
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14261E] border border-[#244234] text-[11px] font-mono text-[#E2BE76]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{ft.badge}</span>
            </div>
            <p className="text-[11px] text-[#7A8A81] leading-relaxed mt-4 max-w-xs">
              {ft.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8A81]">
          <p>{ft.rights}</p>

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
