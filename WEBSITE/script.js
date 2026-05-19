const releaseStatus = "early-access";

const statusConfig = {
  "early-access": {
    label: "Early access coming soon",
    cta: "Get Early Access",
  },
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
  ["Virtue FX Manager", "products/virtue-fx-manager/"],
  ["Store", "store.html"],
  ["Support", "support.html"],
];

function siteRoot() {
  return document.body?.dataset.siteRoot || "";
}

function sitePath(path) {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  return `${siteRoot()}${path}`;
}

function getSavedTheme() {
  return window.localStorage.getItem("virtue-theme") || "light";
}

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = resolvedTheme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const isDark = resolvedTheme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    const label = button.querySelector("[data-theme-label]");
    if (label) label.textContent = isDark ? "Light mode" : "Dark mode";
  });
}

function setupThemeToggle() {
  applyTheme(getSavedTheme());
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("virtue-theme", nextTheme);
    applyTheme(nextTheme);
    window.VirtueI18n?.apply?.();
  });
}

function setupAmbientCanvas() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "ambient-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let notes = [];
  let pointer = { x: 0, y: 0, tx: 0, ty: 0, px: 0, py: 0, vx: 0, vy: 0, active: false };
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

    const count = Math.min(120, Math.max(58, Math.round(width / 13)));
    notes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * (width + 360) - 180,
      lane: index % 7,
      phase: Math.random() * Math.PI * 2,
      speed: 0.32 + Math.random() * 0.42,
      amplitude: 18 + Math.random() * 38,
      size: index % 9 === 0 ? 19 : 12 + Math.random() * 5,
      tone: index % 4,
      symbol: ["♪", "♫", "♩", "♬", "♭", "♮"][index % 6],
      rotation: (Math.random() - 0.5) * 0.22,
      offset: Math.random() * 90,
      wakeX: 0,
      wakeY: 0,
    }));
  }

  function laneY(lane, x, phase) {
    const riverTop = height * 0.13;
    const riverBottom = height * 0.88;
    const laneCount = 7;
    const base = riverTop + ((riverBottom - riverTop) / (laneCount - 1)) * lane;
    const diagonal = (x / Math.max(width, 1) - 0.5) * height * 0.13;
    const wave = Math.sin(x * 0.006 + time * 1.35 + phase) * 26;
    return base + diagonal + wave;
  }

  function drawCurrentLines() {
    for (let lane = 0; lane < 7; lane += 1) {
      ctx.beginPath();
      for (let step = -80; step <= width + 80; step += 48) {
        const y = laneY(lane, step, lane * 0.7);
        if (step === -80) ctx.moveTo(step, y);
        else ctx.lineTo(step, y);
      }
      ctx.strokeStyle = `rgba(0, 99, 92, ${lane % 2 === 0 ? 0.038 : 0.026})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function drawNote(note) {
    const colors = ["8, 33, 32", "0, 190, 178", "42, 151, 214", "76, 108, 105"];
    ctx.save();
    ctx.translate(note.x, note.y);
    ctx.rotate(note.rotation + Math.sin(time * 1.8 + note.phase) * 0.12);
    ctx.fillStyle = `rgba(${colors[note.tone]}, ${note.alpha})`;
    ctx.font = `800 ${note.size}px Inter, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(note.symbol, 0, 0);
    ctx.restore();
  }

  function animate() {
    time += 0.01;
    pointer.px = pointer.x;
    pointer.py = pointer.y;
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;
    pointer.vx += (pointer.x - pointer.px - pointer.vx) * 0.18;
    pointer.vy += (pointer.y - pointer.py - pointer.vy) * 0.18;

    ctx.clearRect(0, 0, width, height);
    drawCurrentLines();

    for (const note of notes) {
      note.x += note.speed * (width < 700 ? 1.35 : 1);
      if (note.x > width + 90) {
        note.x = -90 - Math.random() * 220;
        note.lane = Math.floor(Math.random() * 7);
        note.phase = Math.random() * Math.PI * 2;
        note.offset = Math.random() * 90;
      }

      const baseY = laneY(note.lane, note.x + note.offset, note.phase);
      note.wakeX *= 0.9;
      note.wakeY *= 0.9;

      if (pointer.active) {
        const dx = note.x - pointer.x;
        const dy = baseY + note.wakeY - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / 190);
        if (influence > 0) {
          const angle = Math.atan2(dy, dx);
          const currentPull = Math.min(9, Math.hypot(pointer.vx, pointer.vy) * 0.7);
          note.wakeX += Math.cos(angle) * influence * 4 + pointer.vx * influence * 0.95;
          note.wakeY += Math.sin(angle) * influence * 18 + pointer.vy * influence * 0.95;
          note.rotation += influence * 0.018 + currentPull * 0.002;
        }
      }

      note.y = baseY + Math.sin(time * 2.2 + note.phase) * note.amplitude * 0.18 + note.wakeY;
      note.x += note.wakeX * 0.08;
      note.alpha = 0.12 + Math.sin(time + note.phase) * 0.04 + (note.tone === 1 ? 0.18 : 0.08);
    }

    for (const note of notes) {
      if (pointer.active) {
        const distance = Math.hypot(pointer.x - note.x, pointer.y - note.y);
        if (distance < 165) {
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.quadraticCurveTo(
            (pointer.x + note.x) / 2 + pointer.vy * 0.2,
            (pointer.y + note.y) / 2 - pointer.vx * 0.2,
            note.x,
            note.y,
          );
          ctx.strokeStyle = `rgba(0, 190, 178, ${0.11 * (1 - distance / 165)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      drawNote(note);
    }

    if (pointer.active) {
      const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 230);
      glow.addColorStop(0, "rgba(0, 190, 178, 0.18)");
      glow.addColorStop(0.45, "rgba(42, 151, 214, 0.065)");
      glow.addColorStop(1, "rgba(0, 190, 178, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 230, 0, Math.PI * 2);
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

  const navCtaText = releaseStatus === "available" ? "Download" : "Get Early Access";
  const navCtaHref = releaseStatus === "available" ? "store.html" : "store.html#early-access";
  header.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="${sitePath("index.html")}" aria-label="Virtue Creative Systems home">
        <span class="brand-mark" aria-hidden="true">V</span>
        <span class="brand-name">Virtue Creative Systems</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">Menu</button>
      <nav class="nav-links" id="primary-nav" aria-label="Primary navigation">
        ${navItems.map(([label, href]) => `<a href="${sitePath(href)}">${label}</a>`).join("")}
        <a class="button button-primary" href="${sitePath(navCtaHref)}">${navCtaText}</a>
        <div class="nav-tools">
          <label class="language-control">
            <span class="sr-only">Language</span>
            <select data-language-select aria-label="Language">
              ${window.VirtueI18n ? window.VirtueI18n.languageOptions() : '<option value="en">English</option>'}
            </select>
          </label>
          <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to dark mode" aria-pressed="false">
            <span class="lamp-icon" aria-hidden="true"></span>
            <span class="sr-only" data-theme-label>Dark mode</span>
          </button>
        </div>
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
        <a class="brand" href="${sitePath("index.html")}">
          <span class="brand-mark" aria-hidden="true">V</span>
          <span class="brand-name">Virtue Creative Systems</span>
        </a>
        <p>Virtue Creative Systems builds focused creative software, starting with a native plugin manager for REAPER users.</p>
      </div>
      <div class="footer-col">
        <h3>Products</h3>
        <a href="${sitePath("products/virtue-fx-manager/")}">Virtue FX Manager</a>
        <a href="${sitePath("store.html")}">Store</a>
        <a href="${sitePath("downloads.html")}">Downloads</a>
      </div>
      <div class="footer-col">
        <h3>Support</h3>
        <a href="${sitePath("support.html")}">Contact</a>
        <a href="${sitePath("store.html#licensing")}">License status</a>
        <a href="${sitePath("downloads.html")}">Release status</a>
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
        src="${sitePath("virtue-fx-manager-screenshot.png")}"
        alt="Virtue FX Manager native REAPER plugin manager interface with thumbnails, plugin list, and filter panels"
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
        note.textContent = window.VirtueI18n
          ? window.VirtueI18n.t("Thanks. This form is a placeholder until a release-list backend is connected.")
          : "Thanks. This form is a placeholder until a release-list backend is connected.";
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

applyTheme(getSavedTheme());
setupAmbientCanvas();
renderHeader();
renderFooter();
renderMockups();
applyReleaseStatus();
setupThemeToggle();
setupNewsletterForms();
setupReveals();
window.VirtueI18n?.apply();

// Newsletter integration point:
// Replace the placeholder submit handler above with Buttondown, Mailchimp,
// ConvertKit, Supabase, or a custom API endpoint when early access signup is ready.
