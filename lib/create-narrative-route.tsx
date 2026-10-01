import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { NarrativePageContent } from "@/components/marketing/narrative-page";
import type { NarrativePageCopy } from "@/lib/site-copy";

export function createNarrativeRoute(
  page: NarrativePageCopy,
  options?: { breadcrumbParents?: { name: string; path: string }[]; showProofCards?: boolean },
) {
  const metadata = createPageMetadata(page.meta);
  const breadcrumbs = breadcrumb(page.meta.path, page.meta.title.split(" — ")[0] || page.meta.title, options?.breadcrumbParents);

  function Page() {
    return (
      <MarketingPageShell breadcrumbs={breadcrumbs}>
        <NarrativePageContent page={page} showProofCards={options?.showProofCards} />
      </MarketingPageShell>
    );
  }

  return { metadata, Page };
}
