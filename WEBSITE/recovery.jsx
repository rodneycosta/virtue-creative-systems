/* global React */
const { useState } = React;

const Recovery = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, msg: '' }); // type: null | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: 'loading', msg: 'Connecting to database...' });

    try {
      const response = await fetch('https://virtue-licensing-service.virtuecreativesystems.workers.dev/v1/license/recover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          msg: data.message || 'Verification success! If the email is registered, we have sent your license keys.'
        });
      } else {
        setStatus({
          type: 'error',
          msg: data.error || data.message || 'Registered email address not found in license database.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        msg: 'Connection failed. Please check your network and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="recovery-section" id="recovery" data-screen-label="06 Key Recovery">
      <div className="recovery-card">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--o)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: 16
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--o)', display: 'inline-block' }}></span>
          License Recovery
        </div>
        <h2>Recover your VFxM activation key.</h2>
        <p>
          Can't find your license key email? Enter your purchase email address below and we'll retrieve and email all active license keys registered to you immediately.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          <div className="recovery-input-group">
            <label className="recovery-input-label" htmlFor="recover-field">Purchase Email</label>
            <input
              type="email"
              id="recover-field"
              className="recovery-input"
              placeholder="e.g., sounddesigner@workstation.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="recovery-btn"
            disabled={loading || !email}
          >
            {loading ? 'Retrieving license keys...' : 'Send Recovery Email'}
          </button>

          {status.msg && (
            <div className={`recovery-note ${status.type}`}>
              {status.type === 'loading' && '⚡ '}
              {status.type === 'success' && '✓ '}
              {status.type === 'error' && '⚠️ '}
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

window.Recovery = Recovery;
