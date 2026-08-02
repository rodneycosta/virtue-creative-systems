/* global React */
const { useRef } = React;

const Hero = ({ scrollY, vh }) => {
  const ref = useRef(null);
  const heroEnd = vh * 0.9;
  const p = Math.max(0, Math.min(1, scrollY / heroEnd));

  // Scroll dynamics: content moves and fades
  const contentOpacity = 1 - Math.min(1, p * 1.8);
  const contentY = -p * 60;

  return (
    <section className="hero-wrap" ref={ref} style={{ minHeight: '80vh', padding: '120px 4% 40px 4%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background styling glows */}
      <div className="hero-bg-vignette" />
      <div className="hero-grid" />

      <div className="hero-layout" style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Centered Copy */}
        <div className="hero-content" style={{ opacity: contentOpacity, transform: `translateY(${contentY}px)` }}>
          <div className="hero-tagline-top">Creative session optimizer for Cockos REAPER</div>
          <h1 className="hero-h1">
            VFx<span className="z">Manager</span>
          </h1>
          <p className="hero-sub">
            Say goodbye to text-only menu hunting. Scan your plugins, organize favorites, write notes, and load tracks in milliseconds.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <a href="#" className="btn-primary" style={{ pointerEvents: 'none', opacity: 0.8 }}>
              Coming soon
            </a>
            <a href="#demo" className="btn-ghost">
              <PlayIcon /> Watch overview
            </a>
          </div>
          <div className="hero-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <span><span className="check">✓</span> macOS &amp; Windows</span>
            <span className="sep" />
            <span><span className="check">✓</span> Trial (Coming soon)</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator hint */}
      <div className="hero-scroll-hint" style={{ opacity: contentOpacity }}>
        <span>Scroll to explore</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="scroll-arrow" style={{ width: 22, height: 22, marginTop: 4 }}>
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginRight: 6 }}>
    <path d="M2 1.5 L10 6 L2 10.5 Z" fill="currentColor" />
  </svg>
);

window.Hero = Hero;
