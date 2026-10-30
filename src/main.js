import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { createApricot, createMute, createBigMan, WEAPONS } from './characters.js'
import { createEnvironment } from './environment.js'
import { FX } from './fx.js'

/* ------------------------------------------------------------------ basics */

await document.fonts.ready

const canvas = document.getElementById('scene')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.95
renderer.outputColorSpace = THREE.SRGBColorSpace

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 120)

const env = createEnvironment(scene)
const apricot = createApricot()
const mute = createMute()
const big = createBigMan()

scene.add(apricot.root, mute.root, big.root)

const fx = new FX(scene, camera)

/* ------------------------------------------------------------------ layout */

let portrait = false
let shortLandscape = false
let cameraYaw = 0
let cameraPitch = 0.17
let cameraDist = 7
const cameraTarget = new THREE.Vector3(0, 1.45, 0.3)
const smoothTarget = cameraTarget.clone()
let shake = 0
let shakeTime = 0
let flash = 0
const motion = { enabled: false, gamma: 0, beta: 0, active: false }

const layout = {
  apricot: new THREE.Vector3(0, 0, -0.45),
  mute: new THREE.Vector3(-2.3, 0, 1.05),
  big: new THREE.Vector3(2.4, 0, 1.1)
}

function placeScene() {
  const aspect = window.innerWidth / window.innerHeight
  portrait = aspect < 0.95
  shortLandscape = !portrait && window.innerHeight < 560
  env.setViewport(portrait ? 'portrait' : shortLandscape ? 'short' : 'wide')
  if (portrait) {
    layout.apricot.set(0, 0, -0.75)
    layout.mute.set(-0.98, 0, 1.15)
    layout.big.set(1.05, 0, 1.45)
  } else if (shortLandscape) {
    layout.apricot.set(0, 0, -0.1)
    layout.mute.set(-1.68, 0, 0.8)
    layout.big.set(1.72, 0, 0.85)
  } else {
    layout.apricot.set(0, 0, -0.45)
    layout.mute.set(-2.22, 0, 1.05)
    layout.big.set(2.3, 0, 1.1)
  }
  apricot.root.position.copy(layout.apricot)
  mute.root.position.copy(layout.mute)
  big.root.position.copy(layout.big)
  mute.root.rotation.y = shortLandscape ? 0.18 : portrait ? 0.12 : 0.3
  big.root.rotation.y = portrait ? -0.1 : -0.12

  const vFov = THREE.MathUtils.degToRad(camera.fov)
  const halfW = portrait ? 1.95 : 3.95
  const halfH = shortLandscape ? 2.45 : 1.6
  const hTan = Math.tan(vFov / 2) * aspect
  const distW = halfW / hTan
  const distH = halfH / Math.tan(vFov / 2)
  cameraDist = Math.max(distW, (portrait || shortLandscape ? 1 : 0.94) * distH) * (portrait ? 1.05 : 0.92) + (portrait ? 0.9 : 1.25)
  cameraTarget.set(0, shortLandscape ? 1.1 : 1.5, shortLandscape ? 0.2 : portrait ? 0.35 : 0.25)
  smoothTarget.copy(cameraTarget)
}

function resize() {
  const w = window.innerWidth
  const h = window.innerHeight
  renderer.setSize(w, h, false)
  composer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  placeScene()
}
const composer = new EffectComposer(
  renderer,
  new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 })
)
composer.addPass(new RenderPass(scene, camera))
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.38, 0.5, 0.88)
composer.addPass(bloom)
composer.addPass(new OutputPass())

/* ------------------------------------------------------------------- poses */

const mirrorZ = (v, s = 1) => [v[0], v[1] * s, v[2]]

const A_BASE = {
  hips: [0, 0.12, 0],
  chest: [0.07, 0.18, -0.03],
  neck: [0, 0, 0],
  head: [0.02, -0.34, -0.03],
  hipL: [0.24, 0.04, 0.06], kneeL: [0.32, 0, 0], ankleL: [-0.14, 0, 0],
  hipR: [-0.2, -0.02, -0.05], kneeR: [0.3, 0, 0], ankleR: [-0.06, 0, 0],
  shoulderR: [-0.45, 0.18, -2.35], elbowR: [-1.42, 0, 0.05], wristR: [3.14, 0.25, 0.1],
  shoulderL: [-0.8, 0.12, 0.62], elbowL: [-1.5, 0, 0], wristL: [0, 0, 0]
}

