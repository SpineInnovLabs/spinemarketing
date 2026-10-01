import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { TheAdaptiveWorkspaceContent } from "./content"
import { WorkspaceGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "The Adaptive Workspace | SpineWorkspace Product",
  description:
    "Role-based views built on Entity 360. Nine workspace views, one canonical truth.",
  alternates: { canonical: "/product/the-adaptive-workspace" },
  openGraph: {
    title: "The Adaptive Workspace | SpineWorkspace Product",
    description: "Role-based views built on Entity 360. Nine workspace views, one canonical truth.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function TheAdaptiveWorkspacePage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Product", url: "https://spineworkspace.com/product" },
        { name: "The Adaptive Workspace", url: "https://spineworkspace.com/product/the-adaptive-workspace" },
      ]} />
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
