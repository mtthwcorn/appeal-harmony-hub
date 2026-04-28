export function SiteNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <a href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-strike text-forge-950 font-heavy">
            <span className="text-lg leading-none">O</span>
          </span>
          <span className="font-heavy text-lg lowercase tracking-tight text-white">
            overturned<span className="text-strike">_</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {[
            { label: "How it works", href: "#process" },
            { label: "What you get", href: "#included" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 font-heavy text-sm uppercase tracking-tight text-forge-950 transition-colors hover:bg-strike"
        >
          Start Denial Review
        </a>
      </nav>
    </header>
  );
}