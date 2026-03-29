"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { name: "Signature Green Bowl", tag: "Bestseller", img: "/dish1.jpeg" },
  { name: "Harvest Medley", tag: "Chef's Choice", img: "/dish2.jpeg" },
  { name: "Citrus Bliss Salad", tag: "New", img: "/dish3.jpeg" },
];

export function Recommendations() {
  return (
    <section id="recommendations" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b0f0b]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Chef's Recommendations</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Specially curated dishes that define our culinary philosophy. Taste the freshness in every bite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden mb-6 shadow-2xl shadow-black/10">
                <div className="absolute top-6 left-6 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-green-700 dark:text-green-400 shadow-lg border border-green-600/10">
                  {item.tag}
                </div>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 ml-2">{item.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm ml-2">Organic • Freshly Sourced • Pune Local</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
