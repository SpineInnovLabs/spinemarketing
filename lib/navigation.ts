import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  Building2,
  FolderSearch,
  Inbox,
  Layers,
  LayoutGrid,
  BookOpen,
  History,
  Images,
  Mail,
  Network,
  Newspaper,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { getConnectorNavMarks, INTEGRATION_KIND_MARKS, INTEGRATIONS_HREF, type ConnectorNavMark, type KindNavMark } from "@/lib/integration-nav";
import { getSolutionNavItems } from "@/lib/solution-nav";
import { SPINE_WORKSPACE_APEX } from "@/lib/site-urls";

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
    href: SPINE_WORKSPACE_APEX,
    external: true,
    featured: {
      name: "SpineWorkspace",
      href: SPINE_WORKSPACE_APEX,
      icon: LayoutGrid,
      desc: "A Spine InnovLabs product. The workspace where a person sees the work and decides.",
      external: true,
    },
    items: [
      {
        name: "Spine Platform",
        href: "/platform",
        icon: Boxes,
        desc: "A Spine InnovLabs product. The platform the Spine products run with.",
      },
      {
        name: "Spine Fabric",
        href: "/platform/spine-fabric",
        icon: Network,
        desc: "A Spine InnovLabs product. One connection to the tools that keep the record.",
      },
      {
        name: "Spine Twin",
        href: "/twin",
        icon: Bot,
        desc: "A Spine InnovLabs product. Prepares a proposal when someone asks.",
      },
      {
        name: "Spine Coworker",
        href: "/twin#coworker",
        icon: Users,
        desc: "A Spine InnovLabs product. Gathers the records and evidence this person may use.",
      },
      {
        name: "Spine Context Assembler",
        href: "/business-context",
        icon: Layers,
        desc: "A Spine InnovLabs product. Assembles the context for this task.",
      },
      {
        name: "Spine Adaptive Auto Tuner",
        href: "/adaptive-workspace#adaptive-autotuner",
        icon: SlidersHorizontal,
        desc: "A Spine InnovLabs product. Fits the workspace to the role and the task.",
      },
      {
        name: "Spine Triage Bot",
        href: "/triage-bot",
        icon: Inbox,
        desc: "A Spine InnovLabs product. Sorts what just arrived so a person sees what needs a decision.",
      },
      {
        name: "Spine Folder Monitor",
        href: "/folder-monitor",
        icon: FolderSearch,
        desc: "A Spine InnovLabs product. Watches the folders the business already uses.",
      },
    ],
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
      { name: "About Spine InnovLabs", href: "/company", icon: Building2, desc: "The company behind the Spine products" },
      { name: "Blog", href: "/blog", icon: BookOpen, desc: "Product thinking." },
      { name: "Updates", href: "/updates", icon: Newspaper, desc: "What changed for buyers." },
      { name: "Changelog", href: "/changelog", icon: History, desc: "Dated product log." },
      { name: "Portfolio", href: "/portfolio", icon: Images, desc: "Demonstrations, not customer results." },
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
      { name: "SpineWorkspace", href: SPINE_WORKSPACE_APEX, external: true },
      { name: "Spine Platform", href: "/platform" },
      { name: "Spine Fabric", href: "/platform/spine-fabric" },
      { name: "Spine Twin", href: "/twin" },
      { name: "Spine Coworker", href: "/twin#coworker" },
      { name: "Spine Context Assembler", href: "/business-context" },
      { name: "Spine Adaptive Auto Tuner", href: "/adaptive-workspace#adaptive-autotuner" },
      { name: "Spine Triage Bot", href: "/triage-bot" },
      { name: "Spine Folder Monitor", href: "/folder-monitor" },
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
    heading: "Build",
    links: [
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
      { name: "Updates", href: "/updates" },
      { name: "Changelog", href: "/changelog" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export const COMPANY_TAGLINE =
  "Spine InnovLabs builds SpineWorkspace, Spine Platform, Spine Fabric, Spine Twin, Spine Coworker, Spine Context Assembler, Spine Adaptive Auto Tuner, Spine Triage Bot, and Spine Folder Monitor.";

export const PRODUCT_ONELINER =
  "SpineWorkspace is a governed AI workspace for operational work — connecting your existing tools so teams and AI work from the same truth and the context for this task.";
