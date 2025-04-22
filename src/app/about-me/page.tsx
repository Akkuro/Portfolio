"use client";

import { useLanguageContext } from "../contexts/LanguageContext";

export default function AboutMePage() {
  const { t } = useLanguageContext();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center w-full max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 text-center">
        {t.aboutMe}
      </h1>
      <div className="text-gray-700 text-lg text-center">
        {typeof t.aboutMeContents === "string"
          ? t.aboutMeContents.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))
          : t.aboutMeContents}
      </div>
    </div>
  );
}
