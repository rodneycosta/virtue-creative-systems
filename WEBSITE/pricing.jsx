/* global React */
const { useState: useStateP, useEffect: useEffectP } = React;

const LICENCE_TERMS_URL = 'docs/#installation-launching';
const CONTACT_EMAIL = 'support@virtuecreativesystems.com';

const VARIANTS = [
  {
    id: 'commercial',
    title: 'Commercial License',
    priceWhole: '29',
    seats: '2 concurrent activations included',
    checkoutUrl: 'https://buy.polar.sh/polar_cl_R8BMXvN2z3phPfKgNjMDO7MTg2iQClUVVc7Wc3MuoXQ',
    features: [
      'Visual thumbnail grid, triggered in-app',
      'Unlimited custom layout boards',
      'Millisecond search & multi-column filtering',
      'Background scanning engine with crash blocklisting',
      'DAW track drag-and-drop creation',
      'Mac (Intel & Apple Silicon) & Windows support'
    ]
  },
  {
    id: 'creator',
    title: 'Creator / NFR License',
    priceWhole: null,
    seats: 'By approval (Content creators / Beta testers)',
    checkoutUrl: null,
    features: [
      'Visual thumbnail grid, triggered in-app',
      'Unlimited custom layout boards',
      'All commercial features included',
      'Requires social link or beta verification'
    ],
    isCreator: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise License',
    priceWhole: null,
    seats: '15+ seats · Custom deployment volume',
    checkoutUrl: null,
    features: [
      'Visual thumbnail grid, triggered in-app',
      'Unlimited custom layout boards',
      'Dedicated support channel',
      'Flexible license migration management'
    ],
    isEnterprise: true
  }
];

const Pricing = () => {
  const [selectedIdx, setSelectedIdx] = useStateP(0);

  const selected = VARIANTS[selectedIdx] || VARIANTS[0];
  const isEnterprise = !!selected.isEnterprise;
  const isCreator = !!selected.isCreator;

  return (
    <section className="pricing-wrap" id="pricing" data-screen-label="07 Pricing">
      <div className="section-head section-head--centered" style={{ textAlign: 'center', marginBottom: 50 }}>
        <div>
          <div className="lead">Licensing Plans</div>
          <h2 style={{ textTransform: 'none' }}>One payment. <span className="it" style={{ textTransform: 'none' }}>No monthly subscriptions.</span></h2>
        </div>
      </div>

      <div className="pricing-card">
        <h2>VFxM</h2>
        <div className="sub">Virtue plugin manager for Cockos REAPER</div>



        {/* Price Output */}
        <div className="price-row">
          {isEnterprise ?
            <span className="price-enterprise">Custom Pricing</span> :
            isCreator ?
            <span className="price-enterprise">Free / Review</span> :
            selected.priceWhole ?
            <>
              <span style={{ textDecoration: 'line-through', opacity: 0.35, marginRight: '14px', color: 'var(--t)', fontSize: '32px', fontWeight: '700' }}>$79</span>
              <span className="price-cur">$</span>
              <span className="price">{selected.priceWhole}</span>
              <span className="price-currency">USD</span>
            </> :
            <span className="price-enterprise">—</span>
          }
        </div>
        <div className="price-note">{selected.seats}</div>

        {/* Features Checklist */}
        <ul className="pricing-feats">
          {selected.features.map((f, i) => (
            <li key={i}><span className="ck">✓</span> {f}</li>
          ))}
        </ul>

        {/* Action Button */}
        {isEnterprise ?
          <a href={`mailto:${CONTACT_EMAIL}?subject=VFxM%20Enterprise%20License%20Enquiry`} className="btn-primary pricing-cta">
            Contact Enterprise Support
            <span className="price-tag">15+ seats</span>
          </a> :
          isCreator ?
          <a href={`mailto:${CONTACT_EMAIL}?subject=VFxM%20Creator/NFR%20License%20Application`} className="btn-primary pricing-cta">
            Apply for NFR License
            <span className="price-tag">NFR</span>
          </a> :
          <a
            href="store/"
            className="btn-primary pricing-cta">
            Buy License
            <span className="price-tag">${selected.priceWhole} USD</span>
          </a>
        }

        <div className="pricing-foot" style={{ marginTop: 16 }}>WINDOWS & macOS</div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const items = [
    {
      q: 'Which Cockos REAPER versions are supported?',
      a: 'VFxM supports REAPER v6.0 and above. It runs as a native extensions module, seamlessly communicating with REAPER’s internal project models.'
    },
    {
      q: 'Does VFxM support third-party audio plugin formats?',
      a: 'Yes. It automatically scans and displays thumbnails for VST, VST3, Audio Units (AU), CLAP, and JSFX. Both instruments and effect processors are supported.'
    },
    {
      q: 'Does it support Apple Silicon (M1/M2/M3) Macs?',
      a: 'Absolutely. VFxM is recommended and tested on macOS Tahoe and Windows 11. It might work on earlier systems natively for Apple Silicon and Intel, but I recommend testing it before buying with the 10-day trial version.'
    },
    {
      q: 'How does the background thumbnail scanner work?',
      a: 'The scanner opens each plugin on a temporary hidden track, captures its graphical interface, and crops it to build a visual grid card. If an unstable plugin crashes, VFxM automatically blocklists it and resumes scanning, preventing DAW locks.'
    },
    {
      q: 'How many computers can I install a single license on?',
      a: 'The Commercial License includes 2 concurrent activations, allowing you to use VFxM on your studio workstation and your mobile laptop simultaneously.'
    },
    {
      q: 'Do I need a continuous internet connection?',
      a: 'No. VFxM only needs an internet connection during the initial license key activation. Once activated, the licensing system functions entirely offline.'
    }
  ];

  const [open, setOpen] = useStateP(0);

  return (
    <section className="faq-wrap" id="faq" data-screen-label="08 FAQ">
      <div className="section-head section-head--centered faq-head" style={{ textAlign: 'center', marginBottom: 50 }}>
        <div>
          <div className="lead">FAQ</div>
          <h2>Frequently <span className="it" style={{ color: 'var(--o)' }}>Asked Questions</span></h2>
        </div>
      </div>

      <div className="faq-list">
        {items.map((it, i) =>
          <div
            key={i}
            className="faq-item"
            data-open={open === i ? 'true' : 'false'}
            onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="faq-q">
              <span>{it.q}</span>
              <span className="icon">+</span>
            </div>
            <div className="faq-a">{it.a}</div>
          </div>
        )}
      </div>

      <p className="faq-guide-link">
        Need assistance?{' '}
        <a href="contact/">
          Contact support →
        </a>
      </p>
    </section>
  );
};

window.Pricing = Pricing;
window.FAQ = FAQ;
