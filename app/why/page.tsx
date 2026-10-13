import type { Metadata } from "next";
import { RedirectPage } from "@/components/redirect-page";

export const metadata: Metadata = {
  title: "Why Spine InnovTech | Our Origins",
  description: "Redirecting to About Spine InnovTech.",
  alternates: { canonical: "/about" },
};

export default function WhyRedirectPage() {
  return <RedirectPage to="/about" />;
}
