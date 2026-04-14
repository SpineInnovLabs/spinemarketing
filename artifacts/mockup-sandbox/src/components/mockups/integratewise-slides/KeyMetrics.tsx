import './_group.css';

export function KeyMetrics() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#05070A',
      display: 'flex',
      flexDirection: 'column',
      padding: '6vh 6vw',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{
        position: 'absolute',
        top: '-20vh',
        right: '-10vw',
        width: '60vh',
        height: '60vh',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 167, 132, 0.06) 0%, transparent 70%)',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '5vh', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8vh',
          padding: '0.6vh 1.8vh',
          borderRadius: '40px',
          border: '1px solid rgba(27, 167, 132, 0.2)',
          background: 'rgba(27, 167, 132, 0.06)',
          marginBottom: '2.5vh',
        }}>
          <span style={{ color: '#34d399', fontSize: '1.4vh', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Impact
          </span>
        </div>
        <h2 style={{
          color: '#ffffff',
          fontSize: '4.2vh',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.15,
          margin: '0 0 1.5vh 0',
        }}>
          What <span style={{ color: '#34d399' }}>changes</span> when you go live
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2.5vw',
        flex: 1,
        alignContent: 'start',
        zIndex: 1,
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#34d399', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            70+
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            Connectors
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            CRM, billing, support, comms, dev tools — all normalized into canonical entities
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#34d399', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            90d
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            Earlier Warning
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            Catch renewal risk and churn signals months before they surface in your CRM
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#34d399', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            100%
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            Governed AI
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            Every AI action passes through the Approval Gate. Nothing executes without human consent.
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#60a5fa', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            15m
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            To Connect
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            OAuth-based setup. No migration, no rip-and-replace. Start seeing value on day one.
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#a78bfa', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            1
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            Single Screen
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            Replace 6+ tabs with one unified Workspace. Full context on every customer.
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '4vh 2.5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{ color: '#fbbf24', fontSize: '7vh', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5vh' }}>
            8
          </div>
          <div style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 600, marginBottom: '0.8vh' }}>
            Pipeline Stages
          </div>
          <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.4vh', lineHeight: 1.5 }}>
            Full normalization from raw ingest to canonical entity — schema drift immune.
          </div>
        </div>
      </div>
    </div>
  );
}
