"use client";

import Image from "next/image";
import { useState } from "react";
import { menu } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const course = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="container-gp">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-champagne-600">A seasonal sample menu</p>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,5vw,4.4rem)] leading-[1] text-forest-900">
            Written by the season, <em className="text-champagne-600">served by us.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            An example of what we cook. Every event gets its own menu, built around your guests and
            what the Swiss markets offer that week.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div role="tablist" aria-label="Courses" className="no-scrollbar mx-auto mt-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-ivory-50 p-1.5">
            {menu.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                aria-controls={`panel-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition-all duration-500 md:px-7 ${
                  active === c.id ? "bg-forest-900 text-ivory-50 shadow-lg" : "text-forest-900/70 hover:text-forest-900"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-forest-900 lg:col-span-5">
            {menu.map((c) => (
              <Image
                key={c.id}
                src={c.image}
                alt={`${c.label} course`}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className={`object-cover transition-all duration-[1.1s] ease-[var(--ease-lux)] ${
                  active === c.id ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-6">
              <span className="font-display text-3xl italic text-ivory-50">{course.label}</span>
            </div>
          </div>

          <ul id={`panel-${course.id}`} role="tabpanel" key={course.id} className="lg:col-span-7">
            {course.dishes.map((d, i) => (
              <li
                key={d.name}
                className="fadeup group flex items-baseline gap-4 border-b border-line py-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="font-display w-8 shrink-0 text-champagne-600">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl text-forest-900 md:text-[1.9rem]">{d.name}</h3>
                    {d.tags?.map((t) => (
                      <span key={t} className="rounded-full border border-forest-200 bg-forest-200/30 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-forest-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1.5 text-muted">{d.note}</p>
                </div>
              </li>
            ))}
            <li className="pt-6 text-sm text-muted">
              Vegetarian, vegan, gluten-free and allergy-friendly versions of every course are available.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
