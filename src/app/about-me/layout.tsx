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
  const defaultTitle = `${t.aboutMe || "About Me"}⚡${
    process.env.NEXT_PUBLIC_FULL_NAME
  }`;

  useEffect(() => {
    document.title = defaultTitle;
    localStorage.setItem("about-me-title", defaultTitle);
  }, [defaultTitle]);

  useEffect(() => {
    const savedTitle = localStorage.getItem("about-me-title");
    document.title = savedTitle ? savedTitle : defaultTitle;
  }, [language]);

  return (
    <>
      <Navbar title={t.aboutMe || "About Me"} />
      <main>{children}</main>
    </>
  );
}
