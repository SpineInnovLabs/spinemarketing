"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpineLogo } from "@/components/spine-logo";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  BarChart3,
  Sparkles,
  Plug,
  Brain,
  ShieldCheck,
  Building2,
  Mail,
  Cloud,
  Wrench,
  Package,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  UserCheck,
  Telescope,
  Settings2,
  Truck,
  DollarSign,
  User,
  BookOpen,
  GitMerge,
  HelpCircle,
  Database,
  Cpu,
  GitBranch,
  Eye,
  Globe,
  Server,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

type NavItemChild = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  desc?: string;
};

type NavGroup = {
  label: string;
  items: NavItemChild[];
};

type NavItem = {
  label: string;
  href: string;
  items?: NavItemChild[];
  groups?: NavGroup[];
};

const navigation: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { name: "Operational Continuity", href: "/platform/the-adaptive-spine", icon: Database },
      { name: "How the Platform Works", href: "/platform/how-it-works", icon: GitBranch },
      { name: "Integrations", href: "/platform/integrations", icon: Plug },
      { name: "Security", href: "/platform/security", icon: ShieldCheck },
      { name: "Infrastructure", href: "/platform/infrastructure", icon: Server },
    ],
  },
  {
    label: "Workspace",
    href: "/product",
    items: [
      { name: "Spine Workspace", href: "/product/the-adaptive-workspace", icon: Cpu },
      { name: "How the Workspace Works", href: "/product/how-it-works", icon: TrendingUp },
      { name: "Twin & Governed Actions", href: "/product/approval-gate-twin", icon: UserCheck },
      { name: "Security", href: "/product/security", icon: ShieldCheck },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        label: "By Function",
        items: [
          { name: "Account Success", href: "/account-success", icon: Users, desc: "Customer context and continuity" },
          { name: "Business Operations", href: "/business-ops", icon: BarChart3, desc: "The live operating picture" },
          { name: "Individual Professionals", href: "/personal-ops", icon: Sparkles, desc: "Your work, your context" },
        ],
      },
      {
        label: "By Industry",
        items: [
          { name: "SaaS", href: "/solutions/saas", icon: Cloud, desc: "Renewals, expansion, adoption" },
          { name: "Services & Agencies", href: "/solutions/services", icon: Wrench, desc: "Projects, utilisation, billing" },
          { name: "Manufacturing & Trade", href: "/solutions/manufacturing", icon: Package, desc: "Orders, shipments, exceptions" },
          { name: "Retail & Ecommerce", href: "/solutions/retail", icon: ShoppingCart, desc: "Stock, orders, returns, support" },
          { name: "Professional Services", href: "/solutions/professional-services", icon: Briefcase, desc: "Engagements, billing, relationships" },
          { name: "Finance", href: "/solutions/finance", icon: TrendingUp, desc: "Revenue, risk, collections, cash" },
        ],
      },
      {
        label: "By Role",
        items: [
          { name: "Customer Success & TAMs", href: "/solutions/customer-success", icon: UserCheck, desc: "Save accounts, accelerate renewals" },
          { name: "Founders & CXOs", href: "/solutions/founders", icon: Telescope, desc: "Monday brief, board pack, full view" },
          { name: "Rev / Business Ops", href: "/solutions/revops", icon: Settings2, desc: "Pipeline, headcount, risk — connected" },
          { name: "Operations & Delivery", href: "/solutions/operations", icon: Truck, desc: "Projects, utilisation, exceptions" },
          { name: "Finance Leaders", href: "/solutions/finance-leaders", icon: DollarSign, desc: "Cash, collections, runway" },
          { name: "Individual Professionals", href: "/solutions/individual", icon: User, desc: "Morning brief, session memory" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/about",
    items: [
      { name: "Why IntegrateWise", href: "/why", icon: HelpCircle, desc: "The problem we exist to solve" },
      { name: "About", href: "/about", icon: Building2, desc: "Our story and what we stand for" },
      { name: "Resources", href: "/resources", icon: BookOpen, desc: "Blog, guides, and playbooks" },
    ],
  },
];

const ENTER_DELAY = 150;
const LEAVE_DELAY = 300;

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 22, stiffness: 300, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

function DropdownItem({ item }: { item: NavItemChild }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] transition-all group-hover:bg-primary/20 group-hover:scale-105"
      >
        <Icon className="h-[15px] w-[15px] text-white/60 group-hover:text-primary" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[14px] font-semibold tracking-[-0.03em] text-white/80 leading-tight group-hover:text-white">
          {item.name}
        </span>
        {item.desc && (
          <span className="text-[12px] font-medium text-white/30 mt-0.5">
            {item.desc}
          </span>
        )}
      </div>
    </Link>
  );
}

