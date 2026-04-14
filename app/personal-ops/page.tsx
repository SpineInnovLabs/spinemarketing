import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PersonalOpsContent } from "./content"

export const metadata: Metadata = {
  title: "Personal Ops | IntegrateWise",
  description:
    "Your personal workspace. Connect apps, surface insights, approve what happens.",
}

export default function PersonalOpsPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <PersonalOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
