import { PageHero } from "./page-hero";
import { SolutionDomainFeatures } from "./solution-domain-features";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";
import { FinalCTA } from "@/components/final-cta";
import { solutionHeroFromPublic } from "@/lib/buyer-clarity";
import type { PublicSolution } from "@/lib/solution-taxonomy";
import { getSolutionDomain } from "@/lib/solution-domains";

export function FunctionalSolutionPage({ solution }: { solution: PublicSolution }) {
  const hero = solutionHeroFromPublic(solution);
  const domain = getSolutionDomain(solution.slug);

  return (
    <>
      <PageHero
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
                <dt className="font-semibold text-[#032D60]">Example work</dt>
                <dd className="text-[#33465B]">{domain.workflow[0]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Relevant source context</dt>
                <dd className="text-[#33465B]">{domain.sources.join(" · ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Potential next step</dt>
                <dd className="text-[#33465B]">{domain.workflow[1]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#032D60]">Authority boundary</dt>
                <dd className="text-[#33465B]">{domain.workflow[2]}</dd>
              </div>
            </dl>
          </div>
        }
      />
      <SolutionDomainFeatures slug={solution.slug} />
      <WorkspaceProjectionCta solution={solution} />
      <FinalCTA />
    </>
  );
}
