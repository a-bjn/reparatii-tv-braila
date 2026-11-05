"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";

interface SplitHeadingProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Play immediately on mount instead of waiting for scroll. */
  immediate?: boolean;
  delay?: number;
}

/**
 * Heading whose lines slide up out of a mask.
 * Uses SplitText autoSplit so it re-splits on resize / font load.
 */
export default function SplitHeading({
  as: Tag = "h2",
  className,
  children,
  immediate = false,
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          linesClass: "split-line",
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.1,
              ease: "power4.out",
              stagger: 0.1,
              delay,
              scrollTrigger: immediate
                ? undefined
                : { trigger: el, start: "top 88%", once: true },
            });
          },
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