const M_BASE = {
  hips: [0.08, 0.32, 0.04],
  chest: [0.36, 0.3, 0.09],
  neck: [0, 0, 0],
  head: [-0.4, 0.5, 0.14],
  hipL: [0.48, 0.04, 0.1], kneeL: [0.92, 0, 0], ankleL: [-0.38, 0, 0],
  hipR: [0.08, -0.02, -0.08], kneeR: [0.7, 0, 0], ankleR: [-0.26, 0, 0],
  shoulderL: [-2.25, 0.14, 0.4], elbowL: [-2.2, 0, 0], wristL: [0, 0, 0],
  shoulderR: [-2.05, -0.18, -0.5], elbowR: [-2.2, 0, 0], wristR: [0, 0, 0]
}

const B_BASE = {
  hips: [0.04, -0.12, 0.03],
  chest: [-0.24, -0.08, 0.07],
  neck: [0, 0, 0],
  head: [0.02, -0.16, -0.08],
  hipL: [0.24, 0.02, 0.05], kneeL: [0.3, 0, 0], ankleL: [-0.14, 0, 0],
  hipR: [-0.38, -0.02, -0.05], kneeR: [0.5, 0, 0], ankleR: [-0.2, 0, 0],
  shoulderL: [-1.6, 0.18, 1.0], elbowL: [-1.0, 0, 0], wristL: [0, 0, 0],
  shoulderR: [-1.55, -0.18, -1.0], elbowR: [-1.05, 0, 0], wristR: [0, 0, 0]
}

const merge = (base, over) => ({ ...base, ...over })

class PoseAnimator {
  constructor(rig, base, speed = 16) {
    this.rig = rig
    this.base = base
    this.speed = speed
    this.current = {}
    for (const key of Object.keys(base)) this.current[key] = base[key].slice()
    this.keys = null
    this.t = 0
    this.duration = 0
  }
  play(keys, duration, speed = 22) {
    this.keys = keys
    this.t = 0
    this.duration = duration
    this.speed = speed
  }
  stop() {
    this.keys = null
  }
  sample() {
    if (!this.keys) return this.base
    const t = THREE.MathUtils.clamp(this.t / this.duration, 0, 1)
    const keys = this.keys
    let a = keys[0]
    let b = keys[keys.length - 1]
    for (let i = 0; i < keys.length - 1; i++) {
      if (t >= keys[i][0] && t <= keys[i + 1][0]) {
        a = keys[i]
        b = keys[i + 1]
        break
      }
    }
    const span = Math.max(1e-5, b[0] - a[0])
    let k = THREE.MathUtils.clamp((t - a[0]) / span, 0, 1)
    k = k * k * (3 - 2 * k)
    const out = {}
    for (const key of Object.keys(a[1])) {
      const va = a[1][key]
      const vb = b[1][key] || va
      out[key] = [va[0] + (vb[0] - va[0]) * k, va[1] + (vb[1] - va[1]) * k, va[2] + (vb[2] - va[2]) * k]
    }
    return out
  }
  update(dt, extraBase) {
    this.t += dt
    const target = this.keys ? this.sample() : (extraBase ? merge(this.base, extraBase) : this.base)
    const alpha = 1 - Math.exp(-dt * this.speed)
    for (const key of Object.keys(target)) {
      const j = this.rig[key]
      if (!j) continue
      const cur = this.current[key] || (this.current[key] = target[key].slice())
      cur[0] += (target[key][0] - cur[0]) * alpha
      cur[1] += (target[key][1] - cur[1]) * alpha
      cur[2] += (target[key][2] - cur[2]) * alpha
      j.rotation.set(cur[0], cur[1], cur[2])
    }
    if (this.keys && this.t > this.duration + 0.25) this.keys = null
  }
}

