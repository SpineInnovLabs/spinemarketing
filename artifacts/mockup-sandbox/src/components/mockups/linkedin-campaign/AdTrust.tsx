import React from 'react';
import { Logo } from './Logo';


export function AdTrust() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <img src="/__mockup/images/campaign-trust.png" alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '75%',
        background: 'linear-gradient(to top, rgba(8,7,14,0.98) 0%, rgba(8,7,14,0.9) 40%, rgba(8,7,14,0.4) 70%, transparent 100%)'
      }} />

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '3vw 3.5vw', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}><Logo size="3vw" /><span style={{ color: 'white', fontSize: '2.4vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>IntegrateWise</span></div>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.6vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>Sponsored</span>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '4vw', right: '4vw', zIndex: 2
      }}>
        <div style={{ display: 'inline-block', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', padding: '0.6vw 1.5vw', marginBottom: '2vw' }}>
          <span style={{ color: '#60a5fa', fontSize: '1.5vw', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Governance Built In</span>
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, color: 'white', fontSize: '5vw', lineHeight: 1.1, marginBottom: '2vw' }}>
          No AI writes<br/>
          without <span style={{ color: '#34D399' }}>human<br/>approval</span>.
        </div>

        <div style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '2vw', lineHeight: 1.5, marginBottom: '2.5vw', maxWidth: '90%' }}>
          Not a toggle. Not a setting. It's architectural law. Every action comes with evidence, confidence scores, and impact previews.
        </div>

        <div style={{ display: 'flex', gap: '2vw', marginBottom: '3vw' }}>
          {[
            { icon: '🔒', text: 'Evidence-backed' },
            { icon: '📊', text: 'Confidence scored' },
            { icon: '👁️', text: 'Impact preview' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.6vw' }}>
              <span style={{ fontSize: '2vw' }}>{item.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.5vw', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <div style={{ display: 'inline-flex', background: '#1BA784', borderRadius: '8px', padding: '1.2vw 3vw' }}>
            <span style={{ color: 'white', fontSize: '2vw', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Learn More →</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vw', fontFamily: 'Inter, sans-serif' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
