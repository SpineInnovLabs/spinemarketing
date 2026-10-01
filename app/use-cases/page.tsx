import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { UseCasesHubContent } from "@/components/marketing/narrative-page";
import { pages } from "@/lib/site-copy";

export const metadata = createPageMetadata(pages.useCasesHub.meta);

export default function UseCasesPage() {
  const breadcrumbs = breadcrumb("/use-cases", "Use Cases");
  return (
    <MarketingPageShell breadcrumbs={breadcrumbs}>
      <UseCasesHubContent hero={pages.useCasesHub.hero} />
    </MarketingPageShell>
  );
}
