const cards = [
  {
    title: "Prior authorization denied",
    body: "Your insurer may need more documentation from your clinician before reviewing coverage again.",
  },
  {
    title: "Step therapy required",
    body: "Your plan may require proof that other treatments were tried first or were not appropriate.",
  },
  {
    title: "Drug not on formulary",
    body: "The medication may require a formulary exception or a different coverage pathway.",
  },
  {
    title: "Plan exclusion",
    body: "Some plans exclude weight-loss medications. We help you understand whether the issue appears to be a plan-level exclusion and prepare next-step language.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Denial categories
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
              GLP-1 denials are confusing. <span className="text-strike">We make the next step clear.</span>
            </h2>
            <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
              When a GLP-1 medication is denied, it is not always obvious whether you need an appeal, a prior authorization resubmission, a formulary exception, step therapy documentation, or an employer benefits escalation. Most patients are left bouncing between the pharmacy, doctor&apos;s office, insurer, and benefits department.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-4 bg-forge-950 p-8 transition-colors hover:bg-forge-900">
              <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                Type {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="font-heavy text-xl uppercase leading-tight tracking-tight text-white">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-px bg-forge-800 lg:grid-cols-[1fr_auto]">
          <div className="bg-forge-950 p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
              Not sure?
            </span>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-zinc-400">
              Upload your denial and we&apos;ll help you identify whether this looks like prior authorization, step therapy, formulary, or a plan-level exclusion before we map out the next move.
            </p>
          </div>
          <div className="flex items-center bg-forge-950 p-8 lg:justify-end">
            <a
              href="#intake"
              className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
            >
              Start My Denial Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
