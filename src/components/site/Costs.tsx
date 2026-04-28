const meds = [
  {
    name: "Wegovy",
    retail: "~$1,350 / mo",
    selfPay: "$199–$499 / mo",
    withCoverage: "As low as $0–$25 / mo",
  },
  {
    name: "Zepbound",
    retail: "~$1,060 / mo",
    selfPay: "$299–$499 / mo",
    withCoverage: "As low as $25 / mo",
  },
  {
    name: "Ozempic",
    retail: "~$970 / mo",
    selfPay: "$199–$349 / mo",
    withCoverage: "As low as $25 / mo",
  },
  {
    name: "Mounjaro",
    retail: "~$1,080 / mo",
    selfPay: "$349–$499 / mo",
    withCoverage: "As low as $25 / mo",
  },
  {
    name: "Saxenda",
    retail: "~$1,350 / mo",
    selfPay: "$700–$1,350 / mo",
    withCoverage: "As low as $25 / mo",
  },
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
          <div className="hidden grid-cols-[1.2fr_1fr_1fr_1fr] bg-forge-950 font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:grid">
            <div className="border-b border-r border-forge-800 px-6 py-4">Medication</div>
            <div className="border-b border-r border-forge-800 px-6 py-4">List / retail*</div>
            <div className="border-b border-r border-forge-800 px-6 py-4">Self-pay (mfr. program)*</div>
            <div className="border-b border-forge-800 px-6 py-4">With coverage*</div>
          </div>
          {meds.map((m, i) => (
            <div
              key={m.name}
              className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] ${i % 2 === 0 ? "bg-forge-950" : "bg-forge-900"}`}
            >
              <div className="border-b border-forge-800 px-6 py-5 font-heavy text-lg uppercase tracking-tight text-white md:border-b-0 md:border-r">
                {m.name}
              </div>
              <div className="border-b border-forge-800 px-6 py-5 font-mono text-sm text-zinc-300 md:border-b-0 md:border-r">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:hidden">List / retail</span>
                {m.retail}
              </div>
              <div className="border-b border-forge-800 px-6 py-5 font-mono text-sm text-zinc-300 md:border-b-0 md:border-r">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:hidden">Self-pay</span>
                {m.selfPay}
              </div>
              <div className="px-6 py-5 font-mono text-sm text-strike">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-zinc-500 md:hidden">With coverage</span>
                {m.withCoverage}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[80ch] font-mono text-[11px] leading-relaxed text-zinc-500">
          *Examples only, updated for 2026. List prices: Wegovy ~$1,349/mo, Zepbound ~$1,060/mo, Ozempic ~$970/mo, Mounjaro ~$1,080/mo, Saxenda ~$1,350/mo. Self-pay reflects current manufacturer direct-purchase programs (e.g. LillyDirect Zepbound $299–$499/mo, NovoCare Wegovy $199–$499/mo, Ozempic self-pay $199–$349/mo). With-coverage figures reflect typical commercially-insured copays when manufacturer savings cards are applied — frequently $0–$25/mo for eligible patients. Your actual cost varies by pharmacy, dose, region, plan design, and eligibility. overturned_ does not set prices and does not guarantee approval or any specific out-of-pocket cost.
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
