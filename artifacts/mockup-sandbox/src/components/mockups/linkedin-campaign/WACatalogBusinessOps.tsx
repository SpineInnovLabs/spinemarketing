import React from 'react';
import { Logo } from './Logo';

export function WACatalogBusinessOps() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column'
    }}>
      <div style={{
        height: '40%', background: 'linear-gradient(135deg, rgba(96,165,250,0.12) 0%, rgba(27,167,132,0.06) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
      }}>
        <Logo size="18vw" />
        <div style={{ position: 'absolute', bottom: '3vw', right: '4vw', background: '#3b82f6', borderRadius: '6px', padding: '1vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2.5vw', fontWeight: 600 }}>Business Ops</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: '4vw 5vw', display: 'flex', flexDirection: 'column', gap: '3vw' }}>
        <div>
          <div style={{ color: '#60a5fa', fontSize: '2vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1vw' }}>IntegrateWise</div>
          <div style={{ color: 'white', fontSize: '5vw', fontWeight: 800, lineHeight: 1.15, marginBottom: '2vw' }}>
            The Workbench:<br/>Unified Operations
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vw', lineHeight: 1.5 }}>
            12+ tools on one screen. CRM, support, comms, tasks, billing — full context on every interaction.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2vw', flexWrap: 'wrap' }}>
          {[
            { domain: 'hubspot.com', name: 'CRM' },
            { domain: 'zendesk.com', name: 'Support' },
            { domain: 'slack.com', name: 'Comms' },
            { domain: 'atlassian.com', name: 'Tasks' },
            { domain: 'salesforce.com', name: 'Revenue' },
          ].map(t => (
            <div key={t.name} style={{
              display: 'flex', alignItems: 'center', gap: '1vw',
              background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '6px', padding: '1.2vw 2vw'
            }}>
              <img src={`/__mockup/images/logos/${t.domain}`} alt={t.name}
                style={{ width: '3vw', height: '3vw', borderRadius: '4px', objectFit: 'contain' }} />
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', fontWeight: 500 }}>{t.name}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ background: '#1BA784', borderRadius: '8px', padding: '2vw 5vw' }}>
            <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>See Workbench</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vw' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
