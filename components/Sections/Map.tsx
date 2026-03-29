"use client";

import { motion } from "framer-motion";

export function Map() {
  return (
    <section className="h-[500px] w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
      <motion.iframe
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5674069796025!2d73.80529817604314!3d18.503254170390145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb8d0000001%3A0x1d11340b15c71b69!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        className="w-full h-full border-0 grayscale dark:invert transition-all duration-1000"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
