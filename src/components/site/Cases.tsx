const cases = [
  {
    tag: "Prior Authorization",
    title: "Prior authorization denied.",
    amount: "Next step",
    note: "Identify missing criteria and prepare a resubmission with your doctor.",
  },
  {
    tag: "Step Therapy",
    title: "Step therapy required first.",
    amount: "Next step",
    note: "Document prior treatments, contraindications, and clinical rationale.",
  },
  {
    tag: "Plan Exclusion",
    title: "Your plan excludes this care.",
    amount: "Next step",
    note: "Escalate to your employer benefits team with the right language.",
  },
  {
    tag: "Coverage Criteria",
    title: "Diagnosis not covered.",
    amount: "Next step",
    note: "Clarify diagnosis and coverage criteria with your doctor and insurer.",
  },
];

export function Cases() {
  return (
    <section id="scenarios" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-[20ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            Common <span className="text-strike">denial scenarios.</span>
          </h2>
          <p className="max-w-[40ch] font-mono text-sm text-zinc-400">
            Educational examples. Every denial is different — we identify yours and what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {cases.map((c, i) => (
            <article
              key={i}
              className="flex flex-col gap-6 border border-forge-800 bg-forge-950 p-8 transition-all hover:border-strike hover:shadow-[var(--shadow-brute)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                  {c.tag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Scenario #{(i + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heavy text-xl uppercase leading-tight tracking-tight text-white">
                {c.title}
              </h3>
              <div className="mt-auto flex flex-col gap-2 border-t border-forge-800 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-strike">{c.amount}</span>
                <span className="font-mono text-xs leading-relaxed text-zinc-400">{c.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}