import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { BusinessOpsContent } from "./content"

export const metadata: Metadata = {
  title: "Business Ops | IntegrateWise",
  description:
    "Unify your operational tools into one workspace. Get cross-system visibility, automate workflows, and let AI handle the busywork — with your approval.",
}

export default function BusinessOpsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <BusinessOpsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
