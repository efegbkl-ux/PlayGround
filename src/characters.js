import * as THREE from 'three'
import {
  apricotSkinTexture,
  apricotHeadTexture,
  skinBumpTexture,
  muteSignTexture,
  shirtPrintTexture,
  tshirtTexture,
  denimTexture,
  rustTexture,
  woodTexture,
  batWoodTexture
} from './textures.js'

const geoSphere = new THREE.SphereGeometry(1, 24, 18)
const geoSphereLo = new THREE.SphereGeometry(1, 16, 12)
const geoBox = new THREE.BoxGeometry(1, 1, 1)
const geoCyl = new THREE.CylinderGeometry(1, 1, 1, 20)

function orb(parent, mat, pos, scale, rot, geo = geoSphere) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(pos[0], pos[1], pos[2])
  m.scale.set(scale[0], scale[1], scale[2])
  if (rot) m.rotation.set(rot[0], rot[1], rot[2])
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function box(parent, mat, pos, scale, rot) {
  const m = new THREE.Mesh(geoBox, mat)
  m.position.set(pos[0], pos[1], pos[2])
  m.scale.set(scale[0], scale[1], scale[2])
  if (rot) m.rotation.set(rot[0], rot[1], rot[2])
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function cyl(parent, mat, pos, radius, height, rot, geo = geoCyl) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(pos[0], pos[1], pos[2])
  m.scale.set(radius, height, radius)
  if (rot) m.rotation.set(rot[0], rot[1], rot[2])
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function joint(parent, pos, name, rig) {
  const g = new THREE.Group()
  g.position.set(pos[0], pos[1], pos[2])
  g.name = name
  parent.add(g)
  rig[name] = g
  return g
}

/* ------------------------------------------------------------------ weapons */

function makeBat() {
  const g = new THREE.Group()
  const wood = new THREE.MeshStandardMaterial({
    map: batWoodTexture(),
    color: 0xffd9a8,
    emissive: 0x3a1c08,
    emissiveIntensity: 0.35,
    roughness: 0.42,
    metalness: 0.02
  })
  const grip = new THREE.MeshStandardMaterial({ color: 0x171310, roughness: 0.85 })
  const metal = new THREE.MeshStandardMaterial({ color: 0x8b8d8f, metalness: 0.9, roughness: 0.32 })

  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), grip)
  knob.scale.set(1, 0.7, 1)
  knob.position.y = 0.02
  g.add(knob)

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.042, 0.32, 18), grip)
  handle.position.y = 0.2
  g.add(handle)

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.1, 0.68, 20), wood)
  barrel.position.y = 0.68
  g.add(barrel)

  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 18, 12), wood)
  tip.scale.set(1, 0.55, 1)
  tip.position.y = 1.02
  g.add(tip)

  for (let i = 0; i < 3; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.051 + i * 0.012, 0.007, 8, 20), metal)
    band.rotation.x = Math.PI / 2
    band.position.y = 0.33 + i * 0.06
    g.add(band)
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
  g.scale.setScalar(1.14)
  return g
}

function makeSword() {
  const g = new THREE.Group()
  const steel = new THREE.MeshStandardMaterial({ color: 0xd8dde2, metalness: 1, roughness: 0.18, emissive: 0x1a2630, emissiveIntensity: 0.5 })
  const dark = new THREE.MeshStandardMaterial({ color: 0x191b1f, roughness: 0.7 })
  const gold = new THREE.MeshStandardMaterial({ color: 0xb98b3c, metalness: 0.9, roughness: 0.28 })

  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), gold)
  pommel.scale.set(1, 0.8, 1)
  pommel.position.y = -0.04
  g.add(pommel)

  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.25, 12), dark)
  grip.position.y = 0.1
  g.add(grip)

  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.035, 0.07), gold)
  guard.position.y = 0.245
  g.add(guard)

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.84, 0.016), steel)
  blade.position.y = 0.68
  g.add(blade)

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.038, 0.16, 4), steel)
  tip.rotation.y = Math.PI / 4
  tip.position.y = 1.18
  g.add(tip)

  const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.74, 0.019), new THREE.MeshStandardMaterial({ color: 0x7d858d, metalness: 1, roughness: 0.4 }))
  fuller.position.y = 0.7
  g.add(fuller)

  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
  return g
}

function makePipe() {
  const g = new THREE.Group()
  const rust = new THREE.MeshStandardMaterial({ map: rustTexture(), roughness: 0.55, metalness: 0.75 })
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.98, 18), rust)
  pipe.position.y = 0.42
  g.add(pipe)
  for (const y of [0.0, 0.9]) {
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.09, 18), rust)
    collar.position.y = y
    g.add(collar)
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
  return g
}

