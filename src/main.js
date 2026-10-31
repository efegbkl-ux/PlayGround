import * as THREE from 'three'
import { createArena } from './arena.js'
import {
  createApricot,
  createFatMan,
  createHealthBar,
  createSkinnyMan,
  createWeaponSet,
  WEAPON_NAMES,
  WEAPON_SHORT,
} from './models.js'
import { FX } from './fx.js'
import { Sound } from './audio.js'

/* ------------------------------------------------------------------ */
/* Setup                                                              */
/* ------------------------------------------------------------------ */

const canvas = document.getElementById('scene')
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
  stencil: false,
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.12

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(47, window.innerWidth / window.innerHeight, 0.1, 90)
camera.position.set(3.2, 4.2, 9.6)

const arena = createArena(scene)
const fx = new FX(scene, camera)
const sound = new Sound()

/* ------------------------------------------------------------------ */
/* Characters                                                         */
/* ------------------------------------------------------------------ */

const hero = createApricot()
const heroSpawn = new THREE.Vector3(-1.25, 0, 0.45)
hero.group.position.copy(heroSpawn)
scene.add(hero.group)

const weapons = createWeaponSet()
hero.rig.weaponMount.rotation.x = Math.PI / 2
for (const weapon of weapons) {
  weapon.visible = false
  weapon.scale.setScalar(0.94)
  hero.rig.weaponMount.add(weapon)
}

const enemyDefs = [
  {
    id: 'skinny',
    model: createSkinnyMan(),
    spawn: new THREE.Vector3(1.45, 0, 1.65),
    maxHealth: 95,
    barName: 'ACIZ DILSIZ',
    card: document.getElementById('cardSkinny'),
    bar: document.getElementById('skinnyBar'),
    speed: 0.85,
    hurtPower: 4,
  },
  {
    id: 'fat',
    model: createFatMan(),
    spawn: new THREE.Vector3(3.5, 0, -0.45),
    maxHealth: 145,
    barName: 'I LOVE 2016',
    card: document.getElementById('cardFat'),
    bar: document.getElementById('fatBar'),
    speed: 0.62,
    hurtPower: 8,
  },
]

const enemies = enemyDefs.map((def) => {
  def.model.group.position.copy(def.spawn)
  scene.add(def.model.group)
  const healthBar = createHealthBar(def.barName)
  healthBar.sprite.position.set(def.spawn.x, def.model.height + 0.32, def.spawn.z)
  scene.add(healthBar.sprite)
  return {
    ...def,
    health: def.maxHealth,
    pos: def.spawn.clone(),
    velocity: new THREE.Vector3(),
    y: 0,
    vy: 0,
    dead: false,
    downTimer: 0,
    stagger: 0,
    attacking: false,
    attackT: 0,
    attackStruck: false,
    attackCooldown: 3.2 + Math.random() * 2.4,
    healthBar,
    phase: Math.random() * Math.PI * 2,
    hitFlash: 0,
    fallDir: 1,
  }
})

/* ------------------------------------------------------------------ */
/* Weapons, UI and state                                              */
/* ------------------------------------------------------------------ */

const state = {
  started: false,
  ko: false,
  health: 100,
  maxHealth: 100,
  combo: 0,
  comboTimer: 0,
  weaponIndex: 0,
  attack: null,
  attackCooldown: 0,
  shake: 0,
  lastDamage: -99,
  tilt: false,
  muted: false,
  round: 1,
  kills: 0,
  time: 0,
  hintShown: false,
  tiltBase: null,
  tiltRaw: { x: 0, y: 0 },
  tiltSmooth: { x: 0, y: 0 },
}

const ATTACKS = [
  { label: 'BAT SWING', duration: 0.56, hitTime: 0.26, damage: 14, lunge: 1.35, reach: 3.35, kind: 'wood', minPower: 0.55 },
  { label: 'KATANA SLASH', duration: 0.45, hitTime: 0.2, damage: 16, lunge: 1.65, reach: 3.6, kind: 'metal', minPower: 0.65 },
  { label: 'PIPE CRUSH', duration: 0.6, hitTime: 0.33, damage: 18, lunge: 1.2, reach: 3.4, kind: 'metal', minPower: 0.7 },
  { label: 'SLEDGE SLAM', duration: 0.82, hitTime: 0.48, damage: 25, lunge: 1.0, reach: 3.5, kind: 'metal', minPower: 0.95 },
  { label: 'CHAIR SWEEP', duration: 0.72, hitTime: 0.37, damage: 21, lunge: 1.25, reach: 3.8, kind: 'metal', minPower: 0.85, aoe: true },
  { label: 'PAN UPPERCUT', duration: 0.5, hitTime: 0.21, damage: 13, lunge: 1.5, reach: 3.3, kind: 'pan', minPower: 0.6, launch: true },
]

const comboWords = ['POW!', 'BONK!', 'THWACK!', 'CRUNCH!', 'SPLAT!', 'SMACK!', 'WHAM!', 'OOF!']
const weaponHits = {
  wood: 'gold',
  metal: 'steel',
  pan: 'orange',
}

const dom = {
  intro: document.getElementById('intro'),
  ko: document.getElementById('ko'),
  startBtn: document.getElementById('startBtn'),
  rematchBtn: document.getElementById('rematchBtn'),
  attackBtn: document.getElementById('attackBtn'),
  swapBtn: document.getElementById('swapBtn'),
  swapWeapon: document.getElementById('swapWeapon'),
  weaponLabel: document.getElementById('weaponLabel'),
  weaponIndex: document.getElementById('weaponIndex'),
  heroBar: document.getElementById('heroBar'),
  hpNumber: document.getElementById('hpNumber'),
  combo: document.getElementById('combo'),
  comboNumber: document.getElementById('comboNumber'),
  comboWord: document.getElementById('comboWord'),
  roundLabel: document.getElementById('roundLabel'),
  damageFlash: document.getElementById('damageFlash'),
  speedLines: document.getElementById('speedLines'),
  tiltBtn: document.getElementById('tiltBtn'),
  soundBtn: document.getElementById('soundBtn'),
  toast: document.getElementById('toast'),
  joystick: document.getElementById('joystick'),
  knob: document.getElementById('stickKnob'),
  hint: document.getElementById('hint'),
}

let toastTimer = 0
function toast(message, duration = 2200) {
  dom.toast.textContent = message
  dom.toast.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), duration)
}

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

const up = new THREE.Vector3(0, 1, 0)
const tmpA = new THREE.Vector3()
const tmpB = new THREE.Vector3()
const tmpC = new THREE.Vector3()

function angleDelta(a) {
  let d = a
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return d
}

function yawTo(from, to) {
  return Math.atan2(to.x - from.x, to.z - from.z)
}

