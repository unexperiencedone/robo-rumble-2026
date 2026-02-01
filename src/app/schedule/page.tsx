"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Event {
  id: string;
  time: string;
  title: string;
  type: "Qualification" | "Elimination" | "Finals" | "Maintenance";
  location: string;
  status: "Upcoming" | "Live" | "Completed";
}

const scheduleData: Event[] = [
  {
    id: "1",
    time: "09:00 AM",
    title: "Opening Ceremony",
    type: "Maintenance",
    location: "Main Arena",
    status: "Completed",
  },
  {
    id: "2",
    time: "10:30 AM",
    title: "Lightweight Qualifiers (Group A)",
    type: "Qualification",
    location: "Neon Circuit",
    status: "Live",
  },
  {
    id: "3",
    time: "01:00 PM",
    title: "Heavyweight Rumble",
    type: "Elimination",
    location: "The Pit",
    status: "Upcoming",
  },
  {
    id: "4",
    time: "03:45 PM",
    title: "AI Pathfinding Challenge",
    type: "Qualification",
    location: "Quantum Gauntlet",
    status: "Upcoming",
  },
  {
    id: "5",
    time: "06:00 PM",
    title: "Grand Finals: Super Heavyweight",
    type: "Finals",
    location: "Main Arena",
    status: "Upcoming",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 relative">
       {/* Background Grid REMOVED for 3D visibility */}

      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Operations <span className="text-teal-400">Timeline</span>
            </h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>June 15, 2026 • Sector 7 Arena</span>
            </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-teal-400/0 via-teal-400/50 to-teal-400/0 md:-translate-x-1/2" />

            {scheduleData.map((event, index) => (
                <TimelineItem key={event.id} event={event} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ event, index }: { event: Event; index: number }) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
            {/* Timeline Node */}
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-2 ${event.status === 'Live' ? 'bg-teal-400 border-teal-400 shadow-[0_0_15px_#2dd4bf] animate-pulse' : event.status === 'Completed' ? 'bg-white/20 border-white/20' : 'bg-obsidian border-teal-400'} transition-all`} />
            </div>

            {/* Content Spacer for Alignment */}
            <div className="hidden md:block flex-1" />

            {/* Card */}
            <div className="flex-1 ml-16 md:ml-0">
                <Card className={`glass-card border-white/10 p-6 relative overflow-hidden group hover:border-teal-400/30 transition-all duration-300`}>
                    {event.status === "Live" && (
                        <div className="absolute top-0 right-0 p-2">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                            </span>
                        </div>
                    )}
                    
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between mb-1">
                             <Badge variant={event.status === 'Live' ? 'default' : 'outline'} className={`${event.status === 'Live' ? 'bg-teal-400 text-black' : 'text-muted-foreground border-white/20'} mb-2`}>
                                {event.status.toUpperCase()}
                             </Badge>
                             <span className="text-sm font-mono text-teal-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {event.time}
                             </span>
                        </div>
                       
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                            {event.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3 h-3 text-violet-500" />
                                {event.location}
                            </span>
                             <span className={`text-[10px] uppercase tracking-wider ${event.type === 'Finals' ? 'text-yellow-400 font-bold' : ''}`}>
                                {event.type}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
}
