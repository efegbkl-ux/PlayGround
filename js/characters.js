import * as THREE from '../vendor/three.module.js';
import {
  makeApricotTextures, makeLeafTexture, makeSignTexture, makeShirtPrintTexture,
  makeShirtFabricTexture, makeGlowTexture, makeHealthBarSprite, canvas2d, texFrom, mulberry32,
} from './textures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const TAU = Math.PI * 2;
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (x) => { x = clamp01(x); return x * x * (3 - 2 * x); };
const easeOut = (x) => 1 - Math.pow(1 - clamp01(x), 3);
const easeIn = (x) => Math.pow(clamp01(x), 3);
const mix = (a, b, t) => a + (b - a) * t;

function mesh(geo, mat, parent, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

function sphereGeo(r, w = 24, h = 18) { return new THREE.SphereGeometry(r, w, h); }
function capsuleGeo(r, len) { return new THREE.CapsuleGeometry(r, len, 6, 14); }

function shadowTexture() {
  const { canvas, ctx } = canvas2d(128, 128);
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,0.55)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.26)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return texFrom(canvas, { wrap: false });
}
const SHADOW_TEX = shadowTexture();

function contactShadow(parent, w = 1.4, h = 1.0, opacity = 0.6) {
  const mat = new THREE.MeshBasicMaterial({ map: SHADOW_TEX, transparent: true, opacity, depthWrite: false });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.02;
  m.renderOrder = 1;
  parent.add(m);
  return m;
}

function flashMaterials(store, mats) {
  for (const m of mats) if (!store.includes(m)) store.push(m);
}

/* ================================================================== *
 *  THE APRICOT                                                       *
 * ================================================================== */
