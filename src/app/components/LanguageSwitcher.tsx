// /src/app/components/LanguageSwitcher.tsx
'use client';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'fr') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="absolute top-6 right-6 flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-full font-semibold transition ${
          i18n.language.startsWith('en')
            ? 'bg-indigo-500 text-white'
            : 'bg-white text-indigo-500 border border-indigo-500'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-4 py-2 rounded-full font-semibold transition ${
          i18n.language === 'fr'
            ? 'bg-indigo-500 text-white'
            : 'bg-white text-indigo-500 border border-indigo-500'
        }`}
      >
        FR
      </button>
    </div>
  );
};