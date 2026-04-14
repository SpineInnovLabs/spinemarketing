import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IndividualContent } from "./content"

export const metadata: Metadata = {
  title: "Individual Professionals | IntegrateWise",
  description:
    "Morning brief, session memory, task queue — your day, organized.",
}

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <IndividualContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
