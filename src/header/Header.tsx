"use client";

import { useRef, type MouseEvent } from "react";
import { Phone } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, scrollToId, MOTION_OK } from "@/lib/gsap";

const links = [
  { id: "servicii", label: "Servicii" },
  { id: "branduri", label: "Branduri" },
  { id: "recenzii", label: "Recenzii" },
  { id: "contact", label: "Contact" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <rect x="4" y="9" width="40" height="27" rx="5" className="stroke-accent" strokeWidth="2.5" />
      <path d="M16 42h16M24 36v6" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" />
      <path
        data-bolt
        d="M26 14l-7 9h6l-3 8 8-10h-6l2-7z"
        className="fill-accent"
      />
    </svg>
  );
}

export default function Header() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // intro
        gsap.from("[data-bar]", { y: -30, autoAlpha: 0, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.from("[data-nav] > *", {
          y: -14,
          autoAlpha: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.5,
        });

        // the lightning bolt flickers like a faulty TV
        gsap.to("[data-bolt]", {
          opacity: 0.25,
          duration: 0.08,
          repeat: -1,
          repeatDelay: 3.2,
          yoyo: true,
          repeatRefresh: true,
          ease: "steps(1)",
        });

        // hide on scroll down, show on scroll up
        const show = gsap
          .fromTo(
            el,
            { yPercent: -100 },
            { yPercent: 0, paused: true, duration: 0.35, ease: "power2.out" },
          )
          .progress(1);

        ScrollTrigger.create({
          start: "top top-=120",
          end: "max",
          onUpdate: (self) => {
            if (self.direction === -1) show.play();
            else show.reverse();
          },
        });

        // glass background once the page is scrolled
        ScrollTrigger.create({
          start: 40,
          end: "max",
          onToggle: (self) =>
            gsap.to(el, {
              backgroundColor: self.isActive ? "rgba(10,10,11,0.78)" : "rgba(10,10,11,0)",
              borderBottomColor: self.isActive ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0)",
              duration: 0.3,
            }),
        });
      });
    },
    { scope: root },
  );

  const go = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      ref={root}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md"
    >
      <div data-bar className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
          aria-label="Reparații TV Brăila - acasă"
        >
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight md:text-xl">
              Reparații TV <span className="text-accent">Brăila</span>
            </span>
            <span className="mt-1 hidden text-[11px] uppercase tracking-[0.2em] text-muted sm:block">
              30 de ani de experiență
            </span>
          </span>
        </a>

        <nav data-nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="tel:+40729026656"
          className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-black transition-shadow hover:shadow-[0_0_30px_-4px_rgba(255,225,77,0.7)]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">0729 026 656</span>
          <span className="sm:hidden">Sună</span>
        </a>
      </div>
    </header>
  );
}
