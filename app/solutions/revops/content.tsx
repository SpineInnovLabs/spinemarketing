"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function RevOpsContent() {
  return (
    <RoleSolutionLayout
      role="RevOps & Business Operations"
      headline="One operating workspace for the revenue and ops layer."
      subheadline="RevOps teams sit at the intersection of sales, success, finance, and systems. IntegrateWise connects every app over the Spine and gives you one workspace to see — and fix — the full operating picture."
      whatYouSee={[
        "Pipeline health and forecast accuracy across the full funnel",
        "Revenue by segment, cohort, and product with movement analysis",
        "Churn signals from support, usage, and CRM combined",
        "Headcount, capacity, and utilisation by team and function",
        "System health and integration status across the stack",
        "Process exceptions and data quality issues across apps",
        "Open cross-functional initiatives with status and owners",
        "Twin-recommended actions with evidence, waiting for your approval",
      ]}
      benefits={[
        {
          title: "See the full operating picture",
          desc: "Every metric your board cares about — revenue, churn, pipeline, capacity, cash — pulled from every source and assembled in one workspace.",
        },
        {
          title: "Fix the gaps before they cost revenue",
          desc: "Process exceptions, data quality issues, and cross-system inconsistencies are surfaced by the Spine before they distort decisions.",
        },
        {
          title: "AI that works across the stack",
          desc: "The Twin reads every system through the Spine. It surfaces cross-system anomalies, drafts recommendations, and waits for your approval before anything changes.",
        },
      ]}
      useCases={[
        {
          title: "Cross-system risk radar",
          desc: "Three accounts have usage drops, delayed invoices, and open support escalations — but no individual app would surface the combined signal. The Spine connects the dots. The Twin ranks the risk and drafts the intervention plan. You approve.",
        },
        {
          title: "Quarterly board pack",
          desc: "Revenue by segment, pipeline coverage, churn breakdown, headcount, and cash position — assembled from every connected system by the Spine. The Twin drafts the narrative and commentary. You review and publish.",
        },
      ]}
    />
  );
}
