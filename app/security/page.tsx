import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SecurityContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security | IntegrateWise",
  description:
    "Enterprise-grade security, governance, and compliance. SOC 2 aligned, encrypted at rest and in transit, with complete audit trails.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security | IntegrateWise",
    description: "Enterprise-grade security, governance, and compliance. SOC 2 aligned, encrypted at rest and in transit, with complete audit trails.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Security", url: "https://integratewise.ai/security" },
      ]} />
      <Header />
      <main id="main">
        <SecurityContent />
        <StatsBar
          stats={[
            { value: 256, suffix: "-bit", label: "AES encryption" },
            { value: 100, suffix: "%", label: "Audit coverage" },
            { value: 0, suffix: "", label: "Trust assumptions" },
            { value: 24, suffix: "/7", label: "Monitoring" },
          ]}
        />
        <ComparisonSection
          heading="Security you can verify."
          subheading="Every action logged. Every suggestion sourced. Every decision auditable."
          rows={[
            { feature: "Immutable audit trail", us: true, others: "Partial" },
            { feature: "AES-256 encryption at rest", us: true, others: true },
            { feature: "TLS 1.3 in transit", us: true, others: true },
            { feature: "Human approval gates on AI", us: true, others: false },
            { feature: "SOC 2 Type II alignment", us: true, others: "Varies" },
            { feature: "Field-level access control", us: true, others: false },
            { feature: "Evidence chains on every action", us: true, others: false },
            { feature: "Zero-trust architecture", us: true, others: false },
          ]}
        />
        <TestimonialsSection
          heading="Security teams trust IntegrateWise."
          tag="Security Stories"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
