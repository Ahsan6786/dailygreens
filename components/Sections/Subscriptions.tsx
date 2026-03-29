"use client";

import { motion } from "framer-motion";
import { Check, Zap, Info } from "lucide-react";

const plans = [
  {
    name: "Healthy Lovers Plan",
    desc: "Perfect for balanced lifestyle maintenance.",
    macros: "75g protein + 175g salad",
    weeklyPrice: "₹1,250",
    monthlyPrice: "₹4,800",
    color: "#166534", // Green
    popular: false,
    features: [
      "Nutritionally balanced meals",
      "Daily changing menu",
      "Freshly prepared before delivery",
      "Doorstep delivery within Kothrud",
      "Complimentary health shot once a week",
    ],
  },
  {
    name: "Fitness Freak Plan",
    desc: "Designed for high-performance recovery.",
    macros: "150g protein + 150g salad",
    weeklyPrice: "₹1,600",
    monthlyPrice: "₹6,200",
    color: "#d97706", // Orange
    popular: true,
    features: [
      "High protein content for recovery",
      "Low GI carbohydrates only",
      "Strict calorie tracking",
      "Priority morning delivery slots",
      "Nutritionist consultation monthly",
    ],
  },
];

export function Subscriptions() {
  return (
    <section id="subscriptions" className="py-24 px-6 md:px-12 bg-[#fdfaf6] dark:bg-[#0b0f0b] transition-colors duration-500 overflow-hidden relative">
      {/* Texture background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Subscription Plans</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Consistent healthy eating, simplified. Delivered to your doorstep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[48px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] group h-full border border-black/[0.03] dark:border-white/[0.03]"
            >
              {/* Top Colored Band - Enhanced Gradients */}
              <div 
                className="p-8 md:p-12 relative overflow-hidden" 
                style={{ 
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` 
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.2),transparent)]" />
                
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-bl-[32px] text-[10px] font-black uppercase tracking-[3px] border-b border-l border-white/20">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-4xl font-black text-white mb-3 leading-tight tracking-tighter">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-8 font-medium leading-relaxed">{plan.desc}</p>
                
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 shadow-xl group-hover:bg-white/20 transition-all">
                  <Info className="w-4 h-4 text-white/90" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[2px]">{plan.macros}</span>
                </div>
              </div>

              {/* Lower Black Area - Premium Dark Motif */}
              <div className="flex-1 bg-gradient-to-b from-[#1c1c1c] to-[#121212] p-8 md:p-12 flex flex-col">
                {/* Pricing Row */}
                <div className="grid grid-cols-2 gap-6 md:gap-10 mb-14 border-b border-white/5 pb-12">
                  <div className="group/price">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[3px] mb-3 group-hover/price:text-green-500 transition-colors">WEEKLY (6 DAYS)</p>
                    <div className="text-4xl font-black text-white tracking-tighter">{plan.weeklyPrice}</div>
                  </div>
                  <div className="group/price">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[3px] mb-3 group-hover/price:text-green-500 transition-colors">MONTHLY (20 DAYS)</p>
                    <div className="text-4xl font-black text-white tracking-tighter">{plan.monthlyPrice}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Zap className="w-4 h-4 text-green-500 fill-current" />
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[2px]">What's Included:</h4>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white py-4 rounded-full font-black uppercase tracking-[2px] text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-600/10">
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
