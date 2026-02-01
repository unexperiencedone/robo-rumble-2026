"use client";

import { motion } from "framer-motion";

const partners = [
  "CYBERDYNE", "MASSIVE DYNAMIC", "WAYLAND-YUTANI", "APERTURE", "BLACK MESA", "TYRELL CORP"
];

export function PartnersSection() {
  return (
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-10">Trusted by Industry Titans</p>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-xl md:text-2xl font-black text-white/40 hover:text-teal-400 transition-colors cursor-pointer select-none"
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
