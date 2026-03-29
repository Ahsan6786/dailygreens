"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Salads", "Mains", "Beverages"];
const menuItems = [
  { name: "Caesar Salad", category: "Salads", diet: "veg", img: "/hero.png" },
  { name: "Greek Salad", category: "Salads", diet: "veg", img: "/dish1.jpeg" },
  { name: "Chicken Harvest", category: "Mains", diet: "nonveg", img: "/dish2.jpeg" },
  { name: "Green Power Smoothie", category: "Beverages", diet: "veg", img: "/story_hero_4k.png" },
  { name: "Orange Detox", category: "Beverages", diet: "veg", img: "/orange_juice_4k.png" },
  { name: "Protein Bowl", category: "Mains", diet: "nonveg", img: "/dish3.jpeg" },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState("All");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeTab === "All" || item.category === activeTab;
    const dietMatch = dietFilter === "all" || item.diet === dietFilter;
    return categoryMatch && dietMatch;
  });

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-[#fdfaf6]  transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900  mb-4">Explore Our Menu</h2>
          <p className="text-slate-600 ">A symphony of flavors crafted for your wellbeing.</p>
        </div>

        {/* Tabs & Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex bg-white/50  backdrop-blur-xl p-1.5 rounded-2xl shadow-2xl border border-black/5  min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-[2px] transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-green-600 text-white shadow-xl shadow-green-600/30 ring-2 ring-green-600/20"
                      : "text-slate-500 hover:text-green-600 hover:bg-green-50/50 "
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex gap-4 min-w-max">
              {["all", "veg", "nonveg"].map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietFilter(diet as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${
                    dietFilter === diet
                      ? "bg-slate-900  text-white  border-transparent"
                      : "bg-transparent border-slate-200  text-slate-500"
                  }`}
                >
                  {diet === "veg" && <span className="w-2 h-2 rounded-full bg-green-500" />}
                  {diet === "nonveg" && <span className="w-2 h-2 rounded-full bg-red-500" />}
                  {diet}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid - 2-per-row as requested on all screens */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -16, transition: { duration: 0.4, ease: "circOut" } }}
                className="group bg-white  p-8 rounded-[48px] border border-black/5  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.02)] hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative aspect-square md:aspect-video rounded-[36px] overflow-hidden mb-8 shadow-inner">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-5 left-5 bg-white/40 backdrop-blur-3xl px-4 py-1.5 rounded-full border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">100% Organic</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="text-2xl font-black text-slate-900  tracking-tighter">{item.name}</h3>
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[2px] ${
                    item.diet === "veg" ? "bg-green-100 text-green-700  " : "bg-red-100 text-red-700  "
                  }`}>
                    {item.diet}
                  </span>
                </div>
                <p className="text-slate-500  text-sm px-2 leading-relaxed opacity-80">
                  Carefully selected ingredients for maximum nutritional value and a burst of nature's flavors.
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
