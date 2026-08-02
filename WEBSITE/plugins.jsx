/* global React */
// Plugin icons registry. Custom SVG vector graphics for audio effect processors
// styled with deep navy glass backing and bright sky-blue accents.

window.brushRegistry = [
  { name: 'Compressor', type: 'dynamics' },
  { name: 'Equalizer', type: 'eq' },
  { name: 'Stereo Delay', type: 'delay' },
  { name: 'Reverb Room', type: 'reverb' },
  { name: 'Chorus modulation', type: 'mod' },
  { name: 'Noise Gate', type: 'dynamics' },
  { name: 'Brickwall Limiter', type: 'dynamics' },
  { name: 'Tube Saturation', type: 'distortion' },
  { name: 'Tape Flanger', type: 'mod' },
  { name: 'De-Esser', type: 'dynamics' },
  { name: 'Multi Phaser', type: 'mod' },
  { name: 'Wavetable Synth', type: 'synth' },
  { name: 'Audio Sampler', type: 'synth' },
  { name: 'Overdrive Clip', type: 'distortion' },
  { name: 'Pitch Shifter', type: 'pitch' },
  { name: 'Resonant Filter', type: 'eq' },
  { name: 'Harmonic Exciter', type: 'distortion' },
  { name: 'Tremolo modulator', type: 'mod' },
  { name: 'Stereo Imager', type: 'utility' },
  { name: 'Transient Shaper', type: 'dynamics' }
];

window.brushAssets = window.brushRegistry.map(() => null); // Force UMD SVG fallback

