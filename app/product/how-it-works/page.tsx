import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";

export const metadata: Metadata = {
  title: "How it works | SpineWorkspace",
  description:
    "The tools keep the record. The workspace shows the work. Twin proposes only when asked. A person decides, and an accepted change goes back to the original tool.",
  alternates: { canonical: "/platform/how-it-works" },
};

export default function ProductHowItWorksPage() {
  return <RedirectPage to="/platform/how-it-works" />;
}
