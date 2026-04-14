import React from 'react';
import { Logo } from './Logo';

export function WACatalogPersonalOps() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column'
    }}>
      <div style={{
        height: '40%', background: 'linear-gradient(135deg, rgba(192,132,252,0.12) 0%, rgba(27,167,132,0.06) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
      }}>
        <Logo size="18vw" />
        <div style={{ position: 'absolute', bottom: '3vw', right: '4vw', background: '#9333ea', borderRadius: '6px', padding: '1vw 3vw' }}>
          <span style={{ color: 'white', fontSize: '2.5vw', fontWeight: 600 }}>Personal Ops</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: '4vw 5vw', display: 'flex', flexDirection: 'column', gap: '3vw' }}>
        <div>
          <div style={{ color: '#c084fc', fontSize: '2vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1vw' }}>IntegrateWise</div>
          <div style={{ color: 'white', fontSize: '5vw', fontWeight: 800, lineHeight: 1.15, marginBottom: '2vw' }}>
            Personal Command<br/>Center
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2.5vw', lineHeight: 1.5 }}>
            Auto-organized morning briefs, tasks, follow-ups, and meeting prep — pulled from every tool overnight.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2vw', flexWrap: 'wrap' }}>
          {[
            { label: 'Morning Brief', color: '#c084fc' },
            { label: 'Auto Follow-ups', color: '#34D399' },
            { label: 'Meeting Prep', color: '#60a5fa' },
            { label: 'Task Priority', color: '#f59e0b' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', padding: '1.2vw 2.5vw'
            }}>
              <span style={{ color: item.color, fontSize: '2.2vw', fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ background: '#1BA784', borderRadius: '8px', padding: '2vw 5vw' }}>
            <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>Try It Free</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '2vw' }}>integratewise.ai</span>
        </div>
      </div>
    </div>
  );
}
