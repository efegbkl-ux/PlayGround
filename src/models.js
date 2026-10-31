import * as THREE from 'three'
import { makeApricotSkin, makeShirt, makeSign, makeWood } from './textures.js'

const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z)
const TAU = Math.PI * 2

function mesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const item = new THREE.Mesh(geometry, material)
  item.position.set(...position)
  item.rotation.set(...rotation)
  item.scale.set(...scale)
  parent.add(item)
  return item
}

function group(parent, position = [0, 0, 0]) {
  const item = new THREE.Group()
  item.position.set(...position)
  parent.add(item)
  return item
}

function capsule(radius, length, material, parent, position = [0, 0, 0], scale = [1, 1, 1]) {
  return mesh(parent, new THREE.CapsuleGeometry(radius, length, 6, 14), material, position, [0, 0, 0], scale)
}

function sphere(radius, material, parent, position = [0, 0, 0], scale = [1, 1, 1], segments = 20) {
  return mesh(parent, new THREE.SphereGeometry(radius, segments, Math.max(8, Math.round(segments * 0.7))), material, position, [0, 0, 0], scale)
}

function shadowed(root) {
  root.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true
      node.receiveShadow = true
    }
  })
  return root
}

function smoothstep(value, min, max) {
  const t = Math.min(1, Math.max(0, (value - min) / (max - min)))
  return t * t * (3 - 2 * t)
}

/* ------------------------------------------------------------------ */
/* Materials                                                          */
/* ------------------------------------------------------------------ */

function makeSkinMaterials() {
  const { map, bump } = makeApricotSkin()
  const base = {
    map,
    bumpMap: bump,
    bumpScale: 0.018,
    roughness: 0.48,
    metalness: 0,
    clearcoat: 0.16,
    clearcoatRoughness: 0.62,
    sheen: 0.34,
    sheenColor: new THREE.Color('#ffc789'),
    sheenRoughness: 0.75,
  }
  return {
    skin: new THREE.MeshPhysicalMaterial({ ...base }),
    skinShade: new THREE.MeshPhysicalMaterial({ ...base, color: new THREE.Color('#d5803a'), roughness: 0.56 }),
    skinLight: new THREE.MeshPhysicalMaterial({ ...base, color: new THREE.Color('#ffe0b9') }),
    vein: new THREE.MeshStandardMaterial({ color: '#b95012', roughness: 0.62 }),
    stem: new THREE.MeshStandardMaterial({ color: '#5b371d', roughness: 0.92 }),
    leaf: new THREE.MeshStandardMaterial({ color: '#5c8d36', roughness: 0.72, side: THREE.DoubleSide }),
    leafLight: new THREE.MeshStandardMaterial({ color: '#86b853', roughness: 0.7, side: THREE.DoubleSide }),
    gold: new THREE.MeshStandardMaterial({ color: '#d8a234', metalness: 0.9, roughness: 0.29 }),
    leather: new THREE.MeshStandardMaterial({ color: '#241a16', roughness: 0.82 }),
    eyeWhite: new THREE.MeshStandardMaterial({ color: '#fff4dc', roughness: 0.32 }),
    iris: new THREE.MeshStandardMaterial({ color: '#c95a12', emissive: new THREE.Color('#ff7a14'), emissiveIntensity: 0.58, roughness: 0.28 }),
    pupil: new THREE.MeshStandardMaterial({ color: '#160b04', roughness: 0.24 }),
    highlight: new THREE.MeshBasicMaterial({ color: '#ffffff' }),
    brow: new THREE.MeshStandardMaterial({ color: '#45200d', roughness: 0.8 }),
    mouth: new THREE.MeshStandardMaterial({ color: '#3a1509', roughness: 0.8 }),
    teeth: new THREE.MeshStandardMaterial({ color: '#fff7e8', roughness: 0.36 }),
    blush: new THREE.MeshBasicMaterial({ color: '#db5c15', transparent: true, opacity: 0.24, depthWrite: false }),
    seam: new THREE.MeshStandardMaterial({ color: '#a7490e', roughness: 0.84 }),
  }
}

/* ------------------------------------------------------------------ */
/* Head                                                               */
/* ------------------------------------------------------------------ */

function makeApricotHeadGeometry(radius = 0.42) {
  const geometry = new THREE.SphereGeometry(radius, 56, 40)
  const pos = geometry.attributes.position
  const v = new THREE.Vector3()
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i)
    let { x, y, z } = v
    const ny = y / radius
    // Apricots are round, slightly tall, and taper to the stem.
    const taper = 1 - 0.26 * Math.pow(Math.max(0, ny), 2.6)
    x *= taper
    z *= taper * 0.96
    y *= 1.07
    // Small dimple where the stem enters.
    const top = smoothstep(y / radius, 0.72, 1)
    y -= radius * 0.09 * top
    // Signature cleft, carved along the back so the face stays readable.
    const back = smoothstep(-z / radius, -0.05, 0.55)
    const seam = Math.exp(-Math.pow(x / (radius * 0.16), 2)) * (0.38 + back * 0.62)
    x *= 1 - 0.19 * seam
    z += 0.045 * seam * Math.sign(z || 1) * smoothstep(Math.abs(z) / radius, 0.1, 0.8)
    pos.setXYZ(i, x, y, z)
  }
  geometry.computeVertexNormals()
  return geometry
}

function addEyes(head, mats, opts = {}) {
  const eyeScale = opts.eyeScale || 1
  for (const side of [-1, 1]) {
    const eye = group(head, [0.145 * side, 0.045, 0.352])
    sphere(0.083 * eyeScale, mats.eyeWhite, eye, [0, 0, 0], [1, 1.12, 0.46], 16)
    const iris = sphere(0.041 * eyeScale, mats.iris, eye, [0, -0.002, 0.035], [1, 1, 0.42], 14)
    iris.rotation.z = side * -0.08
    sphere(0.02 * eyeScale, mats.pupil, eye, [0.004 * side, 0, 0.052], [1, 1.1, 0.4], 10)
    sphere(0.011 * eyeScale, mats.highlight, eye, [-0.016 * side, 0.016, 0.062], [1, 1, 0.5], 8)
    // Heavy angry brow.
    const brow = mesh(eye.parent, new THREE.BoxGeometry(0.145 * eyeScale, 0.034 * eyeScale, 0.035), mats.brow, [0.145 * side, 0.148, 0.36], [0, 0, side * 0.25])
    brow.geometry.translate(0, 0.01, 0)
  }
}

