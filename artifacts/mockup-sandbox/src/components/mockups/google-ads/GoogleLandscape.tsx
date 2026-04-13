import React from 'react';

export function GoogleLandscape() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0B0F17', position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      <img src="/__mockup/images/hero-google-trust.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60%', background: 'linear-gradient(to right, rgba(11,15,23,0.92) 0%, rgba(11,15,23,0.7) 50%, transparent 100%)' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '55%', padding: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img src="/__mockup/images/iw-brain-logo.png" alt="" style={{ width: '6vw', marginBottom: '2vw' }} />
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '5vw', lineHeight: 1.1 }}>The Knowledge</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#2EE5A8', fontSize: '5vw', lineHeight: 1.1 }}>Workspace</div>
        <div style={{ width: '4vw', height: '2px', backgroundColor: '#2EE5A8', margin: '1.5vw 0' }} />
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', lineHeight: 1.4 }}>One workspace. Every tool. AI that waits for you.</div>
        <div style={{ backgroundColor: '#2EE5A8', color: '#0B0F17', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '2.2vw', padding: '1.2vw 3vw', borderRadius: '8px', marginTop: '2vw', display: 'inline-block', width: 'fit-content' }}>Book a Demo &rarr;</div>
      </div>
    </div>
  );
}
