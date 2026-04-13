import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { RetailContent } from "./content"

export const metadata: Metadata = {
  title: "Retail & Ecommerce | IntegrateWise Solutions",
  description:
    "Stock, orders, returns, support — every signal connected so teams act before problems become complaints.",
}

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <RetailContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