function makeSledge() {
  const g = new THREE.Group()
  const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.7 })
  const metal = new THREE.MeshStandardMaterial({ map: rustTexture(), roughness: 0.45, metalness: 0.8 })
  const grip = new THREE.MeshStandardMaterial({ color: 0x1b1714, roughness: 0.9 })

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.052, 0.95, 14), wood)
  handle.position.y = 0.47
  g.add(handle)
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.056, 0.24, 14), grip)
  wrap.position.y = 0.14
  g.add(wrap)

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.17, 0.17), metal)
  head.position.y = 0.98
  g.add(head)
  for (const x of [-0.235, 0.235]) {
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.19, 0.19), metal)
    face.position.set(x, 0.98, 0)
    g.add(face)
  }
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.1, 14), metal)
  collar.position.y = 0.94
  g.add(collar)

  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })
  return g
}

export const WEAPONS = ['BAT', 'KATANA', 'PIPE', 'SLEDGE']

/* ------------------------------------------------------------------ apricot */

export function createApricot() {
  const root = new THREE.Group()
  const rig = {}
  const meshes = []

  const skinMap = apricotSkinTexture()
  const headMap = apricotHeadTexture()
  const bump = skinBumpTexture()

  const skin = new THREE.MeshPhysicalMaterial({
    map: skinMap,
    bumpMap: bump,
    bumpScale: 0.035,
    roughness: 0.6,
    metalness: 0,
    sheen: 1,
    sheenColor: new THREE.Color(0xffb35e),
    sheenRoughness: 0.55,
    clearcoat: 0.18,
    clearcoatRoughness: 0.55
  })
  const skinHead = skin.clone()
  skinHead.map = headMap
  const skinDeep = skin.clone()
  skinDeep.color = new THREE.Color(0xd07a35)
  skinDeep.roughness = 0.68

  const wrapMat = new THREE.MeshStandardMaterial({ color: 0xbfb197, roughness: 0.92 })
  const dark = new THREE.MeshStandardMaterial({ color: 0x5a1f06, roughness: 0.7 })
  const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xf2e3c6, roughness: 0.35 })
  const iris = new THREE.MeshStandardMaterial({ color: 0xff9a1f, emissive: 0xff6400, emissiveIntensity: 1.2, roughness: 0.25 })
  const pupil = new THREE.MeshStandardMaterial({ color: 0x140800, roughness: 0.2 })
  const teeth = new THREE.MeshStandardMaterial({ color: 0xfff4dd, roughness: 0.35 })
  const mouth = new THREE.MeshStandardMaterial({ color: 0x3a0d04, roughness: 0.8 })
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x4f7a2a, roughness: 0.72, side: THREE.DoubleSide })
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5c3b17, roughness: 0.9 })

  const add = m => {
    m.castShadow = true
    m.receiveShadow = true
    meshes.push(m)
    return m
  }

  // ---- hips / legs
  const hips = joint(root, [0, 1.02, 0], 'hips', rig)
  add(orb(hips, skin, [0, 0.02, 0], [0.4, 0.3, 0.28]))
  add(orb(hips, skin, [0, -0.02, -0.1], [0.24, 0.19, 0.17], null, geoSphereLo))

  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 0.235 : -0.235
    const hip = joint(hips, [sx, -0.06, 0], `hip${side}`, rig)
    add(orb(hip, skinDeep, [0, -0.05, 0], [0.2, 0.2, 0.2]))
    add(orb(hip, skin, [0, -0.28, 0.01], [0.165, 0.3, 0.16])) // quad sweep
    const knee = joint(hip, [0, -0.5, 0], `knee${side}`, rig)
    add(orb(knee, skin, [0, 0, 0.02], [0.13, 0.13, 0.13]))
    add(orb(knee, skin, [0, -0.2, 0.02], [0.13, 0.27, 0.135])) // calf
    add(orb(knee, skin, [0, -0.19, -0.07], [0.1, 0.22, 0.1]))
    const ankle = joint(knee, [0, -0.42, 0], `ankle${side}`, rig)
    add(orb(ankle, skinDeep, [0, -0.02, 0], [0.085, 0.08, 0.09]))
    add(orb(ankle, skin, [0, -0.03, 0.08], [0.115, 0.075, 0.19]))
    add(box(ankle, skinDeep, [0, -0.055, 0.18], [0.18, 0.04, 0.1]))
  }

  // ---- torso
  const chest = joint(hips, [0, 0.14, 0], 'chest', rig)
  add(orb(chest, skin, [0, 0.13, 0.0], [0.35, 0.3, 0.26]))
  add(orb(chest, skin, [0, 0.35, -0.01], [0.42, 0.24, 0.27]))
  add(orb(chest, skin, [0, 0.58, 0.0], [0.55, 0.38, 0.31]))
  add(orb(chest, skin, [0, 0.78, 0.0], [0.44, 0.18, 0.25]))
  add(orb(chest, skinDeep, [0, 0.33, 0.2], [0.21, 0.16, 0.06])) // sternum

  // pecs
  for (const s of [-1, 1]) {
    add(orb(chest, skin, [0.24 * s, 0.655, 0.2], [0.3, 0.175, 0.1], [-0.12, 0, 0.05 * s]))
  }

  // lats + obliques
  for (const s of [-1, 1]) {
    add(orb(chest, skin, [0.45 * s, 0.52, -0.03], [0.2, 0.3, 0.23], [0, 0, 0.15 * s]))
    add(orb(chest, skin, [0.32 * s, 0.25, 0.03], [0.12, 0.22, 0.17], [0, 0, -0.2 * s]))
  }

  // abs
  for (let row = 0; row < 3; row++) {
    for (const s of [-1, 1]) {
      add(orb(chest, skin, [0.1 * s, 0.2 + row * 0.14, 0.23], [0.095, 0.052, 0.06]))
    }
  }
  add(box(chest, skinDeep, [0, 0.235, 0.26], [0.01, 0.32, 0.015]))
  for (let row = 0; row < 2; row++) add(box(chest, skinDeep, [0, 0.27 + row * 0.14, 0.257], [0.2, 0.006, 0.015]))

  // traps / neck
  add(orb(chest, skin, [0, 0.9, -0.02], [0.3, 0.13, 0.22]))
  add(cyl(chest, skinDeep, [0, 0.98, 0.02], 0.14, 0.18))

  // ---- head
  const neck = joint(chest, [0, 1.0, 0.01], 'neck', rig)
  const head = joint(neck, [0, 0.23, 0.03], 'head', rig)
  const skull = add(orb(head, skinHead, [0, 0.06, 0], [0.35, 0.405, 0.335]))
  skull.rotation.y = -Math.PI / 2 + 0.16

  // the apricot suture: a real crease down the fruit's face
  const seamPts = []
  for (let i = 0; i <= 12; i++) {
    const y = -0.1 + (i / 12) * 0.5
    const nx = 0.04 / 0.35
    const ny = (y - 0.06) / 0.405
    const inside = Math.max(0.02, 1 - nx * nx - ny * ny)
    seamPts.push(new THREE.Vector3(0.04, y + 0.06, 0.335 * Math.sqrt(inside) * 1.008))
  }
  const seamCurve = new THREE.CatmullRomCurve3(seamPts)
  const seam = new THREE.Mesh(
    new THREE.TubeGeometry(seamCurve, 24, 0.009, 5, false),
    new THREE.MeshStandardMaterial({ color: 0xa3541a, roughness: 0.85 })
  )
  seam.castShadow = false
  head.add(seam)
  meshes.push(seam)

  add(orb(head, skin, [0.17, -0.09, 0.19], [0.14, 0.14, 0.13]))
  add(orb(head, skin, [-0.17, -0.09, 0.19], [0.14, 0.14, 0.13]))
  add(orb(head, skin, [0, -0.19, 0.21], [0.19, 0.12, 0.13]))
  add(orb(head, skinDeep, [0, -0.26, 0.17], [0.13, 0.06, 0.08]))

  // angry brows
  for (const s of [-1, 1]) {
    add(box(head, dark, [0.135 * s, 0.158, 0.325], [0.17, 0.045, 0.05], [0.1, 0.1 * s, 0.5 * s]))
  }
  // eyes
  for (const s of [-1, 1]) {
    add(orb(head, skinDeep, [0.13 * s, 0.09, 0.295], [0.098, 0.085, 0.03]))
    add(orb(head, eyeWhite, [0.13 * s, 0.095, 0.325], [0.066, 0.046, 0.022], [0, 0, -0.12 * s]))
    add(orb(head, iris, [0.128 * s, 0.09, 0.344], [0.034, 0.034, 0.014]))
    add(box(head, pupil, [0.126 * s, 0.088, 0.354], [0.018, 0.03, 0.008]))
    add(orb(head, eyeWhite, [0.116 * s, 0.104, 0.357], [0.009, 0.009, 0.005]))
  }
  // nose
  add(orb(head, skinDeep, [0, 0.015, 0.345], [0.052, 0.05, 0.055]))
  add(orb(head, skinDeep, [-0.04, 0.0, 0.345], [0.02, 0.025, 0.03]))
  add(orb(head, skinDeep, [0.04, 0.0, 0.345], [0.02, 0.025, 0.03]))

  // confident snarl
  add(orb(head, mouth, [0.02, -0.145, 0.315], [0.158, 0.07, 0.035], [0.08, 0, 0.08]))
  add(box(head, teeth, [0.02, -0.12, 0.345], [0.24, 0.032, 0.02], [0.08, 0, 0.08]))
  for (let i = 0; i < 6; i++) add(box(head, mouth, [-0.075 + i * 0.038, -0.12, 0.357], [0.006, 0.03, 0.008], [0.08, 0, 0.08]))
  add(orb(head, skinDeep, [0.02, -0.19, 0.3], [0.13, 0.045, 0.05]))

  // stem + leaf, the unmistakable apricot crown
  const stem = cyl(head, stemMat, [0.02, 0.43, -0.03], 0.028, 0.16, [0.15, 0, 0.22])
  add(stem)
  const calyx = new THREE.Group()
  calyx.position.set(0.02, 0.4, -0.03)
  head.add(calyx)
  for (let i = 0; i < 5; i++) {
    const leaf = add(orb(calyx, leafMat, [Math.cos(i * 1.256) * 0.06, 0.0, Math.sin(i * 1.256) * 0.06], [0.05, 0.012, 0.09], [0.2, i * 1.256, 0.2], geoSphereLo))
    meshes.push(leaf)
  }
  const leafShape = new THREE.Shape()
  leafShape.moveTo(0, 0)
  leafShape.bezierCurveTo(0.09, 0.06, 0.125, 0.2, 0.02, 0.3)
  leafShape.bezierCurveTo(-0.075, 0.2, -0.085, 0.06, 0, 0)
  const leafGeo = new THREE.ExtrudeGeometry(leafShape, { depth: 0.012, bevelEnabled: false })
  const bigLeaf = new THREE.Mesh(leafGeo, leafMat)
  bigLeaf.position.set(0.06, 0.35, -0.02)
  bigLeaf.rotation.set(-0.1, 0.15, 0.5)
  bigLeaf.scale.set(1.9, 1.55, 1.6)
  bigLeaf.castShadow = true
  head.add(bigLeaf)
  meshes.push(bigLeaf)
  // central vein so the leaf reads as a leaf, not a fin
  const vein = new THREE.Mesh(
    new THREE.CylinderGeometry(0.006, 0.004, 0.24, 5),
    new THREE.MeshStandardMaterial({ color: 0x3f5c1f, roughness: 0.85 })
  )
  vein.position.set(0.0, 0.1, 0.014)
  vein.rotation.z = 0.03
  bigLeaf.add(vein)
  meshes.push(vein)

  // ---- arms
  for (const side of ['L', 'R']) {
    const s = side === 'L' ? 1 : -1
    const shoulder = joint(chest, [0.6 * s, 0.79, 0], `shoulder${side}`, rig)
    add(orb(shoulder, skin, [0, 0.02, 0], [0.25, 0.23, 0.24]))
    add(orb(shoulder, skin, [0, -0.02, 0.1], [0.19, 0.17, 0.14]))
    // bicep + tricep
    add(orb(shoulder, skin, [0.015 * s, -0.23, 0.055], [0.175, 0.21, 0.165]))
    add(orb(shoulder, skin, [0, -0.24, -0.055], [0.14, 0.2, 0.12]))

    const elbow = joint(shoulder, [0, -0.45, 0], `elbow${side}`, rig)
    add(orb(elbow, skinDeep, [0, 0.01, 0], [0.12, 0.12, 0.12]))
    add(orb(elbow, skin, [0, -0.17, 0.015], [0.145, 0.23, 0.14]))
    add(orb(elbow, skin, [0, -0.16, -0.04], [0.11, 0.19, 0.1]))

    const wrist = joint(elbow, [0, -0.4, 0], `wrist${side}`, rig)
    for (let i = 0; i < 3; i++) {
      const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.088 - i * 0.004, 0.018, 8, 18), wrapMat)
      wrap.rotation.x = Math.PI / 2
      wrap.position.y = -0.015 - i * 0.05
      wrap.castShadow = true
      wrist.add(wrap)
      meshes.push(wrap)
    }
    // fist
    add(orb(wrist, skin, [0, -0.15, 0.015], [0.108, 0.115, 0.1]))
    for (let i = 0; i < 4; i++) {
      add(orb(wrist, skin, [-0.06 + i * 0.04, -0.155, 0.095], [0.024, 0.03, 0.026], null, geoSphereLo))
    }
    add(orb(wrist, skinDeep, [0, -0.21, 0.02], [0.07, 0.04, 0.07], null, geoSphereLo))
  }

  // ---- weapons
  const weapons = {
    BAT: makeBat(),
    KATANA: makeSword(),
    PIPE: makePipe(),
    SLEDGE: makeSledge()
  }
  const mount = new THREE.Group()
  mount.position.set(0, -0.16, 0.06)
  mount.rotation.set(0, 0, 0)
  rig.wristR.add(mount)
  for (const key of WEAPONS) {
    weapons[key].visible = false
    mount.add(weapons[key])
  }

  // a small dimple at the stem
  add(orb(head, skinDeep, [0.03, 0.435, -0.02], [0.075, 0.03, 0.075], null, geoSphereLo))

  root.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true }
  })

  return {
    root,
    rig,
    meshes,
    head,
    weapons,
    mount,
    type: 'apricot',
    height: 2.75,
    setWeapon(name) {
      for (const key of WEAPONS) weapons[key].visible = key === name
    }
  }
}