const BrushIcon = React.memo(({ variant = 0, size = 84 }) => {
  const id = `plugin_${variant}`;
  const v = variant % 20;

  // Render different SVG vectors based on the variant index
  const renderPluginVector = () => {
    switch (v) {
      case 0: // Compressor: Needle Meter + Dial
        return (
          <g>
            <circle cx="50" cy="45" r="24" stroke="var(--o-dim)" strokeWidth="2.5" fill="none" opacity="0.6" strokeDasharray="100 50" transform="rotate(-150 50 45)" />
            <path d="M 50 45 L 36 28" stroke="var(--o)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="45" r="4" fill="#fff" />
            <rect x="36" y="70" width="28" height="6" rx="3" fill="var(--o-dim)" opacity="0.4" />
          </g>
        );
      case 1: // Equalizer: Frequency Grid + Curves
        return (
          <g>
            <line x1="24" y1="50" x2="76" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <line x1="50" y1="24" x2="50" y2="76" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <path d="M 24 64 Q 38 64 45 42 T 62 36 T 76 50" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="45" cy="42" r="4" fill="#fff" />
            <circle cx="62" cy="36" r="4" fill="#fff" />
          </g>
        );
      case 2: // Delay: Echo Waves
        return (
          <g>
            <circle cx="50" cy="50" r="8" fill="var(--o)" />
            <circle cx="50" cy="50" r="18" stroke="var(--o)" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="6 8" />
            <circle cx="50" cy="50" r="28" stroke="var(--o)" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 6" />
            <path d="M 50 50 L 50 32" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 3: // Reverb: Chamber Reflections Space
        return (
          <g>
            <polygon points="30,30 70,30 80,70 20,70" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
            <path d="M 32 35 L 50 65 L 68 35 L 40 50" fill="none" stroke="var(--o)" strokeWidth="2" opacity="0.6" />
            <circle cx="50" cy="65" r="4.5" fill="var(--o)" />
            <circle cx="32" cy="35" r="3" fill="#fff" />
            <circle cx="68" cy="35" r="3" fill="#fff" />
          </g>
        );
      case 4: // Chorus: Modulated Sinewaves
        return (
          <g>
            <path d="M 22 42 Q 36 28 50 42 T 78 42" fill="none" stroke="var(--o-dim)" strokeWidth="2" opacity="0.5" />
            <path d="M 22 50 Q 36 36 50 50 T 78 50" fill="none" stroke="var(--o)" strokeWidth="3" />
            <path d="M 22 58 Q 36 44 50 58 T 78 58" fill="none" stroke="var(--o-dim)" strokeWidth="2" opacity="0.5" />
          </g>
        );
      case 5: // Noise Gate: Level bar and gate line
        return (
          <g>
            <rect x="25" y="32" width="10" height="36" rx="2" fill="rgba(255,255,255,0.15)" />
            <rect x="25" y="48" width="10" height="20" rx="2" fill="var(--o)" />
            <path d="M 45 32 L 65 32 L 65 52 L 75 52" fill="none" stroke="var(--o)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="65" cy="32" r="4.5" fill="#fff" />
          </g>
        );
      case 6: // Limiter: Brickwall threshold
        return (
          <g>
            <line x1="22" y1="36" x2="78" y2="36" stroke="#fff" strokeWidth="2.5" strokeDasharray="5 4" />
            <path d="M 26 68 L 44 68 L 52 36 L 68 36 Q 74 36 78 36" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="52" cy="36" r="4" fill="var(--o)" />
          </g>
        );
      case 7: // Saturator: Harmonic distortion curve
        return (
          <g>
            <path d="M 24 74 C 40 70 42 30 76 26" fill="none" stroke="var(--o)" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="24" y1="50" x2="76" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="50" y1="24" x2="50" y2="76" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </g>
        );
      case 8: // Flanger: Phase offset sweeps
        return (
          <g>
            <path d="M 25 36 C 35 24 45 76 55 24 C 65 76 75 36 75 36" fill="none" stroke="var(--o)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="40" cy="50" r="3" fill="#fff" />
            <circle cx="60" cy="50" r="3" fill="#fff" />
          </g>
        );
      case 9: // De-Esser: Sibilance filter
        return (
          <g>
            <path d="M 25 50 L 40 50 L 50 30 L 60 50 L 75 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <path d="M 40 50 L 50 30 L 60 50" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="42" y="60" width="16" height="12" rx="2" fill="var(--o-soft)" stroke="var(--o)" strokeWidth="1.5" />
            <text x="50" y="69" textAnchor="middle" fontSize="8" fontFamily="var(--mono)" fill="#fff">S</text>
          </g>
        );
      case 10: // Phaser: Frequency sweep peaks
        return (
          <g>
            <path d="M 22 50 Q 30 20 38 50 T 54 50 T 70 50 T 78 50" fill="none" stroke="var(--o-dim)" strokeWidth="1.5" opacity="0.4" />
            <path d="M 22 50 Q 32 20 42 50 T 62 50 T 78 50" fill="none" stroke="var(--o)" strokeWidth="3.5" />
          </g>
        );
      case 11: // Wavetable Synth: Oscillator Wave + Keys
        return (
          <g>
            <rect x="24" y="24" width="52" height="26" rx="4" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.15)" />
            <path d="M 28 37 L 38 37 L 42 28 L 48 46 L 52 37 L 72 37" fill="none" stroke="var(--o)" strokeWidth="2" />
            <rect x="24" y="56" width="8" height="20" rx="1" fill="#fff" />
            <rect x="34" y="56" width="8" height="20" rx="1" fill="#fff" />
            <rect x="44" y="56" width="8" height="20" rx="1" fill="#fff" />
            <rect x="54" y="56" width="8" height="20" rx="1" fill="#fff" />
            <rect x="64" y="56" width="8" height="20" rx="1" fill="#fff" />
          </g>
        );
      case 12: // Audio Sampler: ADSR envelope + node
        return (
          <g>
            <path d="M 24 66 L 36 28 L 56 36 L 76 66" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="36" cy="28" r="4.5" fill="#fff" />
            <circle cx="56" cy="36" r="4.5" fill="#fff" />
          </g>
        );
      case 13: // Overdrive Clip: Clipped wave
        return (
          <g>
            <path d="M 24 50 L 36 50 C 40 28 44 28 48 28 L 62 28 C 66 28 70 72 74 72 L 76 72" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="22" y1="28" x2="78" y2="28" stroke="var(--o2)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="22" y1="72" x2="78" y2="72" stroke="var(--o2)" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
        );
      case 14: // Pitch Shifter: Tuning fork symbol
        return (
          <g>
            <path d="M 38 28 L 38 52 C 38 60 62 60 62 52 L 62 28" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="50" y1="55" x2="50" y2="72" stroke="var(--o)" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="50" cy="74" r="3.5" fill="#fff" />
          </g>
        );
      case 15: // Filter: Bandpass slope
        return (
          <g>
            <path d="M 22 72 L 40 72 Q 50 28 58 28 L 78 72" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="50" cy="45" r="4" fill="#fff" />
          </g>
        );
      case 16: // Harmonic Exciter: Glowing star/spoke rays
        return (
          <g>
            <path d="M 50 22 L 50 78 M 22 50 L 78 50 M 30 30 L 70 70 M 30 70 L 70 30" stroke="var(--o-dim)" strokeWidth="1.5" opacity="0.4" />
            <circle cx="50" cy="50" r="16" fill="var(--o-soft)" />
            <circle cx="50" cy="50" r="4" fill="#fff" />
          </g>
        );
      case 17: // Tremolo modulator: LFO modulation
        return (
          <g>
            <path d="M 22 50 Q 30 30 38 50 T 54 50 T 70 50 T 78 50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <circle cx="30" cy="38" r="4" fill="var(--o)" />
            <circle cx="46" cy="62" r="4" fill="var(--o)" />
            <circle cx="62" cy="38" r="4" fill="var(--o)" />
          </g>
        );
      case 18: // Stereo Imager: Phase oscilloscope vector
        return (
          <g>
            <line x1="50" y1="24" x2="50" y2="76" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="24" y1="50" x2="76" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M 32 68 L 50 50 L 68 32 M 35 35 L 50 50 L 65 65" stroke="var(--o-dim)" strokeWidth="1" opacity="0.4" />
            <path d="M 30 45 L 35 48 L 50 50 L 65 52 L 70 55" fill="none" stroke="var(--o)" strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      case 19: // Transient Shaper: Sharp transient punch
        return (
          <g>
            <path d="M 22 68 L 38 68 L 44 26 L 50 54 L 78 54" fill="none" stroke="var(--o)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="44" cy="26" r="4" fill="#fff" />
          </g>
        );
      default:
        return <circle cx="50" cy="50" r="14" fill="var(--o)" />;
    }
  };

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id={`bg_${id}`} cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#1a253c" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#070a12" />
        </radialGradient>
        <radialGradient id={`rim_${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="88%" stopColor="rgba(0,0,0,0)"/>
          <stop offset="98%" stopColor="rgba(56, 189, 248, 0.25)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </radialGradient>
        <radialGradient id={`shadow_${id}`} cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.85)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </radialGradient>
        <radialGradient id={`spec_${id}`} cx="35%" cy="25%" r="20%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)"/>
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      {/* Contact shadow */}
      <ellipse cx="50" cy="96" rx="38" ry="3.5" fill={`url(#shadow_${id})`} opacity="0.8"/>
      {/* Main glass sphere backing */}
      <circle cx="50" cy="50" r="46" fill={`url(#bg_${id})`} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Dynamic vector overlay */}
      {renderPluginVector()}
      {/* Specular highlights & rims */}
      <circle cx="50" cy="50" r="46" fill={`url(#rim_${id})`} pointerEvents="none" />
      <circle cx="50" cy="50" r="46" fill={`url(#spec_${id})`} pointerEvents="none" />
    </svg>
  );
});

// A circular SVG menu visualizer with radiating lines
const RadialMenuSVG = ({ size = 360, spokeCount = 8, brushSize = 56, scale = 1, glow = 1, variants = null }) => {
  const radius = size * 0.42;
  const spokeLen = radius - brushSize / 2 - 6;
  const items = Array.from({ length: spokeCount });
  const variantAt = (i) => (variants && variants[i] !== undefined) ? variants[i] : i;
  return (
    <div style={{
      position: 'relative',
      width: size, height: size,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
    }}>
      {/* Outer dashed guide circle */}
      <div style={{
        position: 'absolute', inset: 0,
        border: '1px dashed rgba(56, 189, 248, 0.2)',
        borderRadius: '50%',
        opacity: glow * 0.8,
      }} />
      {/* Radiating spokes */}
      {items.map((_, i) => {
        const angle = (i / spokeCount) * 360;
        return (
          <div key={`s${i}`} style={{
            position: 'absolute', left: '50%', top: '50%',
            width: 2, height: spokeLen,
            transformOrigin: 'top center',
            transform: `translate(-50%, 0) rotate(${angle + 180}deg)`,
            background: `linear-gradient(to bottom, rgba(56, 189, 248, ${0.9*glow}), transparent)`,
            filter: `drop-shadow(0 0 ${6*glow}px rgba(56, 189, 248, ${0.7*glow}))`,
          }} />
        );
      })}
      {/* Center core glowing dot */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        width: 10, height: 10, borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#38bdf8',
        boxShadow: `0 0 ${24*glow}px ${4*glow}px #38bdf8, 0 0 ${80*glow}px ${12*glow}px rgba(56, 189, 248, 0.6)`,
      }} />
      {/* Dials layout */}
      {items.map((_, i) => {
        const angle = (i / spokeCount) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x = size/2 + Math.cos(rad) * radius;
        const y = size/2 + Math.sin(rad) * radius;
        return (
          <div key={`b${i}`} style={{
            position: 'absolute', left: x, top: y,
            transform: 'translate(-50%, -50%)',
            opacity: 0.7 + 0.3 * glow,
          }}>
            <BrushIcon variant={variantAt(i)} size={brushSize} />
          </div>);
      })}
    </div>
  );
};

