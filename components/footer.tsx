import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="mono-label text-[9px] text-text">
            Physara / Robotics simulation
          </span>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mono-label transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mono-label transition-colors hover:text-text"
          >
            {site.email}
          </a>
        </nav>

        <p className="mono-label">
          Body · motion · simulation · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
