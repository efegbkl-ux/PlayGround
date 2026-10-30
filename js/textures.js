import * as THREE from '../vendor/three.module.js';

/* ------------------------------------------------------------------ *
 *  Procedural texture atelier — every texture in this alley is drawn  *
 *  on a 2D canvas at boot. No external image assets, no AI art.       *
 * ------------------------------------------------------------------ */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function canvas2d(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  return { canvas, ctx };
}

export function texFrom(canvas, { repeat = [1, 1], srgb = true, aniso = 8, wrap = true } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (wrap) { t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.RepeatWrapping; }
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

function noise(ctx, w, h, amount, alpha = 1, rand = Math.random, mono = true) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * amount;
    if (mono) { d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    else { d[i] += n * 0.8; d[i + 1] += n * 0.5; d[i + 2] += n; }
    d[i + 3] *= alpha;
  }
  ctx.putImageData(img, 0, 0);
}

function speckle(ctx, w, h, count, colors, rand, minR = 0.5, maxR = 2.4) {
  for (let i = 0; i < count; i++) {
    const col = colors[(rand() * colors.length) | 0];
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.16 + rand() * 0.55;
    const r = minR + rand() * (maxR - minR);
    ctx.beginPath();
    ctx.ellipse(rand() * w, rand() * h, r, r * (0.5 + rand()), rand() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

/* ---------------------------- apricot skin ---------------------------- */
export function makeApricotTextures() {
  const rand = mulberry32(1312);
  const size = 1024;

  const map = canvas2d(size, size);
  const g = map.ctx.createRadialGradient(size * 0.38, size * 0.3, size * 0.08, size * 0.5, size * 0.5, size * 0.72);
  g.addColorStop(0, '#ffc168');
  g.addColorStop(0.32, '#f9a13d');
  g.addColorStop(0.68, '#ed8426');
  g.addColorStop(1, '#d9661c');
  map.ctx.fillStyle = g;
  map.ctx.fillRect(0, 0, size, size);
  // soft mottling and sun-kissed blush
  for (let i = 0; i < 90; i++) {
    const x = rand() * size, y = rand() * size, r = 30 + rand() * 150;
    const rg = map.ctx.createRadialGradient(x, y, 0, x, y, r);
    const warm = rand() > 0.55;
    rg.addColorStop(0, warm ? 'rgba(255,177,82,0.16)' : 'rgba(190,74,18,0.13)');
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    map.ctx.fillStyle = rg;
    map.ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  speckle(map.ctx, size, size, 2800, ['#b34e12', '#ffcf8b', '#e87a24', '#8e3a0d'], rand, 0.6, 2.0);
  // fine fuzz striations
  map.ctx.strokeStyle = 'rgba(255,216,155,0.14)';
  for (let i = 0; i < 950; i++) {
    const x = rand() * size, y = rand() * size, a = rand() * Math.PI, l = 3 + rand() * 11;
    map.ctx.lineWidth = 0.7 + rand() * 0.9;
    map.ctx.beginPath(); map.ctx.moveTo(x, y); map.ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); map.ctx.stroke();
  }

  const bump = canvas2d(512, 512);
  bump.ctx.fillStyle = '#808080'; bump.ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 4200; i++) {
    const v = (100 + rand() * 70) | 0;
    bump.ctx.fillStyle = `rgb(${v},${v},${v})`;
    bump.ctx.globalAlpha = 0.4 + rand() * 0.4;
    const x = rand() * 512, y = rand() * 512;
    bump.ctx.fillRect(x, y, 1 + rand() * 2.4, 1 + rand() * 4.5);
  }
  bump.ctx.globalAlpha = 1;

  const rough = canvas2d(256, 256);
  rough.ctx.fillStyle = '#8a8a8a'; rough.ctx.fillRect(0, 0, 256, 256);
  speckle(rough.ctx, 256, 256, 500, ['#b8b8b8', '#6d6d6d'], rand, 1, 5);

  return {
    map: texFrom(map.canvas, { repeat: [1, 1] }),
    bump: texFrom(bump.canvas, { repeat: [2, 2], srgb: false }),
    rough: texFrom(rough.canvas, { repeat: [2, 2], srgb: false }),
  };
}

export function makeLeafTexture() {
  const { canvas, ctx } = canvas2d(256, 256);
  ctx.clearRect(0, 0, 256, 256);
  const g = ctx.createLinearGradient(0, 40, 240, 230);
  g.addColorStop(0, '#8dbf4a'); g.addColorStop(0.5, '#5c9230'); g.addColorStop(1, '#33591a');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(128, 30);
  ctx.bezierCurveTo(230, 80, 218, 185, 128, 232);
  ctx.bezierCurveTo(38, 185, 26, 80, 128, 30);
  ctx.fill();
  ctx.strokeStyle = 'rgba(220,255,170,0.5)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(128, 48); ctx.lineTo(128, 218); ctx.stroke();
  ctx.lineWidth = 2;
  for (let i = 1; i < 7; i++) {
    const y = 55 + i * 24;
    ctx.beginPath(); ctx.moveTo(128, y); ctx.quadraticCurveTo(170, y + 14, 194, y + 34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(128, y); ctx.quadraticCurveTo(86, y + 14, 62, y + 34); ctx.stroke();
  }
  const t = texFrom(canvas, { wrap: false });
  return t;
}

/* ------------------------------- sign -------------------------------- */
export function makeSignTexture() {
  const { canvas, ctx } = canvas2d(1024, 640);
  const rand = mulberry32(417);
  ctx.fillStyle = '#e9ddc5'; ctx.fillRect(0, 0, 1024, 640);
  // grimy off-white board
  for (let i = 0; i < 60; i++) {
    const x = rand() * 1024, y = rand() * 640, r = 20 + rand() * 90;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(120,100,72,${0.03 + rand() * 0.06})`);
    g.addColorStop(1, 'rgba(120,100,72,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // taped corners
  ctx.save();
  for (const [x, y, r] of [[0, 0, -0.3], [1024, 0, 0.35]]) {
    ctx.translate(x, y); ctx.rotate(r);
    ctx.fillStyle = 'rgba(225,212,178,0.55)';
    ctx.fillRect(-95, -28, 190, 56);
    ctx.restore(); ctx.save();
  }
  ctx.restore();
  // border
  ctx.strokeStyle = '#2b241c'; ctx.lineWidth = 14;
  ctx.strokeRect(28, 28, 968, 584);
  ctx.strokeStyle = 'rgba(43,36,28,0.35)'; ctx.lineWidth = 3;
  ctx.strokeRect(46, 46, 932, 548);

  // punched holes + rope
  ctx.fillStyle = '#2a231b';
  for (const [x, y] of [[88, 88], [936, 88]]) {
    ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#8a7350'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(x, y, 19, 0, Math.PI * 2); ctx.stroke();
  }

  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#211b15';
  let size = 100;
  const font = (s) => `400 ${s}px Anton, "DejaVu Sans", Arial, sans-serif`;
  ctx.font = font(size);
  while (ctx.measureText('Aciz bir dilsizim').width > 850 && size > 50) {
    size -= 2; ctx.font = font(size);
  }
  // tiny wear on the ink
  ctx.save();
  ctx.shadowColor = 'rgba(30,24,18,0.25)'; ctx.shadowBlur = 1; ctx.shadowOffsetY = 3;
  ctx.fillText('Aciz bir dilsizim', 512, 332);
  ctx.restore();
  ctx.textAlign = 'center';
  ctx.font = '400 26px Anton, "DejaVu Sans", sans-serif';
  ctx.fillStyle = 'rgba(43,36,28,0.55)';
  ctx.fillText('· · ·', 512, 470);
  // scratches
  ctx.strokeStyle = 'rgba(70,58,44,0.25)'; ctx.lineWidth = 2;
  for (let i = 0; i < 22; i++) {
    const x = 60 + rand() * 900, y = 60 + rand() * 520, l = 8 + rand() * 45;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + l, y + l * 0.3); ctx.stroke();
  }
  speckle(ctx, 1024, 640, 500, ['#7a6a54', '#b09a78', '#3a3026'], rand, 0.4, 1.6);

  return texFrom(canvas, { wrap: false });
}

/* ----------------------------- t-shirt ------------------------------- */
function drawHeart(ctx, x, y, s, fill = '#e3273f') {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s / 100, s / 100);
  ctx.beginPath();
  ctx.moveTo(0, 32);
  ctx.bezierCurveTo(-58, -18, -30, -66, 0, -30);
  ctx.bezierCurveTo(30, -66, 58, -18, 0, 32);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = 'rgba(90,8,20,0.4)'; ctx.lineWidth = 3; ctx.stroke();
  // highlight
  ctx.beginPath();
  ctx.ellipse(-18, -20, 9, 13, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.32)'; ctx.fill();
  ctx.restore();
}

export function makeShirtPrintTexture() {
  const { canvas, ctx } = canvas2d(1024, 512);
  ctx.clearRect(0, 0, 1024, 512);
  const rand = mulberry32(2016);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const font = (s) => `400 ${s}px Anton, "DejaVu Sans", Arial, sans-serif`;
  const full = 'I LOVE 2016';
  let size = 170;
  ctx.font = font(size);
  while (ctx.measureText(full).width > 760 && size > 60) { size -= 2; ctx.font = font(size); }
  const textW = ctx.measureText(full).width;
  const heartS = size * 0.82;
  const totalW = textW + heartS * 1.18;
  const startX = 512 - totalW / 2;
  // print is slightly worn cream
  const grad = ctx.createLinearGradient(0, 140, 0, 370);
  grad.addColorStop(0, '#fff6e6'); grad.addColorStop(0.55, '#f5e6cd'); grad.addColorStop(1, '#e4d0b2');
  ctx.fillStyle = grad;
  ctx.fillText(full, startX + textW / 2, 258);
  drawHeart(ctx, startX + textW + heartS * 0.62, 258, heartS, '#df2a42');
  // print texture speckle (worn screen-print)
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 1700; i++) {
    const x = rand() * 1024, y = 150 + rand() * 210;
    ctx.globalAlpha = 0.25 + rand() * 0.6;
    ctx.beginPath(); ctx.arc(x, y, 0.4 + rand() * 1.8, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
  // tiny print registration cross
  ctx.fillStyle = 'rgba(245,230,205,0.5)';
  ctx.fillRect(66, 92, 22, 3); ctx.fillRect(75, 83, 3, 21);
  return texFrom(canvas, { wrap: false });
}

export function makeShirtFabricTexture(base = '#1b2b46') {
  const { canvas, ctx } = canvas2d(512, 512);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  const rand = mulberry32(99);
  for (let i = 0; i < 3800; i++) {
    const x = rand() * 512, y = rand() * 512;
    ctx.strokeStyle = rand() > 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 5 + rand() * 9, y); ctx.stroke();
  }
  for (let i = 0; i < 14; i++) {
    const x = rand() * 512;
    const g = ctx.createLinearGradient(x, 0, x + 40, 0);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.5, 'rgba(0,0,0,0.14)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x, 0, 40, 512);
  }
  return texFrom(canvas, { repeat: [2, 2] });
}

/* ----------------------------- surfaces ------------------------------ */
export function makeBrickTextures() {
  const rand = mulberry32(777);
  const W = 1024, H = 1024;
  const map = canvas2d(W, H);
  const bump = canvas2d(W, H);
  map.ctx.fillStyle = '#3b2c25'; map.ctx.fillRect(0, 0, W, H);
  bump.ctx.fillStyle = '#5e5e5e'; bump.ctx.fillRect(0, 0, W, H);
  const bw = 128, bh = 64, mortar = 7;
  for (let row = 0; row < H / bh; row++) {
    const offset = row % 2 ? -bw / 2 : 0;
    for (let col = -1; col < W / bw + 1; col++) {
      const x = col * bw + offset + mortar / 2;
      const y = row * bh + mortar / 2;
      const w = bw - mortar, h = bh - mortar;
      const v = rand();
      const base = [
        [108, 57, 43], [122, 65, 47], [91, 48, 38], [135, 76, 54], [83, 45, 37], [116, 60, 42]
      ][(v * 6) | 0];
      const shade = 0.8 + rand() * 0.35;
      const r = Math.min(255, base[0] * shade), g2 = Math.min(255, base[1] * shade), b = Math.min(255, base[2] * shade);
      map.ctx.fillStyle = `rgb(${r | 0},${g2 | 0},${b | 0})`;
      map.ctx.fillRect(x, y, w, h);
      // per-brick mottling
      for (let i = 0; i < 26; i++) {
        map.ctx.fillStyle = rand() > .5 ? 'rgba(255,190,140,0.05)' : 'rgba(20,10,6,0.09)';
        const px = x + rand() * w, py = y + rand() * h, pr = 2 + rand() * 12;
        map.ctx.fillRect(px, py, pr, pr * 0.6);
      }
      // chipped edges
      if (rand() > 0.8) {
        map.ctx.fillStyle = 'rgba(40,24,18,0.5)';
        map.ctx.beginPath();
        map.ctx.moveTo(x + rand() * w, y);
        map.ctx.lineTo(x + rand() * w, y + 5 + rand() * 9);
        map.ctx.lineTo(x + rand() * w, y);
        map.ctx.fill();
      }
      // bump gradient
      const bg = bump.ctx.createRadialGradient(x + w / 2, y + h / 2, 2, x + w / 2, y + h / 2, w * 0.7);
      bg.addColorStop(0, '#b5b5b5'); bg.addColorStop(1, '#6a6a6a');
      bump.ctx.fillStyle = bg;
      bump.ctx.fillRect(x, y, w, h);
    }
  }
  // grime streaks
  for (let i = 0; i < 46; i++) {
    const x = rand() * W, w = 8 + rand() * 60, top = rand() * H * 0.4;
    const g = map.ctx.createLinearGradient(0, top, 0, top + 300 + rand() * 500);
    g.addColorStop(0, `rgba(15,10,7,${0.05 + rand() * 0.2})`); g.addColorStop(1, 'rgba(15,10,7,0)');
    map.ctx.fillStyle = g; map.ctx.fillRect(x, top, w, H);
  }
  // damp patches
  for (let i = 0; i < 20; i++) {
    const x = rand() * W, y = rand() * H, r = 40 + rand() * 150;
    const g = map.ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(20,28,24,0.18)'); g.addColorStop(1, 'rgba(20,28,24,0)');
    map.ctx.fillStyle = g; map.ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  speckle(map.ctx, W, H, 2400, ['#1a100b', '#b87a58', '#5a392c'], rand, 0.4, 2);
  return {
    map: texFrom(map.canvas, { repeat: [1, 1] }),
    bump: texFrom(bump.canvas, { repeat: [1, 1], srgb: false }),
  };
}

export function makeAsphaltTextures() {
  const rand = mulberry32(808);
  const W = 1024, H = 1024;
  const map = canvas2d(W, H);
  map.ctx.fillStyle = '#2a2724'; map.ctx.fillRect(0, 0, W, H);
  speckle(map.ctx, W, H, 26000, ['#3b3732', '#211e1b', '#4b4540', '#171513', '#5a5148'], rand, 0.5, 2.4);
  // cracks
  for (let i = 0; i < 26; i++) {
    let x = rand() * W, y = rand() * H;
    map.ctx.strokeStyle = `rgba(8,7,6,${0.35 + rand() * 0.4})`;
    map.ctx.lineWidth = 0.8 + rand() * 2.2;
    map.ctx.beginPath(); map.ctx.moveTo(x, y);
    const segs = 5 + (rand() * 9 | 0);
    for (let s = 0; s < segs; s++) {
      x += (rand() - 0.5) * 70; y += 15 + rand() * 55;
      map.ctx.lineTo(x, y);
      if (rand() > 0.7) { map.ctx.moveTo(x, y); }
    }
    map.ctx.stroke();
  }
  // oil stains & faded marks
  for (let i = 0; i < 22; i++) {
    const x = rand() * W, y = rand() * H, r = 25 + rand() * 120;
    const g = map.ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(8,7,6,${0.25 + rand() * 0.4})`); g.addColorStop(0.65, 'rgba(8,7,6,0.12)'); g.addColorStop(1, 'rgba(8,7,6,0)');
    map.ctx.fillStyle = g; map.ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // faded yellow parking paint
  map.ctx.save();
  map.ctx.translate(160, 800); map.ctx.rotate(-0.08);
  map.ctx.fillStyle = 'rgba(190,155,60,0.18)';
  for (let i = 0; i < 4; i++) map.ctx.fillRect(0, i * 30, 260, 9);
  map.ctx.restore();
  // wet reflective smear
  for (let i = 0; i < 8; i++) {
    const x = rand() * W, y = rand() * H, r = 70 + rand() * 150;
    const g = map.ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(30,45,55,0.20)'); g.addColorStop(1, 'rgba(30,45,55,0)');
    map.ctx.fillStyle = g; map.ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  const bump = canvas2d(512, 512);
  bump.ctx.fillStyle = '#727272'; bump.ctx.fillRect(0, 0, 512, 512);
  speckle(bump.ctx, 512, 512, 12000, ['#8a8a8a', '#545454', '#9c9c9c', '#3f3f3f'], mulberry32(44), 0.5, 2.2);
  return {
    map: texFrom(map.canvas, { repeat: [5, 5] }),
    bump: texFrom(bump.canvas, { repeat: [10, 10], srgb: false }),
  };
}

export function makeWoodTexture(base = '#7a4a26', repeat = [2, 1]) {
  const rand = mulberry32(55);
  const { canvas, ctx } = canvas2d(512, 512);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 220; i++) {
    ctx.strokeStyle = `rgba(${40 + rand() * 45},${20 + rand() * 25},${8 + rand() * 15},${0.18 + rand() * 0.3})`;
    ctx.lineWidth = 0.7 + rand() * 3;
    const y = rand() * 512;
    ctx.beginPath(); ctx.moveTo(0, y);
    for (let x = 0; x <= 512; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * (2 + rand() * 5));
    ctx.stroke();
  }
  for (let i = 0; i < 6; i++) {
    const x = rand() * 512, y = rand() * 512;
    ctx.strokeStyle = 'rgba(35,18,8,0.55)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(x, y, 12 + rand() * 18, 4 + rand() * 8, rand(), 0, Math.PI * 2); ctx.stroke();
  }
  speckle(ctx, 512, 512, 900, ['#3b210f', '#a8703c', '#5d3517'], rand, 0.4, 1.5);
  return texFrom(canvas, { repeat });
}

export function makeMetalTexture(base = '#5d6164', rust = 0.25) {
  const rand = mulberry32(33);
  const { canvas, ctx } = canvas2d(512, 512);
  ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 90; i++) {
    ctx.strokeStyle = rand() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 0.6 + rand() * 1.6;
    const y = rand() * 512;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y + (rand() - 0.5) * 8); ctx.stroke();
  }
  for (let i = 0; i < 16 * rust * 10; i++) {
    const x = rand() * 512, y = rand() * 512, r = 3 + rand() * 30;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(130,60,24,${0.15 + rust * 0.4})`); g.addColorStop(1, 'rgba(130,60,24,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  speckle(ctx, 512, 512, 1700, ['#2d2f30', '#898d8f', '#7a431f'], rand, 0.4, 1.7);
  return texFrom(canvas, { repeat: [2, 2] });
}

export function makeCardboardTexture() {
  const rand = mulberry32(12);
  const { canvas, ctx } = canvas2d(512, 512);
  ctx.fillStyle = '#9a6e3f'; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = rand() > 0.5 ? 'rgba(60,40,20,0.12)' : 'rgba(220,180,120,0.12)';
    ctx.fillRect(rand() * 512, rand() * 512, 2 + rand() * 8, 1 + rand() * 3);
  }
  ctx.strokeStyle = 'rgba(60,35,15,0.6)'; ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 452, 452);
  ctx.strokeStyle = 'rgba(230,200,150,0.25)'; ctx.lineWidth = 12;
  ctx.beginPath(); ctx.moveTo(0, 256); ctx.lineTo(512, 256); ctx.stroke();
  return texFrom(canvas, { repeat: [1, 1] });
}

/* ------------------------- graffiti & neon --------------------------- */
export function makeGraffitiTexture(text, colors = ['#ff6a1f', '#ffd05a'], seed = 1) {
  const rand = mulberry32(seed);
  const { canvas, ctx } = canvas2d(1024, 512);
  ctx.clearRect(0, 0, 1024, 512);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  let size = 230;
  ctx.font = `400 ${size}px Anton, Impact, sans-serif`;
  while (ctx.measureText(text).width > 900 && size > 70) { size -= 4; ctx.font = `400 ${size}px Anton, Impact, sans-serif`; }
  const w = ctx.measureText(text).width;
  // paint halo
  ctx.save();
  ctx.translate(512, 256); ctx.rotate((rand() - 0.5) * 0.08);
  ctx.shadowColor = colors[0]; ctx.shadowBlur = 30;
  ctx.fillStyle = colors[0];
  ctx.fillText(text, 0, 0);
  ctx.shadowBlur = 0;
  // highlight offset
  ctx.fillStyle = colors[1] || '#ffe6a8';
  ctx.globalAlpha = 0.32;
  ctx.fillText(text, -4, -5);
  ctx.globalAlpha = 1;
  // drips
  for (let i = 0; i < 26; i++) {
    const x = -w / 2 + rand() * w;
    const y = size * 0.28 + rand() * 18;
    ctx.fillStyle = colors[0];
    ctx.globalAlpha = 0.3 + rand() * 0.45;
    ctx.fillRect(x, y, 2 + rand() * 4, 12 + rand() * 65);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
  // overspray
  speckle(ctx, 1024, 512, 700, [colors[0], colors[1] || '#ffd05a'], rand, 0.5, 3.2);
  return texFrom(canvas, { wrap: false });
}

export function makeTagTexture(seed = 4) {
  const rand = mulberry32(seed);
  const { canvas, ctx } = canvas2d(512, 512);
  ctx.clearRect(0, 0, 512, 512);
  ctx.translate(256, 256);
  ctx.strokeStyle = '#c7c9d1';
  ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(-140, 40);
  ctx.bezierCurveTo(-120, -120, 10, -120, -20, -10);
  ctx.bezierCurveTo(-40, 70, 100, 110, 130, -40);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,61,110,0.7)'; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(-170, 110); ctx.lineTo(160, 130); ctx.stroke();
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = 'rgba(199,201,209,0.4)';
    ctx.fillRect(-150 + rand() * 300, 90, 3, 20 + rand() * 40);
  }
  return texFrom(canvas, { wrap: false });
}

export function makeNeonTexture() {
  const { canvas, ctx } = canvas2d(1024, 320);
  ctx.clearRect(0, 0, 1024, 320);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '400 200px Anton, Impact, sans-serif';
  ctx.shadowColor = '#ff8a1f'; ctx.shadowBlur = 34;
  ctx.fillStyle = '#ffd6a0';
  ctx.fillText('KAYISI', 512, 160);
  ctx.shadowBlur = 0;
  ctx.strokeStyle = '#ff7a13'; ctx.lineWidth = 4;
  ctx.strokeText('KAYISI', 512, 160);
  ctx.strokeStyle = 'rgba(255,230,190,0.6)'; ctx.lineWidth = 1.4;
  ctx.strokeText('KAYISI', 512, 160);
  return texFrom(canvas, { wrap: false });
}

export function makePosterTexture(kind = 'gym') {
  const rand = mulberry32(kind.length * 91);
  const { canvas, ctx } = canvas2d(512, 720);
  if (kind === 'gym') {
    ctx.fillStyle = '#17110c'; ctx.fillRect(0, 0, 512, 720);
    ctx.fillStyle = '#ff9f2e'; ctx.fillRect(0, 0, 512, 12); ctx.fillRect(0, 708, 512, 12);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ff9f2e';
    ctx.font = '400 88px Anton, Impact, sans-serif';
    ctx.fillText('KAYISI', 256, 120);
    ctx.fillStyle = '#f7ead4';
    ctx.font = '400 54px Anton, Impact, sans-serif';
    ctx.fillText('GYM', 256, 185);
    ctx.fillStyle = 'rgba(247,234,212,0.6)';
    ctx.font = '700 19px Inter, Arial, sans-serif';
    ctx.fillText('NO PAIN. NO PIT.', 256, 230);
    // silhouette dumbbell
    ctx.save(); ctx.translate(256, 420); ctx.rotate(-0.16);
    ctx.fillStyle = '#ff9f2e';
    ctx.fillRect(-110, -13, 220, 26);
    ctx.fillRect(-150, -70, 36, 140); ctx.fillRect(114, -70, 36, 140);
    ctx.fillRect(-170, -45, 20, 90); ctx.fillRect(150, -45, 20, 90);
    ctx.restore();
    ctx.fillStyle = 'rgba(247,234,212,0.45)';
    ctx.font = '700 15px Inter, Arial, sans-serif';
    ctx.fillText('OPEN 24H · ALLEY DIVISION', 256, 650);
    ctx.fillStyle = '#ff9f2e';
    ctx.font = '400 36px Anton, Impact, sans-serif';
    ctx.fillText('GET RIPE.', 256, 600);
  } else if (kind === 'missing') {
    ctx.fillStyle = '#efe2c8'; ctx.fillRect(0, 0, 512, 720);
    ctx.fillStyle = '#181310'; ctx.fillRect(0, 0, 512, 116);
    ctx.textAlign = 'center'; ctx.fillStyle = '#efe2c8';
    ctx.font = '400 64px Anton, Impact, sans-serif';
    ctx.fillText('MISSING', 256, 82);
    ctx.fillStyle = '#2a221b';
    ctx.font = '700 19px Inter, Arial, sans-serif';
    ctx.fillText('HAVE YOU SEEN THIS VOICE?', 256, 170);
    // crude face
    ctx.fillStyle = '#d9c7a8';
    ctx.beginPath(); ctx.ellipse(256, 330, 98, 122, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2a221b';
    ctx.beginPath(); ctx.arc(222, 316, 9, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(290, 316, 9, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#2a221b'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(224, 380); ctx.quadraticCurveTo(256, 364, 288, 380); ctx.stroke();
    ctx.font = '700 16px Inter, Arial, sans-serif';
    ctx.fillText('REWARD: ONE APRICOT', 256, 560);
  } else {
    ctx.fillStyle = '#241518'; ctx.fillRect(0, 0, 512, 720);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ff3d6e';
    ctx.font = '400 70px Anton, Impact, sans-serif';
    ctx.fillText('2016', 256, 130);
    ctx.fillStyle = '#f7ead4';
    ctx.font = '400 54px Anton, Impact, sans-serif';
    ctx.fillText('NEVER', 256, 220);
    ctx.fillText('FORGET', 256, 275);
    ctx.fillStyle = '#ff3d6e';
    ctx.font = '400 90px Anton, Impact, sans-serif';
    ctx.fillText('♥', 256, 420);
    ctx.strokeStyle = 'rgba(247,234,212,0.2)'; ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(40 + i * 60, 500); ctx.lineTo(40 + i * 60, 680); ctx.stroke(); }
  }
  speckle(ctx, 512, 720, 400, ['#000000', '#ffffff'], rand, 0.3, 1.4);
  return texFrom(canvas, { wrap: false });
}

/* ------------------------------ sprites ------------------------------ */
export function makeBurstTexture(text = 'POW!', color = '#ffd35e', stroke = '#1b0b03', rotate = -0.13) {
  const { canvas, ctx } = canvas2d(512, 320);
  ctx.clearRect(0, 0, 512, 320);
  ctx.save();
  ctx.translate(256, 160); ctx.rotate(rotate);
  // jagged starburst
  ctx.beginPath();
  const spikes = 14;
  for (let i = 0; i < spikes * 2; i++) {
    const a = (i / (spikes * 2)) * Math.PI * 2;
    const r = i % 2 ? 78 : 128 + (i % 3) * 22;
    const x = Math.cos(a) * r * 1.5, y = Math.sin(a) * r * 0.95;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = stroke; ctx.fill();
  ctx.scale(0.92, 0.88);
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const a = (i / (spikes * 2)) * Math.PI * 2;
    const r = i % 2 ? 64 : 116 + (i % 3) * 18;
    const x = Math.cos(a) * r * 1.5, y = Math.sin(a) * r * 0.95;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = color; ctx.fill();
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '400 118px Anton, Impact, sans-serif';
  ctx.lineWidth = 12; ctx.strokeStyle = stroke; ctx.strokeText(text, 0, 8);
  ctx.fillStyle = '#fff7e8'; ctx.fillText(text, 0, 8);
  ctx.restore();
  return texFrom(canvas, { wrap: false });
}

export function makeHealthBarSprite(name, accent = '#ff9f2e') {
  const { canvas, ctx } = canvas2d(512, 128);
  ctx.clearRect(0, 0, 512, 128);
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.font = '400 34px Anton, Impact, sans-serif';
  ctx.fillStyle = '#f8ecd8';
  ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowBlur = 8;
  ctx.fillText(name, 16, 30);
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(0,0,0,0.62)';
  ctx.fillRect(16, 54, 480, 24);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 2; ctx.strokeRect(16, 54, 480, 24);
  const grad = ctx.createLinearGradient(16, 0, 496, 0);
  grad.addColorStop(0, accent); grad.addColorStop(1, '#ff3d6e');
  ctx.fillStyle = grad;
  ctx.fillRect(20, 58, 472, 16);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  for (let i = 1; i < 4; i++) ctx.fillRect(20 + i * 118, 58, 2, 16);
  return { canvas, ctx, accent };
}

export function makeGlowTexture(color = '255,150,60') {
  const { canvas, ctx } = canvas2d(256, 256);
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, `rgba(${color},0.9)`);
  g.addColorStop(0.25, `rgba(${color},0.36)`);
  g.addColorStop(0.65, `rgba(${color},0.08)`);
  g.addColorStop(1, `rgba(${color},0)`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
  return texFrom(canvas, { wrap: false });
}

export function makeSmokeTexture() {
  const { canvas, ctx } = canvas2d(256, 256);
  const rand = mulberry32(7);
  ctx.clearRect(0, 0, 256, 256);
  for (let i = 0; i < 26; i++) {
    const x = 70 + rand() * 116, y = 70 + rand() * 116, r = 30 + rand() * 60;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(200,190,180,0.14)');
    g.addColorStop(1, 'rgba(200,190,180,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  return texFrom(canvas, { wrap: false });
}
