import React from 'react';
import { Logo } from './Logo';

export function BannerGovernance() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 40% 100% at 30% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3vw',
      padding: '0 4vw', boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', flexShrink: 0 }}>
        <Logo size="7vh" />
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5.5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ whiteSpace: 'nowrap' }}>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>AI </span>
        <span style={{ fontWeight: 700, color: '#34D399', fontSize: '4.5vh' }}>recommends</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>.  Humans </span>
        <span style={{ fontWeight: 700, color: '#34D399', fontSize: '4.5vh' }}>decide</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh' }}>.</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ display: 'flex', gap: '2vw', alignItems: 'center', flexShrink: 0 }}>
        {[
          { label: 'Evidence-backed', color: '#34D399' },
          { label: 'Confidence scored', color: '#60a5fa' },
          { label: 'Impact preview', color: '#c084fc' },
        ].map(item => (
          <div key={item.label} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '6px', padding: '0.8vh 1.5vw'
          }}>
            <span style={{ color: item.color, fontSize: '2.5vh', fontWeight: 600 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