const aAnim = new PoseAnimator(apricot.rig, A_BASE, 18)
const mAnim = new PoseAnimator(mute.rig, M_BASE, 14)
const bAnim = new PoseAnimator(big.rig, B_BASE, 14)

/* ------------------------------------------------------------------ combat */

const state = {
  weapon: 0,
  combo: 0,
  comboTimer: 0,
  move: new THREE.Vector2(),
  yaw: 0.08,
  phase: 0,
  lastInput: performance.now(),
  attackClock: -1,
  attackDuration: 0,
  hitAt: -1,
  hitDone: true,
  attackTarget: null,
  attackWeapon: 0,
  demoStep: 0,
  recoil: { mute: 0, big: 0 },
  hover: 0
}

const enemies = {
  mute: { obj: mute, base: M_BASE, anim: mAnim, hitY: 1.15, name: 'DILSIZ' },
  big: { obj: big, base: B_BASE, anim: bAnim, hitY: 1.35, name: '2016' }
}


const ATTACKS = {
  BAT: {
    dur: 0.95,
    hit: 0.36,
    keys: [
      [0, A_BASE],
      [0.16, merge(A_BASE, {
        chest: [0.02, -0.3, -0.08], head: [-0.06, -0.22, -0.02],
        shoulderR: [-0.15, 0.2, -2.85], elbowR: [-1.72, 0, 0],
        shoulderL: [-0.65, 0.2, 0.7], elbowL: [-1.25, 0, 0],
        hipL: [0.32, 0, 0.06], hipR: [-0.26, 0, -0.05]
      })],
      [0.37, merge(A_BASE, {
        chest: [0.38, 0.5, 0.06], head: [0.15, 0.18, 0.02],
        shoulderR: [-1.5, 0.1, -0.28], elbowR: [-0.25, 0, 0],
        shoulderL: [-1.2, 0.2, 0.9], elbowL: [-1.1, 0, 0],
        hipL: [0.1, 0.1, 0.06], hipR: [-0.35, -0.1, -0.05]
      })],
      [0.55, merge(A_BASE, {
        chest: [0.45, 0.62, 0.1], head: [0.2, 0.32, 0],
        shoulderR: [-1.25, 0, 0.12], elbowR: [-0.15, 0, 0],
        shoulderL: [-1.0, 0.2, 0.85], elbowL: [-1.0, 0, 0],
        hipL: [0.05, 0.1, 0.06], hipR: [-0.32, -0.1, -0.05]
      })],
      [0.95, A_BASE]
    ]
  },
  KATANA: {
    dur: 0.85,
    hit: 0.3,
    keys: [
      [0, A_BASE],
      [0.14, merge(A_BASE, {
        chest: [0.1, -0.42, -0.06], head: [0.04, -0.2, 0],
        shoulderR: [-1.15, 0.4, -1.5], elbowR: [-1.9, 0, 0], wristR: [0, 0, 1.2],
        shoulderL: [-0.6, 0.2, 0.4], elbowL: [-1.3, 0, 0]
      })],
      [0.3, merge(A_BASE, {
        chest: [0.13, 0.6, 0.05], head: [0.02, 0.18, 0],
        shoulderR: [-0.8, -0.15, 1.05], elbowR: [-0.45, 0, 0], wristR: [0, 0, 0.15],
        shoulderL: [-0.9, 0.2, 1.0], elbowL: [-1.2, 0, 0]
      })],
      [0.46, merge(A_BASE, {
        chest: [0.1, 0.7, 0.03], head: [0, 0.24, 0],
        shoulderR: [-0.7, -0.2, 1.35], elbowR: [-0.3, 0, 0], wristR: [0, 0, 0],
        shoulderL: [-0.95, 0.2, 1.1], elbowL: [-1.2, 0, 0]
      })],
      [0.85, A_BASE]
    ]
  },
  PIPE: {
    dur: 0.9,
    hit: 0.33,
    keys: [
      [0, A_BASE],
      [0.16, merge(A_BASE, {
        chest: [0.15, 0.55, 0.04], head: [0.05, 0.35, 0],
        shoulderR: [-1.35, 0.25, 0.35], elbowR: [-1.5, 0, 0],
        shoulderL: [-1.0, -0.1, 0.2], elbowL: [-1.6, 0, 0]
      })],
      [0.33, merge(A_BASE, {
        chest: [0.32, -0.5, -0.04], head: [0.18, -0.18, 0],
        shoulderR: [-1.6, 0.3, -1.45], elbowR: [-0.35, 0, 0],
        shoulderL: [-0.6, 0, 0.9], elbowL: [-1.2, 0, 0],
        hipL: [0.1, 0.2, 0.06], hipR: [-0.3, -0.2, -0.05]
      })],
      [0.5, merge(A_BASE, {
        chest: [0.36, -0.62, -0.08], head: [0.2, -0.24, 0],
        shoulderR: [-1.4, 0.3, -1.85], elbowR: [-0.4, 0, 0]
      })],
      [0.9, A_BASE]
    ]
  },
  SLEDGE: {
    dur: 1.15,
    hit: 0.52,
    keys: [
      [0, A_BASE],
      [0.22, merge(A_BASE, {
        chest: [-0.12, -0.05, 0.02], head: [-0.15, -0.1, 0],
        shoulderR: [-0.1, 0.3, -3.0], elbowR: [-1.3, 0, 0],
        shoulderL: [-0.2, -0.3, 3.0], elbowL: [-1.3, 0, 0],
        hipL: [0.3, 0, 0.06], hipR: [-0.18, 0, -0.05]
      })],
      [0.42, merge(A_BASE, {
        chest: [0.15, 0.05, 0.02], head: [0.12, 0, 0],
        shoulderR: [-0.9, 0.2, -2.6], elbowR: [-1.0, 0, 0],
        shoulderL: [-1.0, -0.2, 2.6], elbowL: [-1.0, 0, 0]
      })],
      [0.54, merge(A_BASE, {
        chest: [0.58, 0.02, 0.02], head: [0.35, 0, 0],
        shoulderR: [-1.7, 0.1, -0.35], elbowR: [-0.2, 0, 0],
        shoulderL: [-1.7, -0.1, 0.35], elbowL: [-0.2, 0, 0],
        hipL: [0.02, 0, 0.08], hipR: [-0.42, 0, -0.06], kneeR: [0.5, 0, 0]
      })],
      [0.7, merge(A_BASE, {
        chest: [0.62, 0.02, 0.02], head: [0.4, 0, 0],
        shoulderR: [-1.7, 0.1, -0.2], elbowR: [-0.2, 0, 0],
        shoulderL: [-1.7, -0.1, 0.2], elbowL: [-0.2, 0, 0],
        hipR: [-0.3, 0, -0.06]
      })],
      [1.15, A_BASE]
    ]
  }
}

