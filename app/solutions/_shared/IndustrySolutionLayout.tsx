"use client";

import { motion } from "framer-motion";
import React from "react";

interface WhatMattersItem {
  title: string;
  desc: string;
}

interface SignalItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface IndustrySolutionLayoutProps {
  category: string;
  headline: string;
  subheadline: string;
  whatMatters: WhatMattersItem[];
  signals: SignalItem[];
  l1Title: string;
  l1Desc: string;
  l2Title: string;
  l2Desc: string;
}

export function IndustrySolutionLayout({
  category,
  headline,
  subheadline,
  whatMatters,
  signals,
  l1Title,
  l1Desc,
  l2Title,
  l2Desc,
}: IndustrySolutionLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-24 pt-40"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[60px]"
          >
            {headline.split("—")[0]}
            {headline.includes("—") && (
              <>
                &mdash;
                <span className="text-primary">{headline.split("—")[1]}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 16, stiffness: 52, delay: 0.35 }}
            className="mx-auto mt-8 max-w-2xl text-[17px] font-medium leading-[1.5] tracking-[-0.02em] text-white/55"
          >
            {subheadline}
          </motion.p>
        </div>
      </section>

      {/* What matters */}
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
              Same Spine and workspace,{" "}
              <span className="text-primary">tuned to your reality</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatMatters.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="arvio-card p-6"
              >
                <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary">
                  {title}
                </div>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example signals */}
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
              How the Spine{" "}
              <span className="text-primary">changes what you see</span>
            </h2>
            <p className="section-subheading mt-4">
              Three signals your current apps would never surface — because they
              can&apos;t read across systems.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {signals.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="arvio-card border-l-2 border-l-primary p-6"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.03em]">
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

      {/* L1/L2 framing */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
              One workspace.{" "}
              <span className="text-primary">Two layers.</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
            >
              <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-3">
                L1 — Daily Workbench
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white mb-2">
                {l1Title}
              </h3>
              <p className="text-[14px] font-medium leading-[1.7] text-white/45">
                {l1Desc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
            >
              <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary mb-3">
                L2 — Intelligence Layer
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-white mb-2">
                {l2Title}
              </h3>
              <p className="text-[14px] font-medium leading-[1.7] text-white/45">
                {l2Desc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
