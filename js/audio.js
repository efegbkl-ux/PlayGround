/* Tiny procedural sound design studio — no audio files. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = true;
    this.noiseBuf = null;
  }

  ensure() {
    if (this.ctx) return true;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.5;
    this.master.connect(this.ctx.destination);
    const len = this.ctx.sampleRate * 1.2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuf = buf;
    this.startAmbience();
    return true;
  }

  startAmbience() {
    if (!this.ctx) return;
    const buffer = this.ctx.createBufferSource();
    buffer.buffer = this.noiseBuf;
    buffer.loop = true;
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'lowpass'; filt.frequency.value = 380; filt.Q.value = 0.4;
    const gain = this.ctx.createGain(); gain.gain.value = 0.015;
    buffer.connect(filt).connect(gain).connect(this.master);
    buffer.start();
    const osc = this.ctx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = 55;
    const og = this.ctx.createGain(); og.gain.value = 0.012;
    osc.connect(og).connect(this.master); osc.start();
  }

  noise(dur = 0.2, freq = 1000, q = 1, gain = 0.3, type = 'bandpass') {
    if (!this.ctx || !this.enabled) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain();
    const now = this.ctx.currentTime;
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(now);
    src.stop(now + dur + 0.02);
  }

  tone(freq = 180, dur = 0.18, type = 'sine', gain = 0.25, slide = 0) {
    if (!this.ctx || !this.enabled) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const now = this.ctx.currentTime;
    o.type = type; o.frequency.setValueAtTime(freq, now);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), now + dur);
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.connect(g).connect(this.master);
    o.start(now); o.stop(now + dur + 0.02);
  }

  swing(weapon = 'bat') {
    if (!this.enabled) return;
    this.ensure();
    if (weapon === 'katana') { this.noise(0.16, 2600, 2.5, 0.18); this.tone(720, 0.12, 'triangle', 0.03, -400); }
    else if (weapon === 'hammer') this.noise(0.32, 420, 0.8, 0.2);
    else if (weapon === 'chair') { this.noise(0.22, 800, 1.5, 0.18); this.tone(220, 0.16, 'square', 0.025, -90); }
    else if (weapon === 'pipe') this.noise(0.24, 1500, 2, 0.17);
    else this.noise(0.2, 900, 1.2, 0.17);
  }

  hit(weapon = 'bat', power = 1) {
    if (!this.enabled) return;
    this.ensure();
    const p = Math.min(1.8, power);
    this.tone(90 / p, 0.24, 'sine', 0.28 * p, -50);
    this.noise(0.16, 480, 0.7, 0.24 * p, 'lowpass');
    if (weapon === 'pipe' || weapon === 'hammer') {
      this.tone(540, 0.4, 'triangle', 0.08 * p, -420);
      this.noise(0.22, 2200, 3, 0.12 * p);
    } else if (weapon === 'katana') {
      this.tone(1400, 0.18, 'triangle', 0.045, -900);
      this.noise(0.1, 3200, 2, 0.1);
    } else if (weapon === 'chair') {
      this.noise(0.25, 1200, 2, 0.1);
      this.tone(320, 0.15, 'square', 0.03, -180);
    }
    if (power > 1.3) this.tone(50, 0.5, 'sine', 0.3, -15);
  }

  hurt() {
    if (!this.enabled) return;
    this.ensure();
    this.tone(140, 0.25, 'sawtooth', 0.12, -70);
    this.noise(0.2, 300, 0.8, 0.2, 'lowpass');
  }

  ko() {
    if (!this.enabled) return;
    this.ensure();
    this.tone(60, 0.7, 'sine', 0.34, -30);
    this.tone(180, 0.5, 'triangle', 0.12, -150);
    this.noise(0.6, 700, 0.8, 0.24, 'lowpass');
  }

  special() {
    if (!this.enabled) return;
    this.ensure();
    const now = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(70, now);
    o.frequency.exponentialRampToValueAtTime(600, now + 0.55);
    g.gain.setValueAtTime(0.05, now);
    g.gain.exponentialRampToValueAtTime(0.18, now + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    o.connect(g).connect(this.master); o.start(now); o.stop(now + 0.95);
    this.tone(50, 0.8, 'sine', 0.35, -20);
    this.noise(0.7, 900, 0.8, 0.3, 'lowpass');
  }

  ui() {
    if (!this.enabled) return;
    this.ensure();
    this.tone(520, 0.07, 'triangle', 0.06, 130);
  }

  toggle(on) {
    this.enabled = on;
    if (this.master) this.master.gain.value = on ? 0.5 : 0;
  }
}
