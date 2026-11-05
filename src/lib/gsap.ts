"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register every plugin once, from a single place.
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

/** Media query used to gate all decorative motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Smooth-scroll to a section by id, accounting for the fixed header. */
export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    target.scrollIntoView();
    return;
  }
  gsap.to(window, {
    duration: 1.2,
    ease: "power3.inOut",
    scrollTo: { y: target, offsetY: 72, autoKill: true },
  });
}

export { gsap, ScrollTrigger, ScrollToPlugin, SplitText, useGSAP };
