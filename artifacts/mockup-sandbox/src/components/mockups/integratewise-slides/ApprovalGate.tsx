import './_group.css';

export function ApprovalGate() {
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
        top: '50%',
        right: '-5vw',
        transform: 'translateY(-50%)',
        width: '50vh',
        height: '50vh',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
      }} />

      <div style={{
        flex: '0 0 48%',
        padding: '6vh 4vw 6vh 6vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8vh',
          padding: '0.6vh 1.8vh',
          borderRadius: '40px',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          background: 'rgba(245, 158, 11, 0.06)',
          marginBottom: '3vh',
          alignSelf: 'flex-start',
        }}>
          <span style={{ color: '#fbbf24', fontSize: '1.4vh', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Governance
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
          You <span style={{ color: '#fbbf24' }}>decide.</span>
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '1.8vh',
          lineHeight: 1.6,
          margin: '0 0 4vh 0',
          maxWidth: '35vw',
        }}>
          The Approval Gate is an architectural mandate — AI proposes, you dispose. Every action shows evidence, confidence, and impact before execution.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2vw' }}>
            <div style={{
              width: '4vh',
              height: '4vh',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#fbbf24',
              fontSize: '1.8vh',
              fontWeight: 700,
            }}>
              1
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '1.7vh', fontWeight: 600, marginBottom: '0.3vh' }}>Action pauses</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.3vh' }}>Every suggestion waits in a calm approval space</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2vw' }}>
            <div style={{
              width: '4vh',
              height: '4vh',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#fbbf24',
              fontSize: '1.8vh',
              fontWeight: 700,
            }}>
              2
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '1.7vh', fontWeight: 600, marginBottom: '0.3vh' }}>You see evidence</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.3vh' }}>Edit tone, check reasoning, understand why</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2vw' }}>
            <div style={{
              width: '4vh',
              height: '4vh',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#fbbf24',
              fontSize: '1.8vh',
              fontWeight: 700,
            }}>
              3
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '1.7vh', fontWeight: 600, marginBottom: '0.3vh' }}>Permit or deny</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.3vh' }}>Nothing moves without your conscious yes</div>
            </div>
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
          maxWidth: '36vw',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '3vh 2.5vw',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1vw',
            marginBottom: '2.5vh',
            paddingBottom: '2vh',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              width: '4vh',
              height: '4vh',
              borderRadius: '10px',
              background: 'rgba(59, 130, 246, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: '#60a5fa', fontSize: '1.6vh' }}>T</span>
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '1.6vh', fontWeight: 600 }}>Twin Recommendation</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.2vh' }}>Escalate Acme Corp to VP of CS</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh', marginBottom: '2.5vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.3vh' }}>Confidence</span>
              <span style={{ color: '#34d399', fontSize: '1.5vh', fontWeight: 700 }}>87%</span>
            </div>
            <div style={{ width: '100%', height: '0.6vh', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}>
              <div style={{ width: '87%', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, #1BA784, #34d399)' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8vh', marginBottom: '2.5vh' }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2vh', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Evidence</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vh' }}>Support tickets +40% QoQ</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vh' }}>Champion left role (LinkedIn)</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.3vh' }}>Usage drop: core module -22%</div>
          </div>

          <div style={{ display: 'flex', gap: '1vw' }}>
            <div style={{
              flex: 1,
              padding: '1.2vh',
              borderRadius: '8px',
              background: '#1BA784',
              color: '#ffffff',
              fontSize: '1.4vh',
              fontWeight: 600,
              textAlign: 'center',
            }}>
              Approve
            </div>
            <div style={{
              flex: 1,
              padding: '1.2vh',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.4vh',
              fontWeight: 500,
              textAlign: 'center',
            }}>
              Deny
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
