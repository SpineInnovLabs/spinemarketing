import React from 'react';
import { Logo } from './Logo';

export function BannerAccountSuccessB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 45% 100% at 75% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)',
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
        <span style={{ fontWeight: 700, color: '#f59e0b', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>87% confidence </span>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh', whiteSpace: 'nowrap' }}>this account churns.</span>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vh', marginTop: '0.5vh' }}>Would you have caught it?</div>
      </div>

      <div style={{ width: '1px', height: '45%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

      <div style={{
        background: 'rgba(27,167,132,0.1)', border: '1px solid rgba(27,167,132,0.25)',
        borderRadius: '6px', padding: '1vh 2vw', flexShrink: 0
      }}>
        <span style={{ color: '#34D399', fontSize: '2.8vh', fontWeight: 600, whiteSpace: 'nowrap' }}>Account Success</span>
      </div>
    </div>
  );
}
