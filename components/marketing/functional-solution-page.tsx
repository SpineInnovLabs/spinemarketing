import { PageHero } from "./page-hero";
import { SolutionDomainFeatures } from "./solution-domain-features";
import { SolutionHeroBanner } from "./solution-hero-banner";
import { WorkspaceProjectionCta } from "./workspace-projection-cta";
import { solutionHeroFromPublic } from "@/lib/buyer-clarity";
import type { PublicSolution } from "@/lib/solution-taxonomy";
import { getSolutionDomain } from "@/lib/solution-domains";

const stepLabels = ["Situation", "Twin prepares", "Authorized next step"];

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
          <SolutionHeroBanner
            variant="steps"
            kicker={solution.name}
            items={domain.workflow.map((step, index) => ({
              label: stepLabels[index] ?? "Next",
              title: step,
            }))}
          />
        }
      />
      <SolutionDomainFeatures slug={solution.slug} />
      <WorkspaceProjectionCta solution={solution} />
    </>
  );
}
