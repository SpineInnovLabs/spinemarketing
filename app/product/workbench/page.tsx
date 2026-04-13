import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { WorkbenchContent } from "./content"

export const metadata: Metadata = {
  title: "Workbench | IntegrateWise Product",
  description:
    "Layer 1: The domain-specific workspace. 12 schema-driven, role-aware views that auto-reconstruct when new SaaS tools are connected.",
}

export default function WorkbenchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <WorkbenchContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
