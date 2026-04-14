import './_group.css';

export function CallToAction() {
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
        width: '80vh',
        height: '80vh',
        borderRadius: '50%',
        border: '1px solid rgba(27, 167, 132, 0.06)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vh',
        height: '60vh',
        borderRadius: '50%',
        border: '1px solid rgba(27, 167, 132, 0.04)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vh',
        height: '100vh',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 167, 132, 0.06) 0%, transparent 50%)',
      }} />

      <div style={{
        position: 'absolute',
        top: '15%',
        left: '20%',
        width: '3vh',
        height: '3vh',
        borderRadius: '8px',
        background: 'rgba(27, 167, 132, 0.1)',
        border: '1px solid rgba(27, 167, 132, 0.15)',
      }} />
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '18%',
        width: '3vh',
        height: '3vh',
        borderRadius: '8px',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.15)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '25%',
        width: '3vh',
        height: '3vh',
        borderRadius: '8px',
        background: 'rgba(245, 158, 11, 0.1)',
        border: '1px solid rgba(245, 158, 11, 0.15)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '22%',
        width: '3vh',
        height: '3vh',
        borderRadius: '8px',
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.15)',
      }} />

      <div style={{
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '60vw',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8vh',
          padding: '0.8vh 2vh',
          borderRadius: '40px',
          border: '1px solid rgba(27, 167, 132, 0.25)',
          background: 'rgba(27, 167, 132, 0.08)',
          marginBottom: '4vh',
        }}>
          <div style={{ width: '0.8vh', height: '0.8vh', borderRadius: '50%', background: '#34d399' }} />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.6vh', fontWeight: 500 }}>
            integratewise.ai
          </span>
        </div>

        <h2 style={{
          color: '#ffffff',
          fontSize: '5.5vh',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.15,
          letterSpacing: '-0.04em',
          margin: '0 0 2.5vh 0',
        }}>
          Every customer.{' '}
          <span style={{ color: '#34d399' }}>Every tool.</span>
          <span style={{ display: 'block' }}>One screen.</span>
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '2vh',
          textAlign: 'center',
          lineHeight: 1.5,
          margin: '0 0 5vh 0',
          maxWidth: '45vw',
        }}>
          See how IntegrateWise unifies your entire stack into a governed, intelligent workspace — without replacing anything you already use.
        </p>

        <div style={{
          display: 'flex',
          gap: '1.5vh',
        }}>
          <div style={{
            padding: '1.6vh 4vh',
            borderRadius: '10px',
            background: '#1BA784',
            color: '#ffffff',
            fontSize: '2vh',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}>
            Book a demo
          </div>
          <div style={{
            padding: '1.6vh 4vh',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '2vh',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.8vh',
          }}>
            See the Platform
            <span style={{ fontSize: '1.8vh' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
