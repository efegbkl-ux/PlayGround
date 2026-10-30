import * as THREE from '../vendor/three.module.js';
import { makeMetalTexture, makeWoodTexture, canvas2d, texFrom } from './textures.js';

export const WEAPONS = [
  {
    id: 'bat', name: "LIL' SLUGGER", stats: 'BALANCED · 1.0×', damage: 15, reach: 3.0,
    cooldown: 0.58, hitAt: 0.13, duration: 0.46, style: 'swing', color: '#ffb14d',
    sound: 'bat', combo: [0, 1, 2],
  },
  {
    id: 'katana', name: 'THE APRICUTTER', stats: 'FAST · 0.8×', damage: 11, reach: 3.2,
    cooldown: 0.35, hitAt: 0.1, duration: 0.3, style: 'slash', color: '#8ff0ff',
    sound: 'blade', combo: [0, 1, 1],
  },
  {
    id: 'pipe', name: 'RUSTY REUNION', stats: 'WIDE · 1.1×', damage: 18, reach: 3.4,
    cooldown: 0.68, hitAt: 0.16, duration: 0.52, style: 'sweep', color: '#ff9f2e',
    sound: 'pipe', combo: [0, 2],
  },
  {
    id: 'hammer', name: 'WALLOP 9000', stats: 'HEAVY · 1.6×', damage: 30, reach: 3.0,
    cooldown: 0.98, hitAt: 0.25, duration: 0.72, style: 'slam', color: '#ff3d6e',
    sound: 'hammer', combo: [1],
  },
  {
    id: 'chair', name: 'THE CHAIRMAN', stats: 'CHAOS · 1.2×', damage: 21, reach: 3.5,
    cooldown: 0.8, hitAt: 0.2, duration: 0.62, style: 'spin', color: '#ffd36e',
    sound: 'chair', combo: [0, 2],
  },
];

function fabricWrapTexture() {
  const { canvas, ctx } = canvas2d(256, 256);
  ctx.fillStyle = '#25130f'; ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#6d3a2a'; ctx.lineWidth = 9;
  for (let i = -1; i < 9; i++) {
    ctx.beginPath(); ctx.moveTo(0, i * 32); ctx.lineTo(256, i * 32 + 32); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * 32 + 32); ctx.lineTo(256, i * 32); ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(20,8,4,0.5)'; ctx.lineWidth = 1;
  for (let i = 0; i < 256; i += 4) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke(); }
  return texFrom(canvas, { repeat: [2, 3] });
}

