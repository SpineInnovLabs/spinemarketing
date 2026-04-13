import React from 'react';

export function PostC() {
  const tools = [
    { name: 'Salesforce', domain: 'salesforce.com', color: '#00A1E0', top: '20%', left: '20%' },
    { name: 'Slack', domain: 'slack.com', color: '#E01E5A', top: '15%', left: '80%' },
    { name: 'Jira', domain: 'atlassian.com', color: '#2684FF', top: '50%', left: '85%' },
    { name: 'Stripe', domain: 'stripe.com', color: '#635BFF', top: '85%', left: '70%' },
    { name: 'HubSpot', domain: 'hubspot.com', color: '#FF7A59', top: '75%', left: '25%' },
    { name: 'Zendesk', domain: 'zendesk.com', color: '#03363D', top: '45%', left: '15%' },
  ];

  return (
    <div style={{ backgroundColor: '#0B0F17', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', fontFamily: 'Inter, sans-serif', display: 'flex' }}>
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');" }} />
      
      <div style={{ width: '55%', padding: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.6)', fontSize: '3vw' }}>You check</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, color: '#EB4379', fontSize: '9vw', lineHeight: 1.0, marginTop: '1vw' }}>8 tools</div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: 'white', fontSize: '5vw', marginTop: '1vw' }}>before one customer call.</div>
        <div style={{ height: '2vw' }}></div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#2EE5A8', fontSize: '3vw' }}>We built one screen instead.</div>
      </div>

      <div style={{ width: '45%', position: 'absolute', right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ position: 'relative', width: '8vw', height: '8vw', zIndex: 20 }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '12vw', height: '12vw', background: 'radial-gradient(circle, rgba(46,229,168,0.4) 0%, transparent 70%)', zIndex: -1 }}></div>
          <svg viewBox="0 0 32 32" fill="none" style={{ width: '8vw', height: '8vw' }}>
            <circle cx="16" cy="16" r="16" fill="#2EE5A8"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
        </div>

        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} pointerEvents="none">
          {tools.map((t) => (
            <line key={t.name} x1="50%" y1="50%" x2={t.left} y2={t.top} stroke="rgba(46,229,168,0.2)" strokeWidth="1" />
          ))}
        </svg>

        {tools.map((t) => (
          <div key={t.name} style={{
            position: 'absolute',
            top: t.top,
            left: t.left,
            transform: 'translate(-50%, -50%)',
            width: '6vw',
            height: '6vw',
            background: '#111827',
            border: `2px solid ${t.color}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            overflow: 'hidden',
          }}>
            <img src={`/__mockup/images/logos/${t.domain}`} alt={t.name}
              style={{ width: '3.5vw', height: '3.5vw', objectFit: 'contain', borderRadius: '4px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
