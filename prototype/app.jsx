/* global React, ReactDOM, Hero, Transition, Testimonials, Reveal, Features, HowItWorks, Recovery, Pricing, FAQ, Lenis */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

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

// Scroll listener hook
const useScrollY = () => {
  const [y, setY] = useStateA(typeof window !== 'undefined' ? window.scrollY : 0);
  useEffectA(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      setY(window.scrollY);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return y;
};

// Top Header Bar
const TopHeader = () => {
  return (
    <header className="site-header">
      <a href="#" className="site-header-title">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 22, height: 22 }}>
          <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="6" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" strokeWidth="4" />
        </svg>
        <span>Virtue</span> FX Manager
      </a>
      <div className="site-header-actions">
        <a href="docs/" className="header-btn header-btn-secondary">Help Docs</a>
        <a href="support/" className="header-btn header-btn-secondary">Recover Key</a>
        <a href="#" className="header-btn header-btn-secondary">Trial (Coming soon)</a>
        <a href="#" className="header-btn header-btn-primary">Buy (Coming soon)</a>
      </div>
    </header>
  );
};

// Left Sidebar Icon Navigation (Open by default)
const LeftSidebar = ({ activeSection }) => {
  const items = [
    { href: '#',          label: 'Home',         icon: <HomeIcon /> },
    { href: '#demo',      label: 'Demo Video',   icon: <DemoIcon /> },
    { href: '#testimonials', label: 'User Reviews', icon: <ReviewIcon /> },
    { href: '#reveal',    label: 'Comparison',   icon: <CompareIcon /> },
    { href: '#features',  label: 'Bento Grid',   icon: <BentoIcon /> },
    { href: '#how',       label: 'How It Works', icon: <StepsIcon /> },
    { href: '#recovery',  label: 'Key Recovery', icon: <KeyIcon /> },
    { href: '#pricing',   label: 'Pricing Plan', icon: <PricingIcon /> },
    { href: '#faq',       label: 'Common FAQ',   icon: <FAQIcon /> }
  ];

  return (
    <div className="nav-tab">
      {/* Brand logo top link */}
      <a href="#" className="nav-tab-icon" aria-label="VFxM Home">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="6" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" strokeWidth="4" />
        </svg>
      </a>

      {/* Nav icon categories */}
      <div className="nav-icons-list">
        {items.map((it, i) => {
          const currentId = it.href.replace('#', '') || 'home';
          const active = activeSection === currentId;
          return (
            <a
              key={i}
              href={it.href}
              className={`nav-icon-link ${active ? 'active' : ''}`}
              aria-label={it.label}
            >
              {it.icon}
              <span className="tooltip">{it.label}</span>
            </a>
          );
        })}
      </div>

      <div style={{ height: 24 }} /> {/* bottom spacer */}
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

const App = () => {
  useLenis();
  const scrollY = useScrollY();
  const [vh, setVh] = useStateA(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [revealTop, setRevealTop] = useStateA(0);
  const [activeSection, setActiveSection] = useStateA('home');
  const revealRef = useRefA(null);

  useEffectA(() => {
    const onResize = () => {
      setVh(window.innerHeight);
      if (revealRef.current) {
        setRevealTop(revealRef.current.offsetTop);
      }
    };
    window.addEventListener('resize', onResize);
    
    // Initial compute
    setTimeout(() => {
      if (revealRef.current) {
        setRevealTop(revealRef.current.offsetTop);
      }
    }, 600);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Section visibility observer drive active state in LeftSidebar
  useEffectA(() => {
    const sections = ['demo', 'testimonials', 'reveal', 'features', 'how', 'recovery', 'pricing', 'faq'];
    let current = 'home';
    
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Section is active if its top is in the upper half of the viewport
        if (rect.top <= vh * 0.4) {
          current = section;
        }
      }
    }
    
    if (scrollY < 100) {
      current = 'home';
    }
    
    setActiveSection(current);
  }, [scrollY, vh]);

  return (
    <>
      <TopHeader />
      <LeftSidebar activeSection={activeSection} />
      <Hero scrollY={scrollY} vh={vh} />
      <Transition />
      <Testimonials />
      <div ref={revealRef} id="reveal">
        <Reveal scrollY={scrollY} sectionTop={revealTop} vh={vh} />
      </div>
      <Features />
      <HowItWorks />
      <Recovery />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

// Footer with EULA and Trademark Disclaimer footnote
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
          <a href="docs/">Help Docs</a>
          <a href="support/">Recover Key</a>
          <a href="#">Trial (Coming soon)</a>
          <a href="#">Buy (Coming soon)</a>
          <a href="contact/">Contact</a>
          <a href="store/?show_eula=true">EULA</a>
        </div>
        <div className="footer-meta">
          &copy; {new Date().getFullYear()} Virtue Creative Systems
        </div>
      </div>
      
      {/* Footnote EULA and Disclaimer Section */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
        
        {/* Footnote Disclaimer */}
        <p style={{ fontSize: '11px', color: 'var(--t-3)', lineHeight: '1.6', margin: 0 }}>
          <strong>Disclaimer:</strong> Third-party names, marks, and images are used for identification and comparison only. No affiliation, endorsement, sponsorship, or official association is implied. Profile names are internal only and do not claim ownership, exact emulation, or collaboration. Any described timing feel is a creative interpretation.
        </p>

      </div>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
