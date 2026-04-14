import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AccountSuccessContent } from "./content"

export const metadata: Metadata = {
  title: "Resolution | IntegrateWise",
  description:
    "Cross-tool entity matching and dedup. Confidence scoring with human review.",
}

export default function AccountSuccessPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <AccountSuccessContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
