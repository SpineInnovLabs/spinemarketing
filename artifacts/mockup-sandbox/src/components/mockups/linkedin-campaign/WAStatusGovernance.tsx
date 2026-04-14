import React from 'react';

export function WAStatusGovernance() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(59,130,246,0.06) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '5vw', left: '6vw', display: 'flex', alignItems: 'center', gap: '2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '6vw', height: '6vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '4vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw', marginTop: '-5vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '7.5vw', lineHeight: 1.15 }}>
          AI
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '7.5vw', lineHeight: 1.15 }}>
          recommends.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '7.5vw', lineHeight: 1.15 }}>
          Humans
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '7.5vw', lineHeight: 1.15, marginBottom: '5vw' }}>
          decide.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vw', lineHeight: 1.5, marginBottom: '5vw' }}>
          Every action comes with evidence,<br/>
          confidence scores, and impact previews.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '12vw', left: '6vw', right: '6vw', zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '2vw'
      }}>
        {[
          { label: 'Evidence-backed', color: '#34D399' },
          { label: 'Confidence scored', color: '#60a5fa' },
          { label: 'Impact preview', color: '#c084fc' },
        ].map(item => (
          <div key={item.label} style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '8px', padding: '2vw 4vw', textAlign: 'center'
          }}>
            <span style={{ color: item.color, fontSize: '3vw', fontWeight: 600 }}>{item.label}</span>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '4vw', textAlign: 'center', zIndex: 10 }}>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2.5vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
