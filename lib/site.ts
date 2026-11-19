/**
 * Central configuration for Green Platform.
 * Contact details, copy and analytics IDs live here — every component reads from this file.
 */

export const site = {
  name: "Green Platform",
  legalName: "Green Platform",
  tagline: "Private Catering & Fine Dining",
  slogan: "Haute cuisine, wherever you gather.",
  domain: "greenplatform.ch",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greenplatform.ch",
  locale: "en_CH",
  description:
    "Green Platform is a Swiss private catering house crafting refined, seasonal menus for private dinners, weddings, chalet stays and corporate receptions — served with discreet, white-glove care.",

  // Contact — replace with the official details once confirmed by the client.
  contact: {
    email: "hello@greenplatform.ch",
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
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
] as const;
