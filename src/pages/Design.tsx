import { Link } from "wouter";
import Reveal from "../components/Reveal";
import { yacht, designer } from "../data/yacht";

export default function Design() {
  const { navalArchitect, interiorDesigner } = designer;

  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={yacht.images[0]?.url || yacht.heroImage}
          alt={`${yacht.name} — designed by ${navalArchitect.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/20 to-navy/80" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16 md:pb-24 w-full">
            <Reveal>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">Architecture & Design</p>
              <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-tight">
                The Design Story
              </h1>
              <p className="text-white/60 text-lg mt-3">
                Naval architecture by {navalArchitect.name} &middot; Interiors by {interiorDesigner.name}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ NAVAL ARCHITECT ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            <Reveal className="md:col-span-2">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Naval Architect</p>
              <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-6">
                {navalArchitect.name}
              </h2>
              <div className="space-y-3 mt-8">
                <div className="flex justify-between py-3 border-b border-black/[0.06]">
                  <span className="text-[#999] text-sm">Based</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{navalArchitect.location}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black/[0.06]">
                  <span className="text-[#999] text-sm">Founded</span>
                  <span className="text-[#1a1a1a] text-sm font-medium">{navalArchitect.founded}</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-[#999] text-[10px] tracking-[0.25em] uppercase mb-4">Notable Designs</p>
                <ul className="space-y-2">
                  {navalArchitect.notableDesigns.map((d) => (
                    <li key={d} className="text-[#6b6b6b] text-sm font-light flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-3">
              <div className="space-y-6">
                {navalArchitect.description.map((para, i) => (
                  <p key={i} className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ FULL-BLEED ━━ */}
      <Reveal>
        <div className="relative w-full h-[50vh] md:h-[65vh]">
          <img src={yacht.images[4]?.url || yacht.heroImage} alt={`${yacht.name} interior`} className="w-full h-full object-cover" />
        </div>
      </Reveal>

      {/* ━━ INTERIOR DESIGNER ━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20">
            <Reveal delay={0.1} className="md:col-span-3 order-2 md:order-1">
              <div className="space-y-6">
                {interiorDesigner.description.map((para, i) => (
                  <p key={i} className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">{para}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="md:col-span-2 order-1 md:order-2">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5">Interior Design</p>
              <h2 className="font-serif text-[30px] md:text-[44px] leading-[1.1] tracking-tight mb-6">
                {interiorDesigner.name}
              </h2>
              <p className="text-[#6b6b6b] text-[15px] leading-[1.95] font-light">
                Warm timber joinery, considered lighting, and a layout that feels open and airy — Ezel's interiors complement the schooner's traditional lines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[28px] md:text-[36px] text-white leading-[1.15] tracking-tight mb-6">
              Schedule a Private Viewing
            </h2>
            <p className="text-white/40 text-[15px] leading-[1.95] font-light mb-8">
              Experience {yacht.name}'s design in person. Contact Georges Bourgoignie to arrange a visit.
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
