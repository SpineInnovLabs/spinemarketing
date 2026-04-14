import './_group.css';

export function ProductStack() {
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
        top: 0,
        right: 0,
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 167, 132, 0.06) 0%, transparent 70%)',
      }} />

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.8vh',
        padding: '0.6vh 1.8vh',
        borderRadius: '40px',
        border: '1px solid rgba(27, 167, 132, 0.2)',
        background: 'rgba(27, 167, 132, 0.06)',
        marginBottom: '2.5vh',
        alignSelf: 'flex-start',
      }}>
        <span style={{ color: '#34d399', fontSize: '1.4vh', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Product
        </span>
      </div>

      <h2 style={{
        color: '#ffffff',
        fontSize: '4.5vh',
        fontWeight: 700,
        letterSpacing: '-0.04em',
        lineHeight: 1.15,
        margin: '0 0 1.5vh 0',
      }}>
        Four layers. <span style={{ color: '#34d399' }}>One system.</span>
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: '1.8vh',
        maxWidth: '50vw',
        lineHeight: 1.5,
        margin: '0 0 5vh 0',
      }}>
        Every customer. Every tool. One screen.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '2vw',
        flex: 1,
        alignItems: 'stretch',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '3vh 2vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            width: '5vh',
            height: '5vh',
            borderRadius: '12px',
            background: 'rgba(27, 167, 132, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
            fontSize: '2.5vh',
          }}>
            <span style={{ color: '#34d399' }}>W</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2.2vh', fontWeight: 700, margin: '0 0 1.2vh 0', letterSpacing: '-0.02em' }}>
            Workspace
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5vh', lineHeight: 1.5, margin: 0 }}>
            Your daily surface on top of the Spine. Entity 360, unified tasks, and real-time health signals.
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '3vh 2vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            width: '5vh',
            height: '5vh',
            borderRadius: '12px',
            background: 'rgba(139, 92, 246, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
            fontSize: '2.5vh',
          }}>
            <span style={{ color: '#a78bfa' }}>C</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2.2vh', fontWeight: 700, margin: '0 0 1.2vh 0', letterSpacing: '-0.02em' }}>
            Cognitive Layer
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5vh', lineHeight: 1.5, margin: 0 }}>
            Continuous detection engine bound to Spine events. Surfaces patterns humans miss.
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '3vh 2vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            width: '5vh',
            height: '5vh',
            borderRadius: '12px',
            background: 'rgba(59, 130, 246, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
            fontSize: '2.5vh',
          }}>
            <span style={{ color: '#60a5fa' }}>T</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2.2vh', fontWeight: 700, margin: '0 0 1.2vh 0', letterSpacing: '-0.02em' }}>
            Twin
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5vh', lineHeight: 1.5, margin: 0 }}>
            AI copilot that drafts actions with evidence, confidence scores, and impact previews.
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '3vh 2vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            width: '5vh',
            height: '5vh',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
            fontSize: '2.5vh',
          }}>
            <span style={{ color: '#fbbf24' }}>A</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2.2vh', fontWeight: 700, margin: '0 0 1.2vh 0', letterSpacing: '-0.02em' }}>
            Approval Gate
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5vh', lineHeight: 1.5, margin: 0 }}>
            Hard boundary before execution. Evidence links, confidence scores, impact previews.
          </p>
        </div>
      </div>
    </div>
  );
}
