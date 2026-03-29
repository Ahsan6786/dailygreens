"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col md:flex-row overflow-hidden bg-[#f4f4f4] dark:bg-[#0b0f0b] transition-colors duration-500">
      {/* Sidebar Labels (Vertical) - Left Side */}
      <div className="absolute left-4 md:left-8 top-[60%] -translate-y-1/2 flex flex-col gap-16 z-20">
        {["material", "design", "process"].map((label) => (
          <span key={label} className="rotate-180 [writing-mode:vertical-lr] text-[10px] md:text-[12px] uppercase tracking-[4px] text-slate-400 dark:text-slate-500 font-black opacity-60">
            {label}
          </span>
        ))}
      </div>

      {/* Visual Component: Full Page Visual on Mobile, Left Column on Desktop */}
      <div className="relative flex items-center justify-center h-screen w-full order-1 md:order-none shrink-0">
        {/* Dark vertical strip */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="absolute w-[240px] xs:w-[280px] md:w-[450px] h-full bg-[#032403] dark:bg-[#051a05] left-1/2 -translate-x-1/2 z-0 origin-top shadow-3xl"
        />
        
        {/* Floating Plate: Centered in the strip */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
           className="relative z-10 w-[320px] md:w-[650px] aspect-square"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image 
              src="/hero.png" 
              alt="Fresh Salad Plate" 
              fill
              className="object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content Column: Text & CTA - Below visual on Mobile, Right Column on Desktop */}
      <div className="relative flex-1 flex items-center px-8 md:px-24 py-24 md:py-0 order-2 md:order-none bg-[#fdfaf6] dark:bg-[#0b0f0b] z-10 md:z-auto min-h-screen md:min-h-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black tracking-widest uppercase mb-10 mx-auto md:mx-0">
            <Star className="w-3 h-3 fill-current" />
            Voted #1 Healthy Spot in Pune
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tighter">
            EAT FRESH,<br />
            <span className="text-green-600 dark:text-green-500 italic decoration-8 underline-offset-[12px]">LIVE BETTER.</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md mx-auto md:mx-0 font-medium opacity-80">
            Experience the fusion of organic purity and culinary artistic design. Sustainable bowls for the modern mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(22, 163, 74, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[3px] shadow-2xl shadow-green-600/30 hover:bg-green-700 transition-all w-full sm:w-auto"
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
