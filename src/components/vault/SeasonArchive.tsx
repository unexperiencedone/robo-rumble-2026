"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Users } from "lucide-react";

// Mock Data for Archive
const seasons = [
  { year: "2025", champion: "Steel Viper", team: "Cobra Dynamics", participants: 120, winRate: "92%" },
  { year: "2024", champion: "Razorback", team: "Iron Forge", participants: 85, winRate: "88%" },
  { year: "2023", champion: "Neutron Star", team: "Quantum Labs", participants: 64, winRate: "95%" },
];

export function SeasonArchive() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Background circuit lines effect - simulated with CSS borders/grid */}
        <div className="absolute inset-0 border-t border-b border-teal-900/20 bg-[linear-gradient(to_right,#00f3ff05_1px,transparent_1px)] bg-[size:40px_100%]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Legacy <span className="text-teal-400">Vault</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Access the data banks of past conflicts. Honor the champions.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Growth Chart (Visual Representation) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-teal-400/10 text-teal-400">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Evolution Protocol</h3>
                        <p className="text-xs text-muted-foreground">Participant Growth</p>
                    </div>
                </div>
                
                {/* Mock Chart UI */}
                <div className="flex items-end gap-2 h-40 mt-4 px-2 pb-2 border-b border-white/10">
                    <div className="w-1/4 bg-white/10 rounded-t-sm h-[40%]" />
                    <div className="w-1/4 bg-white/10 rounded-t-sm h-[60%]" />
                    <div className="w-1/4 bg-white/20 rounded-t-sm h-[80%]" />
                    <div className="w-1/4 bg-teal-400 rounded-t-sm h-[100%] animate-pulse relative group">
                       <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-400 text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                         Current
                       </span>
                    </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
                    <span>v1.0</span>
                    <span>v2.0</span>
                    <span>v3.0</span>
                    <span className="text-teal-400">2026</span>
                </div>
            </motion.div>

            {/* Hall of Fame - Horizontal Scroll / List */}
            <div className="lg:col-span-2 space-y-6">
                {seasons.map((season, i) => (
                    <motion.div
                        key={season.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-teal-400/40 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-6 md:flex items-center justify-between gap-6 relative z-10">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <span className="text-5xl font-bold text-white/10 font-mono">{season.year}</span>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{season.champion}</h4>
                                    <div className="flex items-center gap-2 text-sm text-teal-400">
                                        <Trophy className="h-3 w-3" />
                                        <span>{season.team}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Win Rate</div>
                                    <div className="text-lg font-mono font-bold text-teal-400">{season.winRate}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Units</div>
                                    <div className="text-lg font-mono font-bold text-white">{season.participants}</div>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-teal-400 group-hover:scale-110 transition-all cursor-pointer">
                                    <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

// Needed for the arrow icon
import { ArrowRight } from "lucide-react";
