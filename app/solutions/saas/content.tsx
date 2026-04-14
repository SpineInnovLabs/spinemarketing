"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function SaasContent() {
  return (
    <IndustrySolutionLayout
      category="SaaS & Subscription"
      headline="The nervous system for SaaS renewals."
      subheadline="Unified signals from usage, billing, and support protect NRR."
      ctaLabel="See Account Success workspace →"
      ctaHref="/contact"
      problem={{
        bullets: [
          "Usage drops hide in product analytics, invisible to CRM.",
          "Champion departures go unnoticed until renewal.",
          "Churn risk surfaces at cancellation, not 90 days before.",
        ],
      }}
      capabilities={[
        {
          title: "Adoption-to-Renewal Tracking",
          desc: "Health scores weighted by adoption, logins, and utilization.",
        },
        {
          title: "Churn Early Warning",
          desc: "Combined signals from support, payments, and usage drops.",
        },
        {
          title: "Expansion Playbooks",
          desc: "AI identifies power users near limits, drafts upgrade conversations.",
        },
        {
          title: "QBR Auto-Prep",
          desc: "One-click review decks from real adoption data.",
        },
      ]}
      governance="Every score change shows source data. CSMs approve before any message sends."
      connectors={[
        "Salesforce", "HubSpot", "Stripe", "Chargebee", "Zendesk",
        "Segment", "Amplitude", "Mixpanel", "Slack", "GitHub",
      ]}
      metrics={[
        "NRR", "Logo Retention", "Time-to-Value", "Expansion ARR",
        "Renewal Forecast Accuracy", "Time-to-Intervention",
      ]}
    />
  );
}
