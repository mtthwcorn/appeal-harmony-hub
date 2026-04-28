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

export function WhatYouGet() {
  return (
    <section id="what" className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex max-w-[60ch] flex-col gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            What you get
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Everything you need to take the next step
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-mist-200 bg-white p-5"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-ink-950">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}