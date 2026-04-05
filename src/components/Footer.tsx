import Link from "next/link";
import { yacht } from "@/data/yacht";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        {/* Main footer */}
        <div className="py-20 md:py-28 grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-white text-[11px] tracking-[0.4em] uppercase mb-6">{yacht.name}</p>
            <p className="text-white/20 text-[13px] leading-[1.8] font-light">
              {yacht.tagline}<br />
              {yacht.builder} &middot; {yacht.year}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-6">Explore</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/shipyard", label: "The Shipyard" },
                { href: "/design", label: "Architecture & Design" },
                { href: "/specifications", label: "Specifications" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/20 text-[13px] font-light hover:text-sand transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Broker */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-6">Broker</p>
            <p className="text-white/40 text-[13px] leading-[1.8] font-light mb-4">
              {yacht.broker.name}<br />
              {yacht.broker.company}
            </p>
            <a
              href={`tel:${yacht.broker.phone.replace(/\s/g, "")}`}
              className="text-white/20 text-[13px] font-light hover:text-sand transition-colors duration-300 block"
            >
              {yacht.broker.phone}
            </a>
            <a
              href={`mailto:${yacht.broker.email}`}
              className="text-white/20 text-[13px] font-light hover:text-sand transition-colors duration-300 block mt-1"
            >
              {yacht.broker.email}
            </a>
          </div>

          {/* Enquire */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-6">Get in Touch</p>
            <Link
              href="/contact"
              className="inline-block text-sand text-[11px] tracking-[0.2em] uppercase border border-sand/30 px-6 py-3 hover:bg-sand hover:text-obsidian transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/10 text-[11px] tracking-wider">
            Listed by Georges Bourgoignie at Fraser Yachts
          </p>
          <a
            href={yacht.broker.website}
            className="text-white/10 text-[11px] tracking-[0.15em] uppercase hover:text-sand/40 transition-colors duration-300"
          >
            yachtsailbroker.com
          </a>
        </div>
      </div>
    </footer>
  );
}
