const steps = [
  {
    n: "01",
    title: "Upload your denial",
    body: "Add your denial letter or describe what your insurer said. Tell us your insurer and the type of denial.",
  },
  {
    n: "02",
    title: "Get a denial breakdown",
    body: "We summarize the reason for denial, the likely missing information, and the next steps to consider — prior authorization, step therapy, coverage exception, missing documentation, or plan exclusion.",
  },
  {
    n: "03",
    title: "Build your appeal packet",
    body: "Get an organized packet with an appeal letter draft, doctor-office message, insurer call script, cost impact summary, and document checklist.",
  },
  {
    n: "04",
    title: "You take the next step",
    body: "Use the packet to follow up with your doctor's office, insurer, or employer benefits team.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:mb-20">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            How it works
          </div>
          <h2 className="max-w-[18ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            How <span className="lowercase">overturned_</span> <span className="text-strike">works.</span>
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