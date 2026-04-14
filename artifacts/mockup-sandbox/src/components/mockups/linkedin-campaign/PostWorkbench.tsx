import React from 'react';
import { Logo } from './Logo';

export function PostWorkbench() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.05) 0%, transparent 50%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <Logo size="4vw" />
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '14vw', left: '5vw', right: '5vw', zIndex: 10 }}>
        <div style={{
          display: 'inline-block', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)',
          borderRadius: '6px', padding: '0.5vw 1.5vw', marginBottom: '2.5vw'
        }}>
          <span style={{ color: '#c084fc', fontSize: '1.6vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>The Workbench</span>
        </div>

        <div style={{ fontWeight: 800, color: 'white', fontSize: '5vw', lineHeight: 1.1, marginBottom: '2.5vw' }}>
          12 views.<br/>
          <span style={{ color: '#34D399' }}>One workspace</span>.<br/>
          Zero tab-switching.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '85%' }}>
          Every team gets a schema-filtered view of their world. Same data. Different lens. All on one screen.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '5vw', right: '5vw', zIndex: 10,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5vw'
      }}>
        {[
          { name: 'Account Success', icon: '🎯', color: '#34D399' },
          { name: 'RevOps', icon: '📊', color: '#60a5fa' },
          { name: 'BizOps', icon: '⚙️', color: '#c084fc' },
          { name: 'Support', icon: '🛟', color: '#f59e0b' },
          { name: 'Engineering', icon: '🔧', color: '#ef4444' },
          { name: 'Personal Ops', icon: '👤', color: '#14b8a6' },
        ].map(view => (
          <div key={view.name} style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '2vw', textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.5vw', marginBottom: '1vw' }}>{view.icon}</div>
            <div style={{ color: view.color, fontSize: '1.8vw', fontWeight: 700 }}>{view.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