function dampAngle(current, target, lambda, dt) {
  return THREE.MathUtils.damp(current, current + angleDelta(target - current), lambda, dt)
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function smooth(t) {
  t = clamp(t, 0, 1)
  return t * t * (3 - 2 * t)
}

function easeOut(t) {
  t = clamp(t, 0, 1)
  return 1 - Math.pow(1 - t, 3)
}

function nearestEnemy() {
  let best = null
  let bestDist = Infinity
  for (const enemy of enemies) {
    if (enemy.dead) continue
    const d = enemy.pos.distanceTo(hero.group.position)
    if (d < bestDist) {
      bestDist = d
      best = enemy
    }
  }
  return best
}

function setWeapon(index, announce = false) {
  state.weaponIndex = ((index % weapons.length) + weapons.length) % weapons.length
  weapons.forEach((weapon, i) => {
    weapon.visible = i === state.weaponIndex
  })
  dom.weaponLabel.textContent = WEAPON_NAMES[state.weaponIndex]
  dom.swapWeapon.textContent = WEAPON_SHORT[state.weaponIndex]
  dom.weaponIndex.textContent = `${String(state.weaponIndex + 1).padStart(2, '0')} / ${String(weapons.length).padStart(2, '0')}`
  if (announce) toast(WEAPON_NAMES[state.weaponIndex], 900)
}

function updateHeroUI() {
  const ratio = clamp(state.health / state.maxHealth, 0, 1)
  dom.heroBar.style.width = `${ratio * 100}%`
  dom.hpNumber.textContent = String(Math.max(0, Math.round(state.health)))
}

function updateEnemyUI(enemy) {
  const ratio = clamp(enemy.health / enemy.maxHealth, 0, 1)
  enemy.bar.style.width = `${ratio * 100}%`
  enemy.healthBar.draw(ratio)
  enemy.card.classList.toggle('down', enemy.dead)
}

function updateComboUI(pop = false) {
  dom.comboNumber.textContent = String(state.combo)
  dom.comboWord.textContent = state.combo >= 8 ? 'RIPE RAGE' : 'COMBO'
  dom.combo.classList.toggle('hot', state.combo >= 2)
  if (pop && state.combo >= 2) {
    dom.combo.classList.remove('hit')
    void dom.combo.offsetWidth
    dom.combo.classList.add('hit')
  }
  dom.speedLines.classList.toggle('on', state.combo >= 5)
}

function damageFlash() {
  dom.damageFlash.classList.add('on')
  setTimeout(() => dom.damageFlash.classList.remove('on'), 120)
}

/* ------------------------------------------------------------------ */
/* Motion controls                                                    */
/* ------------------------------------------------------------------ */

function motionHandler(event) {
  if (event.beta == null || event.gamma == null) return
  if (!state.tiltBase) state.tiltBase = { beta: event.beta, gamma: event.gamma }
  const beta = event.beta - state.tiltBase.beta
  const gamma = event.gamma - state.tiltBase.gamma
  const portrait = window.innerHeight > window.innerWidth
  if (portrait) {
    state.tiltRaw.x = clamp(gamma / 26, -1, 1)
    state.tiltRaw.y = clamp(beta / 30, -1, 1)
  } else {
    state.tiltRaw.x = clamp(beta / 30, -1, 1)
    state.tiltRaw.y = clamp(-gamma / 26, -1, 1)
  }
}

async function toggleTilt() {
  if (state.tilt) {
    state.tilt = false
    state.tiltBase = null
    state.tiltRaw.x = state.tiltRaw.y = 0
    dom.tiltBtn.classList.remove('on')
    dom.tiltBtn.setAttribute('aria-pressed', 'false')
    dom.tiltBtn.innerHTML = '<span class="dot"></span>TILT OFF'
    window.removeEventListener('deviceorientation', motionHandler)
    toast('TILT OFF', 1200)
    return
  }
  if (!window.DeviceOrientationEvent) {
    toast('NO MOTION SENSOR ON THIS DEVICE', 2200)
    return
  }
  try {
    if (typeof window.DeviceOrientationEvent.requestPermission === 'function') {
      const permission = await window.DeviceOrientationEvent.requestPermission()
      if (permission !== 'granted') {
        toast('MOTION PERMISSION DENIED', 2400)
        return
      }
    }
  } catch (error) {
    toast('MOTION PERMISSION NEEDS A TAP', 2400)
    return
  }
  state.tilt = true
  state.tiltBase = null
  window.addEventListener('deviceorientation', motionHandler, { passive: true })
  dom.tiltBtn.classList.add('on')
  dom.tiltBtn.setAttribute('aria-pressed', 'true')
  dom.tiltBtn.innerHTML = '<span class="dot"></span>TILT ON'
  toast('TILT ON — LEAN TO MOVE', 2000)
}

/* ------------------------------------------------------------------ */
/* Input                                                              */
/* ------------------------------------------------------------------ */

const keys = new Set()
const joystick = { active: false, id: null, x: 0, y: 0 }

function updateJoystick(clientX, clientY) {
  const rect = dom.joystick.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  let dx = clientX - cx
  let dy = clientY - cy
  const max = rect.width * 0.33
  const len = Math.hypot(dx, dy)
  if (len > max) {
    dx = (dx / len) * max
    dy = (dy / len) * max
  }
  dom.knob.style.transform = `translate(${dx}px, ${dy}px)`
  joystick.x = dx / max
  joystick.y = dy / max
}

dom.joystick.addEventListener('pointerdown', (event) => {
  if (!state.started || state.ko) return
  event.preventDefault()
  joystick.active = true
  joystick.id = event.pointerId
  dom.joystick.classList.add('active')
  dom.joystick.setPointerCapture(event.pointerId)
  updateJoystick(event.clientX, event.clientY)
  sound.init()
})
dom.joystick.addEventListener('pointermove', (event) => {
  if (!joystick.active || event.pointerId !== joystick.id) return
  event.preventDefault()
  updateJoystick(event.clientX, event.clientY)
})
function endJoystick(event) {
  if (event && event.pointerId !== joystick.id) return
  joystick.active = false
  joystick.id = null
  joystick.x = joystick.y = 0
  dom.knob.style.transform = 'translate(0, 0)'
  dom.joystick.classList.remove('active')
}
dom.joystick.addEventListener('pointerup', endJoystick)
dom.joystick.addEventListener('pointercancel', endJoystick)
window.addEventListener('blur', () => {
  keys.clear()
  endJoystick()
})

function wireAction(button, action) {
  button.addEventListener('pointerdown', (event) => {
    event.preventDefault()
    event.stopPropagation()
    action()
  })
  button.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.detail === 0) action()
  })
}

wireAction(dom.attackBtn, () => attack())
wireAction(dom.swapBtn, () => {
  if (state.attack) return
  setWeapon(state.weaponIndex + 1, true)
  sound.init()
  sound.whoosh(0.4)
})
wireAction(dom.tiltBtn, toggleTilt)
wireAction(dom.soundBtn, () => {
  sound.init()
  state.muted = !state.muted
  sound.setMuted(state.muted)
  dom.soundBtn.classList.toggle('on', !state.muted)
  dom.soundBtn.setAttribute('aria-pressed', String(!state.muted))
  dom.soundBtn.innerHTML = `<span class="dot"></span>SOUND ${state.muted ? 'OFF' : 'ON'}`
})

window.addEventListener('keydown', (event) => {
  const code = event.code
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code)) event.preventDefault()
  keys.add(code)
  if (event.repeat) return
  if (code === 'Space' || code === 'KeyJ' || code === 'KeyF') attack()
  if (code === 'KeyQ') {
    if (!state.attack) {
      setWeapon(state.weaponIndex + 1, true)
      sound.init()
      sound.whoosh(0.4)
    }
  }
  if (code === 'KeyR') resetFight(true)
  if (code === 'KeyM') dom.soundBtn.click()
  if (code === 'KeyT') toggleTilt()
})
window.addEventListener('keyup', (event) => keys.delete(event.code))