export function createApricot() {
  const root = new THREE.Group();
  root.name = 'apricot';
  const body = new THREE.Group();
  body.position.y = -0.04;
  root.add(body);

  const tex = makeApricotTextures();
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xffb16b,
    map: tex.map,
    bumpMap: tex.bump,
    bumpScale: 0.014,
    roughnessMap: tex.rough,
    roughness: 0.6,
    metalness: 0.0,
    clearcoat: 0.18,
    clearcoatRoughness: 0.5,
    sheen: 0.9,
    sheenColor: new THREE.Color(0xff9a3d),
    sheenRoughness: 0.72,
    envMapIntensity: 0.62,
  });
  const skinDark = new THREE.MeshPhysicalMaterial({
    color: 0xc8641a, map: tex.map, bumpMap: tex.bump, bumpScale: 0.01,
    roughness: 0.68, sheen: 0.55, sheenColor: new THREE.Color(0xff9a4d), envMapIntensity: 0.45,
  });
  const browMat = new THREE.MeshStandardMaterial({ color: 0x7b330e, roughness: 0.85 });
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x51170a, roughness: 0.7 });
  const eyeWhite = new THREE.MeshPhysicalMaterial({ color: 0xfff8e9, roughness: 0.28, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const irisMat = new THREE.MeshPhysicalMaterial({ color: 0x5b2c0c, roughness: 0.25, clearcoat: 1 });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x130702 });
  const gleam = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const stubbleMat = new THREE.MeshStandardMaterial({ color: 0xa85c18, roughness: 1 });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5b3d1c, roughness: 0.95 });
  const leafTex = makeLeafTexture();
  const leafMat = new THREE.MeshStandardMaterial({ map: leafTex, transparent: true, alphaTest: 0.35, roughness: 0.7, side: THREE.DoubleSide });

  contactShadow(root, 2.0, 1.4, 0.7);

  /* ---------- hips / pelvis / torso ---------- */
  const hips = new THREE.Group();
  hips.position.y = 1.33;
  body.add(hips);

  const pelvis = mesh(sphereGeo(1, 32, 24), skin, hips, 0, 0.02, 0, 0, 0, 0, 0.46, 0.3, 0.38);
  mesh(sphereGeo(1, 24, 18), skinDark, hips, -0.22, -0.03, 0.02, 0, 0, 0, 0.28, 0.23, 0.26);
  mesh(sphereGeo(1, 24, 18), skinDark, hips, 0.22, -0.03, 0.02, 0, 0, 0, 0.28, 0.23, 0.26);
  // glutes
  mesh(sphereGeo(1, 32, 24), skin, hips, -0.2, -0.02, -0.16, 0, 0, 0, 0.28, 0.25, 0.25);
  mesh(sphereGeo(1, 32, 24), skin, hips, 0.2, -0.02, -0.16, 0, 0, 0, 0.28, 0.25, 0.25);
  // waist band (subtle natural crease)
  mesh(new THREE.TorusGeometry(0.4, 0.018, 8, 32), skinDark, hips, 0, 0.16, 0, Math.PI / 2, 0, 0, 1, 1, 0.78);

  const torso = new THREE.Group();
  hips.add(torso);

  // sculpted torso with wide shoulders / V taper
  const profile = [
    [0.34, 0.0], [0.37, 0.05], [0.4, 0.14], [0.44, 0.26], [0.5, 0.4], [0.57, 0.53],
    [0.64, 0.66], [0.69, 0.76], [0.7, 0.85], [0.64, 0.94], [0.52, 1.01], [0.38, 1.07], [0.25, 1.12],
  ];
  const torsoPts = profile.map(([r, y]) => new THREE.Vector2(r, y));
  const torsoGeo = new THREE.LatheGeometry(torsoPts, 40);
  const torsoMesh = mesh(torsoGeo, skin, torso, 0, 0.02, 0, 0, 0, 0, 1.04, 1, 0.8);
  // chest slabs
  const pecL = mesh(sphereGeo(1, 32, 24), skin, torso, -0.27, 0.79, 0.28, -0.12, -0.1, 0.04, 0.3, 0.22, 0.2);
  const pecR = mesh(sphereGeo(1, 32, 24), skin, torso, 0.27, 0.79, 0.28, -0.12, 0.1, -0.04, 0.3, 0.22, 0.2);
  mesh(new THREE.CapsuleGeometry(0.025, 0.3, 4, 10), skinDark, torso, 0, 0.72, 0.47, 0.15, 0, 0);
  // upper chest / clavicle mass
  mesh(sphereGeo(1, 32, 24), skin, torso, 0, 0.92, 0.18, 0, 0, 0, 0.46, 0.2, 0.25);
  // deltoids
  mesh(sphereGeo(1, 32, 24), skin, torso, -0.69, 0.9, 0, 0, 0, 0.08, 0.32, 0.3, 0.3);
  mesh(sphereGeo(1, 32, 24), skin, torso, 0.69, 0.9, 0, 0, 0, -0.08, 0.32, 0.3, 0.3);
  // traps
  mesh(sphereGeo(1, 24, 18), skin, torso, -0.2, 1.04, -0.03, 0, 0, 0.3, 0.27, 0.14, 0.2);
  mesh(sphereGeo(1, 24, 18), skin, torso, 0.2, 1.04, -0.03, 0, 0, -0.3, 0.27, 0.14, 0.2);
  // lats
  mesh(sphereGeo(1, 28, 20), skin, torso, -0.48, 0.47, -0.02, 0, 0, 0.1, 0.22, 0.3, 0.26);
  mesh(sphereGeo(1, 28, 20), skin, torso, 0.48, 0.47, -0.02, 0, 0, -0.1, 0.22, 0.3, 0.26);
  // six-pack
  const absGroup = new THREE.Group();
  torso.add(absGroup);
  for (let row = 0; row < 3; row++) {
    for (const sx of [-1, 1]) {
      const w = row === 0 ? 0.155 : row === 1 ? 0.145 : 0.125;
      mesh(sphereGeo(1, 24, 18), skin, absGroup, sx * 0.145, 0.6 - row * 0.165, 0.37 - row * 0.018, 0, 0, sx * 0.03, w, 0.105, 0.1);
    }
  }
  // obliques
  mesh(sphereGeo(1, 24, 18), skin, torso, -0.33, 0.34, 0.19, 0, 0, 0.2, 0.13, 0.26, 0.16);
  mesh(sphereGeo(1, 24, 18), skin, torso, 0.33, 0.34, 0.19, 0, 0, -0.2, 0.13, 0.26, 0.16);
  // navel
  mesh(new THREE.TorusGeometry(0.035, 0.014, 8, 16), skinDark, torso, 0, 0.16, 0.4, 0.3, 0, 0);

  /* ---------- neck + head ---------- */
  const neck = mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.32, 20), skin, torso, 0, 1.17, 0);
  mesh(new THREE.TorusGeometry(0.2, 0.02, 8, 20), skinDark, torso, 0, 1.32, 0.02, Math.PI / 2, 0, 0);

  const headPivot = new THREE.Group();
  headPivot.position.set(0, 1.5, 0.01);
  torso.add(headPivot);

  // apricot head: spherical with suture crease and a little top dimple
  const headGeo = new THREE.SphereGeometry(0.47, 64, 48);
  const hp = headGeo.attributes.position;
  for (let i = 0; i < hp.count; i++) {
    let x = hp.getX(i), y = hp.getY(i), z = hp.getZ(i);
    x *= 1.04; y *= 0.98; z *= 0.98;
    const radial = Math.sqrt(x * x + y * y + z * z);
    if (radial > 0.2 && z > 0) {
      // vertical suture groove down the front
      const groove = Math.exp(-(x * x) / 0.0024) * Math.max(0, z / 0.46) * 0.03;
      z -= groove;
      // subtle cheek bulge
      x *= 1 + 0.035 * Math.exp(-((y + 0.12) ** 2) / 0.05) * Math.max(0, z / 0.4);
    }
    // stem dimple
    if (y > 0.32) {
      const d = (y - 0.32) / 0.15;
      y -= 0.035 * d * d;
      x *= 1 - 0.05 * d * d;
      z *= 1 - 0.05 * d * d;
    }
    hp.setXYZ(i, x, y, z);
  }
  headGeo.computeVertexNormals();
  const headMesh = mesh(headGeo, skin, headPivot);
  // bold apricot suture: the detail that keeps the hero reading as a fruit,
  // not a very tanned bodybuilder in a round helmet.
  const seamMat = new THREE.MeshBasicMaterial({ color: 0x8f3f0b, transparent: true, opacity: 0.58 });
  const seamForehead = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.31, 0.35),
    new THREE.Vector3(0, 0.41, 0.235),
    new THREE.Vector3(0, 0.462, 0.08),
  ]);
  mesh(new THREE.TubeGeometry(seamForehead, 16, 0.011, 5, false), seamMat, headPivot);
  const seamChin = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -0.225, 0.4),
    new THREE.Vector3(0, -0.30, 0.33),
    new THREE.Vector3(0, -0.355, 0.22),
  ]);
  mesh(new THREE.TubeGeometry(seamChin, 14, 0.009, 5, false), seamMat, headPivot);
  // seam continues around the back so the silhouette reads as an apricot from
  // the over-the-shoulder combat camera too
  const seamBack = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.455, -0.12),
    new THREE.Vector3(0, 0.26, -0.395),
    new THREE.Vector3(0, -0.02, -0.462),
    new THREE.Vector3(0, -0.27, -0.37),
  ]);
  mesh(new THREE.TubeGeometry(seamBack, 18, 0.011, 5, false), seamMat, headPivot);
  // forehead / cheek sheen blush
  const blushMat = new THREE.MeshBasicMaterial({ color: 0xff6a1a, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false });
  mesh(sphereGeo(0.115, 18, 12), blushMat, headPivot, -0.28, -0.11, 0.31, 0, 0, 0, 1.1, 0.7, 0.28);
  mesh(sphereGeo(0.115, 18, 12), blushMat, headPivot, 0.28, -0.11, 0.31, 0, 0, 0, 1.1, 0.7, 0.28);

  // stem + leaf
  const stem = new THREE.Group();
  stem.position.set(0, 0.44, 0);
  stem.rotation.z = 0.3;
  headPivot.add(stem);
  mesh(new THREE.CylinderGeometry(0.022, 0.035, 0.17, 8), stemMat, stem, 0, 0.06, 0);
  const leaf = mesh(new THREE.PlaneGeometry(0.3, 0.42), leafMat, stem, 0.12, 0.17, 0, 0, 0, -0.9);
  leaf.rotation.y = 0.4;

  // face
  const face = new THREE.Group();
  face.position.set(0, 0, 0);
  headPivot.add(face);
  const eyeL = new THREE.Group(); eyeL.position.set(-0.17, 0.06, 0.395); face.add(eyeL);
  const eyeR = new THREE.Group(); eyeR.position.set(0.17, 0.06, 0.395); face.add(eyeR);
  for (const eye of [eyeL, eyeR]) {
    mesh(sphereGeo(0.115, 24, 18), eyeWhite, eye, 0, 0, 0, 0, 0, 0, 1.02, 0.88, 0.54);
    mesh(sphereGeo(0.062, 20, 14), irisMat, eye, 0, 0.002, 0.057, 0, 0, 0, 1, 1, 0.55);
    mesh(sphereGeo(0.031, 16, 12), pupilMat, eye, 0, 0.002, 0.086, 0, 0, 0, 1, 1, 0.45);
    mesh(sphereGeo(0.015, 12, 10), gleam, eye, -0.025, 0.031, 0.105);
    mesh(sphereGeo(0.006, 8, 8), gleam, eye, 0.025, -0.016, 0.102);
    // heavy upper lid = permanent I-own-this-alley squint
    mesh(sphereGeo(0.122, 24, 12), skin, eye, 0, 0.052, 0.004, 0.28, 0, 0, 1.05, 0.72, 0.61);
    // eyeliner crease
    mesh(new THREE.TorusGeometry(0.098, 0.008, 5, 18, Math.PI), browMat, eye, 0, 0.015, 0.055, 0.2, 0, 0, 1, 0.45, 1);
  }
  // lids half-lowered = smug
  eyeL.rotation.x = 0.08; eyeR.rotation.x = 0.08;

  const browL = mesh(new THREE.CapsuleGeometry(0.031, 0.145, 4, 8), browMat, face, -0.17, 0.176, 0.424, 0, 0, -0.46);
  const browR = mesh(new THREE.CapsuleGeometry(0.031, 0.145, 4, 8), browMat, face, 0.17, 0.166, 0.424, 0, 0, 0.31);
  browL.scale.set(1, 1, 0.6); browR.scale.set(1, 1, 0.6);
  // nose bump
  mesh(sphereGeo(0.055, 16, 12), skin, face, 0, -0.035, 0.45, 0, 0, 0, 1.1, 0.8, 0.65);
  // smirk
  const smirkPts = [
    new THREE.Vector3(-0.16, -0.155, 0.432),
    new THREE.Vector3(-0.06, -0.19, 0.452),
    new THREE.Vector3(0.07, -0.183, 0.452),
    new THREE.Vector3(0.18, -0.125, 0.428),
  ];
  const smirkCurve = new THREE.CatmullRomCurve3(smirkPts);
  mesh(new THREE.TubeGeometry(smirkCurve, 24, 0.012, 6, false), mouthMat, face);
  // lower lip
  mesh(sphereGeo(0.085, 20, 12), skinDark, face, 0.01, -0.235, 0.415, 0.2, 0, 0, 1.2, 0.42, 0.3);
  // small chin crease
  mesh(new THREE.CapsuleGeometry(0.008, 0.1, 3, 6), skinDark, face, 0, -0.29, 0.39, 0, 0, Math.PI / 2);

  // tiny fuzz hairs along jaw silhouette
  const rand = mulberry32(8);
  const fuzzMat = new THREE.MeshBasicMaterial({ color: 0xffc37a });
  for (let i = 0; i < 26; i++) {
    const a = -Math.PI * 0.85 + rand() * Math.PI * 1.7;
    const px = Math.sin(a) * 0.455, pz = Math.cos(a) * 0.42;
    if (pz < 0.12) continue;
    const h = 0.012 + rand() * 0.02;
    mesh(new THREE.CylinderGeometry(0.0018, 0.003, h, 3), fuzzMat, headPivot, px, -0.12 + rand() * 0.45, pz, rand() * 0.6, 0, rand() * 0.6);
  }
  // fuzzy halo around the back of the fruit
  for (let i = 0; i < 34; i++) {
    const a = -Math.PI * 0.95 + rand() * Math.PI * 1.9;
    const px = Math.sin(a) * 0.465, pz = Math.cos(a) * 0.44;
    if (pz > -0.08) continue;
    const h = 0.014 + rand() * 0.024;
    mesh(new THREE.CylinderGeometry(0.0018, 0.0032, h, 3), fuzzMat, headPivot, px, -0.12 + rand() * 0.48, pz, rand() * 0.6, 0, rand() * 0.6);
  }

  /* ---------- arms ---------- */
  function buildArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.72, 0.94, 0);
    torso.add(shoulder);
    const upper = mesh(capsuleGeo(0.2, 0.22), skin, shoulder, 0, -0.28, 0, 0, 0, 0, 1.02, 1, 1.02);
    // bicep peak
    mesh(sphereGeo(1, 24, 18), skin, shoulder, side * 0.045, -0.25, 0.1, 0.1, 0, 0, 0.2, 0.17, 0.16);
    // tricep
    mesh(sphereGeo(1, 24, 18), skin, shoulder, side * -0.06, -0.27, -0.11, 0, 0, 0, 0.16, 0.24, 0.15);
    const elbow = new THREE.Group();
    elbow.position.y = -0.57;
    shoulder.add(elbow);
    mesh(sphereGeo(0.17, 24, 18), skin, elbow, 0, 0, 0);
    const fore = mesh(capsuleGeo(0.155, 0.26), skin, elbow, 0, -0.27, 0, 0, 0, 0, 1.05, 1, 1.05);
    mesh(sphereGeo(1, 20, 16), skin, elbow, side * 0.02, -0.23, 0.07, 0, 0, 0, 0.15, 0.19, 0.13);
    mesh(new THREE.TorusGeometry(0.16, 0.02, 6, 16), skinDark, elbow, 0, -0.42, 0);
    const hand = new THREE.Group();
    hand.position.y = -0.55;
    elbow.add(hand);
    mesh(sphereGeo(1, 24, 18), skin, hand, 0, -0.045, 0.01, 0, 0, 0, 0.16, 0.14, 0.14);
    for (let i = 0; i < 4; i++) {
      const finger = mesh(capsuleGeo(0.037, 0.09), skin, hand, side * (0.07 - i * 0.045), -0.15, 0.015 + i * 0.012, 0, 0, 0.05, 1, 1, 1);
      finger.rotation.x = 0.2;
    }
    mesh(capsuleGeo(0.042, 0.08), skin, hand, side * -0.11, -0.05, 0.06, 0.4, 0, side * 0.7);
    return { shoulder, elbow, hand, upper, fore };
  }
  const armL = buildArm(-1);
  const armR = buildArm(1);

  /* ---------- legs ---------- */
  function buildLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.3, -0.02, 0);
    hips.add(hip);
    const thigh = mesh(capsuleGeo(0.235, 0.18), skin, hip, 0, -0.31, 0.01, 0, 0, side * 0.02, 1.02, 1, 1.04);
    mesh(sphereGeo(1, 24, 18), skin, hip, side * 0.02, -0.32, 0.11, 0, 0, 0, 0.2, 0.26, 0.16);
    mesh(sphereGeo(1, 20, 16), skin, hip, side * 0.05, -0.24, -0.12, 0, 0, 0, 0.15, 0.18, 0.13);
    const knee = new THREE.Group();
    knee.position.y = -0.61;
    hip.add(knee);
    mesh(sphereGeo(0.15, 20, 16), skin, knee, 0, 0, 0.035, 0, 0, 0, 1, 1, 0.9);
    mesh(capsuleGeo(0.165, 0.25), skin, knee, 0, -0.29, -0.01, 0, 0, 0, 1, 1, 1.02);
    mesh(sphereGeo(1, 22, 16), skin, knee, 0, -0.24, -0.11, 0, 0, 0, 0.15, 0.2, 0.12);
    const foot = new THREE.Group();
    foot.position.y = -0.55;
    knee.add(foot);
    mesh(sphereGeo(1, 24, 16), skin, foot, 0, 0.04, 0.11, 0, 0, 0, 0.17, 0.12, 0.27);
    for (let i = 0; i < 5; i++) mesh(sphereGeo(0.035, 10, 8), skinDark, foot, (i - 2) * 0.045, -0.005, 0.36, 0, 0, 0, 1, 0.7, 1.2);
    return { hip, knee, foot, thigh };
  }
  const legL = buildLeg(-1);
  const legR = buildLeg(1);

  // tiny sweat/glow decals on shoulders for sheen
  const glint = new THREE.MeshBasicMaterial({ color: 0xffd29a, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false });
  mesh(sphereGeo(0.055, 12, 8), glint, torso, -0.28, 0.92, 0.35, 0, 0, 0, 1.4, 0.4, 0.4);
  mesh(sphereGeo(0.04, 12, 8), glint, torso, 0.4, 0.6, 0.3, 0, 0, 0, 1.5, 0.35, 0.3);

  const joints = { hips, torso, headPivot, armL, armR, legL, legR, body };
  const rest = {};
  for (const [k, g] of Object.entries({ torso, head: headPivot, shoulderL: armL.shoulder, shoulderR: armR.shoulder, elbowL: armL.elbow, elbowR: armR.elbow, hipL: legL.hip, hipR: legR.hip, kneeL: legL.knee, kneeR: legR.knee })) {
    rest[k] = g.rotation.clone();
  }

  root.userData = { joints, type: 'apricot' };

  const pose = (g, x, y, z, k = 16) => {
    g.rotation.x += (x - g.rotation.x) * k;
    g.rotation.y += (y - g.rotation.y) * k;
    g.rotation.z += (z - g.rotation.z) * k;
  };

  function update(dt, s) {
    const t = s.time;
    const k = 1 - Math.exp(-dt * (s.attacking ? 26 : 14));
    const walk = clamp01(s.speed / 4.6);
    const breathe = Math.sin(t * 2.1) * 0.5 + 0.5;
    const bob = Math.sin(t * (walk > 0.1 ? 9 : 2.1)) * (walk > 0.1 ? 0.035 : 0.012) * (1 - walk * 0.1);

    // base targets
    let torsoX = -0.035 + breathe * 0.014;
    let torsoY = Math.sin(t * 1.1) * 0.025 - walk * Math.sin(t * 9) * 0.09;
    let torsoZ = walk * Math.sin(t * 4.5) * 0.025;
    let headX = 0.02 - breathe * 0.018;
    let headY = -torsoY * 0.7 + Math.sin(t * 0.7) * 0.05;
    let headZ = Math.sin(t * 0.8) * 0.03;
    let shLx = -0.22, shLy = 0.06, shLz = -0.28 - walk * 0.35;
    let shRx = -0.34, shRy = -0.05, shRz = 0.32 + walk * 0.15;
    let elLx = -1.02 - walk * 0.4, elLz = 0.06;
    let elRx = -1.24 - walk * 0.15, elRz = -0.06;
    let hipL = 0.06, hipR = -0.02, kneeL = 0.14, kneeR = 0.12;
    let bodyY = -0.04 + bob, bodyZ = 0, bodyX = 0;

    if (walk > 0.05) {
      const ph = t * 7.8;
      hipL = 0.1 + Math.sin(ph) * 0.42 * walk;
      hipR = 0.1 + Math.sin(ph + Math.PI) * 0.42 * walk;
      kneeL = 0.18 + Math.max(0, -Math.sin(ph)) * 0.55 * walk;
      kneeR = 0.18 + Math.max(0, -Math.sin(ph + Math.PI)) * 0.55 * walk;
      shLx += Math.sin(ph + Math.PI) * 0.35 * walk;
      shRx += Math.sin(ph) * 0.12 * walk;
      torsoZ = Math.sin(ph) * 0.03 * walk;
    }

    if (s.attacking) {
      const p = clamp01(s.attackProgress);
      const style = s.attackStyle || 'swing';
      const wind = smooth(Math.min(1, p / 0.32));
      const hit = smooth(Math.min(1, Math.max(0, (p - 0.28) / 0.3)));
      const rec = smooth(Math.min(1, Math.max(0, (p - 0.62) / 0.38)));
      if (style === 'swing' || style === 'sweep' || style === 'spin') {
        const swingArc = style === 'spin' ? 2 * Math.PI * hit : 2.2 * hit;
        torsoY = 0.55 * wind - (style === 'spin' ? 5.6 * hit : 1.25 * hit) + 0.35 * rec;
        torsoX = -0.08 - 0.08 * wind + 0.06 * hit;
        headY = -torsoY * 0.22;
        shRx = mix(-1.3, -0.15, hit) - 1.15 * wind;
        shRz = mix(0.9, -0.6, hit) + 1.4 * wind;
        elRx = mix(-1.9, -0.22, hit);
        shLx = mix(-0.4, -1.1, hit);
        shLz = mix(-0.5, 0.9, hit);
        elLx = -0.8;
        hipL = 0.16 + 0.16 * wind; hipR = -0.12;
        kneeL = 0.2 + 0.32 * wind; kneeR = 0.24;
        bodyZ = 0.16 * hit;
        if (style === 'spin') {
          torsoY = 0.45 * wind + TAU * hit + 0.3 * rec;
          shRz = 1.15; shRx = -1.42; elRx = -0.35;
          hipL = 0.3; kneeL = 0.4;
        }
      } else if (style === 'slash') {
        const dir = s.attackDir || 1;
        torsoY = 0.45 * wind * dir - 1.1 * hit * dir + 0.2 * rec * dir;
        shRx = mix(-1.5, -0.35, hit);
        shRy = mix(0.6, -0.5, hit) * dir;
        shRz = mix(0.6, -0.15, hit);
        elRx = mix(-1.35, -0.15, hit);
        shLx = -0.7; shLz = -0.35;
        bodyZ = 0.18 * hit; bodyY = -0.04 + 0.02 * hit;
      } else if (style === 'slam') {
        const lift = smooth(Math.min(1, p / 0.42));
        const down = smooth(Math.min(1, Math.max(0, (p - 0.42) / 0.16)));
        torsoX = -0.1 - 0.22 * lift + 0.55 * down;
        torsoY = 0.2 * lift - 0.15 * down;
        shRx = -0.2 - 2.35 * lift + 1.6 * down;
        shRz = 0.3 + 0.4 * lift;
        elRx = -0.9 - 0.5 * lift + 0.5 * down;
        shLx = -0.3 - 2.2 * lift + 1.3 * down;
        shLz = -0.2 - 0.35 * lift;
        elLx = -0.9 - 0.4 * lift;
        hipL = 0.2 + 0.4 * lift - 0.1 * down;
        kneeL = 0.2 + 0.7 * lift + 0.35 * down;
        kneeR = 0.15 + 0.55 * lift + 0.4 * down;
        hipR = 0.2 + 0.3 * lift;
        bodyY = -0.04 - 0.12 * down + 0.02 * lift;
        headX = 0.1 * lift + 0.15 * down;
      }
      const shake = Math.max(0, 1 - Math.abs(p - 0.45) * 12) * 0.02;
      bodyX = shake * Math.sin(t * 90);
    }

    if (s.hurt) {
      torsoX -= 0.3 * s.hurt;
      headX -= 0.18 * s.hurt;
      bodyZ -= 0.1 * s.hurt;
      shLz -= 0.3 * s.hurt; shRz += 0.3 * s.hurt;
    }
    if (s.ko) {
      bodyY = -0.04 + Math.sin(t * 2) * 0.02;
      torsoX = -0.5; headX = -0.2;
      shLz = -1.6; shRz = 1.6; elLx = -0.4; elRx = -0.4;
    }

    if (s.lookBack && !s.attacking && !s.ko) {
      // glance over the shoulder toward the camera during the intro tableau
      headY += s.lookBack;
      headZ += s.lookBack * 0.05;
      torsoY += s.lookBack * 0.13;
    }

    pose(torso, torsoX, torsoY, torsoZ, k);
    pose(headPivot, headX, headY, headZ, k);
    pose(armL.shoulder, shLx, shLy, shLz, k);
    pose(armR.shoulder, shRx, shRy, shRz, k);
    pose(armL.elbow, elLx, 0, elLz, k);
    pose(armR.elbow, elRx, 0, elRz, k);
    pose(legL.hip, hipL, 0, 0.02, k);
    pose(legR.hip, hipR, 0, -0.02, k);
    pose(legL.knee, kneeL, 0, 0, k);
    pose(legR.knee, kneeR, 0, 0, k);
    body.position.y += (bodyY - body.position.y) * k;
    body.position.z += (bodyZ - body.position.z) * k;
    body.position.x += (bodyX - body.position.x) * k;
    hips.rotation.z = 0;

    // chest heave
    torso.scale.set(1 + breathe * 0.006, 1 + breathe * 0.004, 1 + breathe * 0.007);
    // brow attitude
    browR.rotation.z = 0.16 + Math.sin(t * 0.9) * 0.04;
  }

  return {
    root, body, joints, update, rightHand: armR.hand, leftHand: armL.hand,
    head: headPivot, torso, skin, baseY: 0,
  };
}

