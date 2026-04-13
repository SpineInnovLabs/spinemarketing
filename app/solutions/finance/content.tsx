"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function FinanceIndustryContent() {
  return (
    <IndustrySolutionLayout
      category="Finance & Revenue Operations"
      headline="Collections with context. Not just invoice dates."
      subheadline="Collections, revenue recognition, and cash flow connected to customer health — not just invoice dates."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Collections are prioritized by days overdue, not by customer health or strategic importance.",
          "Revenue recognition gaps form because billing and delivery live in separate systems.",
          "Finance discovers churn risk after CS, not before — making collections harder.",
        ],
      }}
      capabilities={[
        {
          title: "Smart Collections",
          desc: "Prioritize dunning by customer health and payment history — tone-appropriate drafts waiting for Finance approval.",
        },
        {
          title: "Revenue Leak Detection",
          desc: "Surface billed-but-not-delivered and delivered-but-not-billed discrepancies before month-end.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI predicts collection probability from customer health signals — more accurate runway estimates with source evidence.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue-impacting decisions — who approved what adjustment, when, and based on which data.",
        },
      ]}
      governance="Every dunning message and write-off recommendation requires Finance approval — AI provides analysis, humans control the cash."
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
