import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RevOpsContent } from "./content"

export const metadata: Metadata = {
  title: "RevOps & Business Operations | IntegrateWise",
  description:
    "One workspace for the operating layer. Pipelines, headcount, projects, exceptions — connected and actionable over the Spine.",
}

export default function RevOpsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <RevOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
