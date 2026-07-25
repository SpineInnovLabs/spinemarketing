/**
 * Shared framer-motion animation helpers.
 *
 * `fade` is for scroll-triggered reveals (whileInView).
 * `heroFade` is for above-the-fold elements that animate on mount (animate).
 *
 * Previously these were copy-pasted across ~40 files with near-identical
 * implementations. Centralizing them keeps animation timing consistent.
 */

import type { Transition, Variants } from "framer-motion";

const springTransition = (delay = 0): Transition => ({
  type: "spring",
  damping: 18,
  stiffness: 70,
  delay,
});

const heroSpringTransition = (delay = 0): Transition => ({
  type: "spring",
  damping: 16,
  mass: 1,
  stiffness: 52,
  delay,
});

export const fade = (delay = 0, yOffset = 16, margin = "-80px") => ({
  initial: { opacity: 0, y: yOffset } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin } as const,
  transition: springTransition(delay),
});

export const heroFade = (delay = 0, yOffset = 12) => ({
  initial: { opacity: 0, y: yOffset } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: heroSpringTransition(delay),
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: springTransition() },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
