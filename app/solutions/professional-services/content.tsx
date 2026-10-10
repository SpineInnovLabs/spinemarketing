import { SolutionDomainFeatures } from "@/components/marketing/solution-domain-features";

import { DayInLifeLayout } from "../_shared/DayInLifeLayout";

export function ProfessionalServicesContent() {
  return (
    <DayInLifeLayout
      domainFeatures={<SolutionDomainFeatures slug="professional-services" />}
      role="Professional Services"
      headline="Bill what you earn. Earn what you bill."
      subheadline="Time entries, client health, and billing all connected. Stop losing revenue to unbilled work and scope surprises."
      ctaLabel="See it with your data →"
      accentColor="rgba(59,130,246,0.5)"
      beforeAfter={[
        {
          before: "Hours logged in the time tracker but never billed because time entries and invoicing live in different systems.",
          after: "Unbilled time surfaces automatically as a signal. You see it in real time, not at month-end reconciliation.",
        },
        {
          before: "Scope limits aren't flagged until a partner reviews the file. By then, you've already done the work.",
          after: "AI alerts you when a matter approaches its fee cap — before the work is done, not after.",
        },
        {
          before: "A key client decision-maker goes quiet for weeks. Nobody notices until the relationship is strained.",
          after: "Champion silence detected in 48 hours. AI drafts a re-engagement note for your review.",
        },
      ]}
      timeline={[
        { time: "8:00", title: "Morning Brief", desc: "Open your workspace. See which matters are near billing caps, which clients went quiet, and where WIP is building up." },
        { time: "9:30", title: "Client prep in one click", desc: "Meeting in 30 minutes? One click generates a prep sheet — billable summary, open matters, recent communications, and relationship health." },
        { time: "11:00", title: "Scope alert handled", desc: "AI flagged a matter approaching its fee cap yesterday. You approved a scope-adjustment email to the client. Done in 2 minutes." },
        { time: "2:00", title: "Billing review", desc: "Missing time narratives, unbilled WIP, and matters with declining realization — all flagged for your batch review." },
        { time: "4:30", title: "Re-engage a quiet client", desc: "Decision-maker hasn't responded in 10 days. AI drafted a check-in. You edit one line and approve." },
      ]}
      capabilities={[
        { title: "See matter profitability in real time", desc: "Billed hours vs. WIP vs. estimate — per matter, per client. Know where you stand before month-end." },
        { title: "Get alerts when clients go quiet", desc: "AI flags when decision-maker communication drops off so you can re-engage proactively." },
        { title: "Catch billing gaps automatically", desc: "Missing narratives, matters near caps, and unbilled work surface as signals for your review." },
        { title: "Scope limits before overages", desc: "AI alerts you when a matter approaches its fee cap — before the work is done." },
      ]}
      governance="Billing adjustments and scope changes route through approval. Every change logged with full context."
      connectors={["Clio", "LeanLaw", "Actionstep", "QuickBooks", "Xero", "Outlook", "Gmail"]}
      metrics={["Realization Rate", "Collection Rate", "Matter Profitability", "Client Concentration Risk"]}
      outcomes={[
        { stat: "9%", label: "Higher Utilization" },
        { stat: "3%", label: "Better Renewal" },
        { stat: "100%", label: "Audit-Ready" },
      ]}
    />
  );
}
