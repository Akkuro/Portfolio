"use client";

import { useLanguageContext } from "../contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md transition-all ${
          language === "en"
            ? "bg-blue-500 text-white shadow-md"
            : "bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-md transition-all ${
          language === "fr"
            ? "bg-blue-500 text-white shadow-md"
            : "bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        Français
      </button>
    </div>
  );
};
