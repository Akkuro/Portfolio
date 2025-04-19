"use client";

import { ProjectsList } from "../components/ProjectsList";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguageContext();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 text-center">
        {t.projects}
      </h1>
      <ProjectsList />
    </main>
  );
}
