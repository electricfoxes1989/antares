"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { yacht, shipyard } from "@/data/yacht";

export default function Shipyard() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={yacht.images[3]?.url || yacht.heroImage}
          alt={`${yacht.name} by ${shipyard.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/20 to-obsidian" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 md:pb-28 w-full">
            <Reveal>
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-5">The Builder</p>
              <h1 className="font-serif text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
                {shipyard.name}
              </h1>
              <p className="text-white/30 text-[14px] mt-5 font-light">
                {shipyard.location} &middot; Est. {shipyard.founded}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ OVERVIEW ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-6">
            <Reveal className="md:col-span-4">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Heritage</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-tight text-white mb-10">
                Where tradition meets ambition.
              </h2>
              <div className="space-y-0 border-t border-white/[0.06]">
                {[
                  { label: "Founded", value: shipyard.founded },
                  { label: "Location", value: shipyard.location },
                  { label: "Speciality", value: shipyard.speciality },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-4 border-b border-white/[0.04]">
                    <span className="text-white/20 text-[13px]">{item.label}</span>
                    <span className="text-white/50 text-[13px] font-light text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
              <div className="space-y-6">
                {shipyard.description.map((para, i) => (
                  <p key={i} className="text-white/30 text-[14px] leading-[2] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ NOTABLE BUILDS ━━ */}
      <section className="border-t border-white/[0.04] py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-6">Portfolio</p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-white mb-16">
              Notable {shipyard.name} Builds
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-[1px] bg-white/[0.04]">
            {shipyard.notableYachts.map((y, i) => (
              <Reveal key={y.name} delay={i * 0.08}>
                <div className={`p-10 md:p-12 ${
                  y.name === yacht.name ? "bg-charcoal" : "bg-obsidian"
                }`}>
                  <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-3">{y.type}</p>
                  <h3 className="font-serif text-white text-xl tracking-tight mb-4">{y.name}</h3>
                  <div className="flex gap-6 text-[13px] text-white/20">
                    <span>{y.length}</span>
                    <span>{y.year}</span>
                  </div>
                  {y.name === yacht.name && (
                    <span className="inline-block mt-5 text-sand text-[9px] tracking-[0.3em] uppercase">This vessel</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="border-t border-white/[0.04] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white leading-[1.1] tracking-tight mb-6">
              Interested in {yacht.name}?
            </h2>
            <p className="text-white/20 text-[14px] leading-[2] font-light mb-10">
              Contact Georges Bourgoignie to arrange a private viewing or request additional information.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-sand text-[11px] tracking-[0.2em] uppercase border border-sand/30 px-8 py-4 hover:bg-sand hover:text-obsidian transition-all duration-500"
            >
              Enquire Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
