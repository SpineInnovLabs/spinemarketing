import './_group.css';

export function AdaptiveSpine() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#05070A',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-10vh',
        left: '-10vw',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 167, 132, 0.05) 0%, transparent 70%)',
      }} />

      <div style={{
        flex: 1,
        padding: '6vh 0 6vh 6vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '45vw',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8vh',
          padding: '0.6vh 1.8vh',
          borderRadius: '40px',
          border: '1px solid rgba(27, 167, 132, 0.2)',
          background: 'rgba(27, 167, 132, 0.06)',
          marginBottom: '3vh',
          alignSelf: 'flex-start',
        }}>
          <span style={{ color: '#34d399', fontSize: '1.4vh', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Platform
          </span>
        </div>

        <h2 style={{
          color: '#ffffff',
          fontSize: '4.2vh',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.15,
          margin: '0 0 2vh 0',
        }}>
          The Adaptive <span style={{ color: '#34d399' }}>Spine</span>
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '1.8vh',
          lineHeight: 1.6,
          margin: '0 0 4vh 0',
        }}>
          Where your data becomes canonical, resilient, and queryable. A vendor-neutral data layer that normalizes everything into a single truth.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
            <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.6vh' }}>8-stage normalization pipeline</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
            <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.6vh' }}>Schema drift immunity</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
            <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.6vh' }}>70+ vendor-neutral connectors</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw' }}>
            <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399', flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.6vh' }}>Temporal truth &amp; versioned state</span>
          </div>
        </div>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6vh 4vw',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '38vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2vh',
        }}>
          <div style={{
            display: 'flex',
            gap: '1.2vh',
          }}>
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '2.5vh 1.5vw',
              textAlign: 'center',
            }}>
              <div style={{ color: '#34d399', fontSize: '1.3vh', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>Ingest</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.3vh' }}>OAuth, Webhooks, Files, MCP</div>
            </div>
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '2.5vh 1.5vw',
              textAlign: 'center',
            }}>
              <div style={{ color: '#a78bfa', fontSize: '1.3vh', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>Normalize</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.3vh' }}>Entity Resolution, Schema Map</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1vh 0',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '2vh' }}>↓</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(27, 167, 132, 0.08), rgba(27, 167, 132, 0.03))',
            border: '1px solid rgba(27, 167, 132, 0.2)',
            borderRadius: '14px',
            padding: '3vh 2vw',
            textAlign: 'center',
          }}>
            <div style={{ color: '#34d399', fontSize: '2.2vh', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6vh' }}>Canonical Spine</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vh' }}>D1/PostgreSQL + Versioned State + Temporal Truth</div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1vh 0',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '2vh' }}>↓</div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1.2vh',
          }}>
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '2.5vh 1.5vw',
              textAlign: 'center',
            }}>
              <div style={{ color: '#60a5fa', fontSize: '1.3vh', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>Detect</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.3vh' }}>Cognitive Layer signals</div>
            </div>
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '2.5vh 1.5vw',
              textAlign: 'center',
            }}>
              <div style={{ color: '#fbbf24', fontSize: '1.3vh', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.8vh' }}>Approve</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.3vh' }}>Human gate before action</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
