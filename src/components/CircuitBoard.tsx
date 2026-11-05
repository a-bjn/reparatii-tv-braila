"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/* ------------------------------------------------------------------ */
/*  Board geometry (viewBox 800 x 550). Everything is deterministic so  */
/*  server and client render the exact same markup.                     */
/* ------------------------------------------------------------------ */

const W = 800;
const H = 550;
const CHIP = { x: 325, y: 220, w: 150, h: 110 };

type Trace = { d: string; end: [number, number] };

/** left / right side: horizontal out, 45deg jog, horizontal to the pad */
function sideTrace(dir: 1 | -1, i: number, sy: number, ey: number, ex: number): Trace {
  const pinX = dir === -1 ? CHIP.x : CHIP.x + CHIP.w;
  const mx = pinX + dir * (25 + 8 * i);
  const dx = mx + dir * Math.abs(ey - sy);
  return { d: `M${pinX} ${sy}H${mx}L${dx} ${ey}H${ex}`, end: [ex, ey] };
}

/** top / bottom side: vertical out, 45deg jog, vertical to the pad */
function capTrace(dir: 1 | -1, i: number, sx: number, ex: number, ey: number): Trace {
  const pinY = dir === -1 ? CHIP.y : CHIP.y + CHIP.h;
  const my = pinY + dir * (20 + 8 * i);
  const dy = my + dir * Math.abs(ex - sx);
  return { d: `M${sx} ${pinY}V${my}L${ex} ${dy}V${ey}`, end: [ex, ey] };
}

const sideY = [235, 255, 275, 295, 315];
const capX = [355, 378, 400, 422, 445];

const traces: Trace[] = [
  // left
  ...[
    [60, 60],
    [130, 110],
    [275, 40],
    [420, 100],
    [500, 40],
  ].map(([ey, ex], i) => sideTrace(-1, i, sideY[i], ey, ex)),
  // right
  ...[
    [90, 740],
    [150, 700],
    [275, 760],
    [400, 690],
    [470, 730],
  ].map(([ey, ex], i) => sideTrace(1, i, sideY[i], ey, ex)),
  // top
  ...[
    [250, 30],
    [330, 40],
    [400, 25],
    [490, 45],
    [560, 30],
  ].map(([ex, ey], i) => capTrace(-1, i, capX[i], ex, ey)),
  // bottom
  ...[
    [260, 520],
    [340, 515],
    [400, 530],
    [470, 510],
    [545, 520],
  ].map(([ex, ey], i) => capTrace(1, i, capX[i], ex, ey)),
];

/** trace that "breaks" during the diagnosis loop (left side, 4th pin) */
const FAULT = 3;

/** pads at the end of traces that carry a labelled component instead */
const parts: { idx: number; label: string }[] = [
  { idx: 2, label: "RAM" },
  { idx: 7, label: "FLASH" },
  { idx: 12, label: "TCON" },
  { idx: 17, label: "PWR" },
];
const partIdx = new Set(parts.map((p) => p.idx));

/** dim, static routing in the background for density */
const deco = [
  "M0 150H70L110 190H200",
  "M800 400H730L690 440H600",
  "M180 550V500L220 460V400",
  "M620 0V40L580 80V150",
  "M0 330H40L70 360H130",
  "M800 200H760L730 170H680",
];

const BASE = "#f5a300";

