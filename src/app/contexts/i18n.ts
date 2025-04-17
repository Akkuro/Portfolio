// /src/app/contexts/i18n.ts
'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../../locales/en.json';
import frTranslations from '../../locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'en', // Default language (matches server render)
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { 
      useSuspense: false // Important for Next.js
    }
  });

export default i18n;