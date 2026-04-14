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

export function AdVision() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img src="/__mockup/images/campaign-vision.png" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.98) 0%, rgba(8,7,14,0.88) 35%, rgba(8,7,14,0.45) 65%, transparent 100%)'
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '3vw 3.5vw', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.6vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Sponsored</span>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{ display: 'inline-block', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '6px', padding: '0.6vw 1.5vw', marginBottom: '2vw' }}>
          <span style={{ color: '#c084fc', fontSize: '1.5vw', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Category Defining</span>
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '5.2vw', lineHeight: 1.1, marginBottom: '2vw' }}>
          From integration<br/>
          to <span style={{ color: '#34D399' }}>intelligence</span>.
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '2vw', lineHeight: 1.5, marginBottom: '2.5vw', maxWidth: '90%' }}>
          Not a CRM. Not an iPaaS. Not another dashboard. IntegrateWise is the Adaptive Spine — the knowledge workspace your entire company runs on.
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px', padding: '2vw 2.5vw', marginBottom: '3vw'
        }}>
          <div style={{ display: 'flex', gap: '3vw' }}>
            {[
              { num: '12', label: 'Domain Views' },
              { num: '30+', label: 'Integrations' },
              { num: '1', label: 'Screen' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ color: '#34D399', fontSize: '3.5vw', fontWeight: 800, fontFamily: 'Inter, sans-serif' }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{ display: 'inline-flex', background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
            <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Explore the Platform →</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
