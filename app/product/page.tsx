import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SpineWorkspaceDetails } from "@/components/marketing/spine-workspace-details";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Spine Workspace — Product, Features & Technology | Spine InnovTech",
  description:
    "Explore Spine Workspace: shared business context, a workspace for your role, your AI Twin, evidence-backed decisions, and governed next steps.",
  path: "/product",
});

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
