import * as THREE from 'three'

/* ----------------------------------------------------------------------------
   Procedural texture atelier. Everything in the scene is painted at runtime so
   the whole experience stays self-contained and instant to load.
---------------------------------------------------------------------------- */

function canvas(w, h) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  return c
}

function rng(seed = 1) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function finish(c, { repeat = [1, 1], srgb = true, aniso = 4 } = {}) {
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat[0], repeat[1])
  tex.anisotropy = aniso
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}

function speckle(ctx, w, h, count, color, sizeMin, sizeMax, alpha, rand) {
  ctx.fillStyle = color
  for (let i = 0; i < count; i++) {
    const s = sizeMin + rand() * (sizeMax - sizeMin)
    ctx.globalAlpha = alpha * (0.35 + rand() * 0.65)
    ctx.beginPath()
    ctx.arc(rand() * w, rand() * h, s, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

function blotches(ctx, w, h, count, colors, radius, alpha, rand) {
  for (let i = 0; i < count; i++) {
    const x = rand() * w
    const y = rand() * h
    const r = radius * (0.4 + rand())
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    const color = colors[Math.floor(rand() * colors.length)]
    g.addColorStop(0, color)
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.globalAlpha = alpha * (0.4 + rand() * 0.6)
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

function grimeEdges(ctx, w, h, color = 'rgba(30,20,10,0.5)', width = 18) {
  const g = ctx.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, color)
  g.addColorStop(0.12, 'rgba(0,0,0,0)')
  g.addColorStop(0.88, 'rgba(0,0,0,0)')
  g.addColorStop(1, color)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)
  const g2 = ctx.createLinearGradient(0, 0, w, 0)
  g2.addColorStop(0, color)
  g2.addColorStop(0.08, 'rgba(0,0,0,0)')
  g2.addColorStop(0.92, 'rgba(0,0,0,0)')
  g2.addColorStop(1, color)
  ctx.fillStyle = g2
  ctx.fillRect(0, 0, w, h)
}

function fitFont(ctx, text, maxWidth, maxSize, family, weight = 900) {
  let size = maxSize
  do {
    ctx.font = `${weight} ${size}px ${family}`
    if (ctx.measureText(text).width <= maxWidth) break
    size -= 2
  } while (size > 8)
  return size
}

/* ------------------------------- skins ----------------------------------- */

function apricotPaint(seed = 7, suture = false) {
  const w = 1024
  const h = 1024
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(seed)

  const base = ctx.createLinearGradient(0, 0, w * 0.85, h)
  base.addColorStop(0, '#ffc974')
  base.addColorStop(0.36, '#ffab46')
  base.addColorStop(0.68, '#f38a2c')
  base.addColorStop(1, '#c85a12')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, w, h)

  // broad ripe blush and sun-kissed patches
  blotches(ctx, w, h, 90, ['#ffd48c', '#ff8a2e', '#e3650f', '#b84a0c'], 190, 0.34, rand)
  blotches(ctx, w, h, 40, ['#e04f12', '#ffb45a'], 320, 0.16, rand)

  // fine velvet mottling
  speckle(ctx, w, h, 16000, '#8f3707', 0.5, 1.7, 0.22, rand)
  speckle(ctx, w, h, 9000, '#ffe0a8', 0.5, 1.5, 0.2, rand)
  speckle(ctx, w, h, 1200, '#7a2c05', 1.6, 3.6, 0.24, rand)

  // tiny fuzz strokes
  ctx.lineWidth = 1
  for (let i = 0; i < 3800; i++) {
    const x = rand() * w
    const y = rand() * h
    const a = rand() * Math.PI * 2
    const len = 2 + rand() * 6
    ctx.strokeStyle = rand() > 0.5 ? 'rgba(255,220,160,0.10)' : 'rgba(120,45,5,0.10)'
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len)
    ctx.stroke()
  }

  if (suture) {
    // the apricot's signature crease, running down the fruit's face
    const x = w * 0.5
    for (let pass = 0; pass < 3; pass++) {
      const g = ctx.createLinearGradient(x - 46, 0, x + 46, 0)
      g.addColorStop(0, 'rgba(120,42,6,0)')
      g.addColorStop(0.42, `rgba(108,36,4,${0.16 + pass * 0.1})`)
      g.addColorStop(0.5, `rgba(84,26,2,${0.3 + pass * 0.16})`)
      g.addColorStop(0.58, `rgba(120,42,6,${0.16 + pass * 0.1})`)
      g.addColorStop(1, 'rgba(120,42,6,0)')
      ctx.fillStyle = g
      ctx.fillRect(x - 50, h * 0.18, 100, h * 0.7)
    }
    // dimple at the stem
    const dg = ctx.createRadialGradient(w * 0.5, h * 0.12, 2, w * 0.5, h * 0.12, 60)
    dg.addColorStop(0, 'rgba(70,24,2,0.55)')
    dg.addColorStop(1, 'rgba(70,24,2,0)')
    ctx.fillStyle = dg
    ctx.beginPath()
    ctx.arc(w * 0.5, h * 0.12, 60, 0, Math.PI * 2)
    ctx.fill()
  }

  return c
}

export function apricotSkinTexture() {
  return finish(apricotPaint(7, false), { repeat: [2, 2], aniso: 8 })
}

export function apricotHeadTexture() {
  const c = apricotPaint(13, true)
  return finish(c, { repeat: [1, 1], aniso: 8 })
}

export function skinBumpTexture() {
  const w = 512
  const c = canvas(w, w)
  const ctx = c.getContext('2d')
  const rand = rng(91)
  ctx.fillStyle = '#7d7d7d'
  ctx.fillRect(0, 0, w, w)
  speckle(ctx, w, w, 24000, '#ffffff', 0.5, 1.8, 0.32, rand)
  speckle(ctx, w, w, 24000, '#202020', 0.5, 1.8, 0.28, rand)
  for (let i = 0; i < 900; i++) {
    ctx.strokeStyle = `rgba(${rand() > 0.5 ? '255,255,255' : '0,0,0'},0.12)`
    ctx.lineWidth = 1
    const x = rand() * w
    const y = rand() * w
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + rand() * 8 - 4, y + rand() * 8 - 4)
    ctx.stroke()
  }
  return finish(c, { repeat: [3, 3], srgb: false })
}

