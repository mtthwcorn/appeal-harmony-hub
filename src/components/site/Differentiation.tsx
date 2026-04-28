const generic = [
  "One-size-fits-all appeal letter",
  "May not identify the denial type",
  "May miss doctor-office next steps",
  "May not address step therapy or formulary issues",
];

const ours = [
  "GLP-1-focused denial review",
  "Denial-type triage",
  "Appeal or resubmission guidance",
  "Doctor-office message",
  "Insurer call script",
  "Document checklist",
  "HR/benefits escalation language when relevant",
];

export function Differentiation() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex max-w-[64ch] flex-col gap-5">
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Not every GLP-1 denial needs the same response.
          </h2>
          <p className="text-base leading-relaxed text-ink-600">
            A generic appeal letter is not always enough. A GLP-1 denial may involve missing chart
            notes, BMI or diagnosis criteria, step therapy requirements, medication history,
            formulary restrictions, or plan-level exclusions. CoveredGLP helps you understand the
            type of denial first, then prepares the right next-step packet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-mist-200 bg-mist-50 p-7">
            <h3 className="text-base font-semibold text-ink-600">Generic appeal help</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {generic.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-600">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/40 p-7 ring-1 ring-brand-100">
            <h3 className="text-base font-semibold text-brand-700">CoveredGLP</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {ours.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-950">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="size-3">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}