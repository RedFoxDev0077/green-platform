import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy", alternates: { canonical: "/cookies" } };

export default function Cookies() {
  return (
    <LegalPage title="Cookie Policy" updated="November 2026">
      <p>This website uses as few cookies as possible.</p>
      <h2>Essential</h2>
      <p>We store your cookie choice and a session flag for the intro animation in your browser. These are needed for the site to work and contain no personal data.</p>
      <h2>Analytics (optional)</h2>
      <p>If enabled and only after you accept, we use Google Analytics or similar tools to understand how visitors use the site. You can change your choice at any time with the &ldquo;Cookie settings&rdquo; link in the footer.</p>
    </LegalPage>
  );
}