export function createWeapon(id) {
  const root = new THREE.Group();
  const meta = WEAPONS.find((w) => w.id === id) || WEAPONS[0];
  const tip = new THREE.Object3D();
  const metal = new THREE.MeshStandardMaterial({ color: 0xcdd5da, metalness: 0.96, roughness: 0.19, envMapIntensity: 1.8 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x878d91, metalness: 0.88, roughness: 0.36, map: makeMetalTexture('#777c80', 0.45) });
  const darkSteel = new THREE.MeshStandardMaterial({ color: 0x3b3d3e, metalness: 0.82, roughness: 0.44, map: makeMetalTexture('#4b4e50', 0.6) });
  const wood = new THREE.MeshStandardMaterial({ color: 0xffffff, map: makeWoodTexture('#7e4a24'), roughness: 0.72, metalness: 0.02 });
  const wrap = new THREE.MeshStandardMaterial({ color: 0xffffff, map: fabricWrapTexture(), roughness: 0.9 });
  const black = new THREE.MeshStandardMaterial({ color: 0x171513, roughness: 0.82, metalness: 0.08 });
  const red = new THREE.MeshStandardMaterial({ color: 0xbd2a35, roughness: 0.55, metalness: 0.05 });
  const tape = new THREE.MeshStandardMaterial({ color: 0xd9cdb4, roughness: 0.95 });

  const add = (geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    m.castShadow = true; m.receiveShadow = true;
    root.add(m); return m;
  };

  if (id === 'bat') {
    const shaft = add(new THREE.CylinderGeometry(0.032, 0.05, 1.24, 18, 1), wood, 0, 0.63, 0);
    shaft.scale.set(1, 1, 1);
    const barrel = add(new THREE.CylinderGeometry(0.075, 0.05, 0.62, 20, 1), wood, 0, 1.36, 0);
    const cap = add(new THREE.SphereGeometry(0.078, 18, 12), wood, 0, 1.67, 0);
    cap.scale.y = 0.7;
    add(new THREE.CylinderGeometry(0.052, 0.054, 0.3, 16), black, 0, 0.17, 0);
    for (let i = 0; i < 4; i++) add(new THREE.TorusGeometry(0.053, 0.006, 6, 20), tape, 0, 0.06 + i * 0.055, 0, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.045, 0.03, 0.05, 14), darkSteel, 0, -0.01, 0);
    // nails / battle scars
    add(new THREE.CylinderGeometry(0.006, 0.006, 0.11, 6), darkSteel, 0.06, 1.48, 0.02, 0, 0, 1.2);
    add(new THREE.CylinderGeometry(0.005, 0.005, 0.09, 6), darkSteel, -0.05, 1.28, 0.03, 0, 0, -1.1);
    add(new THREE.BoxGeometry(0.06, 0.035, 0.002), red, 0.01, 1.15, 0.071);
    tip.position.set(0, 1.72, 0);
    root.userData.length = 1.7;
  } else if (id === 'katana') {
    // handle
    add(new THREE.CylinderGeometry(0.033, 0.036, 0.34, 16), wrap, 0, 0.17, 0);
    add(new THREE.CylinderGeometry(0.042, 0.042, 0.018, 20), darkSteel, 0, 0.02, 0);
    add(new THREE.CylinderGeometry(0.035, 0.035, 0.04, 16), metal, 0, 0.35, 0);
    // tsuba
    add(new THREE.CylinderGeometry(0.105, 0.105, 0.02, 24), darkSteel, 0, 0.38, 0);
    add(new THREE.TorusGeometry(0.09, 0.01, 8, 24), metal, 0, 0.382, 0, Math.PI / 2);
    // curved blade from bent, tapered box
    const bladeGeo = new THREE.BoxGeometry(0.052, 1.06, 0.012, 1, 30, 1);
    const pos = bladeGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = (y + 0.53) / 1.06;
      pos.setX(i, pos.getX(i) * (1 - t * 0.62) + Math.sin(t * Math.PI * 0.5) * 0.062);
      pos.setZ(i, pos.getZ(i) + Math.sin(t * 1.2) * 0.01);
    }
    bladeGeo.computeVertexNormals();
    const blade = add(bladeGeo, metal, 0.1, 0.93, 0);
    add(new THREE.ConeGeometry(0.025, 0.13, 4), metal, 0.145, 1.5, 0, 0, 0, -0.12);
    // hamon-ish inlay
    add(new THREE.BoxGeometry(0.004, 0.86, 0.003), new THREE.MeshBasicMaterial({ color: 0xdff6ff }), 0.123, 1.0, 0.007).material.toneMapped = false;
    tip.position.set(0.15, 1.55, 0);
    root.userData.length = 1.55;
  } else if (id === 'pipe') {
    add(new THREE.CylinderGeometry(0.052, 0.052, 1.32, 20), steel, 0, 0.66, 0);
    add(new THREE.CylinderGeometry(0.058, 0.058, 0.05, 20), darkSteel, 0, 0.22, 0);
    add(new THREE.CylinderGeometry(0.058, 0.058, 0.05, 20), darkSteel, 0, 1.01, 0);
    add(new THREE.CylinderGeometry(0.086, 0.086, 0.11, 6), steel, 0, 1.34, 0);
    add(new THREE.CylinderGeometry(0.072, 0.072, 0.02, 16), darkSteel, 0, 1.4, 0);
    // worn grip tape
    add(new THREE.CylinderGeometry(0.056, 0.056, 0.34, 16), black, 0, 0.34, 0);
    for (let i = 0; i < 5; i++) add(new THREE.TorusGeometry(0.056, 0.004, 5, 16), tape, 0, 0.22 + i * 0.06, 0, Math.PI / 2);
    tip.position.set(0, 1.4, 0);
    root.userData.length = 1.4;
  } else if (id === 'hammer') {
    add(new THREE.CylinderGeometry(0.042, 0.055, 1.42, 16), wood, 0, 0.71, 0);
    add(new THREE.CylinderGeometry(0.058, 0.058, 0.26, 16), black, 0, 0.2, 0);
    // head
    const head = add(new THREE.BoxGeometry(0.56, 0.22, 0.23), darkSteel, 0, 1.46, 0);
    add(new THREE.BoxGeometry(0.1, 0.27, 0.27), darkSteel, -0.3, 1.46, 0);
    add(new THREE.BoxGeometry(0.09, 0.26, 0.25), steel, 0.3, 1.46, 0);
    add(new THREE.BoxGeometry(0.57, 0.035, 0.24), steel, 0, 1.57, 0);
    add(new THREE.BoxGeometry(0.035, 0.05, 0.24), red, 0.1, 1.46, 0);
    // grip wrap
    for (let i = 0; i < 5; i++) add(new THREE.TorusGeometry(0.056, 0.006, 5, 16), tape, 0, 0.13 + i * 0.07, 0, Math.PI / 2);
    tip.position.set(0, 1.6, 0);
    root.userData.length = 1.5;
  } else if (id === 'chair') {
    // grip at one leg, chair extends up
    const legMat = steel;
    add(new THREE.CylinderGeometry(0.022, 0.022, 0.94, 10), legMat, 0, 0.47, 0);
    add(new THREE.CylinderGeometry(0.022, 0.022, 0.94, 10), legMat, 0.16, 0.6, 0.1, 0, 0, -0.11);
    // seat
    add(new THREE.BoxGeometry(0.62, 0.055, 0.52), black, 0.25, 0.92, 0.08, 0.06, 0, 0);
    add(new THREE.BoxGeometry(0.58, 0.02, 0.48), red, 0.25, 0.952, 0.08, 0.06, 0, 0);
    // back
    add(new THREE.BoxGeometry(0.62, 0.52, 0.045), black, 0.25, 1.27, -0.19, 0.2, 0, 0);
    add(new THREE.BoxGeometry(0.56, 0.46, 0.016), red, 0.25, 1.27, -0.163, 0.2, 0, 0);
    // frame tubes
    add(new THREE.CylinderGeometry(0.02, 0.02, 1.05, 8), legMat, -0.02, 1.3, -0.23, 0.16, 0, 0);
    add(new THREE.CylinderGeometry(0.02, 0.02, 1.05, 8), legMat, 0.53, 1.3, -0.23, 0.16, 0, 0);
    add(new THREE.BoxGeometry(0.58, 0.035, 0.03), legMat, 0.25, 1.02, -0.13);
    add(new THREE.BoxGeometry(0.58, 0.035, 0.03), legMat, 0.25, 0.86, 0.28);
    // feet
    add(new THREE.BoxGeometry(0.06, 0.035, 0.3), darkSteel, 0.03, 0.02, 0.03);
    add(new THREE.BoxGeometry(0.06, 0.035, 0.3), darkSteel, 0.47, 0.02, 0.03);
    // little hazard stripe
    add(new THREE.BoxGeometry(0.32, 0.07, 0.005), new THREE.MeshBasicMaterial({ color: 0xffb31a }), 0.25, 0.9, 0.345);
    tip.position.set(0.25, 1.48, -0.2);
    root.userData.length = 1.5;
  }

  root.add(tip);
  root.userData.tip = tip;
  root.userData.meta = meta;
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return root;
}