/* ================================================================== *
 *  THE MUTE — tiny, gaunt, permanently apologetic                    *
 * ================================================================== */
export function createSkinny() {
  const root = new THREE.Group();
  root.name = 'mute';
  const body = new THREE.Group();
  root.add(body);

  const skin = new THREE.MeshStandardMaterial({ color: 0xc49a78, roughness: 0.72, metalness: 0.01 });
  const skinShade = new THREE.MeshStandardMaterial({ color: 0xa97c5b, roughness: 0.8 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: 0x8b8b79, roughness: 0.96, side: THREE.DoubleSide });
  const shortsMat = new THREE.MeshStandardMaterial({ color: 0x45433d, roughness: 0.95 });
  const shoeMat = new THREE.MeshStandardMaterial({ color: 0x272421, roughness: 0.88 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x4a4238, roughness: 1 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xe9dfc8, roughness: 0.35 });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x150e09 });
  const mouthMat = new THREE.MeshBasicMaterial({ color: 0x37170f });
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0x9b8153, roughness: 1 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6d4b2a, roughness: 0.9 });
  const signTex = makeSignTexture();
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.82, metalness: 0 });
  const flashMats = [skin, skinShade, shirtMat, shortsMat, hairMat];
  const drops = [];

  contactShadow(root, 0.85, 0.6, 0.55);

  const hips = new THREE.Group(); hips.position.y = 0.86; body.add(hips);
  mesh(sphereGeo(1, 24, 18), shortsMat, hips, 0, 0.02, 0, 0, 0, 0, 0.22, 0.2, 0.17);
  mesh(sphereGeo(1, 20, 16), skin, hips, 0, -0.1, 0.03, 0, 0, 0, 0.16, 0.15, 0.12);
  // belt
  mesh(new THREE.TorusGeometry(0.21, 0.014, 6, 24), new THREE.MeshStandardMaterial({ color: 0x2b2620, roughness: 0.8 }), hips, 0, 0.12, 0, Math.PI / 2, 0, 0, 1, 1, 0.8);

  const torso = new THREE.Group(); hips.add(torso);
  // hollow, bent torso
  const torsoGeo = new THREE.CapsuleGeometry(0.19, 0.48, 8, 20);
  const torsoMesh = mesh(torsoGeo, shirtMat, torso, 0, 0.28, 0, 0, 0, 0, 1.05, 1, 0.62);
  // ribcage hint
  for (let i = 0; i < 3; i++) {
    mesh(new THREE.TorusGeometry(0.185 - i * 0.014, 0.008, 6, 16, Math.PI), skinShade, torso, 0, 0.2 + i * 0.07, 0.02, 0, 0, 0, 1, 1, 0.4);
  }
  // tank top straps
  mesh(new THREE.BoxGeometry(0.045, 0.24, 0.02), shirtMat, torso, -0.12, 0.51, 0.1, 0, 0, 0.06);
  mesh(new THREE.BoxGeometry(0.045, 0.24, 0.02), shirtMat, torso, 0.12, 0.51, 0.1, 0, 0, -0.06);
  mesh(new THREE.TorusGeometry(0.13, 0.02, 6, 18), shirtMat, torso, 0, 0.44, 0.03, Math.PI / 2, 0, 0, 1, 1, 0.6);
  // collarbones
  mesh(new THREE.CapsuleGeometry(0.012, 0.2, 3, 6), skinShade, torso, -0.1, 0.47, 0.12, 0, 0, 1.45);
  mesh(new THREE.CapsuleGeometry(0.012, 0.2, 3, 6), skinShade, torso, 0.1, 0.47, 0.12, 0, 0, -1.45);
  // shoulder bones
  mesh(sphereGeo(0.07, 16, 12), skin, torso, -0.22, 0.46, 0, 0, 0, 0, 0.8, 0.7, 0.7);
  mesh(sphereGeo(0.07, 16, 12), skin, torso, 0.22, 0.46, 0, 0, 0, 0, 0.8, 0.7, 0.7);

  const neck = mesh(new THREE.CylinderGeometry(0.062, 0.075, 0.16, 12), skin, torso, 0, 0.55, 0.01);
  const headPivot = new THREE.Group(); headPivot.position.set(0, 0.7, 0.02); torso.add(headPivot);
  // gaunt head
  const head = mesh(sphereGeo(0.18, 32, 24), skin, headPivot, 0, 0, 0, 0, 0, 0, 0.82, 1.16, 0.92);
  // jaw / chin
  mesh(sphereGeo(1, 20, 16), skin, headPivot, 0, -0.07, 0.06, 0, 0, 0, 0.11, 0.12, 0.14);
  // sunken cheeks
  mesh(sphereGeo(0.07, 16, 12), skinShade, headPivot, -0.09, -0.02, 0.12, 0, 0, 0, 0.8, 1.1, 0.5);
  mesh(sphereGeo(0.07, 16, 12), skinShade, headPivot, 0.09, -0.02, 0.12, 0, 0, 0, 0.8, 1.1, 0.5);
  // big nose
  mesh(sphereGeo(0.047, 16, 12), skin, headPivot, 0, -0.005, 0.185, 0, 0, 0, 0.8, 1.05, 1.35);
  mesh(sphereGeo(0.028, 10, 8), skinShade, headPivot, -0.02, -0.03, 0.23, 0, 0, 0, 1, 0.6, 1);
  // sad eyes
  for (const sx of [-1, 1]) {
    const eye = new THREE.Group(); eye.position.set(sx * 0.072, 0.04, 0.15); headPivot.add(eye);
    mesh(sphereGeo(0.062, 20, 14), eyeMat, eye, 0, 0, 0, 0, 0, 0, 1, 1.15, 0.5);
    mesh(sphereGeo(0.032, 16, 12), pupilMat, eye, 0, -0.005, 0.05, 0, 0, 0, 1, 1, 0.5);
    mesh(sphereGeo(0.009, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), eye, -0.014, 0.015, 0.07);
    // eye bags
    mesh(new THREE.TorusGeometry(0.055, 0.009, 5, 14, Math.PI), skinShade, headPivot, sx * 0.072, -0.01, 0.16, 0, 0, Math.PI);
    // worried brows
    mesh(new THREE.CapsuleGeometry(0.012, 0.075, 3, 6), hairMat, headPivot, sx * 0.072, 0.115, 0.165, 0, 0, sx * 0.42);
  }
  // tiny mouth, slightly open (mute)
  mesh(new THREE.TorusGeometry(0.025, 0.009, 6, 14), mouthMat, headPivot, 0, -0.11, 0.165, 0.1, 0, 0, 1, 1.3, 1);
  // patchy hair
  const hr = mulberry32(3);
  for (let i = 0; i < 13; i++) {
    const a = hr() * TAU, r = 0.1 + hr() * 0.07;
    mesh(new THREE.ConeGeometry(0.014, 0.12 + hr() * 0.1, 5), hairMat, headPivot, Math.cos(a) * r, 0.12 + hr() * 0.07, Math.sin(a) * r * 0.7 - 0.02, hr() * 0.7, 0, (hr() - 0.5) * 1.1);
  }
  // ears
  mesh(sphereGeo(1, 12, 10), skin, headPivot, -0.155, 0.02, 0, 0, 0, 0, 0.035, 0.06, 0.04);
  mesh(sphereGeo(1, 12, 10), skin, headPivot, 0.155, 0.02, 0, 0, 0, 0, 0.035, 0.06, 0.04);
  // sweat dots
  for (let i = 0; i < 3; i++) {
    const drop = mesh(sphereGeo(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.8 }), headPivot, -0.15 + i * 0.04, 0.16, 0.1);
    drops.push(drop);
  }

  function buildArm(side) {
    const shoulder = new THREE.Group(); shoulder.position.set(side * 0.22, 0.44, 0); torso.add(shoulder);
    mesh(capsuleGeo(0.052, 0.28), skin, shoulder, 0, -0.2, 0, 0, 0, 0, 1, 1, 1);
    mesh(sphereGeo(0.05, 12, 10), skinShade, shoulder, 0, -0.34, 0.01);
    const elbow = new THREE.Group(); elbow.position.y = -0.38; shoulder.add(elbow);
    mesh(capsuleGeo(0.043, 0.24), skin, elbow, 0, -0.16, 0, 0, 0, 0, 1, 1, 1);
    mesh(sphereGeo(0.045, 12, 10), skinShade, elbow, 0, -0.3, 0.01);
    const hand = new THREE.Group(); hand.position.y = -0.34; elbow.add(hand);
    mesh(sphereGeo(1, 16, 12), skin, hand, 0, -0.04, 0, 0, 0, 0, 0.07, 0.09, 0.05);
    for (let i = 0; i < 4; i++) mesh(capsuleGeo(0.012, 0.06), skin, hand, side * (0.03 - i * 0.018), -0.11, 0.01, 0.1, 0, 0);
    return { shoulder, elbow, hand };
  }
  const armL = buildArm(-1), armR = buildArm(1);

  function buildLeg(side) {
    const hip = new THREE.Group(); hip.position.set(side * 0.13, -0.02, 0); hips.add(hip);
    mesh(capsuleGeo(0.072, 0.27), skin, hip, 0, -0.23, 0, 0, 0, 0, 1, 1, 1);
    mesh(sphereGeo(0.06, 12, 10), skinShade, hip, 0, -0.36, 0.02);
    const knee = new THREE.Group(); knee.position.y = -0.46; hip.add(knee);
    mesh(capsuleGeo(0.055, 0.3), skin, knee, 0, -0.22, 0, 0, 0, 0, 1, 1, 1);
    const foot = new THREE.Group(); foot.position.y = -0.45; knee.add(foot);
    mesh(new THREE.BoxGeometry(0.12, 0.09, 0.28), shoeMat, foot, 0, -0.02, 0.07);
    mesh(sphereGeo(0.07, 12, 8), shoeMat, foot, 0, 0, 0.21, 0, 0, 0, 0.9, 0.5, 1);
    return { hip, knee, foot };
  }
  const legL = buildLeg(-1), legR = buildLeg(1);

  // shorts legs
  mesh(new THREE.CylinderGeometry(0.1, 0.115, 0.2, 12, 1, true), shortsMat, legL.hip, 0, -0.06, 0);
  mesh(new THREE.CylinderGeometry(0.1, 0.115, 0.2, 12, 1, true), shortsMat, legR.hip, 0, -0.06, 0);

  /* ---- the sign ---- */
  const signGroup = new THREE.Group();
  signGroup.position.set(0, 0.22, 0.2);
  signGroup.rotation.x = -0.08;
  hips.add(signGroup);
  const board = new THREE.Group(); signGroup.add(board);
  const signBox = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.54, 0.025), [
    woodMat, woodMat, woodMat, woodMat,
    signMat,
    new THREE.MeshStandardMaterial({ color: 0x8e7048, roughness: 0.9 }),
  ]);
  board.add(signBox);
  signBox.castShadow = true;
  // frame edge
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.58, 0.018), woodMat);
  frame.position.z = -0.01; frame.castShadow = true;
  board.add(frame);
  // ropes to neck
  function rope(x1, y1, z1, x2, y2, z2) {
    const a = V(x1, y1, z1), b = V(x2, y2, z2);
    const mid = a.clone().lerp(b, 0.5); mid.y += 0.08;
    const curve = new THREE.CatmullRomCurve3([a, mid, b]);
    mesh(new THREE.TubeGeometry(curve, 16, 0.012, 5, false), ropeMat, hips);
  }
  rope(-0.37, 0.48, 0.2, -0.1, 0.64, 0.12);
  rope(0.37, 0.48, 0.2, 0.1, 0.64, 0.12);

  root.userData = { headPivot, torso, hips, armL, armR, legL, legR, signGroup };
  flashMaterials(root.userData.flashMats = [], flashMats);

  const headBase = headPivot.position.clone();
  function update(dt, s) {
    const t = s.time;
    const k = 1 - Math.exp(-dt * 13);
    const tremble = s.cower ? 1 : 0.35;
    const cower = s.cower ? 1 : 0;

    torso.rotation.x += ((cower * 0.24 + (s.attack ? -0.15 : 0)) - torso.rotation.x) * k;
    torso.rotation.y += ((Math.sin(t * 2.4) * 0.05 + (s.attack ? Math.sin(s.attackProgress * Math.PI) * 0.65 : 0)) - torso.rotation.y) * k;
    torso.rotation.z += ((Math.sin(t * 7.4) * 0.025 * tremble) - torso.rotation.z) * k;
    headPivot.rotation.x += ((0.1 + Math.sin(t * 3.1) * 0.04 + cower * 0.1) - headPivot.rotation.x) * k;
    headPivot.rotation.y += ((Math.sin(t * 1.7) * 0.09 + (s.lookY || 0)) - headPivot.rotation.y) * k;
    headPivot.rotation.z += ((Math.sin(t * 6.8) * 0.03 * tremble) - headPivot.rotation.z) * k;
    hips.position.y = 0.86 + Math.sin(t * 2.8) * 0.008 + (s.bounce || 0);

    const raise = s.cower ? 1.55 : 0.8;
    armL.shoulder.rotation.x += ((-0.5 - raise * 0.9) - armL.shoulder.rotation.x) * k;
    armR.shoulder.rotation.x += ((-0.4 - raise * 0.8) - armR.shoulder.rotation.x) * k;
    armL.shoulder.rotation.z += ((-0.3 - cower * 0.3 + Math.sin(t * 6.6) * 0.05) - armL.shoulder.rotation.z) * k;
    armR.shoulder.rotation.z += ((0.3 + cower * 0.3 + Math.sin(t * 6.1) * 0.05) - armR.shoulder.rotation.z) * k;
    armL.elbow.rotation.x += ((-1.7 + Math.sin(t * 5.2) * 0.1) - armL.elbow.rotation.x) * k;
    armR.elbow.rotation.x += ((-1.6 + Math.sin(t * 4.6) * 0.1) - armR.elbow.rotation.x) * k;

    legL.hip.rotation.x += ((0.16 + Math.sin(t * 1.7) * 0.02) - legL.hip.rotation.x) * k;
    legR.hip.rotation.x += ((0.1 - Math.sin(t * 1.7) * 0.02) - legR.hip.rotation.x) * k;
    legL.knee.rotation.x += ((0.26) - legL.knee.rotation.x) * k;
    legR.knee.rotation.x += ((0.2) - legR.knee.rotation.x) * k;
    legL.foot.rotation.x += ((-0.22) - legL.foot.rotation.x) * k;
    legR.foot.rotation.x += ((-0.16) - legR.foot.rotation.x) * k;

    signGroup.rotation.x = -0.08 + Math.sin(t * 2.3) * 0.035 + (s.attack ? Math.sin(s.attackProgress * Math.PI) * 0.3 : 0);
    signGroup.rotation.z = Math.sin(t * 1.9) * 0.03;
    board.position.y = Math.sin(t * 3.4) * 0.008;

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const cycle = (t * 0.45 + i * 0.33) % 1;
      d.position.y = 0.17 - cycle * 0.16;
      d.visible = cycle < 0.8 && !s.ko;
      d.material.opacity = 0.8 * (1 - cycle);
    }

    if (s.hit) {
      body.rotation.z = Math.sin(t * 44) * 0.1 * s.hit;
      torso.rotation.x -= 0.25 * s.hit;
    } else {
      body.rotation.z *= 0.85;
    }
    body.rotation.x = s.ko ? -1.15 : 0;
    body.rotation.z = s.ko ? 0.2 : body.rotation.z;
  }

  return { root, body, joints: { headPivot, torso, hips, armL, armR, legL, legR }, update, signGroup, head: headPivot, flashMats };
}

