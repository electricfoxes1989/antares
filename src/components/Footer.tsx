import { Link } from "wouter";
import { yacht } from "../data/yacht";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Yacht */}
          <div>
            <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-4">{yacht.name}</h3>
            <p className="text-sm leading-relaxed">
              {yacht.tagline}<br />
              {yacht.builder} &middot; {yacht.year} (Refit {yacht.refit})
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-4">Explore</h3>
            <div className="flex flex-col gap-2">
              <Link href="/shipyard" className="text-sm hover:text-white transition-colors">The Shipyard</Link>
              <Link href="/design" className="text-sm hover:text-white transition-colors">Naval Architecture & Design</Link>
              <Link href="/specifications" className="text-sm hover:text-white transition-colors">Full Specifications</Link>
              <Link href="/gallery" className="text-sm hover:text-white transition-colors">Photo Gallery</Link>
            </div>
          </div>

          {/* Broker */}
          <div>
            <h3 className="text-white text-sm tracking-[0.2em] uppercase mb-4">Your Broker</h3>
            <p className="text-sm leading-relaxed mb-2">
              {yacht.broker.name}<br />
              {yacht.broker.company}
            </p>
            <a href={`tel:${yacht.broker.phone.replace(/\s/g, "")}`} className="text-sm hover:text-white transition-colors block">
              {yacht.broker.phone}
            </a>
            <a href={`mailto:${yacht.broker.email}`} className="text-sm hover:text-white transition-colors block mt-1">
              {yacht.broker.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            Listed by{" "}
            <a href={yacht.broker.website} className="text-white/60 hover:text-white transition-colors">
              Georges Bourgoignie
            </a>{" "}
            at Fraser Yachts
          </p>
          <a
            href={yacht.broker.website}
            className="text-xs text-gold hover:text-gold-light transition-colors tracking-[0.12em] uppercase"
          >
            yachtsailbroker.com
          </a>
        </div>
      </div>
    </footer>
  );
}
