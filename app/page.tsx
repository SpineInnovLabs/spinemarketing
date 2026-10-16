import type { Metadata } from "next";
import { Header } from "@/components/header-client"
import { Footer } from "@/components/footer"
import { InnovLabsHome } from "@/components/marketing/innovlabs-home"
import { STARTER_PRICING } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "SpineWorkspace — Connected Business Work | Spine InnovTech",
  description: `Connect business records, editable dashboards, Canvas and your AI Twin in one workspace. From ${STARTER_PRICING.displayPrice}/user/month, billed monthly.`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#FFFFFF]">
      <Header />
      <main id="main" className="pt-16">
        <InnovLabsHome />
      </main>
      <Footer />
    </div>
  )
}
