import * as THREE from '../vendor/three.module.js';
import { buildWorld } from './world.js';
import { createApricot, createSkinny, createObese, createHealthPods } from './characters.js';
import { createWeapon, WEAPONS, weaponIcon } from './weapons.js';
import { FX, screenFlash } from './fx.js';
import { AudioEngine } from './audio.js';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const clamp01 = (v) => clamp(v, 0, 1);
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);
const rand = (a, b) => a + Math.random() * (b - a);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

const ARENA_CENTER = V(0, 0, 4.2);
const PLAYER_SPAWN = V(0, 0, 3.0);
const SKINNY_SPAWN = V(-2.85, 0, 5.45);
const OBESE_SPAWN = V(2.85, 0, 5.7);

const canvas = document.getElementById('scene');
const bootEl = document.getElementById('boot');
const titleEl = document.getElementById('titleScreen');
const hudEl = document.getElementById('hud');
const pauseEl = document.getElementById('pauseScreen');
const deadEl = document.getElementById('deadScreen');
const flashEl = document.getElementById('flash');
const announceEl = document.getElementById('announce');
const announceText = document.getElementById('announceText');
const announceKicker = document.getElementById('announceKicker');
const scoreEl = document.getElementById('score');
const kosEl = document.getElementById('kos');
const roundNumEl = document.getElementById('roundNum');
const hpFillEl = document.getElementById('hpFill');
const hpTextEl = document.getElementById('hpText');
const statusEl = document.getElementById('statusText');
const comboWrapEl = document.getElementById('comboWrap');
const comboValEl = document.getElementById('comboVal');
const comboWordEl = document.getElementById('comboWord');
const comboFillEl = document.getElementById('comboFill');
const wpnNameEl = document.getElementById('wpnName');
const wpnStatsEl = document.getElementById('wpnStats');
const weaponSlots = [...document.querySelectorAll('.wpn-slot')];
const weaponToastEl = document.getElementById('weaponToast');
const toastWpnEl = document.getElementById('toastWpn');
const btnStrike = document.getElementById('btnStrike');
const btnSwitch = document.getElementById('btnSwitch');
const btnSpecial = document.getElementById('btnSpecial');
const specialChargeEl = document.getElementById('specialCharge');
const stickZone = document.getElementById('stickZone');
const stickKnob = document.getElementById('stickKnob');
const btnSound = document.getElementById('btnSound');
const btnPause = document.getElementById('btnPause');
const btnPlay = document.getElementById('btnPlay');
const btnResume = document.getElementById('btnResume');
const btnRestart = document.getElementById('btnRestart');
const btnRevive = document.getElementById('btnRevive');
const setTilt = document.getElementById('setTilt');
const setSound = document.getElementById('setSound');
const setCam = document.getElementById('setCam');
const tiltState = document.getElementById('tiltState');
const soundState = document.getElementById('soundState');
const camState = document.getElementById('camState');
const tiltToggle = document.getElementById('tiltToggle');
const soundToggle = document.getElementById('soundToggle');
const camToggle = document.getElementById('camToggle');

// inject weapon icons
weaponSlots.forEach((slot, i) => {
  const icon = slot.querySelector('.wpn-icon');
  if (icon && WEAPONS[i]) icon.innerHTML = weaponIcon(WEAPONS[i].id);
});

let renderer, scene, camera, world, fx, audio;
let apricot, skinny, obese;
let weaponMeshes = [], activeWeaponMesh = null;

const game = {
  started: false,
  paused: false,
  dead: false,
  deadTimer: 0,
  intro: false,
  introT: 0,
  snapCam: false,
  time: 0,
  score: 0,
  kos: 0,
  hp: 100,
  maxHp: 100,
  hurt: 0,
  invuln: 0,
  combo: 0,
  comboT: 0,
  special: 0,
  specialActive: false,
  specialT: 0,
  specialTick: 0,
  weapon: 0,
  attacking: false,
  attack: null,
  attackDir: 1,
  attackCount: 0,
  cooldown: 0,
  weaponPop: 0,
  hitStop: 0,
  shake: 0,
  fovKick: 0,
  moving: false,
  speed: 0,
  autoT: 0,
  autoStep: 0,
  tilt: false,
  tiltYaw: 0,
  tiltPitch: 0,
  camToggle: true,
  round: 1,
  status: 'UNBOTHERED',
  sound: true,
  dashCd: 0,
};
const playerPos = PLAYER_SPAWN.clone();
let playerYaw = 1.25;
const playerVel = V();
const camTarget = V(0, 1.6, 4.2);
const orbitForward = V();
const followLook = V(0, 1.6, 4.2);
let orbitYaw = Math.PI + 0.34;
let orbitPitch = 0.25;
let camDist = 9.4;
const tmpV = V(), tmpV2 = V(), tmpV3 = V();
const desiredCamPos = V(), desiredCamLook = V();
let drag = { active: false, id: null, x: 0, y: 0, moved: 0, down: 0 };
let stick = { active: false, id: null, x: 0, y: 0 };
const input = { x: 0, y: 0 };
const camForward = V(), camRight = V();
const enemies = [];
let enemyToken = null;

/* ------------------------------- helpers ------------------------------- */
function announce(kicker, text, ms = 1900) {
  announceKicker.textContent = kicker;
  announceText.textContent = text;
  announceEl.classList.remove('show');
  void announceEl.offsetWidth;
  announceEl.classList.add('show');
  clearTimeout(announce._t);
  announce._t = setTimeout(() => announceEl.classList.remove('show'), ms);
}
function screenFlashSafe(big) { screenFlash(flashEl, big); }

function updateHUD() {
  scoreEl.textContent = String(Math.floor(game.score)).padStart(6, '0');
  kosEl.textContent = String(game.kos).padStart(2, '0');
  roundNumEl.textContent = String(game.round).padStart(2, '0');
  hpFillEl.style.transform = `scaleX(${clamp01(game.hp / game.maxHp)})`;
  hpFillEl.classList.toggle('is-low', game.hp / game.maxHp < 0.3);
  hpTextEl.textContent = String(Math.max(0, Math.ceil(game.hp)));
  statusEl.textContent = game.status;
  comboWrapEl.classList.toggle('is-on', game.combo > 1 && game.comboT > 0);
  comboValEl.textContent = String(game.combo);
  comboWordEl.textContent = game.combo >= 10 ? 'OBLITERATED' : game.combo >= 7 ? 'PULPED' : game.combo >= 4 ? 'MASHED' : 'TENDERIZED';
  comboFillEl.style.transform = `scaleX(${clamp01(game.comboT / 2.2)})`;
  const charge = Math.round(game.special);
  btnSpecial.style.setProperty('--charge', charge);
  specialChargeEl.style.setProperty('--charge', charge);
  btnSpecial.classList.toggle('is-ready', charge >= 100);
}

function toastWeapon(meta) {
  toastWpnEl.textContent = meta.name;
  weaponToastEl.classList.remove('show');
  void weaponToastEl.offsetWidth;
  weaponToastEl.classList.add('show');
  clearTimeout(toastWeapon._t);
  toastWeapon._t = setTimeout(() => weaponToastEl.classList.remove('show'), 1400);
}