/* ================================================================== *
 *  THE 2016 GUY — tremendous, bearded, twelve years behind           *
 * ================================================================== */
export function createObese() {
  const root = new THREE.Group();
  root.name = 'obese';
  const body = new THREE.Group();
  root.add(body);

  const skin = new THREE.MeshStandardMaterial({ color: 0xd9a279, roughness: 0.66, metalness: 0 });
  const skinShade = new THREE.MeshStandardMaterial({ color: 0xb47e58, roughness: 0.75 });
  const shirtTex = makeShirtFabricTexture('#182a46');
  const shirt = new THREE.MeshStandardMaterial({ map: shirtTex, color: 0xffffff, roughness: 0.94, metalness: 0.0 });
  const shirtDark = new THREE.MeshStandardMaterial({ color: 0x0f1d33, roughness: 0.96 });
  const jeans = new THREE.MeshStandardMaterial({ color: 0x2f405a, roughness: 0.95 });
  const jeansDark = new THREE.MeshStandardMaterial({ color: 0x223147, roughness: 0.96 });
  const shoe = new THREE.MeshStandardMaterial({ color: 0x221d19, roughness: 0.9 });
  const hair = new THREE.MeshStandardMaterial({ color: 0x2f2118, roughness: 0.92 });
  const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xeadfc9, roughness: 0.4 });
  const pupil = new THREE.MeshBasicMaterial({ color: 0x130b08 });
  const mouth = new THREE.MeshBasicMaterial({ color: 0x4c1c17 });
  const printTex = makeShirtPrintTexture();
  const printMat = new THREE.MeshStandardMaterial({ map: printTex, transparent: true, roughness: 0.9, alphaTest: 0.02, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  const flashMats = [skin, skinShade, shirt, shirtDark, jeans, hair];
  const printMats = [printMat];

  contactShadow(root, 1.8, 1.2, 0.7);

  const hips = new THREE.Group(); hips.position.y = 0.78; body.add(hips);
  // enormous lower body
  mesh(sphereGeo(1, 40, 28), jeans, hips, 0, 0.04, -0.02, 0, 0, 0, 0.58, 0.42, 0.48);
  mesh(sphereGeo(1, 32, 24), jeans, hips, -0.3, -0.1, 0, 0, 0, 0, 0.28, 0.32, 0.28);
  mesh(sphereGeo(1, 32, 24), jeans, hips, 0.3, -0.1, 0, 0, 0, 0, 0.28, 0.32, 0.28);
  // belt under belly
  mesh(new THREE.TorusGeometry(0.54, 0.03, 8, 32), new THREE.MeshStandardMaterial({ color: 0x2a1a12, roughness: 0.7 }), hips, 0, -0.1, 0, Math.PI / 2, 0, 0, 1, 1, 0.85);
  mesh(new THREE.BoxGeometry(0.1, 0.075, 0.02), new THREE.MeshStandardMaterial({ color: 0xa98542, metalness: 0.6, roughness: 0.4 }), hips, 0, -0.1, 0.47);

  const torso = new THREE.Group(); hips.add(torso);
  // belly mass (skin) under shirt
  const belly = mesh(sphereGeo(1, 48, 32), skin, torso, 0, 0.34, 0.03, 0, 0, 0, 0.62, 0.53, 0.5);
  // shirt shell slightly larger
  const shirtShell = mesh(sphereGeo(1, 48, 32), shirt, torso, 0, 0.36, 0.035, 0, 0, 0, 0.645, 0.545, 0.52);
  shirtShell.material.side = THREE.FrontSide;
  // chest & shoulders
  mesh(sphereGeo(1, 36, 26), shirt, torso, 0, 0.72, 0.02, 0, 0, 0, 0.55, 0.32, 0.38);
  mesh(sphereGeo(1, 30, 22), shirt, torso, -0.42, 0.69, 0, 0, 0, 0, 0.2, 0.22, 0.24);
  mesh(sphereGeo(1, 30, 22), shirt, torso, 0.42, 0.69, 0, 0, 0, 0, 0.2, 0.22, 0.24);
  // shirt hem
  mesh(new THREE.TorusGeometry(0.58, 0.035, 8, 32), shirtDark, torso, 0, 0.04, 0.02, Math.PI / 2, 0, 0, 1, 1, 0.8);
  // collar
  mesh(new THREE.TorusGeometry(0.17, 0.034, 8, 24), shirtDark, torso, 0, 0.96, 0.02, Math.PI / 2, 0, 0, 1.05, 1, 0.65);
  // sleeve cuffs
  const cuffL = mesh(new THREE.TorusGeometry(0.12, 0.028, 8, 20), shirtDark, torso, -0.53, 0.62, 0, 0.15, 0, 0.3);
  cuffL.rotation.set(0.15, 0, 0.3);
  // belly button dent through shirt
  mesh(sphereGeo(0.055, 14, 10), shirtDark, torso, 0, 0.18, 0.55, 0, 0, 0, 1, 1.2, 0.3);
  // shirt wrinkles
  for (let i = 0; i < 5; i++) {
    mesh(new THREE.CapsuleGeometry(0.012, 0.3 + i * 0.04, 3, 6), shirtDark, torso, -0.2 + i * 0.11, 0.4 - (i % 2) * 0.12, 0.535, 0.2, 0, 0.5);
  }
  // print decal curving over the belly
  const printGeo = new THREE.PlaneGeometry(1.16, 0.58, 24, 8);
  const pp = printGeo.attributes.position;
  for (let i = 0; i < pp.count; i++) {
    const x = pp.getX(i), y = pp.getY(i);
    pp.setZ(i, -0.09 * (x / 0.58) ** 2 - 0.03 * (y / 0.29) ** 2);
  }
  printGeo.computeVertexNormals();
  const print = mesh(printGeo, printMat, torso, 0, 0.46, 0.548, -0.02, 0, 0);
  print.renderOrder = 2;

  const neck = mesh(new THREE.CylinderGeometry(0.17, 0.21, 0.14, 16), skin, torso, 0, 0.97, 0.045);
  const headPivot = new THREE.Group(); headPivot.position.set(0, 1.12, 0.06); torso.add(headPivot);
  // bald head, big and fleshy
  mesh(sphereGeo(0.245, 40, 30), skin, headPivot, 0, 0, 0, 0, 0, 0, 1.03, 1.02, 0.98);
  // bald shine
  mesh(sphereGeo(0.09, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffe6c4, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false }), headPivot, -0.06, 0.19, 0.12, 0, 0, 0, 1.3, 0.5, 0.4);
  // ears
  mesh(sphereGeo(1, 16, 12), skin, headPivot, -0.25, -0.01, 0, 0, 0, 0, 0.055, 0.085, 0.05);
  mesh(sphereGeo(1, 16, 12), skin, headPivot, 0.25, -0.01, 0, 0, 0, 0, 0.055, 0.085, 0.05);
  // brows (annoyed)
  mesh(new THREE.CapsuleGeometry(0.022, 0.1, 4, 8), hair, headPivot, -0.09, 0.105, 0.225, 0.1, 0, -0.28);
  mesh(new THREE.CapsuleGeometry(0.022, 0.1, 4, 8), hair, headPivot, 0.09, 0.1, 0.225, 0.1, 0, 0.34);
  // tiny suspicious eyes
  for (const sx of [-1, 1]) {
    const eye = new THREE.Group(); eye.position.set(sx * 0.085, 0.045, 0.21); headPivot.add(eye);
    mesh(sphereGeo(0.042, 16, 12), eyeWhite, eye, 0, 0, 0, 0, 0, 0, 1.1, 0.8, 0.5);
    mesh(sphereGeo(0.02, 12, 10), pupil, eye, 0, 0, 0.035, 0, 0, 0, 1, 1, 0.5);
    mesh(sphereGeo(0.005, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), eye, -0.007, 0.008, 0.048);
    mesh(new THREE.TorusGeometry(0.043, 0.007, 5, 12, Math.PI), skinShade, headPivot, sx * 0.085, 0.0, 0.213, 0, 0, 0);
  }
  // bulbous nose
  mesh(sphereGeo(0.07, 20, 16), skin, headPivot, 0, -0.035, 0.235, 0, 0, 0, 0.9, 0.85, 1.1);
  mesh(sphereGeo(0.055, 16, 12), skinShade, headPivot, -0.055, -0.055, 0.215, 0, 0, 0, 1, 0.8, 0.7);
  mesh(sphereGeo(0.055, 16, 12), skinShade, headPivot, 0.055, -0.055, 0.215, 0, 0, 0, 1, 0.8, 0.7);
  // mouth + lips
  mesh(new THREE.TorusGeometry(0.06, 0.016, 8, 16), mouth, headPivot, 0, -0.13, 0.218, 0, 0, 0, 1.15, 0.45, 1);
  mesh(sphereGeo(0.06, 16, 10), skinShade, headPivot, 0, -0.17, 0.21, 0, 0, 0, 1.3, 0.35, 0.65);
  // beard mass
  const beard = new THREE.Group(); headPivot.add(beard);
  mesh(sphereGeo(1, 32, 24), hair, beard, 0, -0.18, 0.075, 0.1, 0, 0, 0.22, 0.2, 0.15);
  mesh(sphereGeo(1, 24, 18), hair, beard, -0.14, -0.12, 0.1, 0, 0, 0, 0.1, 0.16, 0.09);
  mesh(sphereGeo(1, 24, 18), hair, beard, 0.14, -0.12, 0.1, 0, 0, 0, 0.1, 0.16, 0.09);
  // moustache
  mesh(sphereGeo(1, 20, 14), hair, headPivot, -0.06, -0.08, 0.23, 0, 0, 0.28, 0.09, 0.035, 0.045);
  mesh(sphereGeo(1, 20, 14), hair, headPivot, 0.06, -0.08, 0.23, 0, 0, -0.28, 0.09, 0.035, 0.045);
  // beard hairs around chin
  const br = mulberry32(2016);
  for (let i = 0; i < 46; i++) {
    const a = -Math.PI * 0.8 + br() * Math.PI * 1.6;
    const y = -0.27 + br() * 0.13;
    const px = Math.sin(a) * 0.17;
    const pz = 0.13 + Math.cos(a) * 0.08;
    if (y > -0.16 && Math.abs(px) < 0.1 && pz > 0.19) continue;
    mesh(new THREE.ConeGeometry(0.014 + br() * 0.012, 0.06 + br() * 0.07, 4), hair, beard, px, y, pz, (br() - 0.5) * 0.8, 0, (br() - 0.5) * 0.9);
  }
  // hair around back/sides
  for (let i = 0; i < 12; i++) {
    const a = Math.PI * 0.55 + br() * Math.PI * 0.9;
    mesh(sphereGeo(0.07 + br() * 0.05, 10, 8), hair, headPivot, Math.cos(a) * 0.22, 0.02 + br() * 0.06, Math.sin(a) * 0.2, 0, 0, 0, 1.2, 0.6, 0.8);
  }

  function buildArm(side) {
    const shoulder = new THREE.Group(); shoulder.position.set(side * 0.54, 0.72, 0); torso.add(shoulder);
    mesh(capsuleGeo(0.15, 0.22), shirt, shoulder, 0, -0.2, 0, 0, 0, 0, 1.05, 1, 1.05);
    const elbow = new THREE.Group(); elbow.position.y = -0.44; shoulder.add(elbow);
    mesh(sphereGeo(0.12, 20, 16), skin, elbow, 0, 0, 0);
    mesh(capsuleGeo(0.11, 0.26), skin, elbow, 0, -0.22, 0, 0, 0, 0, 1.1, 1, 1.1);
    const hand = new THREE.Group(); hand.position.y = -0.44; elbow.add(hand);
    mesh(sphereGeo(1, 20, 16), skin, hand, 0, -0.03, 0, 0, 0, 0, 0.11, 0.09, 0.08);
    for (let i = 0; i < 4; i++) mesh(capsuleGeo(0.022, 0.055), skin, hand, side * (0.05 - i * 0.03), -0.09, 0.01, 0.15, 0, 0);
    return { shoulder, elbow, hand };
  }
  const armL = buildArm(-1), armR = buildArm(1);

  function buildLeg(side) {
    const hip = new THREE.Group(); hip.position.set(side * 0.3, -0.04, 0); hips.add(hip);
    mesh(capsuleGeo(0.17, 0.23), jeans, hip, 0, -0.22, 0, 0, 0, 0, 1, 1, 1);
    mesh(sphereGeo(0.15, 16, 12), jeansDark, hip, 0, -0.38, 0.05);
    const knee = new THREE.Group(); knee.position.y = -0.44; hip.add(knee);
    mesh(capsuleGeo(0.13, 0.25), jeans, knee, 0, -0.2, 0, 0, 0, 0, 1, 1, 1.05);
    const foot = new THREE.Group(); foot.position.y = -0.4; knee.add(foot);
    mesh(new THREE.BoxGeometry(0.18, 0.12, 0.34), shoe, foot, 0, -0.02, 0.08);
    return { hip, knee, foot };
  }
  const legL = buildLeg(-1), legR = buildLeg(1);

  root.userData = { headPivot, torso, hips, armL, armR, legL, legR, print };
  flashMaterials(root.userData.flashMats = [], flashMats);

  function update(dt, s) {
    const t = s.time;
    const k = 1 - Math.exp(-dt * 12);
    const breathe = Math.sin(t * 2.0) * 0.5 + 0.5;
    hips.position.y = 0.78 + Math.sin(t * 2.0) * 0.006;
    torso.scale.set(1 + breathe * 0.007, 1, 1 + breathe * 0.009);
    belly.scale.set(0.62 + breathe * 0.004, 0.53, 0.5 + breathe * 0.005);
    shirtShell.scale.set(0.645 + breathe * 0.004, 0.545, 0.52 + breathe * 0.005);

    let torsoX = 0.05 + breathe * 0.02;
    let torsoY = Math.sin(t * 0.9) * 0.04;
    let torsoZ = Math.sin(t * 1.1) * 0.02;
    let headX = 0.03, headY = Math.sin(t * 0.6) * 0.08, headZ = Math.sin(t * 0.8) * 0.05;
    let shLx = -0.2, shLz = -0.5, shRx = -0.25, shRz = 0.5;
    let elLx = -1.05, elRx = -1.15;
    let hipL = 0.06, hipR = 0.06, kneeL = 0.12, kneeR = 0.12;

    if (s.walking) {
      const ph = s.time * 6.4;
      hipL += Math.sin(ph) * 0.24;
      hipR += Math.sin(ph + Math.PI) * 0.24;
      kneeL += Math.max(0, -Math.sin(ph)) * 0.25;
      kneeR += Math.max(0, -Math.sin(ph + Math.PI)) * 0.25;
      torsoZ += Math.sin(ph) * 0.025;
      shLz += Math.sin(ph) * -0.15;
      shRz += Math.sin(ph) * 0.15;
    }
    if (s.attack) {
      const p = s.attackProgress;
      const wind = smooth(Math.min(1, p / 0.35));
      const hit = smooth(clamp01((p - 0.35) / 0.25));
      torsoX += -0.3 * wind + 0.55 * hit;
      torsoY += 0.2 * wind - 0.15 * hit;
      shLx += -0.6 * wind + 0.7 * hit;
      shRx += -0.5 * wind + 0.65 * hit;
      shLz += -0.5 * wind + 0.5 * hit;
      shRz += 0.5 * wind - 0.4 * hit;
      elLx += -0.4 * hit; elRx += -0.4 * hit;
      headX += -0.1 * wind + 0.12 * hit;
      hipL += 0.2 * wind; hipR += 0.2 * wind;
      kneeL += 0.2 * wind; kneeR += 0.2 * wind;
      s.bounce = 0.03 * hit;
    }
    if (s.hit) {
      torsoX -= 0.28 * s.hit; torsoZ += Math.sin(t * 32) * 0.08 * s.hit;
      headX -= 0.2 * s.hit; headZ += Math.sin(t * 28) * 0.1 * s.hit;
    }
    torso.rotation.x += (torsoX - torso.rotation.x) * k;
    torso.rotation.y += (torsoY - torso.rotation.y) * k;
    torso.rotation.z += (torsoZ - torso.rotation.z) * k;
    headPivot.rotation.x += (headX - headPivot.rotation.x) * k;
    headPivot.rotation.y += (headY - headPivot.rotation.y) * k;
    headPivot.rotation.z += (headZ - headPivot.rotation.z) * k;
    armL.shoulder.rotation.x += (shLx - armL.shoulder.rotation.x) * k;
    armL.shoulder.rotation.z += (shLz - armL.shoulder.rotation.z) * k;
    armR.shoulder.rotation.x += (shRx - armR.shoulder.rotation.x) * k;
    armR.shoulder.rotation.z += (shRz - armR.shoulder.rotation.z) * k;
    armL.elbow.rotation.x += (elLx - armL.elbow.rotation.x) * k;
    armR.elbow.rotation.x += (elRx - armR.elbow.rotation.x) * k;
    legL.hip.rotation.x += (hipL - legL.hip.rotation.x) * k;
    legR.hip.rotation.x += (hipR - legR.hip.rotation.x) * k;
    legL.knee.rotation.x += (kneeL - legL.knee.rotation.x) * k;
    legR.knee.rotation.x += (kneeR - legR.knee.rotation.x) * k;
    legL.foot.rotation.x += ((-0.1) - legL.foot.rotation.x) * k;
    legR.foot.rotation.x += ((-0.1) - legR.foot.rotation.x) * k;
    body.rotation.x = s.ko ? -1.2 : 0;
    body.rotation.z = s.ko ? 0.24 : 0;
    if (s.hit) body.position.x = Math.sin(t * 37) * 0.02 * s.hit;
    else body.position.x *= 0.9;
  }

  return { root, body, joints: { headPivot, torso, hips, armL, armR, legL, legR }, update, head: headPivot, print, shirt, flashMats, printMats };
}

