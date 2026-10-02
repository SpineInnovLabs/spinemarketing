import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"
import { AboutJourneyScroll, AboutPlatformGather } from "./sticky-sections"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "About | SpineWorkspace",
  description:
    "Why Spine InnovLabs builds SpineWorkspace, the business-context workspace.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | SpineWorkspace",
    description: "Why Spine InnovLabs builds SpineWorkspace, the business-context workspace.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "About", url: "https://spineinnovlabs.com/about" },
      ]} />
      <Header />
      <main id="main">
        <AboutContent />
        <AboutJourneyScroll />
        <AboutPlatformGather />
        <TestimonialsSection
          heading="Illustrative scenarios"
          tag="Demonstration, not customer quotes"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
