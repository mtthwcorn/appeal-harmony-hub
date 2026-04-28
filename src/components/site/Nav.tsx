const links = [
  { label: "How It Works", href: "#how" },
  { label: "What You Get", href: "#what" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-mist-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-brand-600 text-sm font-semibold text-white">
            C
          </span>
          <span className="text-base font-semibold tracking-tight text-ink-950">
            CoveredGLP
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-ink-600 transition-colors hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#intake"
          className="inline-flex h-10 items-center justify-center rounded-full bg-ink-950 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Get My Denial Reviewed
        </a>
      </nav>
    </header>
  );
}