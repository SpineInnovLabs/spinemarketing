"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function FoundersContent() {
  return (
    <RoleSolutionLayout
      role="Founders & CXOs"
      headline="The business view that used to take hours."
      subheadline="You run a business across a dozen apps. IntegrateWise connects them all over the Spine and gives you one workspace — so your Monday brief takes 2 minutes, not 2 hours."
      whatYouSee={[
        "Revenue, ARR, and MRR movement with week-over-week deltas",
        "Pipeline health and deal velocity across the full funnel",
        "Churn risk accounts ranked by signal strength",
        "Cash position, burn rate, and runway estimate",
        "Team utilisation and project delivery status",
        "Support volume and escalation trends",
        "Key decisions and open items from the last 30 days",
        "Twin-recommended actions with evidence, waiting for your approval",
      ]}
      benefits={[
        {
          title: "Monday brief in 2 minutes",
          desc: "The Spine assembles the business picture from every connected app overnight. You open IntegrateWise on Monday morning and the full operating view is ready.",
        },
        {
          title: "Board pack without the prep work",
          desc: "Revenue trends, churn analysis, and operating metrics are already assembled from the Spine. The Twin drafts the narrative. You refine and present.",
        },
        {
          title: "No blind spots",
          desc: "Problems that live in the gap between apps — a customer churning, a project overrunning, cash tightening — are surfaced before they compound.",
        },
      ]}
      useCases={[
        {
          title: "Monday business brief",
          desc: "Every Monday morning, IntegrateWise surfaces the full operating picture: revenue movement, at-risk accounts, open escalations, team utilisation, and cash position — assembled from every connected app overnight. The Twin adds the narrative. You read, approve, and start the week with full context.",
        },
        {
          title: "Revenue movement analysis",
          desc: "MRR dropped 8% this month. The Spine shows you where: two churned accounts, one downgrade, three delayed renewals. The Twin identifies the common pattern and recommends the intervention. You review the evidence and act.",
        },
      ]}
    />
  );
}
