import React from 'react';

export function GoogleRect() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#08070E', backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(52,211,153,0.06) 0%, transparent 60%)', position: 'relative', fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '12vw', height: '12vw', marginBottom: '3vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399" />
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9" />
        </svg>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'white', fontSize: '5vw', lineHeight: 1.2 }}>Every customer.</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#34D399', fontSize: '5vw', lineHeight: 1.2 }}>One screen.</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5vw', alignItems: 'center', marginTop: '3vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <img key={d} src={`/__mockup/images/logos/${d}`} alt=""
              style={{ width: '3.5vw', height: '3.5vw', borderRadius: '4px', objectFit: 'contain' }} />
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(255,255,255,0.4)', fontSize: '2.5vw' }}>+65 more</span>
        </div>
        <div style={{ backgroundColor: '#34D399', color: '#08070E', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '3.5vw', padding: '1.5vw 5vw', borderRadius: '8px', marginTop: '3vw', display: 'inline-block' }}>Book a Demo &rarr;</div>
      </div>

      <div style={{ position: 'absolute', bottom: '2vw', left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '2.5vw' }}>
        integratewise.ai
      </div>
    </div>
  );
}
