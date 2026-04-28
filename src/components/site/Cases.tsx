const cases = [
  {
    tag: "GLP-1 / Wegovy",
    title: "Carrier denied as 'cosmetic'. Reversed in 38 days.",
    amount: "$14,820",
    note: "Cited medical necessity + endocrine documentation",
  },
  {
    tag: "Mental Health",
    title: "Inpatient stay denied as 'not medically necessary'.",
    amount: "$42,300",
    note: "Forced parity compliance under MHPAEA",
  },
  {
    tag: "Out-of-Network",
    title: "Emergency surgery balance billed to patient.",
    amount: "$87,140",
    note: "Invoked No Surprises Act enforcement",
  },
];

export function Cases() {
  return (
    <section id="results" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-[20ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            Recent <span className="text-strike">extractions.</span>
          </h2>
          <p className="max-w-[40ch] font-mono text-sm text-zinc-400">
            Anonymized case files from the last 90 days. Names redacted, outcomes verified.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  Case #{(8400 + i).toString()}
                </span>
              </div>
              <h3 className="font-heavy text-xl uppercase leading-tight tracking-tight text-white">
                {c.title}
              </h3>
              <div className="mt-auto flex items-end justify-between border-t border-forge-800 pt-6">
                <span className="font-mono text-xs text-zinc-500">{c.note}</span>
                <span className="font-heavy text-2xl text-strike">{c.amount}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}