"use client";

import { useLanguageContext } from "../contexts/LanguageContext";
import { SocialLinks } from "./SocialLinks";

export const Contact: React.FC = () => {
  const { t } = useLanguageContext();

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-indigo-100 rounded-xl shadow-lg p-10 mt-8 mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800 text-center">
        {t.contactMe || "Contact Me"}
      </h1>
      <p className="text-lg text-slate-700 mb-8 text-center max-w-xl">
        {t.contactSentence}
      </p>
      <SocialLinks />
      <div className="mt-6 text-center text-slate-600">
        <div>
          <span className="font-semibold">{t.phone + t.colon || "Phone:"}</span>{" "}
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_COMPACT}`}
            className="text-indigo-600 hover:underline"
          >
            {process.env.NEXT_PUBLIC_PHONE}
          </a>
        </div>
        <div>
          <span className="font-semibold">{t.email + t.colon || "Email:"}</span>{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="text-indigo-600 hover:underline"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </div>
        <div>
          <span className="font-semibold">
            {t.location + t.colon || "Location:"}
          </span>{" "}
          {process.env.NEXT_PUBLIC_CITY}, {process.env.NEXT_PUBLIC_COUNTRY} (
          {t.willingToRelocate || "Willing to relocate"})
        </div>
      </div>
    </section>
  );
};
