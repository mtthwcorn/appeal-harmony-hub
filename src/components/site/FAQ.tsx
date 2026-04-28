import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you prescribe GLP-1 medications?",
    a: "No. CoveredGLP does not prescribe medications, provide medical care, or operate as a pharmacy. We help patients understand insurance denial paperwork and prepare appeal-related documents.",
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
    a: "No. CoveredGLP is not a law firm, medical provider, insurer, or pharmacy. The information and documents provided are for educational and administrative support only.",
  },
  {
    q: "How fast do I get the review?",
    a: "Most denial reviews are delivered within 24–48 hours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-mist-50 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[860px] px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            FAQ
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="overflow-hidden rounded-2xl border border-mist-200 bg-white">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-mist-200 px-6 last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-ink-950 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-ink-600">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}