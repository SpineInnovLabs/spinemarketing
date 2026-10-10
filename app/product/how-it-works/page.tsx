import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";

export const metadata: Metadata = {
  title: "How it works | Spine InnovTech",
  description:
    "People and Twin work from authorized business context. Investigate, prepare, review consequential actions, and reconcile observed results in the systems that own the records.",
  alternates: { canonical: "/platform/how-it-works" },
};

export default function ProductHowItWorksPage() {
  return <RedirectPage to="/platform/how-it-works" />;
}
