import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { StatsBar } from "@/components/stats-bar"
import { IntegrationShowcase } from "@/components/integration-showcase"
import { PlatformIntegrationsContent } from "./content"
import { IntegrationsStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Integrations | SpineWorkspace Platform",
  description:
    "SaaS APIs, MCP, webhooks, and file drops — all through one normalization pipeline into Spine Fabric.",
  alternates: { canonical: "/platform/integrations" },
  openGraph: {
    title: "Integrations | SpineWorkspace Platform",
    description: "SaaS APIs, MCP, webhooks, and file drops — all through one normalization pipeline into Spine Fabric.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformIntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Platform", url: "https://spineinnovlabs.com/platform" },
        { name: "Integrations", url: "https://spineinnovlabs.com/platform/integrations" },
      ]} />
      <Header />
      <main id="main">
        <PlatformIntegrationsContent />
        <StatsBar
          stats={[
            { value: 65, label: "Catalog connectors" },
            { value: 4, label: "Protocol types supported" },
            { value: 60, label: "With brand marks" },
            { value: 1, label: "Normalization pipeline" },
          ]}
        />
        <IntegrationsStickyScroll />
        <IntegrationShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
