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
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ base: "", protein: "", gravy: "" });

  const select = (type: keyof typeof selection, val: string) => {
    setSelection(prev => ({ ...prev, [type]: val }));
    if (step < 3) setStep(step + 1);
  };

  const isComplete = selection.base && selection.protein && selection.gravy;

  const currentType = step === 1 ? "base" : step === 2 ? "protein" : "gravy";

  return (
    <section id="build-bowl" className="py-20 px-6 md:px-12 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-none">
            Build Your <br /><span className="text-green-600 italic">Signature Bowl</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                  step >= s ? "bg-green-600 text-white shadow-lg shadow-green-600/30" : "bg-white text-slate-300 border border-slate-200"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-[2px] rounded-full ${step > s ? "bg-green-600" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start h-full">
          {/* Controls - Left side */}
          <div className="flex-1 w-full space-y-8">
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-black/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600" />
              <h4 className="text-[10px] font-black uppercase tracking-[4px] text-green-600/60 mb-8">
                STEP {step}: Select {currentType.toUpperCase()}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(options as any)[currentType].map((opt: string) => (
                  <button
                    key={opt}
                    onClick={() => select(currentType as any, opt)}
                    className={`flex items-center justify-between px-8 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all border-2 ${
                      selection[currentType as keyof typeof selection] === opt
                        ? "bg-green-600 text-white border-green-600 shadow-xl shadow-green-600/20"
                        : "bg-slate-50 border-transparent text-slate-900 hover:bg-green-50"
                    }`}
                  >
                    {opt}
                    {selection[currentType as keyof typeof selection] === opt && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                <button 
                  onClick={() => setStep(Math.max(1, step - 1))}
                  className={`text-[10px] font-black uppercase tracking-widest ${step === 1 ? "opacity-20 pointer-events-none" : "text-slate-400 hover:text-slate-900"}`}
                >
                  ← Back
                </button>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {step} / 3
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visualizer - Right side (Sticky on Mobile) */}
          <div className="lg:w-[450px] w-full sticky bottom-6 lg:static z-30">
            <div className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[56px] border border-black/10 shadow-3xl flex flex-col items-center">
                <div className="w-full relative h-[180px] md:h-[240px] flex flex-col justify-end items-center mb-8">
                    <AnimatePresence>
                        {!!selection.base && (
                            <motion.div 
                                key="layer-base"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="w-[85%] h-20 rounded-b-[60px] absolute bottom-4"
                                style={{ backgroundColor: (layerColors.base as any)[selection.base] }}
                            />
                        )}
                        {!!selection.protein && (
                            <motion.div 
                                key="layer-protein"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: -20, opacity: 1 }}
                                className="w-[75%] h-16 rounded-[30px] absolute z-10"
                                style={{ backgroundColor: (layerColors.protein as any)[selection.protein] }}
                            />
                        )}
                        {!!selection.gravy && (
                            <motion.div 
                                key="layer-gravy"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: -60, opacity: 1 }}
                                className="w-[60%] h-12 rounded-[24px] absolute z-20"
                                style={{ backgroundColor: (layerColors.gravy as any)[selection.gravy] }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="absolute w-[90%] h-28 border-b-[15px] border-black/5 rounded-b-[70px] bottom-0" />
                </div>

                <div className="w-full text-center space-y-6">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase tracking-[3px] text-slate-400">Current Order</p>
                      <h3 className="text-base font-black text-slate-900 truncate px-4">
                          {Object.values(selection).filter(Boolean).join(" • ") || "Waiting for selections..."}
                      </h3>
                    </div>
                    
                    <motion.button
                      disabled={!isComplete}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[4px] transition-all flex items-center justify-center gap-3 ${
                        isComplete ? "bg-green-600 text-white shadow-2xl shadow-green-600/30" : "bg-slate-100 text-slate-300"
                      }`}
                    >
                      {isComplete ? "Add to Cart" : "Select Options"}
                    </motion.button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
