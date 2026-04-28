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
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex max-w-[60ch] flex-col gap-5">
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            GLP-1 denials are confusing.{" "}
            <span className="italic text-brand-600">We make the next step clear.</span>
          </h2>
          <p className="text-base leading-relaxed text-ink-600">
            When a GLP-1 medication is denied, it is not always obvious whether you need an
            appeal, a prior authorization resubmission, a formulary exception, step therapy
            documentation, or an employer benefits escalation. Most patients are left bouncing
            between the pharmacy, doctor's office, insurer, and benefits department.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-mist-200 bg-mist-50 p-7"
            >
              <h3 className="text-lg font-semibold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}