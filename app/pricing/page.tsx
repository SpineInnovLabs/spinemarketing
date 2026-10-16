import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-url";
import { COMPANY_LEGAL_NAME } from "@/lib/company";
import { PRICING_SCOPE_NOTE, STARTER_PRICING } from "@/lib/pricing";

const pricingDescription = `SpineWorkspace from ${STARTER_PRICING.displayPrice}/user/month, billed monthly. Dashboards, Canvas, shared context and Twin. AI/provider usage and custom setup scoped separately.`;

export const metadata: Metadata = {
  title: { absolute: `SpineWorkspace Pricing — From ${STARTER_PRICING.displayPrice}/user/month | Spine InnovTech` },
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `SpineWorkspace — From ${STARTER_PRICING.displayPrice}/user/month`,
    description: pricingDescription,
    url: absoluteUrl("/pricing"),
  },
};

const starterFeatures = [
  "Editable dashboards and role-based work views",
  "Canvas documents, tables and context graphs",
  "Shared context from authorized business sources",
  "Spine Twin for context-aware preparation and review",
  "Governed actions and continuity around the work",
] as const;

const pricingQuestions = [
  {
    question: "What does Starter include?",
    answer: "The Workbench, editable dashboard views and Canvas, plus shared context and Spine Twin with authorized setup. Connections, available actions and usage scope are agreed for your workspace before activation.",
  },
  {
    question: "What costs extra?",
    answer: "AI/provider usage, custom setup and implementation are scoped separately. Existing application subscriptions remain separate. We confirm usage charges and any setup fees before you commit.",
  },
  {
    question: "How do we start?",
    answer: "Tell us your team, first workflow and tools. We confirm the supported scope, monthly subscription, usage terms and setup, then arrange activation. Contacting us does not start a paid subscription.",
  },
];

const subscriptionJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SpineWorkspace",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: absoluteUrl("/product"),
  description: pricingDescription,
  offers: {
    "@type": "Offer",
    name: `${STARTER_PRICING.name} subscription`,
    url: absoluteUrl("/pricing#subscription-pricing"),
    price: STARTER_PRICING.amount,
    priceCurrency: STARTER_PRICING.currency,
    description: `Starting price per user, billed monthly. ${PRICING_SCOPE_NOTE} Activation requires an agreed scope and authorized setup.`,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: STARTER_PRICING.amount,
      priceCurrency: STARTER_PRICING.currency,
      unitText: "user per month",
      billingDuration: "P1M",
    },
    seller: {
      "@type": "Organization",
      name: "Spine InnovTech",
      legalName: COMPANY_LEGAL_NAME,
    },
  },
};

const primaryCtaClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Pricing", url: absoluteUrl("/pricing") },
      ]} />
      <FAQPageJsonLd questions={pricingQuestions} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(subscriptionJsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="main">
        <section className="bg-[#F0F8FF] px-5 pb-16 pt-32 text-[#052858] sm:px-8 lg:pb-20 innovtech-reference-surface">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">SpineWorkspace pricing</p>
            <h1 className="mt-5 max-w-[850px] text-[length:min(clamp(2.8rem,5.5vw,5rem),var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-.05em]">
              Connected work. <span className="text-[#0072E5]">A clear starting price.</span>
            </h1>
            <p className="mt-5 max-w-[700px] text-[length:var(--marketing-body-size)] leading-7 text-[#4C5C73]">
              One place for business context, editable work views and AI assistance your team can review.
            </p>
            <div id="subscription-pricing" className="mt-9 grid scroll-mt-24 gap-5 lg:grid-cols-[1.25fr_1fr]">
              <article aria-labelledby="starter-title" className="rounded-2xl border border-[#A7C7E9] bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 id="starter-title" className="text-[length:var(--marketing-card-size)] font-semibold">{STARTER_PRICING.name}</h2>
                  <span className="rounded-full bg-[#EBF5FF] px-3 py-1 text-xs font-semibold text-[#006FE8]">Starting offer</span>
                </div>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[length:min(3rem,var(--marketing-title-size))] font-semibold tracking-[-.04em]">{STARTER_PRICING.displayPrice}</span>
                  <span className="text-sm text-[#546B85]">per {STARTER_PRICING.unit} / {STARTER_PRICING.interval}</span>
                </p>
                <p className="mt-1 text-sm text-[#546B85]">{STARTER_PRICING.billing} · US dollars</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#315775]">
                  {starterFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#006FE8]" aria-hidden /><span>{feature}</span></li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-6 text-[#596F89]">Connected context, Twin and actions depend on authorized tools, policy and setup.</p>
                <Link href={STARTER_PRICING.contactHref} className={`${primaryCtaClass} mt-6 w-full sm:w-auto`}>Start a pricing conversation <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                <p className="mt-4 text-xs leading-6 text-[#596F89]">{PRICING_SCOPE_NOTE}</p>
              </article>
              <article aria-labelledby="custom-scope-title" className="flex flex-col rounded-2xl border border-[#D7E4F3] bg-[#F7FAFD] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#386CAC]">Broader team needs</p>
                <h2 id="custom-scope-title" className="mt-4 text-[length:var(--marketing-card-size)] font-semibold">Agree the scope first.</h2>
                <p className="mt-4 text-sm leading-7 text-[#546B85]">For multiple teams, custom integrations or implementation, we scope the work and quote the additional requirements.</p>
                <p className="mt-4 text-sm leading-7 text-[#546B85]">Bring one recurring task—an account handoff, a finance review or a support queue—and the tools it depends on.</p>
                <div className="mt-6 flex flex-1 items-end">
                  <Link href={STARTER_PRICING.contactHref} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B8CDE9] bg-white px-6 text-sm font-semibold text-[#103467] hover:bg-[#EBF5FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Discuss your scope <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section aria-labelledby="subscription-value-title" className="bg-white px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1180px]">
            <h2 id="subscription-value-title" className="text-[length:var(--marketing-heading-size)] font-semibold leading-tight tracking-[-.03em] text-[#112F58]">What you’re paying for.</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {[
                { title: "Context together", detail: "Related records and source evidence in one working picture." },
                { title: "Useful work views", detail: "Dashboards for daily operations. Canvas for documents, tables and relationships." },
                { title: "AI with accountability", detail: "Preparation, proposals and handoffs tied to the work, with human authority over consequential actions." },
              ].map(({ title, detail }) => (
                <article key={title} className="rounded-2xl border border-[#D7E4F3] bg-[#F0F8FF] p-6">
                  <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-snug text-[#112F58]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#546B85]">{detail}</p>
                </article>
              ))}
            </div>
            <Link href="/product" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">See the product and Workbench views <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </section>
        <section id="pricing-faq" aria-labelledby="pricing-faq-title" className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-[1180px]">
            <h2 id="pricing-faq-title" className="text-[length:var(--marketing-heading-size)] font-semibold leading-tight tracking-[-.03em] text-[#112F58]">Before you start.</h2>
            <div className="mt-7 divide-y divide-[#D7E4F3] border-y border-[#D7E4F3]">
              {pricingQuestions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer rounded-sm text-[length:var(--marketing-body-size)] font-semibold leading-7 text-[#112F58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">{question}</summary>
                  <p className="mt-3 max-w-[850px] text-sm leading-7 text-[#546B85]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
