import { Metadata } from "next"
import { InfrastructureContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Infrastructure — SpineWorkspace",
  description: "Multi-region infrastructure, encryption, and operational resilience powering the Spine Fabric.",
  alternates: { canonical: "/platform/infrastructure" },
  openGraph: {
    title: "Infrastructure — SpineWorkspace",
    description: "Multi-region infrastructure, encryption, and operational resilience powering the Spine Fabric.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function InfrastructurePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Platform", url: "https://spineworkspace.com/platform" },
        { name: "Infrastructure", url: "https://spineworkspace.com/platform/infrastructure" },
      ]} />
      <InfrastructureContent />
    </>
  )
}
