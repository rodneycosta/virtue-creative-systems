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
  const activeLang = (window.VirtueI18n && window.VirtueI18n.getLanguage) ? window.VirtueI18n.getLanguage() : 'en';
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
        <a href="../contact/" className="header-btn header-btn-secondary">Contact</a>
        <a href="../download/" className="header-btn header-btn-secondary">Download</a>
        <a href="../store/" className="header-btn header-btn-primary active">Buy License</a>
        <select 
          data-language-select 
          defaultValue={activeLang}
          className="lang-select-dropdown"
          style={{ 
            background: 'rgba(255,255,255,0.06)', 
            color: 'var(--t)', 
            border: '1px solid var(--line)', 
            borderRadius: '6px', 
            padding: '6px 12px', 
            fontSize: '13px', 
            cursor: 'pointer', 
            outline: 'none',
            fontFamily: 'inherit',
            fontWeight: '500',
            transition: 'border-color 0.2s, background-color 0.2s',
            marginLeft: '8px'
          }}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
          <option value="hi">हिन्दी</option>
          <option value="ar">العربية</option>
          <option value="bn">বাংলা</option>
          <option value="ru">Русский</option>
          <option value="ur">اردو</option>
        </select>
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
          <a href="../download/">Download</a>
          <a href="../store/">Buy License</a>
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

