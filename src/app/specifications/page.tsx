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
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">Technical</p>
            <h1 className="font-serif text-white text-4xl md:text-6xl tracking-tight">
              Full Specifications
            </h1>
            <p className="text-white/50 text-lg mt-4">{yacht.name} &middot; {yacht.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* ━━ SPEC GROUPS ━━ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            {/* Sidebar summary */}
            <Reveal className="md:col-span-2">
              <div className="md:sticky md:top-28">
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="text-center">
                    <p className="text-4xl font-light text-[#1a1a1a]">{yacht.guests}</p>
                    <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mt-2">Guests</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-light text-[#1a1a1a]">{yacht.cabins}</p>
                    <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mt-2">Cabins</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-light text-[#1a1a1a]">{yacht.crew}</p>
                    <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mt-2">Crew</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-light text-[#1a1a1a]">40m</p>
                    <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mt-2">Length</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-navy text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-navy-light transition-colors"
                >
                  Request Full Spec Sheet
                </Link>
              </div>
            </Reveal>

            {/* Spec tables */}
            <div className="md:col-span-3 space-y-12">
              {specs.map((group) => (
                <Reveal key={group.category}>
                  <h3 className="text-[12px] tracking-[0.2em] uppercase text-[#aaa] mb-4">{group.category}</h3>
                  <div className="border-t border-black/[0.08]">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex justify-between py-3.5 border-b border-black/[0.05]">
                        <span className="text-[#888] text-[14px]">{item.label}</span>
                        <span className="text-[#1a1a1a] text-[14px] font-medium text-right">{item.value}</span>
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
      <section className="bg-navy text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[28px] md:text-[36px] text-white leading-[1.15] tracking-tight mb-6">
              Want the complete specification document?
            </h2>
            <p className="text-white/40 text-[15px] leading-[1.95] font-light mb-8">
              Georges can provide the full technical specification, survey reports, and classification documentation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy text-sm font-semibold uppercase tracking-[0.12em] hover:bg-gold-light transition-colors"
            >
              Contact Broker
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
