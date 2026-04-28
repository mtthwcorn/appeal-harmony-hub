const faqs = [
  {
    q: "Do you prescribe GLP-1 medications?",
    a: "No. overturned_ does not prescribe medications, provide medical care, or operate as a pharmacy. We help patients understand insurance denial paperwork and prepare appeal-related documents.",
  },
  {
    q: "Do you guarantee my insurance will approve the medication?",
    a: "No. We cannot guarantee approval or coverage. We prepare organized documents and next-step guidance that may help you respond to the denial.",
  },
  {
    q: "What medications do you help with?",
    a: "We help with insurance denial paperwork related to GLP-1 and weight-loss medication coverage issues, including denials involving Zepbound, Wegovy, Ozempic, Mounjaro, Saxenda, and similar treatments.",
  },
  {
    q: "What if my plan excludes weight-loss medications?",
    a: "Some plans exclude weight-loss medications entirely. In those cases, an appeal may be difficult. We can help you understand whether the issue appears to be a plan exclusion, formulary issue, prior authorization denial, or missing documentation issue, and provide next-step language for your insurer or employer benefits department.",
  },
  {
    q: "What if my doctor's office already submitted a prior authorization?",
    a: "That is common. We can help you understand the denial, identify what documents may be missing, and prepare a message you can send to your doctor's office asking for specific information or next steps.",
  },
  {
    q: "Is this legal or medical advice?",
    a: "No. overturned_ is not a law firm, medical provider, insurer, or pharmacy. The information and documents provided are for educational and administrative support only.",
  },
  {
    q: "How fast do I get the review?",
    a: "Most denial reviews are delivered within 24–48 hours.",
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