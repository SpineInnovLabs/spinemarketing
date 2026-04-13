"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ProfessionalServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Professional Services"
      headline="Every engagement, fully visible."
      subheadline="Matters, time, billing, and client relationships in one governed workspace — no more revenue lost to unbilled time."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Unbilled time sits in WIP for 30+ days because time entries and billing are disconnected.",
          "Matters approaching scope limits aren't flagged until the partner reviews the file.",
          "Key client stakeholders disengage and no one notices until the relationship is damaged.",
        ],
      }}
      capabilities={[
        {
          title: "Matter Margin Tracking",
          desc: "Real-time billed vs. WIP vs. estimate per matter — know which engagements are profitable before you close them.",
        },
        {
          title: "Client Relationship Monitoring",
          desc: "Track communication frequency with decision-makers and alert when engagement goes silent.",
        },
        {
          title: "Billing Hygiene",
          desc: "Auto-flag missing narratives and matters approaching billing caps — recover revenue before it's written off.",
        },
        {
          title: "Scope Limit Alerts",
          desc: "AI surfaces matters near agreed fee caps — giving partners time to have the conversation before overage becomes dispute.",
        },
      ]}
      governance="Every billing adjustment and scope change communication routes through the approval gate — full audit trail with source data attached."
      connectors={[
        "Clio", "LeanLaw", "Actionstep",
        "QuickBooks", "Xero", "Outlook", "Gmail",
      ]}
      metrics={[
        "Realization Rate", "Collection Rate",
        "Matter Profitability", "Client Concentration Risk",
      ]}
    />
  );
}
