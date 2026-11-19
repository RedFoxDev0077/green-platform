import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <p>
        {site.legalName} (&ldquo;we&rdquo;) takes the protection of your personal data seriously. This policy explains
        what we collect and why, in line with the Swiss Federal Act on Data Protection (revFADP) and, where
        applicable, the EU GDPR.
      </p>
      <h2>Controller</h2>
      <p>{site.legalName}, Switzerland. Contact: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
      <h2>Data we process</h2>
      <ul>
        <li>Inquiry form: name, email, phone (optional), event details and your message.</li>
        <li>Technical data: IP address and browser information in server logs, kept for security.</li>
        <li>Analytics: only if you accept cookies (see our Cookie Policy).</li>
      </ul>
      <h2>Purpose</h2>
      <p>We use your data only to answer your request, prepare a proposal and deliver the event you book. We never sell your data.</p>
      <h2>Processors</h2>
      <p>Our website hosting provider and email delivery service may process data on our behalf, under appropriate contractual safeguards.</p>
      <h2>Retention</h2>
      <p>Inquiries that do not lead to a booking are deleted after 12 months. Booking records are kept as required by Swiss law.</p>
      <h2>Your rights</h2>
      <p>You may request access, correction or deletion of your data at any time by writing to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
    </LegalPage>
  );
}
