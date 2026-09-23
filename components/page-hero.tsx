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
      <div className="wrap py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mono-label text-accent">{overline}</div>
          <h1 className="display-lg mt-3 mb-6 max-w-[760px]">{title}</h1>
          <p className="max-w-[640px] text-[19px] leading-[1.6] text-muted">
            {body}
          </p>
        </motion.div>

        {meta && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-7"
          >
            {meta.map(([k, v]) => (
              <div key={k}>
                <div className="mono-label">{k}</div>
                <div className="mt-1 text-[15px] font-medium">{v}</div>
              </div>
            ))}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
