/* =========================================================
   CONTENT: edit everything you need right here.

   Images: drop files into an /images folder named
   <project-id>-01.jpg, -02.jpg ... (e.g. images/moxies-01.jpg).
   They're picked up automatically; until then a soft
   placeholder gradient is shown. You can also set `img`
   on any slide to point at a specific file.
   ========================================================= */

const CONTACT = {
  email: "sahilmonga9080@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahilmongaa/",
  cv: "Sahil-Monga-CV.pdf",
  photo: "images/sahil.jpg",
  role: "Business student at BCIT, based in Abbotsford, BC",
  // Pre-filled into the visitor's new email draft.
  emailSubject: "Hello from your portfolio",
  emailBody: "Hi Sahil,\n\n",
};

const PROJECTS = [
  {
    id: "moxies",
    tab: "Moxies AI Host",
    short: "Moxies",
    // One scene the camera travels across. camera: x/y = % point to centre on,
    // z = zoom, w = zone width as a fraction of the scene (keeps it fitting on phones).
    scene: { image: "images/moxies-scene.svg", bleed: true },
    slides: [
      {
        eyebrow: "Strategy and AI build, BCIT team project",
        title: "Ava, an AI host for Moxies",
        body: "A consulting project for Moxies Richmond: we worked out why phone bookings were being lost, built a working AI phone agent, and planned how to roll it out across 58+ locations.",
        chips: [{ t: "10 weeks" }, { t: "Team of 4" }, { t: "Strategy" }, { t: "Voice AI" }],
        note: "With Aryan Prasad, Aidan Graham and Tirath Gill, as Fourth Quarter Strategies",
        camera: { x: 50, y: 50, z: 1 },
      },
      {
        eyebrow: "The problem",
        title: "The phone was the leak",
        body: "At peak, hosts juggle walk-ins, the OpenTable queue and a ringing phone. Industry studies put unanswered peak-hour calls at 30–43%, and most of those callers never call back.",
        camera: { x: 38.64, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The analysis",
        title: "Four frameworks, one answer",
        body: "Diamond-E, Porter’s Five Forces, SWOT and PESTEL all pointed the same way: use AI to lift hospitality, not to cut the host team.",
        camera: { x: 59.55, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The build",
        title: "A working agent, not a mock-up",
        body: "We built Ava on Twilio, Vapi, Claude and ElevenLabs. Across 19 test calls it cost about CAD 0.27 per call, well below the off-the-shelf options we compared.",
        camera: { x: 80.45, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The dashboard",
        title: "Every call, measured",
        body: "A live dashboard turns the least visible guest channel into the most measured one: bookings, conversion, caller sentiment and flagged calls for a manager to review.",
        camera: { x: 59.55, y: 54.81, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The roadmap",
        title: "From one pilot to 58+ locations",
        body: "A six-phase rollout, with each phase gated on hard targets like 85% containment and under 5% missed calls, projecting CAD 60–96K a year in extra bookings at Richmond alone.",
        chips: [{ t: "6 phases" }, { t: "Gated rollout" }, { t: "CAD 60–96K a year" }],
        camera: { x: 80.45, y: 54.81, z: 2.2, w: 0.182 },
      },
    ],
  },
  {
    id: "dashboard",
    tab: "Restaurant Analytics",
    short: "Analytics",
    // Same zone layout as the Moxies scene, so the camera points match.
    scene: { image: "images/dashboard-scene.svg", bleed: true },
    slides: [
      {
        eyebrow: "Business analytics, personal project",
        title: "What a café’s sales really say",
        body: "I took three months of restaurant orders, cleaned and modelled them, and built a Power BI dashboard that shows the owner where the money comes from and what to change.",
        chips: [{ t: "Power BI" }, { t: "Power Query" }, { t: "DAX" }, { t: "Menu engineering" }],
        note: "Practice dataset: Taste of the World Café, Jan–Mar 2023, from Maven Analytics",
        camera: { x: 50, y: 50, z: 1 },
      },
      {
        eyebrow: "The data",
        title: "Cleaned before counted",
        body: "Two tables: 12,234 order lines and 32 dishes. Profiling them first turned up 137 lines with no menu item (1.1%), which I kept out of the item metrics instead of guessing.",
        camera: { x: 38.64, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "When it’s busy",
        title: "Two rushes, not one long day",
        body: "Orders peak at 12–1 pm and again at 5–6 pm, with a clear lull at 3 pm. That’s a staffing pattern, and a natural prep window.",
        camera: { x: 59.55, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "Cuisines",
        title: "Italian earns, Asian sells",
        body: "Italian brings in 31% of revenue from only 24% of items sold, while Asian dishes sell the most. Volume and value tell different stories.",
        camera: { x: 80.45, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "Menu engineering",
        title: "Which dishes earn their place",
        body: "Plotting popularity against price sorts the menu into stars to promote, workhorses to bundle, puzzles to reprice and duds to rethink, like Chicken Tacos with just 123 sold.",
        camera: { x: 59.55, y: 54.81, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "Recommendations",
        title: "Five changes for the owner",
        body: "Staff for two rushes, feature the stars, rework the weakest dishes, bundle cheap best-sellers with mains, and trial an Italian group menu.",
        chips: [{ t: "$159.2K revenue" }, { t: "5,343 orders" }, { t: "$29.80 avg order" }],
        camera: { x: 80.45, y: 54.81, z: 2.2, w: 0.182 },
      },
    ],
  },
  {
    id: "web",
    tab: "Web Design",
    short: "Web",
    // Real screenshots embedded in images/web-scene.svg (rebuild: images/web/build-scene.ps1).
    scene: { image: "images/web-scene.svg", bleed: true },
    slides: [
      {
        eyebrow: "Web design, live sites",
        title: "Two websites, two very different audiences",
        body: "A scholarship foundation in rural Punjab and a wellness studio in Abbotsford. Each site is designed around one thing its visitors need to do.",
        chips: [{ t: "2 live sites" }, { t: "UI design" }, { t: "Mobile-friendly" }],
        camera: { x: 50, y: 50, z: 1 },
      },
      {
        eyebrow: "Vidya Grace Foundation",
        title: "A home for my father’s foundation",
        body: "The foundation funds scholarships and celebrates students in Darapur, Punjab. The homepage leads with real photos and the impact in numbers, so supporters see the difference straight away.",
        link: { href: "https://vidyagracefoundationdarapur.com", label: "Visit the live site" },
        camera: { x: 38.64, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "Vidya Grace Foundation",
        title: "Clear on any screen, in two languages",
        body: "Student stories appear in Punjabi with English translations, for families in the village and supporters abroad. On a phone, everything stacks into one easy scroll that ends at Support Us.",
        camera: { x: 59.55, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The Recovery Lounge",
        title: "A wellness studio with a bold brand",
        body: "A site for The Recovery Lounge in Abbotsford: massage, red-light therapy and steam. The black, white and red brand carries straight through from the logo.",
        link: { href: "https://therecoverylounge.my.canva.site", label: "Visit the live site" },
        camera: { x: 80.45, y: 21.48, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "The Recovery Lounge",
        title: "Built to get bookings",
        body: "Book Now sits on the very first screen, every service and price fits in one easy-to-scan menu, and founder profiles and reviews build trust before a first visit.",
        camera: { x: 59.55, y: 54.81, z: 2.2, w: 0.182 },
      },
      {
        eyebrow: "How I work",
        title: "From brief to live site",
        body: "I start with who visits and what they should do next, give each page one clear path, and design with the brand’s own colours and real photos before launching and checking it on phones.",
        chips: [{ t: "Listen" }, { t: "Structure" }, { t: "Design" }, { t: "Launch" }],
        camera: { x: 80.45, y: 54.81, z: 2.2, w: 0.182 },
      },
    ],
  },
];

/* Placeholder gradient colours per project (Frost & Ink friendly). */
// Chained: each project starts (top-left) with the colour the previous one
// ends on (bottom-right), so the hand-off between projects reads as one wash.
//   peach → blue | blue → mint | mint → lavender | lavender → pink
const PALETTES = {
  moxies: ["#FFD8C4", "#C9D8FF", "#FFE8D4", "#E6EBFF"],
  dashboard: ["#C9D8FF", "#CFF3E6", "#E3DDFF", "#D3E5FF"],
  web: ["#CFF3E6", "#E3D8FF", "#DDF3FF", "#F2E9FF"],
  contact: ["#E3D8FF", "#FFD9E6", "#F2E9FF", "#EEF2FA"],
};

/* =========================================================
   Engine
   ========================================================= */
const $ = (id) => document.getElementById(id);
const stage = $("stage"), scrim = stage.querySelector(".scrim");
const card = $("card"), cardBody = $("cardBody"), contactEl = $("contact"), contactBody = $("contactBody");
const tabsEl = $("tabs"), indicator = $("tabIndicator"), phTag = $("phTag");
const prevBtn = $("prev"), nextBtn = $("next"), progressEl = $("progress"), counterEl = $("counter");

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const T = (ms) => (REDUCED ? 0 : ms);
const EASE_OUT = "cubic-bezier(.22,1,.36,1)";
const EASE_IN = "cubic-bezier(.4,0,1,1)";
const SPRING = "cubic-bezier(.34,1.25,.64,1)";
// Resolve when an animation ends, or after a timeout if the tab isn't painting.
const done = (anim, ms) => Promise.race([anim.finished.catch(() => {}), new Promise((r) => setTimeout(r, ms + 80))]);

const ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
const LINK_ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';

let pi = 0, si = 0, view = "project", busy = false, segsFor = -1;

/* ---------- images ---------- */
const imgCache = new Map();
function imageFor(id, slide, i) {
  if (slide && slide.noImage) return { src: null, ready: Promise.resolve(null) };
  const src = (slide && slide.img) || `images/${id}-${String(i + 1).padStart(2, "0")}.jpg`;
  if (!imgCache.has(src)) {
    imgCache.set(src, new Promise((res) => {
      const im = new Image();
      im.onload = () => res(src);
      im.onerror = () => res(null);
      im.src = src;
    }));
  }
  return { src, ready: imgCache.get(src) };
}

function placeholder(id, i) {
  const c = PALETTES[id];
  const x1 = 18 + ((i * 23) % 50), y1 = 25 + ((i * 17) % 40);
  const x2 = 85 - ((i * 19) % 45), y2 = 75 - ((i * 29) % 45);
  return [
    `radial-gradient(55% 65% at ${x1}% ${y1}%, ${c[0]} 0%, transparent 70%)`,
    `radial-gradient(50% 60% at ${x2}% ${y2}%, ${c[1]} 0%, transparent 70%)`,
    `radial-gradient(70% 70% at 55% 110%, ${c[2]} 0%, transparent 70%)`,
    `linear-gradient(135deg, ${c[3]}, #F4F6FA)`,
  ].join(",");
}

async function showBackground(id, slide, i, dir) {
  const { src, ready } = imageFor(id, slide, i);
  const found = await ready;
  const el = document.createElement("div");
  el.className = "bg";
  el.style.backgroundImage = found ? `url("${found}")` : placeholder(id, i);
  stage.insertBefore(el, scrim);

  phTag.hidden = !!found || id === "contact"; // contact's gradient needs no photo
  if (!found) phTag.textContent = `Placeholder · ${src}`;
  swapLayer(el, dir);
}

// "Duo" transition between layers: incoming zooms + un-blurs in while the outgoing recedes.
function swapLayer(el, dir) {
  if (!el.parentNode) stage.insertBefore(el, scrim);
  el.animate(
    [
      { opacity: 0, transform: `scale(1.14) translateX(${dir * 3}%)`, filter: "blur(16px)" },
      { opacity: 1, transform: "scale(1) translateX(0)", filter: "blur(0px)" },
    ],
    { duration: T(1150), easing: EASE_OUT, fill: "both" }
  );
  stage.querySelectorAll(".bg").forEach((old) => {
    if (old === el) return;
    const a = old.animate(
      [{ opacity: 0, transform: `scale(.93) translateX(${-dir * 3}%)`, filter: "blur(12px)" }],
      { duration: T(950), easing: EASE_OUT, fill: "forwards" }
    );
    done(a, T(950)).then(() => old.remove());
  });
}

/* =========================================================
   Scenes: one stable backdrop per project and a "camera"
   that glides across it from slide to slide.

   Per project, the first file that exists wins:
     1. videos/<id>.mp4   each slide plays the clip forward to
                          its moment and holds there (the car-
                          door effect). Optional per-slide `time`
                          in seconds; otherwise spread evenly.
     2. images/<id>-scene.jpg   one large image; each slide
                          can set camera: { x, y, z } where x/y is
                          the % point to look at and z the zoom.
     3. a generated placeholder scene (below).
   ========================================================= */
const SCENE_W = 2400, SCENE_H = 1500;
const PTS = [[30, 32], [46, 60], [62, 32], [78, 58]]; // placeholder step positions (%)
const CAMERA_MS = 1500;
const CAMERA_EASE = "cubic-bezier(.65,0,.35,1)";
let scene = null; // { id, type, wrap, media, W, H }

const sceneCache = new Map();
function resolveScene(p) {
  if (sceneCache.has(p.id)) return sceneCache.get(p.id);
  const cfg = p.scene || {};
  const probeVideo = (src) => new Promise((res) => {
    const v = document.createElement("video");
    const t = setTimeout(() => res(null), 4000);
    v.muted = true; v.playsInline = true; v.preload = "auto";
    v.onloadedmetadata = () => { clearTimeout(t); res({ type: "video", src, W: v.videoWidth, H: v.videoHeight, duration: v.duration }); };
    v.onerror = () => { clearTimeout(t); res(null); };
    v.src = src;
  });
  const probeImage = (src) => new Promise((res) => {
    const im = new Image();
    im.onload = () => res({ type: "image", src, W: im.naturalWidth, H: im.naturalHeight });
    im.onerror = () => res(null);
    im.src = src;
  });
  const pr = (async () =>
    (cfg.video ? await probeVideo(cfg.video) : null) ||   // set scene.video to use a clip
    (await probeImage(cfg.image || `images/${p.id}-scene.jpg`).then((r) => r && { ...r, bleed: !!cfg.bleed })) ||
    { type: "placeholder", src: "data:image/svg+xml;charset=utf-8," + encodeURIComponent(sceneSVG(p)), W: SCENE_W, H: SCENE_H }
  )();
  sceneCache.set(p.id, pr);
  return pr;
}

function sceneSVG(p) {
  const W = SCENE_W, H = SCENE_H, c = PALETTES[p.id];
  const steps = p.slides.slice(1, -1).slice(0, PTS.length);
  const at = (i) => [PTS[i][0] / 100 * W, PTS[i][1] / 100 * H];
  const short = (s) => (s.length > 24 ? s.slice(0, 23) + "…" : s);
  let links = "", panels = "";
  steps.forEach((s, i) => {
    const [x, y] = at(i);
    if (i < steps.length - 1) {
      const [x2, y2] = at(i + 1);
      const a = x + 190, b = x2 - 190, m = (a + b) / 2;
      links += `<path d="M${a} ${y} C${m} ${y} ${m} ${y2} ${b} ${y2}" fill="none" stroke="#1d1d1f" stroke-opacity=".22" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 14"/>`;
    }
    panels += `<g transform="translate(${x - 190} ${y - 120})">
      <rect width="380" height="240" rx="18" fill="#fff" stroke="#000" stroke-opacity=".08" stroke-width="2"/>
      <circle cx="50" cy="52" r="22" fill="#0066cc"/>
      <text x="50" y="60" text-anchor="middle" font-size="22" font-weight="600" fill="#fff">${i + 1}</text>
      <text x="88" y="61" font-size="25" font-weight="600" fill="#1d1d1f">${esc(short(s.eyebrow))}</text>
      <rect x="34" y="112" width="312" height="14" rx="7" fill="#e8e8ed"/>
      <rect x="34" y="142" width="262" height="14" rx="7" fill="#e8e8ed"/>
      <rect x="34" y="172" width="196" height="14" rx="7" fill="#e8e8ed"/>
    </g>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Inter, -apple-system, 'Segoe UI', sans-serif">
    <defs>
      <radialGradient id="a" cx="22%" cy="28%" r="48%"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[0]}" stop-opacity="0"/></radialGradient>
      <radialGradient id="b" cx="80%" cy="76%" r="48%"><stop offset="0" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[1]}" stop-opacity="0"/></radialGradient>
      <pattern id="d" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#1d1d1f" fill-opacity=".07"/></pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="#f5f5f7"/>
    <rect width="${W}" height="${H}" fill="url(#a)"/>
    <rect width="${W}" height="${H}" fill="url(#b)"/>
    <rect width="${W}" height="${H}" fill="url(#d)"/>
    ${links}${panels}
  </svg>`;
}

function cameraFor(p, i, type) {
  const s = p.slides[i], n = p.slides.length;
  if (s.camera) return s.camera;
  if (type !== "placeholder" || i === 0 || i === n - 1) return { x: 50, y: 50, z: 1 };
  const [x, y] = PTS[(i - 1) % PTS.length];
  return { x, y, z: 2.1 };
}

function cameraTransform(sc, cam) {
  const vw = innerWidth, vh = innerHeight, wide = vw > 640; // matches the CSS card breakpoint
  const base = Math.max(vw / sc.W, vh / sc.H); // "cover" fit
  let z = cam.z || 1;
  let fx = vw / 2, fy = vh / 2;
  if (z > 1) {
    // Frame the subject in the space the nav and glass card leave free,
    // and zoom only as far as it still fits there.
    const navB = document.querySelector(".nav").getBoundingClientRect().bottom;
    const cr = card.hidden ? null : card.getBoundingClientRect();
    let left = 0, right = vw, top = navB, bottom = vh;
    if (cr && wide) left = cr.right;
    if (cr && !wide) bottom = cr.top;
    // Phones: let the visual run almost edge to edge.
    const freeW = right - left - (wide ? 48 : 16), freeH = bottom - top - (wide ? 40 : 20);
    const w = cam.w || 0.16, h = cam.h || w * (sc.W / sc.H) * 0.7;
    // Scenes drawn with soft edges (bleed) may zoom out past "cover" so a shot always fits.
    z = Math.max(sc.bleed ? 0.4 : 1, Math.min(z, (0.96 * freeW) / (w * sc.W * base), (0.96 * freeH) / (h * sc.H * base)));
    fx = left + (right - left) / 2;
    fy = top + (bottom - top) / 2;
  }
  const s = base * z;
  let tx = fx - (cam.x / 100) * sc.W * s;
  let ty = fy - (cam.y / 100) * sc.H * s;
  if (!sc.bleed) {
    // Photos can't show past their edges, so keep them covering the screen.
    tx = Math.min(0, Math.max(vw - sc.W * s, tx));
    ty = Math.min(0, Math.max(vh - sc.H * s, ty));
  }
  return `translate(${tx}px, ${ty}px) scale(${s})`;
}

function moveCamera(sc, cam, animate) {
  const m = sc.media, to = cameraTransform(sc, cam);
  const from = getComputedStyle(m).transform;
  m.getAnimations().forEach((a) => a.cancel());
  m.style.transform = to;
  if (animate && !REDUCED && from && from !== "none") {
    m.animate([{ transform: from }, { transform: to }], { duration: CAMERA_MS, easing: CAMERA_EASE });
  }
}

function slideTime(p, i, sc) {
  const s = p.slides[i];
  if (typeof s.time === "number") return s.time;
  return (sc.duration || 0) * (i / Math.max(1, p.slides.length - 1));
}

let scrubRaf = 0;
function playTo(v, t) {
  cancelAnimationFrame(scrubRaf);
  if (REDUCED) { v.pause(); v.currentTime = t; return; }
  if (t >= v.currentTime) {
    v.play().catch(() => { v.currentTime = t; });
    const tick = () => {
      if (v.currentTime >= t - 0.04 || v.ended) { v.pause(); v.currentTime = t; return; }
      scrubRaf = requestAnimationFrame(tick);
    };
    tick();
  } else {
    // Browsers can't play backwards, so step the playhead back frame by frame.
    v.pause();
    const from = v.currentTime, start = performance.now(), dur = (from - t) * 1000;
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur);
      v.currentTime = from - (from - t) * k;
      if (k < 1) scrubRaf = requestAnimationFrame(step);
    };
    scrubRaf = requestAnimationFrame(step);
  }
}

async function showScene(p, i, dir) {
  const info = await resolveScene(p);
  if (!scene || scene.id !== p.id) {
    const wrap = document.createElement("div");
    wrap.className = "bg";
    const media = document.createElement(info.type === "video" ? "video" : "img");
    if (info.type === "video") {
      media.muted = true; media.playsInline = true; media.preload = "auto";
      media.addEventListener("loadedmetadata", () => { media.currentTime = slideTime(p, i, info); }, { once: true });
    } else {
      media.alt = "";
    }
    media.src = info.src;
    media.className = "scene-media";
    media.style.width = `${info.W}px`;
    media.style.height = `${info.H}px`;
    wrap.appendChild(media);
    scene = { id: p.id, ...info, wrap, media, cam: cameraFor(p, i, info.type) };
    moveCamera(scene, scene.cam, false);
    swapLayer(wrap, dir);
    phTag.hidden = info.type !== "placeholder";
    if (info.type === "placeholder") phTag.textContent = `Placeholder: images/${p.id}-scene.jpg`;
  } else {
    scene.cam = cameraFor(p, i, scene.type);
    moveCamera(scene, scene.cam, true);
    if (scene.type === "video") playTo(scene.media, slideTime(p, i, scene));
  }
}

/* ---------- card content ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function slideHTML(s, i) {
  const H = i === 0 ? "h1" : "h2";
  const chips = s.chips
    ? `<div class="chips">${s.chips.map((c) => `<span class="chip${c.key ? " key" : ""}">${esc(c.t)}</span>`).join("")}</div>`
    : "";
  const note = s.note ? `<p class="note">${esc(s.note)}</p>` : "";
  const link = s.link
    ? `<a class="site-link" href="${esc(s.link.href)}" target="_blank" rel="noopener">${esc(s.link.label)}${LINK_ARROW}</a>`
    : "";
  return `<p class="eyebrow">${esc(s.eyebrow)}</p><${H} class="title">${esc(s.title)}</${H}><p class="text">${esc(s.body)}</p>${chips}${link}${note}`;
}

function contactHTML() {
  const e = encodeURIComponent;
  const mailto = `mailto:${CONTACT.email}?subject=${e(CONTACT.emailSubject)}&body=${e(CONTACT.emailBody)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${e(CONTACT.email)}&su=${e(CONTACT.emailSubject)}&body=${e(CONTACT.emailBody)}`;
  return `
    <div class="profile">
      <img class="avatar" src="${esc(CONTACT.photo)}" alt="Sahil Monga" width="88" height="88">
      <div><p class="profile-name">Sahil Monga</p><p class="profile-role">${esc(CONTACT.role)}</p></div>
    </div>
    <h1 class="title">Let’s work together</h1>
    <p class="text">I’m open to roles and freelance projects in AI automation, business analytics and web design. The fastest way to reach me is email.</p>
    <div class="links">
      <a class="link" id="emailLink" href="${esc(mailto)}"><span class="link-label">Email</span><span class="link-value">${esc(CONTACT.email)}</span><span class="copied" aria-live="polite"></span>${LINK_ARROW}</a>
      <a class="link" href="${esc(CONTACT.linkedin)}" target="_blank" rel="noopener"><span class="link-label">LinkedIn</span><span class="link-value">${esc(CONTACT.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</span>${LINK_ARROW}</a>
      <a class="link" href="${esc(CONTACT.cv)}" download><span class="link-label">CV</span><span class="link-value">Download CV (PDF)</span>${LINK_ARROW}</a>
    </div>
    <p class="email-alt">No email app? <a href="${esc(gmail)}" target="_blank" rel="noopener">Write in Gmail</a> instead.</p>
    <p class="fine">© ${new Date().getFullYear()} Sahil Monga</p>`;
}

// Clicking the email row opens a pre-filled draft in the visitor's email app,
// and also copies the address in case they don't have one set up.
contactBody.addEventListener("click", (ev) => {
  const link = ev.target.closest("#emailLink");
  if (!link || !navigator.clipboard) return;
  navigator.clipboard.writeText(CONTACT.email).then(() => {
    const note = link.querySelector(".copied");
    note.textContent = "Address copied";
    link.classList.add("is-copied");
    clearTimeout(link._t);
    link._t = setTimeout(() => { link.classList.remove("is-copied"); note.textContent = ""; }, 2500);
  }).catch(() => {});
});

function staggerIn(container, dir) {
  [...container.children].forEach((k, i) =>
    k.animate(
      [
        { opacity: 0, transform: `translateX(${dir * 24}px)`, filter: "blur(6px)" },
        { opacity: 1, transform: "none", filter: "blur(0px)" },
      ],
      { duration: T(650), delay: T(70 + i * 60), easing: EASE_OUT, fill: "backwards" }
    )
  );
}

async function swapContent(container, panel, html, dir, fresh) {
  if (!fresh && container.children.length) {
    await Promise.all(
      [...container.children].map((k, i) =>
        done(k.animate(
          [{ opacity: 0, transform: `translateX(${-dir * 16}px)`, filter: "blur(4px)" }],
          { duration: T(210), delay: T(i * 20), easing: EASE_IN, fill: "forwards" }
        ), T(210 + i * 20))
      )
    );
  }
  const h0 = panel.getBoundingClientRect().height;
  container.innerHTML = html;
  const h1 = panel.getBoundingClientRect().height;
  if (!fresh && h0 && Math.abs(h0 - h1) > 1) {
    panel.animate([{ height: `${h0}px` }, { height: `${h1}px` }], { duration: T(560), easing: SPRING });
  }
  staggerIn(container, dir);
}

/* Liquid "squeeze" when the whole panel changes context. */
function morph(panel) {
  panel.animate(
    [
      { transform: "scale(1)", borderRadius: "18px" },
      { transform: "scale(.96, .94)", borderRadius: "28px", offset: 0.35 },
      { transform: "scale(1)", borderRadius: "18px" },
    ],
    { duration: T(750), easing: EASE_OUT }
  );
}

async function hidePanel(panel) {
  await done(panel.animate(
    [{ opacity: 0, transform: "translateY(14px) scale(.96)", filter: "blur(8px)" }],
    { duration: T(260), easing: EASE_IN, fill: "forwards" }
  ), T(260));
  panel.hidden = true;
  panel.getAnimations().forEach((a) => a.cancel());
}

function showPanel(panel) {
  panel.hidden = false;
  panel.animate(
    [
      { opacity: 0, transform: "translateY(18px) scale(.96)", filter: "blur(10px)" },
      { opacity: 1, transform: "none", filter: "blur(0px)" },
    ],
    { duration: T(750), easing: EASE_OUT }
  );
}

/* ---------- footer controls ---------- */
function updateFoot() {
  const p = PROJECTS[pi], n = p.slides.length;
  if (segsFor !== pi) {
    progressEl.innerHTML = p.slides
      .map((_, i) => `<button class="seg" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`)
      .join("");
    segsFor = pi;
    progressEl.offsetWidth; // let the fill animate from empty
  }
  progressEl.querySelectorAll(".seg").forEach((s, i) => {
    s.classList.toggle("done", i <= si);
    s.setAttribute("aria-current", i === si ? "step" : "false");
  });
  counterEl.textContent = `${String(si + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  prevBtn.disabled = pi === 0 && si === 0;

  const last = si === n - 1;
  const label = pi < PROJECTS.length - 1 ? "Next project" : "Contact";
  nextBtn.classList.toggle("wide", last);
  progressEl.parentElement.classList.toggle("is-last", last); // hides "06 / 06" to make room
  nextBtn.innerHTML = last ? `<span>${label}</span>${ARROW}` : ARROW;
  nextBtn.setAttribute("aria-label", last ? label : "Next slide");
}

/* ---------- tabs ---------- */
const contactBtn = $("contactBtn");
contactBtn.addEventListener("click", () => showContact());
const TABS = PROJECTS.map((p) => ({ id: p.id, full: p.tab, short: p.short }));
TABS.forEach((t) => {
  const b = document.createElement("button");
  b.className = "tab";
  b.setAttribute("role", "tab");
  b.dataset.id = t.id;
  b.innerHTML = `<span class="full">${esc(t.full)}</span><span class="short">${esc(t.short)}</span>`;
  b.addEventListener("click", () => {
    const idx = PROJECTS.findIndex((p) => p.id === t.id);
    if (view === "project" && idx === pi && si === 0) return;
    goTo(idx, 0, view === "contact" || idx < pi ? -1 : 1);
  });
  tabsEl.appendChild(b);
});

function setActiveTab(id, instant) {
  let active;
  tabsEl.querySelectorAll(".tab").forEach((b) => {
    const on = b.dataset.id === id;
    b.setAttribute("aria-selected", on);
    if (on) active = b;
  });
  contactBtn.setAttribute("aria-current", id === "contact" ? "page" : "false");
  if (instant) indicator.classList.add("no-anim");
  indicator.classList.toggle("off", !active);
  if (active) {
    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.transform = `translateX(${active.offsetLeft}px)`;
  }
  if (instant) requestAnimationFrame(() => requestAnimationFrame(() => indicator.classList.remove("no-anim")));
  history.replaceState(null, "", `#${id}`);
}

/* ---------- navigation ---------- */
// If a click lands mid-transition, remember the latest one and run it right after.
let pending = null;
function release() {
  busy = false;
  if (pending) { const f = pending; pending = null; f(); }
}

async function goTo(npi, nsi, dir, opts = {}) {
  if (busy) { pending = () => goTo(npi, nsi, dir, opts); return; }
  busy = true;
  const fromContact = view === "contact";
  const projectChanged = npi !== pi || fromContact;
  pi = npi; si = nsi; view = "project";
  const p = PROJECTS[pi], s = p.slides[si];

  setActiveTab(p.id, opts.instant);
  const bg = showScene(p, si, dir);

  if (fromContact) {
    await hidePanel(contactEl);
    showPanel(card);
    await swapContent(cardBody, card, slideHTML(s, si), dir, true);
  } else {
    if (projectChanged && !opts.instant) morph(card);
    await swapContent(cardBody, card, slideHTML(s, si), dir, opts.instant);
  }
  updateFoot();
  await bg;
  release();

  // Warm up the next project's scene.
  const np = PROJECTS[pi + 1];
  if (np) resolveScene(np);
}

async function showContact(opts = {}) {
  if (busy) { pending = () => showContact(opts); return; }
  if (view === "contact") return;
  busy = true;
  view = "contact";
  setActiveTab("contact", opts.instant);
  scene = null;
  showBackground("contact", { noImage: true }, 0, 1); // soft gradient, no photo
  contactBody.innerHTML = contactHTML();
  if (!card.hidden) await hidePanel(card);
  showPanel(contactEl);
  staggerIn(contactBody, 1);
  release();
}

let introOpen = true; // true until "Explore the portfolio" is pressed

function next() {
  if (introOpen || view === "contact") return;
  const n = PROJECTS[pi].slides.length;
  if (si < n - 1) goTo(pi, si + 1, 1);
  else if (pi < PROJECTS.length - 1) goTo(pi + 1, 0, 1);
  else showContact();
}

function prev() {
  if (introOpen) return;
  if (view === "contact") {
    const lp = PROJECTS.length - 1;
    return goTo(lp, PROJECTS[lp].slides.length - 1, -1);
  }
  if (si > 0) goTo(pi, si - 1, -1);
  else if (pi > 0) goTo(pi - 1, PROJECTS[pi - 1].slides.length - 1, -1);
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
progressEl.addEventListener("click", (e) => {
  const seg = e.target.closest(".seg");
  if (!seg) return;
  const i = +seg.dataset.i;
  if (i !== si) goTo(pi, i, i > si ? 1 : -1);
});

// True when the gesture is over card text that can still scroll that way,
// so long card text scrolls normally instead of changing slide.
function cardCanScroll(target, dir) {
  const body = target.closest && target.closest(".card-body");
  if (!body || body.scrollHeight <= body.clientHeight + 1) return false;
  return dir > 0 ? body.scrollTop + body.clientHeight < body.scrollHeight - 1 : body.scrollTop > 0;
}

// Swipe on touch screens: left/right or up/down
let tx = 0, ty = 0, tTarget = null;
document.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; tTarget = e.target; }, { passive: true });
document.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) (dx < 0 ? next : prev)();
  else if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx) * 1.3 && !cardCanScroll(tTarget, -dy)) (dy < 0 ? next : prev)();
}, { passive: true });

// Mouse wheel / trackpad: one deliberate gesture = one slide.
//  - Only up/down scrolling counts (sideways trackpad drift is ignored).
//  - After a move, everything is ignored until the wheel has been still for a
//    moment AND the slide has finished arriving, so momentum can't skip slides.
//  - Small movements the other way (the "bounce" a trackpad sends as a swipe
//    ends) never count; reversing needs a clear, fresh scroll.
//  - Scrolls during a transition are dropped, never queued.
const WHEEL = { threshold: 60, quietMs: 300, minGapMs: 1000, reverseGapMs: 1400 };
let wheelSum = 0, wheelLocked = false, lastWheel = 0, lastMove = 0, lastDir = 0, unlockTimer = 0;
function scheduleUnlock() {
  clearTimeout(unlockTimer);
  unlockTimer = setTimeout(() => {
    const now = performance.now();
    if (!busy && now - lastWheel >= WHEEL.quietMs && now - lastMove >= WHEEL.minGapMs) wheelLocked = false;
    else scheduleUnlock();
  }, 80);
}
addEventListener("wheel", (e) => {
  let d = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
  if (cardCanScroll(e.target, d)) return;               // let long card text scroll
  e.preventDefault();
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;  // sideways: ignore
  const now = performance.now();
  if (now - lastWheel > WHEEL.quietMs) wheelSum = 0;     // new gesture: start fresh
  lastWheel = now;
  if (wheelLocked || busy) { wheelLocked = true; scheduleUnlock(); return; }
  if (wheelSum !== 0 && Math.sign(d) !== Math.sign(wheelSum)) wheelSum = 0; // direction changed mid-gesture
  wheelSum += d;
  if (Math.abs(wheelSum) < WHEEL.threshold) return;
  const dir = wheelSum > 0 ? 1 : -1;
  // Right after a move, a reverse needs to wait a little longer (avoids bounce-back).
  if (dir !== lastDir && now - lastMove < WHEEL.reverseGapMs) { wheelSum = 0; return; }
  wheelSum = 0;
  wheelLocked = true;
  lastMove = now;
  lastDir = dir;
  scheduleUnlock();
  if (dir > 0) next(); else prev();
}, { passive: false });

// Arrow keys (accessibility)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

addEventListener("hashchange", () => {
  if (introOpen) return;
  const h = location.hash.slice(1);
  if (h === "contact") return showContact();
  const idx = PROJECTS.findIndex((p) => p.id === h);
  if (idx >= 0 && (view === "contact" || idx !== pi)) goTo(idx, 0, view === "contact" || idx < pi ? -1 : 1);
});

addEventListener("resize", () => {
  if (scene) moveCamera(scene, scene.cam, false);
  const a = tabsEl.querySelector('[aria-selected="true"]');
  if (!a) return;
  indicator.classList.add("no-anim");
  indicator.style.width = `${a.offsetWidth}px`;
  indicator.style.transform = `translateX(${a.offsetLeft}px)`;
  requestAnimationFrame(() => indicator.classList.remove("no-anim"));
});

/* ---------- start ---------- */
(async () => {
  const intro = $("intro"), introBtn = $("introBtn");
  const header = document.querySelector(".nav"), main = document.querySelector("main");
  header.inert = main.inert = true; // nothing behind the intro can be tabbed to or clicked

  const hash = location.hash.slice(1);
  const idx = Math.max(0, PROJECTS.findIndex((p) => p.id === hash));
  resolveScene(PROJECTS[idx]); // load the first scene while the intro is showing
  const fontsReady = document.fonts && document.fonts.ready
    ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))])
    : null;

  introBtn.focus();
  await new Promise((r) => introBtn.addEventListener("click", r, { once: true }));
  await fontsReady;

  introOpen = false;
  header.inert = main.inert = false;
  introBtn.animate([{ transform: "scale(.94)", opacity: 0 }], { duration: T(320), easing: EASE_IN, fill: "forwards" });
  const fade = intro.animate([{ opacity: 0 }], { duration: T(800), delay: T(120), easing: EASE_OUT, fill: "forwards" });
  done(fade, T(920)).then(() => intro.remove()); // gone for good: no way back to it

  if (hash === "contact") {
    card.hidden = true;
    showContact({ instant: true });
  } else {
    await goTo(idx, 0, 1, { instant: true });
  }
})();
