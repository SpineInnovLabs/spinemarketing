import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FoundersContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Founders & CXOs | IntegrateWise",
  description:
    "Monday brief. Revenue movement. Board pack — available in seconds.",
  alternates: { canonical: "/solutions/founders" },
  openGraph: {
    title: "Founders & CXOs | IntegrateWise",
    description: "Monday brief. Revenue movement. Board pack — available in seconds.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Founders & CXOs", url: "https://integratewise.ai/solutions/founders" },
      ]} />
      <Header />
      <main id="main">
        <FoundersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
