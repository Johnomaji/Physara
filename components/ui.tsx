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
  "inline-flex items-center gap-2 rounded-lg px-4 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.06em] transition-all duration-200 hover:-translate-y-0.5";

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
  const style =
    variant === "primary"
      ? "bg-invert-bg text-invert-fg hover:shadow-[0_10px_30px_var(--accent-soft)]"
      : "border border-line-2 text-text hover:border-accent hover:text-accent";

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
    <Reveal className={`mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12 ${className}`}>
      <div>
        <div className="mono-label tracking-[0.17em]">{overline}</div>
        <h2 className="display-md mt-2.5 max-w-[880px]">{title}</h2>
      </div>
      {body && (
        <p className="max-w-[560px] text-sm leading-[1.75] text-muted">{body}</p>
      )}
    </Reveal>
  );
}

/* ------------------------------ Signal ----------------------------- */

export function Signal({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-text">
      <span className="h-[7px] w-[7px] rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
      {children}
    </span>
  );
}
