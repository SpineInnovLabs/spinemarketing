"use client";

import { PageHero } from "./page-hero";
import { AppCluster, CheckpointPanel, DataFabricPanel, ExampleWork, GovernancePanel, RecordsPanel, RoleViewPanel, TwinReviewPanel } from "./hero-subjects";
import { ContentSections } from "./content-section";
import { CrossLinkStrip } from "./cross-link-strip";
import { ScenarioBlock } from "./scenario-block";
import { ProofCardGrid } from "./proof-card-grid";
import { RoleCard } from "./role-card";
import { Section } from "./section";
import { FinalCTA } from "@/components/final-cta";
import type { NarrativePageCopy, UseCasePageCopy } from "@/lib/site-copy";
import { proofCards, useCaseHubCards } from "@/lib/site-copy";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function heroExtras(path: string) {
  switch (path) {
    case "/spineworkspace":
      return { tone: "ice" as const, art: <DataFabricPanel />, work: <ExampleWork variant="strip" /> };
    case "/business-context":
      return { art: <RecordsPanel /> };
    case "/twin":
      return { art: <TwinReviewPanel /> };
    case "/adaptive-workspace":
      return { art: <RoleViewPanel /> };
    case "/host-connected-environment":
      return { art: <AppCluster /> };
    case "/governance":
      return { art: <GovernancePanel /> };
    case "/continuity":
      return { art: <CheckpointPanel /> };
    case "/proof":
      return { principle: "Illustrative product scenarios. Not measured customer outcomes." };
    default:
      return {};
  }
}

export function NarrativePageContent({ page, showProofCards }: { page: NarrativePageCopy; showProofCards?: boolean }) {
  return (
    <>
      <PageHero {...page.hero} {...heroExtras(page.meta.path)} />
      <ContentSections sections={page.sections} />
      {showProofCards && (
        <Section variant="muted">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">
            Demonstration · not measured customer outcomes
          </p>
          <ProofCardGrid cards={proofCards} />
        </Section>
      )}
      {page.scenario && (
        <ScenarioBlock headline={page.scenario.headline} body={page.scenario.body} steps={page.scenario.steps} />
      )}
      {page.crossLinks && <CrossLinkStrip {...page.crossLinks} />}
      {page.finalCta ? (
        <section className="border-t border-[#D9E4EF] bg-[#EAF5FC]">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-16">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-[length:min(32px,var(--marketing-heading-size))] font-semibold tracking-[-0.03em] leading-[1.2] text-[#032D60] sm:text-[length:min(40px,var(--marketing-heading-size))]">
                {page.finalCta.headline}
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-10 rounded-md bg-[#0176D3] px-5 font-semibold text-white hover:bg-[#0B5CAB]"
                  asChild
                >
                  <Link href={page.finalCta.primaryCta.href}>{page.finalCta.primaryCta.label}</Link>
                </Button>
                {page.finalCta.secondaryCta && (
                  <Button size="lg" variant="outline" className="h-10 rounded-md border-[#D9E4EF] bg-white text-[#032D60] hover:bg-[#F3F6F9]" asChild>
                    <Link href={page.finalCta.secondaryCta.href}>{page.finalCta.secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <FinalCTA />
      )}
    </>
  );
}

export function UseCasePageContent({ page }: { page: UseCasePageCopy }) {
  return (
    <>
      <PageHero {...page.hero} />
      {page.scenario && (
        <ScenarioBlock headline={page.scenario.headline} body={page.scenario.body} steps={page.scenario.steps} />
      )}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {page.topics.map((topic, i) => (
            <div
              key={topic.title}
              className="rounded-md border border-[#E5E5E5] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-[17px] font-semibold text-[#032D60]">{topic.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[#444]">{topic.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}

export function HubPageContent({
  hero,
  cards,
}: {
  hero: NarrativePageCopy["hero"];
  cards: { title: string; description: string; href: string }[];
}) {
  return (
    <>
      <PageHero {...hero} />
      <Section variant="muted">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <RoleCard key={card.href} {...card} index={i} />
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}

export function UseCasesHubContent({ hero }: { hero: NarrativePageCopy["hero"] }) {
  return <HubPageContent hero={hero} cards={useCaseHubCards} />;
}

export function DevelopersHubContent({ page, showFinalCta = true }: { page: NarrativePageCopy; showFinalCta?: boolean }) {
  return (
    <>
      <PageHero {...page.hero} />
      <ContentSections sections={page.sections} />
      {showFinalCta && <FinalCTA />}
    </>
  );
}
