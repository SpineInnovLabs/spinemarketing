"use client";

import { motion } from "framer-motion";

export function HomeStorySection() {
  return (
    <section id="why-born-section" className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32" style={{ background: "#111111" }}>
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-0 hidden h-16 origin-top border-l border-dashed border-white/10 md:block"
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 20, stiffness: 70 }}
            className="rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FFE1CC]/70">
              #why it exists
            </p>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.05em] text-white md:text-[44px]">
              Built because manual context recovery should not be the job.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "$8M", label: "account saved" },
                { value: "13+", label: "years integrating systems" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#151515] p-4">
                  <div className="text-[28px] font-semibold tracking-[-0.04em] text-[#FFE1CC]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12px] font-medium text-white/35">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", damping: 20, stiffness: 70, delay: 0.08 }}
            className="rounded-[24px] border border-white/10 bg-[#1d1d1d] p-7 md:p-8"
          >
            <p className="text-[17px] font-medium leading-[1.85] text-white/55">
              IntegrateWise was built so nobody ever has to manually reconstruct context again. Modern work did not break because people were not capable; it broke because teams spend every day fighting their own tools.
            </p>
            <p className="mt-6 text-[17px] font-medium leading-[1.85] text-white/55">
              The Spine gives your tools shared memory. The Twin watches that memory for the signals you would otherwise have to hunt down. The Approval Gate makes sure the final decision still belongs to you.
            </p>
            <blockquote className="mt-8 border-l border-[#FFE1CC]/40 pl-5 text-[18px] font-medium leading-[1.7] text-white/70">
              A governed knowledge workspace where AI helps you see clearly, but never takes control away.
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
