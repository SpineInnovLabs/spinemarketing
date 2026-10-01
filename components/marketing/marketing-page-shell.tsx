import { Header } from "@/components/header-client";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export function MarketingPageShell({
  breadcrumbs,
  children,
  initiallyHiddenHeader = false,
}: {
  breadcrumbs: { name: string; url: string }[];
  children: React.ReactNode;
  initiallyHiddenHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Header initiallyHidden={initiallyHiddenHeader} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
