import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Solutions by Team & Industry | Spine InnovTech",
  description:
    "Start with the Renewal Decision Workspace for customer-success and RevOps. Each functional solution describes the operational job and first workflow to deploy.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions by Team & Industry | Spine InnovTech",
    description: "Most teams begin with Renewal Decision Workspace for CS and RevOps, then expand to other functions.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace Solutions" }],
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Solutions", url: absoluteUrl("/solutions") },
      ]} />
      <Header />
      <main id="main">
        <SolutionsContent />
        <StatsBar
          stats={[
            { value: 6, suffix: "", label: "Industries served" },
            { value: 6, suffix: "", label: "Roles supported" },
            { value: 3, suffix: "", label: "Function workspaces" },
            { value: 1, suffix: "", label: "Unified Spine" },
          ]}
        />
        <BenefitsGrid
          tag="Why Spine Workspace"
          heading="Same Spine. Every context."
        />
        <TestimonialsSection
          heading="Illustrative solution scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
