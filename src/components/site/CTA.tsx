export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center gap-7 px-6 text-center">
        <h2 className="font-display text-4xl leading-tight tracking-tight text-white lg:text-6xl">
          Stop guessing what insurance wants.
        </h2>
        <p className="max-w-[55ch] text-pretty text-lg text-white/70">
          Get a clear appeal packet and next-step plan for your GLP-1 denial.
        </p>
        <a
          href="#intake"
          className="inline-flex h-13 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-ink-950 transition-colors hover:bg-brand-50"
        >
          Get My Denial Reviewed — $49
        </a>
        <p className="text-xs text-white/50">
          No prescribing. No medical or legal advice. No approval guarantees.
        </p>
      </div>
    </section>
  );
}