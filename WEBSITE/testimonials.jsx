/* global React */
const { useState: useStateT } = React;

const TESTIMONIALS = [
  {
    id: 'simon-p',
    name: 'Simon Patterson',
    role: 'Mix Engineer & Producer',
    eyebrow: 'Production Workflow · Vocal & Drums',
    avatarInitials: 'SP',
    headline: '"VFxM has saved me hours during mix sessions. No more searching through cluttered menus."',
    body: 'I manage a plugin library of over 1,500 processors. Traditional list-searching was constantly breaking my creative momentum. With VFxM, I created custom layout boards for vocals, drums, and parallel paths. I double-click to load any chain instantly, or type a brand name to find a plugin in milliseconds. It is an absolute necessity for large REAPER projects.',
    waveSpeed: '2.5s',
    tags: ['reaper-v6', '1200+ plugins', 'favorite-boards']
  },
  {
    id: 'elena-r',
    name: 'Elena Rostova',
    role: 'Game Sound Designer',
    eyebrow: 'Sound Design · Creative FX Chains',
    avatarInitials: 'ER',
    headline: '"Filtering CLAP and JSFX formats instantly is a massive game-changer."',
    body: 'For game audio, I swap sound design processors and filters constantly. The ability to filter plugins by format (CLAP/JSFX) and isolate them by developer in one click is spectacular. The clutter firewall allows me to hide duplicate wrappers and utility DLLs so I only see what matters. It is light, fast, and integrates perfectly.',
    waveSpeed: '1.8s',
    tags: ['clap-format', 'jsfx-filters', 'clutter-firewall']
  },
  {
    id: 'dj-pantera',
    name: 'DJ Pantera',
    role: 'Electronic Music Producer',
    eyebrow: 'Live EDM Set · Preset Chains',
    avatarInitials: 'DP',
    headline: '"Searching and staging chains with custom thumbnails is pure workflow genius."',
    body: 'With over 900+ plugins, traditional search felt like digging through a landfill. VFxM\'s instant visual boards and custom images changed everything. I can map actual interface screenshots directly onto my plugin slots. When I\'m performing or doing fast mix sessions, I just look for the hardware synth layout or custom preset icon, click, and it loads in REAPER in milliseconds. It is brilliant visual organization.',
    waveSpeed: '1.4s',
    tags: ['visual-search', 'custom-thumbnails', 'edm-presets']
  },
  {
    id: 'anderson-heavy',
    name: 'Anderson Heavy',
    role: 'Metal & Rock Producer',
    eyebrow: 'Metal Tracking · Guitar Amp Presets',
    avatarInitials: 'AH',
    headline: '"Creating preset boards using actual photos of my guitar rigs makes dialling-in tone instant."',
    body: 'Tracking bands requires extreme speed to keep the band\'s energy up. I used to search through menus for amp sims and cabinet impulse response loaders, then route them. Now, I map custom thumbnails and screenshots of the actual amp heads onto my boards. I search for rock/metal, double-click, and my complete multi-FX amp routing chain is live. The visual search and graphic representation is a complete game changer.',
    waveSpeed: '2.1s',
    tags: ['amp-rigs', 'custom-images', 'preset-routing']
  }
];

const TestimonialCard = ({ artist, isActive }) => {
  return (
    <div style={{
      display: isActive ? 'grid' : 'none',
      gridTemplateColumns: '1.1fr 1.2fr',
      gap: 40,
      alignItems: 'center',
      animation: 'fadeIn 0.5s ease'
    }} className="tm-grid">
      {/* Left side: Waveform Visualizer */}
      <div style={{
        position: 'relative',
        height: 280,
        borderRadius: 16,
        background: 'rgba(11, 15, 25, 0.6)',
        border: '1px solid var(--line-strong)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
      }}>
        {/* Animated wave bars */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', height: 100, marginBottom: 24 }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const h = 20 + Math.sin(i * 0.4) * 50 + Math.cos(i * 0.2) * 20;
            return (
              <div key={i} style={{
                width: 4,
                height: `${h}%`,
                background: 'linear-gradient(to top, var(--o-dim), var(--o))',
                borderRadius: 2,
                animation: `soundwave ${artist.waveSpeed} infinite ease-in-out alternate`,
                animationDelay: `${i * 0.05}s`
              }} />
            );
          })}
        </div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: 'var(--o)', letterSpacing: '0.2em' }}>
          AUDIO WORKFLOW MONITOR
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
          {artist.tags.map((t) => (
            <span key={t} style={{
              fontFamily: 'JetBrains Mono', fontSize: 8,
              padding: '3px 8px', borderRadius: 4,
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              color: 'var(--o)'
            }}>
              #{t}
            </span>
          ))}
        </div>

        {/* Global style variables for animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes soundwave {
            0% { transform: scaleY(0.4); opacity: 0.5; }
            100% { transform: scaleY(1.1); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>

      {/* Right side: Quote details */}
      <div className="tm-content-col">
        <blockquote className="tm-quote" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.3 }}>
          {artist.headline}
        </blockquote>
        <p className="tm-body" style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--t-2)' }}>
          {artist.body}
        </p>
        <div className="tm-artist" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="tm-avatar" style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'var(--surface-2)', border: '2px solid var(--o)',
            display: 'grid', placeItems: 'center',
            fontWeight: 'bold', color: 'var(--o)', fontSize: 13, fontFamily: 'var(--mono)'
          }}>
            {artist.avatarInitials}
          </div>
          <div>
            <div className="tm-artist-name" style={{ fontSize: '15px', fontWeight: 'bold' }}>{artist.name}</div>
            <div className="tm-artist-role" style={{ fontSize: '12px', color: 'var(--t-3)' }}>{artist.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useStateT(0);
  const total = TESTIMONIALS.length;

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const next = () => setActiveIdx((i) => (i + 1) % total);

  return (
    <section className="tm-section" id="testimonials" data-screen-label="05 Reviews">
      <div className="tm-inner">
        <div className="tm-eyebrow-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', paddingBottom: 16, marginBottom: 40 }}>
          <div className="lead tm-lead" style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--o2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {TESTIMONIALS[activeIdx].eyebrow}
          </div>
          <div className="tm-pagination" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={prev} className="tm-page-btn" aria-label="Previous review" style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--t-2)' }}>
              ‹
            </button>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--t-3)' }}>
              {String(activeIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button onClick={next} className="tm-page-btn" aria-label="Next review" style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', color: 'var(--t-2)' }}>
              ›
            </button>
          </div>
        </div>

        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.id} artist={t} isActive={i === activeIdx} />
        ))}
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
