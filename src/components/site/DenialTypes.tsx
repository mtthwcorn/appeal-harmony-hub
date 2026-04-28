const cards = [
  {
    title: "Prior authorization denied",
    body: "Insurance says your medication does not meet its approval criteria.",
    note: null,
  },
  {
    title: "Step therapy required",
    body: "Insurance says you need to try another medication or program first.",
    note: null,
  },
  {
    title: "Drug not covered",
    body: "Insurance says your medication is not on the formulary or requires an exception.",
    note: null,
  },
  {
    title: "Plan excludes weight-loss medications",
    body: "Your employer or plan may exclude coverage for weight-loss drugs.",
    note: "Important: If your plan completely excludes weight-loss medications, a standard appeal may not work. In that case, we help you understand the issue and prepare benefits or employer escalation language.",
  },
  {
    title: "Not sure",
    body: "Upload your denial and we will help you understand what category it falls into.",
    note: null,
  },
];

export function DenialTypes() {
  return (
    <section id="denial-types" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Denial categories
          </div>
          <h2 className="max-w-[24ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            What kind of denial <span className="text-strike">did you get?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="flex flex-col gap-4 bg-forge-950 p-8 transition-colors hover:bg-forge-900"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="font-heavy text-xl uppercase leading-tight tracking-tight text-white">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{c.body}</p>
              {c.note && (
                <p className="mt-2 border-l-2 border-strike bg-forge-900 p-4 font-mono text-xs leading-relaxed text-zinc-300">
                  {c.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#intake"
            className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
          >
            Start My Denial Review
          </a>
        </div>
      </div>
    </section>
  );
}
