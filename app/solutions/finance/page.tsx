import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FinanceIndustryContent } from "./content"

export const metadata: Metadata = {
  title: "Finance | IntegrateWise Solutions",
  description:
    "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
}

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <FinanceIndustryContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
