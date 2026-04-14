import React from 'react';

export function PostCategory() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(27,167,132,0.05) 0%, transparent 50%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '12vw', left: '5vw', right: '5vw', zIndex: 10 }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '4.2vw', lineHeight: 1.12, marginBottom: '1.5vw' }}>
          We're not replacing<br/>
          your tools. We're<br/>
          <span style={{ color: '#34D399' }}>connecting your thinking</span>.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.7vw', lineHeight: 1.5, maxWidth: '85%' }}>
          The category-defining knowledge workspace that turns fragmented tools into one intelligent operating surface.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '4vw', left: '5vw', right: '5vw', zIndex: 10
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px', padding: '2vw 2.5vw'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5vw' }}>
            {[
              { label: 'CRM', strike: true },
              { label: 'iPaaS', strike: true },
              { label: 'Dashboard', strike: true },
              { label: 'Knowledge Workspace', strike: false, highlight: true },
            ].map(item => (
              <div key={item.label} style={{
                padding: '0.7vw 1.5vw', borderRadius: '6px',
                background: item.highlight ? 'rgba(27,167,132,0.12)' : 'rgba(255,255,255,0.03)',
                border: item.highlight ? '1px solid rgba(27,167,132,0.3)' : '1px solid rgba(255,255,255,0.06)'
              }}>
                <span style={{
                  color: item.highlight ? '#34D399' : 'rgba(255,255,255,0.4)',
                  fontSize: '1.5vw', fontWeight: item.highlight ? 700 : 500,
                  textDecoration: item.strike ? 'line-through' : 'none'
                }}>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2.5vw', paddingTop: '1.2vw', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { icon: '🔗', label: 'Spine', desc: 'Canonical data layer' },
              { icon: '🖥️', label: 'Workbench', desc: '12 domain views' },
              { icon: '🧠', label: 'Intelligence Layer', desc: 'Governed AI overlay' },
            ].map(item => (
              <div key={item.label} style={{ flex: 1 }}>
                <div style={{ fontSize: '2vw', marginBottom: '0.3vw' }}>{item.icon}</div>
                <div style={{ color: '#34D399', fontSize: '1.5vw', fontWeight: 700, marginBottom: '0.2vw' }}>{item.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1vw' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5vw' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5vw' }}>integratewise.ai &nbsp;|&nbsp; Book a Demo</span>
        </div>
      </div>
    </div>
  );
}
