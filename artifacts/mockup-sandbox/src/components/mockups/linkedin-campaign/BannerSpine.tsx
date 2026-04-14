import React from 'react';
import { Logo } from './Logo';

export function BannerSpine() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'radial-gradient(ellipse 50% 100% at 70% 50%, rgba(52,211,153,0.05) 0%, transparent 70%)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 4vw', boxSizing: 'border-box',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', flexShrink: 0 }}>
        <Logo size="7vh" />
        <span style={{ fontWeight: 700, color: 'white', fontSize: '5.5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '3vw' }}>
        {[
          { step: '01', label: 'Load', color: '#34D399' },
          { step: '02', label: 'Store', color: '#60a5fa' },
          { step: '03', label: 'Think', color: '#c084fc' },
          { step: '04', label: 'Act', color: '#f59e0b' },
        ].map((item, i) => (
          <React.Fragment key={item.step}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
              <span style={{ color: item.color, fontSize: '4vh', fontWeight: 800 }}>{item.step}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '3.5vh', fontWeight: 600 }}>{item.label}</span>
            </div>
            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '4vh' }}>→</span>}
          </React.Fragment>
        ))}
      </div>

      <div style={{
        background: 'rgba(27,167,132,0.1)', border: '1px solid rgba(27,167,132,0.25)',
        borderRadius: '6px', padding: '1vh 2vw', flexShrink: 0
      }}>
        <span style={{ color: '#34D399', fontSize: '3vh', fontWeight: 600, whiteSpace: 'nowrap' }}>The Adaptive Spine</span>
      </div>
    </div>
  );
}