function setWeapon(index, { silent = false, pop = true } = {}) {
  const next = ((index % WEAPONS.length) + WEAPONS.length) % WEAPONS.length;
  if (next === game.weapon && activeWeaponMesh) return;
  game.weapon = next;
  weaponMeshes.forEach((m, i) => { m.visible = i === next; });
  activeWeaponMesh = weaponMeshes[next];
  activeWeaponMesh.visible = true;
  if (pop) game.weaponPop = 1;
  const meta = WEAPONS[next];
  wpnNameEl.textContent = meta.name;
  wpnStatsEl.textContent = meta.stats;
  weaponSlots.forEach((s, i) => s.classList.toggle('is-active', i === next));
  if (!silent && game.started) {
    toastWeapon(meta);
    audio.ui();
  }
}

function cycleWeapon(step = 1) { setWeapon(game.weapon + step, { pop: true }); }
function stubPress(btn) {
  btn.classList.add('is-pressed');
  setTimeout(() => btn.classList.remove('is-pressed'), 110);
}

/* ------------------------------- setup ------------------------------- */
async function boot() {
  try { await document.fonts.load('400 100px Anton'); } catch (e) { /* noop */ }
  await document.fonts.ready;

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 95);
  camera.position.set(7.9, 2.35, 4.9);
  camera.lookAt(-0.6, 1.7, 4.35);

  world = buildWorld(scene, renderer);
  fx = new FX(scene);
  audio = new AudioEngine();

  apricot = createApricot();
  skinny = createSkinny();
  obese = createObese();
  scene.add(apricot.root, skinny.root, obese.root);

  apricot.root.position.copy(PLAYER_SPAWN);
  skinny.root.position.copy(SKINNY_SPAWN);
  obese.root.position.copy(OBESE_SPAWN);
  skinny.root.rotation.y = Math.PI;
  obese.root.rotation.y = Math.PI;
  skinny.root.scale.setScalar(0.94);

  const skinnyPod = createHealthPods('DİLSİZ', '#ff9f2e');
  skinnyPod.sprite.position.set(0, 2.25, 0);
  skinnyPod.sprite.scale.set(0.78, 0.195, 1);
  skinny.root.add(skinnyPod.sprite);
  const obesePod = createHealthPods('2016 GUY', '#ff3d6e');
  obesePod.sprite.position.set(0, 2.45, 0);
  obesePod.sprite.scale.set(0.88, 0.22, 1);
  obese.root.add(obesePod.sprite);

  enemies.push(makeEnemy(skinny, skinnyPod, SKINNY_SPAWN.clone(), 'skinny', 100));
  enemies.push(makeEnemy(obese, obesePod, OBESE_SPAWN.clone(), 'obese', 130));

  weaponMeshes = WEAPONS.map((w) => {
    const m = createWeapon(w.id);
    m.visible = false;
    m.scale.setScalar(0.001);
    apricot.root.add(m);
    return m;
  });
  setWeapon(0, { silent: true, pop: false });
  activeWeaponMesh.scale.setScalar(1);

  skinny.update(0.016, { time: 0, cower: true, hit: 0, ko: false });
  obese.update(0.016, { time: 0, hit: 0, ko: false, walking: false });
  apricot.update(0.016, { time: 0, speed: 0, attacking: false, hurt: 0 });
  updateWeaponVisual(0.016);

  setupInput();
  window.addEventListener('resize', () => onResize());
  window.addEventListener('orientationchange', () => setTimeout(onResize, 120));

  playerYaw = 1.25;
  apricot.root.rotation.y = playerYaw;
  camera.position.set(7.9, 2.35, 4.9);
  camTarget.set(-0.55, 1.65, 4.35);

  renderer.render(scene, camera);
  updateHUD();
  if (new URLSearchParams(location.search).has('debug')) {
    window.__kayisi = {
      game, camera, playerPos, apricot, enemies,
      get camDist() { return camDist; },
      get orbitYaw() { return orbitYaw; },
      get baseFov() { return baseFov; },
    };
  }
  bootEl.style.pointerEvents = 'none';
  setTimeout(() => bootEl.classList.add('is-gone'), 380);
  requestAnimationFrame(loop);
}

function makeEnemy(char, pod, spawn, kind, hp) {
  return {
    char, pod, spawn: spawn.clone(), kind,
    hp, maxHp: hp,
    pos: spawn.clone(),
    vel: V(),
    yaw: Math.PI,
    mode: 'idle',
    timer: 0,
    cooldown: rand(0.6, 1.6),
    attackProgress: 0,
    hitFlash: 0,
    hit: 0,
    koHeight: 0,
    koVel: 0,
    spin: V(),
    level: 0,
    radius: kind === 'obese' ? 0.62 : 0.36,
    damage: kind === 'obese' ? 13 : 8,
    speed: kind === 'obese' ? 1.55 : 1.95,
    spawnAnim: 0,
    windupDur: 0.6,
    baseScale: kind === 'obese' ? 1.0 : 0.94,
  };
}

