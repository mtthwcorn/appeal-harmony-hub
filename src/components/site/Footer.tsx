export function Footer() {
  return (
    <footer className="border-t border-mist-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-brand-600 text-sm font-semibold text-white">
              C
            </span>
            <span className="text-base font-semibold tracking-tight text-ink-950">
              CoveredGLP
            </span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-600">
            <a href="#" className="hover:text-ink-950">Privacy Policy</a>
            <a href="#" className="hover:text-ink-950">Terms</a>
            <a href="#" className="hover:text-ink-950">Contact</a>
            <a href="#" className="hover:text-ink-950">Disclaimer</a>
          </div>
        </div>
        <p className="max-w-[80ch] text-xs leading-relaxed text-ink-400">
          CoveredGLP is not a medical provider, pharmacy, insurer, or law firm. CoveredGLP does not
          prescribe medication, provide medical advice, provide legal advice, or guarantee
          insurance approval. Services are limited to educational, administrative, and
          document-preparation support for patients navigating insurance denial paperwork.
        </p>
        <span className="text-xs text-ink-400">© 2026 CoveredGLP</span>
      </div>
    </footer>
  );
}