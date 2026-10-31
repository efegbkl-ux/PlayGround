import * as THREE from 'three'

let seed = 91731
function random() {
  seed = (seed * 1664525 + 1013904223) >>> 0
  return seed / 4294967296
}

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function textureFromCanvas(canvas, { repeat = [1, 1], srgb = true } = {}) {
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(repeat[0], repeat[1])
  texture.anisotropy = 8
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

export function makeApricotSkin() {
  seed = 91731
  const size = 1024
  const canvas = makeCanvas(size, size)
  const ctx = canvas.getContext('2d')

  const base = ctx.createLinearGradient(0, 0, size, size)
  base.addColorStop(0, '#ffb457')
  base.addColorStop(0.32, '#f7982f')
  base.addColorStop(0.68, '#ef811c')
  base.addColorStop(1, '#d9610d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  // Large, soft blushes and uneven ripeness.
  for (let i = 0; i < 34; i++) {
    const x = random() * size
    const y = random() * size
    const r = 60 + random() * 230
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    const warm = random() > 0.45
    g.addColorStop(0, warm ? 'rgba(255,206,116,0.17)' : 'rgba(178,58,2,0.15)')
    g.addColorStop(1, 'rgba(255,180,80,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Fine freckles / ripeness speckles.
  for (let i = 0; i < 5400; i++) {
    const x = random() * size
    const y = random() * size
    const r = random() * 2.3 + 0.25
    ctx.fillStyle =
      random() > 0.52
        ? `rgba(127,45,4,${0.07 + random() * 0.25})`
        : `rgba(255,222,151,${0.06 + random() * 0.2})`
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Pores and tiny sun spots.
  for (let i = 0; i < 490; i++) {
    const x = random() * size
    const y = random() * size
    const r = 1.2 + random() * 4.2
    ctx.strokeStyle = `rgba(117,39,3,${0.1 + random() * 0.18})`
    ctx.lineWidth = 0.8 + random() * 1.4
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.stroke()
  }

  // A little velvet fuzz, the signature of a real apricot.
  for (let i = 0; i < 1400; i++) {
    const x = random() * size
    const y = random() * size
    const len = 1.5 + random() * 4
    ctx.strokeStyle = `rgba(255,239,205,${0.03 + random() * 0.08})`
    ctx.lineWidth = 0.7
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + (random() - 0.5) * 3, y - len)
    ctx.stroke()
  }

  const bump = makeCanvas(512, 512)
  const bctx = bump.getContext('2d')
  const img = bctx.createImageData(512, 512)
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 100 + Math.floor(random() * 70)
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v
    img.data[i + 3] = 255
  }
  bctx.putImageData(img, 0, 0)
  for (let i = 0; i < 900; i++) {
    bctx.fillStyle = `rgba(30,30,30,${0.16 + random() * 0.34})`
    bctx.beginPath()
    bctx.arc(random() * 512, random() * 512, 0.5 + random() * 2.4, 0, Math.PI * 2)
    bctx.fill()
  }

  return {
    map: textureFromCanvas(canvas),
    bump: textureFromCanvas(bump, { srgb: false }),
  }
}

export function makeConcrete() {
  seed = 41123
  const size = 1024
  const canvas = makeCanvas(size, size)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#353b3a'
  ctx.fillRect(0, 0, size, size)

  for (let i = 0; i < 230; i++) {
    const x = random() * size
    const y = random() * size
    const r = 20 + random() * 160
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, `rgba(${random() > 0.5 ? '16,20,19' : '82,85,78'},${0.05 + random() * 0.1})`)
    g.addColorStop(1, 'rgba(30,34,33,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  for (let i = 0; i < 12000; i++) {
    const v = 35 + Math.floor(random() * 40)
    ctx.fillStyle = `rgba(${v},${v + 3},${v + 1},${0.15 + random() * 0.4})`
    ctx.fillRect(random() * size, random() * size, 1 + random() * 2.2, 1 + random() * 2.2)
  }

  // Hairline cracks.
  ctx.strokeStyle = 'rgba(12,15,15,0.55)'
  for (let c = 0; c < 14; c++) {
    let x = random() * size
    let y = random() * size
    ctx.lineWidth = 0.6 + random() * 1.8
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let s = 0; s < 9; s++) {
      x += (random() - 0.5) * 90
      y += (random() - 0.5) * 90
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  // Old stains and scuffs.
  for (let i = 0; i < 24; i++) {
    const x = random() * size
    const y = random() * size
    const g = ctx.createRadialGradient(x, y, 1, x, y, 30 + random() * 80)
    g.addColorStop(0, `rgba(10,12,11,${0.12 + random() * 0.2})`)
    g.addColorStop(1, 'rgba(10,12,11,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, 80, 0, Math.PI * 2)
    ctx.fill()
  }

  return textureFromCanvas(canvas, { repeat: [7, 7] })
}

export function makeWall() {
  seed = 771
  const canvas = makeCanvas(1024, 1024)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#242c2d'
  ctx.fillRect(0, 0, 1024, 1024)
  for (let i = 0; i < 7000; i++) {
    const v = 24 + random() * 26
    ctx.fillStyle = `rgba(${v},${v + 4},${v + 4},${0.2 + random() * 0.35})`
    ctx.fillRect(random() * 1024, random() * 1024, 1 + random() * 4, 1 + random() * 4)
  }
  // Brick seams.
  ctx.strokeStyle = 'rgba(9,13,14,0.28)'
  ctx.lineWidth = 2
  for (let y = 0; y < 1024; y += 86) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(1024, y)
    ctx.stroke()
    for (let x = ((y / 86) % 2) * 70; x < 1024; x += 140) {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + 86)
      ctx.stroke()
    }
  }
  // Water streaks.
  for (let i = 0; i < 40; i++) {
    const x = random() * 1024
    const w = 2 + random() * 16
    const g = ctx.createLinearGradient(0, 0, 0, 1024)
    g.addColorStop(0, 'rgba(8,12,13,0.28)')
    g.addColorStop(0.7, 'rgba(8,12,13,0.1)')
    g.addColorStop(1, 'rgba(8,12,13,0)')
    ctx.fillStyle = g
    ctx.fillRect(x, 0, w, 1024)
  }
  return textureFromCanvas(canvas, { repeat: [3, 1] })
}

export function makeWood() {
  seed = 112
  const canvas = makeCanvas(512, 512)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#5e3e24'
  ctx.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 5000; i++) {
    const v = 40 + random() * 70
    ctx.fillStyle = `rgba(${v + 40},${v + 10},${Math.max(8, v - 18)},${0.1 + random() * 0.3})`
    ctx.fillRect(random() * 512, random() * 512, 2 + random() * 22, 0.6 + random() * 1.4)
  }
  for (let i = 0; i < 34; i++) {
    const y = random() * 512
    ctx.strokeStyle = `rgba(28,14,6,${0.12 + random() * 0.26})`
    ctx.lineWidth = 1 + random() * 2
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x <= 512; x += 16) {
      ctx.lineTo(x, y + Math.sin(x * 0.035 + i) * (2 + random() * 4))
    }
    ctx.stroke()
  }
  return textureFromCanvas(canvas, { repeat: [1, 1] })
}

function fitText(ctx, text, maxWidth, startSize, weight = '900') {
  let size = startSize
  do {
    ctx.font = `${weight} ${size}px "Arial Black", "DejaVu Sans", Impact, sans-serif`
    if (ctx.measureText(text).width <= maxWidth) return size
    size -= 2
  } while (size > 10)
  return size
}

function heartPath(ctx, x, y, size) {
  ctx.beginPath()
  ctx.moveTo(x, y + size * 0.3)
  ctx.bezierCurveTo(x - size * 0.54, y - size * 0.16, x - size * 0.52, y - size * 0.62, x - size * 0.22, y - size * 0.62)
  ctx.bezierCurveTo(x - size * 0.08, y - size * 0.62, x, y - size * 0.52, x, y - size * 0.4)
  ctx.bezierCurveTo(x, y - size * 0.52, x + size * 0.08, y - size * 0.62, x + size * 0.22, y - size * 0.62)
  ctx.bezierCurveTo(x + size * 0.52, y - size * 0.62, x + size * 0.54, y - size * 0.16, x, y + size * 0.3)
  ctx.closePath()
}

export function makeShirt() {
  seed = 4242
  const w = 1024
  const h = 512
  const canvas = makeCanvas(w, h)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, w, h)

  const text = 'I LOVE 2016'
  const size = fitText(ctx, text, 700, 152, '900')
  ctx.font = `900 ${size}px "Arial Black", "DejaVu Sans", Impact, sans-serif`
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  const heartSize = size * 0.92
  const gap = size * 0.16
  const textWidth = ctx.measureText(text).width
  const totalWidth = textWidth + gap + heartSize
  const startX = (w - totalWidth) / 2
  const midY = h * 0.52

  // Soft fabric shadow under the print, so it sits on the shirt rather than floating.
  ctx.save()
  ctx.filter = 'blur(5px)'
  ctx.fillStyle = 'rgba(48, 39, 28, 0.28)'
  ctx.textAlign = 'left'
  ctx.font = `900 ${size}px "Arial Black", "DejaVu Sans", Impact, sans-serif`
  ctx.fillText(text, startX + 3, midY + 5)
  ctx.restore()

  ctx.fillStyle = '#151514'
  ctx.fillText(text, startX, midY)

  const hx = startX + textWidth + gap + heartSize / 2
  ctx.save()
  ctx.translate(hx, midY + heartSize * 0.16)
  heartPath(ctx, 0, 0, heartSize)
  const hg = ctx.createLinearGradient(0, -heartSize * 0.6, 0, heartSize * 0.35)
  hg.addColorStop(0, '#ef5b54')
  hg.addColorStop(1, '#a81218')
  ctx.fillStyle = hg
  ctx.fill()
  ctx.lineWidth = 6
  ctx.strokeStyle = '#171716'
  ctx.stroke()
  ctx.restore()

  return textureFromCanvas(canvas)
}

