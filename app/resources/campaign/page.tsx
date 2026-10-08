import { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-url"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CampaignGalleryContent } from "./content"

export const metadata: Metadata = {
  title: "Campaign Gallery — Architecture & Creatives | Spine InnovLabs",
  description:
    "Architecture blueprints showing Spine Workspace at the center of every tool, plus 36 campaign designs across LinkedIn and WhatsApp — for Account Success, Business Ops, and Personal Ops.",
  alternates: { canonical: "/resources/campaign" },
  openGraph: {
    title: "Campaign Gallery — Architecture & Creatives | Spine InnovLabs",
    description:
      "The Spine Workspace connects every tool into the record the tools already keep. Architecture blueprints and 36 campaign designs.",
    images: [
      { url: "/images/campaign/Post-Spine.jpg", width: 1080, height: 1080, alt: "Spine Workspace — The Spine Workspace Architecture" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Gallery — Architecture & Creatives | Spine InnovLabs",
    description: "The Spine Workspace connects every tool into the record the tools already keep.",
    images: ["/images/campaign/Post-Spine.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Spine Workspace Campaign Gallery",
  description:
    "36 campaign designs across LinkedIn and WhatsApp — crafted for Account Success, Business Ops, and Personal Ops professionals.",
  url: absoluteUrl("/resources/campaign"),
  publisher: {
    "@type": "Organization",
    name: "Spine Workspace",
    url: absoluteUrl("/"),
  },
  mainEntity: {
    "@type": "ImageGallery",
    name: "Spine Workspace Marketing Campaign Designs",
    numberOfItems: 36,
    about: [
      { "@type": "Thing", name: "Account Success" },
      { "@type": "Thing", name: "Business Operations" },
      { "@type": "Thing", name: "Personal Operations" },
    ],
  },
}

export default function CampaignGalleryPage() {
  return (
    <div className="min-h-screen bg-[#032D60]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <CampaignGalleryContent />
      </main>
      <Footer />
    </div>
  )
}
