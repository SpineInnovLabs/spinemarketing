import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHowItWorksContent } from "./content"
import { HowItWorksGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "How it Works | SpineWorkspace Platform",
  description:
    "Data flows, identity resolution, knowledge base, and the triage mechanism that powers Spine Fabric.",
  alternates: { canonical: "/platform/how-it-works" },
  openGraph: {
    title: "How it Works | SpineWorkspace Platform",
    description: "Data flows, identity resolution, knowledge base, and the triage mechanism that powers Spine Fabric.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformHowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Platform", url: "https://spineinnovlabs.com/platform" },
        { name: "How it Works", url: "https://spineinnovlabs.com/platform/how-it-works" },
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
