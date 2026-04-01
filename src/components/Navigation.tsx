import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { yacht } from "../data/yacht";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/shipyard", label: "Shipyard" },
  { href: "/design", label: "Design" },
  { href: "/specifications", label: "Specs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Enquire" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Yacht name */}
            <Link href="/" className="text-white text-sm tracking-[0.25em] uppercase font-light">
              {yacht.name}
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors ${
                    location === link.href
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/70 hover:text-white"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-navy pt-20"
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg tracking-[0.2em] uppercase ${
                    location === link.href ? "text-gold" : "text-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
