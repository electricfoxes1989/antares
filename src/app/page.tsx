"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { yacht } from "@/data/yacht";

export default function Home() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={yacht.heroImage}
          alt={`${yacht.name} sailing`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/80" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-16 pb-20 md:pb-28 w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl tracking-tight">
                {yacht.name}
              </h1>
              <p className="text-white/70 text-lg md:text-xl mt-4 tracking-wide font-light">
                {yacht.tagline}
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-10 bg-white/30" />
        </motion.div>
      </section>

      {/* ━━ KEY FACTS ━━ */}
      <section className="bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="flex flex-wrap justify-between gap-y-10">
            {[
              { value: "40m", label: "Length" },
              { value: `${yacht.guests}`, label: "Guests" },
              { value: `${yacht.cabins}`, label: "Cabins" },
              { value: `${yacht.year}`, label: "Built" },
              { value: `${yacht.refit}`, label: "Refit" },
              { value: "3,500 nm", label: "Range" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="text-center min-w-[100px]">
                <p className="text-[#1a1a1a] text-2xl md:text-3xl font-light tracking-tight">{s.value}</p>
                <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ ASKING PRICE ━━ */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-2">Asking Price</p>
            <p className="text-3xl md:text-4xl font-light tracking-tight">{yacht.price}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-gold text-navy text-sm font-semibold uppercase tracking-[0.12em] hover:bg-gold-light transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>

      {/* ━━ ABOUT ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            <Reveal className="md:col-span-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={yacht.images[1]?.url} alt={`${yacht.name} exterior`} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-2 flex flex-col justify-center">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">The Yacht</p>
              <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-8">
                Dutch craftsmanship, ocean proven.
              </h2>
              <p className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light mb-5">
                {yacht.description[0]}
              </p>
              <p className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">
                {yacht.description[1]}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ FULL-BLEED IMAGE ━━ */}
      <Reveal>
        <div className="relative w-full h-[50vh] md:h-[70vh]">
          <img src={yacht.images[2]?.url} alt={`${yacht.name} deck`} className="w-full h-full object-cover" />
        </div>
      </Reveal>

      {/* ━━ HIGHLIGHTS ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <Reveal>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Accommodation</p>
              <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] tracking-tight mb-8">
                Comfort meets capability.
              </h2>
              <p className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">
                {yacht.description[2]}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Key Features</p>
              <ul className="space-y-4">
                {yacht.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-[#6b6b6b] text-[15px] leading-[1.7] font-light">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ VIDEO ━━ */}
      {yacht.videoUrl && (
        <section className="py-28 md:py-40 bg-[#f8f8f6]">
          <div className="max-w-5xl mx-auto px-6 md:px-16">
            <Reveal>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5 text-center">Video Tour</p>
              <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] tracking-tight mb-12 text-center">
                See {yacht.name} in Motion
              </h2>
              <div className="relative aspect-video overflow-hidden bg-black">
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

      {/* ━━ EXPLORE LINKS ━━ */}
      <section className="bg-navy text-white py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5 text-center">Discover More</p>
            <h2 className="font-serif text-[28px] md:text-[36px] text-white leading-[1.15] tracking-tight mb-16 text-center">
              Explore {yacht.name}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/shipyard", title: "The Shipyard", subtitle: yacht.builder, desc: "Over 140 years of Dutch superyacht excellence." },
              { href: "/design", title: "Naval Architecture", subtitle: yacht.navalArchitect, desc: "Bill Dixon's proven ocean-crossing ketch design." },
              { href: "/specifications", title: "Full Specifications", subtitle: "Technical Details", desc: "Every measurement, system, and capacity at a glance." },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 0.1}>
                <Link href={card.href} className="block group p-8 border border-white/10 hover:border-gold/30 transition-colors">
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">{card.subtitle}</p>
                  <h3 className="text-white font-serif text-xl mb-3 group-hover:text-gold transition-colors">{card.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
                  <span className="inline-block mt-4 text-gold text-xs tracking-[0.15em] uppercase group-hover:translate-x-1 transition-transform">
                    Explore &rarr;
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
