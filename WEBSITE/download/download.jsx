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
        <a href="#" className="header-btn header-btn-secondary active">Download</a>
        <a href="../store/" className="header-btn header-btn-primary">Buy License</a>
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

const Download = () => {
  useLenis();
  useMouseGlow();

  return (
    <>
      <TopHeader />
      <LeftSidebar />

      <main id="main">
        <section className="section-shell" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
          <p className="eyebrow">VFxM download</p>
          <h1>Get Virtue FX Manager</h1>
          <p className="subtitle" style={{ fontSize: '18px', color: 'var(--t-2)', marginTop: '8px', maxWidth: '720px' }}>
            Download the trial version or purchase a license key to unlock the ultimate visual plugin manager for REAPER.
          </p>
        </section>

        {/* Download Grid layout */}
        <section className="section-shell" style={{ marginTop: '2rem' }}>
          <div className="download-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'start' }}>
            
            {/* Download Panels */}
            <div className="downloads-panel" style={{ display: 'grid', gap: '24px' }}>
              <div className="feature-card" style={{ padding: '36px', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--t)', marginBottom: '8px' }}>Select your option</h2>
                <p style={{ color: 'var(--t-2)', fontSize: '14px', marginBottom: '24px' }}>
                  The free trial is fully featured and runs for 10 days. No sign-up or credit card required.
                </p>

                <div style={{ display: 'grid', gap: '12px' }}>
                  <a
                    className="btn-primary"
                    href="https://www.virtuecreativesystems.com/downloads/vfxm-mac.dmg"
                    style={{ display: 'block', textAlign: 'center', padding: '14px 20px' }}
                  >
                    Download macOS (.dmg)
                  </a>
                  <a
                    className="btn-ghost"
                    href="https://www.virtuecreativesystems.com/downloads/vfxm-win.exe"
                    style={{ display: 'block', textAlign: 'center', padding: '14px 20px' }}
                  >
                    Download Windows (.exe)
                  </a>
                  <a
                    className="btn-ghost"
                    href="../store/"
                    style={{ display: 'block', textAlign: 'center', padding: '14px 20px', borderColor: 'var(--o-soft)', color: 'var(--o)' }}
                  >
                    Buy Lifetime License ($29)
                  </a>
                </div>

                <div style={{ marginTop: '24px', borderTop: '1px solid var(--line)', paddingTop: '20px', display: 'grid', gap: '8px', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--t-3)' }}>
                  <div>Latest Release: v1.1.0 (stable)</div>
                  <div>Release Date: 2026-07-14</div>
                  <div>Platforms: Recommended on macOS Tahoe & Windows 11</div>
                  <div>Trial: 10-day evaluation available</div>
                </div>
              </div>
            </div>

            {/* Instruction Panel */}
            <div className="instructions-panel" style={{ padding: '12px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--t)', marginBottom: '20px' }}>Installation Instructions</h2>
              
              <ol className="step-list" style={{ display: 'grid', gap: '20px', paddingLeft: '1.25rem', lineHeight: '1.6', fontSize: '14px', color: 'var(--t-2)' }}>
                <li>
                  <strong style={{ color: 'var(--t)' }}>Download:</strong> Click the download button for your operating system to download the installer file.
                </li>
                <li>
                  <strong style={{ color: 'var(--t)' }}>Install:</strong> Run the installer file (<code>.dmg</code> on macOS, <code>.exe</code> on Windows) and follow the simple setup wizard prompts.
                </li>
                <li>
                  <strong style={{ color: 'var(--t)' }}>Configure:</strong> Open Cockos REAPER. Open the Actions list (press <kbd>?</kbd>), search for <em>"Virtue FX Manager"</em>, and click run.
                </li>
                <li>
                  <strong style={{ color: 'var(--t)' }}>Activate:</strong> If you purchased a license, enter your key inside the app to activate permanently. Otherwise, click "Start Trial".
                </li>
              </ol>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Download />);
