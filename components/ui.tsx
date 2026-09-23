"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/* ----------------------------- Reveal ----------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------- Animated number ------------------------ */

export function Counter({
  value,
  decimals = 1,
  suffix = "",
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (inView) raw.set(value);
  }, [inView, raw, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals);
    });
  }, [spring, decimals]);

  return (
    <span className={className}>
      <span ref={ref}>{(0).toFixed(decimals)}</span>
      {suffix}
    </span>
  );
}

/* ------------------------------ Buttons ---------------------------- */

const baseBtn =
  "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  /* invert-fg flips with the theme, so the label stays readable on the accent
     fill in both directions: white on teal in light, near-black on cyan in dark */
  const style =
    variant === "primary"
      ? "bg-accent text-invert-fg hover:bg-accent-2"
      : "bg-panel text-text ring-1 ring-line-2 shadow-sm hover:ring-accent hover:text-accent";

  const external = href.startsWith("mailto:") || href.startsWith("http");

  if (external) {
    return (
      <a href={href} className={`${baseBtn} ${style} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseBtn} ${style} ${className}`}>
      {children}
    </Link>
  );
}

/* --------------------------- Section head -------------------------- */

export function SectionHead({
  overline,
  title,
  body,
  className = "",
}: {
  overline: string;
  title: ReactNode;
  body?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16 ${className}`}>
      <div>
        <div className="mono-label text-accent">{overline}</div>
        <h2 className="display-md mt-3 max-w-[760px]">{title}</h2>
      </div>
      {body && (
        <p className="max-w-[460px] text-[17px] leading-[1.62] text-muted">
          {body}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------ Signal ----------------------------- */

export function Signal({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text">
      <span className="h-[7px] w-[7px] rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
      {children}
    </span>
  );
}
