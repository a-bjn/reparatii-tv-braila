"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitHeading from "./ui/SplitHeading";

const brands = [
  { src: "/sony.png", alt: "Sony" },
  { src: "/samsung.jpg", alt: "Samsung" },
  { src: "/lg.jpg", alt: "LG" },
  { src: "/panasonic.jpg", alt: "Panasonic" },
  { src: "/toshiba.png", alt: "Toshiba" },
  { src: "/philips.jpg", alt: "Philips" },
  { src: "/hisense.jpg", alt: "Hisense" },
  { src: "/vortex.jpg", alt: "Vortex" },
];

export default function BrandsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-eyebrow]", {
          opacity: 0,
          x: -24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-eyebrow]", start: "top 90%", once: true },
        });

        // tiles open outward from the middle like a power-on
        gsap.from("[data-brand]", {
          opacity: 0,
          scale: 0.7,
          y: 40,
          duration: 0.9,
          ease: "back.out(1.6)",
          stagger: { each: 0.09, from: "center", grid: [2, 4] },
          scrollTrigger: { trigger: "[data-brand-grid]", start: "top 82%", once: true },
        });

        // images drift at a different speed than their tiles
        gsap.utils.toArray<HTMLElement>("[data-brand-img]").forEach((img, i) => {
          gsap.fromTo(
            img,
            { yPercent: i % 2 ? -8 : 8 },
            {
              yPercent: i % 2 ? 8 : -8,
              ease: "none",
              scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="branduri"
      ref={root}
      className="relative overflow-hidden border-y border-line bg-surface/40 px-5 py-28 md:px-8 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <p
            data-eyebrow
            className="mb-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            02 · Branduri
            <span className="h-px w-10 bg-accent" />
          </p>
          <SplitHeading className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
            Brandurile cu care <span className="text-accent">lucrăm</span>
          </SplitHeading>
          <p className="mt-6 text-lg text-muted md:text-xl">
            Service-ul nostru acoperă o gamă largă de televizoare de orice marcă.
          </p>
        </div>

        <div data-brand-grid className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {brands.map((b) => (
            <div
              key={b.alt}
              data-brand
              className="group relative aspect-square overflow-hidden rounded-3xl border border-line bg-black transition-colors duration-500 hover:border-accent/50"
            >
              <div data-brand-img className="absolute -inset-[10%]">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover opacity-75 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
