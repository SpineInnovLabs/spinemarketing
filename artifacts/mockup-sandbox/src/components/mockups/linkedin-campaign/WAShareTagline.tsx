import React from 'react';

export function WAShareTagline() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 45%, rgba(27,167,132,0.08) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '5vw', display: 'flex', alignItems: 'center', gap: '2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3.5vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.15 }}>Every customer.</div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '8vw', lineHeight: 1.15 }}>Every tool.</div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.15, marginBottom: '4vw' }}>One screen.</div>

        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px', padding: '2vw 4vw'
        }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vw', fontWeight: 500 }}>
            The Knowledge Workspace
          </span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', textAlign: 'center', zIndex: 10 }}>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2.5vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
