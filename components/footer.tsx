import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="font-display text-[16px] font-semibold tracking-[-0.02em]">
            Physara
          </span>
        </Link>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="text-[15px] text-muted transition-colors hover:text-text"
          >
            {site.email}
          </a>
        </nav>

        <p className="text-[14px] text-soft">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
