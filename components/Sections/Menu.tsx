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

function MenuCard({ item }: { item: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group perspective-[1000px] h-[280px] md:h-[420px] w-full">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#ffffff] p-4 md:p-6 rounded-[32px] md:rounded-[48px] border border-black/5 shadow-xl flex flex-col items-center">
          <button 
            onClick={() => setIsFlipped(true)}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all shadow-sm"
          >
            <span className="font-serif font-black italic text-xs">i</span>
          </button>
          
          <div className="relative w-full aspect-square md:aspect-video rounded-[24px] md:rounded-[36px] overflow-hidden mb-3 shadow-inner mt-1">
            <Image 
              src={item.img} 
              alt={item.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute top-2 left-2 bg-white/40 backdrop-blur-3xl px-2 py-1 rounded-full border border-white/40">
              <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-slate-900">100% Organic</span>
            </div>
          </div>
          <div className="text-center px-1">
            <h3 className="text-sm md:text-2xl font-black text-[#1c1c1c] tracking-tighter leading-tight">{item.name}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-green-600 p-8 rounded-[32px] md:rounded-[48px] shadow-2xl flex flex-col items-center justify-center text-center text-white">
          <button 
            onClick={() => setIsFlipped(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all"
          >
            ✕
          </button>
          <div className={`mb-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[3px] border border-white/40 ${
            item.diet === "veg" ? "bg-white text-green-700" : "bg-red-500 text-white"
          }`}>
            {item.diet}
          </div>
          <h3 className="text-xl md:text-3xl font-black mb-4 tracking-tighter uppercase">{item.name}</h3>
          <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
            Freshly Prepared <br /> Organic Ingredients <br /> Handcrafted For You
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Menu() {
  const [activeTab, setActiveTab] = useState("All");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeTab === "All" || item.category === activeTab;
    const dietMatch = dietFilter === "all" || item.diet === dietFilter;
    return categoryMatch && dietMatch;
  });

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-[#fdfaf6] transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Explore Our Menu</h2>
          <p className="text-slate-600 font-medium">A symphony of flavors crafted for your wellbeing.</p>
        </div>

        {/* Tabs & Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex bg-white/50 backdrop-blur-xl p-1.5 rounded-2xl shadow-xl border border-black/5 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[2px] transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-green-600 text-white shadow-xl shadow-green-600/30"
                      : "text-slate-500 hover:text-green-600 hover:bg-green-50/50"
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-black text-[10px] uppercase tracking-[3px] transition-all ${
                    dietFilter === diet
                      ? "bg-slate-900 text-white border-transparent"
                      : "bg-transparent border-slate-200 text-slate-500"
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

        {/* Menu Grid - 2-per-row with Flip Cards */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-12 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
