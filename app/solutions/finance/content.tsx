"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function FinanceIndustryContent() {
  return (
    <IndustrySolutionLayout
      category="Finance & Revenue Operations"
      headline="Financial operations with full context."
      subheadline="Collections, revenue recognition, and cash flow management connected to customer health — not just invoice dates."
      ctaLabel="Explore the workspace →"
      problem={{
        intro: "Finance teams collect cash without knowing if the customer is about to churn (information in CS tools). Revenue is recognized without seeing delivery risk (information in project tools). Bad debt surprises happen because credit risk and customer success don't share data.",
        bullets: [
          "Collections are prioritized by days overdue, not by customer health or strategic importance.",
          "Revenue recognition gaps form because billing and delivery live in separate systems.",
          "Cash forecast accuracy suffers because payment probability isn't connected to customer signals.",
          "Finance discovers churn risk after CS, not before — making collections harder.",
        ],
      }}
      solution={{
        paragraph: "IntegrateWise gives Finance a Revenue Risk Workspace connecting accounting (QuickBooks, NetSuite), CRM, billing, and customer health data. AI prioritizes collections not just by 'days overdue' but by 'ability to pay + strategic importance + churn risk.'",
        workspaceName: "Revenue Risk Workspace",
      }}
      capabilities={[
        {
          title: "Smart Collections",
          desc: "Prioritize dunning by customer health score and payment history. Draft tone-appropriate follow-ups — friendly for healthy accounts, urgent for at-risk — all waiting for Finance approval.",
        },
        {
          title: "Revenue Leak Detection",
          desc: "Identify 'billed but not delivered' or 'delivered but not billed' discrepancies across systems before month-end.",
        },
        {
          title: "Cash Flow Forecasting",
          desc: "AI predicts cash collection probability based on customer health, not just invoice aging. More accurate runway estimates with source evidence attached.",
        },
        {
          title: "Audit Readiness",
          desc: "Immutable logs of all revenue-impacting decisions with source evidence. Who approved what adjustment, when, and based on which data.",
        },
      ]}
      governance="Every dunning message, write-off recommendation, and revenue recognition adjustment requires Finance approval with full audit trail. AI provides the analysis; humans control the cash. No automated customer-facing financial communication without explicit approval."
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
