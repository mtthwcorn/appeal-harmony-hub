const cards = [
  {
    title: "Prior authorization denied",
    body: "Your insurer needs more documentation before reviewing again.",
  },
  {
    title: "Step therapy required",
    body: "Your plan wants proof other treatments were tried first.",
  },
  {
    title: "Treatment not covered",
    body: "You may need a formulary exception or different coverage pathway.",
  },
  {
    title: "Plan exclusion",
    body: "Your plan excludes this category of care — we prepare escalation language.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Denial categories
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
              Denial letters are confusing. <span className="text-strike">We make the next step clear.</span>
            </h2>
            <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
              Appeal? Resubmission? Exception? Escalation? Most people get stuck bouncing between their doctor, insurer, and benefits team — without knowing what to ask or send next.
            </p>
          </div>
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

        <div className="mt-10 grid gap-px bg-forge-800 lg:grid-cols-[1fr_auto]">
          <div className="bg-forge-950 p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
              Not sure?
            </span>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-zinc-400">
              Upload your denial letter and we&apos;ll identify the type before mapping the next move.
            </p>
          </div>
          <div className="flex items-center bg-forge-950 p-8 lg:justify-end">
            <a
              href="#intake"
              className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
            >
              Start My Appeal Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
