import './_group.css';

export function TitleHero() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#05070A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vh',
        height: '70vh',
        borderRadius: '50%',
        border: '1px solid rgba(27, 167, 132, 0.08)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '55vh',
        height: '55vh',
        borderRadius: '50%',
        border: '1px solid rgba(27, 167, 132, 0.06)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85vh',
        height: '85vh',
        borderRadius: '50%',
        border: '1px solid rgba(27, 167, 132, 0.04)',
      }} />

      <div style={{
        position: 'absolute',
        top: '12%',
        left: '18%',
        width: '3.5vh',
        height: '3.5vh',
        borderRadius: '8px',
        background: 'rgba(27, 167, 132, 0.12)',
        border: '1px solid rgba(27, 167, 132, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#34d399',
        fontSize: '1.8vh',
      }}>
        S
      </div>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '22%',
        width: '3.5vh',
        height: '3.5vh',
        borderRadius: '8px',
        background: 'rgba(59, 130, 246, 0.12)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#60a5fa',
        fontSize: '1.8vh',
      }}>
        Z
      </div>
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '15%',
        width: '3.5vh',
        height: '3.5vh',
        borderRadius: '8px',
        background: 'rgba(245, 158, 11, 0.12)',
        border: '1px solid rgba(245, 158, 11, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fbbf24',
        fontSize: '1.8vh',
      }}>
        $
      </div>
      <div style={{
        position: 'absolute',
        bottom: '18%',
        right: '16%',
        width: '3.5vh',
        height: '3.5vh',
        borderRadius: '8px',
        background: 'rgba(239, 68, 68, 0.12)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f87171',
        fontSize: '1.8vh',
      }}>
        G
      </div>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.8vh',
        padding: '0.8vh 2vh',
        borderRadius: '40px',
        border: '1px solid rgba(27, 167, 132, 0.25)',
        background: 'rgba(27, 167, 132, 0.08)',
        marginBottom: '3vh',
        zIndex: 1,
      }}>
        <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399' }} />
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6vh', fontWeight: 500, letterSpacing: '-0.02em' }}>
          The Knowledge Workspace over the Spine
        </span>
      </div>

      <h1 style={{
        color: '#ffffff',
        fontSize: '6.5vh',
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 1.1,
        letterSpacing: '-0.04em',
        margin: 0,
        zIndex: 1,
        maxWidth: '80%',
      }}>
        Stop being the{' '}
        <span style={{ display: 'block' }}>
          human API <span style={{ color: '#34d399' }}>between</span>
        </span>
        <span style={{ color: '#34d399' }}>your tools.</span>
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.45)',
        fontSize: '2.2vh',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: '3vh',
        letterSpacing: '-0.01em',
        zIndex: 1,
      }}>
        One workspace. Full context. Every action under your control.
      </p>

      <div style={{
        display: 'flex',
        gap: '1.5vh',
        marginTop: '4vh',
        zIndex: 1,
      }}>
        <div style={{
          padding: '1.4vh 3vh',
          borderRadius: '10px',
          background: '#1BA784',
          color: '#ffffff',
          fontSize: '1.8vh',
          fontWeight: 600,
          letterSpacing: '-0.01em',
        }}>
          Book a demo
        </div>
        <div style={{
          padding: '1.4vh 3vh',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(255,255,255,0.04)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1.8vh',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '0.8vh',
        }}>
          See How It Works
          <span style={{ fontSize: '1.6vh' }}>→</span>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '15vh',
        background: 'linear-gradient(to top, #05070A, transparent)',
      }} />
    </div>
  );
}
