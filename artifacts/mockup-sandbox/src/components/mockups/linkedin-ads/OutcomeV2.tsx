import React from 'react';

export function OutcomeV2() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: '#0A1228',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        height: '8vh',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3.5vw',
        borderBottom: '1px solid rgba(27,167,132,0.12)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
          <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1ba784"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '2.8vw', letterSpacing: '-0.02em' }}>
            IntegrateWise
          </span>
        </div>
        <div style={{
          color: '#1ba784',
          fontSize: '1.4vw',
          fontWeight: 600,
          border: '1px solid rgba(27,167,132,0.3)',
          padding: '0.4vw 1.2vw',
          borderRadius: '2vw',
          background: 'rgba(27,167,132,0.08)',
        }}>
          AI Workspace
        </div>
      </div>

      <div style={{
        flex: '1 1 52%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/__mockup/images/hero-outcome.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, #0A1228)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '0.2vw',
          background: 'linear-gradient(to right, transparent, #1ba784, transparent)',
        }} />
      </div>

      <div style={{
        flex: '0 0 40%',
        padding: '3vw 5vw 3.5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3vw' }}>
          <div style={{ width: '30%', paddingTop: '0.8vw' }}>
            <div style={{
              textTransform: 'uppercase',
              color: '#1ba784',
              fontSize: '1.4vw',
              letterSpacing: '0.12em',
              fontWeight: 700,
            }}>
              Adaptive Spine Architecture
            </div>
          </div>
          <div style={{ width: '70%' }}>
            <div style={{
              fontSize: '5.5vw',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.0,
              letterSpacing: '-0.045em',
            }}>
              Your apps,<br />finally united.
            </div>
          </div>
        </div>

        <div style={{
          fontSize: '2vw',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 500,
          lineHeight: 1.45,
          marginTop: '2vw',
        }}>
          The Adaptive Spine connects every tool. Your AI reads everything and tells you what to do next.
        </div>

        <div style={{
          marginTop: '2vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{
            background: '#1ba784',
            color: 'white',
            borderRadius: '0.7vw',
            padding: '1.2vw 3.5vw',
            fontSize: '2.2vw',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8vw',
            boxShadow: '0 0 30px rgba(27,167,132,0.3)',
          }}>
            Book a demo <span style={{ fontSize: '1.1em' }}>→</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.4vw', fontWeight: 500, textAlign: 'right' }}>
            70+ connectors · SOC 2 · No code
          </span>
        </div>
      </div>
    </div>
  );
}
