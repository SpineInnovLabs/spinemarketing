import React from 'react';

export function LIProfileV1() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 60% 80% at 75% 50%, rgba(52,211,153,0.07) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
      backgroundSize: '100% 100%, 50px 50px, 50px 50px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 6vw',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ flex: 1, zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '3vh' }}>
          <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vh', height: '5vh' }}>
            <circle cx="16" cy="16" r="16" fill="#34D399"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
          <span style={{ fontWeight: 700, color: 'white', fontSize: '3.5vh', letterSpacing: '-0.02em' }}>IntegrateWise</span>
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '7vh', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Stop being the
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '7vh', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          human API.
        </div>
        <div style={{ width: '4vw', height: '3px', background: 'linear-gradient(90deg, #34D399, transparent)', margin: '2.5vh 0' }} />
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.5)', fontSize: '3vh', lineHeight: 1.4 }}>
          One workspace for every customer, every tool.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5vw', alignItems: 'center', zIndex: 2 }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map((d) => (
          <div key={d} style={{
            width: '6vh',
            height: '6vh',
            borderRadius: '12px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '3.5vh', height: '3.5vh', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LIProfileV1;
