"use client";

import { useEffect, useState } from "react";
import { FullLogo } from "./Logo";

/**
 * Brief branded intro, first visit per session only.
 * An inline script in <head> adds `html.intro` before paint (see layout.tsx), so returning
 * visitors never see a flash — CSS keeps this hidden unless that class is present.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro")) {
      setPhase("gone");
      return;
    }
    try {
      sessionStorage.setItem("gp-intro", "1");
    } catch {}
    root.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("hide"), 1500);
    const t2 = setTimeout(() => {
      setPhase("gone");
      root.style.overflow = "";
      root.classList.remove("intro");
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      root.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className="preloader fixed inset-0 z-[100] items-center justify-center bg-navy-950 transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)]"
      style={{ clipPath: phase === "hide" ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
    >
      <div className="intro-logo w-[min(78vw,340px)]">
        <FullLogo tone="light" className="w-full" />
      </div>
    </div>
  );
}
