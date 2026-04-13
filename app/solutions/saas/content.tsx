"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function SaasContent() {
  return (
    <IndustrySolutionLayout
      category="SaaS & Subscription"
      headline="The SaaS Intelligence Workspace."
      subheadline="Unify product usage, billing, support, and CRM to protect NRR and catch churn before it happens."
      ctaLabel="See Account Success workspace →"
      ctaHref="/contact"
      problem={{
        bullets: [
          "Usage drops don't surface in CRM until a CSM manually updates the health score.",
          "Champion departures live in email and LinkedIn — not in the account record.",
          "You find out about churn risk when the customer calls to cancel, not 90 days before.",
        ],
      }}
      capabilities={[
        {
          title: "Adoption-to-Renewal Tracking",
          desc: "Health scores weighted by feature adoption, login frequency, and license utilization.",
        },
        {
          title: "Churn Early Warning",
          desc: "Combined signal from support sentiment, payment delays, and usage drops — before any single app would flag it.",
        },
        {
          title: "Expansion Playbooks",
          desc: "AI identifies Power Users near license limits and drafts upgrade conversations for your approval.",
        },
        {
          title: "QBR Auto-Prep",
          desc: "One-click business review decks built from real product adoption data and relationship history.",
        },
      ]}
      governance="Every health score change and expansion recommendation shows its source data. CSMs approve before any communication sends — full audit trail included."
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
