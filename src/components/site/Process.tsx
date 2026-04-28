const steps = [
  {
    n: "01",
    title: "Tell us what was denied",
    body: "Choose the medication, insurer, and denial type. Upload your denial letter after checkout or start with a short summary.",
  },
  {
    n: "02",
    title: "We review the denial type",
    body: "We identify whether the issue appears to be prior authorization, step therapy, formulary restriction, missing documentation, plan exclusion, or medical necessity.",
  },
  {
    n: "03",
    title: "You receive your appeal packet",
    body: "You get a plain-English explanation, draft appeal letter, doctor-office message, insurer call script, and document checklist.",
  },
  {
    n: "04",
    title: "You take the next step",
    body: "Use the packet to speak with your doctor's office, insurer, pharmacy, or employer benefits department.",
  },
];

export function Process() {
  return (
    <section id="how" className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-14 flex max-w-[60ch] flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            How it works
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            How CoveredGLP works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-4 rounded-2xl border border-mist-200 bg-white p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid size-9 place-items-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                {s.n}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-ink-950">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}