import { createPageMetadata, breadcrumb } from "@/lib/page-metadata";
import { MarketingPageShell } from "@/components/marketing/marketing-page-shell";
import { DevelopersHubContent } from "@/components/marketing/narrative-page";
import { pages } from "@/lib/site-copy";

export const metadata = createPageMetadata(pages.developers.meta);

export default function DevelopersPage() {
  const breadcrumbs = breadcrumb("/developers", "Developers");
  return (
    <MarketingPageShell breadcrumbs={breadcrumbs}>
      <DevelopersHubContent page={pages.developers} />
    </MarketingPageShell>
  );
}
