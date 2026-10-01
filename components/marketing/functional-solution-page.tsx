"use client";

import { motion } from "framer-motion";
import { PageHero } from "./page-hero";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";
import { Section, SectionHeader } from "./section";
import { IntegrationLogoStrip } from "./integration-logo-strip";
import { FinalCTA } from "@/components/final-cta";
import type { PublicSolution } from "@/lib/solution-taxonomy";
import { getPrimaryWorkspaceHost, workspaceUrl } from "@/lib/solution-taxonomy";

const DEFAULT_FOCUS = [
  { title: "Shared context", description: "Goals, work, and evidence connected across your tools." },
  { title: "Governed AI", description: "The Twin proposes; humans with authority approve." },
  { title: "Continuity", description: "Handoffs and host switches without rebuilding the story." },
];

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, damping: 20, stiffness: 60, delay },
});

export function FunctionalSolutionPage({ solution }: { solution: PublicSolution }) {
  return (
    <>
      <PageHero
        badge={solution.name}
        headline={solution.headline}
        subhead={solution.description}
        primaryCta={{ label: "Book a demo", href: "/contact?intent=demo" }}
        secondaryCta={{
          label: `Open ${getPrimaryWorkspaceHost(solution).label}`,
          href: workspaceUrl(getPrimaryWorkspaceHost(solution).host),
        }}
      />
      <IntegrationLogoStrip variant="muted" title="Connects to your stack" />
      <Section variant="muted">
        <SectionHeader headline="Built for how this function actually works." body={solution.buyerSummary} />
        <div className="grid gap-4 sm:grid-cols-3">
          {DEFAULT_FOCUS.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeInView(i * 0.08)}
              className="rounded-md border border-[#E5E5E5] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0176D3] hover:shadow-[0_4px_12px_rgba(1,118,211,0.06)]"
            >
              <h3 className="text-[16px] font-semibold text-[#032D60]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#444]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      <WorkspaceProjectionCta solution={solution} />
      <FinalCTA />
    </>
  );
}
