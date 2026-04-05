"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { yacht } from "@/data/yacht";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "Exterior" | "Interior">("all");

  const filtered = filter === "all" ? yacht.images : yacht.images.filter((img) => img.category === filter);

  return (
    <>
      {/* ━━ HERO ━━ */}
      <section className="bg-obsidian pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <Reveal>
            <p className="text-sand text-[10px] tracking-[0.4em] uppercase mb-5">Photography</p>
            <h1 className="font-serif text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
              Gallery
            </h1>
            <p className="text-white/20 text-[14px] mt-5 font-light">
              {yacht.name} &middot; Exterior & Interior
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━ FILTER ━━ */}
      <section className="border-y border-white/[0.04] sticky top-20 md:top-24 z-30 bg-obsidian/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-5 flex items-center gap-6">
          {(["all", "Exterior", "Interior"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                filter === f
                  ? "text-sand border-b border-sand"
                  : "text-white/20 hover:text-white/40"
              }`}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
          <span className="text-[11px] text-white/10 ml-auto">{filtered.length} photos</span>
        </div>
      </section>

      {/* ━━ GRID ━━ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {filtered.map((img, i) => (
              <Reveal key={`${filter}-${i}`} delay={i * 0.03}>
                <button
                  onClick={() => setLightboxIdx(yacht.images.indexOf(img))}
                  className="relative aspect-[4/3] overflow-hidden group cursor-pointer w-full"
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-[10px] tracking-[0.2em] uppercase">
                      {img.label}
                    </span>
                  </div>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors z-50"
              onClick={() => setLightboxIdx(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + yacht.images.length) % yacht.images.length); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={yacht.images[lightboxIdx].url}
              alt={yacht.images[lightboxIdx].label}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % yacht.images.length); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 text-[11px] tracking-[0.3em]">
              {lightboxIdx + 1} / {yacht.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
