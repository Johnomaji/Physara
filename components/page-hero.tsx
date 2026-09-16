"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  overline,
  title,
  body,
  meta,
  children,
}: {
  overline: string;
  title: ReactNode;
  body: string;
  meta?: [string, string][];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(620px 300px at 20% 0%, var(--accent-soft), transparent 70%)",
        }}
      />
      <div className="wrap py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mono-label tracking-[0.17em]">{overline}</div>
          <h1 className="display-lg my-4 max-w-[900px]">{title}</h1>
          <p className="max-w-[660px] text-base leading-[1.75] text-muted">
            {body}
          </p>
        </motion.div>

        {meta && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-line pt-5"
          >
            {meta.map(([k, v]) => (
              <span key={k} className="mono-label text-[8px]">
                {k} <b className="font-medium text-text">{v}</b>
              </span>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