function getMoveInput() {
  let x = joystick.x
  let y = joystick.y
  if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1
  if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1
  if (keys.has('KeyW') || keys.has('ArrowUp')) y -= 1
  if (keys.has('KeyS') || keys.has('ArrowDown')) y += 1
  if (state.tilt) {
    state.tiltSmooth.x = THREE.MathUtils.damp(state.tiltSmooth.x, state.tiltRaw.x, 8, 1 / 60)
    state.tiltSmooth.y = THREE.MathUtils.damp(state.tiltSmooth.y, state.tiltRaw.y, 8, 1 / 60)
    x += state.tiltSmooth.x
    y += state.tiltSmooth.y
  }
  const len = Math.hypot(x, y)
  if (len > 1) {
    x /= len
    y /= len
  }
  return { x, y, magnitude: Math.min(1, len) }
}

/* ------------------------------------------------------------------ */
/* Attacks                                                            */
/* ------------------------------------------------------------------ */

function attack() {
  if (!state.started || state.ko || state.attack || state.attackCooldown > 0) return
  sound.init()
  const spec = ATTACKS[state.weaponIndex]
  const target = nearestEnemy()
  const from = hero.group.position.clone()
  let yaw = hero.group.rotation.y
  const dir = new THREE.Vector3()

  if (target) {
    tmpA.set(target.pos.x, 0, target.pos.z)
    dir.copy(tmpA).sub(from).setY(0)
    if (dir.lengthSq() < 0.001) dir.set(0, 0, -1)
    dir.normalize()
    yaw = Math.atan2(dir.x, dir.z)
  } else {
    dir.set(Math.sin(yaw), 0, Math.cos(yaw))
  }

  state.attack = {
    index: state.weaponIndex,
    spec,
    t: 0,
    duration: spec.duration,
    target,
    dir,
    yaw,
    hit: false,
    base: hero.group.position.clone(),
    lunge: target ? Math.min(spec.lunge, Math.max(0.35, target.pos.distanceTo(from) - 1.5)) : 0,
  }
  state.attackCooldown = spec.duration + 0.06
  hero.rig.torso.rotation.y = 0
  sound.whoosh(0.7 + spec.minPower)
  dom.attackBtn.classList.remove('flash')
  void dom.attackBtn.offsetWidth
  dom.attackBtn.classList.add('flash')
}

function impactEnemy(enemy, amount, spec, attackData) {
  if (enemy.dead) return
  enemy.health = Math.max(0, enemy.health - amount)
  enemy.stagger = 0.55 + (spec.launch ? 0.25 : 0)
  enemy.attacking = false
  enemy.attackT = 0
  enemy.attackCooldown = Math.max(enemy.attackCooldown, 2.2)
  enemy.hitFlash = 0.14
  const push = tmpA.set(enemy.pos.x - hero.group.position.x, 0, enemy.pos.z - hero.group.position.z)
  if (push.lengthSq() < 0.001) push.set(Math.random() - 0.5, 0, Math.random() - 0.5)
  push.normalize()
  const power = spec.minPower
  enemy.velocity.addScaledVector(push, 2.6 + power * 4.4)
  enemy.velocity.x += (Math.random() - 0.5) * 1.2
  enemy.velocity.z += (Math.random() - 0.5) * 1.2
  if (spec.launch) {
    enemy.vy = 4.7
    enemy.velocity.y = 0
  } else {
    enemy.vy = Math.max(enemy.vy, 1.1 + power * 1.3)
  }
  updateEnemyUI(enemy)
  enemy.card.classList.remove('beingHit')
  void enemy.card.offsetWidth
  enemy.card.classList.add('beingHit')

  const impact = new THREE.Vector3(enemy.pos.x, enemy.model.height * 0.68 + enemy.y, enemy.pos.z)
  fx.burst(impact, weaponHits[spec.kind] || 'gold', 22, 0.9 + power * 0.9)
  fx.shockwave(impact, spec.kind === 'metal' ? '#dfe9eb' : '#ffb15a', 1.5 + power)
  fx.popup(String(Math.round(amount)), impact.clone().add(new THREE.Vector3(0, 0.65, 0)), {
    color: spec.launch ? '#b9ff79' : '#ffd05e',
    size: 0.95 + power * 0.28,
    rotation: (Math.random() - 0.5) * 0.16,
    burst: amount >= 20,
  })
  if (Math.random() > 0.56 || amount >= 20) {
    fx.popup(comboWords[Math.floor(Math.random() * comboWords.length)], impact.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.7, 1.2, 0.2)), {
      color: '#fff3d5',
      size: 0.7,
      rotation: (Math.random() - 0.5) * 0.35,
      life: 0.65,
    })
  }
  fx.slash(impact, spec.kind === 'metal' ? '#f3feff' : '#ffd7a1', Math.random() * Math.PI, 2.4 + power * 2.2)

  state.shake = Math.min(0.44, state.shake + 0.08 + power * 0.12)
  state.combo += 1
  state.comboTimer = 2.5
  updateComboUI(true)
  sound.impact(spec.kind, power)
  sound.oof()
  if (state.combo === 5 || state.combo === 10 || state.combo === 15) sound.cheer()

  if (enemy.health <= 0) {
    enemy.dead = true
    enemy.downTimer = 4.8
    enemy.healthBar.sprite.visible = false
    enemy.fallDir = Math.random() > 0.5 ? 1 : -1
    enemy.velocity.multiplyScalar(1.25)
    enemy.vy = 4.2
    state.kills += 1
    updateEnemyUI(enemy)
    fx.popup('K.O.!', new THREE.Vector3(enemy.pos.x, 2.5 + enemy.y, enemy.pos.z), {
      color: '#ff7b4d',
      size: 1.75,
      burst: true,
      life: 1.1,
      rotation: -0.05,
    })
    fx.burst(impact, 'red', 32, 1.5)
    fx.shockwave(impact, '#ff5a3a', 3.4)
    state.shake = 0.5
    sound.ko()
    sound.cheer()
    setTimeout(() => {
      if (enemies.every((e) => e.dead) && !state.ko) {
        state.round += 1
        dom.roundLabel.textContent = `ROUND ${state.round}`
      }
    }, 600)
  }
}

function performHit(attackData) {
  const spec = attackData.spec
  const targets = []
  if (spec.aoe) {
    for (const enemy of enemies) {
      if (enemy.dead) continue
      if (enemy.pos.distanceTo(hero.group.position) <= spec.reach + 0.45) targets.push(enemy)
    }
  } else if (attackData.target && !attackData.target.dead) {
    if (attackData.target.pos.distanceTo(hero.group.position) <= spec.reach) targets.push(attackData.target)
  }
  if (!targets.length) {
    const missPos = hero.group.position.clone().addScaledVector(attackData.dir, 1.9)
    missPos.y = 1.45
    fx.slash(missPos, '#ffd59d', Math.random() * Math.PI, 1.4)
    state.shake = Math.max(state.shake, 0.03)
    return
  }
  for (const enemy of targets) {
    const variance = 0.9 + Math.random() * 0.22
    impactEnemy(enemy, spec.damage * variance, spec, attackData)
  }
}

