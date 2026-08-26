import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ProductHowItWorksContent } from "./content"
import { IntelligenceStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "How it Works | SpineWorkspace Product",
  description:
    "The Twin — proactive signals, morning briefs, pattern detection, and evidence-backed reasoning.",
  alternates: { canonical: "/product/how-it-works" },
  openGraph: {
    title: "How it Works | SpineWorkspace Product",
    description: "The Twin — proactive signals, morning briefs, pattern detection, and evidence-backed reasoning.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ProductHowItWorksPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Product", url: "https://integratewise.ai/product" },
        { name: "How it Works", url: "https://integratewise.ai/product/how-it-works" },
      ]} />
      <Header />
      <main id="main">
        <ProductHowItWorksContent />
        <IntelligenceStickyScroll />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
