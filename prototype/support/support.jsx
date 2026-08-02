/* global React, ReactDOM, Lenis */
const { useState: useStateA, useEffect: useEffectA } = React;

// Smooth scrolling hook
const useLenis = () => {
  useEffectA(() => {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });
    let raf;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
};

// Mouse tracking glow hook
const useMouseGlow = () => {
  useEffectA(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
};

// Top Header Bar
const TopHeader = () => {
  return (
    <header className="site-header">
      <a href="../#" className="site-header-title">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 22, height: 22 }}>
          <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="6" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" strokeWidth="4" />
        </svg>
        <span>Virtue</span> FX Manager
      </a>
      <div className="site-header-actions">
        <a href="../docs/" className="header-btn header-btn-secondary">Help Docs</a>
        <a href="#" className="header-btn header-btn-secondary active">Recover Key</a>
        <a href="../download/" className="header-btn header-btn-secondary">Download Trial</a>
        <a href="../store/" className="header-btn header-btn-primary">Buy now !</a>
      </div>
    </header>
  );
};

// Left Sidebar Icon Navigation
const LeftSidebar = () => {
  const items = [
    { href: '../#',          label: 'Home',         icon: <HomeIcon /> },
    { href: '../#demo',      label: 'Demo Video',   icon: <DemoIcon /> },
    { href: '../#testimonials', label: 'User Reviews', icon: <ReviewIcon /> },
    { href: '../#reveal',    label: 'Comparison',   icon: <CompareIcon /> },
    { href: '../#features',  label: 'Bento Grid',   icon: <BentoIcon /> },
    { href: '../#how',       label: 'How It Works', icon: <StepsIcon /> },
    { href: '../#recovery',  label: 'Key Recovery', icon: <KeyIcon /> },
    { href: '../#pricing',   label: 'Pricing Plan', icon: <PricingIcon /> },
    { href: '../#faq',       label: 'Common FAQ',   icon: <FAQIcon /> }
  ];

  return (
    <div className="nav-tab">
      <a href="../#" className="nav-tab-icon" aria-label="VFxM Home">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="6" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" strokeWidth="4" />
        </svg>
      </a>

      <div className="nav-icons-list">
        {items.map((it, i) => (
          <a
            key={i}
            href={it.href}
            className="nav-icon-link"
            aria-label={it.label}
          >
            {it.icon}
            <span className="tooltip">{it.label}</span>
          </a>
        ))}
      </div>
      <div style={{ height: 24 }} />
    </div>
  );
};

// SVG navigation icon components
const HomeIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2 10 10-8 10 8v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10Z" />
  </svg>
);
const DemoIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon strokeLinecap="round" strokeLinejoin="round" points="6,3 20,12 6,21" />
  </svg>
);
const ReviewIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0 1 18 0v6M21 18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3M11 10v4M13 8v8M7 11v2M17 11v2" />
  </svg>
);
const CompareIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
    <rect x="2" y="5" width="8" height="14" rx="1" strokeLinecap="round" />
    <rect x="14" y="5" width="8" height="14" rx="1" strokeLinecap="round" />
  </svg>
);
const BentoIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
    <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" />
    <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
    <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" />
  </svg>
);
const StepsIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
    <line x1="3" y1="12" x2="16" y2="12" strokeLinecap="round" />
    <line x1="3" y1="18" x2="11" y2="18" strokeLinecap="round" />
  </svg>
);
const KeyIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="8" cy="15" r="4" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11 19 4M16 7l2 2M18 5l2 2" />
  </svg>
);
const PricingIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8.5 18 17M11.5 6.5l8.5 8.5M7 14A4 4 0 1 1 3 10a4 4 0 0 1 4 4Z" />
  </svg>
);
const FAQIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

