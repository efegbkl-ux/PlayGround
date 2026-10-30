import * as THREE from 'three'
import {
  brickTexture,
  concreteTexture,
  corrugatedTexture,
  woodTexture,
  rustTexture,
  neonTexture,
  graffitiTexture,
  posterTexture,
  dustTexture,
  glowTexture,
  smokeTexture
} from './textures.js'

function mesh(geo, mat, pos, rot, scale) {
  const m = new THREE.Mesh(geo, mat)
  if (pos) m.position.set(...pos)
  if (rot) m.rotation.set(...rot)
  if (scale) m.scale.set(...scale)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function crate(size = 1) {
  const g = new THREE.Group()
  const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.82 })
  const frame = new THREE.MeshStandardMaterial({ color: 0x5d3a18, roughness: 0.86 })
  const s = size
  const body = mesh(new THREE.BoxGeometry(s, s, s), wood, [0, s / 2, 0])
  g.add(body)
  const t = 0.055 * s
  for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    g.add(mesh(new THREE.BoxGeometry(t, s + 0.02, t), frame, [x * (s / 2 - t / 2), s / 2, z * (s / 2 - t / 2)]))
  }
  g.add(mesh(new THREE.BoxGeometry(s + 0.02, t, t), frame, [0, s * 0.12, s / 2]))
  g.add(mesh(new THREE.BoxGeometry(s + 0.02, t, t), frame, [0, s * 0.88, s / 2]))
  g.add(mesh(new THREE.BoxGeometry(s + 0.02, t, t), frame, [0, s * 0.12, -s / 2]))
  g.add(mesh(new THREE.BoxGeometry(s + 0.02, t, t), frame, [0, s * 0.88, -s / 2]))
  return g
}

function barrel() {
  const g = new THREE.Group()
  const rust = new THREE.MeshStandardMaterial({ map: rustTexture(), color: 0x8f6a3e, roughness: 0.6, metalness: 0.6 })
  const ring = new THREE.MeshStandardMaterial({ color: 0x39312a, roughness: 0.7, metalness: 0.5 })
  g.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.92, 20), rust, [0, 0.46, 0]))
  for (const y of [0.14, 0.45, 0.78]) g.add(mesh(new THREE.TorusGeometry(0.345, 0.022, 6, 24), ring, [0, y, 0], [Math.PI / 2, 0, 0]))
  g.add(mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 20), ring, [0, 0.92, 0]))
  return g
}

function lampCage() {
  const g = new THREE.Group()
  const wire = new THREE.MeshStandardMaterial({ color: 0x24211d, roughness: 0.55, metalness: 0.75 })
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff2ce, emissive: 0xffb04a, emissiveIntensity: 3.2 })
  const shade = mesh(new THREE.ConeGeometry(0.42, 0.34, 24, 1, true), new THREE.MeshStandardMaterial({ color: 0x2b2b2a, roughness: 0.5, metalness: 0.8, side: THREE.DoubleSide }), [0, 0.18, 0])
  g.add(shade)
  const bulb = mesh(new THREE.SphereGeometry(0.11, 16, 12), bulbMat, [0, -0.02, 0])
  bulb.castShadow = false
  g.add(bulb)
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2
    const bar = mesh(new THREE.TorusGeometry(0.2, 0.008, 4, 12, Math.PI), wire, [0, -0.18, 0], [0, a, Math.PI / 2])
    g.add(bar)
  }
  const ring = mesh(new THREE.TorusGeometry(0.2, 0.01, 5, 24), wire, [0, -0.18, 0], [Math.PI / 2, 0, 0])
  g.add(ring)
  return g
}