/* ----------------------------- environment ------------------------------- */

export function concreteTexture() {
  const w = 1024
  const c = canvas(w, w)
  const ctx = c.getContext('2d')
  const rand = rng(33)
  ctx.fillStyle = '#4b4741'
  ctx.fillRect(0, 0, w, w)
  blotches(ctx, w, w, 120, ['#3a352f', '#5c574f', '#2c2823', '#6a6357'], 220, 0.24, rand)
  blotches(ctx, w, w, 40, ['#1d1a17', '#7a7264'], 320, 0.13, rand)

  // expansion joints
  ctx.strokeStyle = 'rgba(20,17,14,0.6)'
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(0, w * 0.5)
  ctx.lineTo(w, w * 0.5)
  ctx.stroke()

  // cracks
  for (let i = 0; i < 14; i++) {
    let x = rand() * w
    let y = rand() * w
    ctx.strokeStyle = `rgba(16,13,10,${0.3 + rand() * 0.4})`
    ctx.lineWidth = 1 + rand() * 1.6
    ctx.beginPath()
    ctx.moveTo(x, y)
    const steps = 6 + Math.floor(rand() * 10)
    for (let s = 0; s < steps; s++) {
      x += (rand() - 0.5) * 70
      y += (rand() - 0.5) * 70
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  // scattered grit and paint scuffs
  speckle(ctx, w, w, 12000, '#2a2621', 0.5, 2.2, 0.3, rand)
  speckle(ctx, w, w, 5000, '#8a8171', 0.5, 1.6, 0.18, rand)
  for (let i = 0; i < 26; i++) {
    ctx.strokeStyle = `rgba(190,175,150,${0.06 + rand() * 0.12})`
    ctx.lineWidth = 2 + rand() * 6
    ctx.beginPath()
    const x = rand() * w
    const y = rand() * w
    ctx.moveTo(x, y)
    ctx.lineTo(x + (rand() - 0.5) * 220, y + (rand() - 0.5) * 60)
    ctx.stroke()
  }

  // heat ring paint: the fight circle
  ctx.strokeStyle = 'rgba(214, 162, 62, 0.20)'
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.arc(w * 0.5, w * 0.5, w * 0.4, 0, Math.PI * 2)
  ctx.stroke()
  ctx.strokeStyle = 'rgba(214, 162, 62, 0.09)'
  ctx.lineWidth = 26
  ctx.beginPath()
  ctx.arc(w * 0.5, w * 0.5, w * 0.4, 0, Math.PI * 2)
  ctx.stroke()

  return finish(c, { repeat: [5, 5], aniso: 8 })
}

export function brickTexture() {
  const w = 1024
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(55)
  ctx.fillStyle = '#211a16'
  ctx.fillRect(0, 0, w, h)
  const bw = 128
  const bh = 54
  for (let row = 0; row < h / bh; row++) {
    for (let col = -1; col < w / bw + 1; col++) {
      const x = col * bw + (row % 2 ? bw / 2 : 0)
      const y = row * bh
      const shade = 0.42 + rand() * 0.35
      const r = Math.floor(92 * shade + 34)
      const g = Math.floor(66 * shade + 24)
      const b = Math.floor(54 * shade + 20)
      ctx.fillStyle = `rgb(${r},${g},${b})`
      ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4)
      ctx.fillStyle = `rgba(0,0,0,${0.06 + rand() * 0.14})`
      ctx.fillRect(x + 4, y + bh - 12, bw - 8, 8)
    }
  }
  blotches(ctx, w, h, 60, ['#000000', '#5a4636', '#372a21'], 150, 0.24, rand)
  speckle(ctx, w, h, 9000, '#120e0b', 0.5, 2.2, 0.3, rand)
  grimeEdges(ctx, w, h, 'rgba(8,6,5,0.7)', 30)
  return finish(c, { repeat: [4, 2], aniso: 8 })
}

export function corrugatedTexture() {
  const w = 512
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(77)
  ctx.fillStyle = '#3d4145'
  ctx.fillRect(0, 0, w, h)
  for (let x = 0; x < w; x += 32) {
    const g = ctx.createLinearGradient(x, 0, x + 32, 0)
    g.addColorStop(0, 'rgba(255,255,255,0.10)')
    g.addColorStop(0.45, 'rgba(0,0,0,0.25)')
    g.addColorStop(0.7, 'rgba(0,0,0,0.42)')
    g.addColorStop(1, 'rgba(255,255,255,0.07)')
    ctx.fillStyle = g
    ctx.fillRect(x, 0, 32, h)
  }
  // rust streaks
  for (let i = 0; i < 60; i++) {
    const x = rand() * w
    const y = rand() * h
    const g = ctx.createLinearGradient(x, y, x, y + 40 + rand() * 160)
    g.addColorStop(0, `rgba(${120 + rand() * 60},${55 + rand() * 30},20,0.34)`)
    g.addColorStop(1, 'rgba(80,34,10,0)')
    ctx.fillStyle = g
    ctx.fillRect(x, y, 2 + rand() * 6, 40 + rand() * 170)
  }
  blotches(ctx, w, h, 40, ['#6b4a2c', '#26282a'], 130, 0.2, rand)
  grimeEdges(ctx, w, h, 'rgba(0,0,0,0.55)', 20)
  return finish(c, { repeat: [6, 1], aniso: 8 })
}

export function woodTexture() {
  const w = 512
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(101)
  ctx.fillStyle = '#8a5a2c'
  ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 90; i++) {
    const y = rand() * h
    ctx.strokeStyle = `rgba(${40 + rand() * 60},${20 + rand() * 30},5,${0.12 + rand() * 0.2})`
    ctx.lineWidth = 1 + rand() * 2.5
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x <= w; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * 4 + (rand() - 0.5) * 4)
    ctx.stroke()
  }
  for (let i = 0; i < 8; i++) {
    const x = rand() * w
    const y = rand() * h
    ctx.strokeStyle = 'rgba(40,22,8,0.4)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.ellipse(x, y, 14 + rand() * 18, 7 + rand() * 8, rand() * 3, 0, Math.PI * 2)
    ctx.stroke()
  }
  grimeEdges(ctx, w, h, 'rgba(20,10,3,0.5)', 24)
  return finish(c, { repeat: [2, 2], aniso: 8 })
}

