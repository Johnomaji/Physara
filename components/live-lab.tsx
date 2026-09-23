"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { scenarios, type Scenario } from "@/lib/site";
import { RobotRig } from "./robot-rig";
import { Signal } from "./ui";

export function LiveLab() {
  const [active, setActive] = useState<Scenario>(scenarios[0]);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[var(--shadow-lg)]">
      {/* toolbar */}
      <div className="flex flex-col gap-4 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Signal>
            Live simulation <span className="text-soft">/</span> Holdout 04
          </Signal>
          <div className="mono-label mt-1.5">
            24 unique environments · real-world conditions, recreated
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s)}
              aria-pressed={active.id === s.id}
              className={`relative flex-1 rounded-lg border px-4 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.07em] transition-colors sm:flex-none ${
                active.id === s.id
                  ? "border-transparent text-invert-fg"
                  : "border-line text-muted hover:border-line-2 hover:text-text"
              }`}
            >
              {active.id === s.id && (
                <motion.span
                  layoutId="lab-active"
                  className="absolute inset-0 rounded-lg bg-invert-bg"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* stage */}
      <div
        className="relative grid lg:grid-cols-[1fr_1.7fr_1fr]"
        style={{
          background:
            "radial-gradient(500px 330px at 50% 44%, var(--accent-soft), transparent 64%), var(--panel-2)",
        }}
      >
        <BodyPanel s={active} />

        <div className="relative order-first flex min-h-[420px] items-center justify-center overflow-hidden lg:order-none lg:min-h-[560px]">
          <div className="absolute inset-x-[8%] bottom-[3%] h-[36%] scene-grid" />

          <div className="absolute inset-x-4 top-4 z-10 flex justify-between">
            <span className="mono-label">
              World / <strong className="font-medium text-text">Holdout 04</strong>
            </span>
            <span className="mono-label">24 environments</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[3] flex h-full w-full items-center justify-center py-16"
            >
              <RobotRig className="h-full max-h-[380px] w-auto" />
            </motion.div>
          </AnimatePresence>

          <StageFooter s={active} />
        </div>

        <SuccessPanel s={active} />
      </div>

      <LabStats />

      <div className="mono-label border-t border-line py-3 text-center">
        Illustrative product demonstration · results vary by robot, task and
        environment
      </div>
    </div>
  );
}

function Meter({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between font-mono text-[11px] text-muted">
        <span>{label}</span>
        <b className="font-medium text-text">{value}</b>
      </div>
      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
        <motion.i
          className="block h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--accent-2), var(--accent))",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function BodyPanel({ s }: { s: Scenario }) {
  return (
    <div className="relative z-10 flex items-center p-4 sm:p-6">
      <div className="w-full rounded-xl border border-line bg-panel/85 p-4 backdrop-blur-md">
        <div className="mono-label">How the body feels</div>
        <h3 className="mt-1.5 font-display text-[16px] font-semibold tracking-[-0.015em]">
          Is the robot keeping its balance?
        </h3>
        <p className="mb-3 mt-2 text-[14px] leading-[1.6] text-muted">
          We look at the signals that tell us whether the body is stable and in
          control.
        </p>
        <Meter label="Balance" value={`${s.balance}%`} pct={s.balance} />
        <Meter label="Contact quality" value={`${s.contact}%`} pct={s.contact} />
        <Meter label="Torque load" value={s.torque} pct={s.torquePct} />
        <Meter label="Foot slip" value={s.slip} pct={s.slipPct} />
        <div className="mt-4 flex items-center gap-2.5 text-[13px] leading-[1.5] text-muted">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line font-mono text-[11px] font-bold text-lime">
            ☺
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={s.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {s.note}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SuccessPanel({ s }: { s: Scenario }) {
  return (
    <div className="relative z-10 flex items-center p-4 sm:p-6">
      <div className="w-full rounded-xl border border-line bg-panel/85 p-4 backdrop-blur-md">
        <div className="mono-label">Did it succeed?</div>
        <h3 className="mt-1.5 font-display text-[16px] font-semibold tracking-[-0.015em]">
          We track progress across many tries.
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-1.5 mt-2 font-display text-[40px] font-semibold tracking-[-0.025em] text-lime">
              {s.success}
            </div>
            <span className="inline-flex items-center rounded-md border border-lime/40 px-2 py-1 font-mono text-[11px] font-medium text-lime">
              ↗ {s.delta}
            </span>
          </motion.div>
        </AnimatePresence>
        <div className="relative mt-3 h-[76px] border-b border-line">
          <svg
            viewBox="0 0 260 76"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="successArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--lime)" stopOpacity="0.28" />
                <stop offset="1" stopColor="var(--lime)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,62 C20,58 32,59 48,54 S78,56 94,49 S123,51 140,43 S166,45 181,35 S210,34 228,24 S247,23 260,13 L260,76 L0,76 Z"
              fill="url(#successArea)"
            />
            <motion.path
              d="M0,62 C20,58 32,59 48,54 S78,56 94,49 S123,51 140,43 S166,45 181,35 S210,34 228,24 S247,23 260,13"
              fill="none"
              stroke="var(--lime)"
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
        </div>
        <p className="mt-2.5 text-[14px] leading-[1.6] text-muted">
          Task success is improving with each round of practice.
        </p>
      </div>
    </div>
  );
}

function StageFooter({ s }: { s: Scenario }) {
  const cells = [
    { label: "What we tested", value: s.name, tone: "" },
    { label: "How fast we ran it", value: s.speed, tone: "text-accent" },
    { label: "Forces on the body", value: s.force, tone: "text-mag" },
    { label: "System usage", value: s.gpu, tone: "text-violet" },
  ];

  return (
    <div className="absolute inset-x-3 bottom-3 z-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:inset-x-4 sm:bottom-4 lg:grid-cols-[1.35fr_repeat(3,1fr)]">
      {cells.map((c) => (
        <div key={c.label} className="min-h-[68px] bg-panel p-4">
          <div className="mono-label text-[10px]">{c.label}</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={c.value}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className={`mt-1 font-display text-[18px] font-semibold tracking-[-0.018em] ${c.tone}`}
            >
              {c.value}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function LabStats() {
  const stats = [
    {
      num: "18.4×",
      label: "Faster simulation",
      body: "We can try more scenarios in the time it would take to run fewer real-world trials.",
    },
    {
      num: "2.48M",
      label: "Episodes generated",
      body: "Millions of attempts help us see what works, what fails and where the skill breaks.",
    },
    {
      num: "93.7%",
      label: "Task success",
      body: "The demo tracks steady improvement across repeated attempts.",
    },
    {
      num: "24/7",
      label: "Simulation pipeline",
      body: "Practice keeps moving without waiting for a physical robot to reset.",
    },
  ];

  return (
    <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-panel p-6">
          <div className="font-display text-[30px] font-semibold tracking-[-0.022em]">
            {s.num}
          </div>
          <div className="mono-label mt-1.5 text-text/70">{s.label}</div>
          <p className="mt-2 text-[14px] leading-[1.58] text-muted">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
