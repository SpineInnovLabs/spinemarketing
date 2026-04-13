"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Region = "india" | "international" | "enterprise";

const regions: { key: Region; label: string }[] = [
  { key: "india", label: "India" },
  { key: "international", label: "International" },
  { key: "enterprise", label: "Enterprise" },
];

const plans = [
  {
    name: "Starter",
    prices: { india: "₹999", international: "$49", enterprise: "Custom" },
    period: "/mo",
    description: "Connect your apps. See everything in one workspace over the Spine.",
    features: [
      "Up to 5 connectors",
      "Workbench — accounts, tasks, workflows, calendar",
      "Complete view of every account via Entity 360",
      "Basic signals and alerts",
      "Truth + Context data flows",
      "Email support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
  {
    name: "Growth",
    prices: { india: "₹2,999", international: "$99", enterprise: "Custom" },
    period: "/mo",
    description: "AI that watches your business through the Spine and tells you what matters, with evidence.",
    features: [
      "Up to 15 connectors",
      "Everything in Starter",
      "Intelligence Layer — Twin Chat, action buttons, draft previews",
      "AI insights with evidence from the Spine",
      "Session Summaries + TruthLayer governance",
      "Knowledge that compounds over time",
      "Custom playbooks and workflows",
      "Priority support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: true,
  },
  {
    name: "Command",
    prices: { india: "₹7,999", international: "$199", enterprise: "Custom" },
    period: "/mo",
    description:
      "Full intelligence and full governance. Every AI action passes through TruthLayer and your approval.",
    features: [
      "Unlimited connectors",
      "Everything in Growth",
      "Confidence scoring on every insight",
      "Multi-AI verified knowledge",
      "Enterprise governance and audit trail",
      "SSO, RBAC, dedicated success team",
    ],
    cta: "Contact sales",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
];

export function PricingSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [region, setRegion] = useState<Region>("international");

  return (
    <section id="pricing" className="relative overflow-hidden py-32 px-6 md:py-40 md:px-16" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(45,212,191,0.2), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto max-w-2xl text-center"
        >
          {!hideHeading && (
            <>
              <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-[44px]">
                Simple pricing.{" "}
                <span className="text-primary">Scale as you grow.</span>
              </h2>
              <p className="mt-4 text-[16px] font-medium leading-[1.6] text-white/45">
                Start small, add more apps and intelligence as your team needs it.
                No hidden costs.
              </p>
            </>
          )}

          <div
            className="mt-8 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] p-1"
          >
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`relative rounded-full px-5 py-2 text-[14px] font-semibold tracking-[-0.02em] transition-all ${
                  region === r.key
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {region === r.key && (
                  <motion.div
                    layoutId="region-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{r.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto mt-16 md:mt-20 grid max-w-5xl gap-6 lg:gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 70,
                delay: i * 0.1,
              }}
              className={`relative flex flex-col rounded-2xl p-8 md:p-10 ${
                plan.highlighted
                  ? "border-2 border-primary/40 bg-white/[0.06] text-white"
                  : "border border-white/[0.08] bg-white/[0.03] text-white"
              }`}
              style={
                plan.highlighted
                  ? { boxShadow: "0 0 60px rgba(45,212,191,0.12)" }
                  : undefined
              }
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-[12px] font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-white/40">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[34px] font-semibold tracking-[-0.05em] text-white"
                  >
                    {plan.prices[region]}
                  </motion.span>
                  {region !== "enterprise" && (
                    <span className="text-[15px] text-white/40">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-[15px] font-medium leading-[1.5] text-white/60">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 h-[42px] w-full rounded-xl text-[15px] font-semibold tracking-[-0.3px] ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-white/15 bg-transparent text-white hover:bg-white/10"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <p className="text-[17px] font-semibold tracking-[-0.03em] text-white">
              Implementation &amp; services
            </p>
            <p className="mt-2 text-[15px] font-medium leading-[1.5] text-white/40">
              Optional onboarding packages to get you live faster. Available for
              all tiers.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { name: "Workspace setup", price: "From $3K" },
                { name: "Connector workshop", price: "From $2K" },
                { name: "Custom add-ons", price: "Custom" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                  <div className="text-[15px] font-semibold tracking-[-0.03em] text-white/70">
                    {item.name}
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-primary">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
