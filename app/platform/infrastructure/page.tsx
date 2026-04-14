import { Metadata } from "next"
import { InfrastructureContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Infrastructure — IntegrateWise",
  description: "Multi-region infrastructure, encryption, and operational resilience powering the Adaptive Spine.",
  alternates: { canonical: "/platform/infrastructure" },
  openGraph: {
    title: "Infrastructure — IntegrateWise",
    description: "Multi-region infrastructure, encryption, and operational resilience powering the Adaptive Spine.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "IntegrateWise" }],
  },
}

export default function InfrastructurePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://integratewise.ai" },
        { name: "Platform", url: "https://integratewise.ai/platform" },
        { name: "Infrastructure", url: "https://integratewise.ai/platform/infrastructure" },
      ]} />
      <InfrastructureContent />
    </>
  )
}
