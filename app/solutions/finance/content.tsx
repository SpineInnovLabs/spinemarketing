"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function FinanceIndustryContent() {
  return (
    <IndustrySolutionLayout
      category="Finance & Revenue Operations"
      headline="The bloodstream that keeps cash flowing."
      subheadline="Collections and revenue connected to customer health signals."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Collections prioritized by days overdue, not customer health.",
          "Revenue gaps form because billing and delivery are separate.",
          "Finance discovers churn risk after CS, making collections harder.",
        ],
      }}
      capabilities={[
        {
          title: "Smart Collections",
          desc: "Prioritize dunning by health and history. Tone-appropriate drafts.",
        },
        {
          title: "Revenue Leak Detection",
          desc: "Surface billed-not-delivered and delivered-not-billed gaps fast.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI predicts collection probability from customer health signals.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue-impacting decisions and approvals.",
        },
      ]}
      governance="Dunning and write-offs require Finance approval. AI analyzes, humans control."
      connectors={[
        "QuickBooks", "NetSuite", "Sage", "Stripe",
        "Salesforce", "HubSpot", "Zendesk",
      ]}
      metrics={[
        "Days Sales Outstanding (DSO)", "Bad Debt Rate",
        "Cash Forecast Accuracy", "Collection Efficiency",
      ]}
    />
  );
}
