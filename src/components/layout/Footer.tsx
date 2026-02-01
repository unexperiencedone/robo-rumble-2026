"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Twitter, Github, Instagram, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl pt-20 pb-10 overflow-hidden pointer-events-auto">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
                <Link href="/" className="flex items-center gap-2 group w-fit">
                  <Zap className="h-6 w-6 text-teal-400 group-hover:text-violet-500 transition-colors duration-300" />
                  <span className="text-2xl font-bold tracking-tighter text-white">
                    ROBO RUMBLE
                  </span>
                </Link>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                    The premier global league for automated mechanized combat. Innovation through destruction.
                </p>
                <div className="flex gap-4">
                    {[Twitter, Github, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-teal-400/20 hover:border-teal-400 hover:text-teal-400 text-white transition-all duration-300">
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Navigation Columns */}
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Competition</h4>
                <ul className="space-y-4">
                    {['Event Tracks', 'Schedule', 'Rules Protocol', 'Leaderboards'].map((item) => (
                        <li key={item}>
                            <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors text-sm">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Organization</h4>
                <ul className="space-y-4">
                    {['About Us', 'Partners', 'Press Kit', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href="#" className="text-muted-foreground hover:text-teal-400 transition-colors text-sm">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-bold text-teal-400 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <Mail className="h-4 w-4" /> System Updates
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                    Subscribe for battle logs and event announcements.
                </p>
                <div className="flex gap-2">
                    <Input placeholder="Enter comms ID..." className="bg-white/5 border-white/10 focus:border-teal-400" />
                    <Button size="icon" className="bg-teal-400 text-black hover:bg-teal-500">
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-mono">
                © 2026 ROBO RUMBLE INC. // EST. TOKYO-3
            </p>
            <div className="flex gap-8 text-xs text-muted-foreground font-mono uppercase tracking-widest">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            
            {/* Live Status */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/5 border border-teal-400/20">
                <div className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[10px] font-bold text-teal-400 tracking-widest uppercase">
                    Servers Operational
                </span>
            </div>
        </div>
      </div>
    </footer>
  );
}
