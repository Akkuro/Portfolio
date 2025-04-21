"use client";

import { useLanguageContext } from "../contexts/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguageContext();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 text-center">
        {t.aboutMe}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center"></div>
    </div>
  );
}
