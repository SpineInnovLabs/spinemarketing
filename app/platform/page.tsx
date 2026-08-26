import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"
import { PlatformFAQ } from "./faq"
import { StatsBar } from "@/components/stats-bar"
import { BentoShowcase } from "@/components/bento-showcase"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PlatformStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Platform | SpineWorkspace",
  description:
    "The Adaptive Spine. Connects every app. Governs every AI action. Nothing happens without your approval.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Platform | SpineWorkspace",
    description: "The Adaptive Spine. Connects every app. Governs every AI action. Nothing happens without your approval.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Platform", url: "https://integratewise.ai/platform" },
      ]} />
      <Header />
      <main id="main">
        <PlatformContent />
        <StatsBar />
        <PlatformStickyScroll />
        <BentoShowcase
          tag="The Workspace"
          heading="See it all. Act on what matters."
          subheading="The Workspace shows your accounts. The Twin surfaces what you'd miss."
        />
        <ComparisonSection />
        <TestimonialsSection />
        <PlatformFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
