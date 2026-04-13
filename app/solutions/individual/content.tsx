"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function IndividualContent() {
  return (
    <RoleSolutionLayout
      role="Individual Professionals"
      headline="Your Personal Command Center"
      subheadline="All your work, one calm view. AI remembers context across sessions — you approve every action."
      ctaLabel="Try Personal Ops →"
      ctaHref="/personal-ops"
      focus={[
        {
          title: "Cross-Tool Task Aggregation",
          desc: "See today's priorities from Jira, Asana, email, and Slack in one queue — ranked by deadline, stakeholder seniority, and business impact.",
        },
        {
          title: "Session Memory",
          desc: "AI recalls what you were working on yesterday and suggests where to pick up. No more re-assembling context at the start of every session.",
        },
        {
          title: "Smart Drafting",
          desc: "Emails, updates, and notes drafted with full cross-tool context — your edit and approval required before anything sends. Nothing executes in your name without a click.",
        },
        {
          title: "Focus Protection",
          desc: "AI filters noise, surfaces only what matches your role and priorities. Your morning briefing in 2 minutes — not 45.",
        },
      ]}
      governanceNote="Personal but safe. AI cannot send communications or update records on your behalf without explicit click-to-approve. Your context stays private. Organizational data respects RBAC — you only see what the Spine's access controls allow."
      connects={[
        "Gmail", "Outlook", "Slack", "Salesforce",
        "HubSpot", "Notion", "Asana", "Jira",
        "Google Calendar", "Zoom",
      ]}
      metrics={[
        "Response Time", "Task Completion Velocity",
        "Meeting Preparation Quality", "Context-Switching Reduction",
      ]}
    />
  );
}
