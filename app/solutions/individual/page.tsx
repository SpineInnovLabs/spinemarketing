import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { IndividualContent } from "./content"

export const metadata: Metadata = {
  title: "Individual Professionals | IntegrateWise",
  description:
    "Your personal workspace. Morning briefing, session memory, promise tracker, weekly planning — all in one place, built over the Spine.",
}

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-[rgb(8,7,14)]">
      <Header />
      <main id="main">
        <IndividualContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
