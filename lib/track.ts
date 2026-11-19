// Fire a lead conversion in GA4 + Meta Pixel (called from the form on success).
// No-ops safely if the tags haven't been loaded (e.g. no analytics consent).
export function trackLead() {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...a: unknown[]) => void;
    fbq?: (...a: unknown[]) => void;
    dataLayer?: unknown[];
  };
  w.dataLayer?.push({ event: "generate_lead" });
  w.gtag?.("event", "generate_lead", { currency: "EUR", value: 1 });
  w.fbq?.("track", "Lead");
}
