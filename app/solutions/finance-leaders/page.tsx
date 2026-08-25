import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { FinanceLeadersContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Finance Leaders | SpineWorkspace",
  description:
    "Cash, collections, runway — accounting, billing, and CRM unified.",
  alternates: { canonical: "/solutions/finance-leaders" },
  openGraph: {
    title: "Finance Leaders | SpineWorkspace",
    description: "Cash, collections, runway — accounting, billing, and CRM unified.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function FinanceLeadersPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Solutions", url: "https://integratewise.ai/solutions" },
        { name: "Finance Leaders", url: "https://integratewise.ai/solutions/finance-leaders" },
      ]} />
      <Header />
      <main id="main">
        <FinanceLeadersContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