const Support = () => {
  useLenis();
  useMouseGlow();

  const [email, setEmail] = useStateA('');
  const [note, setNote] = useStateA('');
  const [showContact, setShowContact] = useStateA(false);
  const [contactName, setContactName] = useStateA('');
  const [contactEmail, setContactEmail] = useStateA('');
  const [contactSubject, setContactSubject] = useStateA('');
  const [contactMessage, setContactMessage] = useStateA('');
  const [contactSending, setContactSending] = useStateA(false);
  const [contactSuccess, setContactSuccess] = useStateA(false);
  const [contactError, setContactError] = useStateA('');

  const handleRecoverSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setNote('Verification sent. If a matching purchase email exists, recovery info will arrive shortly.');
    setEmail('');
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactSubject || !contactMessage) {
      setContactError('Please fill in all fields.');
      return;
    }
    if (!contactEmail.includes('@')) {
      setContactError('Please enter a valid email address.');
      return;
    }

    setContactError('');
    setContactSending(true);

    try {
      const response = await fetch("https://virtue-licensing-service.virtuecreativesystems.workers.dev/v1/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject,
          message: contactMessage
        })
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setContactSuccess(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        setContactError(data.error || data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setContactError("Network error. Please try again later.");
    } finally {
      setContactSending(false);
    }
  };

  return (
    <>
      <TopHeader />
      <LeftSidebar />

      <main id="main">
        <section className="section-shell" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
          <p className="eyebrow">Support</p>
          <h1>VFxM Support & Purchase Help</h1>
          <p className="subtitle" style={{ fontSize: '18px', color: 'var(--t-2)', marginTop: '8px', maxWidth: '720px' }}>
            For purchase, download, app activation, and REAPER workflow questions, contact Virtue Creative Systems.
          </p>
        </section>

        {/* Support Card Grid */}
        <section className="section-shell" style={{ marginTop: '3rem' }}>
          <div className="card-grid three" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Contact Support */}
            <article className="feature-card" style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--line)', minHeight: 330, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {contactSuccess ? (
                <div style={{ textAlign: 'center', animation: 'fadeIn 0.4s ease', padding: '16px 0' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)',
                    border: '2px solid var(--o)', display: 'grid', placeItems: 'center', margin: '0 auto 16px'
                  }}>
                    <svg width="24" height="24" fill="none" stroke="var(--o)" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--t)', marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--t-2)', fontSize: '13.5px', lineHeight: '1.5', marginBottom: '20px' }}>
                    Your support message has been sent to contact@virtuecreativesystems.com. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setContactSuccess(false); setShowContact(false); }}
                    className="btn-ghost"
                    style={{ width: '100%', padding: '10px' }}
                  >
                    Done
                  </button>
                </div>
              ) : !showContact ? (
                <>
                  <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--t)', marginBottom: '12px' }}>Contact Support</h2>
                  <p style={{ color: 'var(--t-2)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                    Email the studio with your order ID, app version, platform, license status, and any VFxM diagnostic logs.
                  </p>
                  <button
                    onClick={() => setShowContact(true)}
                    className="btn-primary"
                    style={{ display: 'block', width: '100%', padding: '12px', cursor: 'pointer', textAlign: 'center' }}
                  >
                    Send Message
                  </button>
                </>
              ) : (
                <div style={{ animation: 'fadeIn 0.4s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--t)', margin: 0 }}>Contact Support</h2>
                    <button
                      onClick={() => { setShowContact(false); setContactError(''); }}
                      style={{ background: 'none', border: 'none', color: 'var(--t-3)', cursor: 'pointer', fontSize: '12px', textDecoration: 'underline' }}
                    >
                      Cancel
                    </button>
                  </div>
                  <form onSubmit={handleContactSubmit} style={{ display: 'grid', gap: '10px' }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      disabled={contactSending}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      style={{
                        padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)',
                        background: 'var(--bg-2)', color: 'var(--t)', fontSize: '13px', outline: 'none'
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      disabled={contactSending}
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      style={{
                        padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)',
                        background: 'var(--bg-2)', color: 'var(--t)', fontSize: '13px', outline: 'none'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      disabled={contactSending}
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      style={{
                        padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)',
                        background: 'var(--bg-2)', color: 'var(--t)', fontSize: '13px', outline: 'none'
                      }}
                    />
                    <textarea
                      placeholder="Describe your issue..."
                      required
                      rows="4"
                      disabled={contactSending}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      style={{
                        padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)',
                        background: 'var(--bg-2)', color: 'var(--t)', fontSize: '13px', resize: 'vertical', outline: 'none'
                      }}
                    />
                    <button
                      type="submit"
                      disabled={contactSending}
                      className="btn-primary"
                      style={{ width: '100%', padding: '10px', fontSize: '13.5px', fontWeight: 'bold' }}
                    >
                      {contactSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {contactError && (
                      <p style={{ margin: 0, fontSize: '12px', color: '#f87171', lineHeight: '1.4' }}>
                        {contactError}
                      </p>
                    )}
                  </form>
                </div>
              )}
            </article>

            {/* Key Recovery */}
            <article className="feature-card" style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--t)', marginBottom: '12px' }}>License Key Recovery</h2>
              <p style={{ color: 'var(--t-2)', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                Lost your license key? Enter your purchase email address below and we'll email you all associated keys.
              </p>
              <form onSubmit={handleRecoverSubmit} style={{ display: 'grid', gap: '12px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    background: 'var(--bg-2)',
                    color: 'var(--t)',
                    fontSize: '14px'
                  }}
                />
                <button type="submit" className="btn-ghost" style={{ width: '100%', padding: '12px' }}>
                  Send Recovery Email
                </button>
              </form>
              {note && (
                <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--o)', lineHeight: '1.4' }}>
                  {note}
                </p>
              )}
            </article>

            {/* Troubleshooting */}
            <article className="feature-card" style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--t)', marginBottom: '12px' }}>License Troubleshooting</h2>
              <p style={{ color: 'var(--t-2)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                Activation limits, disabled licenses, expired grace periods, and device deactivations are handled inside VFxM settings.
              </p>
              <a href="../docs/#installation-launching" className="btn-ghost" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px' }}>
                Activation docs
              </a>
            </article>

          </div>
        </section>
      </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Support />);
