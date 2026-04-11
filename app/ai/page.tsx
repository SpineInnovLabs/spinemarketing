import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AIContent } from "./content"

export const metadata: Metadata = {
  title: "AI & Approvals | IntegrateWise",
  description:
    "7 specialized AI assistants — every recommendation is evidence-backed, every action requires your approval.",
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
