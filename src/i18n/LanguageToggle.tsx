import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContent } from './useContent';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const content = useContent();
  const isAr = (i18n.resolvedLanguage ?? i18n.language ?? 'en')
    .toLowerCase()
    .startsWith('ar');

  const switchTo = (lng: 'en' | 'ar') => {
    void i18n.changeLanguage(lng);
  };

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-xl bg-[#EFECE3] border border-[#E2DDD0]"
      role="group"
      aria-label={content.lang.toggleLabel}
    >
      <button
        type="button"
        onClick={() => switchTo('en')}
        aria-pressed={!isAr}
        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
          !isAr
            ? 'bg-[#14231C] text-white shadow-sm'
            : 'text-[#4A554E] hover:text-[#14231C]'
        }`}
      >
        {content.lang.english}
      </button>
      <button
        type="button"
        onClick={() => switchTo('ar')}
        aria-pressed={isAr}
        lang="ar"
        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
          isAr
            ? 'bg-[#14231C] text-white shadow-sm'
            : 'text-[#4A554E] hover:text-[#14231C]'
        }`}
      >
        {content.lang.arabic}
      </button>
    </div>
  );
};
