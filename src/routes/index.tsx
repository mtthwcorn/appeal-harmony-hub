import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Problem } from "@/components/site/Problem";
import { Process } from "@/components/site/Process";
import { WhatYouGet } from "@/components/site/WhatYouGet";
import { Differentiation } from "@/components/site/Differentiation";
import { Cases } from "@/components/site/Cases";
import { Pricing } from "@/components/site/Pricing";
import { Intake } from "@/components/site/Intake";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-white text-ink-950 antialiased selection:bg-brand-100 selection:text-ink-950">
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Process />
        <WhatYouGet />
        <Differentiation />
        <Cases />
        <Pricing />
        <Intake />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
