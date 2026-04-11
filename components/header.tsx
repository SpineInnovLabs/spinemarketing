"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SpineLogo } from "@/components/spine-logo"
import { Menu, X, ChevronDown, Users, BarChart3, Sparkles, Layers, Plug, Brain, ShieldCheck, Building2, Mail } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

const navigation = [
  {
    label: "Solutions",
    href: "/account-success",
    items: [
      { name: "Account Success", href: "/account-success", icon: Users, desc: "Complete view of every account and customer" },
      { name: "Business Ops", href: "/business-ops", icon: BarChart3, desc: "Automate operations and streamline workflows" },
      { name: "Personal Ops", href: "/personal-ops", icon: Sparkles, desc: "Your personal AI workspace for daily work" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    items: [
      { name: "How It Works", href: "/platform", icon: Layers, desc: "Connect, see, and act — in three steps" },
      { name: "Integrations", href: "/integrations", icon: Plug, desc: "70+ integrations for the tools you use" },
      { name: "AI & Approvals", href: "/ai", icon: Brain, desc: "AI that helps, but only acts with your OK" },
      { name: "Security", href: "/security", icon: ShieldCheck, desc: "Enterprise-grade security and compliance" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/about",
    items: [
      { name: "About", href: "/about", icon: Building2, desc: "Our story and what we stand for" },
      { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch with our team" },
    ],
  },
]

type NavItem = (typeof navigation)[number]

const ENTER_DELAY = 150
const LEAVE_DELAY = 300

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
}

function MegaDropdown({
  nav,
  menuId,
  onMouseEnter,
  onMouseLeave,
}: {
  nav: NavItem
  menuId: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  if (!nav.items) return null

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
      className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
      style={{ minWidth: nav.items.length > 3 ? "480px" : "380px" }}
    >
      <div
        className="overflow-hidden rounded-2xl border border-border/40 bg-white/95 p-2 backdrop-blur-xl"
        style={{
          boxShadow: "0 20px 60px -15px rgba(0,0,0,0.12), 0 0px 0px 1px rgba(0,0,0,0.04)",
        }}
      >
        <div className={nav.items.length > 3 ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}>
          {nav.items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-start gap-3.5 rounded-xl px-4 py-3.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all group-hover:scale-105"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-[18px] w-[18px] text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">
                    {item.name}
                  </span>
                  <span className="mt-0.5 text-[13px] font-medium leading-[1.4] tracking-[-0.01em] text-muted-foreground">
                    {item.desc}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

function NavTrigger({
  nav,
  activeMenu,
  onEnter,
  onLeave,
}: {
  nav: NavItem
  activeMenu: string | null
  onEnter: (label: string) => void
  onLeave: () => void
}) {
  const isOpen = activeMenu === nav.label
  const menuId = `mega-${nav.label.replace(/\s+/g, "-").toLowerCase()}`

  if (!nav.items) {
    return (
      <Link
        href={nav.href}
        className="rounded-md px-2 py-2 text-[16px] font-medium tracking-[-0.03em] leading-[1.4] text-foreground/50 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        onMouseEnter={onLeave}
      >
        {nav.label}
      </Link>
    )
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
        className={`flex items-center gap-1 rounded-md px-2 py-2 text-[16px] font-medium tracking-[-0.03em] leading-[1.4] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
          isOpen ? "text-foreground" : "text-foreground/50 hover:text-foreground"
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
  )
}

export function Header({ initiallyHidden = false }: { initiallyHidden?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [heroRevealed, setHeroRevealed] = useState(!initiallyHidden)
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mobilePanelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  /* Listen for hero phase change event (dispatched by HeroSection) */
  useEffect(() => {
    if (!initiallyHidden) return
    const handler = () => setHeroRevealed(true)
    window.addEventListener("heroPhaseChange", handler)
    return () => window.removeEventListener("heroPhaseChange", handler)
  }, [initiallyHidden])

  const clearTimers = useCallback(() => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current)
      enterTimer.current = null
    }
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current)
      leaveTimer.current = null
    }
  }, [])

  const handleEnter = useCallback(
    (label: string) => {
      clearTimers()
      // If already open on a different menu, switch instantly
      if (activeMenu && activeMenu !== label) {
        setActiveMenu(label)
        return
      }
      enterTimer.current = setTimeout(() => {
        setActiveMenu(label)
      }, ENTER_DELAY)
    },
    [activeMenu, clearTimers]
  )

  const handleLeave = useCallback(() => {
    clearTimers()
    leaveTimer.current = setTimeout(() => {
      setActiveMenu(null)
    }, LEAVE_DELAY)
  }, [clearTimers])

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimers()
  }, [clearTimers])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      setActiveMenu(null)
      setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const id = requestAnimationFrame(() => {
      const first = mobilePanelRef.current?.querySelector<HTMLElement>("a[href], button")
      first?.focus()
    })
    return () => cancelAnimationFrame(id)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      const focusables = [
        ...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter((el) => !el.closest("[aria-hidden='true']"))
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        menuButtonRef.current?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        menuButtonRef.current?.focus()
      }
    }
    panel.addEventListener("keydown", handler)
    return () => panel.removeEventListener("keydown", handler)
  }, [mobileMenuOpen])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30, restDelta: 0.001 })

  return (
    <>
      {/* Backdrop overlay when menu is open */}
      {activeMenu && heroRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px]"
          onMouseEnter={handleLeave}
        />
      )}

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        initial={initiallyHidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
        animate={heroRevealed ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 200, mass: 0.8 }}
        style={{
          borderBottom: "5px solid rgb(248, 248, 250)",
          boxShadow: "var(--shadow-nav)",
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{
            scaleX,
            background: "var(--gradient-primary)",
          }}
        />
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <SpineLogo className="h-8 w-8 shrink-0 md:h-9 md:w-9" variant="on-light" />
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-foreground">
              Integrate<span className="text-primary">Wise</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
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

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <Button
              variant="outline"
              className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-4 text-[15px] font-semibold tracking-[-0.3px] text-foreground"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
              style={{
                background: "var(--gradient-primary)",
                border: "2px solid rgba(248,248,250,0.12)",
                boxShadow: "var(--shadow-button)",
              }}
              asChild
            >
              <Link href="/contact?intent=demo">Book a demo</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-md lg:hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/40 bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navigation.map((nav) => (
                  <div key={nav.label} className="py-2">
                    <Link
                      href={nav.href}
                      className="block text-[16px] font-semibold tracking-[-0.03em] text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {nav.label}
                    </Link>
                    {nav.items && (
                      <div className="mt-2 flex flex-col gap-1 pl-4">
                        {nav.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2.5 rounded-md py-1.5 text-[15px] font-medium text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2.5 border-t border-border/40 pt-4">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-2 border-border/75 bg-white text-foreground"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                  <Button
                    className="w-full rounded-xl"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--shadow-button)",
                    }}
                    asChild
                  >
                    <Link href="/contact?intent=demo" onClick={() => setMobileMenuOpen(false)}>
                      Book a demo
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
        )}
      </motion.header>
    </>
  )
}
