"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// ScrollToPlugin is only needed when someone clicks a nav link, so it is
// loaded lazily (see scrollToId) instead of shipping in the initial bundle.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/** Media query used to gate all decorative motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

let scrollToReady: Promise<void> | null = null;

function loadScrollTo() {
  scrollToReady ??= import("gsap/ScrollToPlugin").then(({ ScrollToPlugin }) => {
    gsap.registerPlugin(ScrollToPlugin);
  });
  return scrollToReady;
}

/** Smooth-scroll to a section by id, accounting for the fixed header. */
export async function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    target.scrollIntoView();
    return;
  }

  await loadScrollTo();
  gsap.to(window, {
    duration: 1.2,
    ease: "power3.inOut",
    scrollTo: { y: target, offsetY: 72, autoKill: true },
  });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
