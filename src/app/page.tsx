import { HeroSection } from "./components/HeroSection";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { SocialLinks } from "./components/SocialLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>
      <HeroSection />
      <SocialLinks />
    </main>
  );
}
