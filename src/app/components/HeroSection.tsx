"use client";

import Link from "next/link";
import { useLanguageContext } from "../contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguageContext();

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-indigo-100 rounded-xl shadow-lg p-8 md:p-15 mt-8 mb-8">
      <Link
        href="/about-me"
        className="group relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 hover:scale-105 transition-transform duration-300"
      >
        <div className="relative w-full h-full">
          <img
            src="/profile-photo.jpg"
            alt={`${process.env.NEXT_PUBLIC_FULL_NAME || "Professional"}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* About Me overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-indigo-500 group-hover:h-full transition-all duration-250 ease-linear">
            <span className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-50">
              {t.aboutMe || "About Me"}
            </span>
          </div>
        </div>
      </Link>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-slate-800 text-center">
        {t.greeting || `Hello, I'm ${process.env.NEXT_PUBLIC_FULL_NAME}`}
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
            className="flex items-center justify-center px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold text-center shadow hover:bg-indigo-600 transition"
          >
            {t.viewProjects}
          </Link>
        )}
        {t.contact && (
          <Link
            href="/contact"
            className="flex items-center justify-center px-8 py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-full font-semibold text-center shadow hover:bg-indigo-50 transition"
          >
            {t.contact}
          </Link>
        )}
      </div>
    </section>
  );
};
