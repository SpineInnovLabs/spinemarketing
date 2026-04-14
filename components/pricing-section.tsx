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
    period: "/user/mo",
    description: "The awakening.",
    features: [
      "Connect a small set of tools and feel basics clearly",
      "Manual approvals for every move keep early trust strong",
      "Great for individuals or tiny teams testing the Spine",
    ],
    cta: "Begin feeling",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
  {
    name: "Growth",
    prices: { india: "₹2,999", international: "$99", enterprise: "Custom" },
    period: "/user/mo",
    description: "Developed reflexes.",
    features: [
      "Connect many tools and unlock richer patterns",
      "Intelligence suggests actions, you approve with full context",
      "Ideal for growing teams that want governed, shared insight",
    ],
    cta: "Develop awareness",
    href: "/contact?intent=pricing",
    highlighted: true,
  },
  {
    name: "Command",
    prices: { india: "₹7,999", international: "$199", enterprise: "Custom" },
    period: "",
    description: "Full nervous system.",
    features: [
      "Connect the full body of tools without losing clarity",
      "Deep pattern detection with layered approval gates",
      "One governed brain for the entire organization",
    ],
    cta: "Talk to us",
    href: "/contact?intent=pricing",
    highlighted: false,
  },
];

export function PricingSection() {
  const [region, setRegion] = useState<Region>("international");

  return (
    <section id="pricing" className="arvio-section bg-muted">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-heading">
            Choose your{" "}
            <span className="text-primary">nervous system stage.</span>
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Start small, add more tools and intelligence as your team needs it.
            No hidden costs.
          </p>

          {/* Geo Toggle */}
          <div
            className="mt-8 inline-flex items-center rounded-full border border-border/50 bg-white p-1"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {regions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`relative rounded-full px-5 py-2 text-[14px] font-semibold tracking-[-0.02em] transition-all ${
                  region === r.key
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {region === r.key && (
                  <motion.div
                    layoutId="region-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{r.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className={`relative flex flex-col rounded-[20px] p-8 ${
                plan.highlighted ? "text-white" : "bg-white"
              }`}
              style={
                plan.highlighted
                  ? {
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--shadow-card-elevated)",
                    }
                  : {
                      boxShadow: "var(--shadow-card)",
                    }
              }
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="rounded-full px-3 py-1 text-[12px] font-semibold text-white"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em]">
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-[15px] font-medium ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
                <div className="mt-4">
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[34px] font-semibold tracking-[-0.05em]"
                  >
                    {plan.prices[region]}
                  </motion.span>
                  {region !== "enterprise" && (
                    <span
                      className={`text-[15px] ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: plan.highlighted
                          ? "rgba(255,255,255,0.2)"
                          : "var(--gradient-primary-icon)",
                      }}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span
                      className={`text-[15px] font-medium leading-[1.5] ${plan.highlighted ? "text-white/90" : ""}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 h-[42px] w-full rounded-xl text-[15px] font-semibold tracking-[-0.3px] ${
                  plan.highlighted
                    ? "border-2 border-white/20 bg-white text-foreground hover:bg-white/90"
                    : "border-2 border-border/75 bg-white text-foreground"
                }`}
                variant={plan.highlighted ? "secondary" : "outline"}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Implementation services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="arvio-card p-6">
            <p className="text-[17px] font-semibold tracking-[-0.03em] text-foreground">
              Implementation &amp; services
            </p>
            <p className="mt-2 text-[15px] font-medium leading-[1.5] text-muted-foreground">
              Optional onboarding packages to get you live faster. Available for
              all tiers.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { name: "Workspace setup", price: "From $3K" },
                { name: "Connector workshop", price: "From $2K" },
                { name: "Custom add-ons", price: "Custom" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-muted p-4">
                  <div className="text-[15px] font-semibold tracking-[-0.03em]">
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
