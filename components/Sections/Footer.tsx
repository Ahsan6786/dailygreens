"use client";

import Image from "next/image";
import { Globe, Users, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0b0f0b] py-16 md:py-24 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {/* Brand */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Daily Greens" width={48} height={48} className="dark:invert-0 invert" />
            <span className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">Daily Greens</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Crafting fresh, nutrient-rich meals that nourish your body and soul. Proudly born in Pune.
          </p>
          <div className="flex gap-4">
            {[Globe, Users, Mail].map((Icon, i) => (
              <a 
                key={i} 
                href={i === 0 ? "https://www.google.com/maps/search/daily+greens/@18.5058541,73.8175294,11z?entry=s&sa=X&ved=1t%3A199789" : "#"} 
                target={i === 0 ? "_blank" : undefined}
                rel={i === 0 ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 hover:text-green-600 hover:bg-white dark:hover:bg-green-600 dark:hover:text-white transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-8 border-l-4 border-green-600 pl-4">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Our Story", "The Menu", "Reviews", "Gallery"].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-green-600 transition-colors font-bold text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-8 border-l-4 border-green-600 pl-4">Help & Support</h4>
          <ul className="space-y-4">
            {["Contact Us", "F.A.Q", "Subscription Plans", "Privacy Policy", "Terms of Service"].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-green-600 transition-colors font-bold text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[3px] text-slate-400 mb-8 border-l-4 border-green-600 pl-4">Our Newsletter</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed font-bold">Get healthy tips and secret discounts directly in your inbox.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 pl-6 pr-16 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600/50 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-600/30 group-focus-within:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-bold text-slate-400">© 2026 Daily Greens India. All Rights Reserved. Designed for premium health.</p>
        <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-green-600 transition-colors uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-green-600 transition-colors uppercase tracking-widest">Terms</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-green-600 transition-colors uppercase tracking-widest">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
