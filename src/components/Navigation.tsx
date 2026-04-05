"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { yacht } from "@/data/yacht";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/shipyard", label: "Shipyard" },
  { href: "/design", label: "Design" },
  { href: "/specifications", label: "Specs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Enquire" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-md border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link
              href="/"
              className="text-white text-[11px] tracking-[0.4em] uppercase font-light hover:text-sand transition-colors duration-300"
            >
              {yacht.name}
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-sand"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-sand"
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="block h-[1px] w-full bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1px] w-full bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="block h-[1px] w-full bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-obsidian flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl tracking-[0.3em] uppercase font-light transition-colors ${
                      pathname === link.href ? "text-sand" : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
