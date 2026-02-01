"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rules = [
  "Weight Limit: Classes are strict (Light: 60lb, Heavy: 220lb).",
  "Weapon Safety: Projectiles must be tethered or soft-core.",
  "AI Autonomy: Fully autonomous units receive a 20% point bonus.",
  "Arena Hazard: Environmental hazards are active after 2 minutes.",
  "Fail-Safe: Remote kill-switch is mandatory for all entries.",
];

export function RulesSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">PROTOCOL</span> <span className="text-violet-500">OMEGA</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
                Compliance is mandatory. Violation results in immediate disqualification and potential unit forfeiture.
            </p>
            
            <div className="space-y-4">
                {rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/50">
                            <Check className="w-3 h-3 text-violet-400" />
                        </div>
                        <span className="text-gray-300">{rule}</span>
                    </div>
                ))}
            </div>
        </motion.div>

        <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[400px] glass-card border-violet-500/20 p-1 rounded-2xl overflow-hidden"
        >
            <div className="absolute inset-0 bg-violet-500/5 z-0" />
            <div className="relative z-10 h-full w-full bg-black/50 rounded-xl flex items-center justify-center flex-col gap-4">
                <div className="w-32 h-32 border-4 border-dashed border-violet-500/30 rounded-full animate-spin-slow flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-teal-400/50 rounded-full animate-reverse-spin" />
                </div>
                <div className="text-center">
                    <div className="text-4xl font-mono font-bold text-white">CLASS A</div>
                    <div className="text-sm text-teal-400 tracking-[0.2em]">CERTIFIED</div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
