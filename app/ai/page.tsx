import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AIContent } from "./content"
import { BentoShowcase } from "@/components/bento-showcase"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "The Twin | IntegrateWise",
  description:
    "The Twin reads Truth, Context, and Session Summaries through the Spine. Surfaces signals in the Cognitive Layer and waits for your approval.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "The Twin | IntegrateWise",
    description: "The Twin reads Truth, Context, and Session Summaries through the Spine. Surfaces signals in the Cognitive Layer and waits for your approval.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function AIPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "The Twin", url: "https://integratewise.ai/ai" },
      ]} />
      <Header />
      <main id="main">
        <AIContent />
        <BentoShowcase
          tag="Intelligence in action"
          heading="Watch the Twin work."
          subheading="Morning briefs, action proposals, and session memory — all governed by you."
        />
        <ComparisonSection
          heading="AI that earns trust."
          subheading="Evidence-backed proposals. Human approval gates. Full audit trail."
          rows={[
            { feature: "Evidence chains on every suggestion", us: true, others: false },
            { feature: "Human approval before any action", us: true, others: false },
            { feature: "Session memory compounds over time", us: true, others: false },
            { feature: "Confidence scores on insights", us: true, others: false },
            { feature: "Immutable decision audit log", us: true, others: "Partial" },
            { feature: "Works with your existing tools", us: true, others: true },
            { feature: "Context from all connected apps", us: true, others: false },
            { feature: "Draft previews before execution", us: true, others: false },
          ]}
        />
        <TestimonialsSection heading="What teams say about the Twin." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
