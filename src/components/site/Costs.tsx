const tiers = [
  {
    name: "Without coverage",
    range: "$500–$1,200+ / mo",
    note: "Full out-of-pocket cost when insurance denies.",
  },
  {
    name: "With partial coverage",
    range: "$100–$500 / mo",
    note: "Covered, but you still pay a meaningful share.",
  },
  {
    name: "With stronger plan coverage",
    range: "$0–$100 / mo",
    note: "Lower out-of-pocket cost when coverage is approved.",
  },
];

export function Costs() {
  return (
    <section id="costs" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Know the <span className="text-strike">cost of waiting.</span>
          </h2>
          <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
            A denial isn't just paperwork — it changes what you pay. See how coverage shifts your monthly cost.
          </p>
        </div>

        <div className="overflow-hidden border border-forge-800">
          <div className="hidden grid-cols-[1.4fr_1fr_1.6fr] bg-forge-950 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:grid">
            <div className="border-b border-r border-forge-800 px-6 py-4">Coverage scenario</div>
            <div className="border-b border-r border-forge-800 px-6 py-4">Estimated cost*</div>
            <div className="border-b border-forge-800 px-6 py-4">What it means</div>
          </div>
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.6fr] ${i % 2 === 0 ? "bg-forge-950" : "bg-forge-900"}`}
            >
              <div className="border-b border-forge-800 px-6 py-5 font-heavy text-lg uppercase tracking-tight text-white md:border-b-0 md:border-r">
                {t.name}
              </div>
              <div className="border-b border-forge-800 px-6 py-5 font-mono text-sm text-strike md:border-b-0 md:border-r">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:hidden">Estimated cost</span>
                {t.range}
              </div>
              <div className="px-6 py-5 font-mono text-sm text-zinc-300">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:hidden">What it means</span>
                {t.note}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[80ch] font-mono text-[11px] leading-relaxed text-zinc-500">
          *Examples only. Actual costs depend on your plan, deductible, provider, and treatment.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
          >
            Start My Appeal Review — $49
          </a>
        </div>
      </div>
    </section>
  );
}
