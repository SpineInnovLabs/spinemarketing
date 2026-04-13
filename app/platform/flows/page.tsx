import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformFlowsContent } from "./content"

export const metadata: Metadata = {
  title: "Flows | IntegrateWise Platform",
  description:
    "Processing loops and system dynamics — Flow C Triage, Twin Activation, Tool→Truth and Context→Truth operational loops.",
}

export default function PlatformFlowsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <PlatformFlowsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