/* --------------------------------------------------------------------- mute */

export function createMute() {
  const root = new THREE.Group()
  const rig = {}
  const meshes = []
  const add = m => { m.castShadow = true; m.receiveShadow = true; meshes.push(m); return m }

  const skin = new THREE.MeshStandardMaterial({ color: 0xc8b6a1, roughness: 0.86 })
  const skinDeep = new THREE.MeshStandardMaterial({ color: 0xa8947e, roughness: 0.9 })
  const shirt = new THREE.MeshStandardMaterial({ color: 0x8a8579, roughness: 0.95 })
  const pants = new THREE.MeshStandardMaterial({ map: denimTexture(), roughness: 0.95 })
  const hair = new THREE.MeshStandardMaterial({ color: 0x33291f, roughness: 0.95 })
  const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xfff8ea, roughness: 0.2 })
  const pupil = new THREE.MeshStandardMaterial({ color: 0x1a1208, roughness: 0.2 })
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x3a1a12, roughness: 0.8 })
  const stringMat = new THREE.MeshStandardMaterial({ color: 0x6b5a3f, roughness: 1 })
  const boardEdge = new THREE.MeshStandardMaterial({ color: 0x7c6136, roughness: 0.9 })

  const hips = joint(root, [0, 0.88, 0], 'hips', rig)
  add(orb(hips, pants, [0, 0.02, 0], [0.2, 0.16, 0.14]))

  for (const side of ['L', 'R']) {
    const s = side === 'L' ? 1 : -1
    const hip = joint(hips, [0.11 * s, -0.02, 0], `hip${side}`, rig)
    add(orb(hip, pants, [0, -0.16, 0], [0.07, 0.2, 0.07]))
    add(orb(hip, pants, [0, -0.34, 0], [0.062, 0.16, 0.062]))
    const knee = joint(hip, [0, -0.44, 0], `knee${side}`, rig)
    add(orb(knee, skin, [0, -0.12, 0], [0.05, 0.17, 0.05]))
    const ankle = joint(knee, [0, -0.38, 0], `ankle${side}`, rig)
    add(orb(ankle, skinDeep, [0, -0.03, 0.04], [0.06, 0.045, 0.11]))
  }

  const chest = joint(hips, [0, 0.11, 0], 'chest', rig)
  add(orb(chest, shirt, [0, 0.16, 0], [0.17, 0.26, 0.12]))
  add(orb(chest, shirt, [0, 0.38, -0.01], [0.21, 0.16, 0.13]))
  add(orb(chest, skin, [0, 0.46, 0.0], [0.19, 0.1, 0.1]))
  add(box(chest, shirt, [0, 0.12, 0.07], [0.28, 0.24, 0.14], [0.1, 0, 0]))
  // torn hem
  add(box(chest, skinDeep, [0, 0.02, 0.05], [0.24, 0.04, 0.12]))

  const neck = joint(chest, [0, 0.56, 0], 'neck', rig)
  add(cyl(neck, skinDeep, [0, 0.06, 0], 0.048, 0.14))
  const head = joint(neck, [0, 0.2, 0.01], 'head', rig)
  add(orb(head, skin, [0, 0.02, 0], [0.155, 0.18, 0.15]))
  add(orb(head, skinDeep, [0, -0.08, 0.06], [0.11, 0.09, 0.1]))
  add(orb(head, skin, [0, 0.11, 0.0], [0.13, 0.1, 0.13]))
  // messy hair
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2
    add(orb(head, hair, [Math.cos(a) * 0.11, 0.16 + Math.sin(i) * 0.02, Math.sin(a) * 0.1 - 0.01], [0.06, 0.035, 0.06], [0, 0, 0], geoSphereLo))
  }
  // huge worried eyes
  for (const s of [-1, 1]) {
    add(orb(head, eyeWhite, [0.06 * s, 0.03, 0.135], [0.045, 0.045, 0.025]))
    add(orb(head, pupil, [0.058 * s, 0.025, 0.155], [0.018, 0.02, 0.01]))
    add(orb(head, eyeWhite, [0.05 * s, 0.04, 0.163], [0.006, 0.006, 0.004]))
    add(box(head, hair, [0.065 * s, 0.1, 0.14], [0.08, 0.014, 0.02], [0, 0, 0.5 * s]))
  }
  add(orb(head, skinDeep, [-0.02, -0.015, 0.15], [0.022, 0.04, 0.03]))
  add(orb(head, skinDeep, [0.02, -0.015, 0.15], [0.022, 0.04, 0.03]))
  // open, mute mouth
  add(orb(head, mouthMat, [0, -0.075, 0.132], [0.035, 0.05, 0.03]))
  add(orb(head, skinDeep, [0, -0.125, 0.13], [0.045, 0.02, 0.025]))
  // taped-up cheek
  const bandage = new THREE.MeshStandardMaterial({ color: 0xd9c7a6, roughness: 0.92 })
  add(box(head, bandage, [0.105, -0.03, 0.135], [0.085, 0.028, 0.012], [0, 0, 0.6]))

  // sign
  const signGroup = new THREE.Group()
  signGroup.position.set(0, 0.16, 0.2)
  signGroup.rotation.set(0.05, 0, 0.02)
  chest.add(signGroup)
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(1.02, 0.5, 0.035),
    [
      boardEdge, boardEdge, boardEdge, boardEdge,
      new THREE.MeshStandardMaterial({ map: muteSignTexture(), roughness: 0.85 }),
      boardEdge
    ]
  )
  board.castShadow = true
  board.receiveShadow = true
  signGroup.add(board)
  meshes.push(board)
  const backPlate = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.46, 0.005), boardEdge)
  backPlate.position.z = -0.02
  signGroup.add(backPlate)
  for (const s of [-1, 1]) {
    const str = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.6, 6), stringMat)
    str.position.set(0.36 * s, 0.38, -0.02)
    str.rotation.z = -0.3 * s
    str.rotation.x = -0.25
    signGroup.add(str)
  }

  for (const side of ['L', 'R']) {
    const s = side === 'L' ? 1 : -1
    const shoulder = joint(chest, [0.2 * s, 0.43, 0], `shoulder${side}`, rig)
    add(orb(shoulder, shirt, [0, 0.0, 0], [0.075, 0.075, 0.075]))
    add(orb(shoulder, skin, [0, -0.16, 0], [0.045, 0.17, 0.045]))
    const elbow = joint(shoulder, [0, -0.3, 0], `elbow${side}`, rig)
    add(orb(elbow, skin, [0, -0.13, 0], [0.04, 0.14, 0.04]))
    const wrist = joint(elbow, [0, -0.26, 0], `wrist${side}`, rig)
    add(orb(wrist, skinDeep, [0, -0.05, 0.01], [0.048, 0.06, 0.035]))
  }

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })

  return { root, rig, meshes, type: 'mute', height: 1.72, sign: signGroup }
}

