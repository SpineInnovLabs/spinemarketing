import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AIContent } from "./content"

export const metadata: Metadata = {
  title: "The Twin | IntegrateWise",
  description:
    "The Twin reads Truth, Context, and Session Summaries through the Spine. Surfaces signals in the Intelligence Layer and waits for your approval.",
}

export default function AIPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <AIContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
