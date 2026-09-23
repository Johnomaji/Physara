"use client";

import { motion, useReducedMotion } from "motion/react";

/* Wide strokes rather than closed fills. A stroked band keeps a legible edge
   once it is blurred, where two nested fills just merge into one mass. Each
   band carries its own two-stop gradient so the hue shifts along the sweep as
   well as between bands, and the paths start and end well outside the viewBox
   so the ribbon bleeds off rather than terminating inside the hero. */
const bands = [
  {
    d: "M -160,1220 C 140,980 100,650 330,470 C 570,285 770,320 1080,80",
    width: 210,
    opacity: 0.4,
    from: "var(--accent)",
    to: "var(--violet)",
  },
  {
    d: "M -120,1350 C 200,1090 190,730 430,545 C 670,360 880,390 1100,180",
    width: 150,
    opacity: 0.46,
    from: "var(--violet)",
    to: "var(--mag)",
  },
  {
    d: "M -90,1470 C 260,1200 280,810 520,620 C 760,435 970,465 1120,295",
    width: 100,
    opacity: 0.44,
    from: "var(--mag)",
    to: "var(--accent)",
  },
  {
    d: "M -180,1090 C 110,870 50,575 295,390 C 535,205 720,250 1050,-10",
    width: 58,
    opacity: 0.55,
    from: "var(--accent-2)",
    to: "var(--violet)",
  },
];

/* Soft colour fields sitting under the bands. These do most of the work of
   making the corner feel lit rather than painted, and they are what keeps a
   cyan end and a magenta end distinguishable after the blur. */
const glows = [
  { cx: 700, cy: 170, rx: 360, ry: 300, color: "var(--accent)", opacity: 0.26 },
  { cx: 470, cy: 560, rx: 330, ry: 340, color: "var(--violet)", opacity: 0.22 },
  { cx: 650, cy: 920, rx: 320, ry: 280, color: "var(--mag)", opacity: 0.18 },
];

export function HeroRibbon({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
      /* CSS blur rather than an SVG filter: it runs on the GPU, and at this
         radius an feGaussianBlur over the same area drops frames badly. */
      style={{
        filter: "blur(22px) saturate(1.15)",
        willChange: "transform",
        /* Dissolve the inner edge so the ribbon never reaches the text column.
           Without this the wash runs under the body copy and eats contrast. */
        maskImage:
          "linear-gradient(105deg, transparent 0%, rgba(0,0,0,0.55) 30%, #000 58%)",
        WebkitMaskImage:
          "linear-gradient(105deg, transparent 0%, rgba(0,0,0,0.55) 30%, #000 58%)",
      }}
    >
      <svg
        viewBox="0 0 900 1100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          {bands.map((band, i) => (
            <linearGradient
              key={`bg-${i}`}
              id={`ribbon-band-${i}`}
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={band.from} />
              <stop offset="100%" stopColor={band.to} />
            </linearGradient>
          ))}
          {glows.map((glow, i) => (
            <radialGradient key={`gg-${i}`} id={`ribbon-glow-${i}`}>
              <stop offset="0%" stopColor={glow.color} stopOpacity="1" />
              <stop offset="100%" stopColor={glow.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        <motion.g
          animate={
            reduce ? undefined : { scale: [1, 1.08, 1], x: [0, -26, 0] }
          }
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60% 45%" }}
        >
          {glows.map((glow, i) => (
            <ellipse
              key={i}
              cx={glow.cx}
              cy={glow.cy}
              rx={glow.rx}
              ry={glow.ry}
              fill={`url(#ribbon-glow-${i})`}
              opacity={glow.opacity}
            />
          ))}
        </motion.g>

        <motion.g
          animate={
            reduce ? undefined : { scale: [1, 1.05, 1], rotate: [0, -3, 0] }
          }
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "55% 50%" }}
        >
          {bands.map((band, i) => (
            <path
              key={i}
              d={band.d}
              fill="none"
              stroke={`url(#ribbon-band-${i})`}
              strokeWidth={band.width}
              strokeLinecap="round"
              opacity={band.opacity}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
