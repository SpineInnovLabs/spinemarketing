import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"
import { ContactOnboardingGather } from "./sticky-sections"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Contact | SpineWorkspace",
  description:
    "Book a demo or request a connector. We connect your tools live.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | SpineWorkspace",
    description: "Book a demo or request a connector. We connect your tools live.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Contact", url: "https://integratewise.ai/contact" },
      ]} />
      <Header />
      <main id="main">
        <ContactContent defaultIntent="contact" />
        <ContactOnboardingGather />
      </main>
      <Footer />
    </div>
  )
}
