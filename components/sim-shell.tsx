"use client";

import { motion } from "motion/react";
import { RobotRig } from "./robot-rig";

const telemetry = [
  ["Balance", "88%"],
  ["Contact", "72%"],
  ["Torque", "42.8 N·m"],
  ["Foot slip", "0.06 m/s"],
];

const cells = [
  { label: "Scenario", value: "Uneven terrain / recovery", tone: "" },
  { label: "Simulation speed", value: "18.4×", tone: "text-accent" },
  { label: "Contact load", value: "2.18 kN", tone: "text-mag" },
  { label: "GPU utilization", value: "87%", tone: "text-violet" },
];

export function SimShell() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[520px] overflow-hidden rounded-3xl border border-line sm:min-h-[600px] lg:min-h-[648px]"
      style={{
        background:
          "radial-gradient(520px 330px at 50% 40%, var(--accent-soft), transparent 64%), var(--panel)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* accent rather than white: a white sheen is invisible on the light panel */}
        <div className="animate-sweep absolute -inset-y-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent" />
      </div>

      <div className="absolute inset-x-4 top-4 z-10 flex justify-between gap-4">
        <span className="mono-label">
          Live world / <strong className="font-medium text-text">Holdout-04</strong>
        </span>
        <span className="mono-label text-right">
          <strong className="font-medium text-text">24 environments</strong> ·
          synthetic
        </span>
      </div>

      {/* ground plane */}
      <div className="scene-grid pointer-events-none absolute -inset-x-[10%] bottom-[8%] h-[62%]" />

      {/* left telemetry */}
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute left-3 top-[84px] z-10 w-[132px] rounded-xl border border-line bg-panel/90 p-3 backdrop-blur-sm sm:left-4 sm:w-[146px]"
      >
        <div className="mono-label text-[10px]">Body state</div>
        {telemetry.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between border-b border-line py-[7px] font-mono text-[10px] text-soft last:border-0 last:pb-0"
          >
            <span>{k}</span>
            <b className="font-medium text-text">{v}</b>
          </div>
        ))}
      </motion.div>

      {/* right stat */}
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="absolute right-3 top-[72px] z-10 w-[140px] rounded-xl border border-line bg-panel/90 p-3 backdrop-blur-sm sm:right-4 sm:w-[156px]"
      >
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-soft">
          <span>Task success</span>
          <span className="text-lime">+7.2%</span>
        </div>
        <div className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.025em] text-lime">
          93.7%
        </div>
        <div className="mt-2 h-[42px] border-t border-line">
          <svg viewBox="0 0 130 42" preserveAspectRatio="none" className="h-full w-full">
            <motion.path
              d="M0 35 C15 33 20 30 30 31 S45 27 55 28 S72 20 82 23 S100 15 112 12 S123 11 130 5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth={2.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 1, ease: "easeOut" }}
            />
          </svg>
        </div>
      </motion.div>

      {/* rig */}
      <div className="absolute inset-x-0 top-[52px] bottom-[120px] grid place-items-center px-4">
        <RobotRig className="h-full max-h-[360px] w-auto" />
      </div>

      {/* bottom readout */}
      <div className="absolute inset-x-3 bottom-3 z-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:inset-x-3.5 sm:bottom-3.5 lg:grid-cols-[1.25fr_repeat(3,1fr)]">
        {cells.map((c) => (
          <div key={c.label} className="min-h-[72px] bg-panel p-4">
            <div className="mono-label text-[10px]">{c.label}</div>
            <div
              className={`mt-1.5 font-display text-base font-semibold tracking-[-0.018em] ${c.tone}`}
            >
              {c.value}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
