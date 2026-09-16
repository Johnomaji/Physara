"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { navLinks } from "@/lib/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-[background,border-color,box-shadow] duration-300"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        borderColor: scrolled ? "var(--line)" : "transparent",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
    >
      <div className="wrap flex h-[68px] items-center justify-between gap-5 md:h-[76px]">
        <Link
          href="/"
          aria-label="Physara home"
          className="flex items-center gap-3 font-display text-[13px] font-extrabold tracking-[0.25em]"
        >
          <Logo className="h-7 w-7 shrink-0" />
          PHYSARA
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3 py-2 font-mono text-[9px] font-medium uppercase tracking-[0.14em] transition-colors ${
                isActive(link.href)
                  ? "text-text"
                  : "text-soft hover:text-text"
              }`}
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg border border-line bg-panel"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 pr-1 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_var(--lime)]" />
            <span className="mono-label text-[8px]">System nominal</span>
          </div>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-lg border border-line-2 px-3 py-2.5 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Book a demo ↗
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel lg:hidden"
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-[1.5px] w-full rounded bg-text"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="block h-[1.5px] w-full rounded bg-text"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block h-[1.5px] w-full rounded bg-text"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <nav className="wrap flex flex-col py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between border-b border-line py-4 font-display text-xl font-semibold tracking-tight transition-colors ${
                      isActive(link.href) ? "text-accent" : "text-text"
                    }`}
                  >
                    {link.label}
                    <span className="mono-label">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 py-5"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-invert-bg px-4 py-3.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-invert-fg"
                >
                  Book a technical demo →
                </Link>
                <span className="mono-label">
                  Lagos Island · Robotics and simulation
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
