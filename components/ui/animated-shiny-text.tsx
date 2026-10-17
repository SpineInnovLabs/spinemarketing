import { CSSProperties, ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 110,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "inline-flex items-center gap-2 bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        "animate-shiny-text bg-gradient-to-r from-[#006FE8] via-[#032D60] via-50% to-[#006FE8] text-[#006FE8]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