export function batWoodTexture() {
  const w = 512
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(121)
  ctx.fillStyle = '#e0a35f'
  ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 70; i++) {
    const y = rand() * h
    ctx.strokeStyle = `rgba(${90 + rand() * 40},${52 + rand() * 20},${20 + rand() * 10},${0.1 + rand() * 0.16})`
    ctx.lineWidth = 1 + rand() * 2
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x <= w; x += 32) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * 3)
    ctx.stroke()
  }
  grimeEdges(ctx, w, h, 'rgba(40,22,8,0.35)', 18)
  return finish(c, { repeat: [1, 1], aniso: 8 })
}

export function rustTexture() {
  const w = 512
  const c = canvas(w, w)
  const ctx = c.getContext('2d')
  const rand = rng(131)
  ctx.fillStyle = '#5b5f63'
  ctx.fillRect(0, 0, w, w)
  blotches(ctx, w, w, 70, ['#7d4a24', '#94571f', '#3a3d40', '#b16a2b'], 90, 0.4, rand)
  speckle(ctx, w, w, 6000, '#2a1a0d', 0.5, 2.4, 0.28, rand)
  speckle(ctx, w, w, 3000, '#c8a06a', 0.5, 1.5, 0.2, rand)
  return finish(c, { repeat: [2, 2], aniso: 8 })
}

