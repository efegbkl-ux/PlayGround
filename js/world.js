import * as THREE from '../vendor/three.module.js';
import {
  makeAsphaltTextures, makeBrickTextures, makeWoodTexture, makeMetalTexture,
  makeCardboardTexture, makeGraffitiTexture, makeTagTexture, makeNeonTexture,
  makePosterTexture, makeGlowTexture, makeSmokeTexture, canvas2d, texFrom, mulberry32,
} from './textures.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const TAU = Math.PI * 2;

function mesh(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

function makeSky(renderer) {
  const { canvas, ctx } = canvas2d(1024, 512);
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#05070e');
  g.addColorStop(0.36, '#0c0d1b');
  g.addColorStop(0.58, '#2b1720');
  g.addColorStop(0.72, '#6b2d21');
  g.addColorStop(0.8, '#2c1a17');
  g.addColorStop(1, '#08070a');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 1024, 512);
  // hazy city glow
  for (const [x, y, r, c] of [[720, 330, 250, '255,120,40'], [280, 350, 200, '255,60,120'], [500, 300, 300, '80,100,180']]) {
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, `rgba(${c},0.18)`); rg.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = rg; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // moon
  const mg = ctx.createRadialGradient(812, 108, 2, 812, 108, 56);
  mg.addColorStop(0, 'rgba(255,246,220,0.95)'); mg.addColorStop(0.28, 'rgba(255,230,190,0.35)'); mg.addColorStop(1, 'rgba(255,220,170,0)');
  ctx.fillStyle = mg; ctx.fillRect(740, 36, 144, 144);
  ctx.fillStyle = '#fff2d0'; ctx.beginPath(); ctx.arc(812, 108, 20, 0, Math.PI * 2); ctx.fill();
  // stars
  const rand = mulberry32(4);
  for (let i = 0; i < 220; i++) {
    ctx.fillStyle = `rgba(220,230,255,${0.1 + rand() * 0.5})`;
    ctx.fillRect(rand() * 1024, rand() * 250, 1 + rand(), 1 + rand());
  }
  // distant skyline silhouettes
  ctx.fillStyle = 'rgba(4,5,9,0.9)';
  let x = 0;
  while (x < 1024) {
    const w = 20 + rand() * 70, h = 20 + rand() * 90;
    ctx.fillRect(x, 380 - h, w, h + 60);
    for (let yy = 380 - h + 12; yy < 390; yy += 16) {
      for (let xx = x + 5; xx < x + w - 5; xx += 13) {
        if (rand() > 0.6) {
          ctx.fillStyle = `rgba(255,${160 + rand() * 60},${80 + rand() * 60},${0.2 + rand() * 0.5})`;
          ctx.fillRect(xx, yy, 3, 4);
        }
        ctx.fillStyle = 'rgba(4,5,9,0.9)';
      }
    }
    x += w + 3;
  }
  const tex = texFrom(canvas, { wrap: false });
  tex.mapping = THREE.EquirectangularReflectionMapping;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(tex).texture;
  pmrem.dispose();
  return { background: tex, env };
}

function makeWindowTexture(warm = true) {
  const rand = mulberry32(warm ? 3 : 9);
  const { canvas, ctx } = canvas2d(256, 320);
  ctx.fillStyle = '#0b0908'; ctx.fillRect(0, 0, 256, 320);
  const g = ctx.createLinearGradient(0, 0, 0, 320);
  if (warm) { g.addColorStop(0, '#ffd086'); g.addColorStop(0.55, '#d77b29'); g.addColorStop(1, '#5b2a10'); }
  else { g.addColorStop(0, '#4f657e'); g.addColorStop(1, '#121b26'); }
  ctx.fillStyle = g; ctx.fillRect(14, 14, 228, 292);
  // silhouettes / curtains
  ctx.fillStyle = warm ? 'rgba(50,25,12,0.5)' : 'rgba(4,6,9,0.6)';
  ctx.fillRect(14, 14, 70, 292);
  ctx.fillRect(172, 14, 70, 292);
  ctx.fillStyle = 'rgba(10,8,8,0.7)';
  ctx.fillRect(120, 30, 8, 276);
  ctx.fillRect(14, 148, 228, 7);
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = 'rgba(0,0,0,0.16)';
    ctx.fillRect(14 + rand() * 220, 14 + rand() * 280, 30 + rand() * 60, 6 + rand() * 20);
  }
  return texFrom(canvas, { wrap: false });
}

function makeConeTexture() {
  const { canvas, ctx } = canvas2d(256, 256);
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, 'rgba(255,190,100,0.0)');
  g.addColorStop(0.5, 'rgba(255,170,80,0.07)');
  g.addColorStop(0.85, 'rgba(255,180,100,0.16)');
  g.addColorStop(1, 'rgba(255,180,100,0.02)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.moveTo(128, 0); ctx.lineTo(256, 256); ctx.lineTo(0, 256); ctx.closePath(); ctx.fill();
  // rays
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 8; i++) {
    const rg = ctx.createLinearGradient(128, 0, 20 + i * 30, 256);
    rg.addColorStop(0, 'rgba(255,200,120,0.08)'); rg.addColorStop(1, 'rgba(255,180,90,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(20 + i * 28, 0, 8, 256);
  }
  return texFrom(canvas, { wrap: false });
}

