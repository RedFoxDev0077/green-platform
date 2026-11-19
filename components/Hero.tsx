import Image from "next/image";
import Link from "next/link";

const d = (s: number) => `calc(var(--intro, 0s) + ${s}s)`;

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-navy-950 text-ivory-50">
      <div className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="An elegantly plated dish served at a candlelit Mediterranean dinner"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />
      </div>

      <div className="container-gp relative z-10 pb-14 pt-36 md:pb-20">
        <p className="eyebrow fadeup text-sand-300" style={{ animationDelay: d(.2) }}>
          Mediterranean cuisine · Switzerland
        </p>

        <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.9rem,8.4vw,7.6rem)] leading-[0.95]">
          <span className="line-mask"><span style={{ animationDelay: d(.3) }}>The Mediterranean,</span></span>
          <span className="line-mask">
            <span style={{ animationDelay: d(.45) }}>
              <em className="text-sand-300">served</em> where you gather.
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="fadeup max-w-xl text-base leading-relaxed text-ivory-50/80 md:text-lg" style={{ animationDelay: d(.75) }}>
            Sun-kissed tasting menus, generous mezze and warm, white-glove service for private dinners,
            weddings, villas and corporate receptions. Cooked on site, from the sea and the land.
          </p>

          <div className="fadeup flex flex-col gap-3 sm:flex-row" style={{ animationDelay: d(.9) }}>
            <Link
              href="#inquire"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-sand-500 px-7 py-4 text-sm font-medium text-navy-950 transition hover:bg-sand-300"
            >
              Plan your event
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium text-ivory-50 ring-1 ring-ivory-50/35 backdrop-blur transition hover:bg-ivory-50/10"
            >
              Discover the menu
            </Link>
          </div>
        </div>

        <div className="fadeup mt-14 flex items-center justify-between border-t border-ivory-50/15 pt-6 text-xs text-ivory-50/60" style={{ animationDelay: d(1.1) }}>
          <span className="eyebrow !tracking-[0.22em]">Private dinners · Weddings · Villas · Corporate</span>
          <span className="hidden items-center gap-3 sm:flex">
            Scroll
            <span className="relative h-10 w-px overflow-hidden bg-ivory-50/20">
              <span className="cue absolute inset-x-0 top-0 h-1/2 bg-sand-300" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
