import React from 'react';

export function PostSpine() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 60%, rgba(27,167,132,0.06) 0%, transparent 50%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '15vw', left: '5vw', right: '5vw', zIndex: 10 }}>
        <div style={{
          display: 'inline-block', background: 'rgba(27,167,132,0.1)', border: '1px solid rgba(27,167,132,0.25)',
          borderRadius: '6px', padding: '0.5vw 1.5vw', marginBottom: '2.5vw'
        }}>
          <span style={{ color: '#34D399', fontSize: '1.6vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Architecture</span>
        </div>

        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.1, marginBottom: '3vw' }}>
          The Adaptive<br/><span style={{ color: '#34D399' }}>Spine</span>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '2.2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '80%' }}>
          Not a pipeline. Not an ETL job. A living nervous system that normalizes data from every connected tool into one canonical source of truth.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '5vw', right: '5vw', zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '1.5vw'
      }}>
        {[
          { step: '01', label: 'Load', desc: 'Connect your tools — data flows in automatically', color: '#34D399' },
          { step: '02', label: 'Store', desc: 'Normalized, deduplicated, schema-resolved', color: '#60a5fa' },
          { step: '03', label: 'Think', desc: 'Intelligence Layer detects signals and patterns', color: '#c084fc' },
          { step: '04', label: 'Act', desc: 'Human approves — AI writes back to source systems', color: '#f59e0b' },
        ].map(item => (
          <div key={item.step} style={{
            display: 'flex', alignItems: 'center', gap: '2vw',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '1.5vw 2.5vw'
          }}>
            <span style={{ color: item.color, fontSize: '2.5vw', fontWeight: 800, fontFamily: 'Inter, sans-serif', minWidth: '4vw' }}>{item.step}</span>
            <div>
              <div style={{ color: 'white', fontSize: '2vw', fontWeight: 700 }}>{item.label}</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.5vw', fontWeight: 400 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
