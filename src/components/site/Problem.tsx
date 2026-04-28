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
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            GLP-1 denials are confusing. <span className="text-strike">We make the next step clear.</span>
          </h2>
          <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
            When a GLP-1 medication is denied, it is not always obvious whether you need an appeal, a prior authorization resubmission, a formulary exception, step therapy documentation, or an employer benefits escalation. Most patients are left bouncing between the pharmacy, doctor's office, insurer, and benefits department.
          </p>
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
      </div>
    </section>
  );
}