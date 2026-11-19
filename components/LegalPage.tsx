export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="container-gp max-w-3xl pb-24 pt-36 md:pt-44">
      <p className="eyebrow text-champagne-600">Legal</p>
      <h1 className="font-display mt-4 text-5xl text-forest-900 md:text-6xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-10 space-y-5 leading-relaxed text-ink/80 [&_a]:text-champagne-700 [&_a]:underline [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:text-forest-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}
