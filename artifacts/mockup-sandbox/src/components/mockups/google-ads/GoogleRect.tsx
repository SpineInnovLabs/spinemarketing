import React from 'react';

export function GoogleRect() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0B0F17', position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <svg viewBox="0 0 32 32" fill="none" style={{ position: 'absolute', top: '2vw', left: '3vw', width: '4vw', height: '4vw' }}>
        <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
        <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
      </svg>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/__mockup/images/iw-brain-logo.png" alt="" style={{ width: '15vw', marginBottom: '3vw' }} />
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '5vw', lineHeight: 1.2 }}>Every customer.</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: '#2EE5A8', fontSize: '5vw', lineHeight: 1.2 }}>One screen.</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.5)', fontSize: '2.8vw', marginTop: '2vw' }}>70+ apps connected</div>
        <div style={{ backgroundColor: '#2EE5A8', color: '#0B0F17', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '3.5vw', padding: '1.5vw 5vw', borderRadius: '8px', marginTop: '3vw', display: 'inline-block' }}>Book a Demo</div>
      </div>

      <div style={{ position: 'absolute', bottom: '2vw', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '2.5vw' }}>
        integratewise.ai
      </div>
    </div>
  );
}
