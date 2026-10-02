"use client";

import { PageHero } from "./page-hero";
import { Section, SectionHeader } from "./section";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";
import { FinalCTA } from "@/components/final-cta";
import type { PublicSolution } from "@/lib/solution-taxonomy";

export function FunctionalSolutionPage({ solution }: { solution: PublicSolution }) {
  return (
    <>
      <PageHero
        badge={solution.name}
        headline={solution.headline}
        subhead={solution.description}
        primaryCta={{ label: "Book a demo", href: "/contact?intent=demo" }}
        secondaryCta={{ label: "See practical scenarios", href: "/use-cases" }}
        art={
          <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Example scenario · demonstration data</p>
            <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">{solution.name}</h2>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div>
                <dt className="font-semibold text-[#032D60]">Goal</dt>
                <dd className="text-[#33465B]">{solution.headline}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Evidence</dt>
                <dd className="text-[#33465B]">Records this team already keeps. Source systems stay authoritative.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Next action</dt>
                <dd className="text-[#33465B]">{solution.description}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Human decision</dt>
                <dd className="font-semibold text-[#0176D3]">Awaiting review</dd>
              </div>
            </dl>
          </div>
        }
      />
      <Section variant="muted">
        <SectionHeader headline={`The ${solution.name} job`} body={solution.buyerSummary} />
      </Section>
      <WorkspaceProjectionCta solution={solution} />
      <FinalCTA />
    </>
  );
}
