import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine & Intelligence | SpineWorkspace",
  description:
    "Vendor-neutral data backbone. Unifies every app. AI reasons with evidence. You approve.",
  alternates: { canonical: "/spine" },
  openGraph: {
    title: "Spine & Intelligence | SpineWorkspace",
    description: "Vendor-neutral data backbone. Unifies every app. AI reasons with evidence. You approve.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Spine & Intelligence", url: "https://integratewise.ai/spine" },
      ]} />
      <Header />
      <main id="main">
        <SpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
