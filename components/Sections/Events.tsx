"use client";

import { motion } from "framer-motion";
import { Cake, Building2, Utensils } from "lucide-react";

const events = [
  {
    icon: Cake,
    title: "Birthdays",
    desc: "Themed healthy parties with a custom green-cake experience.",
  },
  {
    icon: Building2,
    title: "Corporate",
    desc: "Power lunches and workshops in a productive, calm environment.",
  },
  {
    icon: Utensils,
    title: "Private Dining",
    desc: "Intimate curated multi-course dinners for your inner circle.",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0b0f0b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Gatherings at Daily Greens</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Celebrate your milestones in our earthy, vibrant space. We cater to every health-conscious detail.</p>
          </div>
          <button className="bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl w-full lg:w-auto">
            Book Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-[40px] bg-[#fdfaf6] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-green-600 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                <event.icon className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-white transition-colors">{event.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 transition-colors leading-relaxed">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
