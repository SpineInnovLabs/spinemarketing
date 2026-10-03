import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";

export const metadata: Metadata = {
  title: "How it works | SpineWorkspace",
  description:
    "Truth stays in the tools you already run. Context is gathered for this person and this task. Twin prepares a proposal. A person decides.",
  alternates: { canonical: "/platform/how-it-works" },
};

export default function ProductHowItWorksPage() {
  return <RedirectPage to="/platform/how-it-works" />;
}
