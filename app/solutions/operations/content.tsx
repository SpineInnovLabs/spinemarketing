import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { WorkflowTransformLayout } from "../_shared/WorkflowTransformLayout";

export function OperationsContent() {
  return (
    <WorkflowTransformLayout
      domainFeatures={<SolutionDomainFeatures slug="operations" />}
      category="Operations & Delivery"
      headline="Catch delivery problems before the client notices."
      subheadline="Project health, team utilization, and client communication in one place. Exceptions surface so you can fix them proactively."
      ctaLabel="See the workspace →"
      accentColor="rgba(59,130,246,0.5)"
      beforeAfter={[
        {
          before: "A project timeline slips by 3 days. The PM doesn't flag it. The client finds out when the deliverable is late.",
          after: "Timeline drift detected on day one. AI alerts the PM with context and suggests a client update for approval.",
        },
        {
          before: "Two senior developers are booked at 120%. You find out when they miss a deadline, not when you could have rebalanced.",
          after: "Utilization signals fire when anyone exceeds 90%. AI suggests reallocation based on skills and priority.",
        },
        {
          before: "Client asks 'where are we on the project?' You check Jira, then Harvest, then Slack, then email. Ten minutes to answer a simple question.",
          after: "One view: timeline, budget, team utilization, client sentiment. Answer in 10 seconds, not 10 minutes.",
        },
      ]}
      workflow={[
        { title: "Connect your project tools", desc: "Jira, Asana, Monday, Harvest, Toggl — linked together. Every task, every hour, every milestone in one place." },
        { title: "See real-time project health", desc: "Timeline, budget burn, and utilization — updated live. Green, yellow, or red for every project at a glance." },
        { title: "Exceptions surface automatically", desc: "Timeline slip + budget overrun + unanswered client email = signal. You see it before the client calls." },
        { title: "AI suggests the fix", desc: "Reassign a resource, adjust a timeline, draft a client update — AI proposes, you review the evidence and decide." },
        { title: "Approve and execute", desc: "One click updates the project plan, sends the client notification, and creates follow-up tasks." },
      ]}
      capabilities={[
        { title: "One view of project health", desc: "Timeline, budget, team utilization, and client sentiment — all in one place. No more checking five tools." },
        { title: "Exceptions before they escalate", desc: "When delivery risks cascade — timeline slips, budgets burn, emails go unanswered — you see it immediately." },
        { title: "Team rebalancing with confidence", desc: "AI suggests who to reassign based on skills, availability, and priority. You review and approve." },
        { title: "Client updates with full context", desc: "AI drafts status updates using actual project data — milestones, blockers, revised timelines. You approve before sending." },
      ]}
      governance="Status changes and client communications queue for your approval. No scope changes happen without sign-off."
      connectors={["Asana", "Monday.com", "Jira", "Harvest", "Toggl", "Salesforce", "QuickBooks", "Slack", "Gmail"]}
      metrics={["Project Margin", "Utilization Rate", "On-Time Delivery %", "Client Satisfaction"]}
      outcomes={[
        { stat: "5%", label: "Higher On-Time" },
        { stat: "10%", label: "Lower Overtime" },
        { stat: "90%+", label: "Utilization" },
      ]}
    />
  );
}
