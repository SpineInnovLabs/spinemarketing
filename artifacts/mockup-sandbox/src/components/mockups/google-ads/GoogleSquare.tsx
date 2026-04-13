import React from 'react';

export function GoogleSquare() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#08070E', backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(235,67,121,0.06) 0%, transparent 50%)', position: 'relative', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '3vw', left: '3vw', display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: 'white', fontSize: '2.8vw' }}>IntegrateWise</div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 5vw' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '3vw', lineHeight: 1.2 }}>Stop being the</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.1 }}>human API.</div>

        <div style={{ height: '3vw' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5vw', alignItems: 'center', margin: '2vw 0' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3vw', height: '3vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vw' }}>+65 more</span>
        </div>

        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#34D399', fontSize: '2.5vw' }}>
          We built one screen to replace them all.
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2vw', marginTop: '3vw' }}>
          <div style={{ backgroundColor: '#34D399', color: '#08070E', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '2.5vw', padding: '1.5vw 4vw', borderRadius: '10px' }}>Book a Demo &rarr;</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '3vw', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '1.8vw' }}>
        integratewise.ai
      </div>
    </div>
  );
}
