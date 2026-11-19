/**
 * Central configuration for Mareterra.
 * Contact details, copy and analytics IDs live here — every component reads from this file.
 */

export const site = {
  name: "Mareterra",
  legalName: "Mareterra",
  tagline: "Mediterranean Cuisine & Private Catering",
  slogan: "The Mediterranean, served wherever you gather.",
  domain: "mareterra.ch",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mareterra.ch",
  locale: "en_CH",
  description:
    "Mareterra brings the sea and the land of the Mediterranean to your table in Switzerland: refined private catering for dinners, weddings, villas and corporate receptions, cooked on site and served with warm, discreet care.",

  // Contact — replace with the official details once confirmed by the client.
  contact: {
    email: "hello@mareterra.ch",
    phone: "", // e.g. "+41 79 000 00 00" — hidden while empty
    area: "Serving all of Switzerland",
    instagram: "", // full URL — hidden while empty
  } as { email: string; phone: string; area: string; instagram: string },

  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    gtm: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  },
} as const;

export const nav = [
  { label: "Experiences", href: "/#experiences" },
  { label: "Menu", href: "/#menu" },
  { label: "Our Story", href: "/#philosophy" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
] as const;
