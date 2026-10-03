import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformHubIntro } from "./hub"
import { PlatformFAQ } from "./faq"
import { PlatformStickyScroll } from "./sticky-sections"
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Platform — The platform behind SpineWorkspace",
  description:
    "The tools keep the record. The workspace shows the work. Twin proposes only when asked. A person decides.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Platform | SpineWorkspace",
    description: "One connection to the tools you already use. The tools keep the record. A person decides.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineinnovlabs.com" },
        { name: "Platform", url: "https://spineinnovlabs.com/platform" },
      ]} />
      <Header />
      <main id="main">
        <PlatformHubIntro />
        <PlatformStickyScroll />
        <PlatformFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
