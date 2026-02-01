"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Skull, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Track {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Expert" | "Lethal";
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
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
    description: "The ultimate combat arena. Survival is the only victory condition.",
    difficulty: "Lethal",
    features: ["Flame Jets", "Spike Traps", "Hydraulic Crushers"],
    icon: Skull,
    color: "text-red-500",
  },
  {
    id: "quantum-gauntlet",
    name: "Quantum Gauntlet",
    description: "A puzzle-heavy obstacle course testing AI processing. Reality shifts constantly.",
    difficulty: "Expert",
    features: ["Holographic Decoys", "Emp Fields", "Moving Platforms"],
    icon: Target,
    color: "text-violet-500",
  },
];

export function TracksSection() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".track-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        });
    }, { scope: sectionRef });

  return (
    <section id="tracks" ref={sectionRef} className="min-h-screen py-24 relative overflow-hidden flex items-center">
        {/* HTML Content Overlay */}
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-white to-violet-500 mb-6 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">
                    ARENA SECTORS
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose your battlefield wisely.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <div key={track.id} className="track-card">
                         <TrackCard track={track} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

function TrackCard({ track }: { track: Track }) {
    const Icon = track.icon;
    
    return (
        <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl -z-10 group-hover:from-teal-400/20 transition-all duration-500" />
            <div className="h-full glass-card hover:border-teal-400/50 transition-all duration-500 overflow-hidden flex flex-col relative rounded-2xl border border-white/10 p-1">
                <div className={`h-48 w-full rounded-xl bg-gradient-to-br from-black to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className={`absolute inset-0 bg-${track.color}/10 group-hover:bg-${track.color}/20 transition-all`} />
                    <Icon className={`w-20 h-20 ${track.color} opacity-80 group-hover:scale-110 group-hover:brightness-150 transition-all duration-500`} />
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
        </div>
    );
}
