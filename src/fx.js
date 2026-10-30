import * as THREE from 'three'
import { starTexture, shockwaveTexture, dustTexture, glowTexture } from './textures.js'

function canvas(w, h) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  return c
}

function wordTexture(text, color = '#ffcf6a', stroke = '#2a1000') {
  const w = 512
  const h = 256
  const c = canvas(w, h)
  const x = c.getContext('2d')
  x.clearRect(0, 0, w, h)
  x.textAlign = 'center'
  x.textBaseline = 'middle'
  x.font = '400 150px Anton, "Arial Black", sans-serif'
  x.lineJoin = 'round'
  x.lineWidth = 22
  x.strokeStyle = stroke
  x.strokeText(text, w / 2, h / 2 + 4)
  const g = x.createLinearGradient(0, 40, 0, 220)
  g.addColorStop(0, '#fff8e2')
  g.addColorStop(0.35, color)
  g.addColorStop(1, '#ff6a10')
  x.fillStyle = g
  x.fillText(text, w / 2, h / 2 + 4)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function slashTexture() {
  const s = 512
  const c = canvas(s, s)
  const x = c.getContext('2d')
  x.clearRect(0, 0, s, s)
  x.translate(s / 2, s / 2)
  x.rotate(-0.7)
  const g = x.createLinearGradient(-240, 0, 240, 0)
  g.addColorStop(0, 'rgba(255,255,255,0)')
  g.addColorStop(0.25, 'rgba(255,220,160,0.5)')
  g.addColorStop(0.5, 'rgba(255,255,255,0.95)')
  g.addColorStop(0.75, 'rgba(255,180,90,0.5)')
  g.addColorStop(1, 'rgba(255,120,20,0)')
  x.strokeStyle = g
  x.lineCap = 'round'
  x.lineWidth = 26
  x.beginPath()
  x.arc(0, 0, 190, -1.15, 1.15)
  x.stroke()
  x.strokeStyle = 'rgba(255,255,255,0.7)'
  x.lineWidth = 7
  x.beginPath()
  x.arc(0, 0, 190, -0.95, 0.95)
  x.stroke()
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

export class FX {
  constructor(scene, camera) {
    this.scene = scene
    this.camera = camera
    this.stars = []
    this.words = []
    this.rings = []
    this.puffs = []
    this.slashes = []
    this.sparkCount = 600
    this.sparkGeo = new THREE.BufferGeometry()
    const pos = new Float32Array(this.sparkCount * 3)
    const col = new Float32Array(this.sparkCount * 3)
    this.sparkGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    this.sparkGeo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    this.sparkState = new Array(this.sparkCount).fill(null).map(() => ({ life: 0, max: 0, vx: 0, vy: 0, vz: 0 }))
    const sparkMat = new THREE.PointsMaterial({
      size: 0.1,
      map: glowTexture(),
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      sizeAttenuation: true
    })
    this.sparks = new THREE.Points(this.sparkGeo, sparkMat)
    this.sparks.frustumCulled = false
    scene.add(this.sparks)
    this.sparkCursor = 0

    this.starTex = starTexture()
    this.slashTex = slashTexture()
    this.ringTex = shockwaveTexture()
    this.puffTex = dustTexture()
    this.wordTextures = ['POW!', 'BAM!', 'WHAM!', 'SMASH!', 'THWACK!'].map(w => [wordTexture(w), wordTexture(w, '#fff0b0')])
    this.starPool = []
    this.wordPool = []
    this.ringPool = []
    this.puffPool = []
    this.slashPool = []
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }))
      s.visible = false
      scene.add(s)
      this.starPool.push({ sprite: s, life: 0, max: 0, size: 1 })
    }
    for (let i = 0; i < 8; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.puffTex, transparent: true, depthWrite: false, opacity: 0, color: 0xbfae92 }))
      s.visible = false
      scene.add(s)
      this.puffPool.push({ sprite: s, life: 0, max: 0, vx: 0, vy: 0, vz: 0, size: 1 })
    }
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.RingGeometry(0.4, 1.0, 48), new THREE.MeshBasicMaterial({ map: this.ringTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, opacity: 0 }))
      m.rotation.x = -Math.PI / 2
      m.visible = false
      scene.add(m)
      this.ringPool.push({ mesh: m, life: 0, max: 0, size: 1 })
    }
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: this.slashTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }))
      m.visible = false
      scene.add(m)
      this.slashPool.push({ mesh: m, life: 0, max: 0, size: 1, spin: 0 })
    }
    for (let i = 0; i < 5; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.starTex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }))
      s.visible = false
      scene.add(s)
      this.starPool.push({ sprite: s, life: 0, max: 0, size: 1 })
    }
  }

  sparkBurst(point, count = 22, color = 0xffb050, power = 3.4) {
    const pos = this.sparkGeo.attributes.position.array
    const col = this.sparkGeo.attributes.color.array
    const c = new THREE.Color(color)
    for (let i = 0; i < count; i++) {
      const idx = this.sparkCursor
      this.sparkCursor = (this.sparkCursor + 1) % this.sparkCount
      const s = this.sparkState[idx]
      s.life = s.max = 0.35 + Math.random() * 0.55
      pos[idx * 3] = point.x + (Math.random() - 0.5) * 0.14
      pos[idx * 3 + 1] = point.y + (Math.random() - 0.5) * 0.14
      pos[idx * 3 + 2] = point.z + (Math.random() - 0.5) * 0.14
      s.vx = (Math.random() - 0.5) * power
      s.vy = Math.random() * power * 0.9 + 0.6
      s.vz = (Math.random() - 0.5) * power
      const tint = c.clone().offsetHSL(0, 0, (Math.random() - 0.3) * 0.4)
      col[idx * 3] = tint.r
      col[idx * 3 + 1] = tint.g
      col[idx * 3 + 2] = tint.b
    }
    this.sparkGeo.attributes.position.needsUpdate = true
    this.sparkGeo.attributes.color.needsUpdate = true
  }

  star(point, size = 2.2, color = 0xffffff) {
    const slot = this.starPool.find(s => s.life <= 0) || this.starPool[0]
    slot.life = slot.max = 0.3
    slot.size = size
    slot.sprite.position.copy(point)
    slot.sprite.material.color.set(color)
    slot.sprite.material.opacity = 1
    slot.sprite.material.rotation = Math.random() * Math.PI
    slot.sprite.visible = true
  }

  word(point, index = 0, flip = false) {
    const slot = this.wordPool.find(s => s.life <= 0)
    const tex = this.wordTextures[index % this.wordTextures.length][flip ? 1 : 0]
    const sprite = slot ? slot.sprite : (() => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }))
      this.scene.add(s)
      const rec = { sprite: s, life: 0, max: 0, size: 1 }
      this.wordPool.push(rec)
      return s
    })()
    const rec = this.wordPool.find(r => r.sprite === sprite)
    rec.life = rec.max = 0.6
    rec.size = 1.5
    sprite.material.map = tex
    sprite.material.opacity = 1
    sprite.material.rotation = (Math.random() - 0.5) * 0.12
    sprite.position.copy(point)
    sprite.position.y += 0.3
    sprite.scale.set(1.5, 0.75, 1)
    sprite.visible = true
  }

  ring(point, size = 3, color = 0xffb060) {
    const slot = this.ringPool.find(s => s.life <= 0) || this.ringPool[0]
    slot.life = slot.max = 0.55
    slot.size = size
    slot.mesh.position.set(point.x, 0.03, point.z)
    slot.mesh.material.color.set(color)
    slot.mesh.material.opacity = 0.9
    slot.mesh.scale.setScalar(0.35)
    slot.mesh.visible = true
  }

  puff(point, count = 4, spread = 0.7) {
    for (let i = 0; i < count; i++) {
      const slot = this.puffPool.find(s => s.life <= 0)
      if (!slot) return
      slot.life = slot.max = 0.6 + Math.random() * 0.4
      slot.size = 0.8 + Math.random() * 0.9
      slot.sprite.position.set(point.x + (Math.random() - 0.5) * spread, point.y + Math.random() * 0.4, point.z + (Math.random() - 0.5) * spread)
      slot.sprite.material.opacity = 0.5
      slot.sprite.material.rotation = Math.random() * Math.PI
      slot.sprite.scale.setScalar(slot.size)
      slot.sprite.visible = true
      slot.vx = (Math.random() - 0.5) * 1.2
      slot.vy = 0.3 + Math.random() * 0.6
      slot.vz = (Math.random() - 0.5) * 1.2
    }
  }

  slash(point, size = 2.4, spin = 0) {
    const slot = this.slashPool.find(s => s.life <= 0) || this.slashPool[0]
    slot.life = slot.max = 0.26
    slot.size = size
    slot.spin = spin
    slot.mesh.position.copy(point)
    slot.mesh.material.opacity = 1
    slot.mesh.rotation.set(0, 0, spin)
    slot.mesh.scale.setScalar(0.4)
    slot.mesh.visible = true
  }

  update(dt) {
    const pos = this.sparkGeo.attributes.position.array
    const col = this.sparkGeo.attributes.color.array
    for (let i = 0; i < this.sparkCount; i++) {
      const s = this.sparkState[i]
      if (s.life <= 0) continue
      s.life -= dt
      if (s.life <= 0) {
        pos[i * 3 + 1] = -999
        continue
      }
      s.vy -= 9 * dt
      pos[i * 3] += s.vx * dt
      pos[i * 3 + 1] += s.vy * dt
      pos[i * 3 + 2] += s.vz * dt
      if (pos[i * 3 + 1] < 0.02) {
        pos[i * 3 + 1] = 0.02
        s.vy *= -0.35
        s.vx *= 0.7
        s.vz *= 0.7
      }
      const k = s.life / s.max
      col[i * 3] *= 0.985
      col[i * 3 + 1] *= 0.975
      col[i * 3 + 2] *= 0.96
      if (k < 0.2) {
        col[i * 3] *= 0.85
        col[i * 3 + 1] *= 0.85
      }
    }
    this.sparkGeo.attributes.position.needsUpdate = true
    this.sparkGeo.attributes.color.needsUpdate = true

    for (const s of this.starPool) {
      if (s.life <= 0) continue
      s.life -= dt
      const k = Math.max(0, s.life / s.max)
      s.sprite.material.opacity = k
      s.sprite.scale.setScalar(s.size * (1.4 - k * 0.5))
      s.sprite.material.rotation += dt * 2.2
      if (s.life <= 0) s.sprite.visible = false
    }
    for (const w of this.wordPool) {
      if (w.life <= 0) continue
      w.life -= dt
      const k = Math.max(0, w.life / w.max)
      const life = 1 - k
      w.sprite.material.opacity = k < 0.25 ? k / 0.25 : 1
      w.sprite.scale.set(2.4 * (0.85 + life * 0.4), 1.2 * (0.85 + life * 0.4), 1)
      w.sprite.position.y += dt * 0.5
      if (w.life <= 0) w.sprite.visible = false
    }
    for (const r of this.ringPool) {
      if (r.life <= 0) continue
      r.life -= dt
      const k = 1 - Math.max(0, r.life / r.max)
      r.mesh.scale.setScalar(0.35 + k * r.size)
      r.mesh.material.opacity = 0.9 * (1 - k)
      if (r.life <= 0) r.mesh.visible = false
    }
    for (const p of this.puffPool) {
      if (p.life <= 0) continue
      p.life -= dt
      const k = Math.max(0, p.life / p.max)
      p.sprite.position.x += p.vx * dt
      p.sprite.position.y += p.vy * dt
      p.sprite.position.z += p.vz * dt
      p.sprite.scale.setScalar(p.size * (1.4 + (1 - k) * 1.8))
      p.sprite.material.opacity = 0.5 * k
      if (p.life <= 0) p.sprite.visible = false
    }
    for (const s of this.slashPool) {
      if (s.life <= 0) continue
      s.life -= dt
      const k = Math.max(0, s.life / s.max)
      s.mesh.material.opacity = k
      s.mesh.scale.setScalar(s.size * (1.7 - k * 0.7))
      s.mesh.rotation.z = s.spin + (1 - k) * 0.5
      if (s.life <= 0) s.mesh.visible = false
    }
  }
}
