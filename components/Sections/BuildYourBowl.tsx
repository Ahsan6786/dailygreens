"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = {
  base: ["Quinoa", "Brown Rice", "Mixed Greens"],
  protein: ["Tofu", "Paneer", "Chickpeas"],
  gravy: ["Pesto", "Tahini", "Spicy Soy"],
};

const layerColors = {
  base: { "Quinoa": "#d4a373", "Brown Rice": "#bc6c25", "Mixed Greens": "#606c38" },
  protein: { "Tofu": "#e9edc9", "Paneer": "#fefae0", "Chickpeas": "#dda15e" },
  gravy: { "Pesto": "#16a34a", "Tahini": "#f59e0b", "Spicy Soy": "#7f1d1d" },
};

export function BuildYourBowl() {
  const [selection, setSelection] = useState({ base: "", protein: "", gravy: "" });

  const select = (type: keyof typeof selection, val: string) => {
    setSelection(prev => ({ ...prev, [type]: val }));
  };

  const isComplete = selection.base && selection.protein && selection.gravy;

  return (
    <section id="build-bowl" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b0f0b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Build Your Own Bowl</h2>
          <p className="text-slate-600 dark:text-slate-400">Create your masterpiece. Choose your base, protein, and gravy.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Controls */}
          <div className="flex-1 space-y-12 w-full">
            {Object.entries(options).map(([type, opts]) => (
              <div key={type}>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Step {type ==='base'? 1: type==='protein'? 2: 3}: Choose {type}</h4>
                <div className="flex flex-wrap gap-4">
                  {opts.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => select(type as any, opt)}
                      className={`px-8 py-4 rounded-2xl font-bold transition-all border-2 ${
                        selection[type as keyof typeof selection] === opt
                          ? "bg-green-600 text-white border-green-600 shadow-xl shadow-green-600/20 scale-105"
                          : "bg-transparent border-slate-100 dark:border-white/5 text-slate-500 hover:border-green-600/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visualizer */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-square bg-[#fdfaf6] dark:bg-white/5 rounded-[40px] md:rounded-[60px] p-8 md:p-12 flex flex-col items-center justify-end border border-black/5 dark:border-white/5 overflow-hidden">
                {/* Bowl Layers */}
                <div className="w-full relative h-[300px] flex flex-col justify-end items-center">
                    <AnimatePresence>
                        {!!selection.base && (
                            <motion.div 
                              key="layer-base"
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              className="w-full h-24 rounded-b-[100px] absolute bottom-0"
                              style={{ backgroundColor: (layerColors.base as any)[selection.base] }}
                            />
                        )}
                        {!!selection.protein && (
                            <motion.div 
                              key="layer-protein"
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: -40, opacity: 1 }}
                              className="w-[85%] h-20 rounded-[40px] absolute z-10"
                              style={{ backgroundColor: (layerColors.protein as any)[selection.protein] }}
                            />
                        )}
                        {!!selection.gravy && (
                            <motion.div 
                              key="layer-gravy"
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: -80, opacity: 1 }}
                              className="w-[70%] h-16 rounded-[30px] absolute z-20"
                              style={{ backgroundColor: (layerColors.gravy as any)[selection.gravy] }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="absolute inset-0 border-b-[20px] border-black/5 dark:border-white/10 rounded-b-[100px]" />
                </div>

                <div className="mt-8 md:mt-12 text-center w-full">
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-2">Current Selection</p>
                    <h3 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white h-auto min-h-[2rem]">
                        {Object.values(selection).filter(Boolean).join(" + ") || "Start Selecting..."}
                    </h3>
                    <motion.button
                      disabled={!isComplete}
                      whileHover={isComplete ? { scale: 1.02 } : {}}
                      className={`w-full mt-8 py-5 rounded-3xl font-bold transition-all ${
                        isComplete ? "bg-green-600 text-white shadow-2xl shadow-green-600/30" : "bg-slate-100 dark:bg-white/5 text-slate-400 grayscale"
                      }`}
                    >
                      {isComplete ? "Add to Order" : "Complete Your Selection"}
                    </motion.button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
