import React from 'react';

export function PostBusinessOps() {
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

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 6vw' }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.12 }}>
          12 tools.
        </div>
        <div style={{ fontWeight: 800, color: '#60a5fa', fontSize: '6vw', lineHeight: 1.12 }}>
          1 Workbench.
        </div>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '6vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          Zero context lost.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '80%', margin: '0 auto 4vw' }}>
          Stop toggling between CRM, support, billing, and chat. The Workbench puts every tool on one screen — so your ops team moves faster with full context.
        </div>
      </div>

      <div style={{
        display: 'flex', gap: '1.5vw', zIndex: 10, marginBottom: '2vw',
        background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px', padding: '2vw 3vw', alignItems: 'center'
      }}>
        {[
          { domain: 'hubspot.com', name: 'CRM' },
          { domain: 'zendesk.com', name: 'Support' },
          { domain: 'slack.com', name: 'Comms' },
          { domain: 'atlassian.com', name: 'Tasks' },
          { domain: 'salesforce.com', name: 'Revenue' },
        ].map((t, i) => (
          <React.Fragment key={t.name}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6vw' }}>
              <img src={`/__mockup/images/logos/${t.domain}`} alt={t.name}
                style={{ width: '3.5vw', height: '3.5vw', borderRadius: '6px', objectFit: 'contain' }} />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vw', fontWeight: 500 }}>{t.name}</span>
            </div>
            {i < 4 && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '2.5vw' }}>+</span>}
          </React.Fragment>
        ))}
        <span style={{ color: '#60a5fa', fontSize: '2.5vw', marginLeft: '0.5vw' }}>=</span>
        <div style={{
          background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)',
          borderRadius: '8px', padding: '1vw 2vw', marginLeft: '0.5vw'
        }}>
          <span style={{ color: '#60a5fa', fontSize: '2vw', fontWeight: 700 }}>Workbench</span>
        </div>
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
