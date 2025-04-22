"use client";

import { CvDownloadButton } from "../components/CvDownloadButton";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguageContext();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 text-center">
        {t.projects}
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        {t.underConstruction}
      </p>
      <CvDownloadButton />
    </div>
  );
}
