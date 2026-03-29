"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { useState } from "react";

export function Membership() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <section id="membership" className="py-32 px-6 md:px-12 bg-[#fdfaf6]  transition-colors duration-500 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="text-center mb-20"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-50  text-green-700  text-[10px] font-black uppercase tracking-[3px] mb-6 border border-green-600/10"
          >
            <ShieldCheck className="w-4 h-4" />
            Verified Elite Access
          </motion.div>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-7xl font-black text-slate-900  mb-6 tracking-tighter uppercase leading-none"
          >
            Daily Greens <br /> <span className="text-green-600  italic">Privilege</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            className="text-slate-500  font-medium max-w-xl mx-auto"
          >
            Join the most exclusive healthy living community in Pune. Elevate your lifestyle with unparalleled benefits.
          </motion.p>
        </motion.div>

        {/* Premium Card with Tilt - Forced Desktop Fidelity on Mobile */}
        <div className="flex justify-center items-center perspective-[1500px] w-full min-h-[300px] md:min-h-[500px] overflow-visible">
          <div className="scale-[0.5] xs:scale-[0.6] sm:scale-[0.8] md:scale-100 origin-center transition-transform duration-500 flex-shrink-0">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setIsHovered(true)}
              style={{ rotateX, rotateY }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.2 }}
              className="relative w-[672px] aspect-[1.6/1] rounded-[56px] p-12 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)]  group cursor-none transform-gpu"
            >
              {/* Base Materials */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#121c15] via-[#0b160f] to-[#040805]  " />
              <div className="absolute inset-0 opacity-15 mix-blend-color-dodge bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              {/* Holographic Gradients */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -top-1/2 -left-1/4 w-[120%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] animate-pulse" />

              {/* Content Layer */}
              <div className="relative h-full flex flex-col justify-between text-white z-10 pointer-events-none">
                {/* Brand & Type */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                         <span className="text-xl font-black italic">DG</span>
                      </div>
                      <span className="text-4xl font-black tracking-tighter italic bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">DAILY GREENS</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[5px] text-green-500/60 ml-14 uppercase">ELITE LEVEL PROGRAM</p>
                  </div>
                  
                  {/* Advanced EMV Chip */}
                  <div className="w-20 h-14 rounded-2xl bg-gradient-to-br from-[#ffd700] via-[#b8860b] to-[#ffd700] p-[2px] relative overflow-hidden shadow-2xl">
                     <div className="absolute inset-0 bg-black/10 flex flex-wrap content-center gap-[1px]">
                        {Array.from({length: 6}).map((_, i) => (
                          <div key={i} className="w-[30%] h-4 border border-black/20" />
                        ))}
                     </div>
                     <Cpu className="absolute inset-0 w-8 h-8 m-auto text-black/20" />
                  </div>
                </div>

                {/* Card Identifier */}
                <div className="space-y-6">
                   <div className="flex gap-8 text-4xl font-mono tracking-[0.25em] text-white/90 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
                     <motion.span animate={isHovered ? { opacity: [1, 0.7, 1] } : {}} transition={{ repeat: Infinity, duration: 2 }}>8842</motion.span>
                     <span>5521</span>
                     <span>7730</span>
                     <span className="text-green-500/80">2026</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-white/30" />
                      <span className="text-[9px] font-black uppercase tracking-[4px] text-white/30">GLOBAL PRIVILEGE NETWORK • VALID THRU 12/26</span>
                   </div>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[4px] text-white/40 font-black mb-1">Elite Cardholder</p>
                    <p className="text-4xl font-black tracking-tighter text-white uppercase drop-shadow-lg">SARTH KARPE</p>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-[3px] text-white/40 font-black mb-1">Membership</p>
                      <p className="text-lg font-black text-[#ffd700] uppercase tracking-widest flex items-center gap-2">
                         PLATINUM
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-3xl px-8 py-5 rounded-[30px] border border-white/10 shadow-2xl flex items-center gap-4 group/tag hover:bg-white/10 transition-colors">
                      <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400 group-hover:scale-125 transition-transform" />
                      <div className="text-left">
                         <span className="block text-[8px] font-black text-white/40 uppercase tracking-widest">Active Reward</span>
                         <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">15% OFF ALWAYS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Moving Light Flash */}
              <motion.div 
                style={{ x, y }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_40%)] pointer-events-none"
              />
              
              {/* Border Glow */}
              <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[56px] pointer-events-none group-hover:border-white/20 transition-colors" />
            </motion.div>
          </div>
        </div>
        
        {/* Tier Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {[
            { title: "Personal Concierge", desc: "Private host for your table bookings." },
            { title: "Exclusive Tastings", desc: "Be the first to try our seasonal menus." },
            { title: "No-Waiting Policy", desc: "Always get seated, no matter the rush." },
            { title: "Curated Box", desc: "Monthly wellness hamper delivered home." }
          ].map((item, i) => (
             <motion.div 
               key={item.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 + i * 0.1 }}
               className="p-10 rounded-[40px] bg-white  border border-black/5  hover:border-green-600/20 transition-all flex flex-col items-center text-center group"
             >
                <div className="w-12 h-12 rounded-2xl bg-green-50  flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                   <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-slate-900  mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-500  leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
