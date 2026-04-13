import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PersonalOpsContent } from "./content"

export const metadata: Metadata = {
  title: "Personal Ops | IntegrateWise",
  description:
    "Your personal Knowledge Workspace. Connect your apps, work in L1, let the Twin surface insights in L2 — and approve what actually happens.",
}

export default function PersonalOpsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <PersonalOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
