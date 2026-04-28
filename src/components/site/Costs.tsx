const meds = [
  { name: "Wegovy", retail: "$1,350", withCoverage: "$0–$25" },
  { name: "Zepbound", retail: "$1,060", withCoverage: "$25" },
  { name: "Ozempic", retail: "$970", withCoverage: "$25" },
  { name: "Mounjaro", retail: "$1,080", withCoverage: "$25" },
  { name: "Saxenda", retail: "$1,350", withCoverage: "$25" },
];

export function Costs() {
  return (
    <section id="costs" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Why coverage <span className="text-strike">matters.</span>
          </h2>
          <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
            GLP-1 medications can cost over $1,000 per month without insurance. With approved coverage and manufacturer savings programs, monthly out-of-pocket cost can drop dramatically. That gap is why a denial is worth appealing.
          </p>
        </div>

        <div className="overflow-hidden border border-forge-800">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-forge-950 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <div className="border-b border-r border-forge-800 px-6 py-4">Medication</div>
            <div className="border-b border-r border-forge-800 px-6 py-4">Avg. retail / month</div>
            <div className="border-b border-forge-800 px-6 py-4">With coverage*</div>
          </div>
          {meds.map((m, i) => (
            <div
              key={m.name}
              className={`grid grid-cols-[1.2fr_1fr_1fr] ${i % 2 === 0 ? "bg-forge-950" : "bg-forge-900"}`}
            >
              <div className="border-r border-forge-800 px-6 py-5 font-heavy text-lg uppercase tracking-tight text-white">
                {m.name}
              </div>
              <div className="border-r border-forge-800 px-6 py-5 font-mono text-sm text-zinc-300">
                {m.retail}
              </div>
              <div className="px-6 py-5 font-mono text-sm text-strike">
                {m.withCoverage}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[80ch] font-mono text-[11px] leading-relaxed text-zinc-500">
          *Examples only. Prices vary by pharmacy, dose, region, plan design, and manufacturer savings program eligibility. Retail prices reflect commonly reported list prices in 2024–2025. Covered prices reflect typical commercially-insured copays when manufacturer savings cards are applied. Your actual cost may differ. overturned_ does not set prices and does not guarantee approval or any specific out-of-pocket cost.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
          >
            Start My Denial Review — $49
          </a>
        </div>
      </div>
    </section>
  );
}