function addApricotFace(head, mats) {
  addEyes(head, mats)
  // Nose — a little apricot nub.
  sphere(0.052, mats.skinShade, head, [0, -0.045, 0.402], [1.15, 0.88, 0.8], 12)
  sphere(0.012, mats.mouth, head, [0.028, -0.062, 0.438], [1, 0.7, 0.6], 8)
  sphere(0.012, mats.mouth, head, [-0.028, -0.062, 0.438], [1, 0.7, 0.6], 8)
  // Cheekbones / blush.
  for (const side of [-1, 1]) {
    sphere(0.105, mats.blush, head, [0.225 * side, -0.065, 0.334], [1, 0.8, 0.35], 12)
    sphere(0.13, mats.skinLight, head, [0.235 * side, -0.075, 0.305], [1, 0.84, 0.66], 14)
  }
  // Wide, smug grin.
  mesh(head, new THREE.BoxGeometry(0.255, 0.09, 0.03), mats.mouth, [0, -0.205, 0.37], [0.06, 0, -0.02])
  mesh(head, new THREE.BoxGeometry(0.218, 0.043, 0.022), mats.teeth, [0, -0.196, 0.389], [0.06, 0, -0.02])
  for (let i = -1; i <= 1; i++) {
    mesh(head, new THREE.BoxGeometry(0.007, 0.044, 0.025), mats.mouth, [i * 0.062, -0.197, 0.394], [0.06, 0, 0])
  }
  // Chin.
  sphere(0.095, mats.skin, head, [0, -0.34, 0.3], [1, 0.85, 0.85], 14)
  // Seam down the back of the fruit.
  const seamCurve = new THREE.CatmullRomCurve3([
    V3(0, 0.435, -0.03),
    V3(0, 0.33, -0.255),
    V3(0, 0.08, -0.39),
    V3(0, -0.18, -0.345),
    V3(0, -0.34, -0.2),
  ])
  mesh(head, new THREE.TubeGeometry(seamCurve, 24, 0.009, 4, false), mats.seam)
  // The second half of the apricot's signature side crease, visible from the fight camera.
  const sideSeam = new THREE.CatmullRomCurve3([
    V3(0.018, 0.45, 0.02),
    V3(0.28, 0.34, 0.16),
    V3(0.405, 0.12, 0.06),
    V3(0.38, -0.12, -0.09),
    V3(0.24, -0.32, -0.16),
  ])
  mesh(head, new THREE.TubeGeometry(sideSeam, 24, 0.008, 4, false), mats.seam)
  // A wide, warm blush across the sunny side of the fruit.
  sphere(0.24, mats.blush, head, [0.22, -0.08, 0.2], [0.75, 1.1, 0.5], 16)
}

