"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "#archive", label: "Legacy Vault" },
  { href: "#tracks", label: "Event Tracks" },
  { href: "#schedule", label: "Schedule" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      {/* Aurora Background Effect */}
      <motion.div 
        className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(45,212,191,0.1)_60deg,transparent_120deg,rgba(139,92,246,0.1)_180deg,transparent_360deg)] opacity-50 blur-3xl pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="h-6 w-6 text-teal-400 group-hover:text-violet-500 transition-colors duration-300" />
          <span className="text-xl font-bold tracking-tighter text-white group-hover:animate-glitch">
            ROBO RUMBLE
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-teal-400",
                pathname === link.href ? "text-teal-400" : "text-muted-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-teal-400 shadow-[0_0_10px_#00f3ff]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button asChild className="bg-teal-400 text-black hover:bg-teal-500 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 font-bold">
            <Link href="/registration">Register Unit</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-teal-400 hover:bg-white/5">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass bg-black/90 border-l border-white/10 w-[300px] text-white">
            <div className="flex flex-col gap-6 mt-10">
              <Link href="/" className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold tracking-tighter">ROBO RUMBLE</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-teal-400",
                      pathname === link.href ? "text-teal-400" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Button asChild className="bg-teal-400 text-black hover:bg-teal-500 w-full font-bold">
                  <Link href="/registration">Register Unit</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
