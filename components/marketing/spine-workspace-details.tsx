import Link from "next/link";
import { ResponsiveWorkbenchScreenshot } from "./responsive-workbench-screenshot";
import { WorkspaceAuthActions } from "./workspace-auth-actions";
import { WorkspaceBenefits } from "./workspace-benefits";
import { WorkspaceSubscriptionValue } from "./workspace-subscription-value";
import { WorkbenchViewExplorer } from "./workbench-view-explorer";
import { ThreeProductPillars } from "./three-product-pillars";
import { WorkbenchGuidedDemo } from "./workbench-guided-demo";
import { FabricProofShowcase } from "./fabric-proof-showcase";
import { SpineNetworkContinuity } from "./spine-network-continuity";
import {
  ArrowRight,
  Database,
  FileText,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Goals and priorities",
    body: "Keep the purpose of the work visible. Bring goals, priorities, and related signals together so the next step has a clear business reason.",
  },
  {
    icon: Database,
    title: "Connected business context",
    body: "Relate customer records, conversations, decisions, and evidence across your existing tools. Source systems remain authoritative.",
  },
  {
    icon: Users,
    title: "A workspace for your role",
    body: "Bring relevant work and context to the person responsible. Different teams can work from a shared business picture.",
  },
  {
    icon: Sparkles,
    title: "Your context-aware Twin",
    body: "An AI counterpart helps gather understanding, prepare work, and propose useful next steps. People retain judgment and accountability.",
  },
  {
    icon: FileText,
    title: "Evidence beside decisions",
    body: "Review the sources behind a conclusion. Missing or stale context stays visible instead of becoming a confident assumption.",
  },
  {
    icon: ShieldCheck,
    title: "Governed next steps",
    body: "Keep proposals separate from execution. Consequential actions require appropriate authority, followed by observation and verification.",
  },
];
const technology = [
  {
    icon: Network,
    name: "Spine Fabric",
    label: "Business-context foundation",
    body: "Connects entities, relationships, signals, decisions, evidence, and continuity.",
    href: "/platform/spine-fabric",
  },
  {
    icon: Layers3,
    name: "Spine Workbench",
    label: "Human work surface",
    body: "Brings the relevant context and priorities into an adaptive workspace.",
    href: "/product/the-adaptive-workspace",
  },
  {
    icon: Sparkles,
    name: "Spine Twin",
    label: "AI counterpart",
    body: "Gathers context, prepares work, and proposes informed next steps.",
    href: "/twin",
  },
  {
    icon: ShieldCheck,
    name: "Spine Runtime",
    label: "Execution and assurance",
    body: "Coordinates authorized execution, observation, and reconciliation.",
    href: "/governance",
  },
  {
    icon: Workflow,
    name: "Connected capabilities",
    label: "Tools and integrations",
    body: "Brings connectors, MCP servers, plugins, and reusable capabilities into the work.",
    href: "/integrations",
  },
];