function finishAttack() {
  const attackData = state.attack
  if (!attackData) return
  state.attack = null
  hero.group.position.copy(attackData.base)
  if (attackData.target && attackData.target.dead) {
    // Keep the hero planted after a knockout.
  }
  setWeapon(state.weaponIndex + 1, false)
}

/* ------------------------------------------------------------------ */
/* Hero animation                                                     */
/* ------------------------------------------------------------------ */

function attackPose(index, p) {
  const shR = { x: -0.2, y: 0, z: 0.28 }
  const elR = { x: -0.8, y: 0, z: 0 }
  const shL = { x: -0.2, y: 0, z: -0.3 }
  const elL = { x: -0.6, y: 0, z: 0 }
  let twist = 0
  let lean = 0
  let headPitch = 0
  let lift = 0

  if (index === 0) {
    // Wide baseball-bat swing.
    const wind = p < 0.34 ? p / 0.34 : 1
    const swing = p < 0.34 ? 0 : (p - 0.34) / 0.66
    twist = p < 0.34 ? lerp(0, 1.05, smooth(wind)) : lerp(1.05, -1.25, easeOut(swing))
    shR.x = lerp(-0.1, -1.25, smooth(p < 0.34 ? wind : 1))
    shR.z = p < 0.34 ? lerp(0.25, 0.95, smooth(wind)) : lerp(0.95, -0.55, easeOut(swing))
    elR.x = -0.35
    shL.x = -0.8
    shL.z = -0.75
    elL.x = -1.3
    lean = p < 0.34 ? -0.05 : 0.14
    headPitch = p < 0.34 ? 0.04 : -0.06
  } else if (index === 1) {
    // Lunging katana slash.
    const wind = p < 0.24 ? p / 0.24 : 1
    const swing = p < 0.24 ? 0 : (p - 0.24) / 0.76
    twist = p < 0.24 ? lerp(0, 0.9, smooth(wind)) : lerp(0.9, -1.35, easeOut(swing))
    shR.x = -1.45
    shR.z = p < 0.24 ? lerp(0.3, 0.7, smooth(wind)) : lerp(0.7, -0.9, easeOut(swing))
    elR.x = -0.25
    shL.x = -0.9
    shL.z = -1.05
    elL.x = -0.9
    lean = 0.18 + Math.sin(p * Math.PI) * 0.12
    headPitch = -0.06
  } else if (index === 2) {
    // Overhead pipe crush.
    const wind = smooth(p < 0.42 ? p / 0.42 : 1)
    const swing = p < 0.42 ? 0 : easeOut((p - 0.42) / 0.58)
    shR.x = p < 0.42 ? lerp(-0.1, -2.85, wind) : lerp(-2.85, 1.0, swing)
    shR.z = p < 0.42 ? 0.35 : lerp(0.35, 0.1, swing)
    elR.x = p < 0.42 ? -0.5 : lerp(-0.9, -0.2, swing)
    shL.x = p < 0.42 ? lerp(-0.2, -2.5, wind) : lerp(-2.5, 0.6, swing)
    shL.z = -0.5
    elL.x = -1.1
    twist = p < 0.42 ? 0.25 : -0.55
    lean = p < 0.42 ? -0.18 : 0.38
    headPitch = p < 0.42 ? 0.12 : -0.18
  } else if (index === 3) {
    // Sledgehammer slam with a little hop.
    const wind = smooth(p < 0.5 ? p / 0.5 : 1)
    const swing = p < 0.5 ? 0 : easeOut((p - 0.5) / 0.5)
    shR.x = p < 0.5 ? lerp(-0.2, -3.0, wind) : lerp(-3.0, 1.05, swing)
    shR.z = p < 0.5 ? lerp(0.3, 0.05, wind) : lerp(0.05, -0.1, swing)
    elR.x = p < 0.5 ? lerp(-0.8, -0.2, wind) : lerp(-0.2, -0.4, swing)
    shL.x = p < 0.5 ? lerp(-0.2, -2.8, wind) : lerp(-2.8, 0.8, swing)
    shL.z = -0.25
    elL.x = -0.9
    twist = p < 0.5 ? 0.35 : -0.65
    lean = p < 0.5 ? -0.24 : 0.5
    headPitch = p < 0.5 ? 0.14 : -0.22
    lift = Math.sin(clamp(p / 0.5, 0, 1) * Math.PI) * 0.28
  } else if (index === 4) {
    // Folding-chair windmill sweep.
    const wind = smooth(p < 0.4 ? p / 0.4 : 1)
    const swing = p < 0.4 ? 0 : easeOut((p - 0.4) / 0.6)
    twist = p < 0.4 ? lerp(0, 1.25, wind) : lerp(1.25, -1.4, swing)
    shR.x = -1.2
    shR.z = p < 0.4 ? lerp(0.4, 1.4, wind) : lerp(1.4, -0.8, swing)
    elR.x = -0.3
    shL.x = -1.25
    shL.z = p < 0.4 ? lerp(-0.4, -1.5, wind) : lerp(-1.5, 0.6, swing)
    elL.x = -0.4
    lean = p < 0.4 ? -0.08 : 0.2
    lift = Math.sin(p * Math.PI) * 0.12
  } else {
    // Frying-pan uppercut.
    const wind = smooth(p < 0.36 ? p / 0.36 : 1)
    const swing = p < 0.36 ? 0 : easeOut((p - 0.36) / 0.64)
    shR.x = p < 0.36 ? lerp(0.4, -1.0, wind) : lerp(-1.0, -3.0, swing)
    shR.z = p < 0.36 ? lerp(0.2, -0.1, wind) : lerp(-0.1, 0.25, swing)
    elR.x = p < 0.36 ? -1.2 : lerp(-1.2, -0.2, swing)
    shL.x = p < 0.36 ? 0.3 : -0.9
    shL.z = -0.6
    elL.x = -1.25
    twist = p < 0.36 ? -0.15 : 0.35
    lean = p < 0.36 ? 0.12 : -0.3
    headPitch = p < 0.36 ? -0.14 : 0.18
    lift = Math.sin(clamp(p / 0.8, 0, 1) * Math.PI) * 0.3
  }

  return { shR, elR, shL, elL, twist, lean, headPitch, lift }
}

