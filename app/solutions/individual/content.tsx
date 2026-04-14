"use client";

import { RoleSolutionLayout } from "../_shared/RoleSolutionLayout";

export function IndividualContent() {
  return (
    <RoleSolutionLayout
      role="Individual Professionals"
      headline="Your day, organised. Your context, remembered."
      subheadline="One calm view of today's priorities — AI remembers context across sessions."
      ctaLabel="Try Personal Ops →"
      ctaHref="/personal-ops"
      focus={[
        {
          title: "Cross-Tool Task Aggregation",
          desc: "Priorities from Jira, Asana, email, and Slack — ranked by impact.",
        },
        {
          title: "Session Memory",
          desc: "AI recalls your last session and suggests where to pick up.",
        },
        {
          title: "Smart Drafting",
          desc: "Emails drafted with cross-tool context — your approval required.",
        },
        {
          title: "Focus Protection",
          desc: "AI filters noise — your morning briefing in 2 minutes.",
        },
      ]}
      governanceNote="AI cannot send or update anything without your explicit approval."
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
