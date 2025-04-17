"use client";
import { useTranslation } from "react-i18next";
import { SocialLinks } from "./SocialLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 font-sans relative">
      <LanguageSwitcher />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-800 text-center">
        {t("greeting")}
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-500 text-center">
        {t("subtitle")}
      </h2>
      <p className="text-base md:text-lg text-slate-700 max-w-xl text-center mb-8">
        {t("description")}
      </p>
      <SocialLinks />
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold text-base shadow hover:bg-indigo-600 transition"
        >
          {t("viewProjects")}
        </a>
        <a
          href="mailto:noa@example.com"
          className="px-8 py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-full font-semibold text-base shadow hover:bg-indigo-50 transition"
        >
          {t("contact")}
        </a>
      </div>
    </main>
  );
};
