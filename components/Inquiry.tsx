"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { eventTypes, preferences } from "@/lib/content";
import { site } from "@/lib/site";
import { trackLead } from "@/lib/track";
import { Reveal } from "./Reveal";

type Data = {
  eventType: string;
  date: string;
  guests: number;
  location: string;
  prefs: string[];
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
};

const initial: Data = {
  eventType: "",
  date: "",
  guests: 20,
  location: "",
  prefs: [],
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};

const steps = ["Occasion", "Details", "Style", "Contact"];

export function Inquiry() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Data>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => setD((p) => ({ ...p, [k]: v }));

  function validate(s: number) {
    const e: Record<string, string> = {};
    if (s === 0 && !d.eventType) e.eventType = "Please choose an occasion.";
    if (s === 3) {
      if (d.name.trim().length < 2) e.name = "Please tell us your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Please enter a valid email.";
      if (d.phone && !/^[+0-9\s().-]{7,}$/.test(d.phone)) e.phone = "Please enter a valid phone number.";
      if (!d.consent) e.consent = "Please accept the privacy policy.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (step < steps.length - 1) return next();
    if (!validate(3)) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      if (!res.ok) throw new Error();
      trackLead();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-[2px] border border-line bg-ivory-50 px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-muted/50 focus:border-sand-500 focus:ring-2 focus:ring-sand-500/20";
  const label = "eyebrow mb-2.5 block !text-[0.62rem] text-navy-900/70";
  const err = "mt-1.5 text-xs text-red-700";
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="inquire" className="relative overflow-hidden bg-ivory-200/60 py-24 md:py-32">
      <div className="container-gp grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-sand-600">Plan your event</p>
            <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.98] text-navy-900">
              Let&rsquo;s create something <em className="text-sand-600">unforgettable.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Share a few details. It takes under a minute. Our chef replies personally within 24 hours
              with first ideas and a clear proposal.
            </p>
          </Reveal>
          <Reveal delay={150} className="relative mt-10 hidden aspect-[5/4] overflow-hidden rounded-[2px] lg:block">
            <Image src="/img/paella.jpg" alt="A pan of seafood paella with lemon" fill sizes="35vw" className="object-cover" />
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 space-y-2 text-sm text-navy-900">
              <a href={`mailto:${site.contact.email}`} className="link-underline block w-fit">{site.contact.email}</a>
              {site.contact.phone && <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="link-underline block w-fit">{site.contact.phone}</a>}
              <p className="text-muted">{site.contact.area}</p>
            </div>
          </Reveal>
        </div>

        {/* Right: multi-step form */}
        <Reveal delay={100} className="lg:col-span-7">
          <form onSubmit={submit} noValidate className="rounded-[2px] bg-ivory-50 p-6 shadow-[0_40px_80px_-40px_rgba(12,31,23,.35)] ring-1 ring-line md:p-10">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>Leave empty<input tabIndex={-1} autoComplete="off" value={d.website} onChange={(e) => set("website", e.target.value)} /></label>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              {steps.map((s, i) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => i < step && setStep(i)}
                  className={`flex flex-1 flex-col gap-2 text-left ${i < step ? "cursor-pointer" : "cursor-default"}`}
                  aria-current={i === step ? "step" : undefined}
                >
                  <span className="h-[2px] w-full overflow-hidden bg-line">
                    <span className="block h-full bg-sand-500 transition-all duration-700" style={{ width: i <= step ? "100%" : "0%" }} />
                  </span>
                  <span className={`hidden text-[0.7rem] uppercase tracking-[0.18em] sm:block ${i === step ? "text-navy-900" : "text-muted/70"}`}>
                    {String(i + 1).padStart(2, "0")} · {s}
                  </span>
                </button>
              ))}
            </div>

            <div key={step} className="fadeup mt-10 min-h-[320px]">
              {step === 0 && (
                <fieldset>
                  <legend className="font-display text-3xl text-navy-900">What are we celebrating?</legend>
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {eventTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => {
                          set("eventType", t);
                          setErrors({});
                        }}
                        aria-pressed={d.eventType === t}
                        className={`rounded-[2px] border px-4 py-5 text-left text-sm transition-all duration-300 ${
                          d.eventType === t
                            ? "border-navy-900 bg-navy-900 text-ivory-50"
                            : "border-line bg-ivory-100/50 text-navy-900 hover:border-sand-500"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.eventType && <p className={err}>{errors.eventType}</p>}
                </fieldset>
              )}

              {step === 1 && (
                <fieldset className="grid gap-6">
                  <legend className="font-display mb-1 text-3xl text-navy-900">Tell us the essentials.</legend>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className={label}>Preferred date</label>
                      <input id="date" type="date" min={today} value={d.date} onChange={(e) => set("date", e.target.value)} className={field} />
                    </div>
                    <div>
                      <label htmlFor="location" className={label}>Location / venue</label>
                      <input id="location" placeholder="e.g. Geneva, Zurich, Lugano…" value={d.location} onChange={(e) => set("location", e.target.value)} className={field} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className={label}>
                      Number of guests: <span className="font-display !text-base normal-case tracking-normal text-sand-700">{d.guests >= 300 ? "300+" : d.guests}</span>
                    </label>
                    <input
                      id="guests"
                      type="range"
                      min={2}
                      max={300}
                      step={1}
                      value={d.guests}
                      onChange={(e) => set("guests", Number(e.target.value))}
                      className="w-full accent-[var(--color-navy-900)]"
                    />
                    <div className="mt-1 flex justify-between text-xs text-muted"><span>2</span><span>300+</span></div>
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <fieldset>
                  <legend className="font-display text-3xl text-navy-900">How would you like it served?</legend>
                  <p className="mt-2 text-sm text-muted">Choose as many as you like. Optional.</p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {preferences.map((p) => {
                      const on = d.prefs.includes(p);
                      return (
                        <button
                          type="button"
                          key={p}
                          aria-pressed={on}
                          onClick={() => set("prefs", on ? d.prefs.filter((x) => x !== p) : [...d.prefs, p])}
                          className={`rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                            on ? "border-sand-500 bg-sand-500 text-navy-950" : "border-line text-navy-900 hover:border-sand-500"
                          }`}
                        >
                          {on ? "✓ " : ""}
                          {p}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-7">
                    <label htmlFor="message" className={label}>Anything else we should know?</label>
                    <textarea id="message" rows={3} placeholder="Allergies, theme, budget range, special wishes…" value={d.message} onChange={(e) => set("message", e.target.value)} className={field} />
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <fieldset className="grid gap-5">
                  <legend className="font-display mb-1 text-3xl text-navy-900">Where can we reach you?</legend>
                  <div>
                    <label htmlFor="name" className={label}>Full name *</label>
                    <input id="name" autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} className={field} />
                    {errors.name && <p className={err}>{errors.name}</p>}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={label}>Email *</label>
                      <input id="email" type="email" autoComplete="email" value={d.email} onChange={(e) => set("email", e.target.value)} className={field} />
                      {errors.email && <p className={err}>{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className={label}>Phone</label>
                      <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+41" value={d.phone} onChange={(e) => set("phone", e.target.value)} className={field} />
                      {errors.phone && <p className={err}>{errors.phone}</p>}
                    </div>
                  </div>
                  <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
                    <input type="checkbox" checked={d.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--color-navy-900)]" />
                    <span>
                      I agree that my details are used to answer this request, as described in the{" "}
                      <Link href="/privacy" className="text-sand-700 underline">privacy policy</Link>. *
                    </span>
                  </label>
                  {errors.consent && <p className={`${err} -mt-3`}>{errors.consent}</p>}

                  <div className="rounded-[2px] bg-ivory-100 p-4 text-sm text-navy-900/80">
                    <span className="eyebrow !text-[0.6rem] text-sand-700">Your request</span>
                    <p className="mt-1.5">
                      {d.eventType} · {d.guests >= 300 ? "300+" : d.guests} guests
                      {d.date && ` · ${new Date(d.date + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`}
                      {d.location && ` · ${d.location}`}
                    </p>
                  </div>
                </fieldset>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`text-sm text-navy-900/70 transition hover:text-navy-900 ${step === 0 ? "invisible" : ""}`}
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 rounded-full bg-navy-900 px-7 py-4 text-sm font-medium text-ivory-50 transition hover:bg-navy-700 disabled:opacity-60"
              >
                {step < steps.length - 1 ? "Continue" : status === "sending" ? "Sending…" : "Send my request"}
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
            </div>
            {status === "error" && (
              <p className="mt-4 text-sm text-red-700">
                Something went wrong. Please try again or write to{" "}
                <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
