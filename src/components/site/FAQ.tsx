const faqs = [
  {
    q: "Do you provide medical care?",
    a: "No. We help you understand denial paperwork and prepare appeal documents.",
  },
  {
    q: "Will my insurance approve coverage?",
    a: "We can't guarantee approval. We prepare the organized documents that help you respond.",
  },
  {
    q: "What denials do you help with?",
    a: "Prior authorization, step therapy, coverage exceptions, missing-documentation denials, and plan-level issues.",
  },
  {
    q: "What if my plan excludes my treatment entirely?",
    a: "Standard appeals may not work, but we provide escalation language for your insurer or employer benefits team.",
  },
  {
    q: "What if my doctor already submitted a prior authorization?",
    a: "Common. We identify what's missing and prepare a message to send your doctor's office.",
  },
  {
    q: "Is this legal or medical advice?",
    a: "No. We're not a law firm, medical provider, or insurer. Documents are for educational and administrative support only.",
  },
  {
    q: "How fast is delivery?",
    a: "Most reviews delivered within 24–48 hours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-forge-800 bg-forge-900 py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-950 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            FAQ
          </div>
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Common <span className="text-strike">questions.</span>
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border-b border-forge-800 py-6 [&[open]>summary>span:last-child]:rotate-45"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="font-heavy text-lg uppercase tracking-tight text-white lg:text-xl">
                  {f.q}
                </span>
                <span className="mt-2 inline-block text-2xl leading-none text-strike transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[65ch] text-pretty text-sm leading-relaxed text-zinc-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}