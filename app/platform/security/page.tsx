import { Metadata } from "next"
import { PlatformSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security — SpineWorkspace Platform",
  description: "Enterprise-grade security architecture for the Spine Fabric — encryption, access control, and audit trails.",
  alternates: { canonical: "/platform/security" },
  openGraph: {
    title: "Security — SpineWorkspace Platform",
    description: "Enterprise-grade security architecture for the Spine Fabric — encryption, access control, and audit trails.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace" }],
  },
}

export default function PlatformSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Platform", url: "https://spineworkspace.com/platform" },
        { name: "Security", url: "https://spineworkspace.com/platform/security" },
      ]} />
      <PlatformSecurityContent />
    </>
  )
}