/* ------------------------------- signage --------------------------------- */

export function muteSignTexture() {
  const w = 1024
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(171)

  ctx.fillStyle = '#d8cfb8'
  ctx.fillRect(0, 0, w, h)
  blotches(ctx, w, h, 26, ['#a68f68', '#efe6cf', '#6d5b3f'], 180, 0.24, rand)
  speckle(ctx, w, h, 2600, '#5a4b34', 0.4, 2.4, 0.16, rand)
  grimeEdges(ctx, w, h, 'rgba(48,36,20,0.55)', 22)

  // painted border
  ctx.strokeStyle = 'rgba(52,40,24,0.75)'
  ctx.lineWidth = 8
  ctx.strokeRect(22, 22, w - 44, h - 44)
  ctx.strokeStyle = 'rgba(52,40,24,0.3)'
  ctx.lineWidth = 2
  ctx.strokeRect(36, 36, w - 72, h - 72)

  // nail heads
  for (const [x, y] of [[42, 42], [w - 42, 42], [42, h - 42], [w - 42, h - 42]]) {
    const g = ctx.createRadialGradient(x - 2, y - 2, 1, x, y, 11)
    g.addColorStop(0, '#d7d2c8')
    g.addColorStop(0.5, '#7d7870')
    g.addColorStop(1, '#3a362f')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fill()
  }

  const text = 'Aciz bir dilsizim'
  const family = '"Arial Black", "Helvetica Neue", Arial, sans-serif'
  const size = fitFont(ctx, text, w - 150, 128, family, 900)
  ctx.font = `900 ${size}px ${family}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'rgba(30,24,16,0.28)'
  ctx.fillText(text, w / 2 + 4, h / 2 + 6)
  ctx.fillStyle = '#211b12'
  ctx.fillText(text, w / 2, h / 2)
  // dry-brush streaks through the paint
  ctx.globalCompositeOperation = 'destination-out'
  for (let i = 0; i < 26; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${0.08 + rand() * 0.16})`
    ctx.lineWidth = 1 + rand() * 3
    ctx.beginPath()
    const y = 120 + rand() * (h - 240)
    ctx.moveTo(100 + rand() * 200, y)
    ctx.lineTo(w - 100 - rand() * 200, y + (rand() - 0.5) * 12)
    ctx.stroke()
  }
  ctx.globalCompositeOperation = 'source-over'

  return finish(c, { repeat: [1, 1], aniso: 8 })
}

