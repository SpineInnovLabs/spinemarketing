"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FinanceLeadersContent() {
  return (
    <RoleSolutionLayout
      role="Finance Leaders"
      headline="Financial clarity. Before the board asks."
      subheadline="Collections and cash flow connected to customer reality."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Revenue Protection",
          desc: "Link billing to delivery and health — spot churn risk early.",
        },
        {
          title: "Smart Collections",
          desc: "Prioritize by cash impact — dunning reviewed before it sends.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue decisions with timestamps.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI-weighted projections based on health and payment history.",
        },
      ]}
      governanceNote="Every dunning message and write-off requires Finance approval."
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
