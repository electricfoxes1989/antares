import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { yacht, shipyard } from "../data/yacht";

export default function Shipyard() {
  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={yacht.images[3]?.url || yacht.heroImage}
          alt={`${yacht.name} by ${shipyard.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/20 to-navy/80" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16 md:pb-24 w-full">
            <Reveal>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">The Builder</p>
              <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-tight">
                {shipyard.name}
              </h1>
              <p className="text-white/60 text-lg mt-3">{shipyard.location} &middot; Est. {shipyard.founded}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ OVERVIEW ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            <Reveal className="md:col-span-2">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Heritage</p>
              <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-6">
                Where tradition meets ambition.
              </h2>
              <div className="space-y-3 mt-8">
                <div className="flex justify-between py-3 border-b border-black/[0.06]">
                  <span className="text-[#999] text-sm">Founded</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{shipyard.founded}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black/[0.06]">
                  <span className="text-[#999] text-sm">Location</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{shipyard.location}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black/[0.06]">
                  <span className="text-[#999] text-sm">Speciality</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{shipyard.speciality}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-3">
              <div className="space-y-6">
                {shipyard.description.map((para, i) => (
                  <p key={i} className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ NOTABLE BUILDS ━━ */}
      <section className="bg-[#f8f8f6] py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Portfolio</p>
            <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.15] tracking-tight mb-12">
              Notable {shipyard.name} Builds
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {shipyard.notableYachts.map((y, i) => (
              <Reveal key={y.name} delay={i * 0.1}>
                <div className={`p-8 border ${y.name === yacht.name ? "border-gold/30 bg-white" : "border-black/[0.06]"}`}>
                  <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-2">{y.type}</p>
                  <h3 className="font-serif text-xl tracking-tight mb-3">{y.name}</h3>
                  <div className="flex gap-6 text-sm text-[#999]">
                    <span>{y.length}</span>
                    <span>{y.year}</span>
                  </div>
                  {y.name === yacht.name && (
                    <span className="inline-block mt-4 text-gold text-xs tracking-[0.15em] uppercase">This vessel</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[28px] md:text-[36px] text-white leading-[1.15] tracking-tight mb-6">
              Interested in {yacht.name}?
            </h2>
            <p className="text-white/40 text-[15px] leading-[1.95] font-light mb-8">
              Contact Georges Bourgoignie to arrange a private viewing or request additional information.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy text-sm font-semibold uppercase tracking-[0.12em] hover:bg-gold-light transition-colors"
            >
              Enquire Now
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
