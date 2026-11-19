import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentManager } from "@/components/ConsentManager";
import { Preloader } from "@/components/Preloader";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c1f17",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline} in Switzerland`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "private catering Switzerland",
    "private chef Switzerland",
    "wedding catering Switzerland",
    "chalet chef",
    "event catering Zurich",
    "catering Geneva",
    "apéro riche",
    "fine dining catering",
    "Green Platform",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name}: ${site.slogan}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.slogan}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

// Runs before paint: decides whether the first-visit intro plays (avoids any flash).
const introScript = `try{if(sessionStorage.getItem('gp-intro')!=='1'&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&location.pathname==='/'){document.documentElement.classList.add('intro')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    servesCuisine: ["Swiss", "French", "Contemporary European"],
    areaServed: { "@type": "Country", name: "Switzerland" },
    slogan: site.slogan,
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentManager />
      </body>
    </html>
  );
}
