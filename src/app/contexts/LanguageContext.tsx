'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types/language';

type TranslationData = Record<string, string>;
type LanguagePack = {
  en: TranslationData;
  fr: TranslationData;
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
} | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<LanguagePack>({ en: {}, fr: {} });

  // Load translations on mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [en, fr] = await Promise.all([
          import('../../locales/en/common.json'),
          import('../../locales/fr/common.json')
        ]);
        setTranslations({ en: en.default, fr: fr.default });
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };
    loadTranslations();
  }, []);

  // Load user preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('user-lang') as Language | null;
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      setLanguage(storedLang || browserLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: (lang) => {
        setLanguage(lang);
        localStorage.setItem('user-lang', lang);
      },
      t: translations[language] || {}
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
