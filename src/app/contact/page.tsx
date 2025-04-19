"use client"

import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { useLanguageContext } from "../contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguageContext();

  return (
    <>
      <Navbar title={t.contact || "Contact"} />
      <div className="flex flex-col items-center justify-center min-h-full p-8">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
