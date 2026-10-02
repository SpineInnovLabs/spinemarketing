"use client";

import { useState } from "react";
import { integrationLogoSrc } from "@/lib/integration-logos";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  bare?: boolean;
  className?: string;
  animate?: boolean;
};

const sizeMap = {
  sm: { box: "h-8 w-8", img: 18, label: "text-[12px]" },
  md: { box: "h-10 w-10", img: 22, label: "text-[13px]" },
  lg: { box: "h-12 w-12", img: 28, label: "text-[14px]" },
};

export function AppLogo({ name, src, size = "md", showLabel = false, bare = false, className }: AppLogoProps) {
  const resolvedSrc = src ?? integrationLogoSrc(name);
  const sizes = sizeMap[size];
  const [failed, setFailed] = useState(false);
  const showMark = Boolean(resolvedSrc) && !failed;

  const mark = showMark ? (
    <img
      src={resolvedSrc}
      alt=""
      width={sizes.img}
      height={sizes.img}
      className="h-5 w-5 shrink-0 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  ) : showLabel ? null : (
    <span className="text-[12px] font-semibold text-[#032D60]">{name}</span>
  );

  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2 whitespace-nowrap", className)}>
      {bare ? (
        mark
      ) : (
        <span className={cn(sizes.box, "inline-flex items-center justify-center rounded-md border border-[#D9E4EF] bg-white")}>
          {mark}
        </span>
      )}
      {showLabel && <span className={cn("font-semibold text-[#032D60]", sizes.label)}>{name}</span>}
      {!showLabel && showMark && <span className="sr-only">{name}</span>}
    </span>
  );
}