function addStemAndLeaf(head, mats) {
  const stem = group(head, [0, 0.445, -0.03])
  stem.rotation.z = -0.22
  mesh(stem, new THREE.CylinderGeometry(0.028, 0.04, 0.2, 8), mats.stem, [0, 0.08, 0])
  mesh(stem, new THREE.SphereGeometry(0.042, 8, 6), mats.stem, [0, 0.18, 0], [1, 0.55, 1])

  const leafShape = new THREE.Shape()
  leafShape.moveTo(0, 0)
  leafShape.bezierCurveTo(0.17, 0.08, 0.21, 0.28, 0, 0.48)
  leafShape.bezierCurveTo(-0.21, 0.28, -0.17, 0.08, 0, 0)
  const leafGeo = new THREE.ExtrudeGeometry(leafShape, { depth: 0.014, bevelEnabled: false, curveSegments: 14 })

  const leaf = group(stem, [0, 0.18, 0])
  leaf.rotation.set(0.18, 0.35, -0.72)
  mesh(leaf, leafGeo, mats.leaf, [0, 0.02, -0.007])
  mesh(leaf, new THREE.CylinderGeometry(0.0045, 0.006, 0.38, 4), mats.leafLight, [0, 0.22, 0.012])
  for (let i = 0; i < 3; i++) {
    mesh(leaf, new THREE.CylinderGeometry(0.0025, 0.0025, 0.11, 3), mats.leafLight, [(i - 1) * 0.085, 0.18 + i * 0.04, 0.012], [0, 0, (i - 1) * 0.7])
  }

  const leaf2 = group(stem, [0, 0.16, 0])
  leaf2.rotation.set(-0.25, -0.5, 0.95)
  leaf2.scale.setScalar(0.7)
  mesh(leaf2, leafGeo, mats.leafLight, [0, 0.02, -0.007])
  mesh(leaf2, new THREE.CylinderGeometry(0.0035, 0.004, 0.32, 4), mats.leaf, [0, 0.19, 0.012])
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export function createApricot() {
  const mats = makeSkinMaterials()
  const root = new THREE.Group()
  const body = group(root)
  const rig = { root, body, mats }

  // legs ------------------------------------------------------------
  for (const side of [-1, 1]) {
    const hip = group(body, [0.285 * side, 1.1, 0])
    hip.rotation.z = side * 0.055
    const thigh = capsule(0.185, 0.2, mats.skin, hip, [0, -0.27, 0], [1.06, 1, 1.06])
    sphere(0.235, mats.skin, hip, [0.018 * side, -0.23, 0.06], [0.92, 1.5, 1.02], 18)
    // Quad sweep.
    sphere(0.185, sg(mats.skinShade), hip, [0.01 * side, -0.3, 0.13], [0.78, 1.55, 0.56], 14)
    const knee = group(hip, [0, -0.56, 0])
    sphere(0.165, mats.skin, knee, [0, 0, 0.02], [1, 1, 1], 14)
    capsule(0.145, 0.19, mats.skin, knee, [0, -0.26, 0], [1, 1, 0.98])
    sphere(0.18, mats.skin, knee, [0, -0.23, -0.06], [0.95, 1.25, 0.75], 14)
    const ankle = group(knee, [0, -0.52, 0.015])
    mesh(ankle, new THREE.BoxGeometry(0.25, 0.13, 0.43), mats.skin, [0, -0.03, 0.12], [0, 0, 0])
    sphere(0.09, mats.skinShade, ankle, [0, -0.02, 0.35], [1.2, 0.8, 1.2], 10)
    rig[side < 0 ? 'hipL' : 'hipR'] = hip
    rig[side < 0 ? 'kneeL' : 'kneeR'] = knee
    rig[side < 0 ? 'thighL' : 'thighR'] = thigh
  }

  // pelvis and belt --------------------------------------------------
  sphere(0.39, mats.skin, body, [0, 1.27, 0], [1.06, 0.8, 0.78], 22)
  const belt = new THREE.Group()
  belt.position.set(0, 1.34, 0)
  body.add(belt)
  mesh(belt, new THREE.TorusGeometry(0.365, 0.052, 8, 40), mats.leather, [0, 0, 0], [Math.PI / 2, 0, 0], [1.08, 1, 0.8])
  mesh(belt, new THREE.BoxGeometry(0.19, 0.145, 0.05), mats.gold, [0, -0.01, 0.335])
  sphere(0.06, mats.skin, belt, [0, 0.002, 0.368], [1, 1.06, 0.28], 12)
  mesh(belt, new THREE.ConeGeometry(0.045, 0.11, 5), mats.leaf, [0.04, 0.09, 0.366], [0, 0, -0.7], [1, 1, 0.4])

  // torso ------------------------------------------------------------
  const torso = group(body, [0, 1.26, 0])
  rig.torso = torso

  const profile = [
    [0.29, 0.0],
    [0.34, 0.08],
    [0.37, 0.2],
    [0.44, 0.36],
    [0.52, 0.5],
    [0.57, 0.62],
    [0.56, 0.72],
    [0.48, 0.82],
    [0.35, 0.9],
    [0.22, 0.95],
  ].map(([x, y]) => new THREE.Vector2(x, y))
  const torsoMesh = mesh(torso, new THREE.LatheGeometry(profile, 32), mats.skin, [0, 0, 0], [0, 0, 0], [1, 1, 0.72])
  torsoMesh.geometry.computeVertexNormals()

  // Pecs.
  for (const side of [-1, 1]) {
    sphere(0.275, mats.skin, torso, [0.235 * side, 0.585, 0.26], [1.12, 0.82, 0.68], 22)
    sphere(0.16, mats.skinShade, torso, [0.28 * side, 0.56, 0.205], [1, 0.75, 0.5], 14)
    // Lats.
    sphere(0.24, mats.skin, torso, [0.43 * side, 0.38, -0.035], [0.66, 1.48, 0.72], 16)
    // Traps.
    sphere(0.2, mats.skin, torso, [0.23 * side, 0.86, -0.035], [0.92, 0.6, 0.95], 16)
    // Obliques.
    sphere(0.15, mats.skinShade, torso, [0.29 * side, 0.22, 0.09], [0.76, 1.3, 0.62], 14)
  }
  // Abs.
  for (let row = 0; row < 3; row++) {
    for (const side of [-1, 1]) {
      const y = 0.17 + row * 0.145
      sphere(0.105, mats.skin, torso, [0.105 * side, y, 0.285], [1, 0.86, 0.56], 14)
      sphere(0.09, mats.skinLight, torso, [0.105 * side, y + 0.015, 0.315], [0.9, 0.62, 0.28], 12)
    }
  }
  mesh(torso, new THREE.BoxGeometry(0.016, 0.43, 0.012), mats.seam, [0, 0.3, 0.318], [0, 0, 0])
  // Sternum shadow.
  mesh(torso, new THREE.BoxGeometry(0.018, 0.18, 0.012), mats.seam, [0, 0.62, 0.322], [0, 0, 0])
  // Collarbones.
  for (const side of [-1, 1]) {
    mesh(torso, new THREE.CapsuleGeometry(0.017, 0.24, 3, 6), mats.skinLight, [0.2 * side, 0.77, 0.24], [0, 0, Math.PI / 2 + side * 0.17])
  }

  // neck + head ------------------------------------------------------
  mesh(torso, new THREE.CylinderGeometry(0.19, 0.24, 0.24, 16), mats.skin, [0, 0.98, 0.01])
  const head = group(torso, [0, 1.16, 0.055])
  head.rotation.x = -0.03
  rig.head = head
  mesh(head, makeApricotHeadGeometry(0.42), mats.skin)
  addApricotFace(head, mats)
  addStemAndLeaf(head, mats)

  // arms -------------------------------------------------------------
  for (const side of [-1, 1]) {
    const shoulder = group(torso, [0.6 * side, 0.8, 0])
    rig[side < 0 ? 'shoulderL' : 'shoulderR'] = shoulder
    sphere(0.255, mats.skin, shoulder, [0, 0, 0], [1.05, 1, 0.94], 20)
    sphere(0.15, mats.skinShade, shoulder, [0.05 * side, -0.03, -0.11], [1, 1.1, 0.8], 14)
    // upper arm
    capsule(0.16, 0.24, mats.skin, shoulder, [0, -0.27, 0], [1.05, 1, 1])
    sphere(0.165, mats.skin, shoulder, [0.025 * side, -0.27, 0.06], [1.05, 1.32, 0.98], 16)
    sphere(0.13, mats.skinShade, shoulder, [-0.016 * side, -0.31, -0.07], [0.94, 1.32, 0.9], 14)
    // Bicep veins.
    const veinCurve = new THREE.CatmullRomCurve3([
      V3(0.06 * side, -0.12, 0.1),
      V3(0.075 * side, -0.23, 0.12),
      V3(0.045 * side, -0.35, 0.08),
    ])
    mesh(shoulder, new THREE.TubeGeometry(veinCurve, 10, 0.0075, 4, false), mats.vein)
    const elbow = group(shoulder, [0, -0.53, 0])
    rig[side < 0 ? 'elbowL' : 'elbowR'] = elbow
    sphere(0.135, mats.skin, elbow, [0, 0, -0.01], [1, 0.9, 0.95], 14)
    capsule(0.14, 0.19, mats.skin, elbow, [0, -0.24, 0], [1, 1, 1])
    sphere(0.15, mats.skin, elbow, [0, -0.31, 0.035], [0.9, 1.1, 0.9], 16)
    const hand = group(elbow, [0, -0.51, 0])
    rig[side < 0 ? 'handL' : 'handR'] = hand
    sphere(0.15, mats.skin, hand, [0, 0, 0.015], [1.02, 1.15, 1], 16)
    // Knuckles.
    for (let k = -1; k <= 1; k++) {
      sphere(0.055, mats.skin, hand, [k * 0.07, 0.065, 0.075], [1, 1.05, 0.9], 8)
    }
    // Wrist wrap, a tiny nod to the gym.
    mesh(hand, new THREE.CylinderGeometry(0.142, 0.142, 0.09, 12), mats.leather, [0, 0.14, 0], [0, 0, 0], [1, 1, 1])
    if (side > 0) {
      const mount = group(hand, [0, 0.01, 0.06])
      mount.rotation.x = -1.28
      rig.weaponMount = mount
    }
  }

  shadowed(root)
  root.scale.setScalar(1)
  return { group: root, rig, materials: mats, height: 2.82 }
}

function sg(material) {
  // Reuse the shade material without allocating a new one each call.
  return material
}

/* ------------------------------------------------------------------ */
/* Weapons                                                            */
/* ------------------------------------------------------------------ */

let weaponTextures = null
function getWeaponWood() {
  if (!weaponTextures) weaponTextures = makeWood()
  return weaponTextures
}

export const WEAPON_NAMES = ['NAIL BAT', 'KATANA', 'METAL PIPE', 'SLEDGEHAMMER', 'FOLDING CHAIR', 'FRYING PAN']
export const WEAPON_SHORT = ['BAT', 'KATANA', 'PIPE', 'SLEDGE', 'CHAIR', 'PAN']

function steelMaterial() {
  return new THREE.MeshStandardMaterial({ color: '#aeb9be', metalness: 0.96, roughness: 0.28, envMapIntensity: 1.1 })
}

export function createWeaponSet() {
  const wood = new THREE.MeshStandardMaterial({ map: getWeaponWood(), color: '#d6b07e', roughness: 0.72 })
  const tape = new THREE.MeshStandardMaterial({ color: '#211b18', roughness: 0.88 })
  const steel = steelMaterial()
  const darkSteel = new THREE.MeshStandardMaterial({ color: '#5a666a', metalness: 0.86, roughness: 0.42 })
  const gold = new THREE.MeshStandardMaterial({ color: '#d4a33c', metalness: 0.9, roughness: 0.3 })
  const black = new THREE.MeshStandardMaterial({ color: '#151515', roughness: 0.72 })
  const red = new THREE.MeshStandardMaterial({ color: '#91231e', roughness: 0.6 })
  const weapons = []

  // 1. Nail bat.
  {
    const g = new THREE.Group()
    mesh(g, new THREE.CylinderGeometry(0.037, 0.043, 0.38, 10), tape, [0, 0.19, 0], [0, 0, 0])
    mesh(g, new THREE.CylinderGeometry(0.09, 0.04, 0.78, 14), wood, [0, 0.75, 0], [0, 0, 0])
    for (let i = 0; i < 4; i++) {
      mesh(g, new THREE.CylinderGeometry(0.045, 0.045, 0.032, 10), tape, [0, 0.15 + i * 0.07, 0], [0, 0, 0])
    }
    for (const [x, y, z, rx, rz] of [
      [0.075, 0.94, 0, 0, 0.3],
      [-0.07, 1.0, 0.02, 0.2, -0.3],
      [0.02, 1.08, -0.07, -0.3, 0.1],
    ]) {
      mesh(g, new THREE.CylinderGeometry(0.006, 0.014, 0.16, 5), steel, [x, y, z], [rx, 0, rz])
      mesh(g, new THREE.CylinderGeometry(0.018, 0.018, 0.015, 8), steel, [x * 1.8, y - 0.07, z * 1.8], [rx, 0, rz])
    }
    g.userData.tip = 1.1
    weapons.push(g)
  }

  // 2. Katana.
  {
    const g = new THREE.Group()
    mesh(g, new THREE.CylinderGeometry(0.032, 0.036, 0.32, 8), black, [0, 0.12, 0])
    for (let i = 0; i < 5; i++) {
      mesh(g, new THREE.TorusGeometry(0.035, 0.006, 4, 8), red, [0, 0.05 + i * 0.055, 0], [Math.PI / 2, 0, 0], [1, 1, 1])
    }
    mesh(g, new THREE.CylinderGeometry(0.115, 0.115, 0.018, 20), gold, [0, 0.29, 0])
    mesh(g, new THREE.BoxGeometry(0.06, 1.0, 0.014), steel, [0, 0.8, 0], [0, 0, 0])
    mesh(g, new THREE.ConeGeometry(0.043, 0.15, 4), steel, [0, 1.37, 0], [0, 0, 0], [0.9, 1, 0.25])
    mesh(g, new THREE.BoxGeometry(0.009, 0.95, 0.016), new THREE.MeshBasicMaterial({ color: '#e8fbff' }), [0.026, 0.8, 0.002])
    g.userData.tip = 1.45
    weapons.push(g)
  }

  // 3. Metal pipe.
  {
    const g = new THREE.Group()
    mesh(g, new THREE.CylinderGeometry(0.043, 0.043, 1.15, 12), darkSteel, [0, 0.55, 0])
    mesh(g, new THREE.CylinderGeometry(0.062, 0.062, 0.07, 12), steel, [0, 0.18, 0])
    mesh(g, new THREE.CylinderGeometry(0.062, 0.062, 0.07, 12), steel, [0, 0.94, 0])
    mesh(g, new THREE.CylinderGeometry(0.075, 0.06, 0.1, 12), steel, [0, 1.13, 0])
    // A beaten-in dent.
    mesh(g, new THREE.SphereGeometry(0.055, 8, 6), darkSteel, [0.035, 0.66, 0.02], [1, 1, 1], [0.4, 1, 1])
    g.userData.tip = 1.2
    weapons.push(g)
  }

  // 4. Sledgehammer.
  {
    const g = new THREE.Group()
    mesh(g, new THREE.CylinderGeometry(0.043, 0.052, 0.95, 10), wood, [0, 0.47, 0])
    mesh(g, new THREE.CylinderGeometry(0.056, 0.056, 0.09, 10), tape, [0, 0.12, 0])
    mesh(g, new THREE.BoxGeometry(0.42, 0.17, 0.17), steel, [0, 1.01, 0])
    mesh(g, new THREE.BoxGeometry(0.05, 0.19, 0.19), darkSteel, [-0.2, 1.01, 0])
    mesh(g, new THREE.BoxGeometry(0.05, 0.19, 0.19), darkSteel, [0.2, 1.01, 0])
    mesh(g, new THREE.CylinderGeometry(0.025, 0.025, 0.09, 8), gold, [0.28, 1.01, 0], [0, 0, Math.PI / 2])
    g.userData.tip = 1.12
    weapons.push(g)
  }

  // 5. Folding chair.
  {
    const g = new THREE.Group()
    const chairMat = darkSteel
    mesh(g, new THREE.BoxGeometry(0.46, 0.055, 0.4), chairMat, [0, 0.52, 0])
    mesh(g, new THREE.BoxGeometry(0.46, 0.48, 0.05), chairMat, [0, 0.83, -0.19], [-0.1, 0, 0])
    for (const [x, z] of [[-0.2, -0.17], [0.2, -0.17], [-0.2, 0.17], [0.2, 0.17]]) {
      mesh(g, new THREE.CylinderGeometry(0.018, 0.018, 0.48, 6), chairMat, [x, 0.27, z], [0, 0, 0], [1, 1, 1])
    }
    mesh(g, new THREE.BoxGeometry(0.36, 0.04, 0.3), red, [0, 0.545, 0.01])
    g.userData.tip = 0.9
    weapons.push(g)
  }

  // 6. Frying pan.
  {
    const g = new THREE.Group()
    mesh(g, new THREE.CylinderGeometry(0.035, 0.042, 0.55, 8), black, [0, 0.27, 0])
    mesh(g, new THREE.CylinderGeometry(0.055, 0.055, 0.06, 10), tape, [0, 0.05, 0])
    mesh(g, new THREE.CylinderGeometry(0.235, 0.21, 0.055, 24), black, [0, 0.62, 0], [Math.PI / 2, 0, 0])
    mesh(g, new THREE.TorusGeometry(0.225, 0.018, 6, 24), darkSteel, [0, 0.62, 0], [Math.PI / 2, 0, 0])
    mesh(g, new THREE.CylinderGeometry(0.022, 0.022, 0.1, 6), steel, [0, 0.56, 0])
    g.userData.tip = 0.86
    weapons.push(g)
  }

  for (const weapon of weapons) shadowed(weapon)
  return weapons
}

/* ------------------------------------------------------------------ */
/* Skinny mute man                                                    */
/* ------------------------------------------------------------------ */

function makeHumanMaterials() {
  return {
    skin: new THREE.MeshStandardMaterial({ color: '#9dab97', roughness: 0.82 }),
    skinDark: new THREE.MeshStandardMaterial({ color: '#7b8a77', roughness: 0.86 }),
    skinLight: new THREE.MeshStandardMaterial({ color: '#b9c4a9', roughness: 0.78 }),
    cloth: new THREE.MeshStandardMaterial({ color: '#565b49', roughness: 0.98 }),
    shorts: new THREE.MeshStandardMaterial({ color: '#3c3a30', roughness: 0.98 }),
    dirt: new THREE.MeshStandardMaterial({ color: '#4a3a2a', roughness: 1 }),
    eyeWhite: new THREE.MeshStandardMaterial({ color: '#f3f0db', roughness: 0.36 }),
    iris: new THREE.MeshStandardMaterial({ color: '#6f8c7a', roughness: 0.4 }),
    pupil: new THREE.MeshStandardMaterial({ color: '#101511', roughness: 0.3 }),
    hair: new THREE.MeshStandardMaterial({ color: '#4a3e31', roughness: 0.98 }),
    mouth: new THREE.MeshStandardMaterial({ color: '#3b1c19', roughness: 0.8 }),
    signWood: new THREE.MeshStandardMaterial({ map: getWeaponWood(), color: '#c9a273', roughness: 0.9 }),
    rope: new THREE.MeshStandardMaterial({ color: '#7d6742', roughness: 1 }),
    stink: new THREE.MeshBasicMaterial({ color: '#9fdf5f', transparent: true, opacity: 0.24, depthWrite: false, blending: THREE.AdditiveBlending }),
    fly: new THREE.MeshStandardMaterial({ color: '#151710', roughness: 0.8 }),
  }
}

export function createSkinnyMan() {
  const mats = makeHumanMaterials()
  const root = new THREE.Group()
  const body = group(root)
  const rig = { root, body, mats }

  // Shaky little legs.
  for (const side of [-1, 1]) {
    const hip = group(body, [0.105 * side, 0.83, 0])
    hip.rotation.z = side * 0.06
    mesh(hip, new THREE.CylinderGeometry(0.043, 0.036, 0.39, 8), mats.skin, [0, -0.19, 0])
    sphere(0.058, mats.skinDark, hip, [0, -0.39, 0], [1, 1, 1], 10)
    const knee = group(hip, [0, -0.4, 0])
    mesh(knee, new THREE.CylinderGeometry(0.036, 0.027, 0.38, 8), mats.skin, [0, -0.19, 0])
    mesh(knee, new THREE.BoxGeometry(0.12, 0.07, 0.3), mats.skinDark, [0, -0.4, 0.07])
    rig[side < 0 ? 'hipL' : 'hipR'] = hip
    rig[side < 0 ? 'kneeL' : 'kneeR'] = knee
  }
  sphere(0.14, mats.skin, body, [0, 0.88, 0], [1, 0.7, 0.8], 12)
  mesh(body, new THREE.CylinderGeometry(0.15, 0.17, 0.26, 12), mats.shorts, [0, 0.8, 0])

  const torso = group(body, [0, 0.94, 0])
  torso.rotation.x = 0.1
  rig.torso = torso
  mesh(torso, new THREE.CylinderGeometry(0.145, 0.17, 0.58, 12), mats.skin, [0, 0.29, 0], [0, 0, 0], [1, 0.74, 0.8])
  // Ribs and clavicles.
  for (let i = 0; i < 3; i++) {
    for (const side of [-1, 1]) {
      mesh(torso, new THREE.CapsuleGeometry(0.012, 0.12, 2, 5), mats.skinDark, [0.07 * side, 0.19 + i * 0.075, 0.105], [0, 0, Math.PI / 2 + side * 0.32])
    }
  }
  for (const side of [-1, 1]) {
    mesh(torso, new THREE.CapsuleGeometry(0.013, 0.15, 2, 5), mats.skinLight, [0.08 * side, 0.48, 0.09], [0, 0, Math.PI / 2 + side * 0.23])
  }
  // Sunken belly.
  sphere(0.115, mats.skinDark, torso, [0, 0.17, 0.01], [1, 1.3, 0.82], 12)

  // Neck + head.
  mesh(torso, new THREE.CylinderGeometry(0.052, 0.075, 0.14, 8), mats.skin, [0, 0.62, 0.01], [0.1, 0, 0])
  const head = group(torso, [0, 0.76, 0.03])
  rig.head = head
  sphere(0.17, mats.skin, head, [0, 0.02, 0], [0.84, 1.13, 0.92], 18)
  sphere(0.075, mats.skinDark, head, [0, -0.11, 0.075], [1, 1.1, 0.8], 10)
  // Sunken temples and cheekbones.
  for (const side of [-1, 1]) {
    sphere(0.055, mats.skinLight, head, [0.085 * side, -0.015, 0.105], [1, 1.2, 0.8], 10)
    sphere(0.045, mats.skinDark, head, [0.1 * side, 0.06, 0.085], [1, 1, 0.5], 8)
    // Big worried eyes.
    sphere(0.055, mats.eyeWhite, head, [0.069 * side, 0.065, 0.13], [1, 1.14, 0.45], 12)
    sphere(0.023, mats.iris, head, [0.069 * side, 0.06, 0.16], [1, 1, 0.5], 10)
    sphere(0.011, mats.pupil, head, [0.069 * side, 0.06, 0.173], [1, 1, 0.5], 8)
    // eye bags
    mesh(head, new THREE.CapsuleGeometry(0.006, 0.055, 2, 5), mats.skinDark, [0.069 * side, 0.015, 0.148], [0, 0, Math.PI / 2])
    // worried brows
    mesh(head, new THREE.BoxGeometry(0.08, 0.016, 0.018), mats.hair, [0.069 * side, 0.13, 0.14], [0, 0, side * -0.34])
    // ears
    sphere(0.043, mats.skin, head, [0.155 * side, 0.015, 0.01], [0.42, 1.1, 0.8], 10)
    // patchy side hair
    sphere(0.045, mats.hair, head, [0.13 * side, 0.1, -0.06], [0.5, 0.5, 0.8], 8)
  }
  // Long nose.
  mesh(head, new THREE.ConeGeometry(0.026, 0.12, 6), mats.skinDark, [0, -0.005, 0.17], [Math.PI / 2, 0, 0], [1, 1, 0.8])
  // Nervous little mouth.
  mesh(head, new THREE.BoxGeometry(0.075, 0.024, 0.02), mats.mouth, [0, -0.105, 0.14], [0.1, 0, -0.05])
  mesh(head, new THREE.BoxGeometry(0.06, 0.01, 0.012), mats.teeth || mats.eyeWhite, [0, -0.101, 0.152])
  // Bald patch strands.
  for (let i = 0; i < 5; i++) {
    mesh(head, new THREE.CylinderGeometry(0.002, 0.003, 0.09, 3), mats.hair, [(i - 2) * 0.018, 0.19, -0.012], [0.15 + i * 0.05, 0, 0.2])
  }

  // Long, knobbly arms held up in a nervous half-guard.
  for (const side of [-1, 1]) {
    const shoulder = group(torso, [0.18 * side, 0.48, 0.01])
    rig[side < 0 ? 'shoulderL' : 'shoulderR'] = shoulder
    sphere(0.06, mats.skin, shoulder, [0, 0, 0], [1, 1, 1], 10)
    mesh(shoulder, new THREE.CylinderGeometry(0.033, 0.028, 0.32, 8), mats.skin, [0, -0.16, 0])
    sphere(0.044, mats.skinDark, shoulder, [0, -0.32, 0], [1, 1, 1], 8)
    const elbow = group(shoulder, [0, -0.33, 0])
    rig[side < 0 ? 'elbowL' : 'elbowR'] = elbow
    mesh(elbow, new THREE.CylinderGeometry(0.026, 0.021, 0.31, 8), mats.skin, [0, -0.15, 0])
    const hand = group(elbow, [0, -0.32, 0])
    rig[side < 0 ? 'handL' : 'handR'] = hand
    sphere(0.05, mats.skinDark, hand, [0, -0.01, 0.01], [0.8, 1.2, 0.8], 8)
    for (let f = -1; f <= 1; f++) {
      mesh(hand, new THREE.CylinderGeometry(0.006, 0.004, 0.1, 4), mats.skin, [f * 0.02, -0.08, 0.01], [0.1, 0, f * 0.1])
    }
  }

  // The sign, front and center, with the exact message.
  const signPivot = group(torso, [0, 0.35, 0.19])
  rig.sign = signPivot
  const signBoard = new THREE.Group()
  signPivot.add(signBoard)
  const signTexture = makeSign()
  mesh(signBoard, new THREE.BoxGeometry(1.18, 0.56, 0.03), mats.signWood, [0, 0, 0])
  mesh(signBoard, new THREE.PlaneGeometry(1.15, 0.535), new THREE.MeshStandardMaterial({ map: signTexture, roughness: 0.82 }), [0, 0, 0.0175])
  // Rope to the neck.
  for (const side of [-1, 1]) {
    const rope = mesh(signPivot, new THREE.CylinderGeometry(0.009, 0.009, 0.38, 5), mats.rope, [0.27 * side, 0.28, -0.08], [0.18, 0, side * 0.16])
    rope.geometry.translate(0, -0.02, 0)
  }
  mesh(signPivot, new THREE.TorusGeometry(0.028, 0.007, 4, 8), mats.signWood, [0.53, 0.22, 0], [0, 0, 0])
  mesh(signPivot, new THREE.TorusGeometry(0.028, 0.007, 4, 8), mats.signWood, [-0.53, 0.22, 0], [0, 0, 0])

  // Stink wisps and flies.
  rig.stink = []
  for (let i = 0; i < 4; i++) {
    const points = []
    for (let p = 0; p < 5; p++) {
      points.push(V3(Math.sin(p * 1.7 + i) * 0.16 + (i - 1.5) * 0.12, p * 0.3, Math.cos(p * 1.2 + i) * 0.08))
    }
    const curve = new THREE.CatmullRomCurve3(points)
    const wisp = mesh(root, new THREE.TubeGeometry(curve, 20, 0.012, 4, false), mats.stink.clone(), [0, 1.05, 0])
    wisp.userData.phase = i * 1.3
    rig.stink.push(wisp)
  }
  rig.flies = []
  for (let i = 0; i < 5; i++) {
    const fly = group(root, [0, 1.5, 0])
    sphere(0.019, mats.fly, fly, [0, 0, 0], [1, 0.7, 1.2], 6)
    const wingMat = new THREE.MeshBasicMaterial({ color: '#c9d9d0', transparent: true, opacity: 0.34, side: THREE.DoubleSide })
    for (const side of [-1, 1]) {
      mesh(fly, new THREE.CircleGeometry(0.028, 6), wingMat, [0.026 * side, 0.014, 0], [0.5, 0, side * 0.5], [1, 1, 1])
    }
    fly.userData.phase = i * 1.1
    fly.userData.radius = 0.28 + i * 0.09
    rig.flies.push(fly)
  }

  shadowed(root)
  return { group: root, rig, materials: mats, height: 1.95, update(t) {
    for (const wisp of rig.stink) {
      const p = wisp.userData.phase
      wisp.material.opacity = 0.11 + (Math.sin(t * 1.7 + p) * 0.5 + 0.5) * 0.16
      wisp.scale.x = wisp.scale.z = 0.85 + Math.sin(t * 1.2 + p) * 0.18
      wisp.position.y = 1.04 + Math.sin(t * 1.1 + p) * 0.04
    }
    for (const fly of rig.flies) {
      const p = fly.userData.phase
      const r = fly.userData.radius
      fly.position.set(Math.cos(t * 2.6 + p) * r, 1.35 + Math.sin(t * 3.3 + p * 2) * 0.28, Math.sin(t * 2.2 + p) * r + 0.06)
      fly.rotation.y = t * 5 + p
    }
  } }
}

/* ------------------------------------------------------------------ */
/* Obese 2016 man                                                     */
/* ------------------------------------------------------------------ */

function makeShirtDecal() {
  const texture = makeShirt()
  const geometry = new THREE.PlaneGeometry(1.2, 0.6, 24, 10)
  const pos = geometry.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    pos.setZ(i, -(x * x) * 0.28 - (y * y) * 0.11)
  }
  geometry.computeVertexNormals()
  return new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.9,
    transparent: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    alphaTest: 0.02,
  }))
}

