import * as THREE from 'three'
import { makeConcrete, makeNeon, makePoster, makeWall, makeWood } from './textures.js'

const TAU = Math.PI * 2

function mesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const item = new THREE.Mesh(geometry, material)
  item.position.set(...position)
  item.rotation.set(...rotation)
  item.scale.set(...scale)
  parent.add(item)
  return item
}

function chainLinkTexture() {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 128
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 128, 128)
  ctx.strokeStyle = 'rgba(185, 202, 196, 0.72)'
  ctx.lineWidth = 2
  for (let i = -128; i < 256; i += 18) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i + 128, 128)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(i + 128, 0)
    ctx.lineTo(i, 128)
    ctx.stroke()
  }
  const texture = new THREE.CanvasTexture(c)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(8, 2)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function flashTexture() {
  const c = document.createElement('canvas')
  c.width = 64
  c.height = 64
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, 'rgba(255,255,240,1)')
  g.addColorStop(0.18, 'rgba(255,238,200,0.8)')
  g.addColorStop(0.55, 'rgba(255,200,120,0.18)')
  g.addColorStop(1, 'rgba(255,190,100,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(c)
}

function graffitiTexture(text, color) {
  const c = document.createElement('canvas')
  c.width = 1024
  c.height = 512
  const ctx = c.getContext('2d')
  ctx.clearRect(0, 0, 1024, 512)
  ctx.save()
  ctx.translate(512, 256)
  ctx.rotate(-0.06)
  ctx.font = '900 190px "Arial Black", Impact, "DejaVu Sans", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineJoin = 'round'
  ctx.lineWidth = 18
  ctx.strokeStyle = 'rgba(8,12,12,0.55)'
  ctx.strokeText(text, 0, 0)
  ctx.fillStyle = color
  ctx.fillText(text, 0, 0)
  ctx.globalAlpha = 0.32
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
  ctx.lineWidth = 4
  ctx.strokeText(text, 0, 0)
  ctx.restore()
  const texture = new THREE.CanvasTexture(c)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

export function createArena(scene) {
  const floorTexture = makeConcrete()
  const wallTexture = makeWall()
  const woodTexture = makeWood()
  const updateTasks = []

  scene.background = new THREE.Color('#071013')
  scene.fog = new THREE.FogExp2('#071013', 0.031)

  const hemi = new THREE.HemisphereLight('#5a7c86', '#1a0f08', 1.1)
  scene.add(hemi)
  scene.add(new THREE.AmbientLight('#223338', 0.7))

  const key = new THREE.DirectionalLight('#ffc48c', 2.8)
  key.position.set(5, 10, 7)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.left = -9
  key.shadow.camera.right = 9
  key.shadow.camera.top = 9
  key.shadow.camera.bottom = -7
  key.shadow.camera.near = 1
  key.shadow.camera.far = 30
  key.shadow.bias = -0.0007
  key.shadow.normalBias = 0.025
  scene.add(key)

  const rim = new THREE.DirectionalLight('#55d8d1', 1.65)
  rim.position.set(-8, 6, -8)
  scene.add(rim)
  const warmRim = new THREE.DirectionalLight('#ff7c3d', 1.2)
  warmRim.position.set(8, 4, -5)
  scene.add(warmRim)

  // Floor.
  const floor = mesh(
    scene,
    new THREE.PlaneGeometry(64, 64),
    new THREE.MeshStandardMaterial({ map: floorTexture, color: '#b9c2bd', roughness: 0.78, metalness: 0.12 }),
    [0, 0, 0],
    [-Math.PI / 2, 0, 0],
  )
  floor.receiveShadow = true

  // Chalk fight circle, partially worn.
  const ring = mesh(
    scene,
    new THREE.RingGeometry(4.85, 5.02, 96),
    new THREE.MeshBasicMaterial({ color: '#ded5ba', transparent: true, opacity: 0.2, side: THREE.DoubleSide }),
    [0.2, 0.012, -0.3],
    [-Math.PI / 2, 0, 0],
  )
  ring.renderOrder = 1
  mesh(
    scene,
    new THREE.RingGeometry(0.55, 0.62, 48),
    new THREE.MeshBasicMaterial({ color: '#d7c8a4', transparent: true, opacity: 0.1, side: THREE.DoubleSide }),
    [0.2, 0.013, -0.3],
    [-Math.PI / 2, 0, 0],
  )

  // Grimy puddles.
  const puddleMat = new THREE.MeshPhysicalMaterial({
    color: '#10181a',
    roughness: 0.09,
    metalness: 0.62,
    clearcoat: 0.8,
    transparent: true,
    opacity: 0.68,
    side: THREE.DoubleSide,
  })
  for (const [x, z, s, r] of [
    [-3.1, 3.2, 1.3, 0.3],
    [2.3, 4.3, 0.9, -0.4],
    [5.1, 0.8, 1.4, 0.8],
    [-5.8, -1.7, 1.1, 0.2],
    [0.7, -3.5, 0.75, 0.6],
  ]) {
    const puddle = mesh(scene, new THREE.CircleGeometry(1, 28), puddleMat, [x, 0.015, z], [-Math.PI / 2, 0, r], [s, s * 0.55, 1])
    puddle.renderOrder = 2
  }

  // Back wall and side walls.
  const backWall = mesh(
    scene,
    new THREE.PlaneGeometry(44, 13),
    new THREE.MeshStandardMaterial({ map: wallTexture, color: '#929b98', roughness: 0.94 }),
    [0, 6.5, -9.5],
  )
  backWall.receiveShadow = true
  const leftWall = mesh(
    scene,
    new THREE.PlaneGeometry(30, 12),
    new THREE.MeshStandardMaterial({ map: wallTexture, color: '#87908d', roughness: 0.95 }),
    [-12.5, 6, 2],
    [0, Math.PI / 2, 0],
  )
  leftWall.receiveShadow = true
  const rightWall = mesh(
    scene,
    new THREE.PlaneGeometry(30, 12),
    new THREE.MeshStandardMaterial({ map: wallTexture, color: '#7d8784', roughness: 0.95 }),
    [12.5, 6, 2],
    [0, -Math.PI / 2, 0],
  )
  rightWall.receiveShadow = true

  // Concrete columns.
  for (const x of [-10.8, 10.8]) {
    const column = mesh(
      scene,
      new THREE.BoxGeometry(1.05, 12, 1.05),
      new THREE.MeshStandardMaterial({ map: wallTexture, color: '#757e7b', roughness: 0.96 }),
      [x, 6, -7.7],
    )
    column.castShadow = true
    column.receiveShadow = true
    mesh(scene, new THREE.BoxGeometry(1.35, 0.3, 1.35), new THREE.MeshStandardMaterial({ color: '#3a4140', roughness: 0.9 }), [x, 0.15, -7.7])
  }

  // Ceiling girders and ducts.
  const beamMat = new THREE.MeshStandardMaterial({ color: '#303a3b', roughness: 0.74, metalness: 0.55 })
  for (let i = 0; i < 5; i++) {
    mesh(scene, new THREE.BoxGeometry(26, 0.34, 0.4), beamMat, [0, 8.7 - i * 0.08, -7.2 + i * 3.3], [0, 0, 0])
  }
  for (const x of [-8.1, -2.9, 2.5, 7.9]) {
    mesh(scene, new THREE.BoxGeometry(0.26, 0.26, 20), beamMat, [x, 8.35, 1.2])
  }
  mesh(scene, new THREE.CylinderGeometry(0.32, 0.32, 19, 12), new THREE.MeshStandardMaterial({ color: '#4a5352', roughness: 0.72, metalness: 0.5 }), [-9.3, 7.9, 0.5], [Math.PI / 2, 0, 0])

  // Hanging chain, just for texture.
  const chainMat = new THREE.MeshStandardMaterial({ color: '#6f7774', metalness: 0.85, roughness: 0.45 })
  const chainCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(6.8, 8.5, -4.8),
    new THREE.Vector3(6.8, 5.6, -4.6),
    new THREE.Vector3(6.5, 3.8, -4.1),
  ])
  mesh(scene, new THREE.TubeGeometry(chainCurve, 16, 0.035, 6, false), chainMat)
  mesh(scene, new THREE.TorusGeometry(0.16, 0.035, 5, 12), chainMat, [6.5, 3.6, -4.1], [0.4, 0.2, 0])

  // Industrial lamps.
  const bulbMat = new THREE.MeshBasicMaterial({ color: '#ffd9a2' })
  const shadeMat = new THREE.MeshStandardMaterial({ color: '#28302f', roughness: 0.62, metalness: 0.7, side: THREE.DoubleSide })
  const lampPositions = [
    [-4.7, 6.7, 2.2, 1.0],
    [4.4, 6.9, -2.2, 0.85],
    [0.1, 7.5, -5.6, 0.7],
  ]
  const coneMat = new THREE.MeshBasicMaterial({
    color: '#ffc077',
    transparent: true,
    opacity: 0.055,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  for (const [x, y, z, seed] of lampPositions) {
    const lamp = new THREE.Group()
    lamp.position.set(x, y, z)
    scene.add(lamp)
    mesh(lamp, new THREE.CylinderGeometry(0.035, 0.035, 1.2, 6), chainMat, [0, 0.7, 0])
    mesh(lamp, new THREE.ConeGeometry(0.48, 0.44, 18, 1, true), shadeMat, [0, 0.15, 0], [0, 0, 0])
    mesh(lamp, new THREE.SphereGeometry(0.12, 12, 8), bulbMat, [0, 0.02, 0])
    const light = new THREE.PointLight('#ffb267', 22, 13, 1.8)
    light.position.set(0, -0.15, 0)
    lamp.add(light)
    // Fake volumetric cone.
    mesh(lamp, new THREE.ConeGeometry(2.15, 5.5, 28, 1, true), coneMat.clone(), [0, -2.75, 0], [Math.PI, 0, 0])
    updateTasks.push((t) => {
      light.intensity = 18 + Math.sin(t * 3.1 + seed * 7) * 1.2 + Math.sin(t * 13.7 + seed) * 0.5
    })
  }

  // Neon signs.
  const neonMat = new THREE.MeshBasicMaterial({ map: makeNeon('KAYISI', '#ff8e2f'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95 })
  const neon = mesh(scene, new THREE.PlaneGeometry(6.4, 2.0), neonMat, [0.3, 4.95, -9.43])
  neon.renderOrder = 3
  const neonLight = new THREE.PointLight('#ff791c', 34, 17, 2)
  neonLight.position.set(0.3, 4.6, -8.2)
  scene.add(neonLight)
  updateTasks.push((t) => {
    const flicker = Math.sin(t * 8.3) > 0.96 ? 0.25 : 1
    neonMat.opacity = (0.78 + Math.sin(t * 1.3) * 0.05) * flicker
    neonLight.intensity = 30 * flicker
  })

  const turkish = new THREE.MeshBasicMaterial({ map: makeNeon('DÖVÜŞ', '#55ded4'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.7 })
  mesh(scene, new THREE.PlaneGeometry(3.6, 1.12), turkish, [-11.9, 5.9, -1.6], [0, Math.PI / 2, 0])
  const cyanLight = new THREE.PointLight('#3bd6cc', 18, 12, 2)
  cyanLight.position.set(-10.8, 5.2, -1.6)
  scene.add(cyanLight)

  // Posters and graffiti.
  const posterMat = new THREE.MeshStandardMaterial({ map: makePoster('KAYISI', 'RIPE FURY', '#e6dcc4'), roughness: 0.95 })
  mesh(scene, new THREE.PlaneGeometry(1.8, 2.7), posterMat, [-7.3, 4.4, -9.42])
  const poster2 = new THREE.MeshStandardMaterial({ map: makePoster('FIGHT', 'NO REFUNDS', '#d3cab2'), roughness: 0.95 })
  mesh(scene, new THREE.PlaneGeometry(1.6, 2.4), poster2, [8.9, 4.6, -9.42], [0, 0, 0.03])
  const graffiti = new THREE.MeshBasicMaterial({ map: graffitiTexture('ACIZ', '#d3a04a'), transparent: true, opacity: 0.42, depthWrite: false })
  mesh(scene, new THREE.PlaneGeometry(4.6, 2.3), graffiti, [5.4, 2.7, -9.4])
  const graffiti2 = new THREE.MeshBasicMaterial({ map: graffitiTexture('2016', '#be4b3c'), transparent: true, opacity: 0.3, depthWrite: false })
  mesh(scene, new THREE.PlaneGeometry(3.8, 1.9), graffiti2, [-4.6, 2.3, -9.4])

  // Wall pipes and vents.
  const pipeMat = new THREE.MeshStandardMaterial({ color: '#525d5b', roughness: 0.66, metalness: 0.62 })
  mesh(scene, new THREE.CylinderGeometry(0.14, 0.14, 12, 10), pipeMat, [-9.9, 5.2, -9.2], [0, 0, 0])
  mesh(scene, new THREE.CylinderGeometry(0.19, 0.19, 5, 10), pipeMat, [9.6, 3.6, -9.1], [0, 0, Math.PI / 2])
  mesh(scene, new THREE.BoxGeometry(1.5, 1.1, 0.2), new THREE.MeshStandardMaterial({ color: '#3b4544', roughness: 0.7, metalness: 0.5 }), [5.6, 7.2, -9.3])
  for (let i = 0; i < 6; i++) {
    mesh(scene, new THREE.BoxGeometry(1.3, 0.045, 0.04), new THREE.MeshStandardMaterial({ color: '#151c1c' }), [5.6, 6.8 + i * 0.14, -9.18])
  }

  // Chain-link fence panels, leaving the neon sign visible.
  const fenceTexture = chainLinkTexture()
  const fenceMat = new THREE.MeshBasicMaterial({
    map: fenceTexture,
    transparent: true,
    opacity: 0.4,
    alphaTest: 0.14,
    side: THREE.DoubleSide,
    color: '#9ca8a3',
    depthWrite: false,
  })
  const postMat = new THREE.MeshStandardMaterial({ color: '#38413f', metalness: 0.8, roughness: 0.55 })
  for (const [x, width] of [[-7.6, 7.2], [7.6, 7.2]]) {
    const fence = mesh(scene, new THREE.PlaneGeometry(width, 3.1), fenceMat, [x, 1.55, -7.3], [0, 0, 0])
    fence.renderOrder = 2
    for (const dx of [-width / 2, width / 2]) {
      mesh(scene, new THREE.CylinderGeometry(0.055, 0.055, 3.3, 8), postMat, [x + dx, 1.65, -7.3])
    }
    mesh(scene, new THREE.CylinderGeometry(0.04, 0.04, width, 8), postMat, [x, 3.13, -7.3], [0, 0, Math.PI / 2])
  }

  // Crowd silhouettes behind the fence.
  const crowdMat = new THREE.MeshStandardMaterial({ color: '#151d1e', roughness: 0.96 })
  const crowd = []
  for (let i = 0; i < 20; i++) {
    const person = new THREE.Group()
    const side = i % 2 === 0 ? -1 : 1
    person.position.set(side * (3.6 + Math.random() * 5.3), 0, -8.2 + Math.random() * 0.55)
    person.rotation.y = Math.PI + (Math.random() - 0.5) * 0.5
    const scale = 0.78 + Math.random() * 0.45
    person.scale.setScalar(scale)
    scene.add(person)
    mesh(person, new THREE.CapsuleGeometry(0.24, 0.72, 5, 10), crowdMat, [0, 1.0, 0])
    sphere(person, 0.16, crowdMat, [0, 1.6, 0])
    // Occasionally a tiny lit phone screen.
    if (Math.random() > 0.55) {
      mesh(person, new THREE.PlaneGeometry(0.09, 0.16), new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? '#a7e5de' : '#ffe1a6' }), [0.18, 1.18, 0.2], [0, 0.3, 0])
    }
    person.userData.phase = Math.random() * TAU
    crowd.push(person)
  }

  // Camera flashes in the crowd.
  const flashTex = flashTexture()
  const flashes = []
  for (let i = 0; i < 8; i++) {
    const mat = new THREE.SpriteMaterial({ map: flashTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 })
    const sprite = new THREE.Sprite(mat)
    sprite.position.set(-8 + Math.random() * 16, 1.5 + Math.random() * 1.4, -7.6 + Math.random() * 0.6)
    sprite.scale.setScalar(1.2)
    scene.add(sprite)
    sprite.userData = { phase: Math.random() * TAU, speed: 0.6 + Math.random() * 1.4 }
    flashes.push(sprite)
  }
  updateTasks.push((t) => {
    for (const sprite of flashes) {
      const p = sprite.userData.phase
      const pulse = Math.max(0, Math.sin(t * sprite.userData.speed * 2.1 + p) - 0.94) / 0.06
      sprite.material.opacity = pulse * 0.8
    }
  })

  // Props: barrels, crates, cones, papers, tires.
  const barrelColors = ['#5e2a1f', '#223d47', '#5d4a1e']
  for (const [x, z, i, r] of [
    [-5.3, -3.9, 0, 0.2],
    [5.9, -4.4, 1, -0.1],
    [-6.1, 3.8, 2, 0.5],
    [4.5, 4.3, 0, 0.9],
  ]) {
    const barrel = new THREE.Group()
    barrel.position.set(x, 0, z)
    barrel.rotation.y = r
    scene.add(barrel)
    const mat = new THREE.MeshStandardMaterial({ color: barrelColors[i], roughness: 0.68, metalness: 0.42 })
    mesh(barrel, new THREE.CylinderGeometry(0.34, 0.34, 0.86, 16), mat, [0, 0.43, 0])
    for (const y of [0.12, 0.43, 0.75]) {
      mesh(barrel, new THREE.TorusGeometry(0.345, 0.023, 5, 18), new THREE.MeshStandardMaterial({ color: '#262e2e', metalness: 0.8, roughness: 0.4 }), [0, y, 0], [Math.PI / 2, 0, 0])
    }
  }

  const crateMat = new THREE.MeshStandardMaterial({ map: woodTexture, color: '#8e795a', roughness: 0.9 })
  for (const [x, y, z, s, r] of [
    [6.6, 0.38, 2.7, 0.76, 0.2],
    [5.9, 0.38, 3.2, 0.66, -0.15],
    [6.25, 1.12, 2.95, 0.6, 0.5],
    [-7.4, 0.42, 1.9, 0.84, -0.3],
    [-6.7, 0.3, 1.2, 0.6, 0.1],
  ]) {
    const crate = mesh(scene, new THREE.BoxGeometry(s, s, s), crateMat, [x, y, z], [0, r, 0])
    crate.castShadow = true
    crate.receiveShadow = true
    // Slats.
    for (const side of [-1, 1]) {
      mesh(scene, new THREE.BoxGeometry(s * 1.02, s * 0.1, 0.02), new THREE.MeshStandardMaterial({ color: '#3c2d1d', roughness: 0.9 }), [x, y + side * s * 0.32, z + s / 2 + 0.005], [0, r, 0])
    }
  }

  const coneMat2 = new THREE.MeshStandardMaterial({ color: '#d85c1f', roughness: 0.7 })
  const cone = new THREE.Group()
  cone.position.set(-4.2, 0, 4.7)
  cone.rotation.y = 0.4
  scene.add(cone)
  mesh(cone, new THREE.ConeGeometry(0.23, 0.7, 12), coneMat2, [0, 0.38, 0])
  mesh(cone, new THREE.CylinderGeometry(0.12, 0.16, 0.1, 12), new THREE.MeshStandardMaterial({ color: '#eee5cf', roughness: 0.7 }), [0, 0.42, 0])
  mesh(cone, new THREE.BoxGeometry(0.48, 0.06, 0.48), new THREE.MeshStandardMaterial({ color: '#1b2220', roughness: 0.9 }), [0, 0.03, 0])

  const paperMat = new THREE.MeshStandardMaterial({ color: '#c1b9a3', roughness: 1, side: THREE.DoubleSide })
  for (let i = 0; i < 15; i++) {
    const paper = mesh(scene, new THREE.PlaneGeometry(0.26 + Math.random() * 0.22, 0.34 + Math.random() * 0.2), paperMat, [(Math.random() - 0.5) * 11, 0.018, (Math.random() - 0.5) * 9], [-Math.PI / 2, 0, Math.random() * TAU])
    paper.renderOrder = 1
  }

  const tireMat = new THREE.MeshStandardMaterial({ color: '#161a19', roughness: 0.92 })
  for (let i = 0; i < 3; i++) {
    mesh(scene, new THREE.TorusGeometry(0.42, 0.15, 10, 20), tireMat, [-8.4, 0.16 + i * 0.3, -2.4], [Math.PI / 2, 0, 0])
  }

  // Scattered glass glints.
  const glintMat = new THREE.MeshBasicMaterial({ color: '#9de8df', transparent: true, opacity: 0.4 })
  for (let i = 0; i < 24; i++) {
    mesh(scene, new THREE.PlaneGeometry(0.02 + Math.random() * 0.03, 0.02 + Math.random() * 0.03), glintMat, [(Math.random() - 0.5) * 10, 0.02, (Math.random() - 0.5) * 8], [-Math.PI / 2, 0, Math.random() * TAU])
  }

  // Dust motes.
  const dustCount = 700
  const dustPos = new Float32Array(dustCount * 3)
  const dustSeed = new Float32Array(dustCount)
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 22
    dustPos[i * 3 + 1] = Math.random() * 7
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 17
    dustSeed[i] = Math.random() * TAU
  }
  const dustGeo = new THREE.BufferGeometry()
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
  const dustMat = new THREE.PointsMaterial({ color: '#ffd6a0', size: 0.025, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })
  const dust = new THREE.Points(dustGeo, dustMat)
  scene.add(dust)

  const baseDust = dustPos.slice()
  updateTasks.push((t) => {
    const arr = dustGeo.attributes.position.array
    for (let i = 0; i < dustCount; i++) {
      const p = dustSeed[i]
      arr[i * 3] = baseDust[i * 3] + Math.sin(t * 0.24 + p) * 0.6
      arr[i * 3 + 1] = 0.15 + ((baseDust[i * 3 + 1] + t * 0.06 + p * 0.1) % 7)
      arr[i * 3 + 2] = baseDust[i * 3 + 2] + Math.cos(t * 0.2 + p) * 0.5
    }
    dustGeo.attributes.position.needsUpdate = true
    for (const person of crowd) {
      person.position.y = Math.sin(t * 1.5 + person.userData.phase) * 0.025
      person.rotation.z = Math.sin(t * 0.8 + person.userData.phase) * 0.018
    }
  })

  return {
    update(t) {
      for (const task of updateTasks) task(t)
    },
    key,
    neonLight,
  }
}

function sphere(parent, radius, material, position, segments = 12) {
  return mesh(parent, new THREE.SphereGeometry(radius, segments, Math.max(6, Math.round(segments * 0.7))), material, position)
}
