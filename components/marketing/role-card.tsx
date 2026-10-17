"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

export function RoleCard({
  title,
  description,
  href,
  index = 0,
}: {
  title: string;
  description: string;
  href: string;
  index?: number;
}) {
  return (
    <BlurFade delay={index * 0.05} inView className="h-full">
      <Link
        href={href}
        className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FE8]/40"
      >
        <MagicCard className="h-full" innerClassName="justify-between p-6">
          <div>
            <h3 className="text-[length:min(20px,var(--marketing-card-size))] font-semibold tracking-[-0.03em] text-[#032D60] group-hover:text-[#006FE8] transition-colors">
              {title}
            </h3>
            <p className="mt-2.5 flex-1 text-[14px] font-medium leading-[1.65] text-[#33465B]">
              {description}
            </p>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#006FE8]">
            Explore{" "}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </MagicCard>
      </Link>
    </BlurFade>
  );
}
