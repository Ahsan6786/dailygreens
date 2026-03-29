"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#fdfaf6]  transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900  mb-6 uppercase tracking-tighter">Reach Out</h2>
          <p className="text-slate-600  text-lg mb-12 max-w-md leading-relaxed">
            Have questions or want to book a table? Send us a message or visit us in Kothrud.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white  flex items-center justify-center text-green-600  shadow-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <a 
                href="https://www.google.com/maps/search/daily+greens/@18.5058541,73.8175294,11z?entry=s&sa=X&ved=1t%3A199789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Visit Us</p>
                <p className="text-lg font-bold text-slate-900 ">123 Fresh Lane, Kothrud, Pune</p>
              </a>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white  flex items-center justify-center text-green-600  shadow-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                <p className="text-lg font-bold text-slate-900 ">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white  flex items-center justify-center text-green-600  shadow-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                <p className="text-lg font-bold text-slate-900 ">hello@dailygreens.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:flex-1"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[50px] bg-white  border border-black/5  shadow-2xl space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full bg-[#fdfaf6]  border border-slate-100  px-8 py-5 rounded-2xl text-slate-900  focus:outline-none focus:ring-2 focus:ring-green-600/50 transition-all font-bold placeholder:text-slate-400"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-[#fdfaf6]  border border-slate-100  px-8 py-5 rounded-2xl text-slate-900  focus:outline-none focus:ring-2 focus:ring-green-600/50 transition-all font-bold placeholder:text-slate-400"
            />
            <textarea 
              placeholder="Your Message" 
              rows={5}
              required
              className="w-full bg-[#fdfaf6]  border border-slate-100  px-8 py-5 rounded-2xl text-slate-900  focus:outline-none focus:ring-2 focus:ring-green-600/50 transition-all font-bold placeholder:text-slate-400"
            />
            <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-green-600/30 hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
