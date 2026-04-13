import React from 'react';

export default function FBFeed() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0B0F17] font-sans">
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');" }} />
      
      {/* Background Image */}
      <img 
        src="/__mockup/images/hero-wa-problem.png" 
        alt="Overwhelmed person" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[55%] z-10"
        style={{ background: 'linear-gradient(transparent, rgba(11,15,23,0.92))' }}
      ></div>
      
      {/* Top Left Logo */}
      <div className="absolute top-[4vw] left-[4vw] z-20 flex items-center gap-[2vw]">
        <img src="/__mockup/images/iw-brain-logo.png" alt="Brain Logo" className="w-[7vw] h-[7vw] object-contain" />
        <span className="text-white font-['Sora'] font-bold text-[3.5vw] tracking-tight">IntegrateWise</span>
      </div>
      
      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-[4vw] z-20 flex flex-col justify-end">
        <p className="font-['Inter'] font-normal text-[rgba(255,255,255,0.6)] text-[3vw] mb-[0.5vw]">
          You are the
        </p>
        <h1 
          className="font-['Sora'] font-extrabold text-[#EB4379] text-[10vw] leading-[1.1] tracking-tight"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.6)' }}
        >
          human API
        </h1>
        <h2 className="font-['Sora'] font-semibold text-white text-[5vw] leading-[1.2] tracking-tight mt-[1vw]">
          between your tools.
        </h2>
        
        <div className="flex gap-[2vw] items-center mt-[3vw] mb-[2vw]">
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              className="w-[3.5vw] h-[3.5vw] rounded-[4px] object-contain" />
          ))}
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.3)] text-[2vw]">+65 more</span>
        </div>
        
        <div className="flex items-center gap-[3vw]">
          <button className="bg-[#2EE5A8] text-[#0B0F17] font-['Sora'] font-bold text-[3vw] py-[1.5vw] px-[4vw] rounded-[10px] shadow-lg shadow-black/20">
            Book a Demo →
          </button>
          <span className="font-['Inter'] font-normal text-[rgba(255,255,255,0.4)] text-[2vw]">
            integratewise.ai
          </span>
        </div>
      </div>
    </div>
  );
}