function volumetricCone(color = 0xffb060, height = 5, radius = 2.1, opacity = 0.08) {
  const geo = new THREE.CylinderGeometry(0.18, radius, height, 32, 1, true)
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: opacity }
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        float vertical = smoothstep(0.0, 0.18, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
        float edge = pow(abs(vUv.x - 0.5) * 2.0, 1.35);
        float a = (1.0 - edge) * vertical * uOpacity;
        gl_FragColor = vec4(uColor, a);
      }
    `
  })
  const m = new THREE.Mesh(geo, mat)
  m.rotation.x = Math.PI
  return m
}

export function createEnvironment(scene) {
  const group = new THREE.Group()
  scene.add(group)

  scene.background = new THREE.Color(0x08090b)
  scene.fog = new THREE.FogExp2(0x0b0b0d, 0.032)

  /* ------------------------------- ground ------------------------------- */
  const floorMat = new THREE.MeshStandardMaterial({
    map: concreteTexture(),
    roughness: 0.82,
    metalness: 0.05,
    color: 0x9c9488
  })
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), floorMat)
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  group.add(floor)

  // wet patches
  const wetMat = new THREE.MeshStandardMaterial({ color: 0x14181c, roughness: 0.12, metalness: 0.75, transparent: true, opacity: 0.85 })
  for (const [x, z, r] of [[-2.4, 2.8, 1.5], [3.6, -1.2, 1.1], [0.5, 4.4, 0.9], [-4.8, -2.4, 1.7]]) {
    const wet = new THREE.Mesh(new THREE.CircleGeometry(r, 28), wetMat)
    wet.rotation.x = -Math.PI / 2
    wet.position.set(x, 0.006, z)
    wet.scale.y = 0.6
    group.add(wet)
  }

  /* -------------------------------- walls ------------------------------- */
  const brick = new THREE.MeshStandardMaterial({ map: brickTexture(), roughness: 0.9, color: 0x8d8478 })
  const corrugated = new THREE.MeshStandardMaterial({ map: corrugatedTexture(), roughness: 0.62, metalness: 0.6, color: 0x7b8288 })

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(24, 9, 0.7), brick)
  backWall.position.set(0, 4.5, -8.4)
  backWall.receiveShadow = true
  backWall.castShadow = true
  group.add(backWall)

  const upper = new THREE.Mesh(new THREE.BoxGeometry(24, 3.2, 0.5), corrugated)
  upper.position.set(0, 7.6, -8.32)
  upper.receiveShadow = true
  group.add(upper)

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.7, 9, 12), brick)
  leftWall.position.set(-11.5, 4.5, -2.5)
  leftWall.receiveShadow = true
  group.add(leftWall)

  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.7, 9, 12), brick)
  rightWall.position.set(11.5, 4.5, -2.5)
  rightWall.receiveShadow = true
  group.add(rightWall)

  // roller door
  const doorMat = new THREE.MeshStandardMaterial({ map: corrugatedTexture(), color: 0x5d6266, roughness: 0.5, metalness: 0.72 })
  const door = new THREE.Mesh(new THREE.BoxGeometry(5.4, 5.2, 0.25), doorMat)
  door.position.set(-4.4, 2.6, -8.0)
  door.receiveShadow = true
  group.add(door)
  const doorFrame = new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 0.7, metalness: 0.4 })
  group.add(mesh(new THREE.BoxGeometry(5.9, 0.28, 0.5), doorFrame, [-4.4, 5.25, -7.95]))
  group.add(mesh(new THREE.BoxGeometry(0.28, 5.4, 0.5), doorFrame, [-7.25, 2.7, -7.95]))
  group.add(mesh(new THREE.BoxGeometry(0.28, 5.4, 0.5), doorFrame, [-1.55, 2.7, -7.95]))
  // hazard stripes
  const stripe = new THREE.Group()
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xd2a12c, roughness: 0.72, emissive: 0x2b1d02, emissiveIntensity: 0.7 })
  const stripeDark = new THREE.MeshStandardMaterial({ color: 0x1b1917, roughness: 0.8 })
  for (let i = 0; i < 8; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.02), i % 2 ? stripeDark : stripeMat)
    s.position.set(-7.2 + i * 0.44, 0.22, 0.02)
    s.rotation.z = -0.4
    stripe.add(s)
  }
  stripe.position.set(0, 0, -7.99)
  group.add(stripe)

  // graffiti + poster
  const graf = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 2.1),
    new THREE.MeshStandardMaterial({ map: graffitiTexture(), transparent: true, roughness: 0.9, depthWrite: false })
  )
  graf.position.set(-11.1, 3.8, -2.4)
  graf.rotation.y = Math.PI / 2
  group.add(graf)

  const poster = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 1.62),
    new THREE.MeshStandardMaterial({ map: posterTexture(), roughness: 0.85 })
  )
  poster.position.set(6.1, 2.7, -8.03)
  poster.rotation.z = 0.02
  group.add(poster)

  /* -------------------------------- neon -------------------------------- */
  const sign = new THREE.Group()
  sign.position.set(-0.7, 5.15, -7.9)
  sign.scale.setScalar(0.82)
  const neonMat = new THREE.MeshStandardMaterial({
    map: neonTexture(),
    transparent: true,
    emissive: 0xffffff,
    emissiveMap: neonTexture(),
    emissiveIntensity: 1.7,
    roughness: 0.5,
    depthWrite: false
  })
  const neon = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.72), neonMat)
  sign.add(neon)
  const signBack = new THREE.Mesh(new THREE.BoxGeometry(4.9, 1.9, 0.14), new THREE.MeshStandardMaterial({ color: 0x12100e, roughness: 0.8 }))
  signBack.position.z = -0.08
  sign.add(signBack)
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff7a22, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.26, depthWrite: false }))
  glow.scale.set(7.4, 3.4, 1)
  glow.position.z = 0.1
  sign.add(glow)
  group.add(sign)
  const neonLight = new THREE.PointLight(0xff5a1f, 11, 13, 2)
  neonLight.position.set(-0.7, 5.0, -6.6)
  group.add(neonLight)

  function setViewport(mode) {
    if (mode === 'portrait') {
      sign.position.set(-0.3, 4.85, -7.85)
      sign.scale.setScalar(0.62)
      neonLight.position.set(-0.3, 4.7, -6.6)
    } else if (mode === 'short') {
      sign.position.set(-2.2, 4.3, -7.85)
      sign.scale.setScalar(0.58)
      neonLight.position.set(-2.2, 4.2, -6.6)
    } else {
      sign.position.set(-0.7, 4.75, -7.9)
      sign.scale.setScalar(0.82)
      neonLight.position.set(-0.7, 4.6, -6.6)
    }
  }

  /* ----------------------------- industrial ----------------------------- */
  const metal = new THREE.MeshStandardMaterial({ color: 0x3a3b3a, roughness: 0.48, metalness: 0.85 })
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x232322, roughness: 0.6, metalness: 0.7 })

  // roof trusses
  for (const z of [-3.4, 1.6]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(22, 0.22, 0.22), metal)
    beam.position.set(0, 8.4, z)
    beam.castShadow = true
    group.add(beam)
    const beam2 = new THREE.Mesh(new THREE.BoxGeometry(22, 0.14, 0.14), metal)
    beam2.position.set(0, 7.85, z)
    group.add(beam2)
    for (let x = -10; x <= 10; x += 2.6) {
      const v = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.6, 0.09), metal)
      v.position.set(x, 8.12, z)
      group.add(v)
    }
  }
  // hanging cables
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x141312, roughness: 0.8 })
  function cable(points, radius = 0.018) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)))
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, radius, 5, false), cableMat)
    group.add(tube)
  }
  cable([[1.4, 8.4, 0.4], [1.4, 7.4, 0.4], [1.4, 6.4, 0.4]])
  cable([[-3.6, 8.4, -1.2], [-3.5, 7.0, -1.4], [-3.4, 5.6, -1.6]])
  cable([[6.2, 8.4, -2.8], [5.9, 6.9, -2.4], [5.6, 5.3, -2.1]])
  cable([[-7.5, 8.4, -3.2], [-6.2, 7.2, -2.5], [-4.9, 6.5, -2.0]], 0.012)

  // practical lamps
  const lampA = lampCage()
  lampA.position.set(1.4, 6.1, 0.4)
  group.add(lampA)
  const coneA = volumetricCone(0xffb86a, 6.1, 1.9, 0.024)
  coneA.position.set(1.4, 3.05, 0.4)
  group.add(coneA)

  const lampB = lampCage()
  lampB.scale.setScalar(0.85)
  lampB.position.set(-3.4, 5.4, -1.6)
  group.add(lampB)
  const coneB = volumetricCone(0xffa050, 5.4, 1.5, 0.018)
  coneB.position.set(-3.4, 2.7, -1.6)
  group.add(coneB)

  const lampC = lampCage()
  lampC.scale.setScalar(0.7)
  lampC.position.set(5.6, 5.1, -2.1)
  group.add(lampC)
  const coneC = volumetricCone(0xff9a54, 5.1, 1.2, 0.016)
  coneC.position.set(5.6, 2.55, -2.1)
  group.add(coneC)

  const bulbA = new THREE.PointLight(0xffb060, 9, 11, 2)
  bulbA.position.set(1.4, 5.9, 0.4)
  group.add(bulbA)

  /* -------------------------------- props ------------------------------- */
  const c1 = crate(1.1)
  c1.position.set(-5.4, 0, -3.6)
  c1.rotation.y = 0.22
  group.add(c1)
  const c2 = crate(0.9)
  c2.position.set(-5.3, 0, -2.5)
  c2.rotation.y = -0.18
  group.add(c2)
  const c3 = crate(0.8)
  c3.position.set(-5.45, 1.1, -3.5)
  c3.rotation.y = 0.4
  group.add(c3)
  const c4 = crate(0.75)
  c4.position.set(5.2, 0, 0.2)
  c4.rotation.y = -0.3
  group.add(c4)
  const c5 = crate(0.65)
  c5.position.set(5.0, 0.78, 0.1)
  c5.rotation.y = 0.15
  group.add(c5)

  for (const [x, z, rot] of [[4.4, -2.6, 0.3], [3.8, -3.1, -0.5], [-6.9, -1.2, 0.1]]) {
    const b = barrel()
    b.position.set(x, 0, z)
    b.rotation.y = rot
    group.add(b)
  }

  // pallet
  const pallet = new THREE.Group()
  const palletMat = new THREE.MeshStandardMaterial({ map: woodTexture(), color: 0x9a7b58, roughness: 0.9 })
  for (let i = 0; i < 5; i++) {
    pallet.add(mesh(new THREE.BoxGeometry(1.6, 0.045, 0.18), palletMat, [0, 0.1, -0.6 + i * 0.3]))
  }
  for (const x of [-0.6, 0, 0.6]) {
    pallet.add(mesh(new THREE.BoxGeometry(0.16, 0.1, 1.5), palletMat, [x, 0.045, 0]))
  }
  pallet.position.set(6.4, 0, 2.9)
  pallet.rotation.y = 0.5
  group.add(pallet)

  // tyres
  const tyreMat = new THREE.MeshStandardMaterial({ color: 0x191817, roughness: 0.85 })
  for (const [x, z, y] of [[-2.9, -4.2, 0.16], [-2.8, -4.5, 0.48]]) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.16, 10, 22), tyreMat)
    t.rotation.x = Math.PI / 2
    t.position.set(x, y, z)
    t.castShadow = true
    group.add(t)
  }

  // chain-link fence panel
  const fenceGroup = new THREE.Group()
  const fenceMat = new THREE.MeshStandardMaterial({ color: 0x5c5b56, roughness: 0.55, metalness: 0.8, side: THREE.DoubleSide })
  const linkTex = (() => {
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const x = c.getContext('2d')
    x.clearRect(0, 0, 128, 128)
    x.strokeStyle = 'rgba(180,180,175,0.9)'
    x.lineWidth = 3
    for (let i = -128; i < 128; i += 22) {
      x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 128, 128); x.stroke()
      x.beginPath(); x.moveTo(i + 128, 0); x.lineTo(i, 128); x.stroke()
    }
    const t = new THREE.CanvasTexture(c)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(6, 3)
    return t
  })()
  const fence = new THREE.Mesh(
    new THREE.PlaneGeometry(4.4, 2.6),
    new THREE.MeshStandardMaterial({ map: linkTex, transparent: true, alphaTest: 0.2, side: THREE.DoubleSide, metalness: 0.7, roughness: 0.5 })
  )
  fence.position.set(-8.4, 1.4, 1.4)
  fence.rotation.y = Math.PI / 2
  group.add(fence)
  for (const z of [-0.8, 3.6]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.8, 8), fenceMat)
    post.position.set(-8.4, 1.4, z)
    group.add(post)
  }
  group.add(fenceGroup)

  // scattered debris / broken bottles
  const debrisMat = new THREE.MeshStandardMaterial({ color: 0x2d2a24, roughness: 0.6, metalness: 0.2 })
  for (let i = 0; i < 22; i++) {
    const a = Math.random() * Math.PI * 2
    const r = 2.6 + Math.random() * 6
    const d = new THREE.Mesh(new THREE.BoxGeometry(0.05 + Math.random() * 0.12, 0.03, 0.04 + Math.random() * 0.1), debrisMat)
    d.position.set(Math.cos(a) * r, 0.02, Math.sin(a) * r * 0.7)
    d.rotation.y = Math.random() * Math.PI
    group.add(d)
  }

  // chalk / paint ring around the fight
  const ringTex = (() => {
    const c = document.createElement('canvas')
    c.width = c.height = 512
    const x = c.getContext('2d')
    x.clearRect(0, 0, 512, 512)
    x.strokeStyle = 'rgba(226,196,138,0.55)'
    x.lineWidth = 12
    x.beginPath(); x.arc(256, 256, 210, 0, Math.PI * 2); x.stroke()
    x.strokeStyle = 'rgba(226,196,138,0.16)'
    x.lineWidth = 34
    x.beginPath(); x.arc(256, 256, 210, 0, Math.PI * 2); x.stroke()
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })()
  const ring = new THREE.Mesh(new THREE.PlaneGeometry(8.4, 8.4), new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, depthWrite: false }))
  ring.rotation.x = -Math.PI / 2
  ring.position.set(0, 0.008, 0.7)
  group.add(ring)

  // spare weapons: a bat & pipe & hammer on the floor, seen in the ring
  const spare = new THREE.Group()
  const batMat = new THREE.MeshStandardMaterial({ color: 0x8a5a2c, roughness: 0.7 })
  const spareBat = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.075, 0.9, 12), batMat)
  spareBat.rotation.z = Math.PI / 2
  spareBat.rotation.y = 0.4
  spareBat.position.set(-3.4, 0.08, 2.6)
  spareBat.castShadow = true
  spare.add(spareBat)
  const sparePipe = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.0, 12), new THREE.MeshStandardMaterial({ map: rustTexture(), metalness: 0.8, roughness: 0.5 }))
  sparePipe.rotation.z = Math.PI / 2
  sparePipe.rotation.y = -0.5
  sparePipe.position.set(3.1, 0.06, 2.9)
  sparePipe.castShadow = true
  spare.add(sparePipe)
  const spareHammer = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.14), new THREE.MeshStandardMaterial({ color: 0x4b4c4d, metalness: 0.9, roughness: 0.35 }))
  spareHammer.position.set(-1.9, 0.08, 3.7)
  spareHammer.rotation.y = 0.9
  spare.add(spareHammer)
  group.add(spare)

  // wall sconces
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe9c0, emissive: 0xffb050, emissiveIntensity: 2.2 })
  for (const [x, y, int] of [[-8.8, 4.7, 5], [8.4, 4.2, 4]]) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), bulbMat)
    b.position.set(x, y, -8.05)
    group.add(b)
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.04, 12), darkMetal)
    back.rotation.x = Math.PI / 2
    back.position.set(x, y, -8.10)
    group.add(back)
    const pl = new THREE.PointLight(0xffa04a, int, 9, 2)
    pl.position.set(x, y, -7.5)
    group.add(pl)
    const cage = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.012, 4, 16), darkMetal)
    cage.position.set(x, y, -8.0)
    group.add(cage)
  }

  // folding chair knocked over
  const chairMat = new THREE.MeshStandardMaterial({ color: 0x40464a, metalness: 0.7, roughness: 0.45 })
  const chair = new THREE.Group()
  for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.86, 6), chairMat)
    leg.position.set((i % 2 ? 1 : -1) * 0.22, 0.43, (i < 2 ? 1 : -1) * 0.22)
    chair.add(leg)
  }
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.035, 0.52), chairMat)
  seat.position.y = 0.5
  chair.add(seat)
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.5, 0.035), chairMat)
  back.position.set(0, 0.77, -0.24)
  chair.add(back)
  chair.position.set(3.9, 0, 2.5)
  chair.rotation.set(0.4, 0.7, 1.3)
  group.add(chair)

  // wooden stool
  const stoolMat = new THREE.MeshStandardMaterial({ map: woodTexture(), color: 0xb08a5c, roughness: 0.85 })
  const stool = new THREE.Group()
  const sSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 16), stoolMat)
  sSeat.position.y = 0.62
  stool.add(sSeat)
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + 0.4
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.62, 6), stoolMat)
    leg.position.set(Math.cos(a) * 0.2, 0.31, Math.sin(a) * 0.2)
    leg.rotation.z = Math.cos(a) * 0.08
    leg.rotation.x = -Math.sin(a) * 0.08
    stool.add(leg)
  }
  stool.position.set(-4.3, 0, 2.3)
  group.add(stool)

  // paper scraps frozen mid-air
  // (none: they read as stray polygons in front of the hero)

  /* ------------------------------- lights ------------------------------- */
  scene.add(new THREE.HemisphereLight(0x51637a, 0x1a120a, 0.85))
  scene.add(new THREE.AmbientLight(0x3a3229, 0.35))

  const key = new THREE.SpotLight(0xffb877, 230, 22, 0.62, 0.55, 1.6)
  key.position.set(-3.4, 7.2, 4.6)
  key.target.position.set(0, 1.4, 0.2)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.near = 2
  key.shadow.camera.far = 18
  key.shadow.bias = -0.0015
  key.shadow.radius = 3
  scene.add(key)
  scene.add(key.target)

  const fill = new THREE.SpotLight(0x5f8dff, 85, 24, 0.8, 0.7, 1.8)
  fill.position.set(7.5, 5.4, 5.4)
  fill.target.position.set(0.4, 1.5, 0)
  scene.add(fill)
  scene.add(fill.target)

  const rim = new THREE.SpotLight(0xff3c78, 200, 22, 0.7, 0.6, 1.7)
  rim.position.set(3.4, 5.8, -6.4)
  rim.target.position.set(0, 1.7, 0.4)
  scene.add(rim)
  scene.add(rim.target)

  const rim2 = new THREE.SpotLight(0x58e0ff, 90, 20, 0.7, 0.7, 1.7)
  rim2.position.set(-6.4, 4.4, -5.6)
  rim2.target.position.set(-0.5, 1.4, 0.2)
  scene.add(rim2)
  scene.add(rim2.target)

  // atmosphere particles
  const dustCount = 520
  const dustPos = new Float32Array(dustCount * 3)
  const dustSeed = new Float32Array(dustCount)
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 17
    dustPos[i * 3 + 1] = 0.2 + Math.random() * 6.5
    dustPos[i * 3 + 2] = -6 + Math.random() * 12
    dustSeed[i] = Math.random() * Math.PI * 2
  }
  const dustGeo = new THREE.BufferGeometry()
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
  const dustMat = new THREE.PointsMaterial({
    size: 0.06,
    map: dustTexture(),
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: 0xffd9a0,
    sizeAttenuation: true
  })
  const dust = new THREE.Points(dustGeo, dustMat)
  group.add(dust)

  // ground smoke sprites
  const smoke = []
  for (let i = 0; i < 7; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTexture(), transparent: true, opacity: 0.18, depthWrite: false, color: 0x8fa0aa }))
    s.position.set((Math.random() - 0.5) * 10, 0.5 + Math.random() * 1.8, -3 + Math.random() * 6)
    s.scale.set(3.5 + Math.random() * 2, 2.4 + Math.random() * 1.5, 1)
    group.add(s)
    smoke.push({ sprite: s, seed: Math.random() * 10 })
  }

  return {
    group,
    setViewport,
    lights: { key, fill, rim, rim2, neonLight, bulbA },
    neon: { sign, glow, material: neonMat },
    update(dt, t) {
      const arr = dustGeo.attributes.position.array
      for (let i = 0; i < dustCount; i++) {
        arr[i * 3 + 1] += dt * (0.05 + (i % 7) * 0.006)
        arr[i * 3] += Math.sin(t * 0.25 + dustSeed[i]) * dt * 0.05
        if (arr[i * 3 + 1] > 6.8) arr[i * 3 + 1] = 0.2
      }
      dustGeo.attributes.position.needsUpdate = true
      for (const s of smoke) {
        s.sprite.position.y = 0.6 + Math.sin(t * 0.2 + s.seed) * 0.3
        s.sprite.material.rotation = Math.sin(t * 0.05 + s.seed) * 0.2
      }
      // neon flicker
      const flick = 0.86 + Math.sin(t * 13.7) * 0.06 + Math.sin(t * 3.1) * 0.05
      neonLight.intensity = 7 * flick
      neonMat.emissiveIntensity = 1.7 * flick
    }
  }
}