function MegaDropdown({
  nav,
  menuId,
  onMouseEnter,
  onMouseLeave,
}: {
  nav: NavItem;
  menuId: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!nav.items && !nav.groups) return null;
  const isGrouped = !!nav.groups;

  return (
    <motion.div
      id={menuId}
      role="region"
      aria-label={`${nav.label} menu`}
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-full z-50 mt-2 ${isGrouped ? "left-1/2 -translate-x-1/2" : "left-0"}`}
      style={{
        minWidth: isGrouped ? "720px" : nav.items && nav.items.length >= 4 ? "460px" : "340px",
      }}
    >
      <div
        className="overflow-hidden rounded-2xl border border-white/[0.08] p-3 backdrop-blur-2xl"
        style={{
          background: "rgba(8, 10, 14, 0.92)",
          boxShadow:
            "0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px rgba(27,167,132,0.04)",
        }}
      >
        {isGrouped && nav.groups && (
          <div className="grid grid-cols-3 gap-x-2 gap-y-1">
            {nav.groups.map((group) => (
              <div key={group.label}>
                <div className="mb-1 px-3 pt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary/70">
                  {group.label}
                </div>
                <div className="flex flex-col gap-0.5">
                  {group.items.map((item) => (
                    <DropdownItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {!isGrouped && nav.items && (
          <div
            className={
              nav.items.length >= 4 ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"
            }
          >
            {nav.items.map((item) => (
              <DropdownItem key={item.name} item={item} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function NavTrigger({
  nav,
  activeMenu,
  onEnter,
  onLeave,
}: {
  nav: NavItem;
  activeMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
}) {
  const isOpen = activeMenu === nav.label;
  const menuId = `mega-${nav.label.replace(/\s+/g, "-").toLowerCase()}`;
  const hasDropdown = !!(nav.items || nav.groups);

  if (!hasDropdown) {
    return (
      <Link
        href={nav.href}
        className="rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
        onMouseEnter={onLeave}
      >
        {nav.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(nav.label)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={isOpen ? menuId : undefined}
        id={`${menuId}-trigger`}
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50 ${
          isOpen ? "text-white" : "text-white/50 hover:text-white"
        }`}
      >
        {nav.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen && (
        <MegaDropdown
          nav={nav}
          menuId={menuId}
          onMouseEnter={() => onEnter(nav.label)}
          onMouseLeave={onLeave}
        />
      )}
    </div>
  );
}

export function Header({
  initiallyHidden = false,
}: {
  initiallyHidden?: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(!initiallyHidden);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!initiallyHidden) return;
    const handler = () => setHeroRevealed(true);
    window.addEventListener("heroPhaseChange", handler);
    return () => window.removeEventListener("heroPhaseChange", handler);
  }, [initiallyHidden]);

  const clearTimers = useCallback(() => {
    if (enterTimer.current) { clearTimeout(enterTimer.current); enterTimer.current = null; }
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null; }
  }, []);

  const handleEnter = useCallback(
    (label: string) => {
      clearTimers();
      if (activeMenu && activeMenu !== label) { setActiveMenu(label); return; }
      enterTimer.current = setTimeout(() => setActiveMenu(label), ENTER_DELAY);
    },
    [activeMenu, clearTimers],
  );

  const handleLeave = useCallback(() => {
    clearTimers();
    leaveTimer.current = setTimeout(() => setActiveMenu(null), LEAVE_DELAY);
  }, [clearTimers]);

  useEffect(() => { return () => clearTimers(); }, [clearTimers]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setActiveMenu(null);
      setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const id = requestAnimationFrame(() => {
      const first = mobilePanelRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const panel = mobilePanelRef.current;
    if (!panel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = [
        ...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter((el) => !el.closest("[aria-hidden='true']"));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        menuButtonRef.current?.focus();
      }
    };
    panel.addEventListener("keydown", handler);
    return () => panel.removeEventListener("keydown", handler);
  }, [mobileMenuOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {activeMenu && heroRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px]"
          onMouseEnter={handleLeave}
        />
      )}

      <motion.header
        suppressHydrationWarning
        className="fixed top-0 left-0 right-0 z-50"
        initial={initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
        animate={heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 200, mass: 0.8 }}
        style={{
          background: "rgba(5, 7, 10, 0.75)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{ scaleX, background: "var(--gradient-primary)" }}
          suppressHydrationWarning
        />

        <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
          >
            <SpineLogo className="h-8 w-8 shrink-0" variant="on-dark" />
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-white">
              Integrate<span className="text-primary">Wise</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((nav) => (
              <NavTrigger
                key={nav.label}
                nav={nav}
                activeMenu={activeMenu}
                onEnter={handleEnter}
                onLeave={handleLeave}
              />
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button
              className="h-[38px] rounded-xl px-4 text-[14px] font-semibold tracking-[-0.02em] text-white"
              style={{
                background: "var(--gradient-primary)",
                border: "1px solid rgba(52,211,153,0.2)",
                boxShadow: "0 0 20px rgba(27,167,132,0.15), var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-md p-1.5 lg:hidden text-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="max-h-[82vh] overflow-y-auto border-t border-white/[0.06] lg:hidden"
            style={{ background: "rgba(5, 7, 10, 0.95)", backdropFilter: "blur(20px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col px-6 py-3">
              {navigation.map((nav) => {
                const hasDropdown = !!(nav.items || nav.groups);
                const isExpanded = mobileExpanded === nav.label;
                return (
                  <div
                    key={nav.label}
                    className="border-b border-white/[0.06] last:border-0"
                  >
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={nav.href}
                        className="text-[15px] font-semibold tracking-[-0.03em] text-white/80"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {nav.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          type="button"
                          className="rounded-md p-1.5 text-white/30 hover:text-white"
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : nav.label)
                          }
                          aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {hasDropdown && isExpanded && nav.items && (
                      <div className="mb-3 flex flex-col gap-0.5 pl-2">
                        {nav.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg py-2 px-2 text-[14px] font-medium text-white/40 hover:text-white hover:bg-white/[0.04]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {hasDropdown && isExpanded && nav.groups && (
                      <div className="mb-3 flex flex-col gap-4 pl-2">
                        {nav.groups.map((group) => (
                          <div key={group.label}>
                            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-primary/60">
                              {group.label}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] font-medium text-white/40 hover:text-white hover:bg-white/[0.04]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <item.icon className="h-4 w-4 shrink-0 text-primary/60" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 flex flex-col gap-2 pb-4">
                <Button
                  className="w-full rounded-xl font-semibold text-white"
                  style={{
                    background: "var(--gradient-primary)",
                    boxShadow: "0 0 20px rgba(27,167,132,0.15)",
                  }}
                  asChild
                >
                  <Link
                    href="/contact?intent=demo"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
