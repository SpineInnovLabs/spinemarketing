import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";
import { PricingFAQ } from "./faq";

export const metadata: Metadata = {
  title: "Pricing | IntegrateWise",
  description:
    "Simple, transparent pricing. Start with Starter at ₹999/$49/mo and scale to Command for full enterprise governance.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-dark-section">
          <div className="mx-auto max-w-[1200px] px-6 pt-40 pb-16 md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                One Spine.{" "}
                <span className="text-primary">Two layers. Three tiers.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/55">
                Start with L1 — the Workbench where all your accounts live in
                one view. Unlock L2 — the Intelligence Layer where the Twin
                proposes and you approve. Scale as your team&apos;s needs grow.
              </p>
            </div>
          </div>
        </section>
        <PricingSection hideHeading />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
