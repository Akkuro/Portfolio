"use client";

import { useEffect, useState } from "react";
import { Language } from "../types/language";

export const useLanguage = (): [Language, (lang: Language) => void] => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("user-lang") as Language | null;
      const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
      setLanguage(storedLang || browserLang);
    }
  }, []);

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("user-lang", lang);
  };

  return [language, updateLanguage];
};
