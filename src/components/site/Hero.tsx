import heroImg from "@/assets/hero-advocate.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-forge-950 pt-28 pb-20 text-white">
      {/* Structural background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-16 top-0 bottom-0 w-px bg-forge-800" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-forge-800" />
        <div className="absolute right-16 top-0 bottom-0 w-px bg-forge-800" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-12">
        {/* Left */}
        <div className="flex flex-col items-start gap-10">
          <div className="inline-flex items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Insurance Denial Appeal Support
          </div>

          <h1 className="font-heavy text-balance text-6xl uppercase leading-[0.85] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block text-white">Denied by insurance?</span>
            <span className="block text-strike">Turn it into an appeal packet.</span>
          </h1>

          <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-zinc-400 lg:text-xl">
            Upload your denial letter. We explain what it means and prepare the documents you need to push back.
          </p>

          <p className="max-w-[52ch] font-mono text-xs leading-relaxed text-zinc-500">
            No approval guarantee. No medical advice. Just an organized packet — appeal draft, doctor message, call script, checklist, and cost summary.
          </p>

          <ul className="flex w-full max-w-[48ch] flex-col gap-4">
            {[
              "Covers prior auth, step therapy, exceptions, and plan exclusions.",
              "Works for any treatment your doctor recommended.",
              "Delivered in 24–48 hours.",
            ].map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-l-2 border-strike bg-forge-900 p-4 transition-colors"
              >
                <span className="mt-0.5 font-mono text-lg font-bold leading-none text-strike">
                  [✓]
                </span>
                <span className="font-mono text-sm leading-snug text-zinc-300">{line}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-strike px-12 py-5 font-heavy text-lg uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
            >
              Start My Appeal Review
            </a>
            <a
              href="#included"
              className="font-mono text-xs uppercase tracking-widest text-zinc-300 underline-offset-4 hover:text-white hover:underline"
            >
              See What's Included →
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex aspect-square w-full items-center justify-center lg:aspect-auto lg:h-[760px]">
          <div className="absolute inset-4 overflow-hidden bg-forge-900 outline outline-1 outline-offset-8 outline-forge-800 lg:inset-0">
            <img
              src={heroImg}
              alt="overturned_ specialist reviewing an insurance denial letter"
              width={896}
              height={1152}
              className="h-full w-full object-cover opacity-80 mix-blend-luminosity contrast-125"
            />
            <div className="absolute inset-0 bg-forge-950/30 mix-blend-multiply" />
            <div className="absolute bottom-0 right-0 h-1/2 w-2/3 bg-strike/20 mix-blend-overlay" />
          </div>

          {/* Receipt block */}
          <div className="absolute -left-2 bottom-8 z-20 w-[300px] border border-forge-800 bg-forge-950 p-6 shadow-[var(--shadow-brute)] lg:-left-12 lg:bottom-20 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Appeal Packet
              </span>
              <span className="size-2 animate-pulse bg-strike" />
            </div>
            <h3 className="mb-2 font-heavy text-3xl uppercase leading-[0.9] tracking-tight text-white">
              Packet<br />Ready
            </h3>
            <div className="mb-5 h-[3px] w-full bg-strike" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs text-zinc-400">
                <span>DENIAL TYPE</span>
                <span>PRIOR AUTH</span>
              </div>
              <div className="flex justify-between font-mono text-sm font-bold text-white">
                <span>DELIVERED</span>
                <span>24–48 HRS</span>
              </div>
            </div>
          </div>

          {/* Days block */}
          <div className="absolute -right-2 top-8 z-20 w-[160px] rotate-3 bg-strike p-4 text-forge-950 lg:-right-6 lg:top-20">
            <div className="mb-1 font-heavy text-4xl leading-none">$49</div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-tight opacity-80">
              Appeal Review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}