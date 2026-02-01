"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function LandingSplash() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center pointer-events-none">
      <div className="relative z-10 text-center space-y-6 select-none mix-blend-difference">
        <motion.div
           initial={{ opacity: 0, scale: 0.8, letterSpacing: "0em" }}
           animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="flex flex-col items-center"
        >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
               ROBO
            </h1>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 drop-shadow-[0_0_50px_rgba(0,243,255,0.6)]">
               RUMBLE
            </h1>
        </motion.div>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-cyan-400 font-mono tracking-[0.5em] text-sm md:text-xl uppercase"
        >
            System initialized • V.4.0.2
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to Enter</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
