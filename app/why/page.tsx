import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { WhyContent } from "./content"
import { WhyPainScroll, WhyAnswerGather } from "./sticky-sections"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Why SpineWorkspace | One Spine. One Workspace. Governed AI.",
  description:
    "Apps are fragmented. AI lacks context. SpineWorkspace unifies everything under your control.",
  alternates: { canonical: "/why" },
  openGraph: {
    title: "Why SpineWorkspace | One Spine. One Workspace. Governed AI.",
    description: "Apps are fragmented. AI lacks context. SpineWorkspace unifies everything under your control.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Why IntegrateWise", url: "https://integratewise.ai/why" },
      ]} />
      <Header />
      <main id="main">
        <WhyContent />
        <WhyPainScroll />
        <ComparisonSection
          heading="Stop stitching. Start seeing."
          subheading="IntegrateWise replaces fragmented dashboards with one governed workspace."
        />
        <WhyAnswerGather />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
