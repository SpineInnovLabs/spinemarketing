"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ParallaxHero({
  children,
  glowColor = "rgba(27,167,132,0.07)",
  secondGlow = "rgba(139,92,246,0.05)",
}: {
  children: ReactNode;
  glowColor?: string;
  secondGlow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark-section">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div
          className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full blur-[220px]"
          style={{ background: glowColor }}
        />
        <div
          className="absolute top-[40%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: secondGlow }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}

export function ParallaxLayer({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxReveal({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 60 }
      : direction === "left"
      ? { opacity: 0, x: -60 }
      : { opacity: 0, x: 60 };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", damping: 20, stiffness: 60 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxDivider({
  variant = "gradient",
}: {
  variant?: "gradient" | "dots" | "glow";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "dots") {
    return (
      <div ref={ref} className="py-16 bg-dark-section">
        <motion.div
          style={{ scaleX, opacity }}
          className="mx-auto flex items-center justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-primary/40" />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div ref={ref} className="relative py-8 bg-dark-section overflow-hidden">
        <motion.div
          style={{ scaleX, opacity }}
          className="mx-auto h-px max-w-[600px] origin-center"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-xl bg-primary/20" />
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} className="py-4 bg-dark-section">
      <motion.div
        style={{ scaleX, opacity }}
        className="section-divider mx-auto max-w-[800px] origin-center"
      />
    </div>
  );
}

export function FloatingElement({
  children,
  delay = 0,
  amplitude = 8,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  amplitude?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
