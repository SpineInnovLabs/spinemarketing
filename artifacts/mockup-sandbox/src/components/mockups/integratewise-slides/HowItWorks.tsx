import './_group.css';

export function HowItWorks() {
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vh',
        height: '80vh',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27, 167, 132, 0.04) 0%, transparent 60%)',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '6vh', zIndex: 1 }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '4.2vh',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.15,
          margin: '0 0 1.5vh 0',
        }}>
          How It <span style={{ color: '#34d399' }}>Works</span>
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '1.8vh',
          margin: 0,
        }}>
          Connect → Detect → Propose → You Approve
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '1.5vw',
        flex: 1,
        zIndex: 1,
      }}>
        <div style={{
          flex: 1,
          maxWidth: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            width: '7vh',
            height: '7vh',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(27, 167, 132, 0.15), rgba(27, 167, 132, 0.05))',
            border: '1px solid rgba(27, 167, 132, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
          }}>
            <span style={{ color: '#34d399', fontSize: '2.8vh', fontWeight: 700 }}>1</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 700, margin: '0 0 1vh 0', letterSpacing: '-0.02em' }}>
            Connect
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vh', lineHeight: 1.5, margin: 0 }}>
            Link Salesforce, Stripe, Zendesk, Slack via OAuth. 15 minutes. No migration.
          </p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.12)', fontSize: '2.5vh', marginTop: '3vh' }}>→</div>

        <div style={{
          flex: 1,
          maxWidth: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            width: '7vh',
            height: '7vh',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
          }}>
            <span style={{ color: '#a78bfa', fontSize: '2.8vh', fontWeight: 700 }}>2</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 700, margin: '0 0 1vh 0', letterSpacing: '-0.02em' }}>
            Detect
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vh', lineHeight: 1.5, margin: 0 }}>
            Cognitive Layer runs continuous detection. Surfaces churn risk, pipeline stasis, anomalies.
          </p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.12)', fontSize: '2.5vh', marginTop: '3vh' }}>→</div>

        <div style={{
          flex: 1,
          maxWidth: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            width: '7vh',
            height: '7vh',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
          }}>
            <span style={{ color: '#60a5fa', fontSize: '2.8vh', fontWeight: 700 }}>3</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 700, margin: '0 0 1vh 0', letterSpacing: '-0.02em' }}>
            Propose
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vh', lineHeight: 1.5, margin: 0 }}>
            Twin drafts actions with evidence links, confidence scores, and impact previews.
          </p>
        </div>

        <div style={{ color: 'rgba(255,255,255,0.12)', fontSize: '2.5vh', marginTop: '3vh' }}>→</div>

        <div style={{
          flex: 1,
          maxWidth: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            width: '7vh',
            height: '7vh',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05))',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5vh',
          }}>
            <span style={{ color: '#fbbf24', fontSize: '2.8vh', fontWeight: 700 }}>4</span>
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '2vh', fontWeight: 700, margin: '0 0 1vh 0', letterSpacing: '-0.02em' }}>
            You Approve
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4vh', lineHeight: 1.5, margin: 0 }}>
            Approval Gate ensures nothing executes without your conscious yes. Full audit trail.
          </p>
        </div>
      </div>
    </div>
  );
}