const WEAPON_LABEL = { BAT: 'BAT', KATANA: 'KATANA', PIPE: 'PIPE', SLEDGE: 'SLEDGE' }
const WEAPON_HIT_WORD = [0, 1, 2, 3]

function nearestEnemy(fromX = apricot.root.position.x) {
  const dx = mute.root.position.x - fromX
  const dxb = big.root.position.x - fromX
  return Math.abs(dx) < Math.abs(dxb) ? 'mute' : 'big'
}

function otherEnemy(name) { return name === 'mute' ? 'big' : 'mute' }

function updateHudWeapon() {
  const name = WEAPONS[state.weapon]
  document.getElementById('weapon-name').textContent = WEAPON_LABEL[name] || name
  document.getElementById('weapon-index').textContent = String(state.weapon + 1).padStart(2, '0')
  const chip = document.getElementById('weapon-chip')
  chip.classList.add('pulse')
  setTimeout(() => chip.classList.remove('pulse'), 220)
}

const toastEl = document.getElementById('toast')
let toastTimer = 0
function toast(text, ms = 1100) {
  toastEl.textContent = text
  toastEl.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms)
}

function startAttack(weaponIndex = state.weapon, targetName = nearestEnemy()) {
  if (state.attackClock >= 0) return false
  const name = WEAPONS[weaponIndex]
  const clip = ATTACKS[name]
  state.weapon = weaponIndex
  apricot.setWeapon(name)
  updateHudWeapon()
  state.attackWeapon = weaponIndex
  state.attackTarget = targetName
  state.attackClock = 0
  state.attackDuration = clip.dur
  state.hitAt = clip.hit
  state.hitDone = false
  state.lastInput = performance.now()
  aAnim.play(clip.keys, clip.dur, 26)

  // face the victim
  const target = enemies[targetName]
  const dx = target.obj.root.position.x - apricot.root.position.x
  const dz = target.obj.root.position.z - apricot.root.position.z
  state.yaw = Math.atan2(dx, dz) * 0.5
  return true
}

