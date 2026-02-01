"use client";

import { MainScene } from "@/components/scene/MainScene";
import { TracksSection } from "@/components/sections/TracksSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { Hero } from "@/components/hero/Hero";
import { SeasonArchive } from "@/components/vault/SeasonArchive";
import { StatsSection } from "@/components/sections/StatsSection";
import { RulesSection } from "@/components/sections/RulesSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { RegistrationCTA } from "@/components/sections/RegistrationCTA";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* 3D Background - High fidelity depth */}
      <div className="fixed inset-0 z-0">
        <MainScene />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 pointer-events-none">
        
        {/* HERO: The Hook */}
        <section className="pointer-events-auto">
          <Hero />
        </section>

        {/* STATS: Real-time system pulse */}
        <section className="pointer-events-auto px-4">
          <StatsSection />
        </section>

        {/* TRACKS: The Competition Categories */}
        <section id="tracks" className="pointer-events-auto py-20">
          <TracksSection />
        </section>

        {/* RULES: Technical Specifications */}
        <section id="rules" className="pointer-events-auto py-24">
          <RulesSection />
        </section>

        {/* GALLERY: Visual Archive */}
        <section id="gallery" className="pointer-events-auto py-24">
          <GallerySection />
        </section>

        {/* LEGACY: The Archive (Crucial for recurring feel) */}
        <section id="archive" className="pointer-events-auto py-32">
          <div className="container mx-auto px-4">
             <div className="mb-16 text-center">
                <h2 className="text-5xl font-black uppercase tracking-tighter text-white">The Legacy</h2>
                <div className="h-1 w-24 bg-violet-600 mx-auto mt-4 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
             </div>
             <SeasonArchive />
          </div>
        </section>

        {/* SCHEDULE: The Timeline */}
        <section id="schedule" className="pointer-events-auto py-24">
          <ScheduleSection />
        </section>

        {/* PARTNERS: Corporate Alignment */}
        <section className="pointer-events-auto py-20 border-y border-white/5">
          <PartnersSection />
        </section>

        {/* FINAL CTA: Registration Conversion */}
        <section className="pointer-events-auto py-32">
          <RegistrationCTA />
        </section>

      </div>
    </main>
  );
}