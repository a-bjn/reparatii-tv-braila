"use client";

import { useRef } from "react";
import Image from "next/image";
import { Phone, Calendar, MapPin, Navigation } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import SplitHeading from "./ui/SplitHeading";
import MagneticLink from "./ui/MagneticLink";

const LAT = 45.27880168755801;
const LNG = 27.961041100876532;

const items = [
  { Icon: Phone, title: "Telefon", text: "+40 729 026 656", href: "tel:+40729026656" },
  { Icon: Calendar, title: "Program", text: "Luni – Vineri, 8:00 – 17:00" },
  { Icon: MapPin, title: "Locație", text: "Str. General Eremia Grigorescu 40, lângă Oficiul Poștal" },
];

export default function ContactSection() {
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

        // the vertical rail draws itself as you scroll through the list
        gsap.fromTo(
          "[data-rail]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: { trigger: "[data-list]", start: "top 70%", end: "bottom 60%", scrub: true },
          },
        );

        gsap.from("[data-contact-item]", {
          opacity: 0,
          x: -50,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: { trigger: "[data-list]", start: "top 80%", once: true },
        });

        gsap.from("[data-cta]", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "[data-cta]", start: "top 95%", once: true },
        });

        // storefront photo: curtain reveal + parallax
        gsap.fromTo(
          "[data-photo]",
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "expo.inOut",
            scrollTrigger: { trigger: "[data-photo]", start: "top 80%", once: true },
          },
        );
        gsap.fromTo(
          "[data-photo-img]",
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.04,
            ease: "none",
            scrollTrigger: { trigger: "[data-photo]", start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      id="contact"
      ref={root}
      className="relative overflow-hidden border-t border-line bg-surface/40 px-5 py-28 md:px-8 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p
            data-eyebrow
            className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            04 · Contact
          </p>
          <SplitHeading className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
            Contactați-ne <span className="text-accent">astăzi</span>
          </SplitHeading>

          <div data-list className="relative mt-14 md:mt-20">
            <div aria-hidden className="absolute bottom-6 left-7 top-6 w-px bg-line" />
            <div
              data-rail
              aria-hidden
              className="absolute bottom-6 left-7 top-6 w-px origin-top bg-accent shadow-[0_0_12px_rgba(255,225,77,0.8)]"
            />
            <ul className="relative flex flex-col gap-10">
              {items.map(({ Icon, title, text, href }) => (
                <li key={title} data-contact-item className="flex items-start gap-6">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent bg-bg text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{title}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block font-display text-2xl font-bold transition-colors hover:text-accent md:text-3xl"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-2xl font-bold md:text-3xl">{text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <div data-cta>
              <MagneticLink href="tel:+40729026656" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                Sună acum
              </MagneticLink>
            </div>
            <div data-cta>
              <MagneticLink
                variant="ghost"
                href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Navigation className="h-5 w-5" />
                Rută către service
              </MagneticLink>
            </div>
          </div>
        </div>

        <div className="relative lg:pt-24">
          <div data-photo className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <div data-photo-img className="absolute inset-0">
              <Image
                src="/storefront.webp"
                alt="Vitrina service-ului Reparații TV Brăila, Str. General Eremia Grigorescu 40"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 md:p-8">
              <div>
                <p className="font-display text-xl font-bold md:text-2xl">Vă așteptăm în Brăila</p>
                <p className="mt-1 text-sm text-white/70">Str. General Eremia Grigorescu 40</p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black">
                <MapPin className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
