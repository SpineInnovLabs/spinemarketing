import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SolutionsContent } from "./content"
import { StatsBar } from "@/components/stats-bar"
import { BenefitsGrid } from "@/components/benefits-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Solutions — Functional workbenches for every team",
  description:
    "Public marketing pages for SpineWorkspace functional solutions. Each maps to authenticated workbench projections on spineworkspace.com.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | SpineWorkspace",
    description: "One Spine Fabric. Workspace for daily work, Twin for AI. Built for every function, industry, and role.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Solutions", url: "https://spineworkspace.com/solutions" },
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
          tag="Why SpineWorkspace"
          heading="Same Spine. Every context."
        />
        <TestimonialsSection heading="Teams already using SpineWorkspace." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