/* ------------------------------ health pods ------------------------------ */
export function createHealthPods(name, accent) {
  const pod = makeHealthBarSprite(name, accent);
  const texture = new THREE.CanvasTexture(pod.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.92, 0.23, 1);
  sprite.renderOrder = 20;
  function setHealth(ratio) {
    const { ctx } = pod;
    ctx.clearRect(0, 0, 512, 128);
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.font = '400 34px Anton, Impact, sans-serif';
    ctx.fillStyle = '#f8ecd8';
    ctx.shadowColor = 'rgba(0,0,0,0.85)'; ctx.shadowBlur = 8;
    ctx.fillText(name, 16, 30);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,0.62)';
    ctx.fillRect(16, 54, 480, 24);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 2; ctx.strokeRect(16, 54, 480, 24);
    const r = Math.max(0, Math.min(1, ratio));
    const grad = ctx.createLinearGradient(16, 0, 496, 0);
    grad.addColorStop(0, accent); grad.addColorStop(1, '#ff3d6e');
    ctx.fillStyle = grad;
    ctx.fillRect(20, 58, 472 * r, 16);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    for (let i = 1; i < 4; i++) ctx.fillRect(20 + i * 118, 58, 2, 16);
    texture.needsUpdate = true;
  }
  setHealth(1);
  return { sprite, setHealth, texture };
}
