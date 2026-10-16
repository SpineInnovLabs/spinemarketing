import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpineWorkspaceDetails } from "@/components/marketing/spine-workspace-details";
import { STARTER_PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "SpineWorkspace — Dashboards, Canvas & AI | Spine InnovTech",
  description:
    `See editable dashboards, Canvas views and AI assistance connected to your business records. From ${STARTER_PRICING.displayPrice}/user/month, billed monthly.`,
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header />
      <main id="main" className="pt-16">
        <SpineWorkspaceDetails />
      </main>
      <Footer />
    </div>
  );
}
