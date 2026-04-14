import React from 'react';

export function BannerTagline() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 40% 100% at 50% 50%, rgba(52,211,153,0.06) 0%, transparent 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3vw',
      padding: '0 4vw', boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '7vh', height: '7vh' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '6vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ whiteSpace: 'nowrap' }}>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5vh' }}>Every customer. </span>
        <span style={{ fontWeight: 700, color: '#34D399', fontSize: '5vh' }}>Every tool. </span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5vh' }}>One screen.</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'center', flexShrink: 0 }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map(d => (
          <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4.5vh', height: '4.5vh', borderRadius: '4px', objectFit: 'contain' }} />
        ))}
      </div>
    </div>
  );
}
