import React from 'react';

export default function FBStories() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0B0F17] font-sans">
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');" }} />
      
      <img 
        src="/__mockup/images/hero-google-trust.png" 
        alt="Shield/Vault" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(rgba(11,15,23,0.3) 0%, rgba(11,15,23,0.7) 50%, rgba(11,15,23,0.95) 100%)' }}
      ></div>
      
      <div className="absolute top-[8vh] left-0 w-full z-20 flex justify-center">
        <img src="/__mockup/images/iw-brain-logo.png" alt="Brain Logo" className="w-[12vw] h-[12vw] object-contain" />
      </div>
      
      <div className="absolute top-[50%] left-0 w-full z-20 transform -translate-y-1/2 text-center px-[5vw] flex flex-col items-center justify-center">
        <span className="font-['Sora'] font-normal text-[rgba(255,255,255,0.5)] text-[5vw] mb-[1vw]">
          8 tools.
        </span>
        <span className="font-['Sora'] font-bold text-white text-[9vw] leading-[1.1] mb-[1vw]">
          One screen.
        </span>
        <span className="font-['Sora'] font-normal text-[rgba(255,255,255,0.5)] text-[5vw] mb-[1vw]">
          Zero copy-paste.
        </span>
        <span className="font-['Sora'] font-bold text-[#2EE5A8] text-[9vw] leading-[1.1]">
          IntegrateWise.
        </span>
      </div>
      
      <div className="absolute bottom-[6vh] left-0 w-full z-20 flex flex-col items-center">
        <button 
          className="bg-[#2EE5A8] text-[#0B0F17] font-['Sora'] font-bold text-[4.5vw] py-[2.5vw] px-[8vw] rounded-[100vw]"
          style={{ boxShadow: '0 0 40px rgba(46,229,168,0.35)' }}
        >
          Learn More
        </button>
        <div className="font-['Inter'] font-normal text-[rgba(255,255,255,0.3)] text-[3vw] mt-[2vw] flex flex-col items-center gap-[0.5vw]">
          <span>Swipe Up</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-[4vw] h-[4vw] opacity-50 stroke-current">
            <path d="M5 15L12 8L19 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
