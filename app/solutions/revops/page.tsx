import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RevOpsContent } from "./content"

export const metadata: Metadata = {
  title: "RevOps & Business Operations | IntegrateWise",
  description:
    "Pipelines, headcount, projects, exceptions — connected and actionable.",
}

export default function RevOpsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <RevOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
