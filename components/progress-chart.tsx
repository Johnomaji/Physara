"use client";

import { motion } from "motion/react";

export function ProgressChart() {
  return (
    <div className="h-full rounded-2xl border border-line bg-panel p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mono-label">Progress / last 200k steps</div>
          <h3 className="mt-2 font-display text-[18px] font-semibold tracking-[-0.015em]">
            Measure improvement where it matters.
          </h3>
          <p className="mt-3 max-w-[560px] text-[15px] leading-[1.62] text-muted">
            The useful signal is not only success. It is whether the robot becomes
            more stable as conditions change.
          </p>
        </div>
        <div className="flex gap-4 font-mono text-[11px] uppercase text-soft">
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-[7px] w-[7px] rounded-full bg-accent" />
            Success
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-[7px] w-[7px] rounded-full bg-mag" />
            Instability
          </span>
        </div>
      </div>

      <div className="relative mt-5 h-[300px] overflow-hidden rounded-xl border border-line sm:h-[350px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <svg
          viewBox="0 0 800 310"
          preserveAspectRatio="none"
          className="absolute inset-5 h-[calc(100%-40px)] w-[calc(100%-40px)]"
        >
          <defs>
            <linearGradient id="successFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d="M0 276 C72 274 90 243 142 250 S226 225 279 226 S349 186 401 196 S478 165 530 177 S603 145 654 122 S734 93 800 44 L800 310 L0 310 Z"
            fill="url(#successFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.path
            d="M0 276 C72 274 90 243 142 250 S226 225 279 226 S349 186 401 196 S478 165 530 177 S603 145 654 122 S734 93 800 44"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={4}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 286 C85 276 125 289 195 274 S295 277 376 241 S472 247 555 201 S668 196 800 145"
            fill="none"
            stroke="var(--mag)"
            strokeOpacity={0.55}
            strokeWidth={2.3}
            strokeDasharray="9 9"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.circle
            cx={800}
            cy={44}
            r={6}
            fill="var(--accent)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, type: "spring", stiffness: 300 }}
          />
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap justify-between gap-2">
        <span className="mono-label">0 steps</span>
        <span className="mono-label">
          Policy improves while risky contacts are surfaced
        </span>
        <span className="mono-label">200k steps</span>
      </div>
    </div>
  );
}
