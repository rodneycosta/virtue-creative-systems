const releaseStatus = "development";

const statusConfig = {
  development: {
    label: "In development",
    cta: "Join Development List",
  },
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
  let particles = [];
  let pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false };
  let time = 0;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(58, Math.max(28, Math.round(width / 24)));
    particles = Array.from({ length: count }, (_, index) => ({
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      x: Math.random() * width,
      y: Math.random() * height,
      phase: Math.random() * Math.PI * 2,
      speed: 0.55 + Math.random() * 0.65,
      drift: 18 + Math.random() * 42,
      size: index % 8 === 0 ? 18 : 13 + Math.random() * 4,
      tone: index % 4,
      symbol: ["♪", "♫", "♩", "♬"][index % 4],
      rotation: (Math.random() - 0.5) * 0.34,
    }));
  }

  function drawParticle(particle) {
    const colors = ["8, 33, 32", "0, 190, 178", "42, 151, 214", "76, 108, 105"];
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation + Math.sin(time + particle.phase) * 0.08);
    ctx.fillStyle = `rgba(${colors[particle.tone]}, 0.34)`;
    ctx.font = `700 ${particle.size}px Inter, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(particle.symbol, 0, 0);
    ctx.restore();
  }

  function animate() {
    time += 0.006;
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;

    ctx.clearRect(0, 0, width, height);

    for (const particle of particles) {
      const waveX = Math.cos(time * particle.speed + particle.phase) * particle.drift;
      const waveY = Math.sin(time * particle.speed * 0.82 + particle.phase) * particle.drift * 0.56;
      let targetX = particle.baseX + waveX;
      let targetY = particle.baseY + waveY;

      if (pointer.active) {
        const dx = pointer.x - targetX;
        const dy = pointer.y - targetY;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / 260);
        targetX += dx * influence * 0.34;
        targetY += dy * influence * 0.34;
      }

      particle.x += (targetX - particle.x) * 0.08;
      particle.y += (targetY - particle.y) * 0.08;
    }

    for (let i = 0; i < particles.length; i += 1) {
      const particle = particles[i];
      const next = particles[(i + 1) % particles.length];
      if (i % 2 === 0) {
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
        if (distance < 210) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.quadraticCurveTo(
            (particle.x + next.x) / 2,
            (particle.y + next.y) / 2 + Math.sin(time + i) * 12,
            next.x,
            next.y,
          );
          ctx.strokeStyle = `rgba(17, 19, 21, ${0.045 * (1 - distance / 210)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (pointer.active) {
        const distance = Math.hypot(pointer.x - particle.x, pointer.y - particle.y);
        if (distance < 220) {
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = `rgba(0, 190, 178, ${0.12 * (1 - distance / 220)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      drawParticle(particle);
    }

    if (pointer.active) {
      const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 210);
      glow.addColorStop(0, "rgba(0, 190, 178, 0.16)");
      glow.addColorStop(0.42, "rgba(42, 151, 214, 0.055)");
      glow.addColorStop(1, "rgba(0, 190, 178, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 210, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.tx = event.clientX;
    pointer.ty = event.clientY;
    if (!pointer.active) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }
    pointer.active = true;
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
    <div class="plugin-image-frame">
      <img
        src="virtue-fx-manager-screenshot.png"
        alt="Virtue FX Manager development interface with thumbnail manager, FX list, and filter panels"
      />
    </div>
  `;
}

function renderMockups() {
  document.querySelectorAll("[data-mockup]").forEach((mockup) => {
    mockup.innerHTML = mockupMarkup();
  });
}

function applyReleaseStatus() {
  const config = statusConfig[releaseStatus] || statusConfig.development;
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
