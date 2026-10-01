import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ApprovalGateTwinContent } from "./content"
import { ApprovalStickyScroll, ApprovalGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Governance & Twin in Action | SpineWorkspace Product",
  description:
    "AI proposes, you approve. Governed approval queues, tiered routing, Twin scoring, and 24-hour rollback.",
  alternates: { canonical: "/product/approval-gate-twin" },
  openGraph: {
    title: "Governance & Twin in Action | SpineWorkspace Product",
    description: "AI proposes, you approve. Governed approval queues, tiered routing, Twin scoring, and 24-hour rollback.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ApprovalGateTwinPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Product", url: "https://spineworkspace.com/product" },
        { name: "Governance & Twin", url: "https://spineworkspace.com/product/approval-gate-twin" },
      ]} />
      <Header />
      <main id="main">
        <ApprovalGateTwinContent />
        <ApprovalStickyScroll />
        <ApprovalGather />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
