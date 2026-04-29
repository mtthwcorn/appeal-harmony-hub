const tiers = [
  {
    title: "Appeal Review + Next-Step Plan",
    price: "$49",
    badge: "Best first step",
    description: "Not sure what your denial means or what to do next.",
    items: [
      "Plain-English denial explanation",
      "Denial-type identification",
      "Recommended next step",
      "Document checklist",
      "Doctor-office message",
      "Insurer call script",
    ],
    cta: "Start Appeal Review",
    featured: false,
  },
  {
    title: "Custom Appeal Packet",
    price: "$149",
    badge: null,
    description: "A complete appeal packet built from your denial.",
    items: [
      "Everything in Appeal Review",
      "Complete custom appeal letter draft",
      "Organized packet format",
      "Stronger medical necessity framing",
      "One round of revisions",
    ],
    cta: "Get Appeal Packet",
    featured: true,
  },
  {
    title: "Guided Appeal Support",
    price: "$299",
    badge: null,
    description: "Help staying organized after the packet is ready.",
    items: [
      "Everything in Custom Appeal Packet",
      "1–2 weeks of guided follow-up",
      "Help organizing submission steps",
      "HR/benefits escalation language",
      "Follow-up questions for insurer or doctor",
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
          No approval or coverage guaranteed. We help you understand your denial and prepare organized documents.
        </p>
      </div>
    </section>
  );
}