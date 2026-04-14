"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function OperationsContent() {
  return (
    <RoleSolutionLayout
      role="Operations & Delivery"
      headline="Catch delivery risks. Before they reach the client."
      subheadline="Project status, utilization, and client comms unified — AI flags exceptions."
      ctaLabel="Explore the workspace →"
      focus={[
        {
          title: "Project Health 360",
          desc: "Timeline, budget, utilization, and sentiment in one live view.",
        },
        {
          title: "Exception Management",
          desc: "Cascading delivery risks surfaced before the client knows.",
        },
        {
          title: "Resource Optimization",
          desc: "AI suggests rebalancing by skills and priority — you approve.",
        },
        {
          title: "Client Communication Governance",
          desc: "Draft updates with full context — approve before sending.",
        },
      ]}
      governanceNote="Status changes and client comms queue for PM approval. No scope changes without sign-off."
      connects={[
        "Asana", "Monday.com", "Jira", "Harvest",
        "Toggl", "Salesforce", "QuickBooks", "Slack", "Gmail",
      ]}
      metrics={[
        "Project Margin", "Utilization Rate",
        "On-Time Delivery %", "Client Satisfaction",
      ]}
    />
  );
}
