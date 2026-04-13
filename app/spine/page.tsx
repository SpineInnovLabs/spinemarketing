import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { SpineContent } from "./content"

export const metadata: Metadata = {
  title: "Spine & Intelligence | IntegrateWise",
  description:
    "The Spine is the adaptive, vendor-neutral intelligence layer that unifies structured and unstructured data from every app. AI reasons with evidence. Every action waits for human approval.",
}

export default function SpinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <SpineContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
