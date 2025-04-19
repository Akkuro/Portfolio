"use client";

import { Navbar } from "../components/Navbar";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguageContext();

  return (
    <>
      <Navbar title={t.projects || "Projects"} />
      <main>{children}</main>
    </>
  );
}
