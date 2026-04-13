import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";

export const metadata: Metadata = {
  title: "Pricing | IntegrateWise",
  description:
    "Simple, transparent pricing. Start with Starter at ₹999/$49/mo and scale to Command for full enterprise governance.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "rgb(8, 7, 14)" }}
        >
          <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[60px] md:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]">
                Simple pricing.{" "}
                <span className="text-primary">Scale as you grow.</span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55">
                Start small, add more apps and intelligence as your team needs
                it. No hidden costs.
              </p>
            </div>
          </div>
        </section>
        <PricingSection hideHeading />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
