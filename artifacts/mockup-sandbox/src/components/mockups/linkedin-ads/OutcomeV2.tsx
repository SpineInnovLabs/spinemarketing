import React from "react";

export function OutcomeV2() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-[#0A1228] overflow-hidden font-sans">
      {/* Nav Strip */}
      <nav className="flex items-center justify-between h-[8vh] shrink-0 px-[3.5vw] border-b border-[#1ba784]/10">
        <div className="flex items-center gap-[0.8vw]">
          <div className="w-[2vw] h-[2vw] rounded-full bg-[#1ba784] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-[1.2vw] h-[1.2vw] text-white">
              <path
                d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 12c1.5-1.5 2.5-1.5 4 0s2.5 1.5 4 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white font-bold text-[1.2vw] tracking-tight">IntegrateWise</span>
        </div>
        <div className="text-white/50 text-[1vw] font-medium tracking-wide">
          PLATFORM OVERVIEW
        </div>
      </nav>

      {/* Illustration Zone */}
      <div className="relative flex-1 overflow-hidden min-h-[40vh]">
        <img
          src="/__mockup/images/ref-homepage-hero.png"
          alt="Adaptive Spine Architecture"
          className="w-full h-full object-cover object-top block"
        />
        {/* Bottom Fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40%]" 
          style={{ background: "linear-gradient(to bottom, transparent, #0A1228)" }}
        />
        {/* Bottom Accent Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[0.25vw]"
          style={{ background: "linear-gradient(to right, transparent, #1ba784, transparent)" }}
        />
      </div>

      {/* Bottom Text Zone */}
      <div className="shrink-0 flex flex-col justify-between pt-[3vw] px-[5vw] pb-[3.5vw] bg-[#0A1228]">
        <div className="flex items-start gap-[3vw]">
          {/* Eyebrow */}
          <div className="w-[30%] pt-[0.8vw]">
            <h2 className="text-[#1ba784] text-[1.5vw] tracking-[0.12em] font-bold uppercase m-0 leading-tight">
              Adaptive Spine Architecture
            </h2>
          </div>
          
          {/* Headline */}
          <div className="w-[70%]">
            <h1 className="text-white text-[5.5vw] font-black leading-[1.0] tracking-[-0.045em] m-0">
              Your apps, finally united.
            </h1>
          </div>
        </div>

        {/* Subtext */}
        <p className="mt-[2.5vw] text-[2vw] text-white/50 font-medium leading-[1.45] max-w-[80%] line-clamp-2">
          The Adaptive Spine connects every tool. Your AI reads everything and tells you what to do next.
        </p>

        {/* Bottom Row */}
        <div className="mt-[3vw] flex items-center justify-between">
          <button className="bg-[#1ba784] hover:bg-[#158f71] transition-colors text-white rounded-[0.7vw] px-[3.5vw] py-[1.2vw] text-[2.2vw] font-bold flex items-center gap-[1vw]">
            Book a demo 
            <span className="text-[2.2vw] font-normal leading-none transform translate-y-[-0.1vw]">→</span>
          </button>
          <div className="text-white/35 text-[1.4vw] text-right font-medium">
            70+ connectors · SOC 2 certified · No code
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutcomeV2;