export function shirtPrintTexture() {
  const w = 1024
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')

  ctx.clearRect(0, 0, w, h)

  const text = 'I LOVE 2016'
  const family = '"Arial Black", "Helvetica Neue", Arial, sans-serif'
  const size = fitFont(ctx, text, w * 0.8, 168, family, 900)
  ctx.font = `900 ${size}px ${family}`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  const textW = ctx.measureText(text).width
  const heartSize = size * 0.78
  const gap = size * 0.16
  const totalW = textW + gap + heartSize
  const startX = (w - totalW) / 2
  const cy = h / 2 + 6

  // slightly worn screen-print shadow
  ctx.fillStyle = 'rgba(28,26,24,0.32)'
  ctx.fillText(text, startX + 4, cy + 5)

  ctx.fillStyle = '#171514'
  ctx.fillText(text, startX, cy)

  // heart
  const hx = startX + textW + gap + heartSize / 2
  const hy = cy + heartSize * 0.02
  drawHeart(ctx, hx, hy, heartSize * 0.52, '#d6252b')
  ctx.globalAlpha = 0.25
  drawHeart(ctx, hx + 2, hy + 2, heartSize * 0.52, '#7c0d10')
  ctx.globalAlpha = 1
  drawHeart(ctx, hx, hy, heartSize * 0.5, '#e21f28')

  // print texture / fade
  const rand = rng(211)
  ctx.globalCompositeOperation = 'destination-out'
  speckle(ctx, w, h, 2400, '#000', 0.4, 1.8, 0.2, rand)
  ctx.globalCompositeOperation = 'source-over'

  return finish(c, { repeat: [1, 1], aniso: 8 })
}

function drawHeart(ctx, cx, cy, r, color) {
  ctx.save()
  ctx.translate(cx, cy)
  ctx.beginPath()
  const top = -r * 0.28
  ctx.moveTo(0, r * 0.92)
  ctx.bezierCurveTo(-r * 1.35, r * 0.0, -r * 0.78, -r * 1.05, 0, -r * 0.28)
  ctx.bezierCurveTo(r * 0.78, -r * 1.05, r * 1.35, r * 0.0, 0, r * 0.92)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
  ctx.restore()
}

export function tshirtTexture() {
  const w = 512
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(241)
  ctx.fillStyle = '#e6e1d5'
  ctx.fillRect(0, 0, w, h)
  blotches(ctx, w, h, 40, ['#b9b1a2', '#fffdf4', '#8c8272'], 130, 0.2, rand)
  speckle(ctx, w, h, 1600, '#6b6355', 0.4, 2, 0.12, rand)
  // sweat stains
  blotches(ctx, w, h, 10, ['#a08a6a'], 90, 0.16, rand)
  return finish(c, { repeat: [1, 1], aniso: 4 })
}

export function denimTexture() {
  const w = 256
  const c = canvas(w, w)
  const ctx = c.getContext('2d')
  const rand = rng(251)
  ctx.fillStyle = '#2c3a35'
  ctx.fillRect(0, 0, w, w)
  for (let i = 0; i < 2600; i++) {
    ctx.fillStyle = rand() > 0.5 ? 'rgba(200,210,190,0.06)' : 'rgba(0,0,0,0.12)'
    ctx.fillRect(rand() * w, rand() * w, 1 + rand() * 2, 1)
  }
  return finish(c, { repeat: [2, 2], aniso: 4 })
}

export function neonTexture() {
  const w = 1024
  const h = 384
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, w, h)

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = '400 210px Anton, "Arial Black", sans-serif'
  ctx.fillStyle = 'rgba(255, 120, 30, 0.18)'
  ctx.shadowColor = 'rgba(255, 110, 20, 0.95)'
  ctx.shadowBlur = 60
  for (let i = 0; i < 4; i++) ctx.fillText('KAYISI', w / 2, h / 2 + 8)
  ctx.shadowBlur = 24
  ctx.fillStyle = '#ffcf8a'
  ctx.fillText('KAYISI', w / 2, h / 2 + 8)
  ctx.shadowBlur = 0
  ctx.lineWidth = 2
  ctx.strokeStyle = 'rgba(255,255,240,0.8)'
  ctx.strokeText('KAYISI', w / 2, h / 2 + 8)

  return finish(c, { repeat: [1, 1], aniso: 4 })
}

