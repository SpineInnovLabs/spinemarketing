import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SecurityContent } from "./content"

export const metadata: Metadata = {
  title: "Security | IntegrateWise",
  description:
    "Enterprise-grade security, governance, and compliance. SOC 2 aligned, encrypted at rest and in transit, with complete audit trails.",
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <SecurityContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
