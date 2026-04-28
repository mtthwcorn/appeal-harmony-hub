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
            Claim Extraction Unit
          </div>

          <h1 className="font-heavy text-balance text-6xl uppercase leading-[0.85] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block text-white">They Denied It.</span>
            <span className="block text-strike">We Extract It.</span>
          </h1>

          <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-zinc-400 lg:text-xl">
            Insurance algorithms rely on your exhaustion. We rely on brute-force legal architecture.
            Hand us the final denial, step out of the ring, and let our advocates force the payout you are legally owed.
          </p>

          <ul className="flex w-full max-w-[48ch] flex-col gap-4">
            {[
              "No upfront retainers. Strictly 15% of recovered funds.",
              "84.2% overturn rate on 'final administrative denials'.",
              "Average time from deployment to wire: 41 days.",
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
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-strike px-12 py-5 font-heavy text-lg uppercase tracking-tight text-forge-950 transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow-strike)]"
            >
              Deploy Advocate
            </a>
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                Free Case Diagnostic
              </span>
              <span className="font-mono text-xs text-zinc-500">~ 4 min intake</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex aspect-square w-full items-center justify-center lg:aspect-auto lg:h-[760px]">
          <div className="absolute inset-4 overflow-hidden bg-forge-900 outline outline-1 outline-offset-8 outline-forge-800 lg:inset-0">
            <img
              src={heroImg}
              alt="Overturn advocate reviewing a denied insurance claim"
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
                Status Code: 200
              </span>
              <span className="size-2 animate-pulse bg-strike" />
            </div>
            <h3 className="mb-2 font-heavy text-3xl uppercase leading-[0.9] tracking-tight text-white">
              Denial<br />Reversed
            </h3>
            <div className="mb-5 h-[3px] w-full bg-strike" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-mono text-xs text-zinc-400">
                <span>ORIGINAL CHARGE</span>
                <span className="line-through">$18,450</span>
              </div>
              <div className="flex justify-between font-mono text-sm font-bold text-white">
                <span>RECOVERED</span>
                <span>$18,450</span>
              </div>
            </div>
          </div>

          {/* Days block */}
          <div className="absolute -right-2 top-8 z-20 w-[160px] rotate-3 bg-strike p-4 text-forge-950 lg:-right-6 lg:top-20">
            <div className="mb-1 font-heavy text-4xl leading-none">41</div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-tight opacity-80">
              Days to Resolution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}