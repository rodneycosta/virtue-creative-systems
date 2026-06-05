let releaseStatus = "store-setup";

let commerceConfig = {
  provider: "lemonsqueezy",
  mode: "setup",
  checkoutUrl: "",
  checkoutApiUrl: "",
  supportEmail: "hello@virtuecreativesystems.com",
  variants: [
    {
      key: "commercial",
      name: "Commercial License",
      price: "Price pending",
      seats: "2 activations included",
      checkoutUrl: "",
    },
    {
      key: "nfr",
      name: "Creator / NFR License",
      price: "Price pending",
      seats: "By approval",
      checkoutUrl: "",
    },
  ],
};

let downloadConfig = {
  status: "pending",
  url: "",
  version: "Pending",
  channel: "stable",
  platform: "Pending tested artifact",
  fileName: "Published with release",
  releaseDate: "Published with release",
  sha256: "Published with release",
};

const statusConfig = {
  "early-access": {
    label: "Early access coming soon",
    cta: "Get Early Access",
  },
  "store-setup": {
    label: "Store setup pending",
    cta: "Store Setup Pending",
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
  ["Home", "index.html"],
  ["Buy / Try", "store/virtue-fx-manager/"],
  ["Download", "download/vfxm/"],
  ["Help", "docs/"],
  ["Support", "support/"],
];

function siteRoot() {
  return document.body?.dataset.siteRoot || "";
}

function sitePath(path) {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  return `${siteRoot()}${path}`;
}

function isCheckoutConfigured() {
  return commerceConfig.mode === "live" && (commerceConfig.checkoutUrl.startsWith("https://") || commerceConfig.checkoutApiUrl.startsWith("https://"));
}

function commerceVariant(key) {
  return commerceConfig.variants.find((variant) => variant.key === key) || commerceConfig.variants[0];
}

function checkoutHref(variantKey = "commercial") {
  const variant = commerceVariant(variantKey);
  if (variant?.checkoutUrl?.startsWith("https://")) return variant.checkoutUrl;
  if (isCheckoutConfigured() && commerceConfig.checkoutUrl.startsWith("https://")) return commerceConfig.checkoutUrl;
  if (isCheckoutConfigured() && commerceConfig.checkoutApiUrl.startsWith("https://")) return sitePath("store/virtue-fx-manager/#checkout");
  return sitePath("store/virtue-fx-manager/#store-setup");
}

function isDownloadConfigured() {
  return downloadConfig.status === "available" && downloadConfig.url.startsWith("https://");
}

function applySiteConfig(config) {
  if (!config || typeof config !== "object") return;

  if (config.releaseStatus) releaseStatus = config.releaseStatus;
  if (config.commerce && typeof config.commerce === "object") {
    commerceConfig = { ...commerceConfig, ...config.commerce };
  }
  if (config.download && typeof config.download === "object") {
    downloadConfig = { ...downloadConfig, ...config.download };
  }

  renderHeader();
  renderFooter();
  applyTheme(getSavedTheme());
  renderMockups();
  applyReleaseStatus();
  setupCommerceLinks();
  setupDownloadInfo();
  window.VirtueI18n?.apply?.();
}

async function loadSiteConfig() {
  try {
    const response = await fetch(sitePath("site-config.json"), { cache: "no-store" });
    if (!response.ok) return;
    applySiteConfig(await response.json());
  } catch {
    // The static site can run without generated public config.
  }
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

    const count = Math.min(60, Math.max(30, Math.round(width / 30)));
    notes = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * (width + 360) - 180,
      lane: index % 7,
      phase: Math.random() * Math.PI * 2,
      speed: 0.32 + Math.random() * 0.42,
      amplitude: 18 + Math.random() * 38,
      size: index % 9 === 0 ? 76 : 44 + Math.random() * 16,
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
      ctx.strokeStyle = `rgba(37, 99, 235, ${lane % 2 === 0 ? 0.038 : 0.026})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function drawNote(note) {
    const colors = ["15, 23, 42", "59, 130, 246", "37, 99, 235", "71, 85, 105"];
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
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.11 * (1 - distance / 165)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      drawNote(note);
    }

    if (pointer.active) {
      const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 230);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.18)");
      glow.addColorStop(0.45, "rgba(37, 99, 235, 0.065)");
      glow.addColorStop(1, "rgba(59, 130, 246, 0)");
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

  const navCtaText = isCheckoutConfigured() ? "Buy VFxM" : "Store Setup";
  const navCtaHref = checkoutHref("commercial");
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
        <a href="${sitePath("store/")}">Store</a>
        <a href="${sitePath("download/vfxm/")}">Downloads</a>
      </div>
      <div class="footer-col">
        <h3>Support</h3>
        <a href="${sitePath("support/")}">Contact</a>
        <a href="${sitePath("docs/")}">Help</a>
        <a href="${sitePath("docs/#installation-launching")}">Installation Guide</a>
        <a href="${sitePath("download/vfxm/")}">Release status</a>
      </div>
      <div class="footer-col">
        <h3>Legal</h3>
        <a href="${sitePath("legal/terms/")}">Terms</a>
        <a href="${sitePath("legal/privacy/")}">Privacy</a>
        <a href="${sitePath("legal/refund-policy/")}">Refunds</a>
        <a href="mailto:${commerceConfig.supportEmail}">Email</a>
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
    <figure class="plugin-image-frame">
      <img
        src="${sitePath("virtue-fx-manager-fictional-ui.png")}"
        alt="Fictional Virtue FX Manager interface showing thumbnails, plugin ratings, a browser list, and filter panels"
      />
      <figcaption class="media-caption">
        Fictional VFxM marketing image. Names and artwork are invented for demonstration; no third-party plugin screenshots, logos, or branding are included.
      </figcaption>
    </figure>
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

function setupCommerceLinks() {
  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    const variantKey = link.dataset.variant || "commercial";
    const variant = commerceVariant(variantKey);
    const liveLabel = link.dataset.liveLabel || "Buy Virtue FX Manager";
    const setupLabel = link.dataset.setupLabel || "Store setup pending";
    const hasVariantCheckout = Boolean(variant?.checkoutUrl?.startsWith("https://"));
    const hasApiCheckout = Boolean(commerceConfig.checkoutApiUrl?.startsWith("https://"));
    const ready = commerceConfig.mode === "live" && (hasVariantCheckout || hasApiCheckout || commerceConfig.checkoutUrl.startsWith("https://"));
    link.setAttribute("href", ready ? checkoutHref(variantKey) : sitePath("store/virtue-fx-manager/#store-setup"));
    link.textContent = isCheckoutConfigured() ? liveLabel : setupLabel;
    link.classList.toggle("is-setup-pending", !ready);
    link.setAttribute("aria-label", ready ? liveLabel : "Store setup is pending. No payment is processed here yet.");
    if (!link.dataset.checkoutBound) {
      link.dataset.checkoutBound = "true";
      link.addEventListener("click", async (event) => {
        const currentVariantKey = link.dataset.variant || "commercial";
        const currentVariant = commerceVariant(currentVariantKey);
        const canCreateCheckout = commerceConfig.mode === "live" && commerceConfig.checkoutApiUrl?.startsWith("https://") && !currentVariant?.checkoutUrl?.startsWith("https://") && !commerceConfig.checkoutUrl.startsWith("https://");
        if (!canCreateCheckout) return;
        event.preventDefault();
        link.textContent = "Opening checkout...";
        link.setAttribute("aria-busy", "true");
        try {
          const response = await fetch(commerceConfig.checkoutApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ product: "vfxm", variant: currentVariantKey }),
          });
          const payload = await response.json();
          if (!response.ok || !payload.checkout_url) throw new Error(payload.message || "Checkout unavailable");
          window.location.assign(payload.checkout_url);
        } catch {
          link.textContent = "Checkout unavailable";
          link.classList.add("is-setup-pending");
        } finally {
          link.removeAttribute("aria-busy");
        }
      });
    }
  });

  document.querySelectorAll("[data-store-mode]").forEach((node) => {
    node.textContent = isCheckoutConfigured() ? "Checkout ready" : "Store setup pending";
  });

  document.querySelectorAll("[data-variant-name]").forEach((node) => {
    node.textContent = commerceVariant(node.dataset.variantName)?.name || "Virtue FX Manager";
  });
  document.querySelectorAll("[data-variant-price]").forEach((node) => {
    node.textContent = commerceVariant(node.dataset.variantPrice)?.price || "Price pending";
  });
  document.querySelectorAll("[data-variant-seats]").forEach((node) => {
    node.textContent = commerceVariant(node.dataset.variantSeats)?.seats || "Activation policy pending";
  });
}

function setupDownloadInfo() {
  const statusLabel = isDownloadConfigured() ? "Latest release available" : "No public release artifact yet";
  document.querySelectorAll("[data-download-status]").forEach((node) => {
    node.textContent = statusLabel;
  });
  document.querySelectorAll("[data-download-version]").forEach((node) => {
    node.textContent = downloadConfig.version || "Pending";
  });
  document.querySelectorAll("[data-download-channel]").forEach((node) => {
    node.textContent = downloadConfig.channel || "stable";
  });
  document.querySelectorAll("[data-download-platform]").forEach((node) => {
    node.textContent = downloadConfig.platform || "Pending tested artifact";
  });
  document.querySelectorAll("[data-download-file]").forEach((node) => {
    node.textContent = downloadConfig.fileName || "Published with release";
  });
  document.querySelectorAll("[data-download-date]").forEach((node) => {
    node.textContent = downloadConfig.releaseDate || "Published with release";
  });
  document.querySelectorAll("[data-download-sha]").forEach((node) => {
    node.textContent = downloadConfig.sha256 || "Published with release";
  });
  document.querySelectorAll("[data-download-link]").forEach((link) => {
    const platform = link.dataset.downloadLink || "mac";
    let url = downloadConfig.url;
    if (platform === "win" && url) {
      url = url.replace("vfxm-mac.pkg", "vfxm-win.exe").replace("vfxm-mac.dmg", "vfxm-win.exe");
    }
    const ready = isDownloadConfigured() && url;
    link.setAttribute("href", ready ? url : sitePath("download/vfxm/#release-pending"));
    link.textContent = ready ? (platform === "mac" ? "Download for macOS" : "Download for Windows") : `Download for ${platform === "mac" ? "macOS" : "Windows"} pending`;
    link.classList.toggle("is-setup-pending", !ready);
    link.setAttribute("aria-label", ready ? `Download latest Virtue FX Manager release for ${platform === "mac" ? "macOS" : "Windows"}` : `Download for ${platform === "mac" ? "macOS" : "Windows"} is pending.`);
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

function setupRecoverForms() {
  document.querySelectorAll("[data-recover-form]").forEach((container) => {
    const input = container.querySelector("#recover-email");
    const button = container.querySelector("[data-recover-submit]");
    const note = container.querySelector("[data-recover-note]");
    if (!input || !note || !button) return;

    const performSubmit = async () => {
      const email = input.value.trim();
      if (!email) return;
      if (!email.includes("@")) {
        note.style.color = "#dc2626";
        note.textContent = "Please enter a valid email address.";
        return;
      }

      button.disabled = true;
      button.textContent = "Sending...";
      note.textContent = "";

      const apiUrl = "https://virtue-licensing-service.virtuecreativesystems.workers.dev/v1/license/recover";

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          note.style.color = "var(--ink)";
          note.textContent = data.message || "Recovery email sent successfully.";
          input.value = "";
        } else {
          note.style.color = "#dc2626";
          note.textContent = data.error || data.message || "Failed to request recovery. Please try again.";
        }
      } catch (err) {
        note.style.color = "#dc2626";
        note.textContent = "Network error. Please try again later.";
      } finally {
        button.disabled = false;
        button.textContent = "Send Recovery Email";
      }
    };

    button.addEventListener("click", performSubmit);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        performSubmit();
      }
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
setupCommerceLinks();
setupDownloadInfo();
setupThemeToggle();
setupNewsletterForms();
setupRecoverForms();
setupReveals();
window.VirtueI18n?.apply();
loadSiteConfig();

// Newsletter integration point:
// Replace the placeholder submit handler above with Buttondown, Mailchimp,
// ConvertKit, Supabase, or a custom API endpoint when release-list signup is ready.
