import { LanguageProvider } from "./contexts/LanguageContext";
import type { Metadata } from "next";
import "./globals.css";
import PreloadTranslations from "./components/PreloadTranslations";

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PreloadTranslations />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