export function weaponIcon(id) {
  const icons = {
    bat: `<svg viewBox="0 0 32 32" fill="none"><path d="M20.9 3.1c2.6-1 5 .6 5.4 3.1.4 2.4-1.6 4.4-4 3.8l-5.6 12.6-3.4-1.5L18.9 8.4c-1.9-1.6-1.1-4.5 2-5.3Z" fill="currentColor"/><path d="M12.2 21.3l-3.4 7.4c-.4.9-1.5 1.3-2.4.9-.9-.4-1.3-1.5-.9-2.4l3.3-7.4 3.4 1.5Z" fill="currentColor" opacity=".55"/></svg>`,
    katana: `<svg viewBox="0 0 32 32" fill="none"><path d="M28.6 2.7 15.2 22.1l-2.9-2.3L25.8 2.2c.8-.9 2.1-.9 2.8-.1.4.4 0 .3 0 .6Z" fill="currentColor"/><path d="M11.2 20.6 3.8 28c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l7.4-7.4 2.2 2.2Z" fill="currentColor" opacity=".5"/><path d="M13.1 15.4l4.3 3.4-1.5 1.9-4.3-3.5 1.5-1.8Z" fill="currentColor"/></svg>`,
    pipe: `<svg viewBox="0 0 32 32" fill="none"><path d="M21.2 2.4c.8 0 1.4.6 1.4 1.4v3.4h3.3c.8 0 1.5.7 1.5 1.5v2.2c0 .8-.7 1.5-1.5 1.5h-3.3v14.2c0 .8-.7 1.5-1.5 1.5h-2.5c-.8 0-1.5-.7-1.5-1.5V12.4H7.4c-.8 0-1.5-.7-1.5-1.5V8.7c0-.8.7-1.5 1.5-1.5h9.7V3.8c0-.8.6-1.4 1.4-1.4h2.7Z" fill="currentColor"/><path d="M8 17h8v2H8zm0 4h6v2H8z" fill="currentColor" opacity=".35"/></svg>`,
    hammer: `<svg viewBox="0 0 32 32" fill="none"><path d="M16.1 10.6 24 2.7l5.3 5.3-7.9 7.9-5.3-5.3Z" fill="currentColor"/><path d="M14.9 13.2 5.3 22.8c-.8.8-.8 2 0 2.8l1.1 1.1c.8.8 2 .8 2.8 0l9.6-9.6-3.9-3.9Z" fill="currentColor" opacity=".6"/><path d="m3.4 26.2 2.4-2.4 2.4 2.4-1.2 1.2c-.8.8-2.1.8-2.9 0l-.7-.7c-.2-.2-.2-.4 0-.5Z" fill="currentColor"/></svg>`,
    chair: `<svg viewBox="0 0 32 32" fill="none"><path d="M8 3h14v2H8zM8 8h14v2H8zM8 13h14v2H8z" stroke="currentColor" stroke-width="2"/><path d="M9 3v16h2V3H9Zm12 0v16h2V3h-2Z" fill="currentColor"/><path d="M7 19h18v2H7z" fill="currentColor"/><path d="m8 21 2.5 8H8.4l-2.2-8H8Zm16 0-2.5 8h2.1l2.2-8H24Z" fill="currentColor" opacity=".7"/></svg>`,
  };
  return icons[id] || icons.bat;
}

export const WEAPON_IDS = WEAPONS.map((w) => w.id);
