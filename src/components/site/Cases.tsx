const scenarios = [
  {
    tag: "Prior authorization",
    title: "Zepbound prior authorization denied",
    next: "Ask what criteria were missing and prepare an appeal or resubmission packet.",
  },
  {
    tag: "Step therapy",
    title: "Wegovy step therapy required",
    next: "Document prior treatments, medication history, contraindications, and clinician rationale.",
  },
  {
    tag: "Plan exclusion",
    title: "Plan excludes weight-loss medications",
    next: "Confirm whether the exclusion is plan-level and prepare employer benefits escalation language.",
  },
  {
    tag: "Diagnosis criteria",
    title: "Ozempic denied for non-covered diagnosis",
    next: "Clarify the diagnosis and coverage criteria with the prescriber and insurer.",
  },
];

export function Cases() {
  return (
    <section className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex max-w-[60ch] flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            Examples
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Common GLP-1 denial scenarios
          </h2>
          <p className="text-base leading-relaxed text-ink-600">
            Educational examples of denial types. Every plan and situation is different.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="flex flex-col gap-4 rounded-2xl border border-mist-200 bg-white p-7"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                {s.tag}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-ink-950">{s.title}</h3>
              <div className="rounded-xl bg-mist-100 p-4">
                <span className="block text-xs font-medium uppercase tracking-wider text-ink-400">
                  Possible next step
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-950">{s.next}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}