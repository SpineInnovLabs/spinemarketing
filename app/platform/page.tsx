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
    "Architecture for adaptive business-context workspaces: Spine Fabric, Runtime, Marketplace, and governed execution.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Platform | SpineWorkspace",
    description: "The Spine Fabric. Connects every app. Governs every AI action. Nothing happens without your approval.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Platform", url: "https://spineworkspace.com/platform" },
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
