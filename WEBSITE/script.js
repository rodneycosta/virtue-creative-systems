let releaseStatus = "store-setup";

let commerceConfig = {
  provider: "polar",
  mode: "setup",
  checkoutUrl: "",
  checkoutApiUrl: "",
  supportEmail: "virtuecreativesystems@gmail.com",
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
  return window.localStorage.getItem("virtue-theme") || "dark";
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
  let mouseX = window.innerWidth / 2;
  let mouseY = 250;

  function updateMouseVariables(x, y) {
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  }

  updateMouseVariables(mouseX, mouseY);

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateMouseVariables(mouseX, mouseY);
  });

  return; // Bypass WebGL/2D notes canvas simulation completely

  const container = document.body;

  // Create WebGL canvas for fluid simulation
  const canvasWebgl = document.createElement("canvas");
  canvasWebgl.className = "ambient-canvas ambient-canvas-webgl";
  canvasWebgl.setAttribute("aria-hidden", "true");
  container.prepend(canvasWebgl);

  // Create 2D canvas for notes
  const canvasNotes = document.createElement("canvas");
  canvasNotes.className = "ambient-canvas ambient-canvas-notes";
  canvasNotes.setAttribute("aria-hidden", "true");
  container.insertBefore(canvasNotes, canvasWebgl.nextSibling);

  const ctxNotes = canvasNotes.getContext("2d");

  // Pointer tracking variables
  let pointer = { x: 0, y: 0, tx: 0, ty: 0, px: 0, py: 0, vx: 0, vy: 0, active: false };
  let animationFrameId = null;
  let lastMoveTime = Date.now();
  let lastTickTime = Date.now();
  let width = 0;
  let height = 0;
  const SPACING = 55;
  const notes = [];

  // Theme colors
  let accent = { r: 37, g: 99, b: 235 };
  let cyan = { r: 59, g: 130, b: 246 };

  function parseHexOrRgb(colorStr) {
    if (!colorStr) return null;
    const clean = colorStr.trim();
    if (clean.startsWith("#")) {
      const hex = clean.substring(1);
      if (hex.length === 3) {
        return {
          r: parseInt(hex[0] + hex[0], 16),
          g: parseInt(hex[1] + hex[1], 16),
          b: parseInt(hex[2] + hex[2], 16)
        };
      } else if (hex.length === 6) {
        return {
          r: parseInt(clean.substring(1, 3), 16),
          g: parseInt(clean.substring(3, 5), 16),
          b: parseInt(clean.substring(5, 7), 16)
        };
      }
    }
    const match = clean.match(/\d+/g);
    if (match && match.length >= 3) {
      return { r: parseInt(match[0]), g: parseInt(match[1]), b: parseInt(match[2]) };
    }
    return null;
  }

  function updateThemeColors() {
    const style = getComputedStyle(document.documentElement);
    const parsedAccent = parseHexOrRgb(style.getPropertyValue("--accent"));
    const parsedCyan = parseHexOrRgb(style.getPropertyValue("--cyan"));
    if (parsedAccent) accent = parsedAccent;
    if (parsedCyan) cyan = parsedCyan;
  }

  // WebGL Fluid Solver Class
  let fluidSolver = null;

  function initWebGLFluid(canvas) {
    const gl = canvas.getContext("webgl", { alpha: true, depth: false, stencil: false, antialias: false }) ||
               canvas.getContext("experimental-webgl", { alpha: true, depth: false, stencil: false, antialias: false });
    if (!gl) return null;

    let ext = gl.getExtension('OES_texture_float') || gl.getExtension('OES_texture_half_float');
    let extLinear = gl.getExtension('OES_texture_float_linear') || gl.getExtension('OES_texture_half_float_linear');
    if (!ext) return null;

    let isHalf = !gl.getExtension('OES_texture_float');
    let type = isHalf ? (gl.getExtension('OES_texture_half_float')?.HALF_FLOAT_OES || 0x8D61) : gl.FLOAT;

    function compileShader(shaderType, source) {
      const shader = gl.createShader(shaderType);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
      return shader;
    }

    function createProgram(vsSource, fsSource) {
      const vs = compileShader(gl.VERTEX_SHADER, vsSource);
      const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return null;
      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
      return program;
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const clearShader = `
      precision mediump float;
      uniform sampler2D u_texture;
      uniform float u_value;
      varying vec2 vUv;
      void main() {
        gl_FragColor = u_value * texture2D(u_texture, vUv);
      }
    `;

    const advectShader = `
      precision mediump float;
      uniform sampler2D u_velocity;
      uniform sampler2D u_source;
      uniform vec2 u_texelSize;
      uniform float u_dt;
      uniform float u_dissipation;
      varying vec2 vUv;
      void main() {
        vec2 coord = vUv - u_dt * u_texelSize * texture2D(u_velocity, vUv).xy;
        gl_FragColor = u_dissipation * texture2D(u_source, coord);
      }
    `;

    const splatShader = `
      precision mediump float;
      uniform sampler2D u_texture;
      uniform vec2 u_point;
      uniform vec3 u_color;
      uniform float u_radius;
      varying vec2 vUv;
      void main() {
        vec2 p = vUv - u_point;
        float d = exp(-dot(p, p) / u_radius);
        vec3 base = texture2D(u_texture, vUv).rgb;
        gl_FragColor = vec4(base + u_color * d, 1.0);
      }
    `;

    const divergenceShader = `
      precision mediump float;
      uniform sampler2D u_velocity;
      uniform vec2 u_texelSize;
      varying vec2 vUv;
      void main() {
        float L = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).x;
        float R = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).y;
        float T = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).y;
        float B = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).y;
        gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
      }
    `;

    const curlShader = `
      precision mediump float;
      uniform sampler2D u_velocity;
      uniform vec2 u_texelSize;
      varying vec2 vUv;
      void main() {
        float L = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).y;
        float R = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).y;
        float T = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).x;
        float B = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).x;
        float curl = R - L - (T - B);
        gl_FragColor = vec4(curl, 0.0, 0.0, 1.0);
      }
    `;

    const vorticityShader = `
      precision mediump float;
      uniform sampler2D u_velocity;
      uniform sampler2D u_curl;
      uniform vec2 u_texelSize;
      uniform float u_curlStrength;
      uniform float u_dt;
      varying vec2 vUv;
      void main() {
        float L = texture2D(u_curl, vUv - vec2(u_texelSize.x, 0.0)).x;
        float R = texture2D(u_curl, vUv + vec2(u_texelSize.x, 0.0)).x;
        float T = texture2D(u_curl, vUv + vec2(0.0, u_texelSize.y)).x;
        float B = texture2D(u_curl, vUv - vec2(0.0, u_texelSize.y)).x;
        float C = texture2D(u_curl, vUv).x;
        
        vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L));
        float forceLen = length(force) + 0.0001;
        force /= forceLen;
        force *= u_curlStrength * C;
        
        vec2 vel = texture2D(u_velocity, vUv).xy;
        gl_FragColor = vec4(vel + force * u_dt, 0.0, 1.0);
      }
    `;

    const pressureShader = `
      precision mediump float;
      uniform sampler2D u_pressure;
      uniform sampler2D u_divergence;
      uniform vec2 u_texelSize;
      varying vec2 vUv;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).x;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).x;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).x;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).x;
        float div = texture2D(u_divergence, vUv).x;
        gl_FragColor = vec4(0.25 * (L + R + B + T - div), 0.0, 0.0, 1.0);
      }
    `;

    const gradSubtractShader = `
      precision mediump float;
      uniform sampler2D u_pressure;
      uniform sampler2D u_velocity;
      uniform vec2 u_texelSize;
      varying vec2 vUv;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).x;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).x;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).x;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).x;
        vec2 vel = texture2D(u_velocity, vUv).xy;
        gl_FragColor = vec4(vel - 0.5 * vec2(R - L, T - B), 0.0, 1.0);
      }
    `;

    const displayShader = `
      precision mediump float;
      uniform sampler2D u_texture;
      varying vec2 vUv;
      void main() {
        vec3 color = texture2D(u_texture, vUv).rgb;
        vec3 glow = pow(color, vec3(1.3)) * 1.78;
        gl_FragColor = vec4(glow, 1.0);
      }
    `;

    const clearProgram = createProgram(vsSource, clearShader);
    const advectProgram = createProgram(vsSource, advectShader);
    const splatProgram = createProgram(vsSource, splatShader);
    const divergenceProgram = createProgram(vsSource, divergenceShader);
    const curlProgram = createProgram(vsSource, curlShader);
    const vorticityProgram = createProgram(vsSource, vorticityShader);
    const pressureProgram = createProgram(vsSource, pressureShader);
    const gradSubtractProgram = createProgram(vsSource, gradSubtractShader);
    const displayProgram = createProgram(vsSource, displayShader);

    if (!clearProgram || !advectProgram || !splatProgram || !divergenceProgram ||
        !curlProgram || !vorticityProgram || !pressureProgram || !gradSubtractProgram || !displayProgram) {
      return null;
    }

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
    ]), gl.STATIC_DRAW);

    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    let simWidth = 256;
    let simHeight = 256;
    let velocityFBO, densityFBO, pressureFBO, divergenceFBO, curlFBO;

    function createFBO(w, h, textureType) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, extLinear ? gl.LINEAR : gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, extLinear ? gl.LINEAR : gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, textureType, null);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      return { texture, fbo };
    }

    function createDoubleFBO(w, h, textureType) {
      let fbo1 = createFBO(w, h, textureType);
      let fbo2 = createFBO(w, h, textureType);
      if (!fbo1 || !fbo2) return null;
      return {
        texelSizeX: 1.0 / w,
        texelSizeY: 1.0 / h,
        get read() { return fbo1; },
        get write() { return fbo2; },
        swap() {
          let temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        }
      };
    }

    function deleteFBO(fbo) {
      if (!fbo) return;
      gl.deleteTexture(fbo.texture);
      gl.deleteFramebuffer(fbo.fbo);
    }

    function deleteDoubleFBO(dfbo) {
      if (!dfbo) return;
      deleteFBO(dfbo.read);
      deleteFBO(dfbo.write);
    }

    let colorAngle = 0;
    function getNextSplatColor() {
      colorAngle += 0.015;
      const blend = (Math.sin(colorAngle) + 1) * 0.5;
      return {
        r: (accent.r * blend + cyan.r * (1 - blend)) / 255.0,
        g: (accent.g * blend + cyan.g * (1 - blend)) / 255.0,
        b: (accent.b * blend + cyan.b * (1 - blend)) / 255.0
      };
    }

    function drawQuad() {
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    return {
      resize(w, h) {
        simHeight = 256;
        simWidth = Math.round(256 * (w / h));

        deleteDoubleFBO(velocityFBO);
        deleteDoubleFBO(densityFBO);
        deleteDoubleFBO(pressureFBO);
        deleteFBO(divergenceFBO);
        deleteFBO(curlFBO);

        velocityFBO = createDoubleFBO(simWidth, simHeight, type);
        densityFBO = createDoubleFBO(simWidth, simHeight, type);
        pressureFBO = createDoubleFBO(simWidth, simHeight, type);
        divergenceFBO = createFBO(simWidth, simHeight, type);
        curlFBO = createFBO(simWidth, simHeight, type);
      },
      step(dt, pointer) {
        if (!velocityFBO) return;
        gl.viewport(0, 0, simWidth, simHeight);

        // 1. Advect velocity
        gl.useProgram(advectProgram);
        gl.uniform1i(gl.getUniformLocation(advectProgram, "u_velocity"), 0);
        gl.uniform1i(gl.getUniformLocation(advectProgram, "u_source"), 0);
        gl.uniform2f(gl.getUniformLocation(advectProgram, "u_texelSize"), velocityFBO.texelSizeX, velocityFBO.texelSizeY);
        gl.uniform1f(gl.getUniformLocation(advectProgram, "u_dt"), dt);
        gl.uniform1f(gl.getUniformLocation(advectProgram, "u_dissipation"), 0.98);
        gl.bindFramebuffer(gl.FRAMEBUFFER, velocityFBO.write.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        drawQuad();
        velocityFBO.swap();

        // 2. Advect density
        gl.uniform1i(gl.getUniformLocation(advectProgram, "u_velocity"), 0);
        gl.uniform1i(gl.getUniformLocation(advectProgram, "u_source"), 1);
        gl.uniform2f(gl.getUniformLocation(advectProgram, "u_texelSize"), densityFBO.texelSizeX, densityFBO.texelSizeY);
        gl.uniform1f(gl.getUniformLocation(advectProgram, "u_dt"), dt);
        gl.uniform1f(gl.getUniformLocation(advectProgram, "u_dissipation"), 0.985);
        gl.bindFramebuffer(gl.FRAMEBUFFER, densityFBO.write.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, densityFBO.read.texture);
        drawQuad();
        densityFBO.swap();

        // 3. Splat forces
        if (pointer.active && Math.hypot(pointer.vx, pointer.vy) > 0.05) {
          const x = pointer.x / window.innerWidth;
          const y = 1.0 - pointer.y / window.innerHeight;
          const vx = pointer.vx * 4.8;
          const vy = -pointer.vy * 4.8;

          // Splat velocity
          gl.useProgram(splatProgram);
          gl.uniform1i(gl.getUniformLocation(splatProgram, "u_texture"), 0);
          gl.uniform2f(gl.getUniformLocation(splatProgram, "u_point"), x, y);
          gl.uniform3f(gl.getUniformLocation(splatProgram, "u_color"), vx, vy, 0.0);
          gl.uniform1f(gl.getUniformLocation(splatProgram, "u_radius"), 0.0006);
          gl.bindFramebuffer(gl.FRAMEBUFFER, velocityFBO.write.fbo);
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
          drawQuad();
          velocityFBO.swap();

          // Splat density (color)
          const color = getNextSplatColor();
          gl.uniform3f(gl.getUniformLocation(splatProgram, "u_color"), color.r, color.g, color.b);
          gl.uniform1f(gl.getUniformLocation(splatProgram, "u_radius"), 0.00085);
          gl.bindFramebuffer(gl.FRAMEBUFFER, densityFBO.write.fbo);
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, densityFBO.read.texture);
          drawQuad();
          densityFBO.swap();
        }

        // 4. Vorticity Confinement (curl)
        gl.useProgram(curlProgram);
        gl.uniform1i(gl.getUniformLocation(curlProgram, "u_velocity"), 0);
        gl.uniform2f(gl.getUniformLocation(curlProgram, "u_texelSize"), velocityFBO.texelSizeX, velocityFBO.texelSizeY);
        gl.bindFramebuffer(gl.FRAMEBUFFER, curlFBO.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        drawQuad();

        gl.useProgram(vorticityProgram);
        gl.uniform1i(gl.getUniformLocation(vorticityProgram, "u_velocity"), 0);
        gl.uniform1i(gl.getUniformLocation(vorticityProgram, "u_curl"), 1);
        gl.uniform2f(gl.getUniformLocation(vorticityProgram, "u_texelSize"), velocityFBO.texelSizeX, velocityFBO.texelSizeY);
        gl.uniform1f(gl.getUniformLocation(vorticityProgram, "u_curlStrength"), 2.2);
        gl.uniform1f(gl.getUniformLocation(vorticityProgram, "u_dt"), dt);
        gl.bindFramebuffer(gl.FRAMEBUFFER, velocityFBO.write.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, curlFBO.texture);
        drawQuad();
        velocityFBO.swap();

        // 5. Divergence calculation
        gl.useProgram(divergenceProgram);
        gl.uniform1i(gl.getUniformLocation(divergenceProgram, "u_velocity"), 0);
        gl.uniform2f(gl.getUniformLocation(divergenceProgram, "u_texelSize"), velocityFBO.texelSizeX, velocityFBO.texelSizeY);
        gl.bindFramebuffer(gl.FRAMEBUFFER, divergenceFBO.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        drawQuad();

        // 6. Jacobi Pressure Solve
        gl.useProgram(clearProgram);
        gl.uniform1i(gl.getUniformLocation(clearProgram, "u_texture"), 0);
        gl.uniform1f(gl.getUniformLocation(clearProgram, "u_value"), 0.0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, pressureFBO.write.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, pressureFBO.read.texture);
        drawQuad();
        pressureFBO.swap();

        gl.useProgram(pressureProgram);
        gl.uniform1i(gl.getUniformLocation(pressureProgram, "u_divergence"), 1);
        gl.uniform2f(gl.getUniformLocation(pressureProgram, "u_texelSize"), pressureFBO.texelSizeX, pressureFBO.texelSizeY);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, divergenceFBO.texture);

        for (let j = 0; j < 20; j++) {
          gl.uniform1i(gl.getUniformLocation(pressureProgram, "u_pressure"), 0);
          gl.bindFramebuffer(gl.FRAMEBUFFER, pressureFBO.write.fbo);
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, pressureFBO.read.texture);
          drawQuad();
          pressureFBO.swap();
        }

        // 7. Gradient subtraction
        gl.useProgram(gradSubtractProgram);
        gl.uniform1i(gl.getUniformLocation(gradSubtractProgram, "u_pressure"), 0);
        gl.uniform1i(gl.getUniformLocation(gradSubtractProgram, "u_velocity"), 1);
        gl.uniform2f(gl.getUniformLocation(gradSubtractProgram, "u_texelSize"), velocityFBO.texelSizeX, velocityFBO.texelSizeY);
        gl.bindFramebuffer(gl.FRAMEBUFFER, velocityFBO.write.fbo);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, pressureFBO.read.texture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, velocityFBO.read.texture);
        drawQuad();
        velocityFBO.swap();
      },
      renderDisplay() {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.useProgram(displayProgram);
        gl.uniform1i(gl.getUniformLocation(displayProgram, "u_texture"), 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, densityFBO.read.texture);
        drawQuad();
      }
    };
  }

  // CPU Fallback variables
  let cpuCanvas = null;
  let cpuCtx = null;
  let u_cpu, v_cpu, uNext_cpu, vNext_cpu, density_cpu, densNext_cpu;
  let cpuCols = 0, cpuRows = 0, cpuNumCells = 0;

  function initCPUSolver(canvas) {
    cpuCanvas = canvas;
    cpuCtx = canvas.getContext("2d");
  }

  function resizeCPUSolver(w, h) {
    const ratio = window.devicePixelRatio || 1;
    cpuCanvas.width = Math.floor(w * ratio);
    cpuCanvas.height = Math.floor(h * ratio);
    cpuCanvas.style.width = `${w}px`;
    cpuCanvas.style.height = `${h}px`;
    cpuCtx.setTransform(ratio, 0, 0, ratio, 0, 0);

    cpuCols = Math.ceil(w / SPACING) + 2;
    cpuRows = Math.ceil(h / SPACING) + 2;
    cpuNumCells = cpuCols * cpuRows;

    u_cpu = new Float32Array(cpuNumCells);
    v_cpu = new Float32Array(cpuNumCells);
    uNext_cpu = new Float32Array(cpuNumCells);
    vNext_cpu = new Float32Array(cpuNumCells);
    density_cpu = new Float32Array(cpuNumCells);
    densNext_cpu = new Float32Array(cpuNumCells);
  }

  function updateCPUSolver() {
    if (pointer.active) {
      const px = pointer.x - (-SPACING / 2);
      const py = pointer.y - (-SPACING / 2);
      const pc = Math.floor(px / SPACING);
      const pr = Math.floor(py / SPACING);

      if (pc >= 0 && pc < cpuCols && pr >= 0 && pr < cpuRows) {
        const radius = 2;
        const pointerVx = pointer.vx * 0.15;
        const pointerVy = pointer.vy * 0.15;
        const speed = Math.hypot(pointerVx, pointerVy);

        for (let dr = -radius; dr <= radius; dr++) {
          for (let dc = -radius; dc <= radius; dc++) {
            const r = pr + dr;
            const c = pc + dc;
            if (r >= 0 && r < cpuRows && c >= 0 && c < cpuCols) {
              const i = r * cpuCols + c;
              const distSq = dr * dr + dc * dc;
              const influence = Math.exp(-distSq / 1.8);

              u_cpu[i] += pointerVx * influence * 1.1;
              v_cpu[i] += pointerVy * influence * 1.1;

              const velSq = u_cpu[i] * u_cpu[i] + v_cpu[i] * v_cpu[i];
              if (velSq > 1600) {
                const vel = Math.sqrt(velSq);
                u_cpu[i] = (u_cpu[i] / vel) * 40;
                v_cpu[i] = (v_cpu[i] / vel) * 40;
              }

              density_cpu[i] += Math.min(1.0, speed * influence * 0.45);
              if (density_cpu[i] > 1.0) density_cpu[i] = 1.0;
            }
          }
        }
      }
    }

    const rateVel = 0.12;
    const rateDens = 0.15;

    for (let r = 0; r < cpuRows; r++) {
      for (let c = 0; c < cpuCols; c++) {
        const i = r * cpuCols + c;
        const left = c > 0 ? i - 1 : i;
        const right = c < cpuCols - 1 ? i + 1 : i;
        const top = r > 0 ? i - cpuCols : i;
        const bottom = r < cpuRows - 1 ? i + cpuCols : i;

        uNext_cpu[i] = u_cpu[i] * (1 - rateVel) + (u_cpu[left] + u_cpu[right] + u_cpu[top] + u_cpu[bottom]) / 4 * rateVel;
        vNext_cpu[i] = v_cpu[i] * (1 - rateVel) + (v_cpu[left] + v_cpu[right] + v_cpu[top] + v_cpu[bottom]) / 4 * rateVel;
        densNext_cpu[i] = density_cpu[i] * (1 - rateDens) + (density_cpu[left] + density_cpu[right] + density_cpu[top] + density_cpu[bottom]) / 4 * rateDens;
      }
    }

    const decayVel = 0.94;
    const decayDens = 0.91;

    for (let i = 0; i < cpuNumCells; i++) {
      u_cpu[i] = uNext_cpu[i] * decayVel;
      v_cpu[i] = vNext_cpu[i] * decayVel;
      density_cpu[i] = densNext_cpu[i] * decayDens;

      if (Math.abs(u_cpu[i]) < 0.0001) u_cpu[i] = 0;
      if (Math.abs(v_cpu[i]) < 0.0001) v_cpu[i] = 0;
      if (density_cpu[i] < 0.0001) density_cpu[i] = 0;
    }
  }

  function drawCPUGlow() {
    const activeCells = [];
    for (let i = 0; i < cpuNumCells; i++) {
      if (density_cpu[i] > 0.08) {
        activeCells.push({ index: i, val: density_cpu[i] });
      }
    }
    activeCells.sort((a, b) => b.val - a.val);
    const limit = Math.min(activeCells.length, 12);
    for (let k = 0; k < limit; k++) {
      const idx = activeCells[k].index;
      const c = idx % cpuCols;
      const r = Math.floor(idx / cpuCols);
      const cx = -SPACING / 2 + c * SPACING + SPACING / 2;
      const cy = -SPACING / 2 + r * SPACING + SPACING / 2;
      const d = activeCells[k].val;

      const grad = cpuCtx.createRadialGradient(cx, cy, 0, cx, cy, SPACING * 2);
      const ratio = c / cpuCols;
      const rVal = Math.round(accent.r * (1 - ratio) + cyan.r * ratio);
      const gVal = Math.round(accent.g * (1 - ratio) + cyan.g * ratio);
      const bVal = Math.round(accent.b * (1 - ratio) + cyan.b * ratio);

      grad.addColorStop(0, `rgba(${rVal}, ${gVal}, ${bVal}, ${d * 0.12})`);
      grad.addColorStop(1, `rgba(${rVal}, ${gVal}, ${bVal}, 0)`);
      cpuCtx.fillStyle = grad;
      cpuCtx.beginPath();
      cpuCtx.arc(cx, cy, SPACING * 2, 0, Math.PI * 2);
      cpuCtx.fill();
    }
  }

  // Initialize WebGL Fluid simulation
  fluidSolver = initWebGLFluid(canvasWebgl);
  console.log("WebGL Fluid solver initialized:", !!fluidSolver);
  if (!fluidSolver) {
    console.log("Falling back to CPU Ambient solver");
    canvasWebgl.remove();
    initCPUSolver(canvasNotes);
  }

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;

    canvasNotes.width = Math.floor(width * ratio);
    canvasNotes.height = Math.floor(height * ratio);
    canvasNotes.style.width = `${width}px`;
    canvasNotes.style.height = `${height}px`;
    ctxNotes.setTransform(ratio, 0, 0, ratio, 0, 0);

    if (fluidSolver) {
      canvasWebgl.width = Math.floor(width * ratio);
      canvasWebgl.height = Math.floor(height * ratio);
      canvasWebgl.style.width = `${width}px`;
      canvasWebgl.style.height = `${height}px`;
      fluidSolver.resize(width, height);
    } else {
      resizeCPUSolver(width, height);
    }

    // Rebuild note grid
    notes.length = 0;
    const cols = Math.ceil(width / SPACING) + 2;
    const rows = Math.ceil(height / SPACING) + 2;
    const symbols = ["♪", "♫", "♩", "♬"];
    const theme = document.documentElement.dataset.theme || "dark";
    const startOpacity = theme === "dark" ? 0.045 : 0.035;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const homeX = -SPACING / 2 + c * SPACING + SPACING / 2;
        const homeY = -SPACING / 2 + r * SPACING + SPACING / 2;
        notes.push({
          symbol: symbols[(r + c) % symbols.length],
          homeX,
          homeY,
          x: homeX,
          y: homeY,
          vx: 0,
          vy: 0,
          dx: 0,
          dy: 0,
          scale: 0.85 + ((r * 7 + c * 13) % 5) * 0.06,
          opacity: startOpacity,
          angle: ((r * 11 + c * 17) % 7) * 0.08 - 0.28,
          baseAngle: ((r * 11 + c * 17) % 7) * 0.08 - 0.28
        });
      }
    }
  }

  function updateNotes() {
    const theme = document.documentElement.dataset.theme || "dark";
    const startOpacity = theme === "dark" ? 0.045 : 0.035;

    for (const note of notes) {
      let forceX = 0;
      let forceY = 0;
      let densityPush = 0;

      if (pointer.active) {
        const dx = note.x - pointer.x;
        const dy = note.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 140) {
          const influence = Math.exp(-dist * dist / (80 * 80));
          forceX = pointer.vx * influence * 1.5;
          forceY = pointer.vy * influence * 1.5;
          densityPush = influence * 0.42;
        }
      }

      const restoreX = -note.dx * 0.08;
      const restoreY = -note.dy * 0.08;

      note.vx = (note.vx + forceX + restoreX) * 0.78;
      note.vy = (note.vy + forceY + restoreY) * 0.78;
      note.dx += note.vx;
      note.dy += note.vy;

      note.x = note.homeX + note.dx;
      note.y = note.homeY + note.dy;

      note.angle = note.baseAngle + note.dx * 0.008;

      note.opacity = startOpacity + densityPush;
      if (note.opacity > 0.42) note.opacity = 0.42;
    }
  }

  function drawNotes(theme, noteRgb) {
    ctxNotes.font = "800 12px Poppins, system-ui, -apple-system, sans-serif";
    ctxNotes.textAlign = "center";
    ctxNotes.textBaseline = "middle";

    for (const note of notes) {
      ctxNotes.save();
      ctxNotes.translate(note.x, note.y);
      ctxNotes.rotate(note.angle);
      ctxNotes.scale(note.scale, note.scale);
      ctxNotes.fillStyle = `rgba(${noteRgb.r}, ${noteRgb.g}, ${noteRgb.b}, ${note.opacity})`;
      ctxNotes.fillText(note.symbol, 0, 0);
      ctxNotes.restore();
    }
  }

  function tick() {
    if (document.hidden) return;

    const now = Date.now();
    const dt = Math.min((now - lastTickTime) / 1000, 0.033);
    lastTickTime = now;

    // Pointer speed calculation
    pointer.px = pointer.x;
    pointer.py = pointer.y;
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;
    pointer.vx += (pointer.x - pointer.px - pointer.vx) * 0.18;
    pointer.vy += (pointer.y - pointer.py - pointer.vy) * 0.18;

    // Idle virtual pointer simulation (Lissajous curves)
    if (now - lastMoveTime > 3000) {
      const time = now * 0.0012;
      pointer.tx = window.innerWidth * 0.5 + Math.sin(time) * window.innerWidth * 0.35;
      pointer.ty = window.innerHeight * 0.5 + Math.cos(time * 0.7) * window.innerHeight * 0.22;
      pointer.active = true;
    }

    if (fluidSolver) {
      fluidSolver.step(dt, pointer);
      fluidSolver.renderDisplay();
    } else {
      cpuCtx.clearRect(0, 0, width, height);
      updateCPUSolver();
      drawCPUGlow();
    }

    ctxNotes.clearRect(0, 0, width, height);
    updateNotes();
    const theme = document.documentElement.dataset.theme || "dark";
    const noteRgb = theme === "dark" ? { r: 241, g: 245, b: 249 } : { r: 15, g: 23, b: 42 };
    drawNotes(theme, noteRgb);

    animationFrameId = requestAnimationFrame(tick);
  }

  // Event Listeners
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 100);
  });

  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    lastMoveTime = Date.now();
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

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      lastTickTime = Date.now();
      tick();
    }
  });

  const themeObserver = new MutationObserver(() => {
    updateThemeColors();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Initialize values
  updateThemeColors();
  resize();
  tick();
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  header.className = "site-header";
  header.innerHTML = `
    <a href="${sitePath("")}" class="site-header-title">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 22px; height: 22px;">
        <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="6" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" />
        <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" stroke-width="4" />
      </svg>
      <span>Virtue</span> FX Manager
    </a>
    <div class="site-header-actions">
      <a href="${sitePath("docs/")}" class="header-btn header-btn-secondary">Help Docs</a>
      <a href="${sitePath("contact/")}" class="header-btn header-btn-secondary">Contact</a>
      <a href="${sitePath("download/")}" class="header-btn header-btn-secondary">Download</a>
      <a href="${sitePath("store/")}" class="header-btn header-btn-primary">Buy License</a>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  footer.className = "footer";
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 28px; height: 28px;">
          <rect x="20" y="25" width="60" height="50" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="6" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" />
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#38bdf8" stroke-width="4" />
        </svg>
        <span style="font-weight: 800; color: var(--t);">Virtue Creative Systems</span>
      </div>
      <div class="footer-links">
        <a href="${sitePath("docs/")}">Help Docs</a>
        <a href="${sitePath("support/")}">Recover Key</a>
        <a href="${sitePath("download/")}">Download</a>
        <a href="${sitePath("store/")}">Buy License</a>
        <a href="${sitePath("contact/")}">Contact</a>
        <a href="${sitePath("store/?show_eula=true")}">EULA</a>
      </div>
      <div class="footer-meta">
        &copy; ${new Date().getFullYear()} Virtue Creative Systems
      </div>
    </div>
    <div style="max-width: 1200px; margin: 40px auto 0 auto; padding-top: 24px; border-top: 1px solid var(--line);">
      <p style="font-size: 11px; color: var(--t-3); line-height: 1.6; margin: 0;">
        <strong>Disclaimer:</strong> REAPER is a registered trademark of Cockos Incorporated. Virtue FX Manager is an independent software extension and is not affiliated with, endorsed by, or sponsored by Cockos Incorporated. Third-party plugin names, marks, logos, and plugin screenshots or thumbnail images displayed or mentioned on this website are used for visual identification, plugin database indexing, and comparative purposes only. No affiliation, endorsement, sponsorship, or official association is implied. Profile names and screenshots are internal only and do not claim ownership, exact emulation, or collaboration. Any described timing feel is a creative interpretation.
      </p>
    </div>
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
        src="${sitePath("imgs/virtue-fx-manager-fictional-ui.png")}"
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
  const isComingSoon = releaseStatus === "coming-soon";
  const isPolar = commerceConfig.provider === "polar";
  if (!isComingSoon && isPolar && isCheckoutConfigured() && !document.getElementById("polar-checkout-script")) {
    const script = document.createElement("script");
    script.id = "polar-checkout-script";
    script.defer = true;
    script.dataset.autoInit = "true";
    script.src = "https://cdn.jsdelivr.net/npm/@polar-sh/checkout@latest/dist/embed.global.js";
    document.body.appendChild(script);
  }

  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    if (isComingSoon) {
      link.setAttribute("href", "#");
      link.textContent = "Coming Soon";
      link.style.opacity = "0.6";
      link.style.cursor = "not-allowed";
      link.classList.add("is-setup-pending");
      link.removeAttribute("data-polar-checkout");
      link.removeAttribute("data-polar-checkout-theme");
      if (!link.dataset.checkoutBound) {
        link.dataset.checkoutBound = "true";
        link.addEventListener("click", (e) => e.preventDefault());
      }
      return;
    }
    const variantKey = link.dataset.variant || "commercial";
    const variant = commerceVariant(variantKey);
    const liveLabel = link.dataset.liveLabel || "Buy License";
    const setupLabel = link.dataset.setupLabel || "Store setup pending";
    const hasVariantCheckout = Boolean(variant?.checkoutUrl?.startsWith("https://"));
    const hasApiCheckout = Boolean(commerceConfig.checkoutApiUrl?.startsWith("https://"));
    const ready = commerceConfig.mode === "live" && (hasVariantCheckout || hasApiCheckout || commerceConfig.checkoutUrl.startsWith("https://"));
    link.setAttribute("href", ready ? checkoutHref(variantKey) : sitePath("store/virtue-fx-manager/#store-setup"));
    if (ready && isPolar) {
      link.setAttribute("data-polar-checkout", "");
      link.setAttribute("data-polar-checkout-theme", "dark");
    } else {
      link.removeAttribute("data-polar-checkout");
      link.removeAttribute("data-polar-checkout-theme");
    }
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
          if (!response.ok || !payload.checkout_url) {
            throw new Error(payload.message || "Checkout unavailable");
          }
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
    node.textContent = isComingSoon ? "Coming Soon" : (isCheckoutConfigured() ? "Checkout ready" : "Store setup pending");
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
  const isComingSoon = releaseStatus === "coming-soon";
  const statusLabel = isComingSoon ? "Release coming soon" : (isDownloadConfigured() ? "Latest release available" : "No public release artifact yet");
  document.querySelectorAll("[data-download-status]").forEach((node) => {
    node.textContent = statusLabel;
  });
  document.querySelectorAll("[data-download-version]").forEach((node) => {
    node.textContent = isComingSoon ? "Coming Soon" : (downloadConfig.version || "Pending");
  });
  document.querySelectorAll("[data-download-channel]").forEach((node) => {
    node.textContent = isComingSoon ? "stable" : (downloadConfig.channel || "stable");
  });
  document.querySelectorAll("[data-download-platform]").forEach((node) => {
    node.textContent = isComingSoon ? "macOS & Windows" : (downloadConfig.platform || "Pending tested artifact");
  });
  document.querySelectorAll("[data-download-file]").forEach((node) => {
    node.textContent = isComingSoon ? "Coming Soon" : (downloadConfig.fileName || "Published with release");
  });
  document.querySelectorAll("[data-download-date]").forEach((node) => {
    node.textContent = isComingSoon ? "Coming Soon" : (downloadConfig.releaseDate || "Published with release");
  });
  document.querySelectorAll("[data-download-sha]").forEach((node) => {
    node.textContent = isComingSoon ? "Coming Soon" : (downloadConfig.sha256 || "Published with release");
  });
  document.querySelectorAll("[data-download-link]").forEach((link) => {
    if (isComingSoon) {
      link.setAttribute("href", "#");
      link.textContent = "Coming Soon";
      link.style.opacity = "0.6";
      link.style.cursor = "not-allowed";
      link.classList.add("is-setup-pending");
      if (!link.dataset.downloadBound) {
        link.dataset.downloadBound = "true";
        link.addEventListener("click", (e) => e.preventDefault());
      }
      return;
    }
    const platform = link.dataset.downloadLink || "mac";
    let url = downloadConfig.url;
    if (platform === "win" && url) {
      url = url.replace("vfxm-mac.pkg", "vfxm-win.exe").replace("vfxm-mac.dmg", "vfxm-win.exe");
    }
    const ready = isDownloadConfigured() && url;
    link.setAttribute("href", ready ? url : sitePath("download/vfxm/#release-pending"));
    link.textContent = ready ? (platform === "mac" ? "Download macOS (.dmg)" : "Download Windows (.exe)") : `Download for ${platform === "mac" ? "macOS" : "Windows"} pending`;
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

function setupContactForm() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const nameInput = form.querySelector("#contact-name");
    const emailInput = form.querySelector("#contact-email");
    const subjectInput = form.querySelector("#contact-subject");
    const messageInput = form.querySelector("#contact-message");
    const submitButton = form.querySelector("[data-contact-submit]");
    const note = form.querySelector("[data-contact-note]");

    if (!nameInput || !emailInput || !subjectInput || !messageInput || !submitButton || !note) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
        note.style.color = "#dc2626";
        note.textContent = "Please fill in all fields.";
        return;
      }

      if (!email.includes("@")) {
        note.style.color = "#dc2626";
        note.textContent = "Please enter a valid email address.";
        return;
      }

      // Disable inputs and button
      submitButton.disabled = true;
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending message...";
      note.textContent = "";
      nameInput.disabled = true;
      emailInput.disabled = true;
      subjectInput.disabled = true;
      messageInput.disabled = true;

      try {
        const response = await fetch("https://virtue-licensing-service.virtuecreativesystems.workers.dev/v1/contact/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          form.reset();
          note.style.color = "var(--accent)";
          note.textContent = data.message || "Your message has been sent successfully. We will get back to you soon!";
        } else {
          note.style.color = "#dc2626";
          note.textContent = data.error || data.message || "Failed to send message. Please try again.";
        }
      } catch (err) {
        note.style.color = "#dc2626";
        note.textContent = "Network error. Please try again later.";
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        nameInput.disabled = false;
        emailInput.disabled = false;
        subjectInput.disabled = false;
        messageInput.disabled = false;
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
setupContactForm();
setupReveals();
window.VirtueI18n?.apply();
loadSiteConfig();

// Newsletter integration point:
// Replace the placeholder submit handler above with Buttondown, Mailchimp,
// ConvertKit, Supabase, or a custom API endpoint when release-list signup is ready.
