"use client";

import { useRef, type PointerEvent } from "react";
import { Wrench, Tv, KeyRound, ShieldCheck, type LucideIcon } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitHeading from "./ui/SplitHeading";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: boolean;
}[] = [
  {
    icon: Wrench,
    title: "Reparații TV / LCD / LED",
    description:
      "Oferim reparații pentru o gamă largă de branduri de televizoare: de la defecte de alimentare și retroiluminare, până la probleme de placă și Smart TV.",
    span: true,
  },
  {
    icon: Tv,
    title: "Telecomenzi TV",
    description: "Vindem telecomenzi originale pentru toate mărcile de televizoare.",
  },
  {
    icon: KeyRound,
    title: "Chei auto",
    description: "Servicii profesionale pentru orice marcă de chei auto.",
  },
  {
    icon: ShieldCheck,
    title: "Garanție 1 an",
    description: "Clienții noștri beneficiază de garanție pe o perioadă de 1 an pentru reparațiile efectuate.",
    span: true,
  },
];

export default function ServiciiSection() {
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

        gsap.from("[data-service]", {
          opacity: 0,
          y: 70,
          rotate: 1.5,
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: "[data-grid]", start: "top 82%", once: true },
        });

        // icons "power on" after their card lands
        gsap.from("[data-icon]", {
          scale: 0,
          rotate: -120,
          duration: 0.9,
          ease: "back.out(2.2)",
          stagger: 0.14,
          delay: 0.35,
          scrollTrigger: { trigger: "[data-grid]", start: "top 82%", once: true },
        });
      });
    },
    { scope: root },
  );

  // cursor-following spotlight
  const spotlight = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="servicii" ref={root} className="relative px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 lg:flex-row lg:items-end">
          <div>
            <p
              data-eyebrow
              className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-accent"
            >
              <span className="h-px w-10 bg-accent" />
              01 · Servicii
            </p>
            <SplitHeading className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
              Serviciile pe care <span className="text-accent">le oferim</span>
            </SplitHeading>
          </div>
          <p className="max-w-md text-lg text-muted">
            De la diagnoză la reparație finală: tot ce are nevoie televizorul tău, într-un singur loc din centrul
            Brăilei.
          </p>
        </div>

        <div data-grid className="grid gap-5 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, span }, i) => (
            <article
              key={title}
              data-service
              onPointerMove={spotlight}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-colors duration-500 hover:border-accent/40 md:p-10 ${
                span ? "lg:col-span-2" : ""
              }`}
            >
              {/* spotlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,225,77,0.13), transparent 45%)",
                }}
              />
              <span
                aria-hidden
                className="absolute right-6 top-4 font-display text-7xl font-bold text-white/[0.04] transition-colors duration-500 group-hover:text-accent/15 md:text-8xl"
              >
                0{i + 1}
              </span>

              <div
                data-icon
                className="relative mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-black md:mb-20"
              >
                <Icon className="h-8 w-8" strokeWidth={2.2} />
              </div>

              <h3 className="relative font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
              <p className="relative mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
