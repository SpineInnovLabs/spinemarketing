"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Plug, Settings2, Users, BookOpen, ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { type: "spring" as const, damping: 18, stiffness: 70, delay },
});

const heroFade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 16, mass: 1, stiffness: 52, delay },
});

const services = [
  {
    icon: Wrench,
    label: "Implementation",
    headline: "From signed to live in 14 days",
    body: "We map your tools, configure connectors, and deliver a normalized Entity 360.",
    bullets: [
      "Connector setup and authentication",
      "Schema mapping and field normalization",
      "Deduplication and golden record config",
      "Workspace customization",
      "Team onboarding",
    ],
  },
  {
    icon: Settings2,
    label: "Managed Data Ops",
    headline: "We run the Loader so you don't have to",
    body: "Ongoing pipeline management — ingestion health, schema drift, entity quality.",
    bullets: [
      "Continuous ingestion monitoring",
      "API change detection and re-mapping",
      "Entity quality audits",
      "Quarterly truth health reviews",
      "Incident response for broken flows",
    ],
  },
  {
    icon: Plug,
    label: "Custom Connectors",
    headline: "If we don't have it, we build it",
    body: "Legacy ERPs, internal tools, flat files — normalized through the same pipeline.",
    bullets: [
      "Scoping and feasibility assessment",
      "Connector development and testing",
      "Normalization rule authoring",
      "Documentation and handoff",
      "Optional maintenance retainer",
    ],
  },
  {
    icon: Users,
    label: "Strategic Advisory",
    headline: "Revenue operations that run on truth",
    body: "We design your Entity 360 architecture and Twin configuration.",
    bullets: [
      "Data strategy and SSOT design",
      "RevOps and CS workflow design",
      "Approval Gate governance configuration",
      "Twin training and calibration",
      "Playbook documentation",
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-28 pt-40 bg-dark-section"
      >
        <div className="mx-auto max-w-[780px] px-4 text-center">
          <motion.div
            {...heroFade(0.1)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Services
          </motion.div>

          <motion.h1
            {...heroFade(0.22)}
            className="text-[44px] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[64px]"
          >
            We get you to{" "}
            <span className="text-primary">truth faster.</span>
            <br />
            Then we keep you there.
          </motion.h1>

          <motion.p
            {...heroFade(0.38)}
            className="mx-auto mt-7 max-w-xl text-[17px] font-medium leading-[1.55] tracking-[-0.02em] text-white/50"
          >
            Implementation, managed ops, custom connectors, and advisory — from the team that built the Spine.
          </motion.p>

          <motion.div
            {...heroFade(0.5)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-[14px] font-semibold tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
            >
              Book a demo →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map(({ icon: Icon, label, headline, body, bullets }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.07)}
                className="arvio-card flex flex-col p-8"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-primary-icon)" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary mb-0.5">
                      {label}
                    </div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.04em] text-foreground leading-tight">
                      {headline}
                    </h3>
                  </div>
                </div>
                <p className="text-[14px] font-medium leading-[1.7] text-muted-foreground">
                  {body}
                </p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[13px] font-medium text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="arvio-section dark-section bg-dark-section"
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div {...fade(0)} className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary mb-3">
              How we engage
            </p>
            <h2 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.05em] text-white sm:text-[48px]">
              Scoped. Delivered.{" "}
              <span className="text-primary">Handed off.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                num: "01",
                title: "Discovery call",
                body: "We map your tools, data flows, and top use cases.",
              },
              {
                num: "02",
                title: "Scoped proposal",
                body: "Fixed-scope SOW with timeline and deliverables.",
              },
              {
                num: "03",
                title: "Delivery and handoff",
                body: "We build, test, document, and train your team.",
              },
            ].map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <div className="mb-3 text-[28px] font-bold tracking-[-0.04em] text-primary/30">
                  {num}
                </div>
                <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.65] text-white/45">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.2)} className="mt-8 text-center">
            <Link
              href="/contact?intent=demo"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:opacity-80"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="arvio-section dark-section">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            {...fade(0)}
            className="arvio-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-primary-icon)" }}
              >
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-[-0.03em] text-foreground">
                  Implementation guides and playbooks
                </p>
                <p className="text-[13px] font-medium text-muted-foreground">
                  Templates, connector docs, and Entity 360 setup guides.
                </p>
              </div>
            </div>
            <Link
              href="/resources"
              className="inline-flex shrink-0 h-10 items-center rounded-full border border-border px-5 text-[13px] font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Visit resources →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
