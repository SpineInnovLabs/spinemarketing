import React from 'react';

export function LICompanyV2() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#08070E',
      backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.04) 50%, transparent 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5vw',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');" }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', flexShrink: 0 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5.5vh', height: '5.5vh' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontWeight: 700, color: 'white', fontSize: '4.5vh', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', flex: 1, padding: '0 3vw' }}>
        <div style={{ fontWeight: 700, color: 'white', fontSize: '5vh', whiteSpace: 'nowrap', letterSpacing: '-0.02em' }}>
          AI finds the risk.{' '}
          <span style={{ color: '#34D399' }}>You make the call.</span>
        </div>
        <div style={{ width: '8vw', height: '2px', background: 'linear-gradient(90deg, transparent, #34D399, transparent)', margin: '1.5vh auto 0' }} />
      </div>

      <div style={{
        border: '1px solid rgba(52,211,153,0.3)',
        color: '#34D399',
        fontWeight: 600,
        padding: '1.5vh 2vw',
        borderRadius: '10px',
        fontSize: '3vh',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        Book a Demo →
      </div>
    </div>
  );
}

export default LICompanyV2;
