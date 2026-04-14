import React from 'react';

export function PostPersonalOpsB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 35%, rgba(192,132,252,0.06) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '4vw', right: '4vw', zIndex: 10 }}>
        <div style={{ background: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.3)', borderRadius: '6px', padding: '0.5vw 1.5vw' }}>
          <span style={{ color: '#c084fc', fontSize: '1.4vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Personal Ops</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw', marginTop: '-3vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.12 }}>
          Open your laptop.
        </div>
        <div style={{ fontWeight: 800, color: '#c084fc', fontSize: '5.5vw', lineHeight: 1.12 }}>
          Your day is ready.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          No assembly required.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', lineHeight: 1.6, marginBottom: '3vw', maxWidth: '80%', margin: '0 auto 3vw' }}>
          The Intelligence Layer pulls from every tool overnight — so your morning starts with clarity, not chaos.
        </div>
      </div>

      <div style={{
        zIndex: 10, background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px', padding: '2vw 3vw', maxWidth: '70vw', width: '100%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw', marginBottom: '1.5vw' }}>
          <div style={{ width: '0.8vw', height: '0.8vw', borderRadius: '50%', background: '#c084fc' }} />
          <span style={{ color: '#c084fc', fontSize: '1.6vw', fontWeight: 600 }}>Your morning brief</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.4vw', marginLeft: 'auto' }}>Auto-generated</span>
        </div>
        {[
          { label: '3 follow-ups due', source: 'HubSpot + Gmail', color: '#34D399' },
          { label: '1 escalation needs reply', source: 'Zendesk', color: '#f59e0b' },
          { label: 'Standup prep done', source: 'Jira + Slack', color: '#60a5fa' },
          { label: 'QBR deck auto-updated', source: 'Docs + CRM', color: '#c084fc' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.8vw 0',
            borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
              <div style={{ color: item.color, fontSize: '1.6vw', fontWeight: 600 }}>
                {item.label}
              </div>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.3vw' }}>{item.source}</span>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', zIndex: 10, display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <div style={{ background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600 }}>Try It Free →</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.6vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
