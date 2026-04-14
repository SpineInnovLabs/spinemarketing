import React from 'react';
import { Logo } from './Logo';

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
        <Logo size="4vw" />
        <span style={{ color: 'white', fontSize: '3vw', fontWeight: 600 }}>IntegrateWise</span>
      </div>

      <div style={{ position: 'absolute', top: '12vw', left: '5vw', right: '5vw', zIndex: 10 }}>
        <div style={{ fontWeight: 800, color: 'white', fontSize: '4.8vw', lineHeight: 1.12, marginBottom: '1.5vw' }}>
          AI should <span style={{ color: '#34D399' }}>recommend</span>.<br/>
          Humans should <span style={{ color: '#34D399' }}>decide</span>.
        </div>

        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.8vw', lineHeight: 1.5, maxWidth: '85%' }}>
          Human-in-the-loop governance isn't a feature — it's architectural law.
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '4vw', left: '5vw', right: '5vw', zIndex: 10
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px', padding: '2.5vw'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw', marginBottom: '2vw' }}>
            <div style={{
              width: '4vw', height: '4vw', borderRadius: '50%', background: 'rgba(27,167,132,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <span style={{ fontSize: '2vw' }}>🧠</span>
            </div>
            <div>
              <div style={{ color: 'white', fontSize: '1.6vw', fontWeight: 700, marginBottom: '0.3vw' }}>Intelligence Layer</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4vw', lineHeight: 1.4 }}>
                "3 signals on Acme Corp: ticket escalation, 40% usage decline, renewal in 28 days."
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '0 0 1.5vw 0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw', marginBottom: '1vw' }}>
            <div style={{
              background: 'rgba(27,167,132,0.15)', border: '1px solid rgba(27,167,132,0.3)',
              borderRadius: '6px', padding: '0.4vw 1vw'
            }}>
              <span style={{ color: '#34D399', fontSize: '1.2vw', fontWeight: 600 }}>Recommended Action</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2vw' }}>Confidence: 87%</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.4vw', lineHeight: 1.4, marginBottom: '1.5vw' }}>
            Schedule executive check-in. Draft prepared with risk summary and expansion opportunity.
          </div>

          <div style={{ display: 'flex', gap: '1.2vw' }}>
            <div style={{ background: '#1BA784', borderRadius: '6px', padding: '0.8vw 2vw' }}>
              <span style={{ color: 'white', fontSize: '1.5vw', fontWeight: 600 }}>Approve & Send</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '0.8vw 2vw' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.5vw', fontWeight: 500 }}>Edit Draft</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '0.8vw 2vw' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.5vw', fontWeight: 500 }}>Dismiss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
