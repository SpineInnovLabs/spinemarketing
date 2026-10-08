import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";
import { DOCS_URL } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Documentation | Spine InnovLabs",
  description: "Spine Workspace documentation.",
};

export default function DocsPage() {
  return <RedirectPage to={DOCS_URL} />;
}
