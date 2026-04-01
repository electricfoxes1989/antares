import Reveal from "../components/Reveal";
import { yacht } from "../data/yacht";

export default function Contact() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-serif text-white text-4xl md:text-6xl tracking-tight">
              Enquire About {yacht.name}
            </h1>
            <p className="text-white/50 text-lg mt-4">
              {yacht.tagline} &middot; {yacht.price}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━ BROKER INFO ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Broker details */}
            <Reveal>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Your Broker</p>
              <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-6">
                {yacht.broker.name}
              </h2>
              <p className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light mb-8">
                Licensed superyacht broker since 1989 with over 35 years of experience specialising in
                sail and motor yacht sales. Based at Fraser Yachts in Fort Lauderdale, Florida.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-2">Telephone</p>
                  <a
                    href={`tel:${yacht.broker.phone.replace(/\s/g, "")}`}
                    className="text-[#1a1a1a] text-lg font-light hover:text-gold transition-colors"
                  >
                    {yacht.broker.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-2">Email</p>
                  <a
                    href={`mailto:${yacht.broker.email}?subject=Enquiry%20-%20${yacht.name}`}
                    className="text-[#1a1a1a] text-lg font-light hover:text-gold transition-colors"
                  >
                    {yacht.broker.email}
                  </a>
                </div>
                <div>
                  <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-2">Company</p>
                  <p className="text-[#1a1a1a] text-lg font-light">{yacht.broker.company}</p>
                  <p className="text-[#999] text-sm mt-1">1535 SE 17th St, Fort Lauderdale, FL 33316</p>
                </div>
                <div>
                  <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-2">Website</p>
                  <a
                    href={yacht.broker.website}
                    className="text-gold text-sm tracking-[0.12em] uppercase hover:text-gold-light transition-colors"
                  >
                    yachtsailbroker.com &rarr;
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Image + CTA */}
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <img
                  src={yacht.images[3]?.url || yacht.heroImage}
                  alt={yacht.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${yacht.broker.phone.replace(/\s/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center px-8 py-3.5 bg-navy text-white text-sm font-semibold uppercase tracking-[0.12em] hover:bg-navy-light transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${yacht.broker.email}?subject=Enquiry%20-%20${yacht.name}`}
                  className="flex-1 inline-flex items-center justify-center px-8 py-3.5 border border-navy/20 text-navy text-sm font-semibold uppercase tracking-[0.12em] hover:bg-navy hover:text-white transition-colors"
                >
                  Send Email
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ YACHT SUMMARY ━━ */}
      <section className="bg-[#f8f8f6] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-4">
              {[
                { label: "Yacht", value: yacht.name },
                { label: "Builder", value: yacht.builder },
                { label: "Year", value: `${yacht.year} (Refit ${yacht.refit})` },
                { label: "Length", value: "40m" },
                { label: "Guests", value: `${yacht.guests}` },
                { label: "Price", value: yacht.price },
              ].map((item) => (
                <div key={item.label} className="text-center min-w-[120px]">
                  <p className="text-[#aaa] text-[10px] tracking-[0.25em] uppercase mb-2">{item.label}</p>
                  <p className="text-[#1a1a1a] text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