function doHit(name, clipName) {
  const target = enemies[name]
  const t = target.obj.root
  const point = new THREE.Vector3(t.position.x, target.hitY, t.position.z)
  const power = clipName === 'SLEDGE' ? 1.5 : 1
  fx.star(point.clone().add(new THREE.Vector3(0, 0.25, 0)), 1.6 * power, 0xfff2c4)
  fx.sparkBurst(point, 22, 0xffb050, 3.2 * power)
  fx.slash(point.clone().add(new THREE.Vector3(0.1, 0.1, 0)), 2.4 * power, -0.7 + Math.random() * 1.4)
  fx.puff(new THREE.Vector3(t.position.x, 0.1, t.position.z), 3, 0.9)
  const wordAt = point.clone().add(new THREE.Vector3(0, 0.9, 0.3))
  wordAt.x = THREE.MathUtils.clamp(wordAt.x, -(portrait ? 0.9 : 1.8), portrait ? 0.9 : 1.8)
  fx.word(wordAt, Math.floor(Math.random() * 5), Math.random() > 0.6)
  if (clipName === 'SLEDGE') {
    fx.ring(new THREE.Vector3(0, 0, 0.4), 5.2, 0xffb060)
    fx.puff(new THREE.Vector3(0, 0.1, 0.6), 6, 2.2)
    shake = Math.max(shake, 0.18)
  } else {
    shake = Math.max(shake, 0.1)
  }
  flash = 0.55
  state.recoil[name] = 1
  state.combo += 1
  state.comboTimer = 3.4
  updateCombo()
  if (clipName === 'SLEDGE') state.recoil[otherEnemy(name)] = 0.8
  state.hitDone = true
}

function updateCombo() {
  const el = document.getElementById('combo')
  const val = document.getElementById('combo-value')
  val.textContent = 'x' + state.combo
  el.classList.toggle('on', state.combo > 1)
  if (state.combo === 1) setTimeout(() => { if (state.combo === 1) document.getElementById('combo').classList.remove('on') }, 900)
}

function swapWeapon() {
  state.weapon = (state.weapon + 1) % WEAPONS.length
  const name = WEAPONS[state.weapon]
  apricot.setWeapon(name)
  updateHudWeapon()
  toast(WEAPON_LABEL[name] + ' READY', 700)
}

/* ----------------------------------------------------------------- camera */

let lastTime = -1
let elapsed = 0

function cameraPosition(out = new THREE.Vector3()) {
  const cp = Math.cos(cameraPitch)
  out.set(
    smoothTarget.x + Math.sin(cameraYaw) * cp * cameraDist,
    smoothTarget.y + Math.sin(cameraPitch) * cameraDist,
    smoothTarget.z + Math.cos(cameraYaw) * cp * cameraDist
  )
  return out
}

/* ------------------------------------------------------------------ input */

const keys = new Set()
const stick = { active: false, id: null, x: 0, y: 0 }
const knob = document.getElementById('stick-knob')
const stickZone = document.getElementById('stick-zone')
const stickBase = stickZone.querySelector('.stick-base')

function setStick(x, y) {
  stick.x = x
  stick.y = y
  knob.style.transform = `translate(${x * 38}px, ${y * 38}px)`
}

