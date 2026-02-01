"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Users, Cpu } from "lucide-react";

const stats = [
  { label: "Active Units", value: "842", icon: Cpu, color: "text-teal-400" },
  { label: "Total Damage", value: "9.2TB", icon: Activity, color: "text-red-500" },
  { label: "Pilots Online", value: "1,204", icon: Users, color: "text-violet-500" },
  { label: "Safety Rating", value: "99.9%", icon: ShieldCheck, color: "text-green-400" },
];

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-12 relative z-20">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center gap-2 group hover:border-teal-400/30 transition-colors"
          >
            <Icon className={`w-6 h-6 ${stat.color} mb-2 opacity-80 group-hover:scale-110 transition-transform`} />
            <span className="text-3xl font-mono font-bold text-white tracking-tighter">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
