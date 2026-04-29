export function Comparison() {
  const generic = [
    "One-size-fits-all appeal letter",
    "Doesn't identify your denial type",
    "Misses doctor-office next steps",
    "Ignores step therapy or coverage rules",
  ];
  const ours = [
    "Review tailored to your denial letter",
    "Denial-type triage",
    "Appeal or resubmission guidance",
    "Doctor message + insurer call script",
    "Document checklist + cost summary",
    "HR/benefits escalation when relevant",
  ];

  return (
    <section id="compare" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Not every denial<br />
            <span className="text-strike">needs the same response.</span>
          </h2>
          <p className="max-w-[55ch] text-pretty text-base leading-relaxed text-zinc-400">
            A generic letter rarely works. We identify the denial type first, then build the packet that fits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2">
          <div className="flex flex-col gap-6 bg-forge-900 p-8 lg:p-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Option A
            </span>
            <h3 className="font-heavy text-3xl uppercase tracking-tight text-zinc-300">
              Generic appeal help
            </h3>
            <ul className="flex flex-col gap-3">
              {generic.map((g, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-sm text-zinc-500">
                  <span className="text-zinc-600">[—]</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 bg-forge-950 p-8 lg:p-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
              Option B
            </span>
            <h3 className="font-heavy text-3xl lowercase tracking-tight text-white">
              overturned_
            </h3>
            <ul className="flex flex-col gap-3">
              {ours.map((g, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-sm text-zinc-200">
                  <span className="text-strike">[✓]</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}