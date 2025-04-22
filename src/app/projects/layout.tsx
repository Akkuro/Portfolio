"use client";

import { Navbar } from "../components/Navbar";
import { useLanguageContext } from "../contexts/LanguageContext";
import { useEffect } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, language } = useLanguageContext();
  const defaultTitle = `${t.projects || "Projects"}⚡${
    process.env.NEXT_PUBLIC_FULL_NAME
  }`;

  useEffect(() => {
    document.title = defaultTitle;
    localStorage.setItem("projects-title", defaultTitle);
  }, [defaultTitle]);

  useEffect(() => {
    const savedTitle = localStorage.getItem("projects-title");
    document.title = savedTitle ? savedTitle : defaultTitle;
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100">
      <Navbar title={t.projects || "My Projects"} />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