function updateHero(dt, t) {
  const move = getMoveInput()
  const rig = hero.rig
  const activeAttack = state.attack
  const attacking = Boolean(activeAttack)
  const speed = 3.25
  const moving = state.started && !state.ko && !attacking && move.magnitude > 0.12

  if (moving) {
    const dx = move.x * speed * dt
    const dz = move.y * speed * dt
    hero.group.position.x = clamp(hero.group.position.x + dx, -6.2, 5.6)
    hero.group.position.z = clamp(hero.group.position.z + dz, -4.2, 4.4)
  }

  const target = nearestEnemy()
  let faceYaw = hero.group.rotation.y
  if (activeAttack) {
    // Keep a sliver of the hero's face toward the camera mid-swing. The hit
    // itself is radial, so this is purely staging, not aim assist.
    const attackCamYaw = yawTo(hero.group.position, camera.position)
    faceYaw = activeAttack.yaw + angleDelta(attackCamYaw - activeAttack.yaw) * 0.2
  } else if (moving) {
    faceYaw = Math.atan2(move.x, move.y)
  } else if (target) {
    faceYaw = yawTo(hero.group.position, target.pos)
    const cam = yawTo(hero.group.position, camera.position)
    faceYaw += angleDelta(cam - faceYaw) * 0.18
  } else {
    faceYaw = yawTo(hero.group.position, camera.position)
  }
  hero.group.rotation.y = dampAngle(hero.group.rotation.y, faceYaw, attacking ? 18 : 9, dt)

  const camYaw = yawTo(hero.group.position, camera.position)
  const relCam = angleDelta(camYaw - hero.group.rotation.y)
  const baseTwist = clamp(relCam * 0.56, -0.62, 0.62)

  let pose
  let bob = 0
  let lift = 0
  if (activeAttack) {
    const p = clamp(activeAttack.t / activeAttack.duration, 0, 1)
    pose = attackPose(activeAttack.index, p)
    lift = pose.lift
    activeAttack.t += dt
    const lungeP = clamp(p / 0.78, 0, 1)
    const lungeCurve = Math.sin(lungeP * Math.PI)
    hero.group.position.copy(activeAttack.base).addScaledVector(activeAttack.dir, activeAttack.lunge * lungeCurve)
    if (!activeAttack.hit && activeAttack.t >= activeAttack.spec.hitTime) {
      activeAttack.hit = true
      performHit(activeAttack)
    }
  } else {
    const breathe = Math.sin(t * 2.3)
    const speedBob = moving ? Math.sin(t * 10) : 0
    bob = moving ? Math.abs(Math.sin(t * 9.5)) * 0.045 : breathe * 0.008
    lift = 0
    pose = {
      shR: { x: -0.22 + breathe * 0.02, y: 0, z: 0.3 },
      elR: { x: -0.95, y: 0, z: 0 },
      shL: { x: -0.2 + breathe * 0.02, y: 0, z: -0.32 },
      elL: { x: -0.62, y: 0, z: 0 },
      twist: baseTwist + (moving ? Math.sin(t * 9.5) * 0.04 : breathe * 0.015),
      lean: moving ? 0.08 : -0.015 + breathe * 0.006,
    }
    if (moving) {
      pose.shR.x = -0.45 + speedBob * 0.6
      pose.shL.x = -0.45 - speedBob * 0.6
      pose.elR.x = -1.0
      pose.elL.x = -0.8
    }
    pose.headPitch = moving ? 0.02 : -0.02
  }

  // Head aims at the chosen target while the chest plays to camera.
  let headWorldYaw
  if (activeAttack && activeAttack.target) {
    headWorldYaw = yawTo(hero.group.position, activeAttack.target.pos)
    headWorldYaw += angleDelta(camYaw - headWorldYaw) * 0.2
  } else if (target) {
    headWorldYaw = yawTo(hero.group.position, target.pos)
    headWorldYaw += angleDelta(camYaw - headWorldYaw) * 0.26
  } else {
    headWorldYaw = faceYaw
  }
  const headLocalYaw = clamp(angleDelta(headWorldYaw - (hero.group.rotation.y + rig.torso.rotation.y)), -0.95, 0.95)
  rig.head.rotation.y = THREE.MathUtils.damp(rig.head.rotation.y, headLocalYaw * (attacking ? 0.62 : 0.32), 13, dt)
  rig.head.rotation.x = THREE.MathUtils.damp(rig.head.rotation.x, (pose.headPitch || 0) + 0.03 * Math.sin(t * 1.7), 10, dt)
  rig.head.rotation.z = THREE.MathUtils.damp(rig.head.rotation.z, attacking ? -0.04 : Math.sin(t * 1.1) * 0.02, 8, dt)

  rig.torso.rotation.y = THREE.MathUtils.damp(rig.torso.rotation.y, pose.twist + baseTwist * (attacking ? 0.25 : 1), 18, dt)
  rig.torso.rotation.x = THREE.MathUtils.damp(rig.torso.rotation.x, pose.lean, 15, dt)
  rig.torso.rotation.z = THREE.MathUtils.damp(rig.torso.rotation.z, moving ? Math.sin(t * 9.5) * 0.035 : Math.sin(t * 1.6) * 0.012, 10, dt)

  // Right arm.
  rig.shoulderR.rotation.x = THREE.MathUtils.damp(rig.shoulderR.rotation.x, pose.shR.x, 24, dt)
  rig.shoulderR.rotation.y = THREE.MathUtils.damp(rig.shoulderR.rotation.y, pose.shR.y, 20, dt)
  rig.shoulderR.rotation.z = THREE.MathUtils.damp(rig.shoulderR.rotation.z, pose.shR.z, 24, dt)
  rig.elbowR.rotation.x = THREE.MathUtils.damp(rig.elbowR.rotation.x, pose.elR.x, 22, dt)
  rig.elbowR.rotation.z = THREE.MathUtils.damp(rig.elbowR.rotation.z, pose.elR.z, 20, dt)
  rig.shoulderL.rotation.x = THREE.MathUtils.damp(rig.shoulderL.rotation.x, pose.shL.x, 20, dt)
  rig.shoulderL.rotation.y = THREE.MathUtils.damp(rig.shoulderL.rotation.y, pose.shL.y, 18, dt)
  rig.shoulderL.rotation.z = THREE.MathUtils.damp(rig.shoulderL.rotation.z, pose.shL.z, 20, dt)
  rig.elbowL.rotation.x = THREE.MathUtils.damp(rig.elbowL.rotation.x, pose.elL.x, 18, dt)
  rig.elbowL.rotation.z = THREE.MathUtils.damp(rig.elbowL.rotation.z, pose.elL.z, 18, dt)

  // Legs.
  if (moving) {
    const gait = t * 9.5
    rig.hipL.rotation.x = Math.sin(gait) * 0.6
    rig.hipR.rotation.x = -Math.sin(gait) * 0.6
    rig.kneeL.rotation.x = Math.max(0, -Math.sin(gait)) * 0.75
    rig.kneeR.rotation.x = Math.max(0, Math.sin(gait)) * 0.75
    rig.hipL.rotation.z = -0.03
    rig.hipR.rotation.z = 0.03
  } else {
    const stance = attacking ? 1.4 : 1
    const idleSway = Math.sin(t * 1.6) * 0.02
    rig.hipL.rotation.x = THREE.MathUtils.damp(rig.hipL.rotation.x, attacking ? -0.18 : 0, 12, dt)
    rig.hipR.rotation.x = THREE.MathUtils.damp(rig.hipR.rotation.x, attacking ? 0.16 : 0, 12, dt)
    rig.hipL.rotation.z = THREE.MathUtils.damp(rig.hipL.rotation.z, -0.1 * stance + idleSway, 10, dt)
    rig.hipR.rotation.z = THREE.MathUtils.damp(rig.hipR.rotation.z, 0.1 * stance - idleSway, 10, dt)
    rig.kneeL.rotation.x = THREE.MathUtils.damp(rig.kneeL.rotation.x, 0.12 + (attacking ? 0.18 : 0), 12, dt)
    rig.kneeR.rotation.x = THREE.MathUtils.damp(rig.kneeR.rotation.x, 0.12 + (attacking ? 0.18 : 0), 12, dt)
  }

  // Final world position, including drama.
  if (!attacking) {
    hero.group.position.y = 0
    hero.group.position.y += bob
  } else {
    hero.group.position.y = lift + bob
  }
  if (state.ko) {
    hero.group.rotation.z = THREE.MathUtils.damp(hero.group.rotation.z, 1.45, 4, dt)
    hero.group.position.y = THREE.MathUtils.damp(hero.group.position.y, 0.25, 4, dt)
  } else {
    hero.group.rotation.z = THREE.MathUtils.damp(hero.group.rotation.z, 0, 8, dt)
  }
  if (activeAttack && activeAttack.t >= activeAttack.duration) finishAttack()
}

