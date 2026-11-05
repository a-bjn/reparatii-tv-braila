"use client";

import { useRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

const variants = {
  primary:
    "bg-accent text-black hover:shadow-[0_0_40px_-5px_rgba(255,225,77,0.65)]",
  ghost: "border border-line text-fg hover:border-accent hover:text-accent",
};

/** Pill button that gently follows the cursor and fills on hover. */
export default function MagneticLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const label = inner.current;
      if (!el || !label) return;

      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (hover: hover)`, () => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
        const lx = gsap.quickTo(label, "x", { duration: 0.5, ease: "power3.out" });
        const ly = gsap.quickTo(label, "y", { duration: 0.5, ease: "power3.out" });

        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * 0.25);
          yTo(dy * 0.35);
          lx(dx * 0.1);
          ly(dy * 0.15);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
          lx(0);
          ly(0);
        };

        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        return () => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        };
      });
    },
    { scope: ref },
  );

  return (
    <a
      ref={ref}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-bold transition-[box-shadow,color,border-color] duration-300 md:text-lg ${variants[variant]} ${className}`}
      {...rest}
    >
      <span ref={inner} className="inline-flex items-center gap-2.5">
        {children}
      </span>
    </a>
  );
}
