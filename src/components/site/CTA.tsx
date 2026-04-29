export function CTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden border-t border-forge-800 bg-forge-950 py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-strike/15 blur-[120px]" />
      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-6 text-center">
        <div className="inline-flex items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <span className="size-2 animate-pulse bg-strike" />
          Intake Open · Delivered 24–48 hrs
        </div>
        <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-8xl">
          Turn your denial letter<br />
          <span className="text-strike">into a clearer next-step plan.</span>
        </h2>
        <p className="max-w-[55ch] text-pretty text-lg text-zinc-400">
          Get a clearer appeal packet and next-step plan for your insurance denial.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-full bg-strike px-14 py-6 font-heavy text-xl uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
        >
          Start My Appeal Review — $49
        </a>
      </div>
    </section>
  );
}