export function makeSign() {
  seed = 7301
  const w = 1024
  const h = 512
  const canvas = makeCanvas(w, h)
  const ctx = canvas.getContext('2d')

  const wood = ctx.createLinearGradient(0, 0, 0, h)
  wood.addColorStop(0, '#c99a5b')
  wood.addColorStop(0.5, '#b58449')
  wood.addColorStop(1, '#986631')
  ctx.fillStyle = wood
  ctx.fillRect(0, 0, w, h)

  for (let i = 0; i < 3600; i++) {
    const v = 60 + random() * 100
    ctx.fillStyle = `rgba(${v + 45},${v + 18},${v - 18},${0.08 + random() * 0.2})`
    ctx.fillRect(random() * w, random() * h, 4 + random() * 44, 1 + random() * 1.7)
  }
  for (let i = 0; i < 22; i++) {
    const y = random() * h
    ctx.strokeStyle = `rgba(67,39,17,${0.1 + random() * 0.28})`
    ctx.lineWidth = 1 + random() * 2
    ctx.beginPath()
    ctx.moveTo(0, y)
    for (let x = 0; x <= w; x += 22) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * (2 + random() * 5))
    ctx.stroke()
  }

  // Painted cream panel so the message reads at a distance.
  ctx.fillStyle = 'rgba(248, 232, 198, 0.92)'
  ctx.fillRect(44, 66, w - 88, h - 132)
  ctx.strokeStyle = 'rgba(83, 48, 19, 0.55)'
  ctx.lineWidth = 6
  ctx.strokeRect(44, 66, w - 88, h - 132)

  // Scuffed edges.
  ctx.strokeStyle = 'rgba(67,36,13,0.8)'
  ctx.lineWidth = 18
  ctx.strokeRect(9, 9, w - 18, h - 18)
  ctx.fillStyle = 'rgba(60,32,11,0.55)'
  for (const [x, y] of [[34, 34], [w - 34, 34], [34, h - 34], [w - 34, h - 34]]) {
    ctx.beginPath()
    ctx.arc(x, y, 7, 0, Math.PI * 2)
    ctx.fill()
  }

  const text = 'Aciz bir dilsizim'
  const size = fitText(ctx, text, 840, 150, '800')
  ctx.font = `800 ${size}px "Arial Black", "DejaVu Sans", Impact, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'rgba(54, 38, 22, 0.2)'
  ctx.fillText(text, w / 2 + 2, h / 2 + 4)
  ctx.fillStyle = '#231a10'
  ctx.fillText(text, w / 2, h / 2)

  // Hand-painted underline.
  ctx.strokeStyle = 'rgba(35, 26, 16, 0.8)'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.moveTo(w * 0.19, h * 0.71)
  ctx.quadraticCurveTo(w * 0.5, h * 0.75, w * 0.81, h * 0.7)
  ctx.stroke()

  return textureFromCanvas(canvas)
}

export function makeNeon(text, color = '#ff9138') {
  const canvas = makeCanvas(1024, 320)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 1024, 320)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const size = fitText(ctx, text, 900, 210, '900')
  ctx.font = `900 ${size}px "Arial Black", "DejaVu Sans", Impact, sans-serif`
  ctx.shadowColor = color
  ctx.shadowBlur = 46
  ctx.fillStyle = color
  ctx.fillText(text, 512, 162)
  ctx.shadowBlur = 18
  ctx.fillStyle = '#ffe3b3'
  ctx.fillText(text, 512, 162)
  ctx.shadowBlur = 0
  return textureFromCanvas(canvas)
}

export function makePoster(title, sub, color = '#e8dfc9') {
  const canvas = makeCanvas(512, 768)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#c9c1ad'
  ctx.fillRect(0, 0, 512, 768)
  ctx.fillStyle = 'rgba(35,38,36,0.08)'
  for (let i = 0; i < 3000; i++) ctx.fillRect(random() * 512, random() * 768, 2, 2)
  ctx.fillStyle = color
  ctx.fillRect(28, 28, 456, 712)
  ctx.fillStyle = '#1c2222'
  ctx.textAlign = 'center'
  ctx.font = '900 70px "Arial Black", "DejaVu Sans", sans-serif'
  const words = title.split(' ')
  words.forEach((word, i) => ctx.fillText(word, 256, 260 + i * 76))
  ctx.font = '700 25px "DejaVu Sans", sans-serif'
  ctx.fillStyle = '#7c2418'
  ctx.fillText(sub, 256, 560)
  ctx.strokeStyle = 'rgba(28,34,34,0.5)'
  ctx.lineWidth = 6
  ctx.strokeRect(60, 610, 392, 80)
  ctx.font = '700 22px "DejaVu Sans", sans-serif'
  ctx.fillStyle = '#1c2222'
  ctx.fillText('FIGHT NIGHT · ALL WELCOME', 256, 660)
  return textureFromCanvas(canvas)
}
