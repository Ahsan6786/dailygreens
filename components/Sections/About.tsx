"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Coffee, TreePine, BatteryCharging } from "lucide-react";

const features = [
  { name: "High-Speed WiFi", icon: Wifi },
  { name: "Specialty Coffee", icon: Coffee },
  { name: "Indoor Garden", icon: TreePine },
  { name: "Charging Stations", icon: BatteryCharging },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#fdfaf6] dark:bg-[#051a05] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:flex-1 relative aspect-[4/3] w-full rounded-[60px] overflow-hidden shadow-2xl"
        >
          <Image src="/restro.png" alt="Daily Greens Experience" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
        </motion.div>

        {/* Content side */}
        <div className="lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">The Daily Greens <br /> Experience</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              We are more than just a restaurant. We are a community dedicated to the art of healthy living. 
              Our space is designed for comfort, productivity, and connection.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <div key={feat.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{feat.name}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 group flex items-center gap-4 text-green-600 dark:text-green-400 font-bold text-lg">
              Learn Our Story
              <span className="w-10 h-10 rounded-full border border-green-600/20 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
