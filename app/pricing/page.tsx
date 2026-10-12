import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: { absolute: "SpineWorkspace Subscriptions & Pricing | Spine InnovTech" },
  description: "Understand the value of a SpineWorkspace subscription, explore product capabilities, and request current pricing, included limits and commercial terms.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "SpineWorkspace Subscriptions & Pricing | Spine InnovTech",
    description: "Explore the value of connected business context, governed AI assistance and recurring team workflows. Contact us for current subscription pricing.",
  },
};

const pricingQuestions = [
  {
    question: "What is included in a subscription?",
    answer: "Confirm the workspace scope, supported capabilities and integrations, users, usage limits and support in your written quote. The product page explains the capabilities to evaluate; it is not a plan-entitlement list.",
  },
  {
    question: "What should the price and billing terms specify?",
    answer: "Request the base price, currency, billing unit and interval, included usage, overage policy, and any setup or implementation charges. Confirm monthly or annual billing and any minimum commitment before subscribing.",
  },
  {
    question: "Are existing application subscriptions and AI-provider fees included?",
    answer: "Your existing application subscriptions remain separate. SpineWorkspace manages authorized connections. Confirm any separate AI-provider fees, who supplies provider accounts, and how usage is charged in the subscription agreement.",
  },
  {
    question: "How do we decide whether the subscription is worth it?",
    answer: "Evaluate one recurring workflow. Compare context-assembly time, application switching, time to a useful next action, work continuity and the usefulness of Twin recommendations against your current process and the quoted cost.",
  },
  {
    question: "Do necessary safeguards depend on a premium tier?",
    answer: "Tenant isolation, necessary access controls and mandatory authorization are foundational safeguards, not optional premium upgrades. Commercial discussions should focus on operating scope and advanced administration.",
  },
  {
    question: "What happens when we renew, change scope or cancel?",
    answer: "Confirm renewal dates, scope-change rules, notice periods, cancellation terms and data-handling arrangements in writing before committing. Ask the team to clarify any term that affects your evaluation or ongoing work.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <BreadcrumbJsonLd items={[
        { name: "Home", url: absoluteUrl("/") },
        { name: "Pricing", url: absoluteUrl("/pricing") },
      ]} />
      <Header />
      <main id="main">
        <section className="bg-[#F0F8FF] px-5 pb-24 pt-40 text-[#052858] sm:px-8 lg:pb-32 innovtech-reference-surface">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#4C5C73]">SpineWorkspace subscriptions</p>
            <h1 className="mt-7 max-w-[970px] text-[length:min(clamp(3rem,5.8vw,6rem),var(--marketing-title-size))] font-semibold leading-[1.08] tracking-[-.06em]">
              Invest in connected work. <span className="text-[#0072E5]">Understand the value first.</span>
            </h1>
            <p className="mt-8 max-w-[730px] text-[length:min(18px,var(--marketing-body-size))] leading-[1.85] text-[#4C5C73]">
              SpineWorkspace brings business context, role-based work and AI assistance together. Evaluate how it helps your team prepare work, share context and review decisions, then confirm the subscription that fits your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?intent=pricing" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
                Request subscription pricing <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/product" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#006FE8] bg-white px-6 text-sm font-semibold text-[#103467] transition hover:bg-[#EBF7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">
                Explore what you get <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#4C5C73]">Contact for pricing. Current plan options, included limits and billing terms are confirmed with our team.</p>
          </div>
        </section>
        <section aria-labelledby="subscription-value-title" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Why consider a subscription?</p>
            <h2 id="subscription-value-title" className="mt-5 max-w-[760px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em] text-[#112F58]">Value that carries into the next review, handoff and decision.</h2>
            <p className="mt-5 max-w-[760px] text-[length:var(--marketing-body-size)] leading-[1.85] text-[#546B85]">The reason to pay is the value you see in recurring work. Shared context, AI preparation and reviewable decisions can support the same workflow as records change, teammates hand over work and new questions arise.</p>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Prepare with the relevant context",
                  capability: "Connected business records and a context-aware Twin help assemble information and propose next steps.",
                  benefit: "A clearer starting point for customer, finance and operating reviews.",
                },
                {
                  title: "Keep handoffs understandable",
                  capability: "Role-based work brings goals, priorities, ownership and related evidence into a shared business picture.",
                  benefit: "The next person can understand the work and the reasons behind it.",
                },
                {
                  title: "Keep judgment and authority visible",
                  capability: "Source evidence accompanies decisions, and consequential actions require appropriate authority and verification.",
                  benefit: "People can review AI proposals and understand what happened next.",
                },
              ].map(({ title, capability, benefit }) => (
                <article key={title} className="rounded-2xl border border-[#D7E4F3] bg-[#F0F8FF] p-6">
                  <h3 className="text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] text-[#112F58]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#546B85]">{capability}</p>
                  <p className="mt-5 border-t border-[#D7E4F3] pt-4 text-sm leading-7 text-[#112F58]"><span className="font-semibold">Your benefit: </span>{benefit}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-[760px] text-sm leading-7 text-[#546B85]">These are product capabilities to evaluate. Confirm availability, supported integrations and plan entitlements for your subscription before committing.</p>
          </div>
        </section>
        <section id="subscription-pricing" aria-labelledby="subscription-pricing-title" className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Subscription pricing</p>
              <h2 id="subscription-pricing-title" className="mt-5 text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em] text-[#112F58]">Contact for pricing.</h2>
              <p className="mt-5 text-[length:var(--marketing-body-size)] leading-[1.85] text-[#546B85]">Share the team, workflow and tools you want to connect. Ask for the current subscription options and a written breakdown of what is included.</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#546B85]">
                {[
                  "Price, currency, billing unit and billing period",
                  "Included capabilities, integrations and usage limits",
                  "Setup requirements, support and any additional charges",
                  "Evaluation terms, renewal and cancellation conditions",
                ].map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-[#006FE8]" aria-hidden /><span>{item}</span></li>)}
              </ul>
              <Link href="/contact?intent=pricing" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#006FE8] px-6 text-sm font-semibold text-white transition hover:bg-[#0055B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Discuss subscription options <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
            <div className="rounded-2xl border border-[#D7E4F3] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Check the fit before you pay</p>
              <h3 className="mt-5 text-[length:var(--marketing-card-size)] font-semibold leading-[1.4] text-[#112F58]">Start with a workflow your team repeats.</h3>
              <ol className="mt-6 space-y-5 text-sm leading-7 text-[#546B85]">
                <li><span className="font-semibold text-[#112F58]">1. Pick a real task.</span> Use a renewal review, an account handoff or a finance review, and identify the people and source systems involved.</li>
                <li><span className="font-semibold text-[#112F58]">2. Review the product in context.</span> Check the evidence available, the work your Twin can prepare and the authority needed for the next step.</li>
                <li><span className="font-semibold text-[#112F58]">3. Compare value with cost.</span> Assess preparation effort, handoff clarity and decision traceability against your current process and the quoted subscription.</li>
              </ol>
              <Link href="/contact?intent=demo" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Book a workflow demo <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="/solutions" className="mt-3 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">Find your team’s use case <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link href="/product#evaluate" className="mt-3 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-semibold text-[#006FE8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">See the value evaluation guide <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </div>
          </div>
        </section>
        <section id="pricing-faq" aria-labelledby="pricing-faq-title" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Subscription questions</p>
            <h2 id="pricing-faq-title" className="mt-5 text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em] text-[#112F58]">What to confirm before subscribing.</h2>
            <div className="mt-8 divide-y divide-[#D7E4F3] border-y border-[#D7E4F3]">
              {pricingQuestions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer rounded-sm text-[length:var(--marketing-body-size)] font-semibold leading-7 text-[#112F58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]">{question}</summary>
                  <p className="mt-4 max-w-[850px] text-sm leading-7 text-[#546B85]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="commercial-enquiries-title" className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Commercial enquiries</p>
          <h2 id="commercial-enquiries-title" className="mt-5 max-w-[970px] text-[length:var(--marketing-heading-size)] font-semibold leading-[1.2] tracking-[-.03em] text-[#112F58]">The right conversation for the <span className="text-[#0072E5]">right scope.</span></h2>
          <p className="mt-8 max-w-[730px] text-[length:min(18px,var(--marketing-body-size))] leading-[1.85] text-[#4C5C73]">Spine InnovTech is the company behind SpineWorkspace. Product plans and project engagements are different conversations, so we keep their commercial information separate.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-[26px] border border-[#D7E4F3] bg-white p-8 sm:p-11">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#245EA9]"><ArrowUpRight className="h-6 w-6" aria-hidden /></div>
              <p className="mt-9 text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Flagship product</p>
              <h3 className="mt-5 text-[length:min(30px,var(--marketing-heading-size))] font-semibold tracking-[-.045em] text-[#112F58]">SpineWorkspace</h3>
              <p className="mt-5 text-[16px] leading-[1.85] text-[#546B85]">Explore the product capabilities and workflow here, then talk with our team about subscriptions, availability, and the right evaluation path.</p>
              <a href="/product" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#103467] px-6 text-sm font-semibold text-white transition hover:bg-[#295BA1]">Explore product details <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
            </article>
            <article className="rounded-[26px] border border-[#D7E4F3] bg-white p-8 sm:p-11">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#245EA9]"><ShieldCheck className="h-6 w-6" aria-hidden /></div>
              <p className="mt-9 text-xs font-semibold uppercase tracking-[.2em] text-[#386CAC]">Company discussions</p>
              <h3 className="mt-5 text-[length:min(30px,var(--marketing-heading-size))] font-semibold tracking-[-.045em] text-[#112F58]">Architecture & partnerships</h3>
              <p className="mt-5 text-[16px] leading-[1.85] text-[#546B85]">For integration design, AI architecture, partnerships or project scope, share the context and we can discuss whether an engagement is appropriate.</p>
              <Link href="/contact?intent=partnership" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#B8CDE9] bg-[#F6F9FF] px-6 text-sm font-semibold text-[#103467] transition hover:border-[#295BA1]">Contact the company <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
