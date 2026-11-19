import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Inquiry } from "@/components/Inquiry";
import { Marquee, Intro, Experiences, Philosophy, Process, Gallery, PromiseBand, FAQ } from "@/components/Sections";
import { faqs } from "@/lib/content";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Marquee />
      <Intro />
      <Experiences />
      <Menu />
      <Philosophy />
      <Process />
      <Gallery />
      <PromiseBand />
      <FAQ />
      <Inquiry />
    </>
  );
}
