"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Regular Guest",
    content: "The best healthy spot in Pune. Their Quinoa bowls are game-changers for my lunch hour.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    content: "Finally a place that understands macronutrients without sacrificing flavor. 10/10 recommend.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Rohan Deshpande",
    role: "Tech Lead",
    content: "The ambiance is just so calming. Perfect for a quick healthy meal before afternoon meetings.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#fdfaf6]  transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900  mb-4">What Our Guests Say</h2>
          <p className="text-slate-600 ">Join thousands of happy diners who prioritze their health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[40px] bg-white  border border-black/5  shadow-xl shadow-black/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600  italic mb-8 leading-relaxed">
                  "{testi.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600/20">
                  <Image src={testi.avatar} alt={testi.name} width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 ">{testi.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