stickBase.addEventListener('pointerdown', e => {
  e.preventDefault()
  e.stopPropagation()
  stick.active = true
  stick.id = e.pointerId
  stickBase.setPointerCapture(e.pointerId)
  const r = stickBase.getBoundingClientRect()
  const cx = r.left + r.width / 2
  const cy = r.top + r.height / 2
  const move = ev => {
    let dx = (ev.clientX - cx) / (r.width * 0.34)
    let dy = (ev.clientY - cy) / (r.height * 0.34)
    const len = Math.hypot(dx, dy)
    if (len > 1) { dx /= len; dy /= len }
    setStick(dx, dy)
  }
  move(e)
  const up = () => {
    stick.active = false
    setStick(0, 0)
    window.removeEventListener('pointermove', move)
    window.removeEventListener('pointerup', up)
    window.removeEventListener('pointercancel', up)
  }
  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', up)
  window.addEventListener('pointercancel', up)
})

let dragging = false
let dragX = 0
let dragY = 0
canvas.addEventListener('pointerdown', e => {
  dragging = true
  dragX = e.clientX
  dragY = e.clientY
  canvas.setPointerCapture(e.pointerId)
})
canvas.addEventListener('pointermove', e => {
  if (!dragging) return
  cameraYaw -= (e.clientX - dragX) * 0.006
  cameraPitch = THREE.MathUtils.clamp(cameraPitch + (e.clientY - dragY) * 0.0035, -0.03, 0.5)
  cameraYaw = THREE.MathUtils.clamp(cameraYaw, -0.95, 0.95)
  dragX = e.clientX
  dragY = e.clientY
  state.lastInput = performance.now()
})
canvas.addEventListener('pointerup', () => { dragging = false })
canvas.addEventListener('pointercancel', () => { dragging = false })

document.getElementById('btn-strike').addEventListener('pointerdown', e => {
  e.preventDefault()
  if (state.attackClock < 0) {
    const target = state.lastTarget === 'mute' ? 'big' : nearestEnemy()
    state.lastTarget = target
    startAttack(state.weapon, target)
  }
  state.lastInput = performance.now()
})
document.getElementById('btn-swap').addEventListener('pointerdown', e => {
  e.preventDefault()
  swapWeapon()
  state.lastInput = performance.now()
})
document.getElementById('btn-slam').addEventListener('pointerdown', e => {
  e.preventDefault()
  state.weapon = 3
  apricot.setWeapon('SLEDGE')
  updateHudWeapon()
  startAttack(3, nearestEnemy())
  state.lastInput = performance.now()
})

window.addEventListener('keydown', e => {
  keys.add(e.code)
  if (e.code === 'Space') {
    e.preventDefault()
    if (state.attackClock < 0) {
      const target = state.lastTarget === 'mute' ? 'big' : nearestEnemy()
      state.lastTarget = target
      startAttack(state.weapon, target)
    }
  }
  if (e.code === 'KeyQ') swapWeapon()
  if (e.code === 'KeyE') {
    state.weapon = 3
    apricot.setWeapon('SLEDGE')
    updateHudWeapon()
    startAttack(3, nearestEnemy())
  }
  state.lastInput = performance.now()
})
window.addEventListener('keyup', e => keys.delete(e.code))

/* ------------------------------------------------------------- motion tilt */

const motionBtn = document.getElementById('btn-motion')

function onOrientation(e) {
  if (e.gamma == null || e.beta == null) return
  motion.gamma = e.gamma
  motion.beta = e.beta
  motion.active = true
}

async function enableMotion() {
  try {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const res = await DeviceOrientationEvent.requestPermission()
      if (res !== 'granted') {
        toast('MOTION DENIED', 1500)
        return
      }
    }
    if (typeof DeviceOrientationEvent === 'undefined') {
      toast('NO TILT SENSOR', 1400)
      return
    }
    window.addEventListener('deviceorientation', onOrientation)
    motion.enabled = true
    motionBtn.setAttribute('aria-pressed', 'true')
    toast('TILT CAM ON', 1000)
  } catch (err) {
    toast('MOTION UNAVAILABLE', 1400)
  }
}
motionBtn.addEventListener('click', () => {
  if (motion.enabled) {
    motion.enabled = false
    window.removeEventListener('deviceorientation', onOrientation)
    motionBtn.setAttribute('aria-pressed', 'false')
    toast('TILT CAM OFF', 900)
  } else enableMotion()
})

