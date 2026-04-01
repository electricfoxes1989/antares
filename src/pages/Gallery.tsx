import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { yacht } from "../data/yacht";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "Exterior" | "Interior">("all");

  const filtered = filter === "all" ? yacht.images : yacht.images.filter((img) => img.category === filter);

  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <Reveal>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4">Photography</p>
            <h1 className="font-serif text-white text-4xl md:text-6xl tracking-tight">
              Gallery
            </h1>
            <p className="text-white/50 text-lg mt-4">{yacht.name} &middot; Exterior & Interior</p>
          </Reveal>
        </div>
      </section>

      {/* ━━ FILTER ━━ */}
      <section className="bg-white border-b border-black/[0.06] sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center gap-4">
          {(["all", "Exterior", "Interior"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 transition-colors ${
                filter === f ? "bg-navy text-white" : "text-[#999] hover:text-[#1a1a1a]"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
          <span className="text-xs text-[#ccc] ml-auto">{filtered.length} photos</span>
        </div>
      </section>

      {/* ━━ GRID ━━ */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {filtered.map((img, i) => (
              <Reveal key={`${filter}-${i}`} delay={i * 0.03}>
                <button
                  onClick={() => setLightboxIdx(yacht.images.indexOf(img))}
                  className="relative aspect-[4/3] overflow-hidden group cursor-pointer w-full"
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <span className="absolute bottom-3 left-4 text-white text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.label}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ LIGHTBOX ━━ */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
              onClick={() => setLightboxIdx(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + yacht.images.length) % yacht.images.length); }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={yacht.images[lightboxIdx].url}
              alt={yacht.images[lightboxIdx].label}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % yacht.images.length); }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
              {lightboxIdx + 1} / {yacht.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