export function buildWorld(scene, renderer) {
  const rand = mulberry32(2077);
  const { background, env } = makeSky(renderer);
  scene.background = background;
  scene.backgroundBlurriness = 0.04;
  scene.environment = env;
  scene.environmentIntensity = 0.62;
  scene.fog = new THREE.FogExp2(0x0b0810, 0.028);

  const root = new THREE.Group();
  scene.add(root);

  const asphalt = makeAsphaltTextures();
  const bricks = makeBrickTextures();
  const concrete = new THREE.MeshStandardMaterial({ color: 0x49433c, roughness: 0.94, metalness: 0.02 });
  const brickMat = new THREE.MeshStandardMaterial({ map: bricks.map, bumpMap: bricks.bump, bumpScale: 0.03, roughness: 0.92, metalness: 0.02 });
  const brickDark = new THREE.MeshStandardMaterial({ map: bricks.map, bumpMap: bricks.bump, bumpScale: 0.03, color: 0x8a7770, roughness: 0.94 });
  const woodMat = new THREE.MeshStandardMaterial({ map: makeWoodTexture('#7c4f2a'), roughness: 0.88 });
  const woodDark = new THREE.MeshStandardMaterial({ map: makeWoodTexture('#4e2f19'), roughness: 0.92 });
  const metalMat = new THREE.MeshStandardMaterial({ map: makeMetalTexture('#565a5d', 0.5), color: 0xb7bcc0, roughness: 0.52, metalness: 0.72 });
  const rustMat = new THREE.MeshStandardMaterial({ map: makeMetalTexture('#6f5b45', 0.85), roughness: 0.78, metalness: 0.42 });
  const blackMetal = new THREE.MeshStandardMaterial({ map: makeMetalTexture('#2f3234', 0.4), color: 0x888c8f, roughness: 0.6, metalness: 0.6 });
  const cardboardMat = new THREE.MeshStandardMaterial({ map: makeCardboardTexture(), roughness: 0.95 });
  const glowOrange = makeGlowTexture('255,150,60');
  const glowPink = makeGlowTexture('255,60,120');
  const glowCyan = makeGlowTexture('90,220,255');
  const glowTexMat = (tex, color = 0xffffff, opacity = 1) => new THREE.SpriteMaterial({ map: tex, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });

  /* ------------------------------- floor ------------------------------- */
  const groundMat = new THREE.MeshStandardMaterial({
    map: asphalt.map, bumpMap: asphalt.bump, bumpScale: 0.02, roughness: 0.71, metalness: 0.12,
    color: 0xc9c2b8, envMapIntensity: 0.4,
  });
  const ground = mesh(root, new THREE.PlaneGeometry(46, 46), groundMat, 0, 0, 4, -Math.PI / 2, 0, 0);
  ground.receiveShadow = true; ground.castShadow = false;
  // arena stains/circle
  const chalk = new THREE.MeshStandardMaterial({ color: 0x9c8a6c, roughness: 1, transparent: true, opacity: 0.14 });
  mesh(root, new THREE.RingGeometry(7.4, 7.52, 64), chalk, 0, 0.012, 4, -Math.PI / 2, 0, 0).castShadow = false;
  mesh(root, new THREE.RingGeometry(7.65, 7.7, 64), chalk, 0, 0.012, 4, -Math.PI / 2, 0, 0).castShadow = false;

  // puddles + gold reflection slicks
  const puddleMat = new THREE.MeshPhysicalMaterial({ color: 0x080b0e, metalness: 0.7, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.8, transparent: true, opacity: 0.92 });
  const puddleSpots = [[-4.6, 2.8, 2.3, 0.9, 0.3], [3.8, 5.4, 2.8, 1.1, 0.1], [-1.5, 8.8, 2.2, 0.7, 0.15], [5.8, 1.1, 1.9, 0.6, 0.2], [-6.9, 7.2, 1.6, 0.55, 0.1]];
  for (const [x, z, w, h, rot] of puddleSpots) {
    const p = mesh(root, new THREE.CircleGeometry(1, 40), puddleMat, x, 0.016, z, -Math.PI / 2, 0, rot);
    p.scale.set(w, h, 1); p.rotation.z = rot; p.receiveShadow = true; p.castShadow = false;
    const refl = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.2, h * 0.35), new THREE.MeshBasicMaterial({ map: glowOrange, transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending, depthWrite: false }));
    refl.rotation.x = -Math.PI / 2; refl.rotation.z = rot;
    refl.position.set(x, 0.018, z); refl.scale.set(1, 1, 1);
    root.add(refl);
  }
  // scattered papers & debris
  const paperMat = new THREE.MeshStandardMaterial({ color: 0xb9ac92, roughness: 1, side: THREE.DoubleSide });
  for (let i = 0; i < 22; i++) {
    const x = (rand() - 0.5) * 22, z = (rand() - 0.5) * 20 + 4;
    const p = mesh(root, new THREE.PlaneGeometry(0.16 + rand() * 0.2, 0.22 + rand() * 0.25), paperMat, x, 0.018, z, -Math.PI / 2, 0, rand() * TAU);
    p.castShadow = false;
  }
  for (let i = 0; i < 30; i++) {
    const s = 0.04 + rand() * 0.1;
    mesh(root, new THREE.DodecahedronGeometry(s, 0), concrete, (rand() - 0.5) * 22, s * 0.5, (rand() - 0.5) * 20 + 4, rand(), rand(), rand()).castShadow = false;
  }
  // manhole + grate for steam
  const manhole = mesh(root, new THREE.CylinderGeometry(0.62, 0.62, 0.02, 32), blackMetal, -2.5, 0.012, 7.2);
  manhole.castShadow = false;
  mesh(root, new THREE.TorusGeometry(0.63, 0.025, 8, 32), blackMetal, -2.5, 0.02, 7.2, Math.PI / 2, 0, 0);
  mesh(root, new THREE.BoxGeometry(1.1, 0.02, 0.7), new THREE.MeshStandardMaterial({ color: 0x171615, roughness: 0.7, metalness: 0.5 }), 4.8, 0.012, 7.6).castShadow = false;
  for (let i = 0; i < 9; i++) mesh(root, new THREE.BoxGeometry(0.055, 0.03, 0.65), blackMetal, 4.35 + i * 0.11, 0.026, 7.6).castShadow = false;

  /* ------------------------------- walls ------------------------------- */
  const wallH = 9.5;
  // back wall behind the enemies
  const backWall = mesh(root, new THREE.BoxGeometry(30, wallH, 0.6), brickMat, 0, wallH / 2, 13.4);
  backWall.receiveShadow = true;
  // side walls
  mesh(root, new THREE.BoxGeometry(0.6, wallH, 30), brickDark, -12.6, wallH / 2, 4);
  mesh(root, new THREE.BoxGeometry(0.6, wallH, 30), brickDark, 12.6, wallH / 2, 4);
  // wall behind camera / alley entrance
  mesh(root, new THREE.BoxGeometry(30, 7.5, 0.6), brickDark, 0, 3.75, -10.5);
  // top ledge
  mesh(root, new THREE.BoxGeometry(30.6, 0.4, 1.1), concrete, 0, wallH + 0.1, 13.35);
  mesh(root, new THREE.BoxGeometry(1.1, 0.4, 30.6), concrete, -12.55, wallH + 0.1, 4);
  mesh(root, new THREE.BoxGeometry(1.1, 0.4, 30.6), concrete, 12.55, wallH + 0.1, 4);

  // roll-up shutter on back wall
  const shutter = new THREE.Group();
  shutter.position.set(-3.4, 0, 13.03);
  root.add(shutter);
  const shutterMat = new THREE.MeshStandardMaterial({ map: makeMetalTexture('#596166', 0.55), color: 0x9aa0a2, roughness: 0.62, metalness: 0.65 });
  mesh(shutter, new THREE.BoxGeometry(4.5, 4.6, 0.18), shutterMat, 0, 2.3, 0);
  for (let i = 0; i < 22; i++) mesh(shutter, new THREE.BoxGeometry(4.5, 0.055, 0.05), blackMetal, 0, 0.22 + i * 0.2, 0.12);
  mesh(shutter, new THREE.BoxGeometry(4.8, 0.3, 0.3), blackMetal, 0, 4.7, 0.12);
  // graffiti on shutter
  const graffitiKayisi = makeGraffitiTexture('KAYISI', ['#ff7a18', '#ffd35e'], 12);
  const graffitiMat = new THREE.MeshBasicMaterial({ map: graffitiKayisi, transparent: true, depthWrite: false });
  const gPlane = mesh(shutter, new THREE.PlaneGeometry(4.2, 2.1), graffitiMat, 0, 2.25, 0.1);
  gPlane.castShadow = false;
  gPlane.renderOrder = 2;

  // door with warm light
  const door = new THREE.Group(); door.position.set(4.5, 0, 13.06); root.add(door);
  mesh(door, new THREE.BoxGeometry(1.5, 2.9, 0.12), woodDark, 0, 1.45, 0);
  mesh(door, new THREE.BoxGeometry(1.66, 0.16, 0.22), concrete, 0, 2.98, 0);
  mesh(door, new THREE.SphereGeometry(0.04, 10, 8), new THREE.MeshStandardMaterial({ color: 0xd9b56b, metalness: 0.8, roughness: 0.3 }), 0.5, 1.4, 0.1);
  const doorGlow = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 2.8), new THREE.MeshBasicMaterial({ color: 0xffb05a, transparent: true, opacity: 0.55 }));
  doorGlow.position.set(0.7, 1.45, 0.08); door.add(doorGlow);

  // windows on back wall
  const winWarm = makeWindowTexture(true), winCool = makeWindowTexture(false);
  const winMatW = new THREE.MeshBasicMaterial({ map: winWarm });
  const winMatC = new THREE.MeshBasicMaterial({ map: winCool });
  for (const [x, y, w, h, warm] of [[-7.9, 6.7, 1.4, 1.8, true], [-5.9, 7.1, 1.1, 1.4, false], [1.0, 7.2, 1.3, 1.6, false], [8.0, 6.5, 1.5, 1.9, true]]) {
    const frame = new THREE.Group(); frame.position.set(x, y, 13.13); root.add(frame);
    mesh(frame, new THREE.BoxGeometry(w + 0.18, h + 0.18, 0.1), blackMetal, 0, 0, 0);
    const pane = mesh(frame, new THREE.PlaneGeometry(w, h), warm ? winMatW : winMatC, 0, 0, 0.07);
    pane.castShadow = false;
    // window bars
    mesh(frame, new THREE.BoxGeometry(w + 0.2, 0.04, 0.08), blackMetal, 0, -h / 2 - 0.08, 0.06);
    mesh(frame, new THREE.BoxGeometry(0.06, h, 0.08), blackMetal, 0, 0, 0.06);
  }

  // neon sign KAYISI
  const neonGroup = new THREE.Group();
  neonGroup.position.set(0.6, 6.2, 13.12);
  root.add(neonGroup);
  const neonTex = makeNeonTexture();
  const neonMat = new THREE.MeshBasicMaterial({ map: neonTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffc48c });
  const neon = mesh(neonGroup, new THREE.PlaneGeometry(3.6, 1.12), neonMat, 0, 0, 0.06);
  neon.castShadow = false; neon.renderOrder = 3;
  const neonGlow = new THREE.Sprite(glowTexMat(glowOrange, 0xff9a3c, 0.5));
  neonGlow.scale.set(6.8, 2.6, 1); neonGlow.position.set(0, 0, 0.2);
  neonGroup.add(neonGlow);
  // neon support box
  mesh(neonGroup, new THREE.BoxGeometry(3.8, 0.05, 0.1), blackMetal, 0, 0.6, 0.01);
  mesh(neonGroup, new THREE.BoxGeometry(3.8, 0.05, 0.1), blackMetal, 0, -0.6, 0.01);

  // posters
  const posterKinds = ['gym', 'missing', '2016'];
  let pi = 0;
  for (const [x, y, rot] of [[-9.6, 2.2, 0.03], [2.4, 2.6, -0.05], [9.9, 2.1, 0.04], [-1.0, 3.1, 0.02]]) {
    const tex = makePosterTexture(posterKinds[pi % 3]); pi++;
    const p = new THREE.Group(); p.position.set(x, y, 13.06); p.rotation.z = rot; root.add(p);
    mesh(p, new THREE.PlaneGeometry(0.95, 1.34), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92 }), 0, 0, 0.06).castShadow = false;
    mesh(p, new THREE.BoxGeometry(1.0, 1.4, 0.03), blackMetal, 0, 0, 0.03);
    // tape
    mesh(p, new THREE.PlaneGeometry(0.18, 0.08), new THREE.MeshBasicMaterial({ color: 0xd8c7a2, transparent: true, opacity: 0.65 }), -0.4, 0.62, 0.08).castShadow = false;
  }

  // back wall pipes and AC units
  const pipeMat = metalMat;
  for (const [x, y1, y2, z] of [[-11.4, 0.2, 8.8, 12.95], [11.4, 0.2, 8.8, 12.95], [-0.4, 4.8, 9.1, 13.0]]) {
    mesh(root, new THREE.CylinderGeometry(0.11, 0.11, y2 - y1, 12), pipeMat, x, (y1 + y2) / 2, z);
    mesh(root, new THREE.TorusGeometry(0.14, 0.02, 6, 12), rustMat, x, y2 - 0.6, z, Math.PI / 2, 0, 0);
  }
  for (const [x, y] of [[-9.7, 8.2], [6.8, 8.3], [10.6, 6.1]]) {
    mesh(root, new THREE.BoxGeometry(0.85, 0.55, 0.38), metalMat, x, y, 13.12);
    mesh(root, new THREE.CylinderGeometry(0.22, 0.22, 0.05, 16), blackMetal, x, y - 0.05, 13.33, Math.PI / 2, 0, 0);
  }
  // fire escape silhouette on back wall
  const fe = new THREE.Group(); fe.position.set(7.4, 4.5, 12.85); root.add(fe);
  for (let f = 0; f < 3; f++) {
    mesh(fe, new THREE.BoxGeometry(3.2, 0.08, 0.9), blackMetal, 0, f * 1.6, 0);
    mesh(fe, new THREE.BoxGeometry(3.2, 0.7, 0.05), blackMetal, 0, f * 1.6 + 0.35, 0.43);
    for (let i = 0; i < 5; i++) mesh(fe, new THREE.BoxGeometry(0.04, 0.7, 0.04), blackMetal, -1.5 + i * 0.75, f * 1.6 + 0.35, 0.43);
    mesh(fe, new THREE.BoxGeometry(0.08, 1.6, 0.08), blackMetal, -1.55, f * 1.6 + 0.8, 0.4, 0, 0, 0.2);
    mesh(fe, new THREE.BoxGeometry(0.08, 1.6, 0.08), blackMetal, 1.55, f * 1.6 + 0.8, 0.4, 0, 0, -0.2);
  }
  mesh(fe, new THREE.BoxGeometry(0.7, 0.06, 0.06), blackMetal, 1.3, 0.8, 0.43, 0, 0, 0.6);
  mesh(fe, new THREE.BoxGeometry(0.7, 0.06, 0.06), blackMetal, 1.3, 1.3, 0.43, 0, 0, 0.6);
  mesh(fe, new THREE.BoxGeometry(0.7, 0.06, 0.06), blackMetal, 1.3, 1.8, 0.43, 0, 0, 0.6);

  // graffiti tags on back and side walls
  const tag1 = makeTagTexture(6);
  const tagMat = new THREE.MeshBasicMaterial({ map: tag1, transparent: true, depthWrite: false, opacity: 0.6 });
  const tagPlane = mesh(root, new THREE.PlaneGeometry(3.0, 3.0), tagMat, -8.6, 4.9, 13.02);
  tagPlane.castShadow = false;
  const graffiti2 = makeGraffitiTexture('2016', ['#ff3d6e', '#ffd2de'], 21);
  const g2 = mesh(root, new THREE.PlaneGeometry(3.4, 1.7), new THREE.MeshBasicMaterial({ map: graffiti2, transparent: true, depthWrite: false }), 9.0, 4.0, 13.02);
  g2.castShadow = false;
  const graffiti3 = makeGraffitiTexture('DİLSİZ', ['#62d7ff', '#e9fbff'], 77);
  const g3 = mesh(root, new THREE.PlaneGeometry(2.8, 1.4), new THREE.MeshBasicMaterial({ map: graffiti3, transparent: true, depthWrite: false }), -10.5, 5.7, 12.98, 0, 0, 0.05);
  g3.castShadow = false;

  /* -------------------------- fire escape ladders etc -------------------------- */

  // warm interior spill sprite near door
  const spill = new THREE.Sprite(glowTexMat(glowOrange, 0xffb266, 0.33));
  spill.scale.set(3.0, 2.2, 1); spill.position.set(4.5, 1.5, 12.9); root.add(spill);

  /* ------------------------------- props ------------------------------- */
  // dumpster
  const dump = new THREE.Group(); dump.position.set(-8.4, 0, 9.6); dump.rotation.y = 0.18; root.add(dump);
  const dumpMat = new THREE.MeshStandardMaterial({ color: 0x2e4a37, map: makeMetalTexture('#405b48', 0.75), roughness: 0.7, metalness: 0.5 });
  mesh(dump, new THREE.BoxGeometry(2.3, 1.25, 1.15), dumpMat, 0, 0.72, 0);
  mesh(dump, new THREE.BoxGeometry(2.4, 0.12, 1.25), blackMetal, 0, 1.38, -0.1, -0.14);
  mesh(dump, new THREE.BoxGeometry(2.3, 0.08, 1.2), dumpMat, 0, 1.44, -0.28, 0.16);
  for (const [x, z] of [[-1.0, -0.5], [1.0, -0.5], [-1.0, 0.5], [1.0, 0.5]]) {
    mesh(dump, new THREE.CylinderGeometry(0.08, 0.08, 0.18, 8), blackMetal, x, 0.09, z, Math.PI / 2, 0, 0);
  }
  mesh(dump, new THREE.BoxGeometry(0.06, 0.5, 0.98), dumpMat, -1.17, 0.85, 0);
  const dumpGraff = mesh(dump, new THREE.PlaneGeometry(1.7, 0.7), new THREE.MeshBasicMaterial({ map: makeGraffitiTexture('RIPE', ['#f7c94b', '#ff9a2e'], 31), transparent: true, depthWrite: false }), 0, 0.82, 0.586);
  dumpGraff.castShadow = false;
  // bags next to dumpster
  for (let i = 0; i < 6; i++) {
    const b = mesh(root, new THREE.DodecahedronGeometry(0.3 + rand() * 0.2, 2), new THREE.MeshStandardMaterial({ color: 0x14120f, roughness: 0.86 }), -7.0 + rand() * 1.6, 0.27, 8.4 + rand() * 1.8, rand(), rand(), rand());
    b.scale.y = 0.85;
  }

  // crates
  const crateGeo = new THREE.BoxGeometry(1, 1, 1);
  const crates = [
    [6.4, 0.5, 8.2, 1.0, 0.0, 0.15], [7.5, 0.5, 8.0, 0.9, 0.2, -0.1], [6.9, 1.43, 8.1, 0.85, 0.12, 0.4],
    [8.2, 0.6, 5.8, 1.1, 0.3, 0.2], [7.7, 0.4, 4.7, 0.8, -0.2, 0.5], [-7.6, 0.45, 2.3, 1.2, 0.1, 0.2],
  ];
  for (const [x, y, z, s, ry, rz] of crates) {
    const box = mesh(root, crateGeo, cardboardMat, x, y, z, 0, ry, rz);
    box.scale.setScalar(s);
    mesh(root, new THREE.BoxGeometry(1.01, 0.06, 1.01), new THREE.MeshStandardMaterial({ color: 0x6c4b2a, roughness: 0.95 }), x, y + s * 0.5, z, 0, ry, rz).scale.setScalar(s);
  }

  // barrels
  for (const [x, z, h, col] of [[-5.8, 6.1, 1.1, 0x8f3c23], [-6.6, 6.8, 0.9, 0x4f5c51], [9.3, 8.9, 1.0, 0x7a3f22]]) {
    const barrel = new THREE.Group(); barrel.position.set(x, 0, z); root.add(barrel);
    const bm = new THREE.MeshStandardMaterial({ map: makeMetalTexture('#5c5148', 0.8), color: col, roughness: 0.72, metalness: 0.55 });
    mesh(barrel, new THREE.CylinderGeometry(0.34, 0.34, h, 18), bm, 0, h / 2, 0);
    for (const ry of [h * 0.25, h * 0.75]) mesh(barrel, new THREE.TorusGeometry(0.345, 0.025, 6, 20), blackMetal, 0, ry, 0, Math.PI / 2, 0, 0);
    mesh(barrel, new THREE.CylinderGeometry(0.3, 0.3, 0.03, 18), blackMetal, 0, h, 0);
  }
  // fire barrel with fire
  const fireBarrel = new THREE.Group(); fireBarrel.position.set(-4.4, 0, 0.7); root.add(fireBarrel);
  mesh(fireBarrel, new THREE.CylinderGeometry(0.42, 0.38, 1.0, 18, 1, true), rustMat, 0, 0.5, 0);
  mesh(fireBarrel, new THREE.TorusGeometry(0.42, 0.03, 6, 20), blackMetal, 0, 0.96, 0, Math.PI / 2, 0, 0);
  const fireGlow = new THREE.Sprite(glowTexMat(glowOrange, 0xff7a1f, 0.7));
  fireGlow.scale.set(2.8, 2.8, 1); fireGlow.position.set(0, 1.05, 0); fireBarrel.add(fireGlow);
  const flameMat1 = new THREE.SpriteMaterial({ map: glowOrange, color: 0xff6b17, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const flameMat2 = new THREE.SpriteMaterial({ map: glowOrange, color: 0xffd36e, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [];
  for (let i = 0; i < 9; i++) {
    const fl = new THREE.Sprite(i % 2 ? flameMat1 : flameMat2);
    fl.position.set((rand() - 0.5) * 0.3, 1.0 + rand() * 0.35, (rand() - 0.5) * 0.3);
    fl.scale.setScalar(0.28 + rand() * 0.4);
    fireBarrel.add(fl); flames.push({ s: fl, baseY: fl.position.y, ph: rand() * TAU });
  }
  const fireLight = new THREE.PointLight(0xff7a24, 22, 9, 1.8);
  fireLight.position.set(-4.4, 1.5, 0.7); fireLight.castShadow = false;
  root.add(fireLight);
  // crates near fire
  mesh(root, crateGeo, woodMat, -3.2, 0.32, 1.9, 0, 0.4, 0).scale.setScalar(0.65);

  // cones
  for (const [x, z, ry] of [[2.6, 8.9, 0.2], [3.4, 9.6, -0.4], [-6.8, 4.6, 0.7], [9.9, 3.2, 0]]) {
    const cone = new THREE.Group(); cone.position.set(x, 0, z); cone.rotation.y = ry; root.add(cone);
    const orange = new THREE.MeshStandardMaterial({ color: 0xd95818, roughness: 0.8 });
    mesh(cone, new THREE.BoxGeometry(0.34, 0.04, 0.34), orange, 0, 0.02, 0);
    mesh(cone, new THREE.ConeGeometry(0.18, 0.55, 16), orange, 0, 0.3, 0);
    mesh(cone, new THREE.CylinderGeometry(0.095, 0.12, 0.1, 16), new THREE.MeshBasicMaterial({ color: 0xd9d3c2 }), 0, 0.3, 0);
  }

  // pallet leaning on side wall
  const pallet = new THREE.Group(); pallet.position.set(11.6, 1.1, 7.0); pallet.rotation.set(0, -0.4, 0.18); root.add(pallet);
  for (let i = 0; i < 5; i++) mesh(pallet, new THREE.BoxGeometry(1.4, 0.05, 0.16), woodMat, 0, i * 0.24, 0);
  mesh(pallet, new THREE.BoxGeometry(0.12, 1.05, 0.12), woodDark, -0.6, 0.45, 0);
  mesh(pallet, new THREE.BoxGeometry(0.12, 1.05, 0.12), woodDark, 0.6, 0.45, 0);

  // chain-link fence section
  function fence(x, z, ry, w = 4) {
    const f = new THREE.Group(); f.position.set(x, 0, z); f.rotation.y = ry; root.add(f);
    const frameMat = metalMat;
    mesh(f, new THREE.CylinderGeometry(0.045, 0.045, 2.4, 8), frameMat, -w / 2, 1.2, 0);
    mesh(f, new THREE.CylinderGeometry(0.045, 0.045, 2.4, 8), frameMat, w / 2, 1.2, 0);
    mesh(f, new THREE.CylinderGeometry(0.035, 0.035, w, 8), frameMat, 0, 2.38, 0, 0, 0, Math.PI / 2);
    mesh(f, new THREE.CylinderGeometry(0.03, 0.03, w, 8), frameMat, 0, 0.05, 0, 0, 0, Math.PI / 2);
    // chain texture plane
    const chainCanvas = canvas2d(512, 256);
    chainCanvas.ctx.clearRect(0, 0, 512, 256);
    chainCanvas.ctx.strokeStyle = 'rgba(180,190,195,0.55)'; chainCanvas.ctx.lineWidth = 1.2;
    for (let i = -256; i < 768; i += 16) {
      chainCanvas.ctx.beginPath(); chainCanvas.ctx.moveTo(i, 0); chainCanvas.ctx.lineTo(i + 256, 256); chainCanvas.ctx.stroke();
      chainCanvas.ctx.beginPath(); chainCanvas.ctx.moveTo(i, 0); chainCanvas.ctx.lineTo(i - 256, 256); chainCanvas.ctx.stroke();
    }
    const cm = new THREE.MeshBasicMaterial({ map: texFrom(chainCanvas.canvas, { repeat: [2, 1] }), transparent: true, side: THREE.DoubleSide, depthWrite: false });
    const plane = mesh(f, new THREE.PlaneGeometry(w, 2.35), cm, 0, 1.2, 0);
    plane.castShadow = false;
  }
  fence(10.8, -2.2, -Math.PI / 2, 5.5);
  fence(-9.8, -8.3, 0, 4.5);

  // string lights along back wall
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffd9a1, emissive: 0xffa23c, emissiveIntensity: 4.5 });
  const cableMat = new THREE.LineBasicMaterial({ color: 0x1b1712 });
  function stringLights(x0, x1, y, z, sag, count = 18) {
    const pts = [];
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const x = x0 + (x1 - x0) * t;
      const yy = y - Math.sin(t * Math.PI) * sag;
      pts.push(V(x, yy, z));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)), cableMat);
    root.add(line);
    for (let i = 1; i < count; i += 2) {
      const p = curve.getPoint(i / count);
      const bulb = mesh(root, new THREE.SphereGeometry(0.045, 10, 8), bulbMat, p.x, p.y - 0.06, p.z);
      bulb.castShadow = false;
      const halo = new THREE.Sprite(glowTexMat(glowOrange, 0xffb35c, 0.5));
      halo.scale.setScalar(0.55); halo.position.copy(p); halo.position.y -= 0.06; root.add(halo);
    }
  }
  stringLights(-11, 11, 7.4, 12.95, 0.75, 24);
  stringLights(-11, 11, 8.0, 12.9, 1.2, 20);

  // hanging cage lamps
  function cageLamp(x, z, y, color = 0xffb45e, intensity = 15) {
    const g = new THREE.Group(); g.position.set(x, y, z); root.add(g);
    mesh(g, new THREE.CylinderGeometry(0.015, 0.015, 1.8, 6), blackMetal, 0, 0.9, 0);
    mesh(g, new THREE.CylinderGeometry(0.16, 0.22, 0.12, 8), blackMetal, 0, -0.15, 0);
    mesh(g, new THREE.SphereGeometry(0.12, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffd19a }), 0, -0.28, 0).castShadow = false;
    const halo = new THREE.Sprite(glowTexMat(glowOrange, 0xffb35c, 0.8));
    halo.scale.set(1.5, 1.5, 1); halo.position.y = -0.28; g.add(halo);
    const light = new THREE.PointLight(color, intensity, 12, 1.7);
    light.position.y = -0.35; g.add(light);
    // volume cone
    const cone = new THREE.Mesh(new THREE.ConeGeometry(2.6, 5.5, 32, 1, true), new THREE.MeshBasicMaterial({ map: makeConeTexture(), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    cone.position.y = -3.0;
    cone.rotation.x = Math.PI;
    g.add(cone);
    return light;
  }
  cageLamp(-3.6, 7.6, 5.7);
  cageLamp(4.2, 8.4, 6.0);
  cageLamp(-9.0, 1.2, 5.4);

  /* ------------------------------- lighting ------------------------------- */
  scene.add(new THREE.HemisphereLight(0x7b8fc0, 0x241009, 0.55));
  const key = new THREE.DirectionalLight(0xffc28c, 2.15);
  key.position.set(6, 11, 7);
  key.target.position.set(0, 1, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -13; key.shadow.camera.right = 13;
  key.shadow.camera.top = 13; key.shadow.camera.bottom = -13;
  key.shadow.camera.near = 1; key.shadow.camera.far = 35;
  key.shadow.bias = -0.0008;
  key.shadow.normalBias = 0.03;
  scene.add(key); scene.add(key.target);

  const magenta = new THREE.SpotLight(0xff2f72, 240, 30, 0.72, 0.85, 1.3);
  magenta.position.set(-7.5, 7.5, 11.5);
  magenta.target.position.set(0, 1.2, 4);
  scene.add(magenta); scene.add(magenta.target);

  const cyan = new THREE.SpotLight(0x5fd9ff, 170, 28, 0.8, 0.9, 1.4);
  cyan.position.set(8.5, 6.5, 0.5);
  cyan.target.position.set(0, 1.2, 4.5);
  scene.add(cyan); scene.add(cyan.target);

  const warmFront = new THREE.SpotLight(0xffa85f, 130, 24, 0.65, 0.9, 1.2);
  warmFront.position.set(3.0, 3.0, -4.0);
  warmFront.target.position.set(0, 1.4, 4.2);
  scene.add(warmFront); scene.add(warmFront.target);

  // floating dust
  const dustCount = 220;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (rand() - 0.5) * 24;
    dustPos[i * 3 + 1] = 0.2 + rand() * 7;
    dustPos[i * 3 + 2] = (rand() - 0.5) * 20 + 4;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({ color: 0xffd6a0, size: 0.015, transparent: true, opacity: 0.5, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const dust = new THREE.Points(dustGeo, dustMat); root.add(dust);

  // steam sprites
  const smokeTex = makeSmokeTexture();
  const steam = [];
  for (const [x, z, count, power] of [[-2.5, 7.2, 9, 2.2], [4.8, 7.6, 6, 1.6], [-8.8, 11.4, 7, 1.0]]) {
    for (let i = 0; i < count; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: 0.24, depthWrite: false, color: 0x9fb6c2 }));
      sp.position.set(x + (rand() - 0.5) * 0.6, 0.1 + rand() * 0.4, z + (rand() - 0.5) * 0.6);
      const sc = 0.5 + rand() * 0.9; sp.scale.set(sc, sc, 1);
      root.add(sp);
      steam.push({ sp, base: sp.position.clone(), ph: rand() * TAU, power, drift: (rand() - 0.5) * 0.3 });
    }
  }

  // embers
  const embers = [];
  for (let i = 0; i < 22; i++) {
    const e = new THREE.Sprite(glowTexMat(glowOrange, 0xff8a2c, 0.8));
    e.scale.setScalar(0.06 + rand() * 0.08);
    e.position.set(-4.4 + (rand() - 0.5) * 0.4, 0.9 + rand() * 1.2, 0.7 + (rand() - 0.5) * 0.4);
    root.add(e);
    embers.push({ s: e, base: e.position.clone(), ph: rand() * TAU, speed: 0.4 + rand() * 0.8 });
  }

  // ambient particles / gnats
  const gnats = [];
  for (let i = 0; i < 10; i++) {
    const s = new THREE.Sprite(glowTexMat(glowOrange, 0xffcf8a, 0.5));
    s.scale.setScalar(0.05);
    s.position.set((rand() - 0.5) * 8, 1 + rand() * 2.4, 2 + rand() * 6);
    root.add(s); gnats.push({ s, ph: rand() * TAU, base: s.position.clone() });
  }

  // puddle ripple ring sprites (subtle)
  const ripples = [];
  for (const [x, z] of [[3.8, 5.4], [-4.6, 2.8]]) {
    for (let i = 0; i < 2; i++) {
      const r = new THREE.Mesh(new THREE.RingGeometry(0.9, 0.93, 32), new THREE.MeshBasicMaterial({ color: 0xffa24c, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }));
      r.rotation.x = -Math.PI / 2; r.position.set(x, 0.02, z); root.add(r);
      ripples.push({ m: r, ph: i * Math.PI });
    }
  }

  function update(t, dt) {
    const flicker = 0.8 + Math.sin(t * 13.4) * 0.08 + Math.sin(t * 27.1) * 0.05 + Math.sin(t * 43.7) * 0.03;
    fireLight.intensity = 22 * flicker;
    for (const f of flames) {
      f.s.position.y = f.baseY + Math.sin(t * 8 + f.ph) * 0.09;
      f.s.scale.setScalar((0.28 + 0.14 * Math.sin(t * 6 + f.ph)) * (0.65 + flicker * 0.4));
    }
    for (const s of steam) {
      const cyc = (t * 0.06 * s.power + s.ph) % 1;
      s.sp.position.y = s.base.y + cyc * 3.2;
      s.sp.position.x = s.base.x + Math.sin(t * 0.35 + s.ph) * 0.45 + s.drift * cyc;
      s.sp.material.opacity = 0.22 * Math.sin(cyc * Math.PI) * (1 - cyc);
      const sc = 0.6 + cyc * 1.8;
      s.sp.scale.set(sc, sc, 1);
    }
    for (const e of embers) {
      const cyc = (t * 0.18 * e.speed + e.ph) % 1;
      e.s.position.y = e.base.y + cyc * 2.4;
      e.s.position.x = e.base.x + Math.sin(t * 1.4 + e.ph) * 0.25;
      e.s.material.opacity = 0.9 * Math.sin(cyc * Math.PI);
    }
    for (const g of gnats) {
      g.s.position.x = g.base.x + Math.sin(t * 0.7 + g.ph) * 0.4;
      g.s.position.y = g.base.y + Math.sin(t * 1.1 + g.ph * 2) * 0.2;
      g.s.position.z = g.base.z + Math.cos(t * 0.5 + g.ph) * 0.3;
    }
    for (const r of ripples) {
      const cyc = (t * 0.35 + r.ph) % (Math.PI * 2);
      r.m.scale.setScalar(0.7 + Math.sin(cyc) * 0.1 + 0.1);
      r.m.material.opacity = 0.05 + Math.max(0, Math.sin(cyc)) * 0.08;
    }
    dust.rotation.y = t * 0.006;
    neonMat.opacity = 0.82 + Math.sin(t * 2.3) * 0.05 + (Math.random() > 0.995 ? -0.5 : 0);
    neonGlow.material.opacity = 0.4 + Math.sin(t * 2.3) * 0.07;
    key.intensity = 2.15 + Math.sin(t * 0.8) * 0.05;
  }

  return { root, update, lights: { key, magenta, cyan, warmFront, fireLight } };
}
