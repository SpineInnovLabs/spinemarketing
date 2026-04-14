import React from 'react';

export function WAStatusV1() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(235,67,121,0.08) 0%, transparent 55%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ position: 'absolute', top: '5vw', left: '6vw', display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '3.5vw', letterSpacing: '-0.02em' }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 2, padding: '0 8vw' }}>
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '4vw', marginBottom: '1vw' }}>
          Stop being the
        </div>
        <div style={{ fontWeight: 900, color: '#EB4379', fontSize: '12vw', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
          human
        </div>
        <div style={{ fontWeight: 900, color: '#EB4379', fontSize: '12vw', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
          API.
        </div>

        <div style={{ width: '10vw', height: '3px', background: 'linear-gradient(90deg, transparent, #34D399, transparent)', margin: '5vw auto' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3vw', marginBottom: '4vw' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
            <div key={d} style={{
              width: '8vw', height: '8vw', borderRadius: '14px',
              backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '5vw', height: '5vw', objectFit: 'contain' }} />
            </div>
          ))}
        </div>

        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.45)', fontSize: '3.5vw', marginBottom: '5vw' }}>
          One workspace. Every tool. AI proposes, you approve.
        </div>

        <div style={{
          display: 'inline-block',
          backgroundColor: '#34D399',
          color: '#08070E',
          fontWeight: 700,
          fontSize: '4vw',
          padding: '2.5vw 8vw',
          borderRadius: '12px',
          boxShadow: '0 0 40px rgba(52,211,153,0.3)',
        }}>
          Book a Demo →
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', color: 'rgba(255,255,255,0.25)', fontSize: '2.5vw', fontWeight: 500 }}>
        integratewise.ai
      </div>
    </div>
  );
}

export default WAStatusV1;
