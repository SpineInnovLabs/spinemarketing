import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IntegrationShowcase } from "@/components/integration-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TheAdaptiveSpineContent } from "./content"
import { SpineStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "The Adaptive Spine | IntegrateWise Platform",
  description:
    "The Adaptive Spine — vendor-neutral data layer converting fragmented SaaS into one versioned source of truth.",
  alternates: { canonical: "/platform/the-adaptive-spine" },
  openGraph: {
    title: "The Adaptive Spine | IntegrateWise Platform",
    description: "The Adaptive Spine — vendor-neutral data layer converting fragmented SaaS into one versioned source of truth.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function TheAdaptiveSpinePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Platform", url: "https://integratewise.ai/platform" },
        { name: "The Adaptive Spine", url: "https://integratewise.ai/platform/the-adaptive-spine" },
      ]} />
      <Header />
      <main id="main">
        <TheAdaptiveSpineContent />
        <SpineStickyScroll />
        <IntegrationShowcase
          tag="Works With Everything"
          heading={<>Your tools, <span className="text-primary">unified.</span></>}
        />
        <TestimonialsSection heading="Why teams trust the Spine." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
