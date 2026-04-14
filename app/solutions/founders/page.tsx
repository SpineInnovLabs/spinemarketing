import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FoundersContent } from "./content"

export const metadata: Metadata = {
  title: "Founders & CXOs | IntegrateWise",
  description:
    "Monday brief. Revenue movement. Board pack — available in seconds.",
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <FoundersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
