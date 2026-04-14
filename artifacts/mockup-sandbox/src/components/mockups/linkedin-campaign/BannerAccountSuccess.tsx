import React from 'react';

export function BannerAccountSuccess() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 50% 100% at 65% 50%, rgba(52,211,153,0.06) 0%, transparent 70%)',
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
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>See churn </span>
        <span style={{ fontWeight: 700, color: '#34D399', fontSize: '4.5vh' }}>before </span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>it hits.</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '1.5vw', alignItems: 'center', flexShrink: 0 }}>
        {[
          { label: 'Health Score', color: '#34D399' },
          { label: 'Risk Alerts', color: '#f59e0b' },
          { label: 'Renewal Intel', color: '#60a5fa' },
        ].map(item => (
          <div key={item.label} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '5px', padding: '0.8vh 1.2vw'
          }}>
            <span style={{ color: item.color, fontSize: '2.5vh', fontWeight: 600, whiteSpace: 'nowrap' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
