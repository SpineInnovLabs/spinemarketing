"use client";

import { PageHero } from "./page-hero";
import { Section, SectionHeader } from "./section";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";
import { FinalCTA } from "@/components/final-cta";
import { solutionHeroFromPublic } from "@/lib/buyer-clarity";
import type { PublicSolution } from "@/lib/solution-taxonomy";

export function FunctionalSolutionPage({ solution }: { solution: PublicSolution }) {
  const hero = solutionHeroFromPublic(solution);
  const path = `/solutions/${solution.slug}`;

  return (
    <>
      <PageHero
        buyerPath={path}
        badge={hero.badge}
        headline={hero.headline}
        subhead={hero.subhead}
        principle={hero.principle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        art={
          <div className="rounded-2xl border border-[#D9E4EF] bg-white p-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">
              Illustrative work context · not a live customer record
            </p>
            <h2 className="mt-2 text-[18px] font-semibold text-[#032D60]">{solution.name}</h2>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div>
                <dt className="font-semibold text-[#032D60]">Business question</dt>
                <dd className="text-[#33465B]">{solution.buyerSummary}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Relevant source context</dt>
                <dd className="text-[#33465B]">Relevant provider records, conversations, work history and evidence—subject to available integration and access.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Potential next step</dt>
                <dd className="text-[#33465B]">{solution.description}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Authority boundary</dt>
                <dd className="font-semibold text-[#0176D3]">Subject to authorized review</dd>
              </div>
            </dl>
          </div>
        }
      />
      <Section variant="muted">
        <SectionHeader
          label="The job to be done"
          headline={`What ${solution.name} teams stop doing manually`}
          body={solution.buyerSummary}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[20px] border border-[#D9E4EF] bg-white p-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#526479]">Without shared context</p>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">
              Operators jump between systems to reconstruct context before every review—then debate recommendations without
              a shared evidence packet.
            </p>
          </div>
          <div className="rounded-[20px] border border-[#0176D3]/25 bg-[#EAF5FC] p-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">With contextual design</p>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#33465B]">
              One governed decision packet, explicit approval, and write-back to the system that owns the record—starting
              with renewals where {solution.name} intersects customer revenue.
            </p>
          </div>
        </div>
      </Section>
      <WorkspaceProjectionCta solution={solution} />
      <FinalCTA />
    </>
  );
}
