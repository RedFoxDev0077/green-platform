import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-24">
      <div className="container-gp text-center">
        <p className="eyebrow text-champagne-600">404</p>
        <h1 className="font-display mt-4 text-5xl text-forest-900 md:text-7xl">
          This page is <em className="text-champagne-600">off the menu.</em>
        </h1>
        <Link href="/" className="mt-10 inline-flex rounded-full bg-forest-900 px-7 py-4 text-sm font-medium text-ivory-50 transition hover:bg-forest-700">
          Back to home
        </Link>
      </div>
    </section>
  );
}
