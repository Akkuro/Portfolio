"use client";

import { useLanguageContext } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="flex items-center gap-2 rounded-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md transition-all ${
          language === "en"
            ? "bg-blue-500 text-white shadow-md font-medium"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-md transition-all ${
          language === "fr"
            ? "bg-blue-500 text-white shadow-md font-medium"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        Français
      </button>
    </div>
  );
};
