import { DOCS_URL } from "@/lib/navigation"
import type { PageHeroCopy } from "@/lib/site-copy"

export type BuyerLens = {
  audience: string
  pain: string
  firstWorkflow: string
  stack: string
  control: string
}

export const BUYER_CTAS = {
  packet: { label: "See a renewal decision packet", href: "/#renewal-decision-packet" },
  workflowReview: { label: "Book a workflow review", href: "/contact?intent=workflow-review" },
  demo: { label: "Book a tailored demo", href: "/contact?intent=demo" },
  replay: { label: "Replay the renewal workflow", href: "/#renewal-workflow" },
} as const

const RENEWAL_LENS: BuyerLens = {
  audience: "Customer-success, account management, and RevOps teams",
  pain: "Renewal evidence scattered across CRM, support, email, documents, and finance",
  firstWorkflow: "Renewal Decision Workspace",
  stack: "Works with Salesforce, support, inbox, documents, and finance—you keep the system of record",
  control: "AI prepares the decision packet; your team approves; the CRM executes",
}

const LENS_BY_PREFIX: { prefix: string; lens: BuyerLens }[] = [
  {
    prefix: "/use-cases/customer-success",
    lens: RENEWAL_LENS,
  },
  {
    prefix: "/solutions/customer-success",
    lens: RENEWAL_LENS,
  },
  {
    prefix: "/use-cases/sales",
    lens: {
      audience: "Sales leaders and account executives",
      pain: "Deal truth split between CRM, email, and Slack before every executive review",
      firstWorkflow: "Deal review decision packet",
      stack: "Connects CRM, email, and support signals—Salesforce stays authoritative",
      control: "AI drafts next-best actions; sellers and leaders approve before CRM updates",
    },
  },
  {
    prefix: "/solutions/sales",
    lens: {
      audience: "Sales and RevOps teams",
      pain: "Pipeline reviews rebuilt from tabs every week",
      firstWorkflow: "Account review decision packet",
      stack: "CRM-first; Spine assembles evidence from connected tools",
      control: "Proposals stay proposals until a person accepts",
    },
  },
  {
    prefix: "/use-cases/operations",
    lens: {
      audience: "Operations and program leaders",
      pain: "Handoffs lose context between CRM, tickets, and finance",
      firstWorkflow: "Cross-functional decision packet",
      stack: "Connects ops tools without replacing them",
      control: "Human approval before write-back to the owning system",
    },
  },
  {
    prefix: "/governance",
    lens: {
      audience: "CS leaders, RevOps, and security stakeholders evaluating AI control",
      pain: "Autonomous agents that change records without approval",
      firstWorkflow: "Renewal Decision Workspace (governed)",
      stack: "Integrates with existing systems; does not replace governance in your CRM",
      control: "Explicit approval gates; audit trail; no silent writes",
    },
  },
  {
    prefix: "/security",
    lens: {
      audience: "Security, IT, and operations buyers",
      pain: "AI tools with unclear data boundaries and execution limits",
      firstWorkflow: "Renewal Decision Workspace (scoped pilot)",
      stack: "Authorized read context; write-back only after approval",
      control: "Role-scoped access; bounded execution; evidence on every action",
    },
  },
  {
    prefix: "/developers",
    lens: {
      audience: "Integration owners supporting CS and RevOps workflows",
      pain: "Custom scripts that break when renewal review needs new evidence",
      firstWorkflow: "Renewal Decision Workspace connectors",
      stack: "APIs and integrations to systems of record",
      control: "Your app triggers proposals; humans approve in the workspace",
    },
  },
  {
    prefix: "/integrations",
    lens: {
      audience: "RevOps and CS ops connecting the renewal stack",
      pain: "Renewal managers re-authenticate across six tools for one account review",
      firstWorkflow: "Renewal Decision Workspace",
      stack: "CRM, support, email, documents, finance—connected, not replaced",
      control: "Read authorized context; write only after human approval",
    },
  },
  {
    prefix: "/platform",
    lens: {
      audience: "Teams deploying governed workflows starting with renewals",
      pain: "Platform sprawl without a decision workflow buyers can pilot",
      firstWorkflow: "Renewal Decision Workspace on Spine Platform",
      stack: "Platform connects tools; each tool keeps the record",
      control: "Same approval model across workflows",
    },
  },
  {
    prefix: "/twin",
    lens: {
      audience: "CS and revenue teams using AI for account reviews",
      pain: "Chat AI that invents commitments without sources",
      firstWorkflow: "Renewal proposal preparation (on request)",
      stack: "Reads authorized CRM and support context",
      control: "Twin proposes; renewal owner approves; CRM updates",
    },
  },
  {
    prefix: "/spineworkspace",
    lens: RENEWAL_LENS,
  },
  {
    prefix: "/pricing",
    lens: {
      audience: "VP Customer Success, CCO, or COO sponsoring a renewal workflow pilot",
      pain: "Buying another AI tool without a defined first workflow",
      firstWorkflow: "Renewal Decision Workspace evaluation",
      stack: "Pricing follows connectors and governance scope—not seat-based mystery",
      control: "Pilot one governed workflow before expanding",
    },
  },
]

