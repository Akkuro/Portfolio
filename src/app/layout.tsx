import { LanguageProvider } from "./contexts/LanguageContext";
import type { Metadata } from "next";
import "./globals.css";
import PreloadTranslations from "./components/PreloadTranslations";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Noa Jelsch⚡",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
        <PreloadTranslations />
      </Head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
