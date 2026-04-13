import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { OperationsContent } from "./content"

export const metadata: Metadata = {
  title: "Operations & Delivery Leaders | IntegrateWise",
  description:
    "Utilisation, delivery, exceptions, escalations — the live view that keeps projects on track and clients happy.",
}

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <OperationsContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
