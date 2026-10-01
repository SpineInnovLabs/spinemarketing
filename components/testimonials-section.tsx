"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const defaultTestimonials = [
  {
    quote: "We went from 7 dashboards to one screen. Spine Fabric connected everything our team needed.",
    name: "Priya Sharma",
    role: "VP Customer Success",
    company: "TechScale India",
    avatar: "PS",
  },
  {
    quote: "The Twin caught a renewal risk 45 days before we would have seen it. That's real intelligence.",
    name: "David Chen",
    role: "Head of RevOps",
    company: "CloudFirst",
    avatar: "DC",
  },
  {
    quote: "Finally — AI that shows its evidence and waits for my approval. No black-box magic.",
    name: "Sarah Mitchell",
    role: "COO",
    company: "ServicePro",
    avatar: "SM",
  },
  {
    quote: "The governance layer alone justified the investment. Every action is auditable.",
    name: "Arjun Patel",
    role: "CTO",
    company: "FinanceFlow",
    avatar: "AP",
  },
];

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  heading = "What teams are saying.",
  tag = "Testimonials",
}: {
  testimonials?: typeof defaultTestimonials;
  heading?: string;
  tag?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#E5E5E5] bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-[1100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", damping: 18, stiffness: 70 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0176D3]">
            {tag}
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#032D60] sm:text-[40px]">
            {heading}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", damping: 18, stiffness: 70, delay: i * 0.08 }}
              className="rounded-md border border-[#E5E5E5] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-[#0176D3] text-[#0176D3]" />
                ))}
              </div>

              <p className="text-[15px] font-medium leading-[1.7] text-[#444]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-[#E5E5E5] pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F6F9] text-[13px] font-bold text-[#032D60]">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#032D60]">{t.name}</div>
                  <div className="text-[12px] font-medium text-[#706E6B]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
