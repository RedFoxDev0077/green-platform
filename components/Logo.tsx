import Image from "next/image";

/** Emblem only (olive branch, sun and waves), cut from the client's logo. */
export function Mark({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Image
      src={tone === "light" ? "/brand/mark-light.png" : "/brand/mark.png"}
      alt=""
      width={1176}
      height={788}
      className={`h-auto ${className}`}
      aria-hidden="true"
    />
  );
}

/** Horizontal lockup for the header and footer: emblem + wordmark. */
export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark tone={tone} className="w-12 md:w-14" />
      <Image
        src={light ? "/brand/wordmark-light.png" : "/brand/wordmark.png"}
        alt="Mareterra"
        width={1560}
        height={306}
        priority
        className="h-auto w-[132px] md:w-[150px]"
      />
    </span>
  );
}

/** Full stacked logo with tagline — used in the preloader and footer. */
export function FullLogo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Image
      src={tone === "light" ? "/brand/logo-light.png" : "/brand/logo.png"}
      alt="Mareterra — Mediterranean Cuisine, Switzerland"
      width={1572}
      height={1176}
      className={`h-auto ${className}`}
    />
  );
}
