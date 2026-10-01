import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PricingSection } from "@/components/pricing-section";
import { PricingFAQ } from "./faq";
import { PricingHero } from "./pricing-hero";
import { PricingTrustBar } from "./trust-bar";
import { PricingComparison } from "./comparison";
import { PricingValueScroll, PricingIncludedGather } from "./sticky-sections";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";

const pricingFAQData = [
  { question: "Can I switch between plans?", answer: "Yes. You can upgrade or downgrade at any time. When upgrading, you get immediate access to the new tier's features. When downgrading, changes take effect at your next billing cycle." },
  { question: "Is there a free trial?", answer: "We offer guided demos where you can see SpineWorkspace working with your actual tools and data. Book a demo and we'll walk you through a personalized setup." },
  { question: "What counts as a 'connector'?", answer: "Each app you connect counts as one connector — for example, Salesforce is one connector, Slack is another. Connecting multiple instances of the same app (e.g., two Salesforce orgs) counts as two connectors." },
  { question: "Do you offer annual billing?", answer: "Yes. Annual plans come with a discount. Book a demo and we'll walk you through annual pricing." },
  { question: "What's included in the Implementation packages?", answer: "Workspace setup covers your initial app connections, data mapping, and workspace configuration. Connector workshop is a hands-on session to integrate your specific tools. Custom add-ons cover advanced configurations like custom data flows or enterprise SSO setup." },
  { question: "What happens to my data if I cancel?", answer: "Your data remains accessible for 30 days after cancellation. You can export everything during that period. After 30 days, data is permanently deleted per our data retention policy." },
];

export const metadata: Metadata = {
  title: "Pricing | SpineWorkspace",
  description:
    "Simple pricing. Start at ₹999/$49/mo. Scale to enterprise governance.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | SpineWorkspace",
    description: "Simple pricing. Start at ₹999/$49/mo. Scale to enterprise governance.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SpineWorkspace Pricing" }],
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <FAQPageJsonLd questions={pricingFAQData} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://spineworkspace.com" },
        { name: "Pricing", url: "https://spineworkspace.com/pricing" },
      ]} />
      <Header />
      <main id="main">
        <PricingHero />
        <PricingSection hideHeading />
        <PricingValueScroll />
        <PricingComparison />
        <PricingIncludedGather />
        <PricingTrustBar />
        <TestimonialsSection
          heading="What teams say about the value."
          tag="Customer Stories"
        />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
