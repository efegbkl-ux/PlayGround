import * as THREE from '../vendor/three.module.js';
import { makeBurstTexture, makeGlowTexture, makeSmokeTexture, texFrom, canvas2d } from './textures.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const rand = (a, b) => a + Math.random() * (b - a);
const TAU = Math.PI * 2;

function popupTexture(text, color) {
  return makeBurstTexture(text, color);
}

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.glow = makeGlowTexture('255,190,110');
    this.glowPink = makeGlowTexture('255,80,140');
    this.glowCyan = makeGlowTexture('120,235,255');
    this.smoke = makeSmokeTexture();
    this.sparks = [];
    this.debris = [];
    this.rings = [];
    this.puffs = [];
    this.popups = [];
    this.trails = [];
    this.flashes = [];
    this.popupCache = new Map();

    // pre-warm pools
    for (let i = 0; i < 110; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glow, color: 0xffb45e, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      s.visible = false; s.renderOrder = 8; scene.add(s);
      this.sparks.push({ s, life: 0, max: 1, vel: V(), grav: 7, size: 0.1 });
    }
    const debrisGeo = new THREE.BoxGeometry(0.06, 0.05, 0.04);
    for (let i = 0; i < 46; i++) {
      const m = new THREE.Mesh(debrisGeo, new THREE.MeshStandardMaterial({ color: 0x6f5a41, roughness: 0.9, metalness: 0.1 }));
      m.visible = false; m.castShadow = true; scene.add(m);
      this.debris.push({ m, life: 0, max: 1, vel: V(), spin: V(), grav: 14 });
    }
    for (let i = 0; i < 12; i++) {
      const r = new THREE.Mesh(
        new THREE.RingGeometry(0.86, 1, 48),
        new THREE.MeshBasicMaterial({ color: 0xffb35c, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      r.rotation.x = -Math.PI / 2; r.visible = false; r.renderOrder = 6; scene.add(r);
      this.rings.push({ m: r, life: 0, max: 1, size: 1, vertical: false });
    }
    for (let i = 0; i < 34; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.smoke, color: 0x9b8266, transparent: true, opacity: 0,
        depthWrite: false,
      }));
      s.visible = false; scene.add(s);
      this.puffs.push({ s, life: 0, max: 1, vel: V(), size: 0.6 });
    }
  }

  sparkBurst(pos, dir = V(0, 1, 0), color = 0xffb35c, count = 14, power = 1, spread = 1) {
    const col = new THREE.Color(color);
    let spawned = 0;
    for (const p of this.sparks) {
      if (spawned >= count) break;
      if (p.life > 0) continue;
      p.life = p.max = rand(0.24, 0.56) * (0.7 + power * 0.3);
      p.s.visible = true;
      p.s.position.copy(pos).add(V(rand(-0.08, 0.08), rand(-0.08, 0.08), rand(-0.08, 0.08)));
      p.vel.set(
        dir.x * rand(1, 4) * spread + rand(-2.6, 2.6),
        dir.y * rand(1, 4) + rand(0.4, 3.4),
        dir.z * rand(1, 4) * spread + rand(-2.6, 2.6)
      ).multiplyScalar(power * 0.85);
      p.grav = 8;
      p.size = rand(0.05, 0.16) * (0.7 + power * 0.45);
      p.s.scale.setScalar(p.size);
      p.s.material.color.copy(col).offsetHSL(rand(-0.03, 0.03), 0, rand(-0.05, 0.12));
      p.s.material.opacity = 1;
      spawned++;
    }
    // ground dust
    for (let i = 0; i < Math.min(8, count); i++) {
      const p = this.puffs.find((q) => q.life <= 0);
      if (!p) break;
      p.life = p.max = rand(0.5, 1.1);
      p.s.visible = true;
      p.s.position.set(pos.x + rand(-0.4, 0.4), Math.max(0.15, pos.y - 1.2 + rand(-0.2, 0.4)), pos.z + rand(-0.4, 0.4));
      p.vel.set(rand(-1.4, 1.4), rand(0.2, 1.1), rand(-1.4, 1.4));
      p.size = rand(0.5, 1.2);
      p.s.scale.setScalar(p.size);
      p.s.material.color.set(0x9b8266);
      p.s.material.opacity = 0.3;
    }
  }

  debrisBurst(pos, dir = V(0, 1, 0), count = 8, color = 0x6f5a41, power = 1) {
    let spawned = 0;
    for (const d of this.debris) {
      if (spawned >= count) break;
      if (d.life > 0) continue;
      d.life = d.max = rand(0.8, 1.7);
      d.m.visible = true;
      d.m.position.copy(pos);
      d.m.material.color.set(color);
      d.vel.set(dir.x * rand(1, 4) + rand(-3, 3), rand(2, 5.5) * power, dir.z * rand(1, 4) + rand(-3, 3));
      d.spin.set(rand(-9, 9), rand(-9, 9), rand(-9, 9));
      const sc = rand(0.5, 1.4); d.m.scale.setScalar(sc);
      spawned++;
    }
  }

  ring(pos, color = 0xffb35c, size = 1, power = 1, vertical = false) {
    const r = this.rings.find((q) => q.life <= 0);
    if (!r) return;
    r.life = r.max = 0.42 + power * 0.12;
    r.size = size * (0.7 + power * 0.5);
    r.m.visible = true;
    r.m.position.copy(pos);
    r.m.position.y = vertical ? pos.y : 0.04;
    r.m.scale.setScalar(0.24);
    r.m.material.color.set(color);
    r.m.material.opacity = 0.95;
    r.vertical = vertical;
    if (vertical) r.m.rotation.x = 0;
    else r.m.rotation.x = -Math.PI / 2;
  }

  puff(pos, count = 3, color = 0x8b7660, size = 0.8, speed = 1) {
    for (let i = 0; i < count; i++) {
      const p = this.puffs.find((q) => q.life <= 0);
      if (!p) break;
      p.life = p.max = rand(0.45, 0.95);
      p.s.visible = true;
      p.s.position.copy(pos).add(V(rand(-0.2, 0.2), rand(-0.05, 0.1), rand(-0.2, 0.2)));
      p.vel.set(rand(-speed, speed), rand(0.3, 1.1), rand(-speed, speed));
      p.size = size * rand(0.7, 1.3);
      p.s.scale.setScalar(p.size);
      p.s.material.color.set(color);
      p.s.material.opacity = 0.25;
    }
  }

  popup(text, pos, color = '#ffd35e', size = 1.1, tilt = 0) {
    let tex = this.popupCache.get(text + color);
    if (!tex) {
      tex = popupTexture(text, color);
      this.popupCache.set(text + color, tex);
    }
    let p = this.popups.find((q) => q.life <= 0);
    if (!p) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
      s.renderOrder = 30; this.scene.add(s);
      p = { s, life: 0, max: 1, vel: V() };
      this.popups.push(p);
    }
    p.s.material.map = tex;
    p.s.material.opacity = 1;
    p.s.material.rotation = tilt;
    p.s.visible = true;
    p.s.position.copy(pos);
    p.life = p.max = 0.85;
    p.baseScale = size;
    p.s.scale.set(size * 0.4, size * 0.25, 1);
    p.vel.set(rand(-0.2, 0.2), rand(1.2, 2.0), rand(-0.2, 0.2));
  }

  impact(pos, dir, { color = 0xffb35c, power = 1, comic = null, debris = 6, ringSize = 1, vertical = false, comicColor = '#ffd35e' } = {}) {
    this.sparkBurst(pos, dir, color, Math.round(10 + power * 10), power, 1);
    if (debris) this.debrisBurst(pos, dir, Math.round(debris * Math.min(2, power)), 0x6f5a41, power);
    if (ringSize > 0) this.ring(pos, color, ringSize, power, vertical);
    if (comic) this.popup(comic, pos.clone().add(V(rand(-0.2, 0.2), 0.9, rand(-0.2, 0.2))), comicColor, 0.95 + power * 0.25, rand(-0.2, 0.2));
  }

  startTrail(color = 0x8ff0ff) {
    const segs = 22;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(segs * 2 * 3);
    const colors = new Float32Array(segs * 2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const idx = [];
    for (let i = 0; i < segs - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = i * 2 + 2, d = i * 2 + 3;
      idx.push(a, b, c, b, d, c);
    }
    geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
    const m = new THREE.Mesh(geo, mat);
    m.frustumCulled = false;
    m.renderOrder = 7;
    this.scene.add(m);
    const trail = { m, points: [], life: 0, max: 0.26, color: new THREE.Color(color), active: true, segs, seeded: false };
    for (let i = 0; i < segs; i++) trail.points.push({ a: V(), b: V(), t: 0 });
    this.trails.push(trail);
    return trail;
  }

  pushTrail(trail, base, tip, dt) {
    if (!trail) return;
    if (!trail.seeded) {
      // Start every segment on the weapon so the first frame cannot draw a
      // huge ribbon from the world origin to the blade.
      for (const p of trail.points) { p.a.copy(base); p.b.copy(tip); p.t = 0; }
      trail.seeded = true;
    }
    const p = trail.points.pop();
    p.a.copy(base); p.b.copy(tip); p.t = 0;
    trail.points.unshift(p);
    trail.active = true;
    trail.life = trail.max;
  }

  update(dt) {
    for (const p of this.sparks) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.s.visible = false; continue; }
      p.vel.y -= p.grav * dt;
      p.vel.multiplyScalar(1 - dt * 0.9);
      p.s.position.addScaledVector(p.vel, dt);
      p.s.material.opacity = Math.min(1, p.life / (p.max * 0.6));
      p.s.scale.setScalar(p.size * (0.6 + p.life / p.max * 0.7));
    }
    for (const d of this.debris) {
      if (d.life <= 0) continue;
      d.life -= dt;
      if (d.life <= 0) { d.m.visible = false; continue; }
      d.vel.y -= d.grav * dt;
      d.m.position.addScaledVector(d.vel, dt);
      if (d.m.position.y < 0.05) { d.m.position.y = 0.05; d.vel.y *= -0.32; d.vel.x *= 0.7; d.vel.z *= 0.7; d.spin.multiplyScalar(0.72); }
      d.m.rotation.x += d.spin.x * dt; d.m.rotation.y += d.spin.y * dt; d.m.rotation.z += d.spin.z * dt;
    }
    for (const r of this.rings) {
      if (r.life <= 0) continue;
      r.life -= dt;
      if (r.life <= 0) { r.m.visible = false; continue; }
      const p = 1 - r.life / r.max;
      r.m.scale.setScalar(0.18 + p * r.size);
      r.m.material.opacity = (1 - p) * 0.85;
      if (!r.vertical) r.m.rotation.z += dt * 0.6;
    }
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.s.visible = false; continue; }
      p.vel.multiplyScalar(1 - dt * 1.4);
      p.s.position.addScaledVector(p.vel, dt);
      p.s.scale.setScalar(p.size * (1 + (1 - p.life / p.max) * 1.4));
      p.s.material.opacity = 0.28 * (p.life / p.max);
    }
    for (const p of this.popups) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.s.visible = false; continue; }
      const age = 1 - p.life / p.max;
      p.s.position.addScaledVector(p.vel, dt * 0.6);
      p.vel.y += dt * 0.5;
      const sc = p.baseScale * (age < 0.16 ? 0.4 + age / 0.16 * 0.75 : 1.15 - age * 0.2);
      p.s.scale.set(sc * 1.7, sc, 1);
      p.s.material.opacity = age > 0.72 ? (1 - age) / 0.28 : 1;
    }
    for (const tr of this.trails) {
      const pts = tr.points;
      const pos = tr.m.geometry.attributes.position;
      const col = tr.m.geometry.attributes.color;
      for (let i = 0; i < tr.segs; i++) {
        const p = pts[i];
        const alpha = Math.max(0, 1 - i / (tr.segs * 0.9));
        pos.setXYZ(i * 2, p.a.x, p.a.y, p.a.z);
        pos.setXYZ(i * 2 + 1, p.b.x, p.b.y, p.b.z);
        col.setXYZ(i * 2, tr.color.r * alpha, tr.color.g * alpha, tr.color.b * alpha);
        col.setXYZ(i * 2 + 1, tr.color.r * alpha, tr.color.g * alpha, tr.color.b * alpha);
      }
      pos.needsUpdate = true; col.needsUpdate = true;
      if (!tr.active) {
        tr.m.material.opacity -= dt * 3.8;
        if (tr.m.material.opacity <= 0) { tr.m.visible = false; }
      } else {
        tr.m.visible = true;
        tr.m.material.opacity = 0.9;
        tr.active = false;
      }
    }
  }

  clearTrails() {
    for (const t of this.trails) t.m.visible = false;
  }
}

export function screenFlash(el, big = false) {
  el.classList.remove('hit', 'big');
  void el.offsetWidth;
  el.classList.add(big ? 'big' : 'hit');
}
