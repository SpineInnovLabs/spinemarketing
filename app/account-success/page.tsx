import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AccountSuccessContent } from "./content"

export const metadata: Metadata = {
  title: "Account Success | IntegrateWise",
  description:
    "Turn scattered account data into a living complete view. Spot risks early, act on signals, and protect revenue — AI proposes, you approve.",
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
