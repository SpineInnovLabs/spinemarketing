import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About | IntegrateWise",
  description:
    "IntegrateWise was born from a simple frustration: the tools meant to help teams work better were actually making work harder.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <AboutContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
