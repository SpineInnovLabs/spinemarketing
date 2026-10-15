import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpineWorkspaceDetails } from "@/components/marketing/spine-workspace-details";

export const metadata: Metadata = {
  title: "SpineWorkspace — Product, Features & Technology | Spine InnovTech",
  description:
    "Discover Spine Workspace: governed truth and context, one Fabric projected across 13 domains, and ready-to-work operational views for humans and AI.",
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