/* ------------------------------------------------------------------ */
/* Enemy animation + AI                                               */
/* ------------------------------------------------------------------ */

function updateEnemies(dt, t) {
  for (const enemy of enemies) {
    const rig = enemy.model.rig
    const model = enemy.model
    const heroPos = hero.group.position

    if (enemy.hitFlash > 0) enemy.hitFlash -= dt

    if (enemy.dead) {
      enemy.downTimer -= dt
      enemy.vy -= 16 * dt
      enemy.y = Math.max(0, enemy.y + enemy.vy * dt)
      enemy.pos.x += enemy.velocity.x * dt
      enemy.pos.z += enemy.velocity.z * dt
      enemy.velocity.multiplyScalar(Math.max(0, 1 - dt * 2.8))
      enemy.model.group.position.set(enemy.pos.x, enemy.y, enemy.pos.z)
      enemy.model.group.rotation.z = THREE.MathUtils.damp(enemy.model.group.rotation.z, enemy.fallDir * 1.5, 4, dt)
      enemy.model.group.rotation.x = THREE.MathUtils.damp(enemy.model.group.rotation.x, 0.1, 3, dt)
      if (enemy.downTimer <= 0) respawnEnemy(enemy)
      continue
    }

    enemy.model.group.rotation.z = THREE.MathUtils.damp(enemy.model.group.rotation.z, 0, 5, dt)
    enemy.model.group.rotation.x = THREE.MathUtils.damp(enemy.model.group.rotation.x, 0, 5, dt)

    // Knockback and jump physics.
    enemy.vy -= 16 * dt
    enemy.y += enemy.vy * dt
    if (enemy.y < 0) {
      enemy.y = 0
      enemy.vy = 0
      enemy.velocity.y = 0
    }
    enemy.pos.x += enemy.velocity.x * dt
    enemy.pos.z += enemy.velocity.z * dt
    enemy.velocity.x = THREE.MathUtils.damp(enemy.velocity.x, 0, 3.5, dt)
    enemy.velocity.z = THREE.MathUtils.damp(enemy.velocity.z, 0, 3.5, dt)
    if (enemy.stagger > 0) enemy.stagger -= dt

    const dist = Math.hypot(heroPos.x - enemy.pos.x, heroPos.z - enemy.pos.z)
    const toHero = tmpA.set(heroPos.x - enemy.pos.x, 0, heroPos.z - enemy.pos.z)
    if (toHero.lengthSq() < 0.0001) toHero.set(0, 0, 1)
    toHero.normalize()

    // Face the apricot, chest angled toward the camera so the sign and shirt read.
    const faceToHero = Math.atan2(toHero.x, toHero.z)
    const camYaw = yawTo(enemy.pos, camera.position)
    const cameraBlend = enemy.id === 'fat' ? 0.42 : 0.3
    const face = faceToHero + angleDelta(camYaw - faceToHero) * cameraBlend
    enemy.model.group.rotation.y = dampAngle(enemy.model.group.rotation.y, face, 6, dt)

    // AI lite: shuffle toward the hero, keep a fighting distance.
    if (!enemy.attacking && enemy.stagger <= 0 && state.started && !state.ko) {
      enemy.attackCooldown -= dt
      if (dist > 3.1) {
        enemy.pos.x += toHero.x * enemy.speed * dt
        enemy.pos.z += toHero.z * enemy.speed * dt
      } else if (dist < 2.15) {
        enemy.pos.x -= toHero.x * enemy.speed * 0.55 * dt
        enemy.pos.z -= toHero.z * enemy.speed * 0.55 * dt
      } else {
        const strafe = Math.sin(t * 1.3 + enemy.phase) * 0.28
        enemy.pos.x += -toHero.z * strafe * dt
        enemy.pos.z += toHero.x * strafe * dt
      }
      if (enemy.attackCooldown <= 0 && dist < 3.2) {
        enemy.attacking = true
        enemy.attackT = 0
        enemy.attackStruck = false
        sound.oof()
      }
    }

    if (enemy.attacking) {
      enemy.attackT += dt
      const windup = enemy.id === 'skinny' ? 0.62 : 0.78
      if (enemy.attackT < windup) {
        // telegraph
      } else if (!enemy.attackStruck) {
        enemy.attackStruck = true
        if (dist < 3.3 && state.started && !state.ko) {
          const amount = enemy.hurtPower + Math.floor(Math.random() * 3)
          damageHero(amount, enemy)
        } else {
          fx.popup('WHIFF', new THREE.Vector3(enemy.pos.x, 1.8, enemy.pos.z), { color: '#9fd4cf', size: 0.55, life: 0.55, rotation: 0.1 })
        }
      }
      if (enemy.attackT > windup + 0.5) {
        enemy.attacking = false
        enemy.attackCooldown = 3.4 + Math.random() * 3.2
      }
    }

    // Clamp to the alley floor.
    enemy.pos.x = clamp(enemy.pos.x, -5.5, 6.3)
    enemy.pos.z = clamp(enemy.pos.z, -4.0, 4.4)
    model.group.position.set(enemy.pos.x, enemy.y, enemy.pos.z)

    // Keep the two goons from occupying the same square metre.
    const other = enemies.find((e) => e !== enemy && !e.dead)
    if (other) {
      const dx = enemy.pos.x - other.pos.x
      const dz = enemy.pos.z - other.pos.z
      const d = Math.hypot(dx, dz)
      if (d < 2.9 && d > 0.0001) {
        const push = (2.9 - d) * 0.5
        enemy.pos.x += (dx / d) * push
        enemy.pos.z += (dz / d) * push
      }
    }

    // Torso plays to the camera, head keeps its eyes on the apricot.
    const relCam = angleDelta(camYaw - enemy.model.group.rotation.y)
    const torsoTwist = clamp(relCam * 0.78, -0.92, 0.92)
    const headWorld = yawTo(enemy.pos, heroPos)
    const headLocal = clamp(angleDelta(headWorld - (enemy.model.group.rotation.y + torsoTwist)), -0.85, 0.85)

    const tremble = enemy.id === 'skinny' ? Math.sin(t * 22 + enemy.phase) * 0.02 : 0
    const breathe = Math.sin(t * (enemy.id === 'skinny' ? 3.4 : 2.1) + enemy.phase)

    let lean = 0
    let armL = { x: 0.05, z: -0.15 }
    let armR = { x: 0.05, z: 0.15 }
    let elbowL = -0.2
    let elbowR = -0.2
    let squat = 0

    if (enemy.id === 'skinny') {
      armL = { x: -0.8 + Math.sin(t * 1.8) * 0.12, z: -0.6 - Math.sin(t * 1.5) * 0.1 }
      armR = { x: -0.5 - Math.sin(t * 1.8 + 1) * 0.16, z: 0.65 + Math.sin(t * 1.4) * 0.12 }
      elbowL = -1.3
      elbowR = -1.0
      lean = 0.12 + tremble
      squat = Math.max(0, Math.sin(t * 2.2 + enemy.phase)) * 0.03
    } else {
      armL = { x: 0.05 + breathe * 0.02, z: -0.42 }
      armR = { x: 0.05 + breathe * 0.02, z: 0.42 }
      elbowL = -0.4
      elbowR = -0.4
      lean = -0.05 + breathe * 0.008
    }

    if (enemy.attacking) {
      const windup = enemy.id === 'skinny' ? 0.62 : 0.78
      const wind = clamp(enemy.attackT / windup, 0, 1)
      const recover = clamp((enemy.attackT - windup) / 0.5, 0, 1)
      if (enemy.attackT < windup) {
        lean = -0.18 - smooth(wind) * 0.25
        armL.x = lerp(armL.x, -1.9, smooth(wind))
        armR.x = lerp(armR.x, -1.7, smooth(wind))
        armL.z -= smooth(wind) * 0.35
        armR.z += smooth(wind) * 0.35
        elbowL = -0.7
        elbowR = -0.7
      } else if (!enemy.attackStruck) {
        lean = 0.22
        armL.x = 0.4
        armR.x = 0.5
      } else {
        lean = 0.22 * (1 - recover) - 0.05
        armL.x = lerp(0.4, 0.05, recover)
        armR.x = lerp(0.5, 0.05, recover)
      }
    }
    if (enemy.stagger > 0) {
      lean -= enemy.stagger * 0.9
      armL.x -= enemy.stagger * 1.4
      armR.x -= enemy.stagger * 1.1
      armL.z -= enemy.stagger * 0.8
      armR.z += enemy.stagger * 0.8
    }

    const twistTarget = torsoTwist + (enemy.attacking ? Math.sin(enemy.attackT * 6) * 0.06 : 0)
    rig.torso.rotation.y = THREE.MathUtils.damp(rig.torso.rotation.y, twistTarget, 8, dt)
    rig.torso.rotation.x = THREE.MathUtils.damp(rig.torso.rotation.x, lean, 9, dt)
    rig.head.rotation.y = THREE.MathUtils.damp(rig.head.rotation.y, headLocal * 0.36, 9, dt)
    rig.head.rotation.x = THREE.MathUtils.damp(rig.head.rotation.x, -0.02 + (enemy.attacking ? -0.08 : 0), 7, dt)
    rig.torso.position.y = rig.torso.userData.baseY ?? (rig.torso.userData.baseY = rig.torso.position.y)
    rig.torso.position.y = (rig.torso.userData.baseY ?? 0) - squat

    if (rig.shoulderL) {
      rig.shoulderL.rotation.x = THREE.MathUtils.damp(rig.shoulderL.rotation.x, armL.x, 9, dt)
      rig.shoulderL.rotation.z = THREE.MathUtils.damp(rig.shoulderL.rotation.z, armL.z, 9, dt)
      rig.shoulderR.rotation.x = THREE.MathUtils.damp(rig.shoulderR.rotation.x, armR.x, 9, dt)
      rig.shoulderR.rotation.z = THREE.MathUtils.damp(rig.shoulderR.rotation.z, armR.z, 9, dt)
      rig.elbowL.rotation.x = THREE.MathUtils.damp(rig.elbowL.rotation.x, elbowL, 9, dt)
      rig.elbowR.rotation.x = THREE.MathUtils.damp(rig.elbowR.rotation.x, elbowR, 9, dt)
    }

    if (enemy.id === 'skinny') {
      rig.hipL.rotation.z = -0.05 + Math.sin(t * 2.3) * 0.04
      rig.hipR.rotation.z = 0.05 - Math.sin(t * 2.3) * 0.04
      rig.sign.rotation.z = Math.sin(t * 2.2 + 0.5) * 0.045 - lean * 0.3
      // Billboarding the sign is the difference between a prop and a readable message.
      const signWorld = rig.sign.getWorldPosition(tmpB)
      const wantedYaw = Math.atan2(camera.position.x - signWorld.x, camera.position.z - signWorld.z)
      const localYaw = angleDelta(wantedYaw - (enemy.model.group.rotation.y + rig.torso.rotation.y))
      rig.sign.rotation.y = THREE.MathUtils.damp(rig.sign.rotation.y, clamp(localYaw, -1.2, 1.2), 6, dt)
    }

    // Health bar follow.
    enemy.healthBar.sprite.position.set(enemy.pos.x, enemy.y + model.height + 0.28, enemy.pos.z)
    enemy.healthBar.sprite.visible = !enemy.dead
    model.update?.(t)
  }
}

