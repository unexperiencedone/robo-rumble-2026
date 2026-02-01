"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    id: "2",
    time: "10:30 AM",
    title: "Lightweight Qualifiers",
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
    id: "5",
    time: "06:00 PM",
    title: "Grand Finals",
    type: "Finals",
    location: "Main Arena",
    status: "Upcoming",
  },
];

export function ScheduleSection() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".timeline-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            },
            x: -50,
            opacity: 0,
            stagger: 0.3,
            duration: 0.8,
        });
    }, { scope: containerRef });

  return (
    <section id="schedule" ref={containerRef} className="min-h-screen py-24 relative flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Global <span className="text-teal-400">Operations</span>
            </h2>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>June 15, 2026 • Sector 7 Arena</span>
            </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
            {scheduleData.map((event) => (
                <div key={event.id} className="timeline-item flex items-center gap-4 text-left">
                     <Card className={`glass-card border-white/10 p-6 w-full relative overflow-hidden group hover:border-teal-400/30 transition-all duration-300 flex items-center justify-between`}>
                        <div className="flex flex-col gap-1">
                             <div className="flex items-center gap-2 mb-1">
                                <Badge variant={event.status === 'Live' ? 'default' : 'outline'} className={`${event.status === 'Live' ? 'bg-teal-400 text-black' : 'text-muted-foreground border-white/20'}`}>
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
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-3 h-3 text-violet-500" />
                                {event.location}
                            </div>
                        </div>
                        {event.status === "Live" && (
                            <div className="h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
                            </div>
                        )}
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
