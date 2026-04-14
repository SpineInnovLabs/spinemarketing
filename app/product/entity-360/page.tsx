import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { Entity360Content } from "./content"

export const metadata: Metadata = {
  title: "Entity 360 | IntegrateWise Product",
  description:
    "Unified canonical objects. Accounts, contacts, deals — with relation graphs and conflict resolution.",
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