function respawnEnemy(enemy) {
  enemy.dead = false
  enemy.health = enemy.maxHealth
  enemy.pos.copy(enemy.spawn)
  enemy.model.group.position.copy(enemy.spawn)
  enemy.model.group.rotation.set(0, 0, 0)
  enemy.velocity.set(0, 0, 0)
  enemy.y = 0
  enemy.vy = 0
  enemy.downTimer = 0
  enemy.stagger = 0
  enemy.attacking = false
  enemy.attackCooldown = 3.2 + Math.random() * 2.4
  enemy.healthBar.sprite.visible = true
  updateEnemyUI(enemy)
  fx.burst(new THREE.Vector3(enemy.pos.x, 1.2, enemy.pos.z), 'orange', 22, 0.7)
  fx.popup('HE’S BACK', new THREE.Vector3(enemy.pos.x, 2.5, enemy.pos.z), { color: '#ffd08a', size: 0.7, life: 0.8 })
  enemy.card.classList.remove('down')
}

function damageHero(amount, enemy) {
  if (state.ko || !state.started) return
  state.health = Math.max(0, state.health - amount)
  state.lastDamage = state.time
  state.shake = Math.min(0.5, state.shake + 0.2)
  state.combo = 0
  state.comboTimer = 0
  updateComboUI()
  updateHeroUI()
  damageFlash()
  sound.hurt()
  const pos = hero.group.position.clone()
  pos.y = 1.9
  fx.popup(`-${amount}`, pos, { color: '#ff7e62', size: 0.8, life: 0.7, rotation: 0.1 })
  fx.burst(pos, 'red', 10, 0.7)
  if (state.health <= 0) knockOut()
}

function knockOut() {
  state.ko = true
  state.attack = null
  state.combo = 0
  updateComboUI()
  sound.ko()
  state.shake = 0.55
  fx.popup('TOO RIPE', new THREE.Vector3(heroSpawn.x, 2.7, heroSpawn.z), { color: '#ff8a5c', size: 1.35, burst: true, life: 1.4 })
  setTimeout(() => {
    if (state.ko) {
      dom.ko.classList.remove('hidden')
    }
  }, 900)
}

/* ------------------------------------------------------------------ */
/* Fight reset / start                                                */
/* ------------------------------------------------------------------ */