/* ------------------------------------------------------------------ big man */

export function createBigMan() {
  const root = new THREE.Group()
  const rig = {}
  const meshes = []
  const add = m => { m.castShadow = true; m.receiveShadow = true; meshes.push(m); return m }

  const skin = new THREE.MeshStandardMaterial({ color: 0xd19a76, roughness: 0.72 })
  const skinDeep = new THREE.MeshStandardMaterial({ color: 0xb87a58, roughness: 0.8 })
  const shirt = new THREE.MeshStandardMaterial({ map: tshirtTexture(), color: 0xf0eae0, roughness: 0.95 })
  const beard = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.95 })
  const shorts = new THREE.MeshStandardMaterial({ map: denimTexture(), roughness: 0.95 })
  const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xfff8ea, roughness: 0.2 })
  const pupil = new THREE.MeshStandardMaterial({ color: 0x161008, roughness: 0.2 })
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x40140c, roughness: 0.8 })
  const teeth = new THREE.MeshStandardMaterial({ color: 0xf6ead1, roughness: 0.4 })
  const sweatMat = new THREE.MeshPhysicalMaterial({ color: 0xbfe4ee, roughness: 0.1, metalness: 0, transmission: 0.6, thickness: 0.1, transparent: true, opacity: 0.8 })

  const hips = joint(root, [0, 0.8, 0], 'hips', rig)
  add(orb(hips, shorts, [0, 0.0, 0], [0.4, 0.27, 0.32]))

  for (const side of ['L', 'R']) {
    const s = side === 'L' ? 1 : -1
    const hip = joint(hips, [0.24 * s, -0.03, 0], `hip${side}`, rig)
    add(orb(hip, shorts, [0, -0.14, 0], [0.16, 0.2, 0.16]))
    add(orb(hip, skin, [0, -0.33, 0], [0.12, 0.18, 0.12]))
    const knee = joint(hip, [0, -0.42, 0], `knee${side}`, rig)
    add(orb(knee, skinDeep, [0, 0, 0.01], [0.09, 0.09, 0.09]))
    add(orb(knee, skin, [0, -0.12, 0], [0.09, 0.16, 0.09]))
    const ankle = joint(knee, [0, -0.34, 0], `ankle${side}`, rig)
    add(orb(ankle, skinDeep, [0, -0.01, 0.05], [0.1, 0.06, 0.15]))
  }

  const chest = joint(hips, [0, 0.1, 0], 'chest', rig)
  // the huge belly
  add(orb(chest, shirt, [0, 0.32, 0.02], [0.6, 0.56, 0.54]))
  add(orb(chest, shirt, [0, 0.62, -0.02], [0.44, 0.26, 0.36]))
  add(orb(chest, shirt, [0, 0.06, 0], [0.46, 0.2, 0.4]))
  // shirt sleeves / shoulders
  for (const s of [-1, 1]) {
    add(orb(chest, shirt, [0.45 * s, 0.62, 0], [0.19, 0.18, 0.2]))
    add(orb(chest, skin, [0.47 * s, 0.72, 0], [0.15, 0.1, 0.15], null, geoSphereLo))
  }
  // neck folds
  add(orb(chest, skin, [0, 0.79, 0.02], [0.18, 0.1, 0.17]))
  add(cyl(chest, skinDeep, [0, 0.86, 0.03], 0.14, 0.14))
  // collar
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.028, 8, 22), shirt)
  collar.position.set(0, 0.8, 0.01)
  collar.rotation.x = Math.PI / 2.3
  chest.add(collar)
  meshes.push(collar)

  // print decal on the belly
  const print = new THREE.Mesh(
    new THREE.SphereGeometry(0.607, 32, 24, Math.PI / 2 - 0.84, 1.68, 1.0, 0.78),
    new THREE.MeshStandardMaterial({
      map: shirtPrintTexture(),
      transparent: true,
      roughness: 0.95,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2
    })
  )
  print.position.set(0, 0.32, 0.02)
  print.scale.set(1.0, 0.93, 0.92)
  print.castShadow = false
  print.receiveShadow = false
  chest.add(print)
  meshes.push(print)

  // sleeve hems
  for (const s of [-1, 1]) {
    const hem = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.02, 6, 16), shirt)
    hem.position.set(0.47 * s, 0.62, 0)
    hem.rotation.x = Math.PI / 2
    hem.rotation.z = 0.1 * s
    chest.add(hem)
    meshes.push(hem)
  }

  const neck = joint(chest, [0, 0.9, 0.02], 'neck', rig)
  const head = joint(neck, [0, 0.16, 0.02], 'head', rig)
  head.scale.setScalar(1.12)
  add(orb(head, skin, [0, 0.0, 0], [0.23, 0.24, 0.22]))
  add(orb(head, skin, [0, -0.1, 0.1], [0.2, 0.13, 0.18]))
  add(orb(head, skinDeep, [-0.15, -0.02, 0.16], [0.06, 0.07, 0.05], null, geoSphereLo))
  add(orb(head, skinDeep, [0.15, -0.02, 0.16], [0.06, 0.07, 0.05], null, geoSphereLo))
  // bald shine
  add(orb(head, skin, [0, 0.12, 0.02], [0.19, 0.13, 0.19], null, geoSphereLo))

  // beard mass
  add(orb(head, beard, [0, -0.19, 0.1], [0.22, 0.15, 0.18]))
  add(orb(head, beard, [0, -0.24, 0.12], [0.16, 0.12, 0.14]))
  for (let i = 0; i < 10; i++) {
    const a = -0.9 + i * 0.2
    add(orb(head, beard, [Math.sin(a) * 0.2, -0.14 - Math.cos(a) * 0.06, 0.16 + Math.cos(a) * 0.06], [0.06, 0.07, 0.05], null, geoSphereLo))
  }
  // mustache
  add(orb(head, beard, [-0.055, -0.055, 0.2], [0.075, 0.035, 0.04], [0, 0, 0.2]))
  add(orb(head, beard, [0.055, -0.055, 0.2], [0.075, 0.035, 0.04], [0, 0, -0.2]))
  // mouth agape, jaw hanging open in pure panic
  add(orb(head, mouthMat, [0, -0.128, 0.196], [0.108, 0.1, 0.045]))
  add(orb(head, new THREE.MeshStandardMaterial({ color: 0x1c0503, roughness: 0.9 }), [0, -0.152, 0.232], [0.07, 0.062, 0.015]))
  add(box(head, teeth, [0, -0.062, 0.233], [0.145, 0.032, 0.02]))
  add(orb(head, new THREE.MeshStandardMaterial({ color: 0x9c4148, roughness: 0.75 }), [0, -0.185, 0.228], [0.055, 0.025, 0.014]))
  add(orb(head, skinDeep, [0, -0.218, 0.19], [0.095, 0.032, 0.038]))
  // terrified eyes: wide, round, pupils shrunk to pinpricks
  for (const s of [-1, 1]) {
    add(orb(head, skinDeep, [0.088 * s, 0.05, 0.19], [0.086, 0.095, 0.035]))
    add(orb(head, eyeWhite, [0.086 * s, 0.05, 0.197], [0.078, 0.088, 0.042]))
    add(orb(head, pupil, [0.08 * s, 0.052, 0.236], [0.016, 0.026, 0.012]))
    add(orb(head, eyeWhite, [0.066 * s, 0.072, 0.242], [0.011, 0.011, 0.006]))
    add(orb(head, eyeWhite, [0.094 * s, 0.034, 0.241], [0.006, 0.006, 0.004]))
    // brows flung high, inner corners lifted
    add(box(head, beard, [0.088 * s, 0.2, 0.198], [0.125, 0.028, 0.03], [0, 0, -0.5 * s]))
    add(orb(head, skinDeep, [0.082 * s, 0.155, 0.2], [0.074, 0.022, 0.035], [0, 0, 0.18 * s]))
  }
  // cold sweat pouring off the temples
  add(orb(head, sweatMat, [-0.2, 0.14, 0.15], [0.016, 0.03, 0.012], null, geoSphereLo))
  add(orb(head, sweatMat, [0.21, 0.11, 0.14], [0.014, 0.026, 0.011], null, geoSphereLo))
  add(orb(head, skinDeep, [0, -0.005, 0.205], [0.045, 0.04, 0.04]))
  // a fresh bruise from the bat
  add(orb(head, new THREE.MeshStandardMaterial({ color: 0x8a4c58, roughness: 0.8 }), [-0.17, 0.09, 0.165], [0.06, 0.045, 0.03]))
  // sweat
  for (let i = 0; i < 3; i++) {
    add(orb(head, sweatMat, [0.12 + i * 0.03, 0.09 - i * 0.04, 0.17], [0.012, 0.02, 0.01], null, geoSphereLo))
  }

  for (const side of ['L', 'R']) {
    const s = side === 'L' ? 1 : -1
    const shoulder = joint(chest, [0.48 * s, 0.63, 0], `shoulder${side}`, rig)
    add(orb(shoulder, shirt, [0, 0.0, 0], [0.17, 0.16, 0.17]))
    add(orb(shoulder, skin, [0, -0.17, 0], [0.1, 0.17, 0.1]))
    const elbow = joint(shoulder, [0, -0.3, 0], `elbow${side}`, rig)
    add(orb(elbow, skin, [0, -0.12, 0], [0.095, 0.15, 0.095]))
    const wrist = joint(elbow, [0, -0.27, 0], `wrist${side}`, rig)
    add(orb(wrist, skin, [0, -0.07, 0.01], [0.085, 0.09, 0.07]))
    add(orb(wrist, skinDeep, [0, -0.055, 0.07], [0.07, 0.04, 0.04], null, geoSphereLo))
  }

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true } })

  return { root, rig, meshes, type: 'big', height: 1.95, print }
}
