import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mark } from "@/components/Logo";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default function ThankYou() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 text-ivory-50">
      <Image src="/img/toast.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
      <div className="container-gp relative max-w-2xl py-32 text-center">
        <Mark tone="light" className="mx-auto w-28" />
        <h1 className="font-display mt-8 text-5xl md:text-7xl">
          Thank you. <em className="text-sand-300">We&rsquo;re on it.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory-50/75">
          Your request has reached our kitchen. Our chef will reply personally within 24 hours with first
          ideas for your event.
        </p>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-sand-500 px-7 py-4 text-sm font-medium text-navy-950 transition hover:bg-sand-300">
          Back to home
        </Link>
      </div>
    </section>
  );
}
