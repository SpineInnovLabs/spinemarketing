"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, ShieldCheck, FileSearch, TrendingUp, MessageSquare, Zap, BarChart3, Users, ArrowRight, Check } from "lucide-react"

const assistants = [
  {
    icon: FileSearch,
    name: "Research Assistant",
    desc: "Deep-dives into the full history across all your connected tools. Answers complex questions with clear sources for every answer.",
  },
  {
    icon: TrendingUp,
    name: "Signal Analyst",
    desc: "Monitors cross-system patterns to detect risks, opportunities, and anomalies before they become crises.",
  },
  {
    icon: MessageSquare,
    name: "Communication Drafter",
    desc: "Drafts emails, messages, and updates with the complete picture from every tool. Every draft shows exactly where the information came from.",
  },
  {
    icon: BarChart3,
    name: "Report Builder",
    desc: "Generates executive summaries, health reports, and trend analyses from cross-system data.",
  },
  {
    icon: Zap,
    name: "Workflow Automator",
    desc: "Proposes automated workflows based on observed patterns. You review, approve, and activate.",
  },
  {
    icon: Users,
    name: "Relationship Mapper",
    desc: "Maps connections between entities, identifies stakeholders, and tracks relationship health over time.",
  },
  {
    icon: Brain,
    name: "Strategy Advisor",
    desc: "Synthesizes signals, trends, and context into strategic recommendations for accounts and portfolios.",
  },
]

const approvalSteps = [
  {
    number: "01",
    title: "AI generates recommendation",
    desc: "With the complete picture from all your tools, AI proposes an action and shows exactly why.",
  },
  {
    number: "02",
    title: "Evidence is attached",
    desc: "Every recommendation links back to the specific data points, conversations, and events it drew from.",
  },
  {
    number: "03",
    title: "Human reviews and approves",
    desc: "Nothing executes until a human with the right permissions explicitly approves the action.",
  },
  {
    number: "04",
    title: "Action executes with audit trail",
    desc: "Approved actions execute with a complete audit trail — who approved, when, why, and what evidence was used.",
  },
]

export function AIContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "rgb(8, 7, 14)" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary-icon)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.4 }}
              className="text-[48px] font-semibold leading-[1em] tracking-[-0.05em] text-white sm:text-[54px] lg:text-[64px]"
            >
              AI that knows everything.{" "}
              <span className="text-primary">Does nothing without you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 16, mass: 1, stiffness: 52, delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              7 specialized AI assistants that see everything across your tools, protected by a built-in approval layer —
              nothing happens without your OK.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 7 Assistants — Sticky Scroll */}
      <AssistantsStickyScroll />

      {/* TruthLayer */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-[40px] border border-primary/20 bg-primary/5 px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-primary">Approval Layer</span>
            </div>
            <h2 className="section-heading">
              Nothing happens{" "}
              <span className="text-primary">without your OK</span>
            </h2>
            <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              The approval layer sits between AI suggestions and real-world actions.
              It can&apos;t be bypassed, overridden, or turned off. Every action flows through this 4-step process.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {approvalSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card flex flex-col p-8"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-[14px] font-bold text-white"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.03em] leading-[1.4]">{step.title}</h3>
                <p className="mt-2 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="h-[42px] rounded-xl px-4 text-[15px] font-semibold tracking-[-0.3px]"
              style={{ background: "var(--gradient-primary)", border: "2px solid rgba(248,248,250,0.12)", boxShadow: "var(--shadow-button)" }}
              asChild
            >
              <Link href="/contact?intent=demo">See the approval layer in action</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function AssistantsStickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const stepSize = 1 / assistants.length
    const idx = Math.min(assistants.length - 1, Math.floor(v / stepSize))
    setActiveIndex(idx)
  })

  const ActiveIcon = assistants[activeIndex].icon

  return (
    <section className="relative">
      {/* Section heading */}
      <div className="mx-auto max-w-[1100px] px-6 pt-[100px] pb-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-heading">
            7 specialized{" "}
            <span className="text-primary">AI assistants</span>
          </h2>
          <p className="mt-4 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
            Each assistant is purpose-built for a specific job, and all see the complete picture from every connected tool.
          </p>
        </motion.div>
      </div>

      {/* Desktop sticky scroll */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${assistants.length * 60}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="mx-auto grid w-full max-w-[1100px] gap-16 px-6 md:px-16 lg:grid-cols-[1fr,1fr]">
              {/* Left — assistant list */}
              <div className="flex flex-col justify-center gap-1">
                {assistants.map(({ icon: Icon, name, desc }, i) => {
                  const isActive = i === activeIndex
                  return (
                    <motion.div
                      key={i}
                      className={`rounded-xl px-5 py-4 transition-colors duration-300 ${
                        isActive ? "bg-primary/5" : ""
                      }`}
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300"
                          style={isActive ? { background: "var(--gradient-primary-icon)" } : { background: "rgb(228,228,232)" }}
                        >
                          <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-muted-foreground"}`} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-[-0.03em] leading-[1.3]">{name}</h3>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2 pl-11 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
                          {desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Right — large icon visual */}
              <div className="relative flex items-center justify-center">
                <div className="relative flex h-[360px] w-[360px] items-center justify-center">
                  {/* Background ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-10"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  <div
                    className="absolute inset-4 rounded-full opacity-5"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  {/* Active icon */}
                  {assistants.map(({ icon: Icon }, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center gap-4"
                      initial={false}
                      animate={{
                        opacity: i === activeIndex ? 1 : 0,
                        scale: i === activeIndex ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                    >
                      <div
                        className="flex h-24 w-24 items-center justify-center rounded-3xl"
                        style={{ background: "var(--gradient-primary)", boxShadow: "0 20px 60px -15px rgba(27,167,132,0.4)" }}
                      >
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <span className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">
                        {assistants[i].name}
                      </span>
                      <span className="text-[13px] font-semibold tracking-[-0.02em] text-primary">
                        {String(i + 1).padStart(2, "0")} / {String(assistants.length).padStart(2, "0")}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback — stacked cards */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1100px] px-6 pb-[100px] md:px-16">
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {assistants.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                className="arvio-card flex flex-col items-start p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-primary-icon)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.03em] leading-[1.3]">{name}</h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
