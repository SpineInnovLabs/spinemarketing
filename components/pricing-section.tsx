"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    tier: "Workbench",
    prices: { india: "₹999", international: "$49", enterprise: "Custom" },
    period: "/mo",
    description: "Connect apps. See everything in one view.",
    features: [
      "Up to 5 connectors via OAuth",
      "Workbench — accounts, tasks, workflows, calendar",
      "Entity 360 — complete view of every account from the Spine",
      "Truth + Context data flows (structured records + signals)",
      "Basic risk alerts and account health signals",
      "Email support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: false,
    accent: { from: "rgba(255,255,255,0.08)", to: "rgba(255,255,255,0.03)" },
  },
  {
    name: "Growth",
    tier: "Workbench + Intelligence",
    prices: { india: "₹2,999", international: "$99", enterprise: "Custom" },
    period: "/mo",
    description: "The Twin surfaces signals and proposes actions.",
    features: [
      "Up to 15 connectors",
      "Everything in Starter",
      "Intelligence Layer — Twin Chat, action proposals, draft previews",
      "AI Session Summaries linked to Entity 360s in the Spine",
      "Confidence scores and evidence chains on every insight",
      "TruthLayer governance — every AI action waits for your approval",
      "Knowledge that compounds with every approved session",
      "Priority support",
    ],
    cta: "Book a demo",
    href: "/contact?intent=pricing",
    highlighted: true,
    accent: { from: "rgba(52,211,153,0.25)", to: "rgba(52,211,153,0.05)" },
  },
  {
    name: "Command",
    tier: "Enterprise",
    prices: { india: "₹7,999", international: "$199", enterprise: "Custom" },
    period: "/mo",
    description: "Enterprise governance. Every action auditable.",
    features: [
      "Unlimited connectors",
      "Everything in Growth",
      "Govern Gate — immutable decision log for every approved action",
      "Multi-AI verified knowledge with confidence scoring",
      "Enterprise audit trail (SOC 2 Type II, AES-256, TLS 1.3)",
      "SSO, RBAC with field-level permissions, dedicated success team",
    ],
    cta: "Contact sales",
    href: "/contact?intent=pricing",
    highlighted: false,
    accent: { from: "rgba(139,92,246,0.15)", to: "rgba(139,92,246,0.03)" },
  },
];

export function PricingSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const [region, setRegion] = useState<Region>("international");

  return (
    <section id="pricing" className="relative overflow-hidden bg-dark-section py-32 px-6 md:py-40 md:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[15%] h-[600px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[160px]" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.25), transparent 70%)" }} />
        <div className="absolute right-[10%] bottom-[10%] h-[300px] w-[400px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)" }} />
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
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Simple pricing.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Scale as you grow.</span>
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-white/50">
                Start small. Scale as you grow. No hidden costs.
              </p>
            </>
          )}

          <div className="mt-8 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] p-1 backdrop-blur-sm">
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`relative rounded-full px-5 py-2 text-sm font-semibold tracking-tight transition-all ${
                  region === r.key
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {region === r.key && (
                  <motion.div
                    layoutId="region-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_0_20px_rgba(52,211,153,0.3)]"
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
            >
              <div
                className={`group relative h-full rounded-2xl p-[1px] transition-all duration-500 ${
                  plan.highlighted ? "shadow-[0_0_60px_rgba(52,211,153,0.12)]" : ""
                }`}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, rgba(52,211,153,0.4), transparent 40%, transparent 60%, rgba(52,211,153,0.2))"
                    : "linear-gradient(135deg, rgba(255,255,255,0.1), transparent 40%, transparent 60%, rgba(255,255,255,0.05))",
                }}
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0c0b14]">
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-[60px]"
                    style={{ background: plan.highlighted ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.1)" }}
                  />
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                      <Badge className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                        Most popular
                      </Badge>
                    </div>
                  )}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                      <Badge variant="outline" className="rounded-full border-white/20 text-white/60 text-[11px]">
                        {plan.tier}
                      </Badge>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/40">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <motion.span
                        key={region}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[34px] font-semibold tracking-tight text-white"
                      >
                        {plan.prices[region]}
                      </motion.span>
                      {region !== "enterprise" && (
                        <span className="text-sm text-white/40">{plan.period}</span>
                      )}
                    </div>
                  </div>
                  <Separator className="bg-white/[0.06]" />
                  <div className="relative flex-1 p-6 pt-5">
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-primary/20" : "bg-white/[0.06]"}`}>
                            <Check className={`h-3 w-3 ${plan.highlighted ? "text-primary" : "text-white/50"}`} />
                          </div>
                          <span className="text-sm font-medium leading-relaxed text-white/55">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-2">
                    <Button
                      className={`h-11 w-full rounded-xl text-sm font-semibold transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                          : "border border-white/15 bg-transparent text-white hover:bg-white/[0.06] hover:border-white/25"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
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
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-white/[0.08] via-transparent to-white/[0.05]">
            <div className="rounded-2xl bg-[#0c0b14] p-6">
              <h3 className="text-lg font-semibold text-white">Implementation &amp; services</h3>
              <p className="mt-1 text-sm text-white/40">
                Optional onboarding packages to get you live faster. Available for all tiers.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  { name: "Workspace setup", price: "From $3K" },
                  { name: "Connector workshop", price: "From $2K" },
                  { name: "Custom add-ons", price: "Custom" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/[0.12]">
                    <div className="text-sm font-semibold text-white/70">{item.name}</div>
                    <div className="mt-1 text-sm font-semibold text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
