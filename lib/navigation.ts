import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  Mail,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { getConnectorNavMarks, INTEGRATION_KIND_MARKS, INTEGRATIONS_HREF, type ConnectorNavMark, type KindNavMark } from "@/lib/integration-nav";
import { getSolutionNavItems } from "@/lib/solution-nav";

export type NavItemChild = {
  name: string;
  href: string;
  icon: LucideIcon;
  desc?: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItemChild[];
};

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  items?: NavItemChild[];
  groups?: NavGroup[];
  /** Full-width lead entry, used by the Products menu. */
  featured?: NavItemChild;
  /** Secondary capability links under a label. */
  supporting?: NavGroup;
  /** Links kept outside the catalogue, such as the Solutions footer. */
  menuFooter?: NavLink[];
  /** Connector marks for the Integrations panel. Visible UI is the mark only. */
  connectorMarks?: ConnectorNavMark[];
  /** Icon marks for integration kinds that are not SaaS logos. */
  kindMarks?: KindNavMark[];
  external?: boolean;
};

export const DOCS_URL = "https://docs.spineworkspace.com/";

export const headerNavigation: NavItem[] = [
  {
    label: "Product",
    href: "/spineworkspace",
    featured: {
      name: "SpineWorkspace",
      href: "/spineworkspace",
      icon: LayoutGrid,
      desc: "Governed AI workspace for operational work.",
    },
    items: [
      {
        name: "Spine Twin",
        href: "/twin",
        icon: Bot,
        desc: "Your AI counterpart — evidence-backed proposals, human review.",
      },
      {
        name: "Business Context",
        href: "/business-context",
        icon: Layers,
        desc: "Where context for the task is assembled. Source systems stay the record.",
      },
      {
        name: "Adaptive Workspace",
        href: "/adaptive-workspace",
        icon: Sparkles,
        desc: "The workspace adapts to the goal, role, and evidence.",
      },
      {
        name: "Governance & Continuity",
        href: "/governance",
        icon: ShieldCheck,
        desc: "Authority, evidence, auditability, and persistent work state.",
      },
    ],
    supporting: {
      label: "Platform",
      items: [
        { name: "How it works", href: "/platform/how-it-works", icon: GitBranch },
        { name: "Data Fabric", href: "/business-context#data-fabric", icon: Network },
        { name: "Adaptive Autotuner", href: "/adaptive-workspace#adaptive-autotuner", icon: SlidersHorizontal },
        { name: "Host Connected Environment", href: "/host-connected-environment", icon: Globe },
        { name: "Continuity", href: "/continuity", icon: GitBranch },
      ],
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: getSolutionNavItems(),
    menuFooter: [
      { name: "Use cases", href: "/use-cases" },
      { name: "Solutions overview", href: "/solutions" },
    ],
  },
  { label: "How it works", href: "/platform/how-it-works" },
  {
    label: "Integrations",
    href: "/integrations",
    connectorMarks: getConnectorNavMarks(),
    kindMarks: INTEGRATION_KIND_MARKS,
    menuFooter: [{ name: "View all integrations", href: INTEGRATIONS_HREF }],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/company",
    items: [
      { name: "About Spine InnovLabs", href: "/company", icon: Building2, desc: "Why we build SpineWorkspace" },
      { name: "Blog", href: "/blog", icon: Sparkles, desc: "Product thinking and updates" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Talk to us" },
    ],
  },
];

export type FooterColumn = {
  heading: string;
  links: { name: string; href: string; external?: boolean }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { name: "SpineWorkspace", href: "/spineworkspace" },
      { name: "How it works", href: "/platform/how-it-works" },
      { name: "Spine Twin", href: "/twin" },
      { name: "Business Context", href: "/business-context" },
      { name: "Governance & Continuity", href: "/governance" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { name: "Solutions overview", href: "/solutions" },
      { name: "Account Success", href: "/solutions/customer-success" },
      { name: "Sales", href: "/solutions/sales" },
      { name: "Finance & Operations", href: "/solutions/finance" },
      { name: "Executive Teams", href: "/solutions/founders" },
      { name: "Use cases", href: "/use-cases" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { name: "Platform overview", href: "/platform" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
      { name: "Developers", href: "/developers" },
      { name: "Documentation", href: DOCS_URL, external: true },
    ],
  },
  {
    heading: "Evaluate",
    links: [
      { name: "Proof", href: "/proof" },
      { name: "Pricing", href: "/pricing" },
      { name: "Book a demo", href: "/contact?intent=demo" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About Spine InnovLabs", href: "/company" },
      { name: "Blog", href: "/blog" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const COMPANY_TAGLINE =
  "Spine InnovLabs builds SpineWorkspace, where people and AI work from truth and context together.";

export const PRODUCT_ONELINER =
  "SpineWorkspace is a governed AI workspace for operational work — connecting your existing tools so teams and AI work from the same truth and the context for this task.";
