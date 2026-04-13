import React from 'react';

export default function FBSquare() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0B0F17] font-sans">
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');" }} />
      
      {/* Background Image */}
      <img 
        src="/__mockup/images/hero-fb-product.png" 
        alt="Unified dashboard" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[60%] z-10"
        style={{ background: 'linear-gradient(transparent, rgba(11,15,23,0.9))' }}
      ></div>
      
      {/* Top Left Logo */}
      <div className="absolute top-[4vw] left-[4vw] z-20 flex items-center gap-[1.5vw]">
        <img src="/__mockup/images/iw-brain-logo.png" alt="Brain Logo" className="w-[5vw] h-[5vw] object-contain" />
        <span className="text-white font-['Sora'] font-bold text-[2.8vw] tracking-tight">IntegrateWise</span>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-[4vw] z-20 flex flex-col justify-end">
        <h1 className="font-['Sora'] font-bold text-white text-[8vw] leading-[1.1] tracking-tight">
          One Workspace.
        </h1>
        <h1 
          className="font-['Sora'] font-bold text-[#2EE5A8] text-[8vw] leading-[1.1] tracking-tight"
          style={{ textShadow: '0 4px 20px rgba(46,229,168,0.2)' }}
        >
          Every Tool.
        </h1>
        
        <p className="font-['Inter'] font-medium text-[rgba(255,255,255,0.55)] text-[2.5vw] mt-[2vw]">
          AI that connects your tools. Governed by you.
        </p>
        
        <button className="bg-[#2EE5A8] text-[#0B0F17] font-['Sora'] font-bold text-[2.8vw] py-[1.5vw] px-[4vw] rounded-[10px] mt-[3vw] self-start shadow-xl shadow-black/30 hover:bg-[#20d899] transition-colors">
          Get Started →
        </button>
        
        {/* Stats Row */}
        <div className="mt-[2vw] flex items-center gap-[3vw]">
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.35)] text-[1.8vw]">
            70+ Integrations
          </span>
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.35)] text-[1.8vw]">·</span>
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.35)] text-[1.8vw]">
            360° View
          </span>
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.35)] text-[1.8vw]">·</span>
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.35)] text-[1.8vw]">
            100% Human Control
          </span>
        </div>
      </div>
    </div>
  );
}