export function createFatMan() {
  const mats = makeHumanMaterials()
  mats.skin = new THREE.MeshStandardMaterial({ color: '#b87a5e', roughness: 0.8 })
  mats.skinDark = new THREE.MeshStandardMaterial({ color: '#956049', roughness: 0.86 })
  mats.skinLight = new THREE.MeshStandardMaterial({ color: '#cd9070', roughness: 0.78 })
  mats.shirt = new THREE.MeshStandardMaterial({ color: '#efe9da', roughness: 0.92 })
  mats.initials = new THREE.MeshStandardMaterial({ color: '#1c1b1a', roughness: 0.8 })

  const root = new THREE.Group()
  const body = group(root)
  const rig = { root, body, mats }

  // Short, stout legs.
  for (const side of [-1, 1]) {
    const hip = group(body, [0.3 * side, 0.66, 0])
    hip.rotation.z = side * 0.13
    mesh(hip, new THREE.CylinderGeometry(0.17, 0.135, 0.35, 10), mats.skin, [0, -0.18, 0])
    const knee = group(hip, [0, -0.37, 0])
    mesh(knee, new THREE.CylinderGeometry(0.13, 0.105, 0.3, 10), mats.skin, [0, -0.14, 0])
    mesh(knee, new THREE.BoxGeometry(0.22, 0.09, 0.34), mats.skinDark, [0, -0.31, 0.07])
    mesh(knee, new THREE.BoxGeometry(0.24, 0.035, 0.36), mats.dirt, [0, -0.35, 0.07])
    rig[side < 0 ? 'hipL' : 'hipR'] = hip
    rig[side < 0 ? 'kneeL' : 'kneeR'] = knee
  }
  mesh(body, new THREE.CylinderGeometry(0.43, 0.38, 0.34, 16), mats.shorts, [0, 0.7, 0])
  mesh(body, new THREE.CylinderGeometry(0.44, 0.44, 0.07, 16), mats.dirt, [0, 0.55, 0])

  const torso = group(body, [0, 0.82, 0])
  rig.torso = torso

  // Massive shirted belly.
  sphere(1, mats.shirt, torso, [0, 0.34, 0.02], [0.7, 0.68, 0.63], 28)
  sphere(0.9, mats.shirt, torso, [0, 0.74, -0.01], [0.61, 0.52, 0.5], 24)
  // Chest and collar.
  sphere(0.5, mats.shirt, torso, [0, 0.85, 0.02], [0.78, 0.48, 0.62], 20)
  mesh(torso, new THREE.TorusGeometry(0.19, 0.03, 6, 20), mats.shirt, [0, 1.02, 0.03], [Math.PI / 2, 0, 0], [1, 1, 0.7])
  // Sleeves.
  for (const side of [-1, 1]) {
    mesh(torso, new THREE.CylinderGeometry(0.23, 0.2, 0.24, 12), mats.shirt, [0.51 * side, 0.78, 0], [0, 0, side * -0.4])
  }
  // Shirt print.
  const decal = makeShirtDecal()
  decal.position.set(0, 0.32, 0.646)
  decal.rotation.x = -0.1
  decal.castShadow = false
  decal.receiveShadow = false
  torso.add(decal)
  rig.shirtDecal = decal

  // Arms.
  for (const side of [-1, 1]) {
    const shoulder = group(torso, [0.55 * side, 0.76, 0])
    shoulder.rotation.z = side * -0.34
    rig[side < 0 ? 'shoulderL' : 'shoulderR'] = shoulder
    sphere(0.21, mats.skin, shoulder, [0, 0, 0], [1, 1, 1], 14)
    mesh(shoulder, new THREE.CylinderGeometry(0.145, 0.12, 0.28, 10), mats.skin, [0, -0.18, 0])
    const elbow = group(shoulder, [0, -0.33, 0])
    rig[side < 0 ? 'elbowL' : 'elbowR'] = elbow
    mesh(elbow, new THREE.CylinderGeometry(0.115, 0.1, 0.27, 10), mats.skin, [0, -0.13, 0])
    const hand = group(elbow, [0, -0.29, 0])
    rig[side < 0 ? 'handL' : 'handR'] = hand
    sphere(0.145, mats.skin, hand, [0, -0.02, 0.015], [1, 1.12, 1], 14)
    for (let f = -1; f <= 1; f++) sphere(0.045, mats.skin, hand, [f * 0.06, 0.08, 0.08], [1, 1, 0.9], 8)
    // Arm hair.
    for (let h = 0; h < 4; h++) {
      mesh(shoulder, new THREE.CylinderGeometry(0.002, 0.003, 0.05, 3), mats.hair || mats.skinDark, [0.02 * (h % 2 ? 1 : -1), -0.1 - h * 0.04, 0.035], [0.2, 0, 0.1 * h])
    }
  }

  // Head.
  mesh(torso, new THREE.CylinderGeometry(0.17, 0.21, 0.13, 12), mats.skin, [0, 1.07, 0.01])
  const head = group(torso, [0, 1.23, 0.03])
  rig.head = head
  sphere(0.265, mats.skin, head, [0, 0.02, 0], [0.92, 1.02, 0.94], 22)
  // Shiny bald dome.
  sphere(0.1, mats.skinLight, head, [0.02, 0.2, 0.09], [1, 0.45, 0.9], 12)
  // Ears.
  for (const side of [-1, 1]) {
    sphere(0.065, mats.skinDark, head, [0.235 * side, 0.02, 0], [0.45, 1.05, 0.75], 10)
    // Heavy angry eyes.
    sphere(0.048, mats.eyeWhite, head, [0.09 * side, 0.08, 0.22], [1, 1.05, 0.45], 10)
    sphere(0.022, mats.iris, head, [0.09 * side, 0.075, 0.247], [1, 1, 0.5], 8)
    sphere(0.011, mats.pupil, head, [0.09 * side, 0.075, 0.258], [1, 1, 0.5], 6)
    mesh(head, new THREE.BoxGeometry(0.13, 0.035, 0.035), mats.hair || mats.skinDark, [0.09 * side, 0.145, 0.225], [0, 0, side * 0.18])
    // Under-eye bags.
    mesh(head, new THREE.CapsuleGeometry(0.006, 0.06, 2, 5), mats.skinDark, [0.09 * side, 0.035, 0.235], [0, 0, Math.PI / 2])
  }
  // Bulbous nose and flushed cheeks.
  sphere(0.07, mats.skinDark, head, [0, -0.01, 0.25], [1.15, 0.9, 0.9], 12)
  for (const side of [-1, 1]) {
    sphere(0.06, new THREE.MeshBasicMaterial({ color: '#c8442c', transparent: true, opacity: 0.18, depthWrite: false }), head, [0.14 * side, -0.055, 0.22], [1, 0.7, 0.4], 10)
  }
  // Mustache and a truly enormous beard.
  for (const side of [-1, 1]) {
    mesh(head, new THREE.CapsuleGeometry(0.018, 0.1, 3, 6), mats.hair || mats.skinDark, [0.05 * side, -0.1, 0.245], [0.2, 0, Math.PI / 2 + side * 0.25], [1, 1, 1])
  }
  const beard = group(head, [0, -0.1, 0.02])
  rig.beard = beard
  const beardMat = new THREE.MeshStandardMaterial({ color: '#3a2922', roughness: 0.96 })
  const beardDark = new THREE.MeshStandardMaterial({ color: '#291b16', roughness: 1 })
  for (let i = 0; i < 44; i++) {
    const angle = (i / 44) * Math.PI * 2
    if (Math.sin(angle) > 0.5) continue
    const radius = 0.21 + Math.random() * 0.035
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius * 0.82 + 0.04
    const len = 0.12 + Math.random() * 0.16
    const cone = mesh(
      beard,
      new THREE.ConeGeometry(0.04 + Math.random() * 0.025, len, 6),
      Math.random() > 0.35 ? beardMat : beardDark,
      [x, -0.06 + Math.random() * 0.03, z],
      [Math.PI + Math.cos(angle) * 0.45, 0, -Math.sin(angle) * 0.45],
    )
    cone.rotation.z += (Math.random() - 0.5) * 0.35
  }
  // Fill the beard mass.
  sphere(0.24, beardMat, beard, [0, -0.1, 0.06], [1.05, 0.9, 0.85], 16)
  sphere(0.12, beardDark, beard, [0, -0.22, 0.12], [1.4, 1, 0.6], 12)
  // Mouth lost somewhere in the beard.
  mesh(head, new THREE.BoxGeometry(0.1, 0.03, 0.02), mats.mouth, [0, -0.16, 0.265], [0.1, 0, 0])
  // Sweat beads.
  for (let i = 0; i < 3; i++) {
    sphere(0.018, new THREE.MeshStandardMaterial({ color: '#b7e1d9', roughness: 0.2, metalness: 0.1 }), head, [-0.12 + i * 0.07, 0.18 - i * 0.02, 0.17], [1, 1.2, 0.8], 8)
  }

  shadowed(root)
  return { group: root, rig, materials: mats, height: 2.36, update(t) {
    const belly = rig.torso.children[0]
    belly.scale.y = 0.68 + Math.sin(t * 2.2) * 0.008
    belly.scale.z = 0.63 + Math.sin(t * 2.2) * 0.006
  } }
}

