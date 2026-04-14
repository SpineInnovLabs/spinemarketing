import React from 'react';

export function PostBusinessOpsB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 35%, rgba(96,165,250,0.06) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '4vw', right: '4vw', zIndex: 10 }}>
        <div style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '6px', padding: '0.5vw 1.5vw' }}>
          <span style={{ color: '#60a5fa', fontSize: '1.4vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Business Ops</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw', marginTop: '-2vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.12 }}>
          Your ops team
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.12 }}>
          runs on
        </div>
        <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '5.5vw', lineHeight: 1.12, marginBottom: '2vw' }}>
          <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>12 tabs</span>
        </div>
        <div style={{ fontWeight: 800, color: '#60a5fa', fontSize: '7vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          1 Workbench.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', lineHeight: 1.6, marginBottom: '3vw', maxWidth: '80%', margin: '0 auto 3vw' }}>
          CRM, support, billing, product, comms — unified with full context on every interaction.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2vw', zIndex: 10 }}>
        {[
          { before: '12 tabs', after: '1 screen', color: '#60a5fa' },
          { before: '4 min lookup', after: '0 sec context', color: '#34D399' },
          { before: 'Copy-paste ops', after: 'Auto-sync', color: '#c084fc' },
        ].map(item => (
          <div key={item.after} style={{
            background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '2vw 2.5vw', textAlign: 'center', minWidth: '18vw'
          }}>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.6vw', fontWeight: 500, textDecoration: 'line-through', marginBottom: '0.8vw' }}>{item.before}</div>
            <div style={{ color: item.color, fontSize: '2vw', fontWeight: 700 }}>{item.after}</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', zIndex: 10, display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <div style={{ background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600 }}>See the Workbench →</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.6vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
