import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ManufacturingContent } from "./content"

export const metadata: Metadata = {
  title: "Manufacturing & Trade | IntegrateWise Solutions",
  description:
    "Orders, shipments, payments — live across ERP, CRM, and logistics.",
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ManufacturingContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