function onResize() {
  if (!renderer) return;
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

/* ================================================================== *
 *  INPUT                                                             *
 * ================================================================== */
function setupInput() {
  btnPlay.addEventListener('click', startGame);
  btnResume.addEventListener('click', resumeGame);
  btnRestart.addEventListener('click', restartGame);
  btnRevive.addEventListener('click', reviveGame);
  btnPause.addEventListener('click', () => { if (game.started && !game.dead) openPause(); });
  btnSound.addEventListener('click', toggleSound);
  setSound.addEventListener('click', toggleSound);

  weaponSlots.forEach((slot, i) => {
    slot.addEventListener('click', (e) => { e.stopPropagation(); setWeapon(i); });
  });
  btnStrike.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); stubPress(btnStrike); tryAttack(); });
  btnSwitch.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); stubPress(btnSwitch); cycleWeapon(1); });
  btnSpecial.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); stubPress(btnSpecial); trySpecial(); });

  setTilt.addEventListener('click', toggleTilt);
  setCam.addEventListener('click', () => {
    game.camToggle = !game.camToggle;
    camToggle.classList.toggle('is-on', game.camToggle);
    camState.textContent = game.camToggle ? 'ON' : 'OFF';
  });

  const stickBase = stickZone.querySelector('.stick-base');
  const maxStick = 41;
  const updateStickFromEvent = (e) => {
    const r = stickBase.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    let dx = e.clientX - cx, dy = e.clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > maxStick) { dx = dx / len * maxStick; dy = dy / len * maxStick; }
    stick.x = dx / maxStick; stick.y = dy / maxStick;
    stickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
    stickKnob.style.transition = 'none';
  };
  stickZone.addEventListener('pointerdown', (e) => {
    e.preventDefault(); e.stopPropagation();
    stick.active = true; stick.id = e.pointerId;
    stickZone.setPointerCapture(e.pointerId);
    updateStickFromEvent(e);
    if (game.intro) game.introT = 99;
  });
  stickZone.addEventListener('pointermove', (e) => {
    if (!stick.active || e.pointerId !== stick.id) return;
    e.preventDefault(); updateStickFromEvent(e);
  });
  const releaseStick = (e) => {
    if (e.pointerId !== stick.id) return;
    stick.active = false; stick.id = null; stick.x = 0; stick.y = 0;
    stickKnob.style.transform = 'translate(0,0)';
    stickKnob.style.transition = 'transform .12s ease-out';
  };
  stickZone.addEventListener('pointerup', releaseStick);
  stickZone.addEventListener('pointercancel', releaseStick);
  stickZone.addEventListener('lostpointercapture', () => {
    stick.active = false; stick.x = 0; stick.y = 0;
    stickKnob.style.transform = 'translate(0,0)';
  });

  canvas.addEventListener('pointerdown', (e) => {
    if (!game.started || game.paused) return;
    drag.active = true; drag.id = e.pointerId;
    drag.x = e.clientX; drag.y = e.clientY; drag.moved = 0; drag.down = performance.now();
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag.active || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag.x = e.clientX; drag.y = e.clientY;
    drag.moved += Math.abs(dx) + Math.abs(dy);
    if (drag.moved > 4) {
      orbitYaw -= dx * 0.0052;
      orbitPitch = clamp(orbitPitch + dy * 0.0032, -0.06, 0.72);
      if (game.intro) game.introT = 99;
    }
  });
  const endDrag = (e) => {
    if (!drag.active || e.pointerId !== drag.id) return;
    drag.active = false;
    if (drag.moved < 7 && performance.now() - drag.down < 330) tryAttack();
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', () => { drag.active = false; });
  canvas.addEventListener('wheel', (e) => {
    if (!game.started) return;
    e.preventDefault();
    camDist = clamp(camDist + e.deltaY * 0.006, 5.6, 12);
  }, { passive: false });

  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key)) e.preventDefault();
    if (k === 'w' || k === 'arrowup') input.y = -1;
    if (k === 's' || k === 'arrowdown') input.y = 1;
    if (k === 'a' || k === 'arrowleft') input.x = -1;
    if (k === 'd' || k === 'arrowright') input.x = 1;
    if (e.code === 'Space' || k === 'j') { if (game.started && game.paused) return; tryAttack(); }
    if (k === 'q') cycleWeapon(-1);
    if (k === 'e') cycleWeapon(1);
    if (k >= '1' && k <= '5') setWeapon(Number(k) - 1);
    if (e.key === 'Escape' || k === 'p') { if (game.started && !game.dead) { game.paused ? resumeGame() : openPause(); } }
    if (k === 'shift') dash();
    if (!game.started && k === 'enter') startGame();
    if (game.started && game.intro) game.introT = 99;
  });
  window.addEventListener('keyup', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'w' || k === 'arrowup') input.y = input.y < 0 ? 0 : input.y;
    if (k === 's' || k === 'arrowdown') input.y = input.y > 0 ? 0 : input.y;
    if (k === 'a' || k === 'arrowleft') input.x = input.x < 0 ? 0 : input.x;
    if (k === 'd' || k === 'arrowright') input.x = input.x > 0 ? 0 : input.x;
  });
  window.addEventListener('blur', () => {
    input.x = 0; input.y = 0; drag.active = false;
    stick.active = false; stick.x = 0; stick.y = 0;
    stickKnob.style.transform = 'translate(0,0)';
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && game.started && !game.dead) openPause();
  });
  window.addEventListener('deviceorientation', onDeviceOrientation, true);
  const unlock = () => { if (game.started) audio.ensure(); window.removeEventListener('pointerdown', unlock); };
  window.addEventListener('pointerdown', unlock);
}

function dash() {
  if (!game.started || game.paused || game.dead || game.dashCd > 0) return;
  const dir = V(Math.sin(playerYaw), 0, Math.cos(playerYaw));
  if (Math.hypot(input.x, input.y) > 0.1) {
    dir.copy(camForward).multiplyScalar(-input.y).addScaledVector(camRight, input.x).normalize();
  }
  playerVel.addScaledVector(dir, 8.5);
  game.dashCd = 1.1;
  game.shake = Math.max(game.shake, 0.1);
  fx.puff(playerPos.clone().setY(0.1), 6, 0x9c8568, 0.7, 1.6);
}

/* ================================================================== *
 *  START / PAUSE / END                                               *
 * ================================================================== */
function startGame() {
  if (game.started) return;
  game.started = true;
  game.paused = false;
  game.intro = true;
  game.introT = 0;
  game.snapCam = true;
  game.autoT = 0.18;
  game.autoStep = 0;
  playerYaw = Math.PI + 0.08;
  titleEl.classList.add('is-gone');
  hudEl.classList.remove('is-hidden');
  hudEl.setAttribute('aria-hidden', 'false');
  audio.ensure();
  audio.ui();
  game.status = 'CRACKING KNUCKLES';
  setWeapon(0, { silent: true });
  game.weaponPop = 1;
  updateHUD();
}

function openPause() {
  if (game.paused) return;
  game.paused = true;
  pauseEl.classList.remove('is-hidden');
}
function resumeGame() {
  game.paused = false;
  pauseEl.classList.add('is-hidden');
}
function restartGame() {
  pauseEl.classList.add('is-hidden');
  deadEl.classList.add('is-hidden');
  game.paused = false;
  game.dead = false;
  game.deadTimer = 0;
  game.hp = game.maxHp;
  game.score = 0;
  game.kos = 0;
  game.combo = 0;
  game.comboT = 0;
  game.special = 0;
  game.specialActive = false;
  game.intro = true;
  game.introT = 0;
  game.snapCam = true;
  game.autoT = 0.3;
  game.autoStep = 0;
  game.attacking = false;
  game.attack = null;
  game.hurt = 0;
  game.invuln = 1;
  game.round = 1;
  playerPos.copy(PLAYER_SPAWN);
  playerVel.set(0, 0, 0);
  playerYaw = Math.PI + 0.08;
  orbitYaw = Math.PI + 0.34;
  orbitPitch = 0.25;
  apricot.root.rotation.set(0, 0, 0);
  for (const e of enemies) resetEnemy(e, true);
  setWeapon(0, { silent: true });
  game.status = 'UNBOTHERED';
  announce('AGAIN?', 'ALLEY MAYHEM', 1800);
  updateHUD();
}
function reviveGame() {
  deadEl.classList.add('is-hidden');
  game.dead = false;
  game.deadTimer = 0;
  game.paused = false;
  game.hp = game.maxHp;
  game.hurt = 0;
  game.invuln = 2.2;
  game.combo = 0;
  game.comboT = 0;
  game.intro = false;
  game.introT = 99;
  playerPos.copy(PLAYER_SPAWN);
  playerVel.set(0, 0, 0);
  orbitYaw = Math.PI + 0.34;
  for (const e of enemies) {
    if (e.mode === 'ko' || e.hp <= 0) resetEnemy(e, true);
    e.mode = 'chase'; e.timer = 0.6; e.cooldown = 1.2;
  }
  game.status = 'STILL RIPE';
  announce('SECOND WIND', 'BACK IN THE ALLEY', 1800);
  updateHUD();
}

function toggleSound() {
  const on = !(audio.enabled);
  audio.ensure();
  audio.toggle(on);
  game.sound = on;
  btnSound.classList.toggle('is-off', !on);
  soundToggle.classList.toggle('is-on', on);
  soundState.textContent = on ? 'ON' : 'OFF';
}

/* ================================================================== *
 *  COMBAT                                                            *
 * ================================================================== */
function nearestEnemy(max = 99) {
  let best = null, bd = max;
  for (const e of enemies) {
    if (e.hp <= 0 || e.mode === 'ko') continue;
    const d = Math.hypot(e.pos.x - playerPos.x, e.pos.z - playerPos.z);
    if (d < bd) { bd = d; best = e; }
  }
  return best;
}