export function getBuyerLens(path: string): BuyerLens {
  const normalized = path.split("?")[0] || "/"
  for (const { prefix, lens } of LENS_BY_PREFIX) {
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
      return lens
    }
  }
  if (normalized.startsWith("/solutions/") || normalized.startsWith("/use-cases/")) {
    return {
      audience: "Operational teams with fragmented toolchains",
      pain: "Decisions delayed because context is rebuilt for every review",
      firstWorkflow: "Start with Renewal Decision Workspace, then expand",
      stack: "Connects your existing systems of record",
      control: "AI prepares; accountable people approve",
    }
  }
  if (normalized === "/" || normalized.startsWith("/blog")) {
    return RENEWAL_LENS
  }
  return {
    ...RENEWAL_LENS,
    audience: "Customer-success and revenue teams (start with renewals)",
  }
}

/** Buyer-first hero overrides by route. Merged over page-specific hero copy. */
export const BUYER_HERO_BY_PATH: Record<string, Partial<PageHeroCopy> & { principle?: string }> = {
  "/spineworkspace": {
    badge: "For customer-success and revenue teams",
    headline: "Make every renewal decision from the full customer story.",
    subhead:
      "SpineWorkspace assembles authorized CRM, support, email, document, and finance context into an evidence-backed renewal proposal your team reviews, approves, and executes.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: BUYER_CTAS.workflowReview,
    principle: "Your CRM and support desk remain the systems of record. SpineWorkspace is the renewal decision workspace—not another database.",
  },
  "/twin": {
    badge: "Renewal and account reviews",
    headline: "AI that prepares the renewal case—not a blank chat.",
    subhead:
      "When a renewal owner asks, Twin reads authorized account evidence and prepares a source-linked proposal. Every claim points back to CRM, support, or email. Twin never silently updates the record.",
    primaryCta: BUYER_CTAS.replay,
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/business-context": {
    badge: "Renewal decision support",
    headline: "Stop hunting for renewal evidence across tabs.",
    subhead:
      "Spine Context Assembler gathers CRM fields, tickets, emails, files, and finance signals for this account review—linked to sources, kept separate from the record until a person decides.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: { label: "See governance", href: "/governance" },
  },
  "/governance": {
    badge: "For buyers who need control",
    headline: "Your team approves every renewal action before the CRM changes.",
    subhead:
      "AI prepares the decision packet. Account owners and leaders review, edit, reject, or escalate. Approved actions write back through the system that owns the record.",
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: { label: "Security overview", href: "/security" },
  },
  "/continuity": {
    badge: "Account reviews that survive handoffs",
    headline: "Renewal context should not reset when someone opens a new tool.",
    subhead:
      "When risk shows up in support and the review moves to email or the CRM, the account story travels with the work—so the next reviewer is not rebuilding from scratch.",
    primaryCta: BUYER_CTAS.replay,
    secondaryCta: BUYER_CTAS.packet,
  },
  "/proof": {
    badge: "See the first workflow",
    headline: "Watch a renewal decision packet end to end.",
    subhead:
      "Demonstrations show evidence assembly, proposal review, approval, and CRM write-back—not generic AI demos or invented customer outcomes.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/platform": {
    badge: "Deploy renewals first",
    headline: "Platform for governed renewal workflows—then expand.",
    subhead:
      "Spine Platform connects your stack, runs the Renewal Decision Workspace, and keeps the same approval model when you add workflows later.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: { label: "How it works", href: "/platform/how-it-works" },
  },
  "/platform/how-it-works": {
    badge: "Renewal workflow mechanics",
    headline: "Evidence → proposal → approval → CRM update.",
    subhead:
      "See how authorized context becomes a reviewable renewal recommendation, why drafts are not records, and how accountable people stay in control.",
    primaryCta: BUYER_CTAS.replay,
    secondaryCta: BUYER_CTAS.workflowReview,
    principle: "Systems of record stay authoritative. SpineWorkspace governs the decision—not the database of truth.",
  },
  "/integrations": {
    badge: "Your renewal stack, connected",
    headline: "Connect CRM, support, inbox, and finance for renewal reviews.",
    subhead:
      "Integrations exist so renewal managers stop re-logging into six tools. Spine reads authorized context and prepares proposals; your CRM still owns the customer record.",
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: { label: "Browse connectors", href: "/integrations#catalog" },
  },
  "/security": {
    badge: "Enterprise evaluation",
    headline: "Security boundaries for AI-assisted renewal decisions.",
    subhead:
      "Scoped access, audit trails, and execution limits—so Twin can help prepare renewal packets without autonomous changes to customer data.",
    primaryCta: { label: "Contact security", href: "/contact?intent=security" },
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/use-cases": {
    badge: "Start with renewals",
    headline: "One governed workflow first—then your function.",
    subhead:
      "Most teams begin with the Renewal Decision Workspace for customer-success and RevOps. Other roles use the same evidence → approval → execution model.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/use-cases/customer-success": {
    badge: "Customer success & renewals",
    headline: "Stop rebuilding the account story before every renewal review.",
    subhead:
      "Health signals, support history, commitments, and finance context in one evidence-backed decision packet—ready for your weekly account review or QBR.",
    primaryCta: BUYER_CTAS.packet,
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/use-cases/sales": {
    badge: "Sales & RevOps",
    headline: "Walk into the deal review with the full account story.",
    subhead:
      "Pipeline, commitments, and risk signals from CRM and email—assembled for next-best action proposals your team approves before the record changes.",
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: { label: "See renewal workflow", href: "/#renewal-workflow" },
  },
  "/developers": {
    badge: "Integrations for renewal workflows",
    headline: "Connect the systems your renewal review already uses.",
    subhead:
      "Build and maintain connectors that feed the Renewal Decision Workspace—authorized reads, approval-gated writes, evidence on every field.",
    primaryCta: { label: "Read the docs", href: DOCS_URL },
    secondaryCta: BUYER_CTAS.workflowReview,
  },
  "/company": {
    badge: "Spine InnovLabs",
    headline: "We build governed decision workflows for fragmented operations.",
    subhead:
      "Starting with customer-success and renewal teams who spend hours reconstructing account reality—without replacing CRM, support, or finance systems.",
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: BUYER_CTAS.packet,
  },
}

export function mergeBuyerHero(
  path: string,
  hero: PageHeroCopy,
): PageHeroCopy & { principle?: string } {
  const normalized = path.split("?")[0] || "/"
  const override = BUYER_HERO_BY_PATH[normalized]
  const merged = { ...hero, ...override }

  if (!merged.primaryCta) {
    merged.primaryCta = BUYER_CTAS.packet
  }
  if (!merged.secondaryCta) {
    merged.secondaryCta = BUYER_CTAS.workflowReview
  }

  const genericPrimary = merged.primaryCta.label.toLowerCase().includes("book a demo")
  if (genericPrimary && normalized !== "/contact") {
    merged.primaryCta = BUYER_CTAS.workflowReview
    if (!override?.secondaryCta) {
      merged.secondaryCta = BUYER_CTAS.packet
    }
  }

  return merged
}

export function solutionHeroFromPublic(solution: {
  name: string
  headline: string
  description: string
  id: string
}): PageHeroCopy & { principle?: string } {
  if (solution.id === "customer-success") {
    return mergeBuyerHero("/solutions/customer-success", {
      badge: "Account Success & renewals",
      headline: "Stop rebuilding the customer story before every renewal decision.",
      subhead: solution.description,
      primaryCta: BUYER_CTAS.packet,
      secondaryCta: BUYER_CTAS.workflowReview,
      principle: RENEWAL_LENS.control,
    })
  }

  return mergeBuyerHero(`/solutions/${solution.id}`, {
    badge: solution.name,
    headline: solution.headline,
    subhead: `${solution.description} Start with a governed decision packet; expand after renewals are working.`,
    primaryCta: BUYER_CTAS.workflowReview,
    secondaryCta: BUYER_CTAS.packet,
  })
}
