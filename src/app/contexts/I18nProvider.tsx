// /src/app/contexts/I18nProvider.tsx
"use client";
import { ReactNode, useEffect } from "react";
import i18n from "./i18n";

export default function I18nProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return <>{children}</>;
}
