"use client";

import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = ({ title }: { title?: string }) => (
  <nav className="bg-indigo-500 p-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
        <Link href="/">
          <img src="/logo.png" alt="website-logo" className="w-10 border-1 border-white rounded-md ar-square" />
        </Link>
        <span className="font-bold text-xl text-white">{title}</span>
    </div>
    <LanguageSwitcher />
  </nav>
);
