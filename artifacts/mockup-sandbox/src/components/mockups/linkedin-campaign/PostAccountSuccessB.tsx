import React from 'react';
import { Logo } from './Logo';

export function PostAccountSuccessB() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(245,158,11,0.06) 0%, transparent 55%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <Logo size="4vw" />
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '4vw', right: '4vw', zIndex: 10 }}>
        <div style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '6px', padding: '0.5vw 1.5vw' }}>
          <span style={{ color: '#f59e0b', fontSize: '1.4vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Account Success</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw', marginTop: '-4vw' }}>
        <div style={{ fontWeight: 800, color: '#f59e0b', fontSize: '3.5vw', lineHeight: 1.3, marginBottom: '2vw' }}>
          87% confidence
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.12, marginBottom: '1vw' }}>
          This account
        </div>
        <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '6vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          is about to churn.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', lineHeight: 1.6, marginBottom: '3vw', maxWidth: '80%', margin: '0 auto 3vw' }}>
          The Intelligence Layer correlated 4 signals across your stack that humans would miss.
        </div>
      </div>

      <div style={{
        zIndex: 10, background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px', padding: '2.5vw 3.5vw', maxWidth: '70vw', width: '100%'
      }}>
        {[
          { signal: 'Support ticket escalated', source: 'Zendesk', time: '3 days ago', dot: '#ef4444' },
          { signal: 'Product usage ↓ 40%', source: 'Analytics', time: '2 weeks', dot: '#f59e0b' },
          { signal: 'Champion went silent', source: 'Slack', time: '10 days', dot: '#f59e0b' },
          { signal: 'Competitor eval started', source: 'HubSpot', time: 'Yesterday', dot: '#ef4444' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1vw 0',
            borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
              <div style={{ width: '1vw', height: '1vw', borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.8vw', fontWeight: 500 }}>{item.signal}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.4vw' }}>{item.source}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2vw' }}>{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', zIndex: 10, display: 'flex', alignItems: 'center', gap: '2vw' }}>
        <div style={{ background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600 }}>See How It Works →</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.6vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
