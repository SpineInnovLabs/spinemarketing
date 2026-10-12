"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface StickyScrollStep {
  /** Small label above the title (e.g. "Step 01") */
  label?: string
  /** Main title for this step */
  title: string
  /** Description paragraph */
  description: string
  /** React node rendered on the right/visual side */
  visual: React.ReactNode
}

interface StickyScrollRevealProps {
  steps: StickyScrollStep[]
  /** Section heading shown above the sticky area */
  heading?: React.ReactNode
  /** Background class for the section */
  className?: string
  /** ID for anchor linking */
  id?: string
  style?: React.CSSProperties
}

export function StickyScrollReveal({
  steps,
  heading,
  className,
  id,
  style,
}: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Map scroll progress to step index
    const stepSize = 1 / steps.length
    const idx = Math.min(
      steps.length - 1,
      Math.floor(v / stepSize)
    )
    setActiveIndex(idx)
  })

  if (hasMounted && prefersReducedMotion) {
    return <StickyScrollFallback steps={steps} heading={heading} className={className} id={id} style={style} />
  }

  return (
    <section id={id} className={cn("marketing-surface relative", className)} style={style}>
      {/* Section heading (outside sticky area) */}
      {heading && (
        <div className="mx-auto max-w-[1100px] px-6 pt-[100px] pb-8 md:px-16">
          {heading}
        </div>
      )}

      {/* Tall scroll container — height drives the animation */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${steps.length * 100}vh`, position: "relative" }}
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1100px] gap-12 px-6 md:px-16 lg:grid-cols-2">
            {/* Left panel — step indicator + text */}
            <div className="flex flex-col justify-center">
              {/* Progress line + step dots */}
              <div className="mb-8 flex items-center gap-3">
                {steps.map((_, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-bold transition-colors duration-300",
                        i <= activeIndex
                          ? "text-white"
                          : "bg-white/[0.08] text-white/40"
                      )}
                      style={
                        i <= activeIndex
                          ? { background: "var(--gradient-primary-icon)" }
                          : undefined
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <div className="relative h-[3px] flex-1 rounded-full bg-white/[0.08]">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ background: "var(--gradient-primary)" }}
                          animate={{
                            width: i < activeIndex ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step label */}
              <motion.span
                key={`label-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2 text-[14px] font-semibold tracking-[-0.02em] text-primary"
              >
                {steps[activeIndex].label}
              </motion.span>

              {/* Step title */}
              <motion.h3
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="text-[length:min(34px,var(--marketing-card-size))] font-semibold tracking-[-0.04em] leading-[1.15] text-white sm:text-[length:min(40px,var(--marketing-card-size))]"
              >
                {steps[activeIndex].title}
              </motion.h3>

              {/* Step description */}
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-4 max-w-md text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-white/45"
              >
                {steps[activeIndex].description}
              </motion.p>
            </div>

            {/* Right panel — visual that swaps */}
            <div className="relative flex items-center justify-center">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  aria-hidden={i !== activeIndex}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    scale: i === activeIndex ? 1 : 0.92,
                    y: i === activeIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                >
                  {step.visual}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding so the last step has scroll room */}
      <div className="h-[10vh]" />
    </section>
  )
}

/**
 * Mobile fallback — renders as stacked cards instead of sticky scroll.
 * Use this inside a media query or with a hook.
 */
export function StickyScrollFallback({
  steps,
  heading,
  className,
  id,
  style,
}: StickyScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])
  const reduce = hasMounted && prefersReducedMotion
  return (
    <section id={id} className={cn("arvio-section marketing-surface", className)} style={style}>
      <div className="mx-auto max-w-[1100px]">
        {heading}
        <div className="mt-16 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={reduce ? { opacity: 1, y: 0 } : undefined}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduce ? { duration: 0 } : {
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div>
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-bold text-white"
                  style={{ background: "var(--gradient-primary-icon)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                {step.label && (
                  <span className="mb-1 text-[14px] font-semibold text-primary">
                    {step.label}
                  </span>
                )}
                <h3 className="text-[length:min(28px,var(--marketing-card-size))] font-semibold tracking-[-0.04em] leading-[1.15] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-[1.6] text-white/45">
                  {step.description}
                </p>
              </div>
              <div className="flex justify-center">{step.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
