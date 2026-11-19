# Mareterra — Mediterranean Private Catering

Luxury one-page landing site for **Mareterra**, a Mediterranean private catering house in Switzerland
(private dinners, weddings, villa stays, corporate receptions).

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Cormorant Garamond + Manrope via `next/font`.
Designed for Vercel.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where to edit

| What | File |
|---|---|
| Name, contact, email, phone, Instagram | `lib/site.ts` |
| Experiences, sample menu, philosophy, process, FAQ, form options | `lib/content.ts` |
| Colours & fonts | `app/globals.css`, `app/layout.tsx` |
| Photos | `public/img/*` (keep the same filenames to swap) |
| Logo (full, emblem, wordmark; dark + light) | `public/brand/*`, `components/Logo.tsx`, `app/icon.png` |

## Features

- First-visit branded preloader (once per session, respects reduced motion)
- Cinematic hero, line-by-line headline reveal, scroll-reveal sections, marquee
- Bento experiences grid, tabbed seasonal menu, gallery, FAQ (with FAQPage schema)
- 4-step event inquiry configurator → `/api/inquiry` (honeypot, validation, Resend email)
- Privacy / Legal notice / Cookie pages, consent-gated analytics, sitemap & robots

Photos: Unsplash (free Unsplash License). Replace with the client's own photos when available.
