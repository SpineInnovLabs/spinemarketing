"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inbox, Brain, CalendarCheck, Sparkles, BookOpen } from "lucide-react";

const whatChanges = [
  {
    icon: Inbox,
    title: "Morning briefing, already waiting",
    desc: "Emails, tasks, Slack threads, and meetings — pulled from your connected tools into one view. No manual assembly.",
  },
  {
    icon: Brain,
    title: "AI conversations that compound",
    desc: "Every AI conversation gets summarized. You approve what matters. Approved summaries become Knowledge Memory — searchable, governed, and linked to real work.",
  },
  {
    icon: CalendarCheck,
    title: "Tasks, notes, and calendar unified",
    desc: "Stop switching between your task app, notes app, and calendar. See what's due, what's waiting, and what needs attention in one view.",
  },
  {
    icon: Sparkles,
    title: "AI that knows your context",
    desc: "When you ask a question, AI already knows what you're working on and what's due. It reasons across your full picture — not from zero.",
  },
  {
    icon: BookOpen,
    title: "A workspace that learns",
    desc: "Over time, IntegrateWise surfaces what matters to you. It learns your patterns and priorities. Less noise, more signal.",
  },
];

const steps = [
  {
    num: "01",
    title: "Connect the tools you already use",
    desc: "Gmail, Slack, Calendar, Notion, ChatGPT, Claude — plug them in once. Your data stays yours.",
  },
  {
    num: "02",
    title: "Your workspace assembles itself",
    desc: "Tasks, emails, messages, and AI conversations flow into one clean view. Relationships preserved automatically.",
  },
  {
    num: "03",
    title: "AI works with your full context",
    desc: "Ask a question, get an answer grounded in your calendar, tasks, conversations, and goals. No copy-pasting context.",
  },
  {
    num: "04",
    title: "Nothing happens without your approval",
    desc: "AI suggests actions — you see the reasoning and decide. You stay in control.",
  },
];

export function PersonalOpsContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 pt-[160px] pb-[100px] md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-[40px] bg-white px-4 py-1.5"
              style={{ boxShadow: "0px 0px 0px 3px rgb(248 248 250)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--gradient-primary-icon)" }}
              />
              <span className="text-[14px] font-semibold tracking-[-0.03em] text-[#0a0b10]">
                Personal Ops
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.4,
              }}
              className="text-[40px] font-semibold leading-[1.1em] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[60px]"
            >
              Organize your work, your thinking, and your goals —{" "}
              <span className="text-primary">in one calm workspace.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.6,
              }}
              className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
            >
              Email, Slack, calendar, project tools, notes, AI — by the time
              you&apos;ve assembled enough context to start working, 45 minutes
              have passed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 16,
                mass: 1,
                stiffness: 52,
                delay: 0.8,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-white/15 bg-transparent px-6 text-[15px] font-semibold text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Join waitlist</Link>
              </Button>
            </motion.div>
            <p className="mt-6 text-[14px] font-medium text-white/30">
              For individuals, solopreneurs, and knowledge workers.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <h2 className="section-heading">
                You&apos;re the most productive person you know —{" "}
                <span className="text-primary">and you still feel behind.</span>
              </h2>
              <div className="mt-8 space-y-6 text-[17px] font-medium leading-[1.7] tracking-[-0.02em] text-muted-foreground">
                <p>
                  Nothing connects. AI conversations disappear when the chat
                  ends. Tasks live in one tool, context in another. Your best
                  thinking is scattered across five apps.
                </p>
                <p className="text-foreground font-semibold">
                  You don&apos;t need another tool. You need one place that
                  brings them together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              What changes with{" "}
              <span className="text-primary">IntegrateWise</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
            {whatChanges.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className={`arvio-card p-6 ${i === whatChanges.length - 1 && whatChanges.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""}`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              How it <span className="text-primary">works</span>
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-3xl gap-8">
            {steps.map(({ num, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="flex gap-6"
              >
                <div className="text-[40px] font-bold tracking-[-0.05em] text-primary/15 leading-none">
                  {num}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="arvio-section bg-muted">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="section-heading">
              Your tools should work for you.{" "}
              <span className="text-primary">Not the other way around.</span>
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-muted-foreground">
              One workspace. One morning briefing. One place for all your
              thinking.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="h-[42px] rounded-xl px-6 text-[15px] font-semibold"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-button)",
                }}
                asChild
              >
                <Link href="/contact">Join the waitlist</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-[42px] rounded-xl border-2 border-border/75 bg-white px-6 text-[15px] font-semibold text-foreground"
                asChild
              >
                <Link href="/contact?intent=demo">Book a demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
