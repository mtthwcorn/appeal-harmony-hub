const dos = [
  "Review your denial letter",
  "Explain it in plain English",
  "Identify likely next steps",
  "Prepare appeal documents",
  "Organize what to ask your doctor and insurer",
];

const donts = [
  "Replace your doctor",
  "Guarantee approval or coverage",
  "Provide medical, legal, or insurance advice",
  "Act as your insurer or healthcare provider",
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex max-w-[60ch] flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            What we do · what we don't
          </div>
          <h2 className="font-heavy text-4xl uppercase leading-[0.95] tracking-tight text-white lg:text-6xl">
            What overturned_ <span className="text-strike">does and does not do.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2">
          <div className="flex flex-col gap-6 bg-forge-900 p-8 lg:p-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
              We do
            </span>
            <ul className="flex flex-col gap-3">
              {dos.map((d, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-sm text-zinc-200">
                  <span className="text-strike">[✓]</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 bg-forge-950 p-8 lg:p-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              We do not
            </span>
            <ul className="flex flex-col gap-3">
              {donts.map((d, i) => (
                <li key={i} className="flex items-start gap-3 font-mono text-sm text-zinc-400">
                  <span className="text-zinc-600">[—]</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
