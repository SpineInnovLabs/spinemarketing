import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";
import { DOCS_URL } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Documentation | SpineWorkspace",
  description: "SpineWorkspace documentation.",
};

export default function DocsPage() {
  return <RedirectPage to={DOCS_URL} />;
}
