"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { yacht, designer } from "@/data/yacht";

export default function Design() {
  const { navalArchitect, interiorDesigner } = designer;

  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={yacht.images[0]?.url || yacht.heroImage}
          alt={`${yacht.name} — designed by ${navalArchitect.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/20 to-obsidian" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20 md:pb-28 w-full">
            <Reveal>
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-5">Architecture & Design</p>
              <h1 className="font-serif text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
                The Design Story
              </h1>
              <p className="text-white/30 text-[14px] mt-5 font-light">
                Naval architecture by {navalArchitect.name} &middot; Interiors by {interiorDesigner.name}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ NAVAL ARCHITECT ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-6">
            <Reveal className="md:col-span-4">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Naval Architect</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-tight text-white mb-10">
                {navalArchitect.name}
              </h2>
              <div className="space-y-0 border-t border-white/[0.06]">
                <div className="flex justify-between py-4 border-b border-white/[0.04]">
                  <span className="text-white/20 text-[13px]">Based</span>
                  <span className="text-white/50 text-[13px] font-light text-right">{navalArchitect.location}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-white/[0.04]">
                  <span className="text-white/20 text-[13px]">Founded</span>
                  <span className="text-white/50 text-[13px] font-light">{navalArchitect.founded}</span>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-5">Notable Designs</p>
                <ul className="space-y-3">
                  {navalArchitect.notableDesigns.map((d) => (
                    <li key={d} className="text-white/30 text-[13px] font-light flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-sand/50 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
              <div className="space-y-6">
                {navalArchitect.description.map((para, i) => (
                  <p key={i} className="text-white/30 text-[14px] leading-[2] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ FULL-BLEED ━━ */}
      <Reveal>
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <img src={yacht.images[4]?.url || yacht.heroImage} alt={`${yacht.name} interior`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>
      </Reveal>

      {/* ━━ INTERIOR DESIGNER ━━ */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-6">
            <Reveal delay={0.1} className="md:col-span-7 order-2 md:order-1">
              <div className="space-y-6">
                {interiorDesigner.description.map((para, i) => (
                  <p key={i} className="text-white/30 text-[14px] leading-[2] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9 order-1 md:order-2">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Interior Design</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-tight text-white mb-10">
                {interiorDesigner.name}
              </h2>
              <p className="text-white/30 text-[14px] leading-[2] font-light">
                Warm timber joinery, considered lighting, and a layout that feels open and airy — complementing the vessel&apos;s traditional lines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="border-t border-white/[0.04] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white leading-[1.1] tracking-tight mb-6">
              Schedule a Private Viewing
            </h2>
            <p className="text-white/20 text-[14px] leading-[2] font-light mb-10">
              Experience {yacht.name}&apos;s design in person. Contact Georges Bourgoignie to arrange a visit.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-sand text-[11px] tracking-[0.2em] uppercase border border-sand/30 px-8 py-4 hover:bg-sand hover:text-obsidian transition-all duration-500"
            >
              Contact Broker
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