/* ------------------------------------------------------------------ */
/* Health bars                                                        */
/* ------------------------------------------------------------------ */

export function createHealthBar(name = '') {
  const canvas = document.createElement('canvas')
  canvas.width = 320
  canvas.height = 48
  const ctx = canvas.getContext('2d')
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(1.55, 0.2325, 1)
  sprite.renderOrder = 5
  function draw(ratio) {
    ctx.clearRect(0, 0, 320, 48)
    ctx.fillStyle = 'rgba(4,10,11,0.82)'
    ctx.fillRect(2, 2, 316, 44)
    ctx.strokeStyle = 'rgba(255,232,199,0.5)'
    ctx.lineWidth = 2
    ctx.strokeRect(2, 2, 316, 44)
    const grad = ctx.createLinearGradient(8, 0, 312, 0)
    grad.addColorStop(0, '#a62a22')
    grad.addColorStop(0.55, '#e1493c')
    grad.addColorStop(1, '#ff9b77')
    ctx.fillStyle = grad
    ctx.fillRect(8, 8, 304 * Math.max(0, Math.min(1, ratio)), 32)
    ctx.fillStyle = 'rgba(255,255,255,0.18)'
    ctx.fillRect(8, 8, 304 * Math.max(0, Math.min(1, ratio)), 9)
    ctx.font = '900 15px "Arial Black", "DejaVu Sans", sans-serif'
    ctx.fillStyle = '#ffebcd'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name, 160, 24)
    texture.needsUpdate = true
  }
  draw(1)
  return { sprite, draw }
}
