"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  /** Stagger the direct children instead of the wrapper itself. */
  stagger?: number;
}

/** Fades + slides content in once it scrolls into view. */
export default function Reveal({
  as: Tag = "div",
  className,
  children,
  y = 40,
  x = 0,
  delay = 0,
  duration = 1,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(stagger !== undefined ? el.children : el, {
          opacity: 0,
          y,
          x,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
