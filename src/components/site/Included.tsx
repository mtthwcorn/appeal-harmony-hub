const steps = [
  {
    title: "Denial Summary",
    copy: "A plain-English explanation of what the insurer appears to be saying.",
  },
  {
    title: "Recommended Next Step",
    copy: "Whether this looks like an appeal, prior authorization resubmission, formulary exception, step therapy response, or benefits escalation.",
  },
  {
    title: "Doctor-Office Message",
    copy: "A copy-paste message asking your prescriber's office for the documentation that may be needed.",
  },
  {
    title: "Insurer Call Script",
    copy: "Simple questions to ask your insurance company so you can confirm the appeal process, fax/upload instructions, deadlines, and criteria.",
  },
  {
    title: "Document Checklist",
    copy: "A checklist of records that may support the case, such as chart notes, BMI history, diagnosis codes, prior medications, comorbidities, labs, or prior weight-loss attempts.",
  },
];

export function Included() {
  return (
    <section id="included" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex max-w-[60ch] flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-950 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            What your packet includes
          </div>
          <h2 className="font-heavy text-4xl uppercase leading-[0.95] tracking-tight text-white lg:text-6xl">
            What your <span className="text-strike">packet includes.</span>
          </h2>
          <p className="text-pretty text-base text-zinc-400 lg:text-lg">
            Five clear pieces, organized around your specific denial. No legal jargon. Nothing combative. Just the documents and language you need to move forward.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col gap-6 bg-forge-950 p-8 lg:p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold leading-none text-strike">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-forge-800" />
              </div>
              <h3 className="font-heavy text-xl uppercase leading-tight tracking-tight text-white lg:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{step.copy}</p>
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
            Start My Denial Review — $49
          </a>
        </div>
      </div>
    </section>
  );
}