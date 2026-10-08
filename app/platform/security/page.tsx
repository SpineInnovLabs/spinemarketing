import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { PlatformSecurityContent } from "./content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Security | Spine InnovLabs",
  description: "Enterprise-grade security architecture for the Spine Workspace — encryption, access control, and audit trails.",
  alternates: { canonical: "/platform/security" },
  openGraph: {
    title: "Security | Spine InnovLabs",
    description: "Enterprise-grade security architecture for the Spine Workspace — encryption, access control, and audit trails.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Spine Workspace" }],
  },
}

export default function PlatformSecurityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Platform", url: absoluteUrl("/platform") },
        { name: "Security", url: absoluteUrl("/platform/security") },
      ]} />
      <PlatformSecurityContent />
    </>
  )
}
