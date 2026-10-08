import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SecurityNarrativeIntro } from "./narrative-intro"
import { SecurityContent } from "./content"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security & Governance | Spine InnovLabs",
  description:
    "Enterprise security, governance, and auditability for Spine Workspace. No certification is claimed on this page.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security & Governance | Spine InnovLabs",
    description: "Enterprise security, governance, and auditability for Spine Workspace. No certification is claimed on this page.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Security", url: absoluteUrl("/security") },
      ]} />
      <Header />
      <main id="main">
        <SecurityNarrativeIntro />
        <SecurityContent />
        <ComparisonSection
          heading="Security you can verify."
          subheading="Every action logged. Every suggestion sourced. Every decision auditable."
          rows={[
            { feature: "Immutable audit trail", us: true, others: "Partial" },
            { feature: "AES-256 encryption at rest", us: true, others: true },
            { feature: "TLS 1.3 in transit", us: true, others: true },
            { feature: "Human approval on consequential AI actions", us: true, others: false },
            { feature: "Field-level access control", us: true, others: false },
            { feature: "Evidence chains on every action", us: true, others: false },
            { feature: "Evidence linked to each reviewed action", us: true, others: false },
          ]}
        />
        <TestimonialsSection
          heading="Illustrative security scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
