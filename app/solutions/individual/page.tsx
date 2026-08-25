import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IndividualContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Individual Professionals | SpineWorkspace",
  description:
    "Morning brief, session memory, task queue — your day, organized.",
  alternates: { canonical: "/solutions/individual" },
  openGraph: {
    title: "Individual Professionals | SpineWorkspace",
    description: "Morning brief, session memory, task queue — your day, organized.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Individual", url: "https://integratewise.ai/solutions/individual" },
      ]} />
      <Header />
      <main id="main">
        <IndividualContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
