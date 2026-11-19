import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mark } from "@/components/Logo";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default function ThankYou() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950 text-ivory-50">
      <Image src="/img/toast.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
      <div className="container-gp relative max-w-2xl py-32 text-center">
        <Mark draw className="mx-auto h-16 w-16 text-champagne-500" />
        <h1 className="font-display mt-8 text-5xl md:text-7xl">
          Thank you. <em className="text-champagne-300">We&rsquo;re on it.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory-50/75">
          Your request has reached our kitchen. Our chef will reply personally within 24 hours with first
          ideas for your event.
        </p>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-champagne-500 px-7 py-4 text-sm font-medium text-forest-950 transition hover:bg-champagne-300">
          Back to home
        </Link>
      </div>
    </section>
  );
}
