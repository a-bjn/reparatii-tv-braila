"use client";

import { useRef } from "react";
import { Phone, ArrowDown, ShieldCheck, Star, BadgeCheck } from "lucide-react";
import { gsap, useGSAP, scrollToId, MOTION_OK } from "@/lib/gsap";
import SplitHeading from "./ui/SplitHeading";
import MagneticLink from "./ui/MagneticLink";
import CircuitBoard from "./CircuitBoard";

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        /* ---------- intro timeline ---------- */
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from("[data-fade]", { autoAlpha: 0, y: 28, duration: 0.9, stagger: 0.12, delay: 0.5 }, 0)
          .fromTo(
            "[data-screen]",
            { clipPath: "inset(50% 0% 50% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.out" },
            0.5,
          )
          .fromTo(
            "[data-screen]",
            { filter: "brightness(3.5)" },
            { filter: "brightness(1)", duration: 1.4, ease: "power2.out" },
            0.55,
          )
          .from("[data-tv-frame]", { autoAlpha: 0, scale: 0.92, duration: 1, ease: "back.out(1.4)" }, 0.4)
          .from("[data-chip]", { autoAlpha: 0, scale: 0.4, y: 20, stagger: 0.15, duration: 0.8, ease: "back.out(2)" }, 1.3);

        /* ---------- ambient loops ---------- */
        gsap.to("[data-sweep]", {
          yPercent: 520,
          duration: 4.5,
          repeat: -1,
          ease: "none",
        });
        gsap.to("[data-glow]", {
          x: "random(-60, 60)",
          y: "random(-40, 40)",
          duration: 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        });
        gsap.to("[data-chip]", {
          y: "random(-10, 10)",
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          stagger: { each: 0.4, from: "random" },
          delay: 3,
        });
        gsap.fromTo(
          "[data-scroll-line]",
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1.4, ease: "power2.inOut", repeat: -1, repeatDelay: 0.3 },
        );

        /* ---------- scroll parallax ---------- */
        const scrollTrigger = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-tv]", { yPercent: -12, rotate: 2, ease: "none", scrollTrigger });
        gsap.to("[data-copy]", { yPercent: 10, autoAlpha: 0.15, ease: "none", scrollTrigger });
        gsap.to("[data-glow]", { yPercent: 40, ease: "none", scrollTrigger });
      });

      /* ---------- mouse tilt (fine pointers only) ---------- */
      mm.add(`${MOTION_OK} and (hover: hover) and (min-width: 1024px)`, () => {
        const tv = root.current?.querySelector<HTMLElement>("[data-tv-frame]");
        if (!tv) return;

        const rx = gsap.quickTo(tv, "rotationX", { duration: 0.8, ease: "power3.out" });
        const ry = gsap.quickTo(tv, "rotationY", { duration: 0.8, ease: "power3.out" });

        const move = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          ry(nx * 12);
          rx(-ny * 10);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-20 md:pt-24 lg:pb-10"
    >
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div
          data-glow
          className="absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
        />
        <div
          data-glow
          className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        {/* copy */}
        <div data-copy className="relative z-10">
          <div
            data-fade
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            Service autorizat · Brăila
          </div>

          <SplitHeading
            as="h1"
            immediate
            delay={0.3}
            className="font-display text-[clamp(2.8rem,8.5vw,6.8rem)] font-bold leading-[0.98] tracking-tight"
          >
            Reparații TV <span className="text-accent">în Brăila</span>
          </SplitHeading>

          <p data-fade className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Servicii rapide și de încredere pentru televizoare LCD, LED și Smart TV. Diagnoză corectă, reparații
            curate și <strong className="font-semibold text-fg">garanție de 1 an</strong>.
          </p>

          <div data-fade className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticLink href="tel:+40729026656">
              <Phone className="h-5 w-5" />
              Sună acum
            </MagneticLink>
            <MagneticLink
              variant="ghost"
              href="#servicii"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("servicii");
              }}
            >
              Vezi serviciile
              <ArrowDown className="h-5 w-5" />
            </MagneticLink>
          </div>

          <dl data-fade className="mt-12 flex gap-10 border-t border-line pt-6">
            {[
              ["30+", "ani experiență"],
              ["1 an", "garanție"],
              ["4,4★", "pe Google"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-fg md:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* TV */}
        <div data-tv className="relative mx-auto w-full max-w-xl [perspective:1200px] lg:max-w-none">
          <div data-tv-frame className="relative [transform-style:preserve-3d]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-950 p-3 shadow-[0_40px_120px_-30px_rgba(255,225,77,0.35)] md:p-4">
              <div
                data-screen
                className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-black md:aspect-[16/11]"
              >
                <CircuitBoard />
                <div className="scanlines pointer-events-none absolute inset-0 mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" />
                <div
                  data-sweep
                  className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                />
              </div>
            </div>
            {/* stand */}
            <div className="mx-auto h-5 w-1/3 rounded-b-xl bg-gradient-to-b from-zinc-800 to-zinc-950" />
            <div className="mx-auto h-1.5 w-1/2 rounded-full bg-zinc-800/80 blur-[1px]" />

            {/* floating chips */}
            <div
              data-chip
              className="absolute -left-3 top-12 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur md:-left-10"
            >
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold">Garanție 1 an</span>
            </div>
            <div
              data-chip
              className="absolute -right-2 top-1/3 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur md:-right-8"
            >
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="text-sm font-semibold">4,4 pe Google</span>
            </div>
            <div
              data-chip
              className="absolute -bottom-2 left-8 flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur md:left-16"
            >
              <BadgeCheck className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold">Service autorizat</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted lg:flex"
      >
        Derulează
        <span data-scroll-line className="block h-10 w-px bg-accent" />
      </div>
    </section>
  );
}
