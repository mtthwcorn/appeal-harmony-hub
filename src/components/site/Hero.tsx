const bullets = [
  "For Zepbound, Wegovy, Ozempic, Mounjaro, Saxenda, and other GLP-1 coverage denials",
  "Built for prior authorization denials, step therapy issues, formulary exceptions, and plan exclusions",
  "Delivered in 24–48 hours",
];

const reviewFields = [
  { label: "Likely denial type", value: "Prior authorization denied" },
  { label: "Possible next step", value: "Appeal or resubmission packet" },
  {
    label: "Documents to request",
    value: "Chart notes, BMI/history, prior treatments, medication history",
  },
  {
    label: "Included",
    value: "Appeal draft, doctor message, call script, checklist",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-mist-50 to-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-10">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700">
            <span className="size-1.5 rounded-full bg-brand-600" />
            GLP-1 insurance denial support
          </span>

          <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight text-ink-950 md:text-6xl lg:text-[64px]">
            GLP-1 denied by insurance?{" "}
            <span className="italic text-brand-600">Get an appeal packet prepared for you.</span>
          </h1>

          <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-ink-600">
            Upload your denial letter and receive a clear next-step plan, draft appeal letter,
            doctor-office message, insurer call script, and document checklist.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#intake"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink-950 px-6 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-brand-700"
            >
              Get My Denial Reviewed — $49
            </a>
            <a
              href="#what"
              className="inline-flex h-12 items-center justify-center rounded-full border border-mist-200 bg-white px-6 text-sm font-medium text-ink-950 transition-colors hover:border-ink-400"
            >
              See What's Included
            </a>
          </div>

          <p className="max-w-[52ch] text-sm leading-relaxed text-ink-400">
            No prescribing. No medical advice. No legal advice. No approval guarantees. Just clear,
            organized insurance appeal support.
          </p>

          <ul className="mt-2 flex w-full flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-ink-600">
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

        {/* Sample Denial Review card */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-leaf-50 blur-2xl opacity-70" />
          <div className="rounded-2xl border border-mist-200 bg-white p-7 shadow-[var(--shadow-card)] lg:p-9">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                Sample
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf-50 px-2.5 py-1 text-xs font-medium text-leaf-600">
                <span className="size-1.5 rounded-full bg-leaf-500" />
                Reviewed
              </span>
            </div>
            <h3 className="font-display text-3xl tracking-tight text-ink-950">
              Your Denial Review
            </h3>
            <div className="mt-6 flex flex-col divide-y divide-mist-200">
              {reviewFields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    {f.label}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-950">{f.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-mist-100 p-4 text-xs leading-relaxed text-ink-600">
              Educational example. CoveredGLP does not prescribe medication, provide medical or
              legal advice, or guarantee insurance approval.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}