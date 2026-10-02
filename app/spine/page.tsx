import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Spine & Intelligence | SpineWorkspace",
  description:
    "Spine Fabric: the shared contextual layer under your business. Unifies every app. AI reasons with evidence. You approve.",
  alternates: { canonical: "/spine" },
  openGraph: {
    title: "Spine & Intelligence | SpineWorkspace",
    description: "Spine Fabric: the shared contextual layer under your business. Unifies every app. AI reasons with evidence. You approve.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Spine & Intelligence", url: "https://spineinnovlabs.com/spine" },
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
