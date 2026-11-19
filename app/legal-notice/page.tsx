import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Legal Notice", alternates: { canonical: "/legal-notice" } };

export default function LegalNotice() {
  return (
    <LegalPage title="Legal Notice" updated="November 2026">
      <h2>Operator</h2>
      <p>
        {site.legalName}
        <br />
        Switzerland
        <br />
        Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      </p>
      <h2>Disclaimer</h2>
      <p>
        We carefully check the content of this website, but we cannot guarantee that it is complete, correct or
        up to date. Menus and dishes shown are examples. Every proposal is tailored to the event.
      </p>
      <h2>Copyright</h2>
      <p>The content, design and images on this site are protected by copyright. Please do not reuse them without written permission.</p>
    </LegalPage>
  );
}
