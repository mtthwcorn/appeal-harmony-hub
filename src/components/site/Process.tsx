const steps = [
  {
    n: "01",
    title: "Submit Denial",
    body: "Upload your EOB and denial letter. Our intake protocol extracts every relevant detail in under 4 minutes.",
  },
  {
    n: "02",
    title: "Forensic Review",
    body: "Senior advocates dissect medical coding, policy fine-print, and procedural failures by your carrier.",
  },
  {
    n: "03",
    title: "Strategic Appeal",
    body: "We construct a precision appeal citing case law, medical necessity, and contractual obligation.",
  },
  {
    n: "04",
    title: "Recover Funds",
    body: "Carrier cuts the check. You pay 15% only on what we recover. No win, no fee. Period.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            The Protocol
          </div>
          <h2 className="max-w-[18ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            Four steps. <span className="text-strike">Zero noise.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col gap-6 bg-forge-950 p-8 transition-colors hover:bg-forge-900 lg:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-strike">
                  Step {s.n}
                </span>
                <span className="size-2 bg-forge-800 transition-colors group-hover:bg-strike" />
              </div>
              <h3 className="font-heavy text-2xl uppercase leading-tight tracking-tight text-white lg:text-3xl">
                {s.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}