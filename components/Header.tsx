"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = (scrolled || !overHero) && !open;
  const tone = solid ? "dark" : "light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${open ? "z-[60] py-5" : "z-50"} ${
          solid ? "border-b border-line/70 bg-ivory-100/85 py-3 backdrop-blur-xl" : "py-5"
        }`}
      >
        <div className="container-gp flex items-center justify-between gap-6">
          <Link href="/" aria-label="Mareterra — home" onClick={() => setOpen(false)}>
            <Logo tone={tone} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`link-underline text-[0.82rem] tracking-wide transition-colors ${
                  solid ? "text-navy-900/80 hover:text-navy-900" : "text-ivory-50/85 hover:text-ivory-50"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#inquire"
              className={`hidden rounded-full px-5 py-2.5 text-[0.8rem] font-medium tracking-wide transition sm:inline-flex ${
                solid
                  ? "bg-navy-900 text-ivory-50 hover:bg-navy-700"
                  : "bg-ivory-50/10 text-ivory-50 ring-1 ring-ivory-50/40 backdrop-blur hover:bg-ivory-50 hover:text-navy-900"
              }`}
            >
              Plan your event
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                solid ? "text-navy-900" : "text-ivory-50"
              }`}
            >
              <span className={`absolute h-px w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col bg-navy-950 px-6 pb-10 pt-28 transition-[clip-path] duration-700 ease-[cubic-bezier(.77,0,.18,1)] lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        style={{ clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {nav.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="font-display border-b border-ivory-50/10 py-3 text-4xl text-ivory-50 transition"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(20px)",
                transition: `all .7s cubic-bezier(.22,1,.36,1) ${open ? 150 + i * 60 : 0}ms`,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#inquire"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="mt-auto rounded-full bg-sand-500 py-4 text-center font-medium text-navy-950"
        >
          Plan your event
        </Link>
      </div>
    </>
  );
}
