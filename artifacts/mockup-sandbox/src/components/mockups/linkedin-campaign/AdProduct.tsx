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

export function AdProduct() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img src="/__mockup/images/campaign-product.png" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.98) 0%, rgba(8,7,14,0.88) 35%, rgba(8,7,14,0.4) 65%, transparent 100%)'
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '3vw 3.5vw', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.6vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Sponsored</span>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.1, marginBottom: '1.5vw' }}>
          Every customer.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: '#34D399', fontSize: '6vw', lineHeight: 1.1, marginBottom: '1.5vw' }}>
          Every tool.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.1, marginBottom: '2.5vw' }}>
          One screen.
        </div>

        <div style={{ display: 'flex', gap: '1.5vw', marginBottom: '3vw', flexWrap: 'wrap' }}>
          {['Workbench', 'Intelligence Layer', 'Spine'].map(label => (
            <div key={label} style={{
              background: 'rgba(27,167,132,0.1)', border: '1px solid rgba(27,167,132,0.3)',
              borderRadius: '6px', padding: '0.8vw 2vw'
            }}>
              <span style={{ color: '#34D399', fontSize: '1.6vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw'
          }}>
            <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Book a Demo →</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
