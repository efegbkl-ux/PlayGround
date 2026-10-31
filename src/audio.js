export class Sound {
  constructor() {
    this.ctx = null
    this.master = null
    this.noise = null
    this.ambient = null
    this.muted = false
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    this.ctx = new AudioCtx()
    this.master = this.ctx.createGain()
    this.master.gain.value = this.muted ? 0 : 0.55
    this.master.connect(this.ctx.destination)

    const length = this.ctx.sampleRate * 2
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1
    this.noise = buffer

    this.startAmbience()
  }

  startAmbience() {
    if (!this.ctx || this.ambient) return
    const ctx = this.ctx
    const bed = ctx.createGain()
    bed.gain.value = 0.035
    bed.connect(this.master)

    // Low, grimy room tone.
    const osc = ctx.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.value = 43
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 120
    const g = ctx.createGain()
    g.gain.value = 0.5
    osc.connect(lp).connect(g).connect(bed)
    osc.start()

    const osc2 = ctx.createOscillator()
    osc2.type = 'sine'
    osc2.frequency.value = 86
    const g2 = ctx.createGain()
    g2.gain.value = 0.22
    osc2.connect(g2).connect(bed)
    osc2.start()

    // Distant crowd murmur.
    const src = ctx.createBufferSource()
    src.buffer = this.noise
    src.loop = true
    const band = ctx.createBiquadFilter()
    band.type = 'bandpass'
    band.frequency.value = 430
    band.Q.value = 0.55
    const crowdGain = ctx.createGain()
    crowdGain.gain.value = 0.26
    src.connect(band).connect(crowdGain).connect(bed)
    src.start()

    this.ambient = bed
  }

  setMuted(muted) {
    this.muted = muted
    if (this.master) this.master.gain.setTargetAtTime(muted ? 0 : 0.55, this.ctx.currentTime, 0.04)
  }

  noiseBurst(duration = 0.2, { type = 'bandpass', frequency = 900, q = 0.8, gain = 0.2, slide = 0 } = {}) {
    if (!this.ctx || this.muted) return
    const ctx = this.ctx
    const now = ctx.currentTime
    const src = ctx.createBufferSource()
    src.buffer = this.noise
    src.playbackRate.value = 0.8 + Math.random() * 0.4
    const filter = ctx.createBiquadFilter()
    filter.type = type
    filter.frequency.setValueAtTime(frequency, now)
    if (slide) filter.frequency.exponentialRampToValueAtTime(Math.max(60, frequency + slide), now + duration)
    filter.Q.value = q
    const env = ctx.createGain()
    env.gain.setValueAtTime(0.0001, now)
    env.gain.exponentialRampToValueAtTime(gain, now + 0.012)
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    src.connect(filter).connect(env).connect(this.master)
    src.start(now)
    src.stop(now + duration + 0.03)
  }

  tone(freq, endFreq, duration, { type = 'sine', gain = 0.2, delay = 0, filter = 0 } = {}) {
    if (!this.ctx || this.muted) return
    const ctx = this.ctx
    const now = ctx.currentTime + delay
    const osc = ctx.createOscillator()
    osc.type = type
    osc.frequency.setValueAtTime(freq, now)
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration)
    const env = ctx.createGain()
    env.gain.setValueAtTime(0.0001, now)
    env.gain.exponentialRampToValueAtTime(gain, now + 0.01)
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    let node = osc
    if (filter) {
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = filter
      node.connect(lp)
      node = lp
    }
    node.connect(env).connect(this.master)
    osc.start(now)
    osc.stop(now + duration + 0.03)
  }

  whoosh(strength = 1) {
    this.noiseBurst(0.18 + strength * 0.06, { frequency: 700 + strength * 350, q: 1.1, gain: 0.09 + strength * 0.03, slide: -450 })
  }

  impact(kind = 'fist', strength = 1) {
    this.tone(120 + Math.random() * 30, 38, 0.18 + strength * 0.05, { type: 'sine', gain: 0.24 + strength * 0.07 })
    this.noiseBurst(0.09, { type: 'highpass', frequency: 900, q: 0.5, gain: 0.16 })
    if (kind === 'metal') {
      this.tone(1180, 540, 0.22, { type: 'triangle', gain: 0.12 })
      this.tone(780, 310, 0.3, { type: 'square', gain: 0.055, delay: 0.01 })
    } else if (kind === 'wood') {
      this.tone(340, 120, 0.16, { type: 'square', gain: 0.09 })
      this.noiseBurst(0.1, { frequency: 420, q: 0.5, gain: 0.12 })
    } else if (kind === 'pan') {
      this.tone(940, 740, 0.32, { type: 'triangle', gain: 0.14 })
      this.tone(1320, 960, 0.24, { type: 'sine', gain: 0.08, delay: 0.005 })
    }
  }

  oof() {
    this.tone(210 + Math.random() * 60, 70, 0.28, { type: 'sawtooth', gain: 0.12, filter: 900 })
    this.noiseBurst(0.14, { frequency: 300, q: 0.6, gain: 0.08 })
  }

  hurt() {
    this.tone(90, 45, 0.3, { type: 'square', gain: 0.16, filter: 500 })
    this.noiseBurst(0.2, { frequency: 250, q: 0.4, gain: 0.12 })
  }

  cheer() {
    if (!this.ctx || this.muted) return
    this.noiseBurst(0.8, { type: 'bandpass', frequency: 800, q: 0.45, gain: 0.12 })
    this.tone(420, 620, 0.5, { type: 'sine', gain: 0.02 })
  }

  ko() {
    this.tone(220, 55, 0.9, { type: 'sawtooth', gain: 0.16, filter: 700 })
    this.noiseBurst(0.6, { frequency: 260, q: 0.4, gain: 0.1 })
  }

  start() {
    this.tone(70, 150, 0.22, { type: 'square', gain: 0.14, filter: 500 })
    this.cheer()
  }
}