function resetFight(startImmediately = false) {
  state.health = state.maxHealth
  state.ko = false
  state.combo = 0
  state.comboTimer = 0
  state.attack = null
  state.attackCooldown = 0
  state.kills = 0
  state.round = 1
  state.lastDamage = -99
  state.shake = 0
  dom.roundLabel.textContent = 'ROUND 1'
  dom.ko.classList.add('hidden')
  dom.speedLines.classList.remove('on')
  hero.group.position.copy(heroSpawn)
  hero.group.rotation.set(0, 1.2, 0)
  hero.rig.head.rotation.set(0, 0, 0)
  hero.rig.torso.rotation.set(0, 0, 0)
  for (const enemy of enemies) {
    enemy.dead = false
    enemy.health = enemy.maxHealth
    enemy.pos.copy(enemy.spawn)
    enemy.model.group.position.copy(enemy.spawn)
    enemy.model.group.rotation.set(0, 0, 0)
    enemy.model.rig.torso.rotation.set(0, 0, 0)
    enemy.velocity.set(0, 0, 0)
    enemy.y = 0
    enemy.vy = 0
    enemy.downTimer = 0
    enemy.stagger = 0
    enemy.attacking = false
    enemy.attackCooldown = 4 + Math.random() * 3
    enemy.healthBar.sprite.visible = true
    updateEnemyUI(enemy)
    enemy.card.classList.remove('down')
  }
  updateHeroUI()
  updateComboUI()
  setWeapon(0)
  if (startImmediately) startGame()
}

function startGame() {
  sound.init()
  sound.start()
  const wasStarted = state.started
  if (state.ko) resetFight(false)
  state.started = true
  state.ko = false
  dom.intro.classList.add('hidden')
  dom.ko.classList.add('hidden')
  updateHeroUI()
  if (!wasStarted) {
    // Snap the camera into a clean hero shot so the alley reads immediately.
    const focus = new THREE.Vector3(-0.1, 1.55, 0.2)
    camera.position.set(2.5, 3.7, 9.2)
    camera.lookAt(focus)
  }
  if (!state.hintShown) {
    state.hintShown = true
    setTimeout(() => toast('MASH SMASH — EVERY SWING AUTO-SWAPS', 2600), 2800)
  }
}

dom.startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  startGame()
})
dom.rematchBtn.addEventListener('click', (event) => {
  event.preventDefault()
  startGame()
})

/* ------------------------------------------------------------------ */
/* Camera                                                             */
/* ------------------------------------------------------------------ */

const cameraTarget = new THREE.Vector3(-0.1, 1.5, 0.2)
const desiredCamera = new THREE.Vector3()
const desiredTarget = new THREE.Vector3()
const centroid = new THREE.Vector3()

function updateCamera(dt, t) {
  if (!state.started) {
    const angle = 0.3 + Math.sin(t * 0.11) * 0.16
    const radius = window.innerHeight > window.innerWidth ? 12.4 : 9.5
    desiredCamera.set(0.2 + Math.sin(angle) * radius, 4.15 + Math.sin(t * 0.22) * 0.16, 0.1 + Math.cos(angle) * radius)
    desiredTarget.set(0.35, 1.62, 0.15)
    camera.position.lerp(desiredCamera, 1 - Math.exp(-dt * 1.4))
    cameraTarget.lerp(desiredTarget, 1 - Math.exp(-dt * 1.6))
    camera.lookAt(cameraTarget)
    return
  }

  const aspect = window.innerWidth / window.innerHeight
  const portrait = aspect < 0.85
  const shortView = window.innerHeight < 520
  const alive = enemies.filter((e) => !e.dead)
  centroid.set(0, 0, 0)
  for (const enemy of alive) centroid.add(enemy.pos)
  if (alive.length) centroid.multiplyScalar(1 / alive.length)
  else centroid.copy(hero.group.position)

  desiredTarget.set(
    lerp(hero.group.position.x, centroid.x, portrait ? 0.52 : 0.36) + (portrait ? 0.35 : 0.1),
    portrait ? 2.0 : shortView ? 1.22 : 1.55,
    lerp(hero.group.position.z, centroid.z, portrait ? 0.4 : 0.36),
  )
  const offsetX = portrait ? 2.2 : 3.0
  const offsetY = portrait ? 3.9 : shortView ? 3.15 : 3.65
  const offsetZ = portrait ? 13.4 : shortView ? 7.8 : 8.25
  desiredCamera.set(
    hero.group.position.x + offsetX,
    hero.group.position.y + offsetY,
    hero.group.position.z + offsetZ,
  )

  const camK = 1 - Math.exp(-dt * (state.ko ? 1.4 : 3.6))
  const targetK = 1 - Math.exp(-dt * (state.ko ? 1.8 : 5.2))
  camera.position.lerp(desiredCamera, camK)
  cameraTarget.lerp(desiredTarget, targetK)

  const shake = state.shake
  if (shake > 0.001) {
    camera.position.x += (Math.random() - 0.5) * shake
    camera.position.y += (Math.random() - 0.5) * shake * 0.7
    camera.position.z += (Math.random() - 0.5) * shake * 0.5
    cameraTarget.x += (Math.random() - 0.5) * shake * 0.4
    cameraTarget.y += (Math.random() - 0.5) * shake * 0.3
  }
  camera.lookAt(cameraTarget)
  state.shake = THREE.MathUtils.damp(state.shake, 0, 7, dt)
  if (state.shake < 0.002) state.shake = 0
}

/* ------------------------------------------------------------------ */
/* Resize                                                             */
/* ------------------------------------------------------------------ */

function onResize() {
  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.fov = height > width ? 62 : height < 520 ? 50 : 47
  camera.updateProjectionMatrix()
}
window.addEventListener('resize', onResize)
onResize()

/* ------------------------------------------------------------------ */
/* Main loop                                                          */
/* ------------------------------------------------------------------ */

const clock = new THREE.Clock()
let elapsed = 0

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05)
  elapsed += dt
  state.time = elapsed

  if (state.started && !state.ko) {
    state.attackCooldown = Math.max(0, state.attackCooldown - dt)
    if (state.comboTimer > 0) {
      state.comboTimer -= dt
      if (state.comboTimer <= 0) {
        state.combo = 0
        updateComboUI()
      }
    }
    if (elapsed - state.lastDamage > 8 && state.health < state.maxHealth) {
      state.health = Math.min(state.maxHealth, state.health + dt * 1.4)
      updateHeroUI()
    }
  }

  updateHero(dt, elapsed)
  updateEnemies(dt, elapsed)
  updateCamera(dt, elapsed)
  arena.update(elapsed)
  fx.update(dt)

  renderer.render(scene, camera)
}

setWeapon(0)
updateHeroUI()
enemies.forEach(updateEnemyUI)
renderer.setAnimationLoop(animate)
document.body.dataset.ready = 'true'
window.__kayisi = {
  state,
  hero,
  enemies,
  camera,
  scene,
  weapons,
  attack,
  startGame,
  resetFight,
  setWeapon,
  fx,
}

// Keep the idle scene honest if the browser restores focus after a pause.
window.addEventListener('visibilitychange', () => {
  if (!document.hidden) clock.getDelta()
})
