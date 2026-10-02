/* THE PROSECUTION — 卷宗动效编排
   Lenis 平滑滚动 + GSAP ScrollTrigger。
   原则：无 JS 时内容完整可见；一切入场为 from-tween；
   prefers-reduced-motion 时全部停用。 */

(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 罪名滚动条(无限循环，reduced-motion 也可用 CSS 备份) ---------- */
  const chargesText =
    "COUNT 01 — AGGRAVATED STOMPING · 加重踩踏罪 · " +
    "COUNT 02 — ASSAULT UPON SERPENTS · 袭击蛇类罪 · " +
    "COUNT 03 — LETHAL KICK, FIRST DEGREE · 一级致命踢击 · " +
    "COUNT 04 — 30KM DAILY PATROL · 每日巡猎三十公里 · ";
  const track = document.getElementById("chargesTrack");
  let unit = null;
  for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    span.textContent = chargesText;
    track.appendChild(span);
    if (i === 0) unit = span;
  }

  if (reduced || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis 平滑滚动 ---------- */
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- ticker 匀速平移 ----------
     一份内容 + 一个 gap = 循环步距；位移必须 ≥ 步距，
     否则末份右侧留白、段落之间出现向后跳帧。 */
  let ticker = null;
  const startTicker = () => {
    const step = unit.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
    if (!(step > 0)) return null; // fonts not ready yet; keep the previous tween
    ticker && ticker.kill();
    return gsap.fromTo(track, { x: 0 }, {
      x: -step,           // 位移一整份 = 无缝回环
      ease: "none",
      duration: 30,       // 一份内容 30s 走完
      repeat: -1,
    });
  };
  ticker = startTicker();

  // 字体到位后步距才稳定，按真实宽度重算一次时长
  const remeasure = () => { ticker = startTicker() || ticker; };
  if (unit && document.fonts) document.fonts.ready.then(remeasure);
  window.addEventListener("resize", remeasure);

  /* ---------- 封面入场：报头逐行升起 + 物证照片揭幕 ---------- */
  const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
  heroTl
    .from(".masthead__line > span", {
      yPercent: 110,
      duration: 1.2,
      stagger: 0.14,
      delay: 0.2,
    })
    .from(".court-line", { opacity: 0, y: -8, duration: 0.7 }, 0.3)
    .from(".cover__sub, .case-meta, .scroll-cue", { opacity: 0, y: 18, stagger: 0.1, duration: 0.9 }, 0.7)
    .from(".exhibit--hero", { opacity: 0, y: 40, rotate: 1.5, duration: 1.1 }, 0.9)
    .from(".stamp--cover", { opacity: 0, scale: 1.6, rotate: 20, duration: 0.5, ease: "back.out(2.5)" }, 1.5);

  /* ---------- 打字机标题 ---------- */
  document.querySelectorAll("[data-typewrite]").forEach((el) => {
    const nodes = [];
    el.childNodes.forEach((n) => {
      if (n.nodeType === Node.BR_NODE) nodes.push({ br: true });
      else nodes.push(...n.textContent.split("").map((ch) => ({ ch })));
    });
    el.textContent = "";
    const spans = nodes.map((n) => {
      if (n.br) { el.appendChild(document.createElement("br")); return null; }
      const s = document.createElement("span");
      s.textContent = n.ch;
      s.style.visibility = "hidden";
      el.appendChild(s);
      return s;
    });
    const caret = document.createElement("span");
    caret.className = "caret";
    el.appendChild(caret);

    ScrollTrigger.create({
      trigger: el,
      start: "top 78%",
      once: true,
      onEnter: () => {
        spans.forEach((s, i) => {
          if (!s) return;
          gsap.delayedCall(i * 0.045, () => { s.style.visibility = "visible"; });
        });
        gsap.delayedCall(spans.length * 0.045 + 2.5, () => caret.remove());
      },
    });
  });

  /* ---------- 物证照片：视差 + 揭幕 ---------- */
  document.querySelectorAll(".exhibit").forEach((el) => {
    if (el.classList.contains("exhibit--hero")) return;
    gsap.from(el, {
      opacity: 0,
      y: 60,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });

  /* ---------- 证据大数字：滚动计数 ---------- */
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const target = Number(el.dataset.counter);
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        el.textContent = "0";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(obj.v); },
        });
      },
    });
  });

  /* ---------- 证据清单逐行划过 ---------- */
  gsap.from(".ledger--evidence tr", {
    opacity: 0,
    x: -24,
    stagger: 0.12,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: { trigger: ".ledger--evidence", start: "top 80%", once: true },
  });

  /* ---------- 作案现场：红线生长 ---------- */
  document.querySelectorAll(".scene__string").forEach((line) => {
    const len = Math.hypot(
      line.x2.baseVal.value - line.x1.baseVal.value,
      line.y2.baseVal.value - line.y1.baseVal.value
    );
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;
    gsap.to(line, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { trigger: ".scene__photo", start: "top 70%", end: "top 20%", scrub: true },
    });
  });

  /* ---------- STOMP：砸落 + 震屏 ---------- */
  gsap.set("#stomp", { scale: 3, opacity: 0, transformOrigin: "50% 60%" });
  ScrollTrigger.create({
    trigger: "#stomp",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.to("#stomp", { scale: 1, opacity: 1, duration: 0.35, ease: "power4.in" });
      gsap.to(".scene", { keyframes: [
        { x: -14, y: 10, duration: 0.06 },
        { x: 10, y: -8, duration: 0.06 },
        { x: -6, y: 4, duration: 0.06 },
        { x: 0, y: 0, duration: 0.1, ease: "power2.out" },
      ], delay: 0.32 });
    },
  });


  /* ---------- 判决章：砸章 ---------- */
  gsap.from(".stamp--verdict", {
    scale: 2.2,
    opacity: 0,
    rotate: -30,
    duration: 0.45,
    ease: "power4.in",
    scrollTrigger: { trigger: ".stamp--verdict", start: "top 75%", once: true },
  });
})();
