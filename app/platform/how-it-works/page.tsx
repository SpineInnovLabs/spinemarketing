import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHowItWorksContent } from "./content"
import { HowItWorksGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "How it Works | IntegrateWise Platform",
  description:
    "Data flows, identity resolution, knowledge base, and the triage mechanism that powers the Adaptive Spine.",
  alternates: { canonical: "/platform/how-it-works" },
  openGraph: {
    title: "How it Works | IntegrateWise Platform",
    description: "Data flows, identity resolution, knowledge base, and the triage mechanism that powers the Adaptive Spine.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function PlatformHowItWorksPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Platform", url: "https://integratewise.ai/platform" },
        { name: "How it Works", url: "https://integratewise.ai/platform/how-it-works" },
      ]} />
      <Header />
      <main id="main">
        <PlatformHowItWorksContent />
        <HowItWorksGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
