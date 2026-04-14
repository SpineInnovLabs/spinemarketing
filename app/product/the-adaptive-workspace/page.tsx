import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheAdaptiveWorkspaceContent } from "./content"
import { WorkspaceGather } from "./sticky-sections"

export const metadata: Metadata = {
  title: "The Adaptive Workspace | IntegrateWise Product",
  description:
    "Role-based views built on Entity 360. Nine workspace views, one canonical truth.",
}

export default function TheAdaptiveWorkspacePage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <TheAdaptiveWorkspaceContent />
        <WorkspaceGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
