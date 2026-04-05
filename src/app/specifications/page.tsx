"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { yacht } from "@/data/yacht";

const specs = [
  {
    category: "Overview",
    items: [
      { label: "Yacht Name", value: yacht.name },
      { label: "Type", value: yacht.yachtType },
      { label: "Builder", value: yacht.builder },
      { label: "Year", value: `${yacht.year}` },
      { label: "Refit", value: `${yacht.refit}` },
      { label: "Flag", value: yacht.flag },
      { label: "Classification", value: yacht.classification },
      { label: "Asking Price", value: yacht.price },
    ],
  },
  {
    category: "Dimensions",
    items: [
      { label: "Length Overall", value: yacht.length },
      { label: "Beam", value: yacht.beam },
      { label: "Draft", value: yacht.draft },
      { label: "Gross Tonnage", value: yacht.grossTonnage },
      { label: "Hull Material", value: yacht.hull },
    ],
  },
  {
    category: "Performance",
    items: [
      { label: "Engines", value: yacht.engines },
      { label: "Cruising Speed", value: yacht.cruisingSpeed },
      { label: "Maximum Speed", value: yacht.maxSpeed },
      { label: "Range", value: yacht.range },
      { label: "Fuel Capacity", value: yacht.fuel },
    ],
  },
  {
    category: "Accommodation",
    items: [
      { label: "Guests", value: `${yacht.guests}` },
      { label: "Cabins", value: `${yacht.cabins}` },
      { label: "Cabin Configuration", value: yacht.cabinConfig },
      { label: "Crew", value: `${yacht.crew}` },
    ],
  },
  {
    category: "Design",
    items: [
      { label: "Naval Architect", value: yacht.navalArchitect },
      { label: "Interior Designer", value: yacht.interiorDesigner },
    ],
  },
];

export default function Specifications() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="bg-obsidian pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-5">Technical</p>
            <h1 className="font-serif text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              Full Specifications
            </h1>
            <p className="text-white/20 text-[14px] mt-5 font-light">
              {yacht.name} &middot; {yacht.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━ SPEC GROUPS ━━ */}
      <section className="py-24 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-6">
            {/* Sidebar summary */}
            <Reveal className="md:col-span-3">
              <div className="md:sticky md:top-32">
                <div className="grid grid-cols-2 gap-10 mb-14">
                  {[
                    { value: yacht.guests, label: "Guests" },
                    { value: yacht.cabins, label: "Cabins" },
                    { value: yacht.crew, label: "Crew" },
                    { value: "40m", label: "Length" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-white text-3xl font-light">{s.value}</p>
                      <p className="text-white/15 text-[9px] tracking-[0.3em] uppercase mt-2">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center text-sand text-[11px] tracking-[0.2em] uppercase border border-sand/30 px-6 py-4 hover:bg-sand hover:text-obsidian transition-all duration-500"
                >
                  Request Spec Sheet
                </Link>
              </div>
            </Reveal>

            {/* Spec tables */}
            <div className="md:col-span-8 md:col-start-5 space-y-16">
              {specs.map((group) => (
                <Reveal key={group.category}>
                  <h3 className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-6">{group.category}</h3>
                  <div className="border-t border-white/[0.06]">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex justify-between py-4 border-b border-white/[0.04]">
                        <span className="text-white/20 text-[13px]">{item.label}</span>
                        <span className="text-white/60 text-[13px] font-light text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="border-t border-white/[0.04] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-white leading-[1.1] tracking-tight mb-6">
              Want the complete specification document?
            </h2>
            <p className="text-white/20 text-[14px] leading-[2] font-light mb-10">
              Georges can provide the full technical specification, survey reports, and classification documentation.
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
