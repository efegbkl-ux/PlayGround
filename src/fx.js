import * as THREE from 'three'

function radialTexture(inner, outer, stops) {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 128
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  for (const [offset, color] of stops) g.addColorStop(offset, color)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function ringTexture() {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 256
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 256, 256)
  const g = ctx.createRadialGradient(128, 128, 76, 128, 128, 128)
  g.addColorStop(0, 'rgba(255,255,255,0)')
  g.addColorStop(0.62, 'rgba(255,255,255,0)')
  g.addColorStop(0.8, 'rgba(255,255,255,0.95)')
  g.addColorStop(0.92, 'rgba(255,190,110,0.2)')
  g.addColorStop(1, 'rgba(255,190,110,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function arcTexture() {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 256
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 256, 256)
  ctx.translate(128, 128)
  ctx.strokeStyle = 'rgba(255,245,220,0.95)'
  ctx.lineWidth = 16
  ctx.lineCap = 'round'
  ctx.shadowColor = 'rgba(255,180,80,0.9)'
  ctx.shadowBlur = 25
  ctx.beginPath()
  ctx.arc(0, 0, 88, -1.05, 1.05)
  ctx.stroke()
  ctx.strokeStyle = 'rgba(255,170,70,0.5)'
  ctx.lineWidth = 36
  ctx.shadowBlur = 40
  ctx.beginPath()
  ctx.arc(0, 0, 88, -0.95, 0.95)
  ctx.stroke()
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

const PARTICLE_COLORS = {
  orange: '#ff9a37',
  gold: '#ffd37d',
  steel: '#d7e3e6',
  red: '#ff5b40',
  green: '#b8ed62',
  dust: '#b5a58a',
}

export class FX {
  constructor(scene, camera) {
    this.scene = scene
    this.camera = camera
    this.time = 0
    this.particles = []
    this.popups = []
    this.rings = []
    this.arcs = []
    this.ringTexture = ringTexture()
    this.arcTexture = arcTexture()

    const geometry = new THREE.TetrahedronGeometry(0.05)
    const mats = {}
    for (const [key, color] of Object.entries(PARTICLE_COLORS)) {
      mats[key] = new THREE.MeshBasicMaterial({ color, transparent: true })
    }
    for (let i = 0; i < 150; i++) {
      const m = new THREE.Mesh(geometry, mats.orange)
      m.visible = false
      m.frustumCulled = false
      scene.add(m)
      this.particles.push({ mesh: m, velocity: new THREE.Vector3(), life: 0, maxLife: 1, spin: new THREE.Vector3(), gravity: 1, baseScale: 1 })
    }
    this.mats = mats
    this.ringPool = []
    for (let i = 0; i < 8; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.ringTexture, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 })
      const sprite = new THREE.Sprite(mat)
      sprite.visible = false
      sprite.renderOrder = 4
      scene.add(sprite)
      this.ringPool.push({ sprite, life: 0, maxLife: 0.4, maxScale: 2 })
    }
    this.arcPool = []
    for (let i = 0; i < 6; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.arcTexture, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 })
      const sprite = new THREE.Sprite(mat)
      sprite.visible = false
      sprite.renderOrder = 4
      scene.add(sprite)
      this.arcPool.push({ sprite, life: 0, maxLife: 0.3 })
    }
  }

  burst(position, type = 'orange', count = 18, strength = 1) {
    let used = 0
    for (const p of this.particles) {
      if (p.life > 0) continue
      const mat = this.mats[type] || this.mats.orange
      p.mesh.material = mat
      p.mesh.visible = true
      p.mesh.position.copy(position)
      p.mesh.position.x += (Math.random() - 0.5) * 0.2
      p.mesh.position.y += (Math.random() - 0.5) * 0.2
      p.mesh.position.z += (Math.random() - 0.5) * 0.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const speed = (2.5 + Math.random() * 7) * strength
      p.velocity.set(Math.sin(phi) * Math.cos(theta), Math.abs(Math.cos(phi)) * 0.9 + 0.2, Math.sin(phi) * Math.sin(theta)).multiplyScalar(speed)
      p.baseScale = 0.6 + Math.random() * 1.2
      p.mesh.scale.setScalar(p.baseScale)
      p.spin.set(Math.random() * 12, Math.random() * 12, Math.random() * 12)
      p.maxLife = 0.35 + Math.random() * 0.55
      p.life = p.maxLife
      p.gravity = 12 + Math.random() * 8
      if (++used >= count) break
    }
  }

  shockwave(position, color = '#ffb15a', maxScale = 2.2) {
    const ring = this.ringPool.find((r) => r.life <= 0)
    if (!ring) return
    ring.sprite.visible = true
    ring.sprite.position.copy(position)
    ring.sprite.position.y += 0.1
    ring.sprite.material.color.set(color)
    ring.sprite.material.opacity = 0.85
    ring.sprite.scale.setScalar(0.2)
    ring.maxScale = maxScale
    ring.maxLife = 0.42
    ring.life = ring.maxLife
  }

  slash(position, color = '#ffe0af', rotation = 0, scale = 1.6) {
    const arc = this.arcPool.find((a) => a.life <= 0)
    if (!arc) return
    arc.sprite.visible = true
    arc.sprite.position.copy(position)
    arc.sprite.material.color.set(color)
    arc.sprite.material.rotation = rotation
    arc.sprite.material.opacity = 0.95
    arc.sprite.scale.setScalar(scale)
    arc.maxLife = 0.28
    arc.life = arc.maxLife
  }

  popup(text, position, { color = '#ffe9c7', outline = '#2b0c01', size = 1, life = 0.85, burst = false, rotation = 0 } = {}) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const font = 900
    const fontSize = 90
    ctx.font = `${font} ${fontSize}px "Arial Black", Impact, "DejaVu Sans", sans-serif`
    const width = Math.max(260, ctx.measureText(text).width + 80)
    canvas.width = Math.ceil(width)
    canvas.height = 190
    const c = canvas.getContext('2d')
    if (burst) {
      c.save()
      c.translate(canvas.width / 2, 100)
      c.fillStyle = 'rgba(255,154,55,0.18)'
      c.beginPath()
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2
        const r = i % 2 === 0 ? 120 : 62
        c.lineTo(Math.cos(a) * r * 1.5, Math.sin(a) * r * 0.8)
      }
      c.closePath()
      c.fill()
      c.restore()
    }
    c.font = `${font} ${fontSize}px "Arial Black", Impact, "DejaVu Sans", sans-serif`
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.lineJoin = 'round'
    c.lineWidth = 18
    c.strokeStyle = outline
    c.strokeText(text, canvas.width / 2, 100)
    c.lineWidth = 8
    c.strokeStyle = outline
    c.strokeText(text, canvas.width / 2, 100)
    c.fillStyle = color
    c.fillText(text, canvas.width / 2, 100)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false })
    const sprite = new THREE.Sprite(material)
    sprite.renderOrder = 8
    const worldHeight = 0.55 * size
    sprite.scale.set((canvas.width / canvas.height) * worldHeight, worldHeight, 1)
    sprite.position.copy(position)
    sprite.material.rotation = rotation
    this.scene.add(sprite)
    this.popups.push({
      sprite,
      life,
      maxLife: life,
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.5, 2.1 + Math.random() * 0.7, (Math.random() - 0.5) * 0.4),
      rotation,
    })
  }

  update(dt) {
    this.time += dt
    for (const p of this.particles) {
      if (p.life <= 0) continue
      p.life -= dt
      if (p.life <= 0) {
        p.mesh.visible = false
        continue
      }
      p.velocity.y -= p.gravity * dt
      p.mesh.position.addScaledVector(p.velocity, dt)
      if (p.mesh.position.y < 0.03) {
        p.mesh.position.y = 0.03
        p.velocity.y *= -0.32
        p.velocity.x *= 0.75
        p.velocity.z *= 0.75
      }
      p.mesh.rotation.x += p.spin.x * dt
      p.mesh.rotation.y += p.spin.y * dt
      p.mesh.rotation.z += p.spin.z * dt
      const k = Math.max(0, p.life / p.maxLife)
      p.mesh.scale.setScalar(p.baseScale * (0.45 + k * 0.75))
      p.mesh.material.opacity = Math.min(1, k * 2.2)
    }
    for (const ring of this.ringPool) {
      if (ring.life <= 0) continue
      ring.life -= dt
      if (ring.life <= 0) {
        ring.sprite.visible = false
        continue
      }
      const k = 1 - ring.life / ring.maxLife
      ring.sprite.scale.setScalar(0.2 + k * ring.maxScale)
      ring.sprite.material.opacity = (1 - k) * 0.85
      ring.sprite.position.y += dt * 0.15
    }
    for (const arc of this.arcPool) {
      if (arc.life <= 0) continue
      arc.life -= dt
      if (arc.life <= 0) {
        arc.sprite.visible = false
        continue
      }
      const k = 1 - arc.life / arc.maxLife
      arc.sprite.material.opacity = (1 - k) * 0.95
      arc.sprite.scale.setScalar(arc.sprite.scale.x + dt * 3.4)
    }
    for (let i = this.popups.length - 1; i >= 0; i--) {
      const pop = this.popups[i]
      pop.life -= dt
      if (pop.life <= 0) {
        this.scene.remove(pop.sprite)
        pop.sprite.material.map.dispose()
        pop.sprite.material.dispose()
        this.popups.splice(i, 1)
        continue
      }
      const k = pop.life / pop.maxLife
      pop.velocity.y -= 3.4 * dt
      pop.sprite.position.addScaledVector(pop.velocity, dt)
      pop.sprite.material.opacity = Math.min(1, k * 2.6)
      const popScale = 0.8 + (1 - k) * 0.28
      pop.sprite.scale.set(pop.sprite.scale.x * 0.999, pop.sprite.scale.y * 0.999, 1)
      pop.sprite.scale.multiplyScalar(1 + (1 - k) * 0.001)
      pop.sprite.material.rotation = pop.rotation + Math.sin(this.time * 5 + i) * 0.02
    }
  }
}
