import React from 'react';

export function PostA() {
  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(46,229,168,0.08) 0%, transparent 60%), #0B0F17' }} />

      <div style={{ position: 'absolute', top: '5vw', left: '5vw', display: 'flex', alignItems: 'center', gap: '1vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ fontFamily: 'Sora, sans-serif', color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', zIndex: 10 }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '7.5vw', lineHeight: 1.15 }}>Every customer.</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#2EE5A8', fontSize: '7.5vw', lineHeight: 1.15 }}>Every tool.</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: 'white', fontSize: '7.5vw', lineHeight: 1.15 }}>One screen.</div>
      </div>

      <div style={{ position: 'absolute', bottom: '15vw', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '2vw', zIndex: 10 }}>
        {[
          { domain: 'hubspot.com', name: 'HubSpot' },
          { domain: 'slack.com', name: 'Slack' },
          { domain: 'atlassian.com', name: 'Jira' },
          { domain: 'zendesk.com', name: 'Zendesk' },
          { domain: 'salesforce.com', name: 'Salesforce' },
        ].map((t) => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '0.8vw', background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.2vw 2vw' }}>
            <img src={`https://logo.clearbit.com/${t.domain}`} alt={t.name}
              style={{ width: '2.5vw', height: '2.5vw', borderRadius: '4px', objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '1.8vw', fontWeight: 500 }}>{t.name}</span>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: '5vw', left: 0, right: 0, textAlign: 'center', fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '2.5vw', zIndex: 10 }}>
        integratewise.ai &nbsp;|&nbsp; Book a Demo
      </div>
    </div>
  );
}
