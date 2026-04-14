import React from 'react';
import { Logo } from './Logo';

export function PostPersonalOps() {
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
        <Logo size="4vw" />
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '4vw', right: '4vw', zIndex: 10 }}>
        <div style={{ background: 'rgba(192,132,252,0.12)', border: '1px solid rgba(192,132,252,0.3)', borderRadius: '6px', padding: '0.5vw 1.5vw' }}>
          <span style={{ color: '#c084fc', fontSize: '1.4vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Personal Ops</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.12 }}>
          Your day.
        </div>
        <div style={{ fontWeight: 800, color: '#c084fc', fontSize: '6vw', lineHeight: 1.12 }}>
          Your tools.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          One command center.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '80%', margin: '0 auto 4vw' }}>
          Emails, tasks, meetings, docs — the Intelligence Layer organises your day automatically, so you focus on work that matters.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2vw', zIndex: 10, flexWrap: 'wrap', justifyContent: 'center', maxWidth: '75vw' }}>
        {[
          { time: '9:00', label: 'Prep for standup', source: 'Jira + Slack', color: '#c084fc' },
          { time: '10:30', label: 'Follow up: Acme renewal', source: 'HubSpot', color: '#34D399' },
          { time: '11:00', label: 'Review escalation', source: 'Zendesk', color: '#f59e0b' },
          { time: '14:00', label: 'QBR deck ready', source: 'Docs + CRM', color: '#60a5fa' },
        ].map(item => (
          <div key={item.time} style={{
            background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '1.5vw 2vw', minWidth: '16vw', textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', marginBottom: '0.5vw' }}>
              <span style={{ color: item.color, fontSize: '1.6vw', fontWeight: 700 }}>{item.time}</span>
            </div>
            <div style={{ color: 'white', fontSize: '1.6vw', fontWeight: 600, marginBottom: '0.3vw' }}>{item.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.2vw', fontWeight: 500 }}>{item.source}</div>
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
