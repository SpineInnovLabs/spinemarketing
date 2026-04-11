import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AIContent } from "./content"

export const metadata: Metadata = {
  title: "The Twin | IntegrateWise",
  description:
    "One AI that reads your data, your conversations, and your accumulated knowledge. The Twin proposes — you approve. Nothing happens without your say.",
}

export default function AIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <AIContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
