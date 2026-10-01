import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"
import { AboutJourneyScroll, AboutPlatformGather } from "./sticky-sections"
import { StatsBar } from "@/components/stats-bar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "About | SpineWorkspace",
  description:
    "Born from a real $8M account save. One Spine Fabric. One Workspace. You stay in control.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | SpineWorkspace",
    description: "Born from a real $8M account save. One Spine Fabric. One Workspace. You stay in control.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "About", url: "https://spineworkspace.com/about" },
      ]} />
      <Header />
      <main id="main">
        <AboutContent />
        <AboutJourneyScroll />
        <StatsBar
          stats={[
            { value: 13, suffix: "+", label: "Years of integration" },
            { value: 8, suffix: "M", prefix: "$", label: "First account saved" },
            { value: 70, suffix: "+", label: "Systems connected" },
            { value: 5, suffix: "", label: "Industries served" },
          ]}
        />
        <AboutPlatformGather />
        <TestimonialsSection heading="Why teams trust SpineWorkspace." />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