function turnToward(from, to, rate, dt) {
  const d = ((to - from + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return from + d * damp(rate, dt);
}

function tryAttack() {
  if (!game.started || game.paused || game.dead || game.deadTimer > 0) return;
  if (game.specialActive || game.attacking || game.cooldown > 0) return;
  const meta = WEAPONS[game.weapon];
  const target = nearestEnemy(10);
  if (target) playerYaw = Math.atan2(target.pos.x - playerPos.x, target.pos.z - playerPos.z);
  const dir = V(Math.sin(playerYaw), 0, Math.cos(playerYaw));
  game.attack = { t: 0, duration: meta.duration, hitAt: meta.hitAt, hit: false, style: meta.style, lunge: dir.clone(), meta };
  game.attacking = true;
  game.attackCount++;
  game.attackDir = game.attackCount % 2 === 0 ? -1 : 1;
  game.cooldown = meta.cooldown;
  game.trail = fx.startTrail(meta.color);
  audio.swing(meta.sound);
}

function performHit(meta) {
  const dir = V(Math.sin(playerYaw), 0, Math.cos(playerYaw));
  let hits = 0;
  for (const e of enemies) {
    if (e.hp <= 0 || e.mode === 'ko') continue;
    const dx = e.pos.x - playerPos.x, dz = e.pos.z - playerPos.z;
    const d = Math.hypot(dx, dz);
    const reach = meta.reach + e.radius;
    if (d > reach) continue;
    const nd = d < 0.001 ? 1 : d;
    const dot = (dx / nd) * dir.x + (dz / nd) * dir.z;
    if (meta.style !== 'slam' && meta.style !== 'spin' && dot < -0.15) continue;
    const dmg = meta.damage * (1 + Math.min(0.4, game.combo * 0.012));
    applyEnemyDamage(e, dmg, dx / nd, dz / nd, meta);
    hits++;
  }
  if (hits > 0) {
    game.combo++;
    game.comboT = 2.2;
    game.special = clamp(game.special + 7 + hits * 2, 0, 100);
    game.score += Math.round(meta.damage * 12 * (1 + game.combo * 0.12) * hits);
    game.shake = Math.max(game.shake, 0.12 + meta.damage / 140);
    game.hitStop = meta.damage > 22 ? 0.075 : 0.04;
    game.fovKick = Math.max(game.fovKick, meta.damage > 22 ? 2.5 : 1.1);
    audio.hit(meta.sound, meta.damage / 15);
    if (meta.damage > 22) screenFlashSafe(false);
    if (game.combo === 4) announce('COMBO × 4', 'MASHED', 1200);
    if (game.combo === 8) { announce('COMBO × 8', 'PULPED', 1300); game.special = clamp(game.special + 15, 0, 100); }
    if (game.combo === 12) announce('COMBO × 12', 'OBLITERATED', 1500);
  } else {
    const at = playerPos.clone().addScaledVector(dir, meta.reach * 0.7).setY(1.1);
    fx.puff(at, 2, 0x7c6a55, 0.4, 0.8);
  }
}

function applyEnemyDamage(e, dmg, nx, nz, meta) {
  e.hp = Math.max(0, e.hp - dmg);
  e.hit = 1;
  e.hitFlash = 1;
  e.pod.setHealth(e.hp / e.maxHp);
  const hitPos = e.pos.clone().add(V(0, e.kind === 'obese' ? 1.05 : 0.95, 0));
  hitPos.x += rand(-0.15, 0.15); hitPos.z += rand(-0.1, 0.1);
  const power = meta.damage / 15;
  const comics = meta.id === 'katana' ? ['SHING!', 'SLICE!', 'SNIP!'] : meta.id === 'hammer' ? ['KA-BOOM!', 'WHAM!', 'BONK!'] : meta.id === 'pipe' ? ['CLANG!', 'DONG!', 'THUD!'] : meta.id === 'chair' ? ['CHAIR!', 'SMACK!', 'OOF!'] : ['POW!', 'THWACK!', 'CRACK!'];
  fx.impact(hitPos, V(nx, 0.35, nz), {
    color: meta.color, power: Math.min(1.8, power), comic: comics[(Math.random() * comics.length) | 0],
    debris: meta.id === 'chair' ? 10 : 5, ringSize: 0.8,
  });
  if (meta.style === 'slam') {
    fx.ring(e.pos.clone().setY(0.05), 0xffb35c, 2.2, 1.4);
    fx.puff(e.pos.clone().setY(0.1), 8, 0x8c7a63, 1.1, 2.2);
  }
  if (meta.style === 'spin') fx.ring(playerPos.clone().setY(0.06), 0xffd36e, 2.6, 1.2);
  const knock = 3.2 + power * 2.4;
  e.vel.x += nx * knock; e.vel.z += nz * knock;
  if (e.mode !== 'ko') { e.mode = 'stagger'; e.timer = 0.42 + Math.random() * 0.2; e.attackProgress = 0; }
  if (enemyToken === e) enemyToken = null;
  if (e.hp <= 0) koEnemy(e, nx, nz, power);
}

function koEnemy(e, nx = 0, nz = 1, power = 1) {
  if (e.mode === 'ko') return;
  e.mode = 'ko';
  e.timer = 3.1;
  e.koHeight = 0;
  e.koVel = 4.4 + power * 1.2;
  e.vel.x += nx * (5 + power * 2);
  e.vel.z += nz * (5 + power * 2);
  e.spin.set(rand(-7, 7), rand(-4, 4), rand(-7, 7));
  e.pod.sprite.visible = false;
  e.hit = 1;
  if (enemyToken === e) enemyToken = null;
  fx.impact(e.pos.clone().add(V(0, 1, 0)), V(nx, 1, nz), { color: 0xffd36e, power: 2, comic: 'K.O.!', comicColor: '#ff3d6e', debris: 12, ringSize: 2.4 });
  fx.ring(e.pos.clone().setY(0.05), 0xff3d6e, 3.2, 1.8);
  game.kos++;
  game.score += 300;
  game.special = clamp(game.special + 16, 0, 100);
  game.shake = Math.max(game.shake, 0.4);
  game.fovKick = 3.5;
  screenFlashSafe(true);
  audio.ko();
  announce('K.O. ' + String(game.kos).padStart(2, '0'), e.kind === 'obese' ? 'BELLY UP' : 'SIGNED OFF', 1600);
  game.round = 1 + Math.floor(game.kos / 2);
}

function damagePlayer(amount, source) {
  if (game.dead || game.invuln > 0 || game.specialActive || game.intro) return;
  game.hp = Math.max(0, game.hp - amount);
  game.hurt = 1;
  game.invuln = 0.8;
  game.combo = 0;
  game.comboT = 0;
  game.shake = Math.max(game.shake, 0.35);
  screenFlashSafe(true);
  audio.hurt();
  const dir = V(playerPos.x - source.pos.x, 0, playerPos.z - source.pos.z).normalize();
  playerVel.addScaledVector(dir, 4);
  fx.impact(playerPos.clone().setY(1.4), dir, { color: 0xff3d6e, power: 1, comic: 'OOF!', comicColor: '#ffb2c4', debris: 0, ringSize: 0, vertical: false });
  if (game.hp <= 0) {
    game.dead = true;
    game.deadTimer = 1.2;
    game.attacking = false;
    game.attack = null;
    game.status = 'OUT OF JUICE';
    announce('OUT OF JUICE', 'APRICOT DOWN', 1800);
    game.shake = 0.8;
    audio.ko();
  }
}

function trySpecial() {
  if (!game.started || game.paused || game.dead || game.specialActive) return;
  if (game.special < 100) { toastSpecialLocked(); return; }
  game.special = 0;
  game.specialActive = true;
  game.specialT = 0;
  game.specialTick = 0;
  game.attacking = false;
  game.attack = null;
  game.invuln = 2.3;
  announce('FINISHER', 'APRICOT ANNIHILATION', 2100);
  audio.special();
  screenFlashSafe(true);
  game.shake = 0.9;
  game.fovKick = 6;
  fx.ring(playerPos.clone().setY(0.05), 0xff3d6e, 4.5, 2);
}

function toastSpecialLocked() {
  toastWpnEl.textContent = 'FINISHER NOT READY';
  weaponToastEl.classList.remove('show');
  void weaponToastEl.offsetWidth;
  weaponToastEl.classList.add('show');
  clearTimeout(toastWeapon._t);
  toastWeapon._t = setTimeout(() => weaponToastEl.classList.remove('show'), 1100);
  audio.ui();
}

/* ================================================================== *
 *  PLAYER UPDATE                                                     *
 * ================================================================== */
function updatePlayer(dt) {
  game.hurt = Math.max(0, game.hurt - dt * 2.4);
  game.invuln = Math.max(0, game.invuln - dt);
  game.cooldown = Math.max(0, game.cooldown - dt);
  game.dashCd = Math.max(0, game.dashCd - dt);
  game.weaponPop = Math.max(0, game.weaponPop - dt * 5.2);
  if (game.comboT > 0) {
    game.comboT -= dt;
    if (game.comboT <= 0) { game.combo = 0; game.comboT = 0; }
  }

  camForward.copy(camTarget).sub(camera.position); camForward.y = 0;
  if (camForward.lengthSq() < 0.001) camForward.set(0, 0, 1);
  camForward.normalize();
  camRight.set(camForward.z, 0, -camForward.x);

  let ix = input.x, iy = input.y;
  if (stick.active) { ix += stick.x; iy += stick.y; }
  const ilen = Math.hypot(ix, iy);
  if (ilen > 1) { ix /= ilen; iy /= ilen; }

  const move = V().addScaledVector(camForward, -iy).addScaledVector(camRight, ix);
  const wantsMove = move.lengthSq() > 0.002;
  if (wantsMove) move.normalize();

  const active = game.started && !game.paused;
  const speedNow = wantsMove && active && !game.specialActive && !game.dead ? 4.6 : 0;
  playerVel.x += (move.x * speedNow - playerVel.x) * damp(12, dt);
  playerVel.z += (move.z * speedNow - playerVel.z) * damp(12, dt);
  playerPos.addScaledVector(playerVel, dt);
  game.speed = Math.hypot(playerVel.x, playerVel.z);
  game.moving = wantsMove && game.speed > 0.3;

  const dx = playerPos.x - ARENA_CENTER.x, dz = playerPos.z - ARENA_CENTER.z;
  const dd = Math.hypot(dx, dz), maxR = 8.15;
  if (dd > maxR) { playerPos.x = ARENA_CENTER.x + dx / dd * maxR; playerPos.z = ARENA_CENTER.z + dz / dd * maxR; }
  playerPos.z = clamp(playerPos.z, -6.2, 11.2);
  playerPos.x = clamp(playerPos.x, -10.8, 10.8);

  const nearest = nearestEnemy(8.5);
  const tableau = game.intro && game.introT < 1.35;
  if (!game.attacking && !game.specialActive && game.started) {
    if (tableau) {
      // Hold the hero pose: the apricot pivots to face the opening camera
      // while both victims are framed over his shoulders.
      playerYaw = turnToward(
        playerYaw,
        Math.atan2(camera.position.x - playerPos.x, camera.position.z - playerPos.z),
        9,
        dt
      );
    } else if (nearest) {
      playerYaw = turnToward(playerYaw, Math.atan2(nearest.pos.x - playerPos.x, nearest.pos.z - playerPos.z), 5, dt);
    } else if (wantsMove) {
      playerYaw = turnToward(playerYaw, Math.atan2(move.x, move.z), 13, dt);
    }
  }

  if (game.specialActive) {
    game.specialT += dt;
    playerYaw += dt * (1.8 + game.specialT * 2.2);
    game.specialTick -= dt;
    if (game.specialTick <= 0) {
      game.specialTick = 0.22;
      for (const e of enemies) {
        if (e.hp <= 0 || e.mode === 'ko') continue;
        const ex = e.pos.x - playerPos.x, ez = e.pos.z - playerPos.z;
        const ed = Math.hypot(ex, ez);
        if (ed < 5.4) {
          const nx = ex / (ed || 1), nz = ez / (ed || 1);
          applyEnemyDamage(e, 9, nx, nz, { ...WEAPONS[4], color: 0xff9f2e, damage: 9, style: 'spin' });
        }
      }
      fx.ring(playerPos.clone().setY(0.06), 0xffd36e, 2.4 + game.specialT, 1.2);
      fx.sparkBurst(playerPos.clone().setY(1.2), V(0, 1, 0), 0xffd36e, 10, 1.2, 2);
      game.shake = Math.max(game.shake, 0.18);
      if (game.specialT > 0.3 && game.specialT < 1.7) audio.hit('hammer', 1.1);
    }
    if (game.specialT > 1.9) {
      game.specialActive = false;
      fx.ring(playerPos.clone().setY(0.05), 0xff3d6e, 6.2, 2.4);
      fx.sparkBurst(playerPos.clone().setY(1.4), V(0, 1, 0), 0xff9f2e, 40, 2, 3);
      game.shake = 0.5;
      screenFlashSafe(true);
    }
  }

  if (game.attacking && game.attack) {
    const a = game.attack;
    a.t += dt;
    const p = clamp01(a.t / a.duration);
    playerPos.addScaledVector(a.lunge, dt * 2.4 * Math.sin(Math.PI * p));
    if (!a.hit && a.t >= a.hitAt) {
      a.hit = true;
      performHit(a.meta);
    }
    if (a.t >= a.duration) { game.attacking = false; game.attack = null; }
    for (const e of enemies) {
      if (e.mode === 'ko' || e.hp <= 0) continue;
      const ex = playerPos.x - e.pos.x, ez = playerPos.z - e.pos.z;
      const ed = Math.hypot(ex, ez);
      const min = 0.9 + e.radius;
      if (ed < min && ed > 0.001) {
        playerPos.x = e.pos.x + ex / ed * min;
        playerPos.z = e.pos.z + ez / ed * min;
      }
    }
  }

  if (game.speed > 5.6 && Math.random() < dt * 20) fx.puff(playerPos.clone().setY(0.12), 2, 0x9c8568, 0.55, 1.2);
  if (game.moving && Math.random() < dt * 6) fx.puff(playerPos.clone().setY(0.08).add(V(rand(-0.2, 0.2), 0, rand(-0.2, 0.2))), 1, 0x6f5c49, 0.32, 0.5);

  apricot.root.position.copy(playerPos);
  apricot.root.rotation.y = playerYaw;

  const attackMeta = game.attack ? game.attack.meta : null;
  const attackProgress = game.attack ? clamp01(game.attack.t / game.attack.duration) : (game.specialActive ? (game.specialT * 1.6) % 1 : 0);
  const style = game.specialActive ? 'spin' : (attackMeta ? attackMeta.style : 'swing');
  apricot.update(dt, {
    time: game.time,
    speed: game.speed,
    attacking: !!game.attacking || game.specialActive,
    attackProgress,
    attackStyle: style,
    attackDir: game.attackDir,
    hurt: game.hurt,
    ko: game.dead,
    lookBack: 0,
  });

  updateWeaponVisual(dt);

  if (game.dead) {
    game.deadTimer -= dt;
    if (game.deadTimer <= 0 && deadEl.classList.contains('is-hidden')) {
      game.paused = true;
      deadEl.classList.remove('is-hidden');
    }
  }

  if (game.dead) game.status = 'OUT COLD';
  else if (game.specialActive) game.status = 'ANNIHILATING';
  else if (game.combo >= 8) game.status = 'ON A RAMPAGE';
  else if (game.hurt > 0.3) game.status = 'MILDLY ANNOYED';
  else game.status = 'UNBOTHERED';
}

function updateWeaponVisual(dt) {
  if (!activeWeaponMesh) return;
  apricot.root.updateMatrixWorld(true);
  const handWorld = apricot.rightHand.getWorldPosition(tmpV);
  activeWeaponMesh.position.copy(apricot.root.worldToLocal(handWorld.clone()));
  // seat the grip inside the fist instead of floating at the fingertips
  activeWeaponMesh.position.x += 0.07;
  activeWeaponMesh.position.y += 0.015;
  activeWeaponMesh.position.z += 0.045;
  const e = weaponEuler();
  activeWeaponMesh.rotation.set(e.x, e.y, e.z, 'YXZ');
  const pop = game.weaponPop;
  activeWeaponMesh.scale.setScalar(pop > 0 ? 0.55 + (1 - pop) * 0.45 : 1);
  activeWeaponMesh.visible = true;

  if (game.attacking && game.attack) {
    const p = game.attack.t / game.attack.duration;
    if (p > 0.12 && p < 0.8) {
      activeWeaponMesh.updateMatrixWorld(true);
      activeWeaponMesh.userData.tip.getWorldPosition(tmpV2);
      const baseWorld = apricot.rightHand.getWorldPosition(tmpV3);
      fx.pushTrail(game.trail, baseWorld, tmpV2, dt);
    }
  }
}

function weaponEuler() {
  const a = game.attack;
  const meta = a ? a.meta : WEAPONS[game.weapon];
  const p = a ? clamp01(a.t / a.duration) : 0;
  const style = game.specialActive ? 'spin' : (meta.style || 'swing');
  if (!game.attacking && !game.specialActive) {
    const idleY = Math.sin(game.time * 1.7) * 0.025;
    return { x: -0.36 + idleY, y: 0.24 + Math.sin(game.time * 1.1) * 0.02, z: -0.5 };
  }
  if (style === 'slam') {
    const wind = clamp01(p / 0.42);
    const down = clamp01((p - 0.42) / 0.2);
    const back = clamp01((p - 0.62) / 0.38);
    const x = lerp(lerp(-1.55, -1.95, wind), 2.1, down) - back * 1.2;
    return { x, y: 0.0, z: lerp(lerp(-0.28, -0.42, wind), -0.08, down) };
  }
  if (style === 'spin') {
    const spin = game.specialActive ? game.specialT * 9 : p * TAU;
    return { x: 1.22, y: spin, z: 1.22 };
  }
  if (style === 'slash') {
    const hit = clamp01((p - 0.24) / 0.3);
    return {
      x: lerp(0.55, 1.18, hit),
      y: lerp(-0.55 * game.attackDir, 0.5 * game.attackDir, hit),
      z: lerp(1.35 * game.attackDir, -1.15 * game.attackDir, hit),
    };
  }
  const wind = clamp01(p / 0.3);
  const hit = clamp01((p - 0.26) / 0.32);
  const rec = clamp01((p - 0.62) / 0.38);
  const swipe = style === 'sweep' ? 1.15 : 1.0;
  const x = lerp(lerp(-0.9, -1.15, wind), 1.25, hit) - rec * 1.1;
  const z = lerp(lerp(-0.45, -1.05, wind), -1.7, hit) * swipe + rec * 0.8;
  return { x, y: Math.sin(p * Math.PI) * 0.3, z };
}

/* ================================================================== *
 *  ENEMIES                                                           *
 * ================================================================== */
function resetEnemy(e, instant = false) {
  e.level++;
  e.maxHp = (e.kind === 'obese' ? 130 : 100) + (e.level - 1) * 22;
  e.hp = e.maxHp;
  e.pos.copy(e.spawn);
  e.vel.set(0, 0, 0);
  e.mode = 'chase';
  e.timer = 0; e.cooldown = rand(1.2, 2.2);
  e.hit = 0; e.hitFlash = 0;
  e.koHeight = 0; e.koVel = 0;
  e.yaw = Math.PI;
  e.pod.sprite.visible = true;
  e.pod.setHealth(1);
  e.char.body.rotation.set(0, 0, 0);
  e.char.root.rotation.set(0, Math.PI, 0);
  e.char.root.position.copy(e.pos);
  e.char.root.scale.setScalar(instant ? e.baseScale : 0.25);
  e.spawnAnim = instant ? 0 : 1;
  if (enemyToken === e) enemyToken = null;
  if (!instant) {
    fx.ring(e.pos.clone().setY(0.05), 0xff9f2e, 2.0, 1.2);
    fx.puff(e.pos.clone().setY(0.2), 6, 0x8b7660, 0.9, 1.4);
  }
}

function updateEnemies(dt) {
  for (const e of enemies) {
    if (e.hitFlash > 0) e.hitFlash = Math.max(0, e.hitFlash - dt * 4.5);
    if (e.hit > 0) e.hit = Math.max(0, e.hit - dt * 3.5);
    const flash = e.hitFlash;
    for (const m of e.char.flashMats) {
      if (m.emissive) {
        m.emissive.setRGB(1, 0.55, 0.18);
        m.emissiveIntensity = flash * 2.4;
      }
    }
    if (e.char.printMats) for (const m of e.char.printMats) {
      if (m.emissive) { m.emissive.setRGB(1, 0.4, 0.1); m.emissiveIntensity = flash * 0.7; }
    }

    if (e.mode === 'ko') {
      e.timer -= dt;
      e.pos.addScaledVector(e.vel, dt);
      e.vel.x *= Math.exp(-dt * 1.1); e.vel.z *= Math.exp(-dt * 1.1);
      e.koVel -= 16 * dt;
      e.koHeight = Math.max(0, e.koHeight + e.koVel * dt);
      if (e.koHeight === 0 && e.koVel < 0) e.koVel = 0;
      e.char.root.position.set(e.pos.x, e.koHeight, e.pos.z);
      e.char.root.rotation.x += e.spin.x * dt;
      e.char.root.rotation.y += e.spin.y * dt;
      e.char.root.rotation.z += e.spin.z * dt;
      e.char.update(dt, { time: game.time, hit: 0, ko: true, cower: false });
      if (e.timer <= 0) {
        resetEnemy(e);
        announce('ROUND ' + String(game.round).padStart(2, '0'), e.kind === 'obese' ? 'THE 2016 GUY RETURNS' : 'THE MUTE IS BACK', 1400);
      }
      continue;
    }

    if (e.spawnAnim > 0) {
      e.spawnAnim = Math.max(0, e.spawnAnim - dt * 3);
      e.char.root.scale.setScalar(e.baseScale * (1 - e.spawnAnim * 0.75));
    } else if (e.char.root.scale.x !== e.baseScale) {
      e.char.root.scale.setScalar(e.baseScale);
    }

    const dx = playerPos.x - e.pos.x, dz = playerPos.z - e.pos.z;
    const dist = Math.hypot(dx, dz);
    if (!game.dead) e.yaw = turnToward(e.yaw, Math.atan2(dx, dz), 8, dt);

    let animAttack = false;
    let animProgress = 0;

    if (!game.started) {
      e.mode = 'idle';
      e.char.update(dt, { time: game.time + (e.kind === 'obese' ? 1.4 : 0), cower: e.kind === 'skinny', hit: e.hit, ko: false, attack: false, walking: false });
      e.char.root.position.set(e.pos.x, 0, e.pos.z);
      e.char.root.rotation.set(0, e.yaw, 0);
      continue;
    }

    if (game.dead || game.paused) {
      e.char.update(dt, { time: game.time, cower: e.kind === 'skinny', hit: e.hit, ko: false, attack: false, walking: false });
      e.char.root.position.set(e.pos.x, 0, e.pos.z);
      e.char.root.rotation.set(0, e.yaw, 0);
      continue;
    }

    if (e.mode === 'stagger') {
      e.timer -= dt;
      e.pos.addScaledVector(e.vel, dt);
      e.vel.multiplyScalar(Math.exp(-dt * 5.5));
      if (e.timer <= 0) { e.mode = game.intro ? 'idle' : 'chase'; e.cooldown = rand(0.5, 1.3); }
      e.char.root.rotation.z = Math.sin(game.time * 20) * e.hit * 0.12;
    } else if (e.mode === 'windup') {
      e.timer -= dt;
      animAttack = true;
      animProgress = clamp01(1 - e.timer / e.windupDur) * 0.55;
      if (e.timer <= 0) {
        e.mode = 'strike'; e.timer = 0.2;
        if (dist < 3.3) damagePlayer(e.damage, e);
        audio.swing(e.kind === 'obese' ? 'hammer' : 'bat');
        fx.ring(playerPos.clone().setY(0.05), 0xff6b8a, 1.6, 0.8);
        enemyToken = null;
      }
    } else if (e.mode === 'strike') {
      e.timer -= dt;
      animAttack = true;
      animProgress = 0.55 + clamp01(1 - e.timer / 0.2) * 0.35;
      if (e.timer <= 0) { e.mode = 'recover'; e.timer = 0.48; e.cooldown = rand(1.15, 2.2); }
    } else if (e.mode === 'recover') {
      e.timer -= dt;
      animAttack = true;
      animProgress = 0.9;
      const back = V(-dx, 0, -dz).normalize().multiplyScalar(dt * 0.9);
      e.pos.add(back);
      if (e.timer <= 0) e.mode = 'chase';
    } else {
      e.timer -= dt;
      e.cooldown -= dt;
      if (game.intro) {
        if (game.introT > 1.35) e.pos.addScaledVector(V(dx, 0, dz).normalize(), dt * 0.5);
      } else if (dist > 2.25) {
        e.pos.addScaledVector(V(dx, 0, dz).normalize(), dt * e.speed);
      } else {
        const strafe = e.kind === 'obese' ? 1 : -1;
        e.pos.x += -dz / (dist || 1) * dt * 0.75 * strafe;
        e.pos.z += dx / (dist || 1) * dt * 0.75 * strafe;
        if (dist < e.radius + 0.8) {
          e.pos.x -= dx / (dist || 1) * dt * 0.8;
          e.pos.z -= dz / (dist || 1) * dt * 0.8;
        }
      }
      if (!game.intro && dist < 3.0 && e.cooldown <= 0 && !enemyToken) {
        e.mode = 'windup';
        e.windupDur = e.kind === 'obese' ? 0.72 : 0.58;
        e.timer = e.windupDur;
        e.attackProgress = 0;
        enemyToken = e;
        fx.popup('!', e.pos.clone().add(V(0, e.kind === 'obese' ? 2.5 : 2.2, 0)), '#ff6b8a', 0.7, rand(-0.2, 0.2));
        fx.ring(e.pos.clone().setY(0.05), 0xff6b8a, 1.4, 0.6);
      }
    }

    const cdx = e.pos.x - ARENA_CENTER.x, cdz = e.pos.z - ARENA_CENTER.z;
    const cd = Math.hypot(cdx, cdz);
    if (cd > 8.3) { e.pos.x = ARENA_CENTER.x + cdx / cd * 8.3; e.pos.z = ARENA_CENTER.z + cdz / cd * 8.3; }
    e.pos.x = clamp(e.pos.x, -10.6, 10.6);
    e.pos.z = clamp(e.pos.z, -5.6, 11.0);

    for (const other of enemies) {
      if (other === e) continue;
      const ox = e.pos.x - other.pos.x, oz = e.pos.z - other.pos.z;
      const od = Math.hypot(ox, oz);
      const min = e.radius + other.radius + 0.2;
      if (od < min && od > 0.001) {
        e.pos.x += ox / od * (min - od) * 0.5;
        e.pos.z += oz / od * (min - od) * 0.5;
      }
    }
    if (game.intro) {
      const ex = e.pos.x - playerPos.x, ez = e.pos.z - playerPos.z, ed = Math.hypot(ex, ez);
      if (ed < 1.2 && ed > 0.001) { e.pos.x = playerPos.x + ex / ed * 1.2; e.pos.z = playerPos.z + ez / ed * 1.2; }
    }

    e.char.root.position.set(e.pos.x, 0, e.pos.z);
    e.char.root.rotation.set(0, e.yaw, e.mode === 'stagger' ? Math.sin(game.time * 20) * e.hit * 0.08 : 0);
    e.char.update(dt, {
      time: game.time + (e.kind === 'obese' ? 1.4 : 0),
      cower: e.kind === 'skinny' && !animAttack,
      hit: e.hit,
      ko: false,
      attack: animAttack,
      attackProgress: animProgress,
      walking: e.mode === 'chase',
      bounce: 0,
    });
  }
}

/* ================================================================== *
 *  AUTO DEMO / INTRO                                                 *
 * ================================================================== */
function updateIntro(dt) {
  if (!game.intro) return;
  if (game.introT < 90) game.introT += dt;
  if (game.introT >= 3.6) {
    game.intro = false;
    game.introT = 99;
    game.status = 'UNBOTHERED';
    announce('ROUND ' + String(game.round).padStart(2, '0'), 'ALLEY MAYHEM', 1800);
  }
  if (game.attacking || game.introT >= 90) return;
  // A clean hero tableau for the first beat, then the alley erupts.
  if (game.introT < 1.35) return;
  game.autoT -= dt;
  if (game.autoT > 0) return;
  game.autoT = 0.62;
  const target = nearestEnemy(10);
  if (!target) return;
  const dx = target.pos.x - playerPos.x, dz = target.pos.z - playerPos.z;
  const dist = Math.hypot(dx, dz);
  playerYaw = Math.atan2(dx, dz);
  if (dist > 2.9) {
    playerVel.x += dx / dist * 2.6;
    playerVel.z += dz / dist * 2.6;
    game.autoT = 0.28;
    return;
  }
  game.autoStep++;
  if (game.autoStep === 2) setWeapon(3, { pop: true });
  else if (game.autoStep === 4) setWeapon(1, { pop: true });
  else if (game.autoStep === 6) setWeapon(2, { pop: true });
  else if (game.autoStep === 8) setWeapon(4, { pop: true });
  tryAttack();
}

/* ================================================================== *
 *  CAMERA                                                            *
 * ================================================================== */
const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
let baseFov = isCoarse ? 48 : 43;

function updateCamera(dt) {
  if (!camera) return;
  const mobile = window.innerWidth < 760 || isCoarse;
  const portrait = window.innerHeight > window.innerWidth;
  let desiredFov = mobile ? 56 : 47;
  let rate = 6;

  if (!game.started) {
    const t = game.time;
    if (mobile) {
      // Wider portrait framing so the whole apricot fits beside the title type.
      desiredCamPos.set(8.9 + Math.sin(t * 0.21) * 0.18, 2.55 + Math.sin(t * 0.34) * 0.04, 5.15 + Math.cos(t * 0.17) * 0.15);
      desiredCamLook.set(-0.45, 1.62, 4.15);
      desiredFov = portrait ? 55 : 50;
    } else {
      desiredCamPos.set(7.9 + Math.sin(t * 0.21) * 0.22, 2.3 + Math.sin(t * 0.34) * 0.04, 4.9 + Math.cos(t * 0.17) * 0.18);
      desiredCamLook.set(-0.6, 1.7, 4.35);
      desiredFov = 41;
    }
    rate = 3;
  } else if (game.intro && game.introT < 3.6) {
    // Opening hero tableau: face the apricot dead-on with both victims
    // framed behind him, then sweep around into the over-the-shoulder fight cam.
    const p = clamp01(game.introT / 3.6);
    const ease = p * p * (3 - 2 * p);
    const angle = lerp(Math.PI + 0.08, Math.PI + 0.34, ease);
    const radius = lerp(mobile ? 9.8 : 9.5, (mobile ? camDist * (portrait ? 1.18 : 1.06) : camDist * 0.98), ease);
    const camH = lerp(2.35, 2.32, ease) + Math.sin(game.time * 0.4) * 0.025;
    desiredCamPos.set(
      playerPos.x + Math.sin(angle) * radius,
      camH,
      playerPos.z + Math.cos(angle) * radius
    );
    const lead = lerp(0, 1.35, clamp01((p - 0.3) / 0.7));
    desiredCamLook.set(playerPos.x + 0.45, lerp(1.52, 1.38, ease), playerPos.z);
    desiredCamLook.x += Math.sin(playerYaw) * lead;
    desiredCamLook.z += Math.cos(playerYaw) * lead;
    desiredFov = lerp(mobile ? 50 : 45, mobile ? (portrait ? 59 : 52) : 49, ease);
    rate = 4.5;
  } else {
    const nearest = nearestEnemy(10);
    orbitForward.set(Math.sin(playerYaw), 0, Math.cos(playerYaw));
    const targetPoint = playerPos.clone().add(V(0, 1.48, 0));
    if (nearest) targetPoint.lerp(nearest.pos.clone().add(V(0, 1.18, 0)), 0.22);
    const yaw = orbitYaw + game.tiltYaw;
    const pitch = clamp(orbitPitch + game.tiltPitch, -0.02, 0.75);
    const dist = camDist * (mobile ? (portrait ? 1.18 : 1.07) : 1);
    desiredCamPos.set(
      targetPoint.x + Math.sin(yaw) * Math.cos(pitch) * dist,
      targetPoint.y + Math.sin(pitch) * dist + 1.02,
      targetPoint.z + Math.cos(yaw) * Math.cos(pitch) * dist
    );
    desiredCamLook.copy(targetPoint).addScaledVector(orbitForward, 1.18);
    desiredCamLook.y += 0.18;
    desiredFov = mobile ? (portrait ? 58 : 52) : 47;
    rate = 4.2;
  }

  if (game.snapCam) {
    // Drop straight into the staged shot on the first frame; keeps the
    // opening tableau stable even when the first rendered frames are slow.
    camera.position.copy(desiredCamPos);
    camTarget.copy(desiredCamLook);
    game.snapCam = false;
  } else {
    camera.position.lerp(desiredCamPos, damp(rate, dt));
    camTarget.lerp(desiredCamLook, damp(rate + 1.5, dt));
  }

  const sway = 0.012;
  const shake = game.shake * 0.5;
  camera.position.x += Math.sin(game.time * 0.83) * sway + (Math.random() - 0.5) * shake;
  camera.position.y += Math.cos(game.time * 1.1) * sway * 0.6 + (Math.random() - 0.5) * shake;
  camera.position.z += Math.sin(game.time * 0.67) * sway * 0.7;
  camTarget.x += Math.sin(game.time * 0.61) * 0.008;
  camTarget.y += Math.cos(game.time * 0.77) * 0.008;

  baseFov += (desiredFov - baseFov) * damp(3.5, dt);
  const fov = baseFov + game.fovKick;
  if (Math.abs(camera.fov - fov) > 0.01) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
  camera.lookAt(camTarget);
}

/* ================================================================== *
 *  TILT                                                              *
 * ================================================================== */
function onDeviceOrientation(e) {
  if (!game.tilt) return;
  const gamma = clamp(e.gamma || 0, -42, 42);
  const beta = clamp(e.beta || 0, -25, 55);
  game.tiltYaw = -gamma * 0.012;
  game.tiltPitch = (beta - 38) * 0.0024;
}

async function toggleTilt() {
  audio.ensure();
  if (!game.tilt) {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission();
        if (res !== 'granted') { tiltState.textContent = 'BLOCKED · enable in Settings'; return; }
      } catch (err) {
        tiltState.textContent = 'UNAVAILABLE ON THIS DEVICE';
        return;
      }
    }
    game.tilt = true;
    tiltToggle.classList.add('is-on');
    tiltState.textContent = 'ON · tilt to orbit';
    game.tiltYaw = 0; game.tiltPitch = 0;
  } else {
    game.tilt = false;
    tiltToggle.classList.remove('is-on');
    tiltState.textContent = 'OFF · tap to enable';
    game.tiltYaw = 0; game.tiltPitch = 0;
  }
}

