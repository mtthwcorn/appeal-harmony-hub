import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { Cases } from "@/components/site/Cases";
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
        <Process />
        <Cases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
