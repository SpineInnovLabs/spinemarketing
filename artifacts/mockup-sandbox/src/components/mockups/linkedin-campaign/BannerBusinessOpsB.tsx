import React from 'react';

export function BannerBusinessOpsB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 50% 100% at 50% 50%, rgba(96,165,250,0.05) 0%, transparent 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 4vw', boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '7vh', height: '7vh' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5.5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ whiteSpace: 'nowrap' }}>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>Stop </span>
        <span style={{ fontWeight: 700, color: '#ef4444', fontSize: '4.5vh', textDecoration: 'line-through', opacity: 0.6 }}>toggling</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>. Start </span>
        <span style={{ fontWeight: 700, color: '#60a5fa', fontSize: '4.5vh' }}>operating</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>.</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '1vw', alignItems: 'center', flexShrink: 0 }}>
        {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map(d => (
          <img key={d} src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4vh', height: '4vh', borderRadius: '4px', objectFit: 'contain' }} />
        ))}
        <span style={{ color: '#60a5fa', fontSize: '3.5vh', marginLeft: '0.5vw' }}>→</span>
        <div style={{
          background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)',
          borderRadius: '5px', padding: '0.6vh 1vw'
        }}>
          <span style={{ color: '#60a5fa', fontSize: '2.5vh', fontWeight: 700 }}>Workbench</span>
        </div>
      </div>
    </div>
  );
}
