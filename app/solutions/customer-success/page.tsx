import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { CustomerSuccessRoleContent } from "./content"

export const metadata: Metadata = {
  title: "Customer Success & Account Managers | IntegrateWise",
  description:
    "Save at-risk accounts. Accelerate renewals. Surface expansion signals.",
}

export default function CustomerSuccessRolePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <CustomerSuccessRoleContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
