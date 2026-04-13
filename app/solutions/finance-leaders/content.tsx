"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FinanceLeadersContent() {
  return (
    <RoleSolutionLayout
      role="Finance Leaders"
      headline="Financial clarity. Before the board asks."
      subheadline="Collections and cash flow connected to customer reality — not just invoice aging."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Revenue Protection",
          desc: "Link billing to delivery and customer health — know churn risk before issuing the next invoice.",
        },
        {
          title: "Smart Collections",
          desc: "Prioritize by cash impact and customer health — tone-appropriate dunning reviewed by you before it sends.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue-impacting decisions with source evidence and timestamps.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI-weighted projections based on customer health and payment history — accurate runway estimates with source evidence.",
        },
      ]}
      governanceNote="Every dunning message and write-off recommendation requires Finance approval — AI provides analysis, humans control the cash."
      connects={[
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
