import React from 'react';
import { Logo } from './Logo';

export function WAStatusPain() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 35%, rgba(239,68,68,0.06) 0%, transparent 60%)'
      }} />

      <div style={{ position: 'absolute', top: '5vw', left: '6vw', display: 'flex', alignItems: 'center', gap: '2vw', zIndex: 10 }}>
        <Logo size="6vw" />
        <span style={{ color: 'white', fontSize: '4vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 8vw' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '4vw', fontWeight: 500, marginBottom: '2vw' }}>
          Stop being the
        </div>
        <div style={{ fontWeight: 800, color: '#ef4444', fontSize: '10vw', lineHeight: 1.1, marginBottom: '2vw' }}>
          human API
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '4vw', fontWeight: 500, marginBottom: '6vw' }}>
          between your tools.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw', alignItems: 'center' }}>
          {['hubspot.com', 'slack.com', 'atlassian.com', 'zendesk.com', 'salesforce.com'].map(d => (
            <div key={d} style={{
              display: 'flex', alignItems: 'center', gap: '2vw',
              background: '#121118', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px', padding: '1.5vw 4vw', width: '60vw', justifyContent: 'center'
            }}>
              <img src={`/__mockup/images/logos/${d}`} alt="" style={{ width: '4vw', height: '4vw', borderRadius: '4px', objectFit: 'contain' }} />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '2.5vw', fontWeight: 500 }}>{d.split('.')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', textAlign: 'center', zIndex: 10 }}>
        <div style={{ background: '#1BA784', borderRadius: '10px', padding: '2vw 8vw', marginBottom: '2vw' }}>
          <span style={{ color: 'white', fontSize: '3.5vw', fontWeight: 600 }}>See the Fix</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2.5vw' }}>integratewise.ai</span>
      </div>
    </div>
  );
}
