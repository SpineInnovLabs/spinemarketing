import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
    <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#1ba784"/>
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
    </svg>
    <span style={{ color: 'white', fontSize: '2.4vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>IntegrateWise</span>
  </div>
);

export function AdPain() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img src="/__mockup/images/campaign-pain.png" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '75%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.98) 0%, rgba(8,7,14,0.9) 40%, rgba(8,7,14,0.4) 70%, transparent 100%)'
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '3vw 3.5vw', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.6vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Sponsored</span>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{ display: 'inline-block', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '6px', padding: '0.6vw 1.5vw', marginBottom: '2vw' }}>
          <span style={{ color: '#ef4444', fontSize: '1.6vw', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>The Problem</span>
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.1, marginBottom: '2vw' }}>
          Stop being the<br/>
          <span style={{ color: '#ef4444' }}>human API</span><br/>
          between your tools.
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '2.2vw', lineHeight: 1.5, marginBottom: '3vw', maxWidth: '85%' }}>
          Your team runs on 12+ apps. Nobody sees the full picture. You're the glue — and it doesn't scale.
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '1vw',
          background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw'
        }}>
          <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>See the Fix →</span>
        </div>

        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif', marginLeft: '2vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
