import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { experiences, pillars, processSteps, faqs } from "@/lib/content";

/* ───────────── Marquee ───────────── */
export function Marquee() {
  const items = [
    "Private Dinners",
    "Weddings",
    "Chalet Season",
    "Apéro Riche",
    "Corporate Receptions",
    "Lakeside Celebrations",
    "Tasting Menus",
    "Cocktail Parties",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-forest-800 bg-forest-900 py-5 text-ivory-50" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl italic text-ivory-50/90 md:text-3xl">{t}</span>
            <span className="text-champagne-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────── Intro / manifesto ───────────── */
export function Intro() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-gp grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-champagne-600">The house</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-[clamp(2.1rem,4.6vw,4.2rem)] leading-[1.05] text-forest-900">
              We bring a <em className="text-champagne-600">fine-dining kitchen</em> to your home,
              your chalet or your celebration. Then we disappear before dessert is over.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 grid max-w-2xl gap-6 text-[1.02rem] leading-relaxed text-muted sm:grid-cols-2">
              <p>
                Green Platform is a private catering house for people who love good food and want
                to enjoy their own event, not run it.
              </p>
              <p>
                We source from Swiss farms, dairies and lakes, write each menu for the occasion,
                and cook and serve on site with a small, discreet team.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <Link href="#inquire" className="link-underline mt-10 inline-flex items-center gap-3 pb-1 text-sm font-medium text-forest-900">
              Start a conversation <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2px]">
            <Image src="/img/chef.jpg" alt="Our chef finishing dishes under warm copper lights" fill sizes="(min-width:1024px) 35vw, 80vw" className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-lux)] hover:scale-105" />
          </Reveal>
          <Reveal delay={200} className="absolute -bottom-10 left-0 aspect-square w-[46%] overflow-hidden rounded-[2px] border-[6px] border-ivory-100 shadow-2xl">
            <Image src="/img/craft.jpg" alt="Fresh herbs being finely chopped by hand" fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Experiences ───────────── */
