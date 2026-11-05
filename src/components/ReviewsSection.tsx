"use client";

import { useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitHeading from "./ui/SplitHeading";
import CountUp from "./ui/CountUp";

const reviews = [
  {
    name: "Gabriel",
    rating: 5,
    date: "acum 3 luni",
    text: "Super rapid și de încredere! Am căutat în peste 10 locuri ajutor și toți m-au refuzat. Aici am fost primit cu căldură și problema s-a rezolvat foarte repede.",
    featured: true,
  },
  {
    name: "Ovidiu Colceru",
    rating: 5,
    date: "acum 3 luni",
    text: "Seriozitate și amabilitate incredibile.",
  },
  {
    name: "bradea doru gabriel",
    rating: 5,
    date: "acum 3 luni",
    text: "Seriozitate și promptitudine. Am primit ajutor rapid, fără complicații inutile. O experiență pozitivă, exact cum ar trebui să fie peste tot.",
  },
  {
    name: "Andreea Cristina",
    rating: 5,
    date: "acum 9 luni",
    text: "Recomand! Seriozitate și profesionalism!",
  },
  {
    name: "Roxana Manea",
    rating: 5,
    date: "acum 2 ani",
    text: "Un service serios și profesionist. Recomand.",
  },
];

export default function ReviewsSection() {
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

        gsap.from("[data-score-star]", {
          scale: 0,
          rotate: -180,
          duration: 0.8,
          ease: "back.out(2.5)",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-score]", start: "top 85%", once: true },
        });

        gsap.utils.toArray<HTMLElement>("[data-review]").forEach((card, i) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
            delay: (i % 3) * 0.1,
          });
          tl.from(card, { opacity: 0, y: 60, duration: 0.9, ease: "power3.out" }).from(
            card.querySelectorAll("[data-star]"),
            { scale: 0, rotate: -90, duration: 0.5, ease: "back.out(3)", stagger: 0.07 },
            0.3,
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="recenzii" ref={root} className="relative px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-12 md:mb-24 lg:grid-cols-[1fr_auto]">
          <div>
            <p
              data-eyebrow
              className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-accent"
            >
              <span className="h-px w-10 bg-accent" />
              03 · Recenzii Google
            </p>
            <SplitHeading className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
              Ce spun <span className="text-accent">clienții noștri</span>
            </SplitHeading>
          </div>

          <div data-score className="flex items-center gap-6 rounded-3xl border border-line bg-surface p-6 md:p-8">
            <div className="font-display text-6xl font-bold leading-none tracking-tight md:text-7xl">
              <CountUp to={4.4} decimals={1} />
              <span className="text-2xl text-muted md:text-3xl">/5</span>
            </div>
            <div className="flex gap-1 text-xl text-accent md:text-2xl" role="img" aria-label="4,4 din 5 stele">
              {[0, 1, 2, 3].map((i) => (
                <FaStar key={i} data-score-star />
              ))}
              <FaStarHalfAlt data-score-star />
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              data-review
              className={`relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 transition-colors duration-500 hover:border-accent/40 md:p-10 ${
                r.featured ? "md:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden
                className="absolute right-8 top-2 font-display text-9xl font-bold leading-none text-accent/10"
              >
                “
              </span>
              <div className="relative mb-6 flex gap-1 text-sm text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} data-star className={i < r.rating ? "" : "text-zinc-700"} />
                ))}
              </div>
              <blockquote
                className={`relative leading-snug text-fg ${
                  r.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                }`}
              >
                {r.text}
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-black">
                  {r.name.trim().charAt(0).toUpperCase()}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-xs text-muted">
                    {r.date} · Google
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