const PluginCard = ({ variant = 0, name = '', format = 'VST3', desc = '', style = {}, className = '', iconType = '' }) => {
  const [hover, setHover] = React.useState(false);
  const pName = name || (window.brushRegistry && window.brushRegistry[variant]?.name) || 'Plugin Processor';
  const pType = (window.brushRegistry && window.brushRegistry[variant]?.type) || 'audio';
  const pDesc = desc || `High fidelity professional ${pType} processor.`;

  const renderCardIcon = () => {
    switch (iconType) {
      case 'search':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <circle cx="11" cy="11" r="6" />
            <line x1="16" y1="16" x2="21" y2="21" strokeLinecap="round" />
          </svg>
        );
      case 'heart':
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="var(--o)" stroke="var(--o)" strokeWidth="1" style={{ width: 14, height: 14 }}>
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
          </svg>
        );
      case 'note':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="7" y1="9" x2="17" y2="9" strokeLinecap="round" />
            <line x1="7" y1="13" x2="13" y2="13" strokeLinecap="round" />
          </svg>
        );
      case 'scan':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
            <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" />
          </svg>
        );
      case 'drag':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 21H3v-6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3l-7 7" strokeLinecap="round" />
            <path d="M3 21l7-7" strokeLinecap="round" />
          </svg>
        );
      case 'firewall':
      case 'lock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" />
          </svg>
        );
      case 'tag':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--o)" strokeWidth="2.5" style={{ width: 14, height: 14 }}>
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="7" y1="7" x2="7.01" y2="7" strokeLinecap="round" strokeWidth="3" />
          </svg>
        );
      default:
        return <BrushIcon variant={variant} size={20} />;
    }
  };

  return (
    <div
      className={`floating-card ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '12px 16px',
        background: hover ? 'rgba(17, 23, 38, 0.85)' : 'rgba(17, 23, 38, 0.7)',
        backdropFilter: 'blur(10px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(10px) saturate(1.2)',
        border: hover ? '1.5px solid var(--o)' : '1px solid var(--line-strong)',
        borderRadius: '10px',
        boxShadow: hover ? '0 10px 25px rgba(56, 189, 248, 0.25)' : '0 8px 20px rgba(0, 0, 0, 0.35)',
        transform: hover ? 'scale(1.03) translateY(-2px)' : 'scale(1)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        width: '240px',
        color: 'var(--t)',
        boxSizing: 'border-box',
        ...style
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{
          width: '28px', height: '28px', display: 'grid', placeItems: 'center',
          background: 'rgba(56, 189, 248, 0.08)', borderRadius: '6px',
          border: '1px solid rgba(56, 189, 248, 0.15)'
        }}>
          {renderCardIcon()}
        </div>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '8px',
          fontWeight: 'bold',
          padding: '1px 5px',
          borderRadius: '3px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: 'var(--o)'
        }}>
          {format}
        </span>
      </div>
      <div style={{ overflow: 'hidden', width: '100%', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '12px', color: 'var(--t)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {pName}
        </div>
        <div style={{ fontSize: '9.5px', color: 'var(--t-2)', lineHeight: '1.35', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {pDesc}
        </div>
      </div>
    </div>
  );
};

window.BrushIcon = BrushIcon;
window.RadialMenuSVG = RadialMenuSVG;
window.PluginCard = PluginCard;