/* ================================================================== *
 *  MAIN LOOP                                                         *
 * ================================================================== */
function updateGame(dt) {
  if (!game.started) {
    apricot.update(dt, { time: game.time, speed: 0, attacking: false, hurt: 0, ko: false });
    updateWeaponVisual(dt);
    updateEnemies(dt);
  } else if (game.dead) {
    updatePlayer(dt);
    updateEnemies(dt);
    if (game.deadTimer <= 0 && deadEl.classList.contains('is-hidden')) {
      game.paused = true;
      deadEl.classList.remove('is-hidden');
    }
  } else {
    updateIntro(dt);
    updatePlayer(dt);
    updateEnemies(dt);
  }
  updateHUD();
}

let lastTime = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  const raw = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;
  game.time += raw;

  if (!game.paused) {
    const step = game.hitStop > 0 ? raw * 0.1 : raw;
    if (game.hitStop > 0) game.hitStop = Math.max(0, game.hitStop - raw);
    updateGame(step);
    fx.update(step);
    world.update(game.time, raw);
  } else {
    world.update(game.time, raw * 0.15);
    if (fx) fx.update(raw * 0.2);
  }
  game.shake *= Math.exp(-raw * 7.5);
  if (game.shake < 0.001) game.shake = 0;
  game.fovKick *= Math.exp(-raw * 7);
  if (game.fovKick < 0.001) game.fovKick = 0;
  updateCamera(raw);
  renderer.render(scene, camera);
}

boot().catch((err) => {
  console.error(err);
  bootEl.innerHTML = '<div style="max-width:340px;text-align:center;font-family:Inter,Arial,sans-serif;font-size:12px;line-height:1.7;color:#d9c7ad">The alley could not be rendered.<br/><span style="color:#ff9f2e">' + String(err.message || err) + '</span></div>';
});
