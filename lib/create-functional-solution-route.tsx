import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { FunctionalSolutionPage } from "@/components/marketing/functional-solution-page";
import type { PublicSolution } from "@/lib/solution-taxonomy";

export function createFunctionalSolutionRoute(solution: PublicSolution) {
  const metadata = createPageMetadata({
    title: `${solution.name} | Spine InnovTech`,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
  });

  function Page() {
    const breadcrumbs = breadcrumb(`/solutions/${solution.slug}`, solution.name, [
      { name: "Solutions", path: "/solutions" },
    ]);
    return (
      <MarketingPageShell breadcrumbs={breadcrumbs}>
        <FunctionalSolutionPage solution={solution} />
      </MarketingPageShell>
    );
  }

  return { metadata, Page };
}
