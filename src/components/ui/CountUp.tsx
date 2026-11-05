"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

interface CountUpProps {
  to: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

/** Number that counts up from 0 when scrolled into view. */
export default function CountUp({ to, decimals = 0, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => n.toFixed(decimals).replace(".", ",") + suffix;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const state = { v: 0 };
        el.textContent = format(0);
        gsap.to(state, {
          v: to,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = format(state.v);
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {format(to)}
    </span>
  );
}
