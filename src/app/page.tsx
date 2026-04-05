"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { yacht } from "@/data/yacht";

export default function Home() {
  return (
    <>
      {/* ━━ HERO — full viewport, cinematic ━━ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={yacht.heroImage}
          alt={`${yacht.name} sailing`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/10 to-obsidian" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full pb-24 md:pb-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <p className="text-sand text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-6">
                {yacht.builder} &middot; {yacht.year}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-serif text-white text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight"
            >
              {yacht.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-8 mt-8"
            >
              <p className="text-white/30 text-[13px] tracking-wide font-light">
                {yacht.tagline}
              </p>
              <span className="hidden md:block w-24 h-[1px] bg-white/10" />
              <p className="hidden md:block text-white/20 text-[13px] font-light">
                {yacht.price}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-white/15 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ━━ KEY FIGURES — horizontal strip ━━ */}
      <section className="border-y border-white/[0.04] bg-obsidian">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6">
            {[
              { value: "40m", label: "Length" },
              { value: `${yacht.guests}`, label: "Guests" },
              { value: `${yacht.cabins}`, label: "Cabins" },
              { value: `${yacht.year}`, label: "Built" },
              { value: `${yacht.refit}`, label: "Refit" },
              { value: "3,500", label: "Range (nm)" },
            ].map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.05}
                className={`text-center py-10 md:py-14 ${
                  i < 5 ? "border-r border-white/[0.04]" : ""
                } ${i < 3 ? "border-b md:border-b-0 border-white/[0.04]" : ""}`}
              >
                <p className="text-white text-2xl md:text-3xl font-light tracking-tight">{s.value}</p>
                <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ INTRODUCTION — asymmetric editorial ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-6">
            <Reveal className="md:col-span-5 md:col-start-1">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">The Yacht</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-white mb-10">
                Dutch craftsmanship,<br />ocean proven.
              </h2>
              <div className="space-y-6">
                <p className="text-white/30 text-[14px] leading-[2] font-light">
                  {yacht.description[0]}
                </p>
                <p className="text-white/30 text-[14px] leading-[2] font-light">
                  {yacht.description[1]}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={yacht.images[1]?.url}
                  alt={`${yacht.name} under sail`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ FULL-BLEED IMAGE ━━ */}
      <Reveal>
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            src={yacht.images[2]?.url}
            alt={`${yacht.name} stern`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>
      </Reveal>

      {/* ━━ PRICE BAND ━━ */}
      <section className="border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-3">Asking Price</p>
            <p className="text-white text-3xl md:text-4xl font-light tracking-tight">{yacht.price}</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 text-sand text-[11px] tracking-[0.2em] uppercase border border-sand/30 px-8 py-4 hover:bg-sand hover:text-obsidian transition-all duration-500"
          >
            Enquire Now
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ━━ HIGHLIGHTS — two column ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32">
            <Reveal>
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Accommodation</p>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-10">
                Comfort meets capability.
              </h2>
              <p className="text-white/30 text-[14px] leading-[2] font-light">
                {yacht.description[2]}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Key Features</p>
              <ul className="space-y-5">
                {yacht.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="mt-2 w-1 h-1 rounded-full bg-sand/60 flex-shrink-0" />
                    <span className="text-white/30 text-[14px] leading-[1.8] font-light">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ VIDEO ━━ */}
      {yacht.videoUrl && (
        <section className="py-32 md:py-48 border-t border-white/[0.04]">
          <div className="max-w-[1100px] mx-auto px-8 md:px-16">
            <Reveal>
              <div className="text-center mb-16">
                <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-6">Video Tour</p>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-white">
                  See {yacht.name} in Motion
                </h2>
              </div>
              <div className="relative aspect-video overflow-hidden bg-charcoal">
                <iframe
                  src={yacht.videoUrl}
                  title={`${yacht.name} video`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ━━ INTERIOR IMAGE ━━ */}
      <Reveal>
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <img
            src={yacht.images[3]?.url}
            alt={`${yacht.name} interior`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>
      </Reveal>

      {/* ━━ EXPLORE — editorial cards ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-6">Discover More</p>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-white">
                Explore {yacht.name}
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/[0.04]">
            {[
              { href: "/shipyard", title: "The Shipyard", subtitle: yacht.builder, desc: "Over 140 years of Dutch superyacht excellence." },
              { href: "/design", title: "Naval Architecture", subtitle: yacht.navalArchitect, desc: "Bill Dixon\u2019s proven ocean-crossing ketch design." },
              { href: "/specifications", title: "Full Specifications", subtitle: "Technical Details", desc: "Every measurement, system, and capacity." },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className="group block bg-obsidian p-10 md:p-14 hover:bg-charcoal transition-colors duration-500"
                >
                  <p className="text-sand/60 text-[9px] tracking-[0.4em] uppercase mb-4">{card.subtitle}</p>
                  <h3 className="text-white font-serif text-xl md:text-2xl tracking-tight mb-4 group-hover:text-sand transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-white/20 text-[13px] leading-[1.8] font-light mb-8">{card.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sand/40 text-[10px] tracking-[0.2em] uppercase group-hover:text-sand group-hover:gap-3 transition-all duration-300">
                    Explore <span>&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
