import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FinanceIndustryContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Finance | SpineWorkspace Solutions",
  description:
    "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
  alternates: { canonical: "/solutions/finance" },
  openGraph: {
    title: "Finance | SpineWorkspace Solutions",
    description: "Revenue, risk, collections, cash — the financial picture that finance leaders actually need to run the business.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Finance", url: "https://integratewise.ai/solutions/finance" },
      ]} />
      <Header />
      <main id="main">
        <FinanceIndustryContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
