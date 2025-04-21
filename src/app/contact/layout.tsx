"use client";

import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, language } = useLanguageContext();
  const defaultTitle = `${t.contact || "Contact"}⚡${
    process.env.NEXT_PUBLIC_FULL_NAME
  }`;

  useEffect(() => {
    document.title = defaultTitle;
    localStorage.setItem("contact-title", defaultTitle);
  }, [defaultTitle]);

  useEffect(() => {
    const savedTitle = localStorage.getItem("contact-title");
    document.title = savedTitle ? savedTitle : defaultTitle;
  }, [language]);

  return (
    <>
      <Navbar title={t.contact || "Contact"} />
      <main>{children}</main>
    </>
  );
}
