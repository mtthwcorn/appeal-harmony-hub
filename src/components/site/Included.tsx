const steps = [
  {
    title: "Upload or describe your denial",
    copy: "Tell us what medication was denied, what your insurer said, and whether you have a denial letter. If you have the letter, upload it after checkout so we can review the exact reason for the denial.",
    items: [
      "Medication and insurer review",
      "Denial letter review",
      "Basic issue summary",
    ],
  },
  {
    title: "We identify what kind of appeal you need",
    copy: "Not every GLP-1 denial is the same. We look for whether the issue appears to be a prior authorization denial, missing documentation, step therapy requirement, formulary exception, medical necessity issue, or plan exclusion.",
    items: [
      "Denial type explanation",
      "Appeal vs. resubmission guidance",
      "Missing document checklist",
    ],
  },
  {
    title: "You receive your appeal packet",
    copy: "We prepare a clear packet you can use with your doctor's office, insurer, pharmacy, or benefits department. You get organized language and next steps instead of guessing what to say.",
    items: [
      "Draft appeal letter",
      "Doctor-office message",
      "Insurer call script",
      "Document checklist",
      "Optional HR/benefits language when relevant",
    ],
  },
];

export function Included() {
  return (
    <section id="included" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex max-w-[60ch] flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-950 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            What's included
          </div>
          <h2 className="font-heavy text-4xl uppercase leading-[0.95] tracking-tight text-white lg:text-6xl">
            A clear appeal packet, <span className="text-strike">built around your denial.</span>
          </h2>
          <p className="text-pretty text-base text-zinc-400 lg:text-lg">
            Insurance denials are confusing. We turn your denial letter into a simple next-step plan with the documents, scripts, and messages you need to move the appeal forward.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col gap-6 bg-forge-950 p-8 lg:p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold leading-none text-strike">
                  STEP {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-forge-800" />
              </div>
              <h3 className="font-heavy text-2xl uppercase leading-tight tracking-tight text-white lg:text-3xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.copy}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-forge-800 pt-6">
                {step.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 font-mono text-xs leading-snug text-zinc-200">
                    <span className="mt-1 block size-1.5 shrink-0 bg-strike" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-[80ch] text-center font-mono text-xs leading-relaxed text-zinc-500">
          overturned_ does not prescribe medication, provide medical advice, provide legal advice, or guarantee approval. We help you understand your denial and prepare organized appeal-related documents.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)] lg:text-lg"
          >
            Get My Denial Reviewed — $49
          </a>
        </div>
      </div>
    </section>
  );
}