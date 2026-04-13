import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FinanceLeadersContent } from "./content"

export const metadata: Metadata = {
  title: "Finance Leaders | IntegrateWise",
  description:
    "Cash, collections, runway, burn — the financial workspace that connects accounting, billing, and CRM into one picture.",
}

export default function FinanceLeadersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <FinanceLeadersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