export function graffitiTexture() {
  const w = 1024
  const h = 512
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(313)
  ctx.clearRect(0, 0, w, h)

  ctx.save()
  ctx.translate(w / 2, h / 2)
  ctx.rotate(-0.06)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = '400 170px Anton, "Arial Black", sans-serif'
  ctx.lineWidth = 26
  ctx.strokeStyle = 'rgba(20,16,12,0.75)'
  ctx.strokeText('OLGUN', 0, 0)
  const g = ctx.createLinearGradient(-300, -80, 300, 80)
  g.addColorStop(0, '#5de0d0')
  g.addColorStop(0.5, '#f7c243')
  g.addColorStop(1, '#e2571c')
  ctx.fillStyle = g
  ctx.fillText('OLGUN', 0, 0)
  ctx.restore()

  // overspray
  speckle(ctx, w, h, 1800, 'rgba(226,87,28,0.6)', 0.4, 2.4, 0.3, rand)
  ctx.globalCompositeOperation = 'destination-out'
  for (let i = 0; i < 80; i++) {
    ctx.beginPath()
    ctx.arc(rand() * w, rand() * h, rand() * 4, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalCompositeOperation = 'source-over'
  return finish(c, { repeat: [1, 1], aniso: 4 })
}

export function posterTexture() {
  const w = 512
  const h = 720
  const c = canvas(w, h)
  const ctx = c.getContext('2d')
  const rand = rng(401)
  ctx.fillStyle = '#c9b98d'
  ctx.fillRect(0, 0, w, h)
  blotches(ctx, w, h, 26, ['#7c6a45', '#ece0bd'], 140, 0.22, rand)
  grimeEdges(ctx, w, h, 'rgba(30,22,12,0.55)', 26)
  ctx.fillStyle = '#1c1710'
  ctx.textAlign = 'center'
  ctx.font = '700 44px "Barlow Condensed", "Arial Narrow", sans-serif'
  ctx.fillText('OLGUN', w / 2, 160)
  ctx.font = '400 210px Anton, "Arial Black", sans-serif'
  ctx.fillText('FIGHT', w / 2, 350)
  ctx.font = '700 40px "Barlow Condensed", "Arial Narrow", sans-serif'
  ctx.fillText('FRIDAY NIGHT', w / 2, 430)
  ctx.strokeStyle = 'rgba(40,30,16,0.6)'
  ctx.lineWidth = 4
  ctx.strokeRect(26, 26, w - 52, h - 52)
  // torn corner
  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.globalCompositeOperation = 'destination-out'
  ctx.beginPath()
  ctx.moveTo(w, 0)
  ctx.lineTo(w - 90, 0)
  ctx.lineTo(w, 110)
  ctx.closePath()
  ctx.fill()
  ctx.globalCompositeOperation = 'source-over'
  return finish(c, { repeat: [1, 1], aniso: 4 })
}

/* -------------------------------- fx ------------------------------------- */

export function glowTexture() {
  const s = 256
  const c = canvas(s, s)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.25, 'rgba(255,235,200,0.85)')
  g.addColorStop(0.55, 'rgba(255,150,60,0.28)')
  g.addColorStop(1, 'rgba(255,120,30,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function starTexture() {
  const s = 512
  const c = canvas(s, s)
  const ctx = c.getContext('2d')
  ctx.translate(s / 2, s / 2)
  const spikes = 14
  ctx.beginPath()
  for (let i = 0; i < spikes * 2; i++) {
    const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
    const r = i % 2 === 0 ? 230 * (0.75 + (i % 3) * 0.12) : 52
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  const g = ctx.createRadialGradient(0, 0, 4, 0, 0, 240)
  g.addColorStop(0, 'rgba(255,255,245,1)')
  g.addColorStop(0.4, 'rgba(255,214,120,0.95)')
  g.addColorStop(1, 'rgba(255,110,20,0.1)')
  ctx.fillStyle = g
  ctx.fill()
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function shockwaveTexture() {
  const s = 512
  const c = canvas(s, s)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(s / 2, s / 2, s * 0.1, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,200,120,0)')
  g.addColorStop(0.62, 'rgba(255,170,70,0.1)')
  g.addColorStop(0.82, 'rgba(255,220,160,0.85)')
  g.addColorStop(0.9, 'rgba(255,140,40,0.35)')
  g.addColorStop(1, 'rgba(255,120,20,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function dustTexture() {
  const s = 64
  const c = canvas(s, s)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,230,190,0.9)')
  g.addColorStop(0.4, 'rgba(255,190,120,0.35)')
  g.addColorStop(1, 'rgba(255,160,80,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export function smokeTexture() {
  const s = 256
  const c = canvas(s, s)
  const ctx = c.getContext('2d')
  const rand = rng(501)
  for (let i = 0; i < 26; i++) {
    const x = s / 2 + (rand() - 0.5) * 80
    const y = s / 2 + (rand() - 0.5) * 80
    const r = 30 + rand() * 70
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, `rgba(190,175,160,${0.05 + rand() * 0.08})`)
    g.addColorStop(1, 'rgba(120,110,100,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}
