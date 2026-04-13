import React from 'react';

export function Outcome() {
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
      {/* Top nav */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '9vh',
        alignItems: 'center',
        padding: '0 3vw',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(27,167,132,0.15)'
      }}>
        {/* Left: SVG logo mark + "IntegrateWise" */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
          <svg width="3vw" height="3vw" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#1ba784"/>
            <path d="M8 16 Q16 8 24 16 Q16 24 8 16Z" fill="white" opacity="0.9"/>
          </svg>
          <span style={{ color: 'white', fontSize: '3vw', fontWeight: 700 }}>IntegrateWise</span>
        </div>
        {/* Right: small emerald badge */}
        <div style={{
          color: '#1ba784',
          fontSize: '1.6vw',
          fontWeight: 600,
          border: '1px solid #1ba784',
          padding: '0.4vw 1vw',
          borderRadius: '2vw',
          backgroundColor: 'rgba(27,167,132,0.1)'
        }}>
          AI Workspace
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        
        {/* LEFT PANEL */}
        <div style={{
          width: '50%',
          padding: '4vw 4vw 4vw 5vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0A1228',
          borderRight: '1px solid rgba(27,167,132,0.2)'
        }}>
          <div style={{
            textTransform: 'uppercase',
            color: '#1ba784',
            fontSize: '1.6vw',
            letterSpacing: '0.12em',
            fontWeight: 700,
            marginBottom: '2.5vw'
          }}>
            Adaptive Spine Architecture
          </div>
          
          <h1 style={{
            fontSize: '7.5vw',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.05,
            letterSpacing: '-0.05em',
            margin: 0
          }}>
            Your apps,<br />finally<br />united.
          </h1>
          
          <div style={{
            marginTop: '3vw',
            width: '6vw',
            height: '0.3vw',
            background: '#1ba784'
          }} />
          
          <p style={{
            marginTop: '3vw',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '2.2vw',
            fontWeight: 500,
            lineHeight: 1.5,
            margin: 0
          }}>
            The Adaptive Spine connects every tool. Your AI reads everything and tells you what to do next.
          </p>
          
          <div style={{ marginTop: '3vw', display: 'flex' }}>
            <button style={{
              background: '#1ba784',
              color: 'white',
              borderRadius: '0.8vw',
              padding: '1.5vw 3.5vw',
              fontSize: '2.4vw',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1vw'
            }}>
              Book a demo <span style={{ fontSize: '1.1em' }}>→</span>
            </button>
          </div>
          
          <div style={{
            marginTop: '2vw',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '1.5vw'
          }}>
            70+ connectors · SOC 2 certified · No code
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{
          width: '50%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '20%',
            height: '100%',
            background: 'linear-gradient(to right, #0A1228, transparent)',
            zIndex: 1
          }} />
          <img 
            src="/__mockup/images/ref-homepage-hero.png" 
            alt="Adaptive Spine Architecture"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'right center',
              display: 'block'
            }} 
          />
        </div>
        
      </div>
    </div>
  );
}
