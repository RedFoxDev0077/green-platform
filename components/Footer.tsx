import Link from "next/link";
import { nav, site } from "@/lib/site";
import { FullLogo } from "./Logo";
import { ManageCookiesButton } from "./ManageCookiesButton";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-navy-950 pt-20 text-ivory-50">
      <div className="container-gp relative">
        <div className="grid gap-12 border-b border-ivory-50/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <FullLogo tone="light" className="w-56" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-50/60">{site.description}</p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-sand-300">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory-50/75">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="link-underline">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow text-sand-300">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory-50/75">
              <li><a href={`mailto:${site.contact.email}`} className="link-underline">{site.contact.email}</a></li>
              {site.contact.phone && <li><a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="link-underline">{site.contact.phone}</a></li>}
              {site.contact.instagram && <li><a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">Instagram</a></li>}
              <li>{site.contact.area}</li>
            </ul>
            <Link href="/#inquire" className="mt-7 inline-flex rounded-full bg-sand-500 px-6 py-3 text-sm font-medium text-navy-950 transition hover:bg-sand-300">
              Plan your event
            </Link>
          </div>
        </div>

        <p aria-hidden="true" className="font-display pointer-events-none select-none whitespace-nowrap py-6 text-center text-[clamp(3rem,13vw,12rem)] leading-none text-ivory-50/[0.06]">
          Mareterra
        </p>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ivory-50/10 py-6 text-xs text-ivory-50/50 md:flex-row md:items-center">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="link-underline">Privacy</Link>
            <Link href="/legal-notice" className="link-underline">Legal notice</Link>
            <Link href="/cookies" className="link-underline">Cookies</Link>
            <ManageCookiesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
