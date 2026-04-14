import React from 'react';

export function PostGovernance() {
  return (
    <div style={{
      width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
      background: '#08070E', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 50%)'
      }} />

      <div style={{ position: 'absolute', top: '4vw', left: '4vw', display: 'flex', alignItems: 'center', gap: '1.2vw', zIndex: 10 }}>
        <svg viewBox="0 0 32 32" fill="none" style={{ width: '4vw', height: '4vw' }}>
          <circle cx="16" cy="16" r="16" fill="#34D399"/>
          <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
        </svg>
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '14vw', left: '5vw', right: '5vw', zIndex: 10 }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '5.5vw', lineHeight: 1.12, marginBottom: '3vw' }}>
          AI should <span style={{ color: '#34D399' }}>recommend</span>.<br/>
          Humans should <span style={{ color: '#34D399' }}>decide</span>.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '2.2vw', lineHeight: 1.6, marginBottom: '4vw', maxWidth: '85%' }}>
          In IntegrateWise, human-in-the-loop governance isn't a feature — it's architectural law. No AI action happens without explicit approval.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '5vw', left: '5vw', right: '5vw', zIndex: 10
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px', padding: '3vw', marginBottom: '2vw'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2vw', marginBottom: '2.5vw' }}>
            <div style={{
              width: '5vw', height: '5vw', borderRadius: '50%', background: 'rgba(27,167,132,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <span style={{ fontSize: '2.5vw' }}>🧠</span>
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '2vw', fontWeight: 700, marginBottom: '0.5vw' }}>Intelligence Layer</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.7vw', lineHeight: 1.5 }}>
                "3 signals detected on Acme Corp: support ticket escalation, 40% usage decline, and renewal in 28 days."
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '0 0 2vw 0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', marginBottom: '1.5vw' }}>
            <div style={{
              background: 'rgba(27,167,132,0.15)', border: '1px solid rgba(27,167,132,0.3)',
              borderRadius: '8px', padding: '0.6vw 1.2vw'
            }}>
              <span style={{ color: '#34D399', fontSize: '1.4vw', fontWeight: 600 }}>Recommended Action</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vw' }}>Confidence: 87%</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.7vw', lineHeight: 1.5, marginBottom: '2vw' }}>
            Schedule executive check-in with stakeholder. Draft prepared with risk summary and expansion opportunity.
          </div>

          <div style={{ display: 'flex', gap: '1.5vw' }}>
            <div style={{ background: '#1BA784', borderRadius: '8px', padding: '1vw 2.5vw' }}>
              <span style={{ color: 'white', fontSize: '1.8vw', fontWeight: 600 }}>✓ Approve & Send</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1vw 2.5vw' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.8vw', fontWeight: 500 }}>Edit Draft</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1vw 2.5vw' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.8vw', fontWeight: 500 }}>Dismiss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
