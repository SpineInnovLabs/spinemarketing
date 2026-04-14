import React from 'react';
import { Logo } from './Logo';

export function BannerPersonalOpsB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 45% 100% at 40% 50%, rgba(192,132,252,0.05) 0%, transparent 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 4vw', boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', flexShrink: 0 }}>
        <Logo size="7vh" />
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5.5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{ textAlign: 'center' }}>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>Open </span>
        <span style={{ fontWeight: 700, color: '#c084fc', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>one tab</span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>. Own your day.</span>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh', marginTop: '0.5vh' }}>Tasks, emails, meetings — already organised.</div>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{
        background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.25)',
        borderRadius: '6px', padding: '1vh 2vw', flexShrink: 0
      }}>
        <span style={{ color: '#c084fc', fontSize: '2.8vh', fontWeight: 600, whiteSpace: 'nowrap' }}>Personal Ops</span>
      </div>
    </div>
  );
}
