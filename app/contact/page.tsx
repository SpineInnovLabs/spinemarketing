import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact | IntegrateWise",
  description:
    "Get in touch with IntegrateWise. Book a demo, request a connector, or talk to our team about your integration challenges.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <ContactContent defaultIntent="contact" />
      </main>
      <Footer />
    </div>
  )
}
