import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"
import { ContactOnboardingGather } from "./sticky-sections"

export const metadata: Metadata = {
  title: "Contact | IntegrateWise",
  description:
    "Book a demo or request a connector. We connect your tools live.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <ContactContent defaultIntent="contact" />
        <ContactOnboardingGather />
      </main>
      <Footer />
    </div>
  )
}