export default function CircuitBoard() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const q = gsap.utils.toArray;
        const bases = q<SVGPathElement>("[data-base]");
        const pulses = q<SVGPathElement>("[data-pulse]");
        const faultBase = bases[FAULT];
        const faultPad = root.current!.querySelector<SVGCircleElement>("[data-pad-fault]")!;
        const faultRing = root.current!.querySelector<SVGCircleElement>("[data-fault-ring]")!;
        const dot = root.current!.querySelector<HTMLElement>("[data-status-dot]")!;
        const label = root.current!.querySelector<HTMLElement>("[data-status-text]")!;

        const setStatus = (text: string, color: string) => {
          label.textContent = text;
          gsap.to(dot, { backgroundColor: color, duration: 0.3 });
        };

        /* ---------- boot sequence ---------- */
        const boot = gsap.timeline({ delay: 0.9 });
        boot
          .from("[data-deco]", { autoAlpha: 0, duration: 1.2 }, 0)
          .fromTo(
            "[data-soc]",
            { scale: 0.5, autoAlpha: 0, svgOrigin: "400 275" },
            { scale: 1, autoAlpha: 1, svgOrigin: "400 275", duration: 0.9, ease: "back.out(2)" },
            0.1,
          )
          .fromTo(
            bases,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            {
              strokeDashoffset: 0,
              duration: 1.3,
              ease: "power2.out",
              stagger: { each: 0.05, from: "start" },
              clearProps: "strokeDasharray,strokeDashoffset",
            },
            0.5,
          )
          .from("[data-pad]", { scale: 0, transformOrigin: "50% 50%", duration: 0.5, ease: "back.out(3)", stagger: 0.03 }, 1.4)
          .from("[data-part]", { autoAlpha: 0, scale: 0.6, transformOrigin: "50% 50%", duration: 0.5, ease: "back.out(2)", stagger: 0.08 }, 1.5)
          .from("[data-status]", { autoAlpha: 0, y: -8, duration: 0.6 }, 1.2);

        /* ---------- ambient: current pulses along every trace ---------- */
        pulses.forEach((p, i) => {
          const outward = i % 3 !== 0; // most pulses leave the chip, some return
          gsap.fromTo(
            p,
            { strokeDashoffset: outward ? 8 : -100 },
            {
              strokeDashoffset: outward ? -100 : 8,
              duration: gsap.utils.random(1.3, 2.4),
              ease: "none",
              repeat: -1,
              repeatDelay: gsap.utils.random(0.4, 2.4),
              delay: 2.2 + gsap.utils.random(0, 1.8),
            },
          );
        });

        gsap.to("[data-die]", { opacity: 0.35, duration: 1.1, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
        gsap.to("[data-led]", {
          opacity: 0.15,
          duration: 0.12,
          repeat: -1,
          yoyo: true,
          repeatDelay: gsap.utils.random(0.5, 2.2),
          stagger: { each: 0.35, from: "random" },
          delay: 2,
        });

        /* ---------- diagnosis loop: scan -> fault -> repaired ---------- */
        const diag = gsap.timeline({ repeat: -1, delay: 3.4 });
        diag
          .call(() => setStatus("Scanare placă…", "#ffe14d"), undefined, 0)
          .fromTo(
            "[data-scan]",
            { x: -60, autoAlpha: 0.9 },
            { x: W + 60, duration: 2.2, ease: "power1.inOut" },
            0,
          )
          .set("[data-scan]", { autoAlpha: 0 }, 2.3)
          // fault found
          .call(() => setStatus("Defect: etaj alimentare", "#ff4d4d"), undefined, 2.4)
          .to(faultBase, { stroke: "#ff4d4d", strokeOpacity: 1, strokeWidth: 3, duration: 0.2 }, 2.4)
          .to(faultBase, { opacity: 0.25, duration: 0.1, repeat: 7, yoyo: true, ease: "steps(1)" }, 2.6)
          .set(faultPad, { fill: "#ff4d4d", stroke: "#ff4d4d" }, 2.4)
          .fromTo(
            faultRing,
            { scale: 0.6, opacity: 0.9 },
            { scale: 3.2, opacity: 0, duration: 0.9, ease: "power2.out", repeat: 2, transformOrigin: "50% 50%" },
            2.5,
          )
          // repaired
          .call(() => setStatus("Reparat · garanție 1 an", "#4ade80"), undefined, 5.4)
          .to(faultBase, { stroke: "#4ade80", opacity: 1, strokeOpacity: 1, strokeWidth: 3, duration: 0.3 }, 5.4)
          .set(faultPad, { fill: "#4ade80", stroke: "#4ade80" }, 5.4)
          .fromTo(
            "[data-chip-flash]",
            { opacity: 0 },
            { opacity: 0.85, duration: 0.25, yoyo: true, repeat: 1 },
            5.4,
          )
          // back to normal before the loop restarts
          .to(faultBase, { stroke: BASE, strokeOpacity: 0.4, strokeWidth: 2, duration: 0.6 }, 8.2)
          .set(faultPad, { fill: "#0a0a0b", stroke: BASE }, 8.2);
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="absolute inset-0 bg-[#04100c] bg-[radial-gradient(ellipse_at_center,rgba(255,200,60,0.10),transparent_65%)]"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label="Animație cu placa electronică a unui televizor: procesorul trimite impulsuri prin trasee, un defect este găsit și reparat."
      >
        <defs>
          <filter id="cb-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="cb-scan" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#ffe14d" stopOpacity="0" />
            <stop offset="0.85" stopColor="#ffe14d" stopOpacity="0.25" />
            <stop offset="1" stopColor="#ffe14d" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* faint background routing */}
        <g data-deco fill="none" stroke={BASE} strokeOpacity="0.14" strokeWidth="1.5">
          {deco.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        {/* base traces */}
        <g fill="none" stroke={BASE} strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round">
          {traces.map((t, i) => (
            <path key={i} data-base d={t.d} pathLength={100} />
          ))}
        </g>

        {/* travelling current pulses */}
        <g fill="none" stroke="#ffe14d" strokeWidth="3" strokeLinejoin="round" filter="url(#cb-glow)">
          {traces.map((t, i) => (
            <path key={i} data-pulse d={t.d} pathLength={100} strokeDasharray="8 100" strokeDashoffset="8" />
          ))}
        </g>

        {/* pads */}
        <g strokeWidth="2" stroke={BASE} fill="#0a0a0b">
          {traces.map((t, i) =>
            partIdx.has(i) ? null : (
              <g key={i}>
                <circle
                  data-pad
                  {...(i === FAULT ? { "data-pad-fault": true } : {})}
                  cx={t.end[0]}
                  cy={t.end[1]}
                  r="6"
                />
                {i === FAULT && (
                  <circle
                    data-fault-ring
                    cx={t.end[0]}
                    cy={t.end[1]}
                    r="8"
                    fill="none"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    opacity="0"
                  />
                )}
              </g>
            ),
          )}
        </g>

        {/* labelled components */}
        <g fontFamily="ui-monospace, monospace" fontSize="10" textAnchor="middle">
          {parts.map(({ idx, label }) => {
            const [x, y] = traces[idx].end;
            return (
              <g key={label} data-part>
                <rect x={x - 26} y={y - 14} width="52" height="28" rx="4" fill="#0a0a0b" stroke={BASE} strokeWidth="2" />
                <text x={x} y={y + 3.5} fill="#ffe14d" fillOpacity="0.85">
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        {/* status LEDs */}
        <g>
          {[
            [90, 520],
            [110, 520],
            [690, 40],
            [710, 40],
          ].map(([x, y], i) => (
            <circle key={i} data-led cx={x} cy={y} r="3" fill={i % 2 ? "#4ade80" : "#ff9f1a"} />
          ))}
        </g>

        {/* main processor */}
        <g data-soc>
          {/* pins */}
          <g stroke={BASE} strokeWidth="3" strokeLinecap="round">
            {sideY.map((y) => (
              <g key={y}>
                <path d={`M${CHIP.x - 8} ${y}H${CHIP.x}`} />
                <path d={`M${CHIP.x + CHIP.w} ${y}H${CHIP.x + CHIP.w + 8}`} />
              </g>
            ))}
            {capX.map((x) => (
              <g key={x}>
                <path d={`M${x} ${CHIP.y - 8}V${CHIP.y}`} />
                <path d={`M${x} ${CHIP.y + CHIP.h}V${CHIP.y + CHIP.h + 8}`} />
              </g>
            ))}
          </g>
          <rect
            x={CHIP.x}
            y={CHIP.y}
            width={CHIP.w}
            height={CHIP.h}
            rx="10"
            fill="#0b0b0d"
            stroke="#ffe14d"
            strokeWidth="2.5"
          />
          {/* die */}
          <rect
            data-die
            x={CHIP.x + 22}
            y={CHIP.y + 22}
            width={CHIP.w - 44}
            height={CHIP.h - 44}
            rx="6"
            fill="#ffe14d"
            fillOpacity="0.16"
            stroke="#ffe14d"
            strokeOpacity="0.9"
            strokeWidth="1.5"
            filter="url(#cb-glow)"
          />
          <rect
            data-chip-flash
            x={CHIP.x}
            y={CHIP.y}
            width={CHIP.w}
            height={CHIP.h}
            rx="10"
            fill="#4ade80"
            opacity="0"
          />
          <text
            x={CHIP.x + CHIP.w / 2}
            y={CHIP.y + CHIP.h / 2 + 5}
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="15"
            fontWeight="700"
            letterSpacing="2"
            fill="#ffe14d"
          >
            TV·SoC
          </text>
        </g>

        {/* scan beam */}
        <rect data-scan x="-60" y="0" width="60" height={H} fill="url(#cb-scan)" opacity="0" />
      </svg>

      {/* status readout */}
      <div
        data-status
        className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-black/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-fg backdrop-blur"
      >
        <span data-status-dot className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span data-status-text>Diagnoză</span>
      </div>
    </div>
  );
}
