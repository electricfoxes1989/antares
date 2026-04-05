"use client";

import Reveal from "@/components/Reveal";
import { yacht } from "@/data/yacht";

export default function Contact() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="bg-obsidian pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-5">Get in Touch</p>
            <h1 className="font-serif text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              Enquire About {yacht.name}
            </h1>
            <p className="text-white/20 text-[14px] mt-5 font-light">
              {yacht.tagline} &middot; {yacht.price}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━ BROKER INFO ━━ */}
      <section className="py-32 md:py-48 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-6">
            {/* Broker details */}
            <Reveal className="md:col-span-5">
              <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-8">Your Broker</p>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] tracking-tight text-white mb-8">
                {yacht.broker.name}
              </h2>
              <p className="text-white/30 text-[14px] leading-[2] font-light mb-12">
                Licensed superyacht broker since 1989 with over 35 years of experience specialising in
                sail and motor yacht sales. Based at Fraser Yachts in Fort Lauderdale, Florida.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Telephone", content: yacht.broker.phone, href: `tel:${yacht.broker.phone.replace(/\s/g, "")}` },
                  { label: "Email", content: yacht.broker.email, href: `mailto:${yacht.broker.email}?subject=Enquiry%20-%20${yacht.name}` },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-white/15 text-[9px] tracking-[0.3em] uppercase mb-2">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-white/60 text-lg font-light hover:text-sand transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  </div>
                ))}
                <div>
                  <p className="text-white/15 text-[9px] tracking-[0.3em] uppercase mb-2">Company</p>
                  <p className="text-white/60 text-lg font-light">{yacht.broker.company}</p>
                  <p className="text-white/20 text-[13px] mt-1 font-light">1535 SE 17th St, Fort Lauderdale, FL 33316</p>
                </div>
                <div>
                  <p className="text-white/15 text-[9px] tracking-[0.3em] uppercase mb-2">Website</p>
                  <a
                    href={yacht.broker.website}
                    className="text-sand/60 text-[12px] tracking-[0.15em] uppercase hover:text-sand transition-colors duration-300"
                  >
                    yachtsailbroker.com &rarr;
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Image + CTA */}
            <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
              <div className="relative aspect-[4/3] overflow-hidden mb-10">
                <img
                  src={yacht.images[3]?.url || yacht.heroImage}
                  alt={yacht.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-obsidian/10" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${yacht.broker.phone.replace(/\s/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white/[0.05] text-white/60 text-[11px] tracking-[0.2em] uppercase hover:bg-sand hover:text-obsidian transition-all duration-500"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${yacht.broker.email}?subject=Enquiry%20-%20${yacht.name}`}
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 border border-white/[0.08] text-white/40 text-[11px] tracking-[0.2em] uppercase hover:bg-sand hover:text-obsidian hover:border-sand transition-all duration-500"
                >
                  Send Email
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ YACHT SUMMARY ━━ */}
      <section className="border-t border-white/[0.04] py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <div className="grid grid-cols-3 md:grid-cols-6">
              {[
                { label: "Yacht", value: yacht.name },
                { label: "Builder", value: yacht.builder },
                { label: "Year", value: `${yacht.year}` },
                { label: "Length", value: "40m" },
                { label: "Guests", value: `${yacht.guests}` },
                { label: "Price", value: yacht.price },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`text-center py-6 ${
                    i < 5 ? "border-r border-white/[0.04]" : ""
                  } ${i < 3 ? "border-b md:border-b-0 border-white/[0.04]" : ""}`}
                >
                  <p className="text-white/15 text-[9px] tracking-[0.3em] uppercase mb-2">{item.label}</p>
                  <p className="text-white/50 text-[13px] font-light">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
