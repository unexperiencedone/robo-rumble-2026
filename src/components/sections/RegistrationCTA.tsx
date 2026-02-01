"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function RegistrationCTA() {
  return (
    <div className="container mx-auto px-4">
        <div className="glass-card border-teal-400/30 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-black to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-3xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                     <Sparkles className="w-4 h-4 text-teal-400" />
                     <span className="text-sm text-muted-foreground">Limited Slots Available for Season 2026</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                    READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">DOMINATE?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    The arena awaits. Register your unit now to qualify for the preliminaries. 
                    Glory is earned, not given.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-16 px-12 text-xl bg-teal-400 text-black hover:bg-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all font-bold tracking-tight rounded-full" asChild>
                        <Link href="/registration">
                            INITIATE SEQUENCE <ArrowRight className="ml-2 w-6 h-6" />
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    </div>
  );
}
