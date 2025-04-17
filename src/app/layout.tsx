// /src/app/layout.tsx
import LanguageInitializer from "./components/LanguageInitializer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageInitializer />
        {children}
      </body>
    </html>
  );
}
