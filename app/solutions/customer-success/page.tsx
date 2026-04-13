import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { CustomerSuccessRoleContent } from "./content"

export const metadata: Metadata = {
  title: "Customer Success & Account Managers | IntegrateWise",
  description:
    "Save at-risk accounts. Accelerate renewals. Surface expansion. All from one workspace that reads every signal across every connected app.",
}

export default function CustomerSuccessRolePage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <CustomerSuccessRoleContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
