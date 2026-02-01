"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Skull, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Expert" | "Lethal";
  features: string[];
  icon: React.ElementType;
  color: string;
}

const tracks: Track[] = [
  {
    id: "neon-circuit",
    name: "Neon Circuit",
    description: "A high-speed course designed for velocity and precision. Avoid the laser barriers and navigate the hairpin turns.",
    difficulty: "Intermediate",
    features: ["Hyper-Glass Surface", "Laser Barriers", "Zero-G Zones"],
    icon: Zap,
    color: "text-teal-400",
  },
  {
    id: "the-pit",
    name: "The Pit",
    description: "The ultimate combat arena. No rules, just metal grinding against metal. Survival is the only victory condition.",
    difficulty: "Lethal",
    features: ["Flame Jets", "Spike Traps", "Hydraulic Crushers"],
    icon: Skull,
    color: "text-red-500",
  },
  {
    id: "quantum-gauntlet",
    name: "Quantum Gauntlet",
    description: "A puzzle-heavy obstacle course that tests AI processing and sensor arrays. Reality shifts every 30 seconds.",
    difficulty: "Expert",
    features: ["Holographic Decoys", "Emp Fields", "Moving Platforms"],
    icon: Target,
    color: "text-violet-500",
  },
];

export default function TracksPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
        {/* Ambient Background REMOVED for 3D visibility */}

        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-white to-violet-500 mb-6 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">
                    ARENA SECTORS
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Three distinct environments designed to push your unit to its breaking point. Choose your battlefield wisely.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <TrackCard key={track.id} track={track} index={index} />
                ))}
            </div>
        </div>
    </div>
  );
}

function TrackCard({ track, index }: { track: Track; index: number }) {
    const Icon = track.icon;
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl -z-10 group-hover:from-teal-400/20 transition-all duration-500" />
            <div className="h-full glass-card hover:border-teal-400/50 transition-all duration-500 overflow-hidden flex flex-col relative rounded-2xl border border-white/10 p-1">
                {/* Image Placeholder / Gradient Header */}
                <div className={`h-48 w-full rounded-xl bg-gradient-to-br from-black to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className={`absolute inset-0 bg-${track.color}/10 group-hover:bg-${track.color}/20 transition-all`} />
                    <Icon className={`w-20 h-20 ${track.color} opacity-80 group-hover:scale-110 group-hover:brightness-150 transition-all duration-500`} />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white">
                        {track.difficulty.toUpperCase()}
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{track.name}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{track.description}</p>
                    
                    <div className="space-y-3 mb-8">
                        {track.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                                <Shield className="w-3 h-3 text-teal-400" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full bg-white/5 hover:bg-teal-400 hover:text-black border border-white/10 group-hover:border-teal-400 transition-all duration-300 font-mono">
                        VIEW SCHEMATICS <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
