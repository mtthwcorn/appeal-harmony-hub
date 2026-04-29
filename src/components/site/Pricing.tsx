const tiers = [
  {
    title: "Appeal Letter Packet",
    price: "$49",
    badge: "Most popular",
    description: "A customized appeal letter and core documents to respond to an insurance denial.",
    items: [
      "Plain-English denial explanation",
      "Denial-type identification",
      "Custom appeal letter draft",
      "Document checklist",
      "Doctor-office message",
      "Insurer call script",
      "Cost impact summary",
      "Organized appeal packet format",
      "One round of revisions",
    ],
    cta: "Get Appeal Letter",
    featured: true,
  },
  {
    title: "Guided Appeal Support",
    price: "$149",
    badge: null,
    description: "Live help and guidance through the appeal process, including support if the denial continues.",
    items: [
      "Everything in Appeal Letter Packet",
      "Live appeal review call",
      "Guided walkthrough of your packet",
      "Help deciding what to send and when",
      "Custom follow-up messages",
      "Doctor-office follow-up guidance",
      "Insurer follow-up guidance",
      "Support if coverage is denied again",
      "Help preparing the next response",
      "Two rounds of revisions",
    ],
    cta: "Get Guided Support",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-950 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Pricing
          </div>
          <h2 className="max-w-[22ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            Three ways to <span className="text-strike">get organized.</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
          {tiers.map((t) => (
            <article
              key={t.title}
              className={`relative flex flex-col gap-6 border p-8 lg:p-10 transition-all ${
                t.featured
                  ? "border-strike bg-forge-950 shadow-[var(--shadow-brute)]"
                  : "border-forge-800 bg-forge-950 hover:border-strike"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-8 bg-strike px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-forge-950">
                  {t.badge}
                </span>
              )}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                  Tier
                </span>
                <h3 className="font-heavy text-2xl uppercase tracking-tight text-white">
                  {t.title}
                </h3>
              </div>
              <div className="font-heavy text-6xl text-white">{t.price}</div>
              <p className="text-sm leading-relaxed text-zinc-400">{t.description}</p>
              <div className="h-px w-full bg-forge-800" />
              <ul className="flex flex-col gap-3">
                {t.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 font-mono text-sm leading-snug text-zinc-300">
                    <span className="mt-0.5 text-strike">[✓]</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#intake"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-4 font-heavy text-sm uppercase tracking-tight transition-all ${
                  t.featured
                    ? "bg-strike text-forge-950 hover:bg-white"
                    : "border border-forge-800 bg-forge-900 text-white hover:border-strike hover:text-strike"
                }`}
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-[70ch] font-mono text-xs leading-relaxed text-zinc-500">
          Overturned does not guarantee approval and does not provide medical, legal, or insurance advice. We help you organize your denial, prepare appeal-related documents, and understand possible next steps.
        </p>
      </div>
    </section>
  );
}