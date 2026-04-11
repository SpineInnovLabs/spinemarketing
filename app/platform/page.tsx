import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { PlatformContent } from "./content"

export const metadata: Metadata = {
  title: "How It Works | IntegrateWise",
  description:
    "Connect your tools, clean your data automatically, build complete views of every account, and let AI propose actions — with your approval. See how IntegrateWise works.",
}

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <PlatformContent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