const Store = () => {
  useLenis();
  useMouseGlow();

  const [agreed, setAgreed] = useStateA(false);
  const [shake, setShake] = useStateA(false);
  const [showEula, setShowEula] = useStateA(
    typeof window !== 'undefined' &&
    (window.location.search.includes('show_eula=true') || window.location.hash === '#eula')
  );

  const handleCheckoutClick = (e) => {
    if (agreed) return; // Allow navigation to checkoutUrl
    e.preventDefault();
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  return (
    <>
      <TopHeader />
      <LeftSidebar />

      <main id="main">
        <section className="section-shell" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
          <p className="eyebrow">Buy / Try</p>
          <h1>Virtue FX Manager</h1>
          <p className="subtitle" style={{ fontSize: '18px', color: 'var(--t-2)', marginTop: '8px', maxWidth: '720px' }}>
            Get the visual plugin manager for REAPER. Purchase a lifetime license key to permanently unlock the full product, or download the free trial installer to start optimizing your session workflow.
          </p>
        </section>

        {/* Product Layout Grid */}
        <section className="section-shell" style={{ marginTop: '2rem' }}>
          <div className="product-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '48px', alignItems: 'start' }}>
            
            {/* Product Details Column */}
            <div className="product-details-panel">
              <figure style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', marginBottom: '24px', background: 'var(--bg-2)' }}>
                <img src="../VFxM_Main.png" alt="Virtue FX Manager Interface Preview" style={{ width: '100%', display: 'block' }} />
              </figure>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span className="status-pill" style={{ background: 'var(--o-soft)', color: 'var(--o)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>Store Active</span>
                <span className="status-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', color: 'var(--t-2)' }}>v1.0.0</span>
              </div>
              
              <h2 style={{ fontSize: '28px', color: 'var(--t)', fontWeight: '800', marginBottom: '12px' }}>Virtue Plugin Manager for REAPER</h2>
              <p style={{ color: 'var(--t-2)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                Virtue FX Manager brings clarity to your audio production. Browse your plugin collection visually with custom screenshots, search instantly, build favorite boards for different mixing workflows, and insert tracks or FX chains directly into REAPER with a double-click or drag-and-drop.
              </p>

              <ul className="check-list" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <span style={{ color: 'var(--o)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Visual plugin browser</strong> — Identify components visually using native screenshots.
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <span style={{ color: 'var(--o)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Search and filters</strong> — Instant milliseconds filtering by developer, type, or custom queries.
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <span style={{ color: 'var(--o)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Favorites tabs</strong> — Custom workspaces for different mix contexts (Vocals, Drums, Master).
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <span style={{ color: 'var(--o)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <strong>Ratings and notes</strong> — Leave annotations and star rankings on your most reliable audio tools.
                  </div>
                </li>
              </ul>

              <ul className="check-list" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                  <span style={{ color: 'var(--o)', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                  <div style={{ color: 'var(--t-2)', fontSize: '15px', lineHeight: '1.6' }}>
                    Recommended and tested on macOS Tahoe and Windows 11. It might work on earlier systems, but I recommend testing it before buying with the 10-day trial version.
                  </div>
                </li>
              </ul>
            </div>

            {/* Pricing Sidebar Column */}
            <div className="pricing-sidebar" style={{ display: 'grid', gap: '24px' }}>
              {/* Trial Card */}
              <article className="feature-card" style={{ padding: '32px', borderRadius: '16px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--t-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Evaluation</span>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginTop: '4px' }}>10-Day Free Trial</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '16px 0 8px 0' }}>
                  <span style={{ fontSize: '32px', fontWeight: '800', color: 'var(--t)' }}>Free</span>
                </div>
                <p style={{ color: 'var(--t-2)', fontSize: '13px', marginBottom: '24px' }}>Evaluate all VFxM tools inside REAPER before license activation.</p>
                <a href="../download/" className="btn-ghost" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px' }}>Download</a>
              </article>

              {/* Commercial Card */}
              <article className={`feature-card ${shake ? 'is-shaking' : ''}`} style={{ padding: '32px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid rgba(56, 189, 248, 0.25)', boxShadow: '0 8px 30px rgba(56, 189, 248, 0.05)' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--o)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lifetime Purchase</span>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginTop: '4px' }}>Commercial License</h3>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '16px 0 8px 0' }}>
                  <span style={{ textDecoration: 'line-through', opacity: 0.3, color: 'var(--t)', fontSize: '20px' }}>$79</span>
                  <span style={{ fontSize: '32px', fontWeight: '800', color: 'var(--t)' }}>$29</span>
                  <span style={{ fontSize: '12px', color: 'var(--t-2)' }}>USD</span>
                </div>
                
                <p style={{ color: 'var(--t-2)', fontSize: '13px', marginBottom: '20px' }}>Lifetime license key with 2 concurrent device activations included.</p>

                {/* Agreement Checkbox */}
                <label className="pricing-terms" style={{ display: 'flex', alignItems: 'start', gap: '8px', cursor: 'pointer', marginBottom: '24px', fontSize: '12px', color: 'var(--t-2)' }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    style={{ marginTop: '2px' }}
                  />
                  <span>
                    I agree to evaluate VFxM in the trial before checkout, and I accept the <a href="#" onClick={(e) => { e.preventDefault(); setShowEula(true); }} style={{ color: 'var(--o)', textDecoration: 'underline' }}>EULA terms</a>.
                  </span>
                </label>

                <a
                  href="https://buy.polar.sh/polar_cl_R8BMXvN2z3phPfKgNjMDO7MTg2iQClUVVc7Wc3MuoXQ"
                  onClick={handleCheckoutClick}
                  className={`btn-primary ${agreed ? '' : 'is-disabled'}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    width: '100%',
                    padding: '14px',
                    opacity: agreed ? 1 : 0.6,
                    cursor: agreed ? 'pointer' : 'not-allowed'
                  }}
                >
                  Buy License Key
                </a>
              </article>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {showEula && (
        <div className="eula-modal-overlay" onClick={() => setShowEula(false)}>
          <div className="eula-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="eula-modal-header">
              <h3>End-User License Agreement (EULA)</h3>
              <button className="eula-modal-close" onClick={() => setShowEula(false)}>×</button>
            </div>
            <div className="eula-modal-body">
              <p className="eula-date">Effective Date: June 17, 2026</p>
              <p>This End-User License Agreement ("Agreement") is a legal agreement between you ("User") and the developer of VFxM ("Developer"). By downloading, installing, or using VFxM, you acknowledge that you have read, understood, and agreed to be bound by the terms of this Agreement.</p>
              
              <h4>1. License Grant</h4>
              <p>The Developer grants you a personal, non-exclusive, non-transferable, and limited license to install and use VFxM for your personal or professional creative projects. You may activate the software on up to two (2) personal devices. The license is granted to the individual purchaser and may not be shared, sub-licensed, or redistributed.</p>

              <h4>2. Intellectual Property</h4>
              <p>VFxM, including all associated code, graphical interfaces, documentation, and assets, is the sole property of the Developer and is protected by international copyright laws. You may not reverse-engineer, decompile, or modify the software in any way.</p>

              <h4>3. Third-Party Trademarks</h4>
              <p>REAPER is a registered trademark of Cockos Incorporated. VFxM is an independent software project developed by the Developer and is not affiliated with, endorsed by, or sponsored by Cockos Incorporated. All other product names, logos, and brands mentioned are the property of their respective owners.</p>

              <h4>4. Software Activation & Offline Access</h4>
              <p>VFxM requires an initial internet connection for license activation. Following successful activation, VFxM supports offline use. For security and license validation, the software may periodically require an internet connection to verify your license status. You acknowledge that sustained offline use beyond the designated verification interval may require a brief reconnection to the internet.</p>

              <h4>5. Software Performance & Disclaimer ("As-Is")</h4>
              <p>VFxM is provided on an "as-is" and "as-available" basis. While the Developer strives for professional-grade stability, the Developer makes no warranties, express or implied, regarding the software’s performance in all environments. The Developer is not liable for DAW instability, project file issues, or data loss resulting from the use of this software. Users are advised to maintain standard data backup routines.</p>

              <h4>6. Limitation of Liability</h4>
              <p>In no event shall the Developer be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use VFxM. The total liability of the Developer shall not exceed the amount paid by the User for the product.</p>

              <h4>7. Support & Updates</h4>
              <p>The Developer is committed to the ongoing development and support of VFxM. As a solo-developed project, response times for support inquiries may vary (typically 24–72 hours). Lifetime updates are included with your purchase, though the Developer reserves the right to discontinue support or development at their discretion.</p>

              <h4>8. Sales Policy</h4>
              <p>All digital software sales are final. Refunds are strictly limited to verified technical failures that prevent the software from launching or duplicate purchase errors.</p>

              <h4>9. Acceptance</h4>
              <p>By using VFxM, you signify your acceptance of this Agreement. If you do not agree to these terms, do not install or use the software.</p>
            </div>
            <div className="eula-modal-footer">
              <button className="btn-primary" onClick={() => { setAgreed(true); setShowEula(false); }} style={{ cursor: 'pointer' }}>Accept EULA</button>
              <button className="btn-ghost" onClick={() => setShowEula(false)} style={{ cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Store />);
