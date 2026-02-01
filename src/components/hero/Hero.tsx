"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background Video / Animation Placeholder */}
      {/* Background Video / Animation Placeholder - REMOVED for 3D visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle vignette solely for text readability if needed, but keeping it minimal */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center px-4 space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 backdrop-blur-md mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-sm font-medium text-teal-400">System Online: Season 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 flex flex-col items-center gap-2">
                <div className="flex">
                    {"ROBO".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-default"
                            whileHover={{
                                rotate: (i % 2 === 0 ? 1 : -1) * 10,
                                scale: 1.1,
                                color: "#00f3ff"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
                <div className="flex">
                    {"RUMBLE".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-violet-500 animate-pulse-slow drop-shadow-[0_0_30px_rgba(0,243,255,0.4)] cursor-default"
                            whileHover={{
                                rotate: (i % 2 === 0 ? -1 : 1) * 10,
                                scale: 1.1,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground mt-4 mb-8">
                The apex of automated combat. Build, battle, and become a legend in the ultimate cyber-industrial arena.
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-4xl glass-card rounded-2xl p-8 mb-8"
        >
            <h3 className="text-teal-400 text-sm uppercase tracking-widest mb-4">Countdown to Destruction</h3>
            <CountdownTimer />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
            <Button size="lg" className="bg-teal-400 text-black hover:bg-teal-300 font-bold text-lg h-14 px-10 shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all" asChild>
                <Link href="/registration">
                    Initialize Registration <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 text-lg backdrop-blur-sm" asChild>
                <Link href="/tracks">Explore Tracks</Link>
            </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll to Initialize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent" />
      </motion.div>
    </section>
  );
}
