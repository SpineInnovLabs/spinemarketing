import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";

export const metadata: Metadata = {
  title: "AI & Spine Twin | Spine InnovTech",
  description: "Redirecting to Spine Twin context-aware intelligence.",
  alternates: { canonical: "/twin" },
};

export default function AiRedirectPage() {
  return <RedirectPage to="/twin" />;
}
