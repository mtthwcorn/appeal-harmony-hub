const items = [
  "Plain-English denial explanation",
  "Appeal or resubmission recommendation",
  "Draft appeal letter",
  "Doctor-office message",
  "Insurer call script",
  "Document checklist",
  "Questions to ask your insurer",
  "Optional HR/benefits escalation language",
  "One organized packet you can save, print, or send",
];

export function Included() {
  return (
    <section id="included" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-950 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            What you get
          </div>
          <h2 className="max-w-[22ch] font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-7xl">
            Everything you need to <span className="text-strike">take the next step.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-forge-800 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 bg-forge-950 p-6 lg:p-8">
              <span className="font-mono text-xs font-bold leading-none text-strike">
                [{(i + 1).toString().padStart(2, "0")}]
              </span>
              <span className="font-mono text-sm leading-snug text-zinc-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}