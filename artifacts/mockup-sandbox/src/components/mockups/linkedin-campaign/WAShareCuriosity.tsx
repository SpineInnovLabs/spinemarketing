import React from 'react';

export function WAShareCuriosity() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 40%, rgba(27,167,132,0.06) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '5vw', display: 'flex', alignItems: 'center', gap: '2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '5vw', height: '5vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3.5vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw', marginTop: '-3vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.15, marginBottom: '1vw' }}>
          The hidden signal
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.15, marginBottom: '1vw' }}>
          that saved an
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '5.5vw', lineHeight: 1.15, marginBottom: '3vw' }}>
          $8M account.
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '10px', padding: '3vw', textAlign: 'left'
        }}>
          {[
            { dot: '#ef4444', text: 'Ticket escalation', strike: true },
            { dot: '#f59e0b', text: 'Usage drop 40%', strike: true },
            { dot: '#f59e0b', text: 'Quiet in Slack', strike: true },
            { dot: '#34D399', text: 'Churn risk — HIGH (87%)', strike: false, highlight: true },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2vw', marginBottom: i < 3 ? '2vw' : 0 }}>
              <div style={{ width: '1.5vw', height: '1.5vw', borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
              <span style={{
                color: item.highlight ? '#34D399' : 'rgba(255,255,255,0.4)',
                fontSize: '2.5vw', fontWeight: item.highlight ? 700 : 500,
                textDecoration: item.strike ? 'line-through' : 'none'
              }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', textAlign: 'center', zIndex: 10 }}>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2.5vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
