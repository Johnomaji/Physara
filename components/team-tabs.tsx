"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { teamMembers } from "@/lib/site";

export function TeamTabs() {
  const [index, setIndex] = useState(0);
  const member = teamMembers[index];

  return (
    <div className="grid overflow-hidden rounded-2xl border border-line bg-panel lg:grid-cols-[0.7fr_1.3fr]">
      <div
        className="flex flex-col border-line max-lg:border-b lg:border-r"
        role="tablist"
        aria-label="Physara team"
      >
        {teamMembers.map((m, i) => (
          <button
            key={m.name}
            type="button"
            role="tab"
            aria-selected={index === i}
            onClick={() => setIndex(i)}
            className={`relative grid grid-cols-[26px_1fr] gap-x-2.5 gap-y-1 border-b border-line p-4 text-left transition-colors last:border-b-0 hover:bg-panel-2 ${
              index === i ? "bg-panel-2" : ""
            }`}
          >
            {index === i && (
              <motion.span
                layoutId="team-active"
                className="absolute inset-y-0 left-0 w-[2px] bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="row-span-2 mono-label pt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <strong
              className={`font-display text-xs font-semibold tracking-[-0.02em] ${
                index === i ? "text-text" : "text-text/80"
              }`}
            >
              {m.name}
            </strong>
            <em className="mono-label not-italic">
              {m.role} · {m.country}
            </em>
          </button>
        ))}
      </div>

      <div className="relative grid items-center gap-7 p-6 sm:p-8 lg:grid-cols-[240px_1fr]">
        <span className="mono-label absolute right-5 top-5">
          Profile{" "}
          <span className="text-text">
            {String(index + 1).padStart(2, "0")}
          </span>
        </span>

        <div
          className="relative h-[240px] overflow-hidden rounded-2xl border border-line lg:h-[280px]"
          style={{
            background:
              "radial-gradient(circle at 48% 48%, var(--accent-soft), transparent 45%), var(--panel-2)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--scene) 1px, transparent 1px), linear-gradient(90deg, var(--scene) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(circle, black, transparent 85%)",
            }}
          />
          <div className="animate-spin-slow absolute inset-9 rounded-full border border-dashed border-accent/25" />
          <AnimatePresence mode="wait">
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-4 font-display text-[28px] font-extrabold italic leading-none tracking-[-0.08em] text-white">
                {member.initial}
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-9 -skew-x-[32deg]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--mag))",
                  }}
                />
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
              {member.role} · {member.country}
            </div>
            <h3 className="mt-3 mb-4 font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.022em] sm:text-[40px]">
              {member.name}
            </h3>
            <p className="max-w-[540px] text-[16px] leading-[1.65] text-muted">
              {member.bio}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {member.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.07em] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
