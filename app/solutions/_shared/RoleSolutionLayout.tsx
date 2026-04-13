"use client";

import { motion } from "framer-motion";
import React from "react";

interface BenefitItem {
  title: string;
  desc: string;
}

interface UseCaseItem {
  title: string;
  desc: string;
}

interface RoleSolutionLayoutProps {
  role: string;
  headline: string;
  subheadline: string;
  whatYouSee: string[];
  benefits: BenefitItem[];
  useCases: UseCaseItem[];
}

export function RoleSolutionLayout({
  role,
  headline,
  subheadline,
  whatYouSee,
  benefits,
  useCases,
}: RoleSolutionLayoutProps) {
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
            {role}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 70, delay: 0.15 }}
            className="text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[60px]"
          >
            {headline}
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

      {/* What you see */}
      <section className="arvio-section">
        <div className="mx-auto max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-heading">
              What your workspace{" "}
              <span className="text-primary">shows you</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {whatYouSee.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 px-5 py-4"
              >
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-[15px] font-medium leading-[1.5]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              What changes when you{" "}
              <span className="text-primary">work over the Spine</span>
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {benefits.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.08 }}
                className="arvio-card p-6"
              >
                <h3 className="text-[16px] font-semibold tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.6] text-muted-foreground">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section
        className="arvio-section"
        style={{ backgroundColor: "rgb(8, 7, 14)" }}
      >
        <div className="mx-auto max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[40px] font-semibold tracking-[-0.05em] leading-[1.15] text-white sm:text-[48px]">
              What{" "}
              <span className="text-primary">{role}</span>{" "}
              do inside IntegrateWise
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[12px] font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-white/45">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
