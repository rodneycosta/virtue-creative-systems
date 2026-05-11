const releaseStatus = "coming-soon";

const statusConfig = {
  "coming-soon": {
    label: "Coming soon",
    cta: "Join Release List",
  },
  beta: {
    label: "Beta",
    cta: "Request Beta Access",
  },
  available: {
    label: "Available",
    cta: "Download Now",
  },
};

const navItems = [
  ["Products", "products.html"],
  ["Virtue FX Manager", "virtue-fx-manager.html"],
  ["About", "about.html"],
  ["Support", "support.html"],
];

function setupAmbientCanvas() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "ambient-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let nodes = [];
  let pointer = { x: 0, y: 0, active: false };

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(72, Math.max(30, Math.round(width / 22)));
    nodes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: index % 7 === 0 ? 2.1 : 1.25,
      tone: index % 3,
    }));
  }

  function drawNode(node) {
    const colors = ["17, 19, 21", "178, 122, 34", "83, 132, 190"];
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${colors[node.tone]}, 0.32)`;
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      if (pointer.active) {
        const dx = pointer.x - node.x;
        const dy = pointer.y - node.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 150) {
          node.x -= dx * 0.0007;
          node.y -= dy * 0.0007;
        }
      }
    }

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 145) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(17, 19, 21, ${0.085 * (1 - distance / 145)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      drawNode(nodes[i]);
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer = { x: event.clientX, y: event.clientY, active: true };
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  resize();
  animate();
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const ctaText = releaseStatus === "available" ? "Download" : "Get Notified";
  header.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html" aria-label="Virtue Creative Systems home">
        <span class="brand-mark" aria-hidden="true">V</span>
        <span class="brand-name">Virtue Creative Systems</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button>
      <nav class="nav-links" id="primary-nav" aria-label="Primary navigation">
        ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
        <a class="button button-primary" href="downloads.html">${ctaText}</a>
      </nav>
    </div>
  `;

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="brand" href="index.html">
          <span class="brand-mark" aria-hidden="true">V</span>
          <span class="brand-name">Virtue Creative Systems</span>
        </a>
        <p>Virtue Creative Systems builds creative software for sound, visuals, scripting, and production workflows.</p>
      </div>
      <div class="footer-col">
        <h3>Products</h3>
        <a href="virtue-fx-manager.html">Virtue FX Manager</a>
        <a href="products.html">Future tools</a>
        <a href="downloads.html">Downloads</a>
      </div>
      <div class="footer-col">
        <h3>Support</h3>
        <a href="support.html">Contact</a>
        <a href="downloads.html">Release status</a>
        <a href="about.html">About</a>
      </div>
      <div class="footer-col">
        <h3>Legal</h3>
        <a href="mailto:hello@virtuecreativesystems.com">Email</a>
        <span>&copy; ${new Date().getFullYear()}</span>
      </div>
    </div>
    <p class="legal-note">REAPER is a trademark of its respective owner. Virtue FX Manager is an independent product and is not affiliated with or endorsed by Cockos Incorporated.</p>
  `;
}

function mockupMarkup() {
  return `
    <div class="mockup-chrome">
      <div class="mockup-dots" aria-hidden="true"><span></span><span></span><span></span></div>
      <span class="mockup-title">Virtue FX Manager</span>
    </div>
    <div class="mockup-body">
      <aside class="mockup-side" aria-label="Mockup categories">
        <span class="active">All FX</span>
        <span>Favorites</span>
        <span>Dynamics</span>
        <span>Delay</span>
        <span>Utility</span>
      </aside>
      <div class="mockup-main">
        <div class="search-strip">
          <span>Search effects, vendors, tags</span>
          <span class="toggle-pill"><span class="active">Grid</span><span>List</span></span>
        </div>
        <div class="plugin-grid">
          <div class="plugin-card favorite"><strong>VCS Dynamics</strong><span>Favorite · VST3 · Mix</span></div>
          <div class="plugin-card"><strong>Plate Space</strong><span>Reverb · Sound design</span></div>
          <div class="plugin-card"><strong>Clean EQ</strong><span>Equalizer · Utility</span></div>
          <div class="plugin-card"><strong>Transient Tool</strong><span>Dynamics · Editing</span></div>
          <div class="plugin-card"><strong>Tape Delay</strong><span>Delay · Creative</span></div>
          <div class="plugin-card favorite"><strong>Session Chain</strong><span>Collection · Vocal</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderMockups() {
  document.querySelectorAll("[data-mockup]").forEach((mockup) => {
    mockup.innerHTML = mockupMarkup();
  });
}

function applyReleaseStatus() {
  const config = statusConfig[releaseStatus] || statusConfig["coming-soon"];
  document.querySelectorAll("[data-release-label]").forEach((node) => {
    node.textContent = config.label;
  });
  document.querySelectorAll("[data-release-cta]").forEach((node) => {
    node.textContent = config.cta;
  });
}

function setupNewsletterForms() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector("[data-form-note]");
      if (note) {
        note.textContent = "Thanks. This form is a placeholder until a release-list backend is connected.";
      }
      form.reset();
    });
  });
}

function setupReveals() {
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  reveals.forEach((node) => observer.observe(node));
}

setupAmbientCanvas();
renderHeader();
renderFooter();
renderMockups();
applyReleaseStatus();
setupNewsletterForms();
setupReveals();

// Newsletter integration point:
// Replace the placeholder submit handler above with Buttondown, Mailchimp,
// ConvertKit, Supabase, or a custom API endpoint when the release list is ready.
