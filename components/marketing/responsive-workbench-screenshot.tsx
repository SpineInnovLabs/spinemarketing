"use client";

import React from "react";
import mediaStyles from "./responsive-media.module.css";

interface ResponsiveWorkbenchScreenshotProps {
  src: string;
  alt: string;
  isMobile?: boolean;
  priority?: boolean;
  className?: string;
  maxHeight?: string;
  onClick?: () => void;
}

export function ResponsiveWorkbenchScreenshot({
  src,
  alt,
  isMobile = false,
  priority = false,
  className = "",
  maxHeight,
  onClick,
}: ResponsiveWorkbenchScreenshotProps) {
  const basePath = src.replace(/\.webp$/, "");
  const interactionProps = onClick ? {
    role: "button",
    tabIndex: 0,
    "aria-label": "Expand Workbench screenshot",
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      onClick();
    },
  } : {};

  if (isMobile) {
    return (
      <div
        className={`${mediaStyles.phone} relative mx-auto max-w-[390px] overflow-hidden rounded-[2.5rem] border-[8px] border-[#1A2E46] shadow-2xl ${
          onClick ? "cursor-pointer transition-transform hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]" : ""
        } ${className}`}
        onClick={onClick}
        {...interactionProps}
      >
        <picture className="block min-w-0">
          <source
            type="image/webp"
            srcSet={`
              ${basePath}-390w.webp 390w,
              ${basePath}-780w.webp 780w,
              ${src} 390w
            `}
            sizes="(max-width: 480px) 100vw, 390px"
          />
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={mediaStyles.media}
            style={{ maxHeight }}
          />
        </picture>
      </div>
    );
  }

  return (
    <div
      className={`relative mx-auto flex w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-[#D5E5F5] bg-white shadow-sm ${
        onClick ? "cursor-pointer transition-transform hover:scale-[1.005] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#006FE8]" : ""
      } ${className}`}
      onClick={onClick}
      {...interactionProps}
    >
      <div className="flex w-full justify-center">
        <div className="flex min-w-0 w-full items-center justify-center">
          <picture className="flex w-full items-center justify-center">
            <source
              type="image/webp"
              srcSet={`
                ${basePath}-640w.webp 640w,
                ${basePath}-960w.webp 960w,
                ${basePath}-1280w.webp 1280w,
                ${basePath}-1440w.webp 1440w,
                ${basePath}-2880w.webp 2880w,
                ${src} 1440w
              `}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
            />
            <img
              src={src}
              alt={alt}
              width={1440}
              height={900}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className={mediaStyles.media}
              style={{ maxHeight }}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
