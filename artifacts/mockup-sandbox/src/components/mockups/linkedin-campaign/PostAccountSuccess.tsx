import React from 'react';
import { Logo } from './Logo';

export function PostAccountSuccess() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 35%, rgba(27,167,132,0.08) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <Logo size="4vw" />
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '4vw', right: '4vw', zIndex: 10 }}>
        <div style={{ background: 'rgba(27,167,132,0.12)', border: '1px solid rgba(27,167,132,0.3)', borderRadius: '6px', padding: '0.5vw 1.5vw' }}>
          <span style={{ color: '#34D399', fontSize: '1.4vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Account Success</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6.5vw', lineHeight: 1.12 }}>
          See churn
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '6.5vw', lineHeight: 1.12 }}>
          before it hits.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6.5vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          Save the account.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '80%', margin: '0 auto 4vw' }}>
          The Intelligence Layer fuses CRM, support tickets, product usage, and comms into a single health score — surfacing risk signals weeks before renewal.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2vw', zIndex: 10, marginBottom: '2vw' }}>
        {[
          { icon: '🎯', label: 'Health Score', value: '72 → at risk', color: '#f59e0b' },
          { icon: '⚡', label: 'Signal', value: 'Usage ↓ 40%', color: '#ef4444' },
          { icon: '✅', label: 'Action', value: 'QBR triggered', color: '#34D399' },
        ].map(item => (
          <div key={item.label} style={{
            background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '2vw 2.5vw', textAlign: 'center', minWidth: '18vw'
          }}>
            <div style={{ fontSize: '3vw', marginBottom: '0.8vw' }}>{item.icon}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vw', fontWeight: 500, marginBottom: '0.5vw' }}>{item.label}</div>
            <div style={{ color: item.color, fontSize: '1.8vw', fontWeight: 700 }}>{item.value}</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', zIndex: 10, display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <div style={{ background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600 }}>Book a Demo →</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.6vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
