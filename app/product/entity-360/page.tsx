import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { Entity360Content } from "./content"

export const metadata: Metadata = {
  title: "Entity 360 | IntegrateWise Product",
  description:
    "The Universal Data Object Interface — Account, Contact, Deal, and Project as unified canonical objects with relation graphs, temporal views, and conflict resolution.",
}

export default function Entity360Page() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <Entity360Content />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
