"use client";

import { useLayoutEffect } from "react";
import { applyAppearance, readAppearance } from "@/lib/appearance";

export function AppearanceSync() {
  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => applyAppearance(readAppearance());
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return null;
}
