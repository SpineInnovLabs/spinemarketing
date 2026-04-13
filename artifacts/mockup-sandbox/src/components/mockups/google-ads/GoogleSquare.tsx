import React from 'react';

export function GoogleSquare() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0B0F17', position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      <img src="/__mockup/images/hero-wa-problem.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: '20%', background: 'linear-gradient(rgba(11,15,23,0.5), transparent)' }} />
      <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: '55%', background: 'linear-gradient(transparent, rgba(11,15,23,0.92))' }} />
      
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '3vw', display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
        <img src="/__mockup/images/iw-brain-logo.png" alt="" style={{ width: '5vw' }} />
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '2.8vw' }}>IntegrateWise</div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4vw' }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.6)', fontSize: '3vw', lineHeight: 1.2 }}>Stop being the</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>human API.</div>
        <div style={{ width: '5vw', height: '2px', backgroundColor: '#2EE5A8', margin: '2vw 0' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#2EE5A8', color: '#0B0F17', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '2.5vw', padding: '1.5vw 4vw', borderRadius: '10px' }}>Book a Demo &rarr;</div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '2vw', marginLeft: '2vw' }}>integratewise.ai</div>
        </div>
      </div>
    </div>
  );
}
