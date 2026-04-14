import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { StatsBar } from "@/components/stats-bar"
import { IntegrationShowcase } from "@/components/integration-showcase"
import { PlatformIntegrationsContent } from "./content"
import { IntegrationsStickyScroll } from "./sticky-sections"

export const metadata: Metadata = {
  title: "Integrations | IntegrateWise Platform",
  description:
    "SaaS APIs, MCP, webhooks, and file drops — all through one normalization pipeline into the Spine.",
}

export default function PlatformIntegrationsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PlatformIntegrationsContent />
        <StatsBar
          stats={[
            { value: 60, suffix: "+", label: "SaaS connectors" },
            { value: 4, label: "Protocol types supported" },
            { value: 5, prefix: "< ", suffix: " min", label: "Average connector setup" },
            { value: 99, suffix: ".9%", label: "Ingestion uptime" },
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
