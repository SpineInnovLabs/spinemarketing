import React from 'react';

export function PostTagline() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 40%, rgba(27,167,132,0.08) 0%, transparent 60%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.12 }}>
          Every customer.
        </div>
        <div style={{ fontWeight: 800, color: '#34D399', fontSize: '8vw', lineHeight: 1.12 }}>
          Every tool.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '8vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          One screen.
        </div>

        <div style={{
          display: 'inline-block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px', padding: '1.5vw 3vw'
        }}>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vw', fontWeight: 500 }}>
            The Knowledge Workspace powered by the Adaptive Spine
          </span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', display: 'flex', gap: '2vw', zIndex: 10 }}>
        {[
          { domain: 'hubspot.com', name: 'HubSpot' },
          { domain: 'slack.com', name: 'Slack' },
          { domain: 'atlassian.com', name: 'Jira' },
          { domain: 'zendesk.com', name: 'Zendesk' },
          { domain: 'salesforce.com', name: 'Salesforce' },
        ].map(t => (
          <div key={t.name} style={{
            display: 'flex', alignItems: 'center', gap: '0.8vw',
            background: '#121118', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '8px', padding: '1vw 2vw'
          }}>
            <img src={`/__mockup/images/logos/${t.domain}`} alt={t.name}
              style={{ width: '2.5vw', height: '2.5vw', borderRadius: '4px', objectFit: 'contain' }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.6vw', fontWeight: 500 }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
