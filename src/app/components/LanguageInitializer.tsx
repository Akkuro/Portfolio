// /src/app/components/LanguageInitializer.tsx
"use client";
import { useEffect } from "react";
import i18n from "../contexts/i18n";

export default function LanguageInitializer() {
  useEffect(() => {
    // This runs only on client-side after hydration
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return null; // This component doesn't render anything
}
