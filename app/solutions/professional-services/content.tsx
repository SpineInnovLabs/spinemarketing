"use client";

import { IndustrySolutionLayout } from "../_shared/IndustrySolutionLayout";

export function ProfessionalServicesContent() {
  return (
    <IndustrySolutionLayout
      category="Professional Services"
      headline="The metabolism that converts billable time into revenue."
      subheadline="Matters, time, billing, and client health in one workspace."
      ctaLabel="Explore the workspace →"
      problem={{
        bullets: [
          "Unbilled time sits in WIP because entries and billing disconnect.",
          "Scope limits aren't flagged until the partner reviews the file.",
          "Client disengagement goes unnoticed until damage is done.",
        ],
      }}
      capabilities={[
        {
          title: "Matter Margin Tracking",
          desc: "Real-time billed vs. WIP vs. estimate per matter.",
        },
        {
          title: "Client Relationship Monitoring",
          desc: "Alerts when decision-maker communication goes silent.",
        },
        {
          title: "Billing Hygiene",
          desc: "Auto-flag missing narratives and matters near billing caps.",
        },
        {
          title: "Scope Limit Alerts",
          desc: "AI surfaces matters near fee caps before overage disputes.",
        },
      ]}
      governance="Billing adjustments and scope changes route through approval. Full audit trail."
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