export function Experiences() {
  const [first, ...rest] = experiences;
  return (
    <section id="experiences" className="bg-ivory-50 py-24 md:py-32">
      <div className="container-gp">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-champagne-600">Experiences</p>
            <h2 className="font-display mt-5 max-w-2xl text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] text-forest-900">
              Every occasion, <em className="text-champagne-600">beautifully</em> served.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-muted">
              From an intimate dinner for two to a wedding for two hundred, each experience is designed
              from scratch, never taken from a package.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[330px_330px]">
          <ExperienceCard e={first} className="md:col-span-2 md:min-h-[460px] lg:col-span-6 lg:row-span-2 lg:min-h-0" big />
          {rest.map((e, i) => (
            <ExperienceCard key={e.slug} e={e} className="lg:col-span-3" delay={(i + 1) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  e,
  className = "",
  big = false,
  delay = 0,
}: {
  e: (typeof experiences)[number];
  className?: string;
  big?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`group relative min-h-[380px] overflow-hidden rounded-[2px] bg-forest-900 lg:min-h-0 ${className}`}>
      <Image src={e.image} alt={e.title} fill sizes={big ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 100vw"} className="object-cover opacity-90 transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-[1.06]" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />
      <span className="absolute right-5 top-5 z-10 rounded-full border border-ivory-50/25 bg-forest-950/20 px-3 py-1 text-[0.7rem] text-ivory-50/85 backdrop-blur md:right-6 md:top-6">
        {e.guests}
      </span>
      <div className="relative flex h-full flex-col justify-end p-6 text-ivory-50 md:p-8">
        <span className="eyebrow text-champagne-300">{e.kicker}</span>
        <h3 className={`font-display mt-3 ${big ? "text-4xl md:text-5xl" : "text-3xl"}`}>{e.title}</h3>
        <p className={`mt-3 max-w-md overflow-hidden text-sm leading-relaxed text-ivory-50/75 transition-all duration-700 ${big ? "" : "lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100"}`}>
          {e.text}
        </p>
      </div>
    </Reveal>
  );
}

/* ───────────── Philosophy ───────────── */
export function Philosophy() {
  return (
    <section id="philosophy" className="grain relative overflow-hidden bg-forest-900 py-24 text-ivory-50 md:py-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-forest-600/30 blur-[120px]" />
      <div className="container-gp relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2px] lg:order-2">
          <Image src="/img/alpine.jpg" alt="A dining room set for dinner overlooking the Swiss mountains" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-6 bottom-6 rounded-[2px] bg-forest-950/70 p-5 backdrop-blur-md">
            <p className="font-display text-xl italic text-ivory-50">&ldquo;Green&rdquo; is how we cook, not just what we&rsquo;re called.</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-champagne-300">Our philosophy</p>
            <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1]">
              Rooted in Swiss soil, <em className="text-champagne-300">refined</em> at your table.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="border-t border-ivory-50/15 pt-5">
                  <span className="font-display text-champagne-300">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-50/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Process ───────────── */
export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-gp">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-champagne-600">How it works</p>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] text-forest-900">
            Effortless, <em className="text-champagne-600">from first call</em> to final course.
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-transparent via-champagne-500/60 to-transparent md:block" />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 120} className="relative">
              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-champagne-500 bg-ivory-100 text-xs font-semibold text-champagne-700">
                {s.step}
              </span>
              <h3 className="font-display mt-6 text-3xl text-forest-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────── Gallery ───────────── */
export function Gallery() {
  const shots = [
    { src: "/img/table.jpg", alt: "Shared plates of seasonal dishes from above", cls: "md:col-span-2 md:row-span-2" },
    { src: "/img/cake.jpg", alt: "Raspberry layer cake on a dark plate", cls: "" },
    { src: "/img/toast.jpg", alt: "Guests raising glasses of red wine", cls: "" },
    { src: "/img/apero.jpg", alt: "A generous apéro buffet with flowers", cls: "md:col-span-2" },
    { src: "/img/salad.jpg", alt: "Garden salad with citrus", cls: "" },
    { src: "/img/lake.jpg", alt: "A lakeside terrace set for an evening event", cls: "md:col-span-2" },
    { src: "/img/starter.jpg", alt: "Soft egg starter on dark slate", cls: "" },
  ];
  return (
    <section className="bg-ivory-50 py-24 md:py-32" aria-labelledby="gallery-title">
      <div className="container-gp">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-champagne-600">Moments</p>
            <h2 id="gallery-title" className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] text-forest-900">
              A taste of <em className="text-champagne-600">the evening.</em>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 4) * 80} className={`group relative overflow-hidden rounded-[2px] ${s.cls} ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <Image src={s.src} alt={s.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-[1.06]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Quote band ───────────── */
export function PromiseBand() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-28 text-ivory-50 md:py-40">
      <Image src="/img/wedding.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/60 to-forest-950" />
      <Reveal className="container-gp relative max-w-4xl text-center">
        <span className="font-display text-6xl leading-none text-champagne-500">&ldquo;</span>
        <p className="font-display mt-2 text-[clamp(1.8rem,3.8vw,3.2rem)] italic leading-[1.2]">
          Our promise is simple. You host, we take care of everything else, and your guests remember
          the evening for years.
        </p>
        <p className="eyebrow mt-8 text-champagne-300">The Green Platform team</p>
      </Reveal>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-gp grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-champagne-600">Questions</p>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1] text-forest-900">
            Good to <em className="text-champagne-600">know.</em>
          </h2>
          <p className="mt-6 max-w-xs text-muted">
            Don&rsquo;t see your question? Ask us directly. We reply within 24 hours.
          </p>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="font-display text-xl text-forest-900 md:text-2xl">{f.q}</span>
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition group-open:rotate-45 group-open:border-champagne-500 group-open:bg-champagne-500 group-open:text-forest-950">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