export function SpineWorkspaceDetails() {
  return (
    <div className="innovtech-page">
      <section
        className="innovtech-product innovtech-product-overview"
        aria-labelledby="product-title"
      >
        <div className="innovtech-product-copy">
          <p className="innovtech-eyebrow">
            SPINEWORKSPACE · BUSINESS CONTEXT FOR HUMANS & AI
          </p>
          <h1 id="product-title">
            One business context. 13 domains. Ready-to-work views.
          </h1>
          <p className="innovtech-hero-description">
            Ingest and retrieve authorized business context from the systems you use.
            Project that context from one Spine Fabric into role-specific views,
            with prebuilt operational workflows for humans and AI.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#245EA9]" aria-label="Product principles">
            <li>Governed truth and context</li>
            <li>13 domain projections</li>
            <li>Ready-to-work views</li>
          </ul>
          <WorkspaceAuthActions />
          <div className="innovtech-actions">
            <Link
              href="/product/how-it-works"
              className="innovtech-button innovtech-button-secondary"
            >
              See how it works <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="innovtech-button innovtech-button-secondary"
            >
              Subscriptions & pricing <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <p className="innovtech-governance">
            Humans govern the business. AI helps the business work.
          </p>
        </div>
        <figure className="innovtech-product-illustration">
          <div className="overflow-hidden rounded-2xl border border-[#CCE3F5] bg-white shadow-[0_20px_60px_rgba(15,70,130,.12)]">
            <div className="flex items-center justify-between border-b border-[#E2EEF8] bg-[#F7FAFD] px-4 py-2.5 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-[11px] font-semibold text-[#5A7391]">
                  /workspace/home
                </span>
              </div>
              <span className="rounded-full border border-[#CCE3F5] bg-[#EBF5FF] px-2 py-0.5 text-[10px] font-semibold text-[#006FE8]">
                Live Workbench View
              </span>
            </div>
            <ResponsiveWorkbenchScreenshot
              src="/images/workbench/common/home.webp"
              alt="Spine Workspace Workbench application screen showing navigation, shared work areas and Spine Twin."
              priority
            />
          </div>
          <figcaption>
            Spine Workspace Workbench: shared business context and role-specific work.
          </figcaption>
        </figure>
      </section>
      <ThreeProductPillars compact />
      <WorkbenchGuidedDemo />
      <FabricProofShowcase />
      <SpineNetworkContinuity />
      <WorkspaceBenefits detailed />
      <section id="features" className="innovtech-section">
        <p className="innovtech-eyebrow">THE WORKSPACE, IN DETAIL</p>
        <h2>
          The context you need.
          <br />
          The work you own.
        </h2>
        <p className="innovtech-section-intro">
          SpineWorkspace is the product. Its human work surface and AI
          counterpart bring connected business context into everyday work.
        </p>
        <div className="innovtech-feature-grid">
          {features.map(({ icon: Icon, title, body }, i) => (
            <article key={title}>
              <span className="innovtech-icon-circle">
                <Icon size={26} />
              </span>
              <p className="innovtech-step-number">0{i + 1}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="how-it-works"
        className="innovtech-section innovtech-white-section"
      >
        <p className="innovtech-eyebrow">HOW THE WORKSPACE WORKS</p>
        <h2>
          Understand. Prepare.
          <br />
          Review. Move forward.
        </h2>
        <div className="innovtech-feature-grid">
          {[
            {
              title: "Gather the right context",
              body: "Start from a customer, goal, signal, or piece of work. Bring related records and evidence into the review.",
            },
            {
              title: "Prepare a useful next step",
              body: "People and their Twin work from the same context. The Twin can help assemble information and propose next steps.",
            },
            {
              title: "Decide with authority",
              body: "The responsible person reviews evidence and permissions. Authorized execution stays separate from a proposal.",
            },
          ].map(({ title, body }, i) => (
            <article key={title}>
              <p className="innovtech-eyebrow">STEP 0{i + 1}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link
          href="/platform/how-it-works"
          className="innovtech-text-link innovtech-section-link"
        >
          See the underlying workflow <ArrowRight size={18} />
        </Link>
      </section>
      <WorkbenchViewExplorer initialDomain="founderops" />
      <WorkspaceSubscriptionValue />
      <section id="technology" className="innovtech-section">
        <p className="innovtech-eyebrow">THE TECHNOLOGY UNDERNEATH</p>
        <h2>
          One workspace.
          <br />A connected foundation.
        </h2>
        <p className="innovtech-section-intro">
          These layers work together as the SpineWorkspace architecture. They
          describe the technology behind the product, rather than separate
          availability commitments.
        </p>
        <div className="innovtech-feature-grid">
          {technology.map(({ icon: Icon, name, label, body, href }) => (
            <article key={name}>
              <span className="innovtech-icon-circle">
                <Icon size={26} />
              </span>
              <h3>{name}</h3>
              <p className="innovtech-eyebrow">{label}</p>
              <p>{body}</p>
              <Link href={href} className="innovtech-text-link">
                Learn more <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="innovtech-company-section">
        <div>
          <p className="innovtech-eyebrow">BUILT AROUND RESPONSIBILITY</p>
          <h2>
            Evidence and authority
            <br />
            stay with the work.
          </h2>
          <p>
            Connected context should make responsibility clearer. Review the
            evidence, understand access and authority, and keep humans
            accountable for consequential decisions.
          </p>
          <Link href="/security" className="innovtech-text-link">
            Explore security and governance <ArrowRight size={18} />
          </Link>
        </div>
        <div className="innovtech-company-links">
          <Link href="/solutions">
            Explore team use cases <ArrowRight size={20} />
          </Link>
          <Link href="/integrations">
            Explore connected capabilities <ArrowRight size={20} />
          </Link>
          <Link href="/company">
            Meet Spine InnovTech <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      <section className="innovtech-final-section">
        <p className="innovtech-eyebrow">SEE IT IN CONTEXT</p>
        <h2>
          Explore the workspace
          <br />
          with your team’s work in mind.
        </h2>
        <p>
          Talk with us about your use case, supported tools, and product
          availability.
        </p>
        <Link className="innovtech-button" href="/contact?intent=demo">
          Book a demo <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