const cinemaBtn = document.getElementById('btn-cinema')
let cinematic = true
cinemaBtn.addEventListener('click', () => {
  cinematic = !cinematic
  cinemaBtn.setAttribute('aria-pressed', String(cinematic))
  toast(cinematic ? 'CINEMA CAM' : 'FREE CAM', 900)
})

/* ------------------------------------------------------------------- loop */

placeScene()
resize()
apricot.setWeapon(WEAPONS[0])
updateHudWeapon()

const flashEl = document.createElement('div')
flashEl.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:3;background:radial-gradient(circle at 50% 45%, rgba(255,240,210,0.65), rgba(255,170,80,0.12) 45%, transparent 70%);opacity:0;mix-blend-mode:screen;'
document.body.appendChild(flashEl)

const camPos = new THREE.Vector3()
const debugView = new URLSearchParams(location.search).get('view')

function update(dt, t) {
  // ---- player movement
  let mx = stick.x + (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0)
  let mz = stick.y + (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0)
  const moving = Math.hypot(mx, mz) > 0.08
  if (moving) {
    const len = Math.hypot(mx, mz)
    mx /= len; mz /= len
    const speed = 2.1
    const dirX = mx * Math.cos(cameraYaw) + mz * Math.sin(cameraYaw)
    const dirZ = -mx * Math.sin(cameraYaw) + mz * Math.cos(cameraYaw)
    apricot.root.position.x += dirX * speed * dt
    apricot.root.position.z += dirZ * speed * dt
    const bound = portrait ? 1.0 : 1.9
    apricot.root.position.x = THREE.MathUtils.clamp(apricot.root.position.x, -bound, bound)
    apricot.root.position.z = THREE.MathUtils.clamp(apricot.root.position.z, -1.35, 1.1)
    state.yaw = Math.atan2(dirX, dirZ)
    state.lastInput = performance.now()
    state.phase += dt * 9 * Math.min(1, Math.hypot(mx, mz))
  } else {
    state.phase += dt * 1.4
  }

  // ---- auto brawl demo keeps the arena alive if untouched
  const idleFor = (performance.now() - state.lastInput) / 1000
  if (idleFor > 4.0 && elapsed > 2.2 && state.attackClock < 0) {
    const idx = state.demoStep % WEAPONS.length
    const target = idx % 2 === 0 ? 'mute' : 'big'
    if (startAttack(idx, target)) {
      state.demoStep++
      state.lastInput = performance.now() - 2400
    }
  }

  // ---- attack timing
  if (state.attackClock >= 0) {
    state.attackClock += dt
    if (!state.hitDone && state.attackClock >= state.hitAt) doHit(state.attackTarget, WEAPONS[state.attackWeapon])
    if (state.attackClock > state.attackDuration + 0.35) {
      state.attackClock = -1
      state.attackTarget = null
    }
  }

  // ---- face nearest victim when idle
  if (!moving && state.attackClock < 0 && idleFor > 0.9) {
    const target = nearestEnemy()
    const e = enemies[target]
    const dx = e.obj.root.position.x - apricot.root.position.x
    const dz = e.obj.root.position.z - apricot.root.position.z
    state.yaw = Math.atan2(dx, dz) * 0.42
  }
  apricot.root.rotation.y += (state.yaw - apricot.root.rotation.y) * (1 - Math.exp(-dt * 6))

  // ---- poses
  const breathe = Math.sin(t * 1.5) * 0.02
  aAnim.update(dt, { chest: [A_BASE.chest[0] + breathe, A_BASE.chest[1], A_BASE.chest[2]] })
  mAnim.update(dt, { chest: [M_BASE.chest[0] + Math.sin(t * 2.1) * 0.02, M_BASE.chest[1] + Math.sin(t * 0.8) * 0.03, M_BASE.chest[2]] })
  bAnim.update(dt, { chest: [B_BASE.chest[0] + Math.sin(t * 1.7) * 0.03, B_BASE.chest[1], B_BASE.chest[2] + Math.sin(t * 1.1) * 0.02] })

  // walk cycle overlay
  if (moving) {
    const s = Math.sin(state.phase)
    apricot.rig.hipL.rotation.x += s * 0.4
    apricot.rig.hipR.rotation.x -= s * 0.4
    apricot.rig.kneeL.rotation.x += Math.max(0, s) * 0.3
    apricot.rig.kneeR.rotation.x += Math.max(0, -s) * 0.3
  }

  // ---- enemy hit reactions
  for (const name of ['mute', 'big']) {
    const rec = state.recoil[name]
    if (rec > 0) {
      state.recoil[name] = Math.max(0, rec - dt * 2.6)
      const e = enemies[name]
      const dir = Math.sign(e.obj.root.position.x - apricot.root.position.x) || 1
      const k = state.recoil[name]
      e.obj.rig.chest.rotation.x -= k * 0.5
      e.obj.rig.chest.rotation.z += dir * k * 0.16
      e.obj.rig.head.rotation.x -= k * 0.45
      e.obj.root.position.x += dir * k * 0.18
      e.obj.root.scale.set(1 + k * 0.03, 1 - k * 0.05, 1 + k * 0.03)
      e.obj.root.rotation.z = -dir * k * 0.1
    } else {
      const e = enemies[name]
      e.obj.root.scale.set(1, 1, 1)
      e.obj.root.rotation.z = 0
    }
  }
  mute.root.position.y = -0.09 + Math.sin(t * 3.1) * 0.005
  big.root.position.y = Math.sin(t * 2.3 + 1) * 0.006

  // ---- combo decay
  if (state.comboTimer > 0) {
    state.comboTimer -= dt
    if (state.comboTimer <= 0) {
      state.combo = 0
      updateCombo()
    }
  }

  // ---- camera
  if (cinematic && !dragging) {
    cameraYaw = Math.sin(t * 0.11) * 0.075
  }
  if (motion.enabled && motion.active) {
    cameraYaw = THREE.MathUtils.clamp(cameraYaw + motion.gamma * 0.0035, -1.1, 1.1)
    cameraPitch = THREE.MathUtils.clamp(cameraPitch + (motion.beta - 45) * 0.0012, 0.0, 0.42)
  }
  const follow = portrait ? 0.5 : 1
  cameraTarget.set(
    apricot.root.position.x * 0.55 * follow,
    shortLandscape ? 1.1 : portrait ? 1.5 : 1.52,
    (portrait ? 0.35 : shortLandscape ? 0.2 : 0.2) + apricot.root.position.z * 0.35
  )
  smoothTarget.lerp(cameraTarget, 1 - Math.exp(-dt * 3.2))

  cameraPosition(camPos)
  shake = Math.max(0, shake - dt * 0.9)
  shakeTime += dt * 46
  const sh = shake * shake
  camPos.x += Math.sin(shakeTime * 1.7) * sh * 0.55
  camPos.y += Math.cos(shakeTime * 2.1) * sh * 0.4
  camPos.z += Math.sin(shakeTime * 1.3) * sh * 0.25
  camera.position.copy(camPos)
  camera.lookAt(smoothTarget.x, smoothTarget.y + 0.05, smoothTarget.z)
  if (debugView) {
    if (debugView === 'face') {
      camera.position.set(0.55, 2.55, 3.4)
      camera.lookAt(0, 2.3, 0.1)
    } else {
      camera.position.set(2.2, 2.35, 5.2)
      camera.lookAt(0, 1.62, 0.2)
    }
  }

  // ---- fx
  env.update(dt, t)
  fx.update(dt)
  if (flash > 0) {
    flash = Math.max(0, flash - dt * 2.6)
    flashEl.style.opacity = String(flash * 0.35)
  }
  bloom.strength = 0.36 + Math.sin(t * 0.7) * 0.02
}

let firstFrame = true
function frame(now) {
  if (lastTime < 0) lastTime = now
  const dt = Math.min(Math.max((now - lastTime) / 1000, 0), 0.05)
  lastTime = now
  elapsed += dt
  update(dt, elapsed)
  composer.render()
  if (firstFrame) {
    firstFrame = false
    document.body.dataset.ready = '1'
  }
  requestAnimationFrame(frame)
}

requestAnimationFrame(frame)
window.addEventListener('resize', resize)
