import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FoundersContent } from "./content"

export const metadata: Metadata = {
  title: "Founders & CXOs | IntegrateWise",
  description:
    "Your Monday brief. Revenue movement. Board pack. The business view that takes 30 minutes to build — available in seconds over the Spine.",
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
