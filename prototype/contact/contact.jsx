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
        <a href="../support/" className="header-btn header-btn-secondary">Recover Key</a>
        <a href="#" className="header-btn header-btn-secondary">Trial (Coming soon)</a>
        <a href="#" className="header-btn header-btn-primary">Buy (Coming soon)</a>
      </div>
    </header>
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
            <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="6" />
            <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" strokeWidth="4" />
          </svg>
          <span style={{ fontWeight: 800, color: 'var(--t)' }}>Virtue Creative Systems</span>
        </div>
        <div className="footer-links">
          <a href="../docs/">Help Docs</a>
          <a href="../support/">Recover Key</a>
          <a href="#">Trial (Coming soon)</a>
          <a href="#">Buy (Coming soon)</a>
          <a href="../contact/">Contact</a>
          <a href="../store/?show_eula=true">EULA</a>
        </div>
        <div className="footer-meta">
          &copy; {new Date().getFullYear()} Virtue Creative Systems
        </div>
      </div>
      
      {/* Footnote Disclaimer */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
        <p style={{ fontSize: '11px', color: 'var(--t-3)', lineHeight: '1.6', margin: 0 }}>
          <strong>Disclaimer:</strong> Third-party names, marks, and images are used for identification and comparison only. No affiliation, endorsement, sponsorship, or official association is implied. Profile names are internal only and do not claim ownership, exact emulation, or collaboration. Any described timing feel is a creative interpretation.
        </p>
      </div>
    </footer>
  );
};

const Contact = () => {
  useLenis();

  const [name, setName] = useStateA("");
  const [email, setEmail] = useStateA("");
  const [subject, setSubject] = useStateA("");
  const [message, setMessage] = useStateA("");
  const [status, setStatus] = useStateA("");
  const [isSubmitting, setIsSubmitting] = useStateA(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://virtue-licensing-service.virtuecreativesystems.workers.dev/v1/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus(data.error || data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <TopHeader />
      <LeftSidebar />

      <main id="main">
        <section className="section-shell" style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem', paddingBottom: '6rem' }}>
          <div className="legal-copy reveal contact-form-container" style={{ padding: '2.5rem', display: 'grid', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p className="eyebrow" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Get in touch</p>
              <h1 style={{ fontSize: '2.2rem', margin: 0, fontWeight: 800, letterSpacing: '-0.03em' }}>Contact Support</h1>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginTop: '0.6rem', lineHeight: '1.6' }}>
                Need help with VFxM? Send us a message below and we will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.4rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem', textAlign: 'left' }}>
                <label htmlFor="contact-name" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ padding: '0.85rem 1.15rem', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--ink)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box', outline: 'none', transition: 'all 0.2s' }}
                />
              </div>
              
              <div style={{ display: 'grid', gap: '0.5rem', textAlign: 'left' }}>
                <label htmlFor="contact-email" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: '0.85rem 1.15rem', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--ink)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box', outline: 'none', transition: 'all 0.2s' }}
                />
              </div>

              <div style={{ display: 'grid', gap: '0.5rem', textAlign: 'left' }}>
                <label htmlFor="contact-subject" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="How can we help?"
                  required
                  disabled={isSubmitting}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{ padding: '0.85rem 1.15rem', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--ink)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box', outline: 'none', transition: 'all 0.2s' }}
                />
              </div>

              <div style={{ display: 'grid', gap: '0.5rem', textAlign: 'left' }}>
                <label htmlFor="contact-message" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Describe your question or issue in detail..."
                  required
                  rows="6"
                  disabled={isSubmitting}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ padding: '0.85rem 1.15rem', border: '1px solid var(--line)', borderRadius: 'var(--radius)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--ink)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box', outline: 'none', transition: 'all 0.2s', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="button button-primary" disabled={isSubmitting} style={{ width: '100%', padding: '1rem', fontSize: '1rem', fontWeight: 700, cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Sending message...' : 'Send Message'}
              </button>
              
              <p style={{ margin: 0, fontSize: '0.9rem', minHeight: '1.25rem', textAlign: 'center', fontWeight: 600, color: status === 'success' ? 'var(--accent)' : '#dc2626' }}>
                {status === 'success' ? 'Your message has been sent successfully. We will get back to you soon!' : (status !== '' && status)}
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);
