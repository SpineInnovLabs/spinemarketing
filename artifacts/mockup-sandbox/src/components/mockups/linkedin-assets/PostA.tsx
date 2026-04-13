import React from 'react';

export function PostA() {
  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(46,229,168,0.08) 0%, transparent 60%), #0B0F17' }} />

      {/* Logo */}
      <div style={{ position: 'absolute', top: '5vw', left: '5vw', display: 'flex', alignItems: 'center', gap: '1vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontFamily: 'Sora, sans-serif', color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      {/* Center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '8vw', lineHeight: 1.2 }}>One Workspace.</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#2EE5A8', fontSize: '8vw', lineHeight: 1.2 }}>Every Tool.</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '8vw', lineHeight: 1.2 }}>AI That Waits for You.</div>
      </div>

      {/* Bottom */}
      <div style={{ position: 'absolute', bottom: '5vw', left: 0, right: 0, textAlign: 'center', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '2.5vw', zIndex: 10 }}>
        integratewise.ai &nbsp;|&nbsp; Book a Demo
      </div>
    </div>
  );
}
