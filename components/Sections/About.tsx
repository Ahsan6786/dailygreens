"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Coffee, TreePine, BatteryCharging } from "lucide-react";

const features = [
  { name: "High-Speed WiFi", icon: Wifi },
  { name: "Specialty Coffee", icon: Coffee },
  { name: "Indoor Garden", icon: TreePine },
  { name: "Charging Stations", icon: BatteryCharging },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#fdfaf6]  transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="lg:flex-1 relative aspect-[4/3] w-full rounded-[60px] overflow-hidden shadow-2xl"
        >
          <Image src="/restro.png" alt="Daily Greens Experience" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/5 " />
        </motion.div>

        {/* Content side */}
        <div className="lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900  mb-6">The Daily Greens <br /> Experience</h2>
            <p className="text-slate-600  text-lg mb-10 leading-relaxed">
              We are more than just a restaurant. We are a community dedicated to the art of healthy living. 
              Our space is designed for comfort, productivity, and connection.
            </p>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {features.map((feat, i) => (
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  key={feat.name} 
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100  flex items-center justify-center text-green-700 ">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-800 ">{feat.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 group flex items-center gap-4 text-green-600  font-bold text-lg"
            >
              Learn Our Story
              <span className="w-10 h-10 rounded-full border border-green-600/20 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
