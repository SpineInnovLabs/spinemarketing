import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Integrations | IntegrateWise",
  description:
    "70+ apps connected into one Spine. Salesforce, HubSpot, Slack, Stripe, and more.",
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <IntegrationsContent />
        <StatsBar
          stats={[
            { value: 70, suffix: "+", label: "App connectors" },
            { value: 3, suffix: "", label: "Connector types" },
            { value: 100, suffix: "ms", prefix: "< ", label: "Sync latency" },
            { value: 0, suffix: "", label: "Code required" },
          ]}
        />
        <TestimonialsSection
          heading="Teams connected through the Spine."
          tag="Integration Stories"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
