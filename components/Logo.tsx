/** Monogram: a fine arch (a cloche / a mountain line) cradling a single leaf. */
export function Mark({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  const s = draw ? "draw" : "";
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" className={s} opacity=".55" />
      <path d="M14 42 C14 28 22 18 32 18 C42 18 50 28 50 42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={s} />
      <path d="M11 42 H53" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={s} />
      <path d="M32 40 C26 34 27 26 32 22 C37 26 38 34 32 40 Z" stroke="currentColor" strokeWidth="1.2" className={s} />
      <path d="M32 40 V25" stroke="currentColor" strokeWidth="1" className={s} />
    </svg>
  );
}

export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-ivory-50" : "text-forest-900";
  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      <Mark className="h-9 w-9 text-champagne-500" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] tracking-[0.02em]">Green Platform</span>
        <span className="eyebrow mt-1 !text-[0.55rem] !tracking-[0.34em] opacity-70">Private Catering</span>
      </span>
    </span>
  );
}
