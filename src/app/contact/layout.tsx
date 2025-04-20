"use client";

import { Navbar } from "../components/Navbar";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguageContext();

  return (
    <>
      <Navbar title={t.contact || "Contact"} />
      <main>{children}</main>
    </>
  );
}
