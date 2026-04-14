import React from 'react';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
    <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#1ba784"/>
      <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
    </svg>
    <span style={{ color: 'white', fontSize: '2.4vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>IntegrateWise</span>
  </div>
);

export function AdCuriosity() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img src="/__mockup/images/campaign-curiosity.png" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '75%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.98) 0%, rgba(8,7,14,0.92) 40%, rgba(8,7,14,0.4) 70%, transparent 100%)'
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '3vw 3.5vw', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.6vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Sponsored</span>
      </div>

      <div style={{
        position: 'absolute', top: '10vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '4.5vw', lineHeight: 1.1, marginBottom: '1.5vw' }}>
          The hidden signal<br/>
          that saved an<br/>
          <span style={{ color: '#34D399' }}>$8M account</span>.
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '1.8vw', lineHeight: 1.5, maxWidth: '90%' }}>
          Buried across Salesforce, Zendesk, and Slack — a churn signal no single tool could see.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '4vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px', padding: '1.8vw 2.5vw', marginBottom: '2vw'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '1vw' }}>
            <div style={{ width: '0.7vw', height: '0.7vw', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif', textDecoration: 'line-through' }}>Ticket escalation in Zendesk</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '1vw' }}>
            <div style={{ width: '0.7vw', height: '0.7vw', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif', textDecoration: 'line-through' }}>Usage drop in product analytics</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '1vw' }}>
            <div style={{ width: '0.7vw', height: '0.7vw', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif', textDecoration: 'line-through' }}>Quiet in Slack channel</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
            <div style={{ width: '0.7vw', height: '0.7vw', borderRadius: '50%', background: '#34D399' }} />
            <span style={{ color: '#34D399', fontSize: '1.4vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Churn risk — HIGH (87% confidence)</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{ display: 'inline-flex', background: '#1BA784', borderRadius: '8px', padding: '1vw 2.5vw' }}>
            <span style={{ color: 'white', fontSize: '1.8vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>See How It Works →</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.3vw', fontFamily: 'Inter, sans-serif' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
