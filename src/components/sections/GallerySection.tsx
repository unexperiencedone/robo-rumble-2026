"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/gallery/robot-1.png",
    alt: "Battle-Worn Mech",
    title: "Unit-01: VANGUARD",
    desc: "Heavy Assault Class"
  },
  {
    src: "/gallery/robot-2.png",
    alt: "Arena Combatant",
    title: "Unit-02: STRIKER",
    desc: "Agile Melee Specialist"
  },
  {
    src: "/gallery/robot-3.png",
    alt: "Industrial Walker",
    title: "Unit-03: GOLIATH",
    desc: "Siege & Demolition"
  },
  {
    src: "/gallery/robot-4.png",
    alt: "Stealth Ninja",
    title: "Unit-04: PHANTOM",
    desc: "Infiltration Operative"
  }
];

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
          Visual Archive
        </h2>
        <div className="h-1 w-24 bg-teal-400 mx-auto shadow-[0_0_15px_#00f3ff]" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Classified footage from the previous season's finalists.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm cursor-crosshair"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={cn(
                "object-cover transition-all duration-700 ease-out",
                hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100 grayscale hover:grayscale-0"
              )}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            {/* Content Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {img.title}
                </h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {img.desc}
                </p>
            </div>

            {/* Cyber Overlay Borders */}
            <div className="absolute inset-4 border border-teal-400/0 group-hover:border-teal-400/50 transition-all duration-500 rounded-lg pointer-events-none" />
            <div className="absolute top-4 right-4 h-2 w-2 bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
            <div className="absolute bottom-4 left-4 h-2 w-2 bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
