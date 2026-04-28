const tiers = [
  {
    title: "Denial Review",
    price: "$49",
    badge: "Best first step",
    items: [
      "Denial explanation",
      "Next-step plan",
      "Draft appeal language",
      "Doctor-office message",
      "Insurer call script",
      "Document checklist",
    ],
    cta: "Get My Denial Reviewed",
    featured: false,
  },
  {
    title: "Full Appeal Packet",
    price: "$149",
    badge: null as string | null,
    items: [
      "Everything in Denial Review",
      "More complete appeal letter",
      "More detailed document checklist",
      "One revision after you get more information",
      "Organized packet format",
    ],
    cta: "Prepare My Appeal Packet",
    featured: true,
  },
  {
    title: "Concierge Support",
    price: "$299",
    badge: null as string | null,
    items: [
      "Everything in Full Appeal Packet",
      "Guided support for 1–2 weeks",
      "Follow-up checklist",
      "HR/benefits escalation language",
      "Submission organization support",
    ],
    cta: "Request Concierge Help",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex max-w-[60ch] flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            Pricing
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Clear, flat pricing.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.title}
              className={
                "relative flex flex-col gap-6 rounded-2xl border p-7 lg:p-8 " +
                (t.featured
                  ? "border-ink-950 bg-ink-950 text-white shadow-[var(--shadow-card)]"
                  : "border-mist-200 bg-white text-ink-950")
              }
            >
              {t.badge && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-leaf-500 px-3 py-1 text-xs font-medium text-white">
                  {t.badge}
                </span>
              )}
              <div>
                <h3 className={"text-lg font-semibold " + (t.featured ? "text-white" : "text-ink-950")}>
                  {t.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-5xl tracking-tight">{t.price}</span>
                  <span className={"text-sm " + (t.featured ? "text-white/60" : "text-ink-400")}>
                    one-time
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {t.items.map((it) => (
                  <li
                    key={it}
                    className={
                      "flex items-start gap-3 text-sm leading-relaxed " +
                      (t.featured ? "text-white/85" : "text-ink-600")
                    }
                  >
                    <span
                      className={
                        "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full " +
                        (t.featured ? "bg-white/15 text-white" : "bg-leaf-50 text-leaf-600")
                      }
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#intake"
                className={
                  "mt-auto inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors " +
                  (t.featured
                    ? "bg-white text-ink-950 hover:bg-brand-50"
                    : "bg-ink-950 text-white hover:bg-brand-700")
                }
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-[64ch] text-center text-sm leading-relaxed text-ink-600">
          We do not guarantee approval or coverage. Our role is to help you understand your denial
          and prepare organized appeal-related documents.
        </p>
      </div>
    </section>
  );
}