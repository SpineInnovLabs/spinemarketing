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
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { getConnectorNavMarks, INTEGRATION_KIND_MARKS, type ConnectorNavMark, type KindNavMark } from "@/lib/integration-nav";
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
    label: "Products",
    href: "/spineworkspace",
    featured: {
      name: "Spine Workspace",
      href: "/spineworkspace",
      icon: LayoutGrid,
      desc: "Where humans and AI move business goals forward.",
    },
    items: [
      {
        name: "Spine Twin",
        href: "/twin",
        icon: Bot,
        desc: "Your context-aware AI counterpart for shared work.",
      },
      {
        name: "Spine Coworker",
        href: "/twin#coworker",
        icon: Search,
        desc: "Gather the business context that matters.",
      },
      {
        name: "Spine Adaptive Autotuner",
        href: "/adaptive-workspace#adaptive-autotuner",
        icon: SlidersHorizontal,
        desc: "Adapt the environment around the work.",
      },
      {
        name: "Spine Data Fabric",
        href: "/business-context#data-fabric",
        icon: Network,
        desc: "Keep business context, memory, and evidence connected.",
      },
    ],
    supporting: {
      label: "Explore capabilities",
      items: [
        { name: "Business Context", href: "/business-context", icon: Layers },
        { name: "Adaptive Workspace", href: "/adaptive-workspace", icon: Sparkles },
        { name: "Host Connected Environment", href: "/host-connected-environment", icon: Globe },
        { name: "Governance", href: "/governance", icon: ShieldCheck },
        { name: "Continuity", href: "/continuity", icon: GitBranch },
      ],
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: getSolutionNavItems(),
    menuFooter: [
      { name: "Explore practical scenarios", href: "/use-cases" },
      { name: "View all solutions", href: "/solutions" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    connectorMarks: getConnectorNavMarks(),
    kindMarks: INTEGRATION_KIND_MARKS,
    menuFooter: [{ name: "View all integrations", href: "/integrations" }],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Proof", href: "/proof" },
  {
    label: "Company",
    href: "/company",
    items: [
      { name: "About", href: "/about", icon: Building2, desc: "Why we exist" },
      { name: "Company", href: "/company", icon: Building2, desc: "Spine InnovLabs" },
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
    heading: "Products",
    links: [
      { name: "Spine Workspace", href: "/spineworkspace" },
      { name: "Spine Twin", href: "/twin" },
      { name: "Spine Coworker", href: "/twin#coworker" },
      { name: "Spine Adaptive Autotuner", href: "/adaptive-workspace#adaptive-autotuner" },
      { name: "Spine Data Fabric", href: "/business-context#data-fabric" },
      { name: "Business Context", href: "/business-context" },
      { name: "Adaptive Workspace", href: "/adaptive-workspace" },
      { name: "Host Connected Environment", href: "/host-connected-environment" },
      { name: "Governance", href: "/governance" },
      { name: "Continuity", href: "/continuity" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { name: "All Solutions", href: "/solutions" },
      { name: "Account Success", href: "/solutions/customer-success" },
      { name: "Sales", href: "/solutions/sales" },
      { name: "Finance & Business Ops", href: "/solutions/finance" },
      { name: "Founders & CXOs", href: "/solutions/founders" },
      { name: "Practical scenarios", href: "/use-cases" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "Proof", href: "/proof" },
      { name: "Developers", href: "/developers" },
      { name: "Platform", href: "/platform" },
      { name: "Security", href: "/security" },
      { name: "Docs", href: DOCS_URL, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Company", href: "/company" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const COMPANY_TAGLINE =
  "Spine InnovLabs builds SpineWorkspace, the business-context workspace where humans and AI work together.";

export const PRODUCT_ONELINER =
  "SpineWorkspace helps humans and AI work toward the same business goals using shared business context, adaptive capability resolution, and persistent continuity.";
