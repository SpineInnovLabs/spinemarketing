import React from 'react';

export function BannerBusinessOps() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 50% 100% at 35% 50%, rgba(96,165,250,0.05) 0%, transparent 70%)',
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
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>One </span>
        <span style={{ fontWeight: 700, color: '#60a5fa', fontSize: '4.5vh' }}>Workbench</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>.  Zero tab chaos.</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '2vw', alignItems: 'center', flexShrink: 0 }}>
        {[
          { n: '12+', label: 'Tools unified' },
          { n: '1', label: 'Workspace' },
          { n: '0', label: 'Context lost' },
        ].map(item => (
          <div key={item.label} style={{ textAlign: 'center' }}>
            <div style={{ color: '#60a5fa', fontSize: '5vh', fontWeight: 800, lineHeight: 1 }}>{item.n}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.8vh', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
