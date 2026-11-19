"use client";

import { useEffect, useState } from "react";
import { Mark } from "./Logo";

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
    const t1 = setTimeout(() => setPhase("hide"), 1450);
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
      className="preloader fixed inset-0 z-[100] items-center justify-center bg-forest-950 transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)]"
      style={{ clipPath: phase === "hide" ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
    >
      <div className="flex flex-col items-center gap-5 text-champagne-500">
        <Mark draw className="h-20 w-20" />
        <span className="line-mask">
          <span className="font-display text-3xl text-ivory-50" style={{ animationDelay: ".35s" }}>
            Green Platform
          </span>
        </span>
        <span className="eyebrow fadeup text-champagne-300/80" style={{ animationDelay: ".7s" }}>
          Private Catering · Switzerland
        </span>
      </div>
    </div>
  );
}
