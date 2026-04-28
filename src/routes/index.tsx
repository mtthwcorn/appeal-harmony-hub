import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Problem } from "@/components/site/Problem";
import { Process } from "@/components/site/Process";
import { Included } from "@/components/site/Included";
import { Comparison } from "@/components/site/Comparison";
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
    <div className="min-h-dvh bg-forge-950 antialiased selection:bg-strike selection:text-forge-950" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Process />
        <Included />
        <Comparison />
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
