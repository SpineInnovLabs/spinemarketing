import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Ecosystem | IntegrateWise",
  description:
    "One Ecosystem. Infinite Possibilities. Connect with 200+ pre-built connectors via OAuth in minutes. No migration. No engineering. One unified operational fabric.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Ecosystem | IntegrateWise",
    description: "Connect your entire tech stack into one unified operational ecosystem. 200+ pre-built connectors. Zero engineering required.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise Ecosystem" }],
  },
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Integrations", url: "https://integratewise.ai/integrations" },
      ]} />
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
