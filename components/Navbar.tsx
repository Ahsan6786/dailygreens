"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "SUBSCRIPTIONS", href: "#subscriptions" },
    { name: "EVENTS", href: "#events" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#0b0f0b]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="md:hidden flex items-center justify-between w-full px-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a href="#home" className="flex items-center">
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">Daily Greens</span>
          </a>

          <div className="w-10" /> {/* Spacer to keep logo centered */}
        </div>

        <div className="hidden md:flex items-center justify-between w-full">
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo.png" alt="Daily Greens" width={45} height={45} />
            <span className="hidden lg:block text-xl font-black tracking-tighter uppercase text-slate-900">Daily Greens</span>
          </a>

          <div className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black tracking-[2px] text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.zomato.com/pune/daily-greens-kothrud/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff4d4d] text-white px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-[#ff3333] transition-all shadow-xl shadow-red-500/20"
            >
              Order on Zomato
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b0f0b] border-b border-black/5 dark:border-white/5 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black tracking-widest text-slate-900 dark:text-white uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
