"use client";

import { motion } from "framer-motion";
import { Tractor, Sparkles, Zap } from "lucide-react";

const usps = [
  {
    icon: Tractor,
    title: "Farm to Bowl",
    desc: "100% organic produce sourced directly from local farmers in Pune within 24 hours of harvest.",
  },
  {
    icon: Sparkles,
    title: "Made for You",
    desc: "Every dish is customizable to your dietary needs—whether you're Keto, Vegan, or Gluten-Free.",
  },
  {
    icon: Zap,
    title: "Better Energy",
    desc: "Focus on high-nutrient density ingredients that keep you fueled without the afternoon crash.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b0f0b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-12 rounded-[50px] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-green-600/20 dark:hover:border-green-400/20 transition-all group"
            >
              <div className="w-20 h-20 rounded-3xl bg-green-600 text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <usp.icon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">{usp.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
