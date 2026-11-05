"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

const brands = ["Samsung", "LG", "Sony", "Panasonic", "Philips", "Toshiba", "Hisense", "Vortex"];

function Row() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {brands.map((b, i) => (
        <span key={b} className="flex items-center">
          <span
            className={`px-8 font-display text-5xl font-bold uppercase tracking-tight md:text-7xl ${
              i % 2 === 0
                ? "text-fg"
                : "text-transparent [-webkit-text-stroke:1.5px_rgba(245,242,234,0.35)]"
            }`}
          >
            {b}
          </span>
          <span className="text-2xl text-accent md:text-4xl">✦</span>
        </span>
      ))}
    </div>
  );
}

/** Infinite brand ticker. Scrolling the page speeds it up and flips its direction. */
export default function MarqueeStrip() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const loop = gsap.to(track.current, {
          xPercent: -50,
          duration: 38,
          ease: "none",
          repeat: -1,
        });

        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate(self) {
            const dir = self.direction;
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
            gsap.to(loop, {
              timeScale: dir * boost,
              duration: 0.25,
              overwrite: true,
              onComplete: () => {
                gsap.to(loop, { timeScale: dir, duration: 1.2, overwrite: true });
              },
            });
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="relative overflow-hidden border-y border-line bg-surface/60 py-6"
      role="presentation"
    >
      <p className="sr-only">Lucrăm cu televizoare {brands.join(", ")}.</p>
      <div ref={track} className="flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
