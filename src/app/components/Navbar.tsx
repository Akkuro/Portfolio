"use client";

import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = ({ title }: { title?: string }) => (
  <nav className="bg-indigo-500 p-4 flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2">
      <span className="bg-white text-indigo-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
        N
      </span>
      <span className="font-bold text-xl text-white">{title}</span>
    </Link>
    <LanguageSwitcher />
  </nav>
);
