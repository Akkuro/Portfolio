"use client";

import Link from "next/link";
import { useLanguageContext } from "../contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguageContext();

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-indigo-100 rounded-xl shadow-lg p-15 mt-8 mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-slate-800 text-center">
        {t.greeting || "Hello, I'm Jon"}
      </h1>
      <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-500 text-center">
        {t.subtitle || ""}
      </h2>
      <p className="text-base md:text-lg text-slate-700 max-w-xl text-center mb-8">
        {t.description || ""}
      </p>
      <div className="flex gap-4">
        {t.viewProjects && (
          <Link
            href="/projects"
            className="px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold text-base shadow hover:bg-indigo-600 transition"
          >
            {t.viewProjects}
          </Link>
        )}
        {t.contact && (
          <a
            href="mailto:jon@example.com"
            className="px-8 py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-full font-semibold text-base shadow hover:bg-indigo-50 transition"
          >
            {t.contact}
          </a>
        )}
      </div>
    </section>
  );
};
