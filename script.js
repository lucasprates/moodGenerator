const APP_VERSION = "0.1.0";

const SCENES = [
  {
    id: "forest-dawn",
    name: "Forest Dawn",
    accent: "#ffc86f",
    background:
      "radial-gradient(circle at 18% 14%, rgba(255, 214, 128, 0.42), transparent 33%), radial-gradient(circle at 80% 18%, rgba(145, 213, 176, 0.28), transparent 42%), linear-gradient(162deg, #1f4233 0%, #2c5f4a 45%, #508f75 100%)",
  },
  {
    id: "cabin-window",
    name: "Cabin Window",
    accent: "#ffb767",
    background:
      "radial-gradient(circle at 70% 22%, rgba(255, 197, 104, 0.35), transparent 35%), radial-gradient(circle at 12% 80%, rgba(89, 118, 162, 0.33), transparent 42%), linear-gradient(145deg, #262736 0%, #3e3548 45%, #6f4e4d 100%)",
  },
  {
    id: "alpine-night",
    name: "Alpine Night",
    accent: "#a2d4ff",
    background:
      "radial-gradient(circle at 24% 14%, rgba(190, 224, 255, 0.35), transparent 32%), radial-gradient(circle at 74% 64%, rgba(111, 147, 205, 0.26), transparent 45%), linear-gradient(160deg, #1b2436 0%, #273a54 44%, #395e85 100%)",
  },
  {
    id: "neon-city",
    name: "Neon City",
    accent: "#ff9a58",
    background:
      "radial-gradient(circle at 22% 28%, rgba(97, 206, 255, 0.3), transparent 36%), radial-gradient(circle at 78% 30%, rgba(255, 147, 104, 0.32), transparent 38%), linear-gradient(170deg, #1a1f35 0%, #2b294d 42%, #4f3156 100%)",
  },
  {
    id: "ocean-twilight",
    name: "Ocean Twilight",
    accent: "#9de5d4",
    background:
      "radial-gradient(circle at 82% 13%, rgba(158, 240, 220, 0.38), transparent 32%), radial-gradient(circle at 15% 74%, rgba(126, 152, 221, 0.32), transparent 42%), linear-gradient(158deg, #1d2d49 0%, #285775 45%, #3f8d8e 100%)",
  },
  {
    id: "desert-dusk",
    name: "Desert Dusk",
    accent: "#f8c07d",
    background:
      "radial-gradient(circle at 26% 18%, rgba(255, 214, 137, 0.32), transparent 35%), radial-gradient(circle at 78% 38%, rgba(198, 126, 126, 0.25), transparent 40%), linear-gradient(160deg, #4d3037 0%, #7f4e45 44%, #b68462 100%)",
  },
  {
    id: "meadow-stars",
    name: "Meadow Stars",
    accent: "#ffd98f",
    background:
      "radial-gradient(circle at 14% 12%, rgba(255, 237, 170, 0.24), transparent 32%), radial-gradient(circle at 84% 62%, rgba(140, 221, 167, 0.26), transparent 42%), linear-gradient(160deg, #182437 0%, #24435b 45%, #2d6f64 100%)",
  },
];

const SOUNDS = [
  {
    id: "woodland-hush",
    name: "Woodland Hush",
    wave: "sine",
    chords: [
      [196.0, 246.94, 293.66],
      [220.0, 277.18, 329.63],
      [174.61, 220.0, 261.63],
    ],
    stepMs: 3300,
    noteSeconds: 2.8,
    level: 0.12,
    noiseLevel: 0.015,
    noiseTone: 2000,
  },
  {
    id: "vinyl-rain",
    name: "Vinyl Rain",
    wave: "triangle",
    chords: [
      [164.81, 207.65, 246.94],
      [174.61, 220.0, 261.63],
      [155.56, 196.0, 233.08],
    ],
    stepMs: 2900,
    noteSeconds: 2.5,
    level: 0.1,
    noiseLevel: 0.035,
    noiseTone: 1450,
  },
  {
    id: "frost-chimes",
    name: "Frost Chimes",
    wave: "sine",
    chords: [
      [246.94, 329.63, 392.0],
      [220.0, 293.66, 349.23],
      [196.0, 261.63, 329.63],
    ],
    stepMs: 3000,
    noteSeconds: 2.3,
    level: 0.085,
    noiseLevel: 0.008,
    noiseTone: 2600,
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    wave: "sawtooth",
    chords: [
      [130.81, 164.81, 246.94],
      [146.83, 185.0, 277.18],
      [123.47, 155.56, 233.08],
    ],
    stepMs: 2000,
    noteSeconds: 1.6,
    level: 0.065,
    noiseLevel: 0.018,
    noiseTone: 920,
  },
  {
    id: "tide-drift",
    name: "Tide Drift",
    wave: "sine",
    chords: [
      [110.0, 146.83, 220.0],
      [123.47, 164.81, 246.94],
      [98.0, 130.81, 196.0],
    ],
    stepMs: 3600,
    noteSeconds: 3.3,
    level: 0.11,
    noiseLevel: 0.02,
    noiseTone: 1180,
  },
  {
    id: "ember-room",
    name: "Ember Room",
    wave: "triangle",
    chords: [
      [155.56, 196.0, 246.94],
      [174.61, 220.0, 277.18],
      [146.83, 185.0, 233.08],
    ],
    stepMs: 2800,
    noteSeconds: 2.4,
    level: 0.095,
    noiseLevel: 0.01,
    noiseTone: 1280,
  },
];

const EFFECTS = [
  { id: "rain", label: "Rain" },
  { id: "snow", label: "Snow" },
  { id: "wind", label: "Wind" },
  { id: "fireflies", label: "Fireflies" },
];

const MOODS = [
  {
    name: "Cozy Cabin Rain",
    description: "Warm lamplight with steady rain and vinyl-soft chords.",
    sceneId: "cabin-window",
    soundId: "vinyl-rain",
    effects: ["rain"],
  },
  {
    name: "Misty Forest Morning",
    description: "Fresh forest air with drifting wind and gentle tones.",
    sceneId: "forest-dawn",
    soundId: "woodland-hush",
    effects: ["wind"],
  },
  {
    name: "Alpine White Noise",
    description: "Cold mountain silence broken by snow and glassy chimes.",
    sceneId: "alpine-night",
    soundId: "frost-chimes",
    effects: ["snow", "wind"],
  },
  {
    name: "Neon Rain Drive",
    description: "Night city glow with pulsing synth and windshield rain.",
    sceneId: "neon-city",
    soundId: "neon-pulse",
    effects: ["rain", "wind"],
  },
  {
    name: "Moonlit Shore",
    description: "Sea-breeze drift with spacious low-end ocean ambience.",
    sceneId: "ocean-twilight",
    soundId: "tide-drift",
    effects: ["wind"],
  },
  {
    name: "Desert Night Heat",
    description: "Warm dusk tones with slow sparks and dry moving air.",
    sceneId: "desert-dusk",
    soundId: "ember-room",
    effects: ["wind", "fireflies"],
  },
  {
    name: "Starlit Meadow",
    description: "Calm meadow sky with tiny fireflies and soft harmonics.",
    sceneId: "meadow-stars",
    soundId: "woodland-hush",
    effects: ["fireflies"],
  },
];

const sceneById = new Map(SCENES.map((scene) => [scene.id, scene]));
const soundById = new Map(SOUNDS.map((sound) => [sound.id, sound]));

const dom = {
  settingSelect: document.getElementById("settingSelect"),
  soundSelect: document.getElementById("soundSelect"),
  effectsOptions: document.getElementById("effectsOptions"),
  moodList: document.getElementById("moodList"),
  moodName: document.getElementById("moodName"),
  moodDescription: document.getElementById("moodDescription"),
  appVersion: document.getElementById("appVersion"),
  toggleAudioBtn: document.getElementById("toggleAudioBtn"),
  audioStatus: document.getElementById("audioStatus"),
  shiftMoodBtn: document.getElementById("shiftMoodBtn"),
  sceneLayerA: document.getElementById("sceneLayerA"),
  sceneLayerB: document.getElementById("sceneLayerB"),
  effectsLayer: document.getElementById("effectsLayer"),
};

const state = {
  sceneId: MOODS[0].sceneId,
  soundId: MOODS[0].soundId,
  effects: [...MOODS[0].effects],
  moodIndex: 0,
  activeLayer: 0,
};

let sceneSwapTimeout;

class EffectsEngine {
  constructor(layer) {
    this.layer = layer;
    this.timers = new Map();
  }

  setEffects(effectIds) {
    const desired = new Set(effectIds);

    for (const effectId of this.timers.keys()) {
      if (!desired.has(effectId)) {
        this.stopEffect(effectId);
      }
    }

    for (const effectId of desired) {
      if (!this.timers.has(effectId)) {
        this.startEffect(effectId);
      }
    }
  }

  startEffect(effectId) {
    const config = this.getEffectConfig(effectId);
    if (!config) {
      return;
    }

    const spawn = () => this.spawnParticle(effectId, config);
    spawn();
    const timer = window.setInterval(spawn, config.spawnMs);
    this.timers.set(effectId, timer);
  }

  stopEffect(effectId) {
    const timer = this.timers.get(effectId);
    if (timer) {
      window.clearInterval(timer);
      this.timers.delete(effectId);
    }
  }

  spawnParticle(effectId, config) {
    if (this.layer.childElementCount > 250) {
      this.layer.firstElementChild?.remove();
    }

    const particle = document.createElement("span");
    particle.className = `particle ${effectId}-particle`;
    particle.style.left = `${randomBetween(-10, 100)}%`;
    particle.style.animationDuration = `${randomBetween(
      config.durationMin,
      config.durationMax,
    )}s`;
    particle.style.opacity = `${randomBetween(config.opacityMin, config.opacityMax)}`;

    if (effectId === "rain") {
      particle.style.height = `${randomBetween(28, 70)}px`;
      particle.style.setProperty("--drift", `${randomBetween(-25, 25)}px`);
    } else if (effectId === "snow") {
      const size = randomBetween(3, 10);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--drift", `${randomBetween(-40, 40)}px`);
    } else if (effectId === "wind") {
      particle.style.width = `${randomBetween(70, 190)}px`;
      particle.style.top = `${randomBetween(5, 88)}%`;
    } else if (effectId === "fireflies") {
      const size = randomBetween(4, 9);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${randomBetween(55, 95)}%`;
      particle.style.setProperty("--drift", `${randomBetween(-35, 35)}px`);
    }

    particle.addEventListener("animationend", () => particle.remove(), {
      once: true,
    });
    this.layer.appendChild(particle);
  }

  getEffectConfig(effectId) {
    if (effectId === "rain") {
      return { spawnMs: 85, durationMin: 0.7, durationMax: 1.3, opacityMin: 0.4, opacityMax: 0.9 };
    }

    if (effectId === "snow") {
      return { spawnMs: 190, durationMin: 5.2, durationMax: 8.6, opacityMin: 0.5, opacityMax: 0.95 };
    }

    if (effectId === "wind") {
      return { spawnMs: 180, durationMin: 1.4, durationMax: 2.5, opacityMin: 0.2, opacityMax: 0.65 };
    }

    if (effectId === "fireflies") {
      return { spawnMs: 290, durationMin: 3.8, durationMax: 6.8, opacityMin: 0.35, opacityMax: 1.0 };
    }

    return null;
  }

  clearAll() {
    for (const timer of this.timers.values()) {
      window.clearInterval(timer);
    }

    this.timers.clear();
    this.layer.innerHTML = "";
  }
}

class AmbientAudioEngine {
  constructor(soundLibrary) {
    this.soundMap = new Map(soundLibrary.map((sound) => [sound.id, sound]));
    this.hasSupport = Boolean(window.AudioContext || window.webkitAudioContext);
    this.context = null;
    this.masterGain = null;
    this.compressor = null;
    this.activeTrack = null;
    this.isEnabled = false;
    this.lastError = "";
  }

  async enable() {
    if (!this.hasSupport) {
      this.lastError = "This browser does not support Web Audio.";
      return false;
    }

    try {
      if (!this.context) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext();
        this.masterGain = this.context.createGain();
        this.masterGain.gain.value = 0.9;

        this.compressor = this.context.createDynamicsCompressor();
        this.compressor.threshold.value = -19;
        this.compressor.knee.value = 7;
        this.compressor.ratio.value = 3;
        this.compressor.attack.value = 0.005;
        this.compressor.release.value = 0.28;

        this.masterGain.connect(this.compressor);
        this.compressor.connect(this.context.destination);
      }

      if (this.context.state !== "running") {
        await this.context.resume();
      }

      this.isEnabled = true;
      this.lastError = "";
      return true;
    } catch (error) {
      this.isEnabled = false;
      this.lastError = "Audio was blocked by the browser. Click Enable Sound again.";
      return false;
    }
  }

  disable() {
    this.isEnabled = false;

    if (this.activeTrack) {
      this.fadeOutAndStop(this.activeTrack, 0.8);
      this.activeTrack = null;
    }
  }

  async play(soundId) {
    if (!this.isEnabled) {
      return false;
    }

    const enabled = await this.enable();
    if (!enabled) {
      return false;
    }

    const sound = this.soundMap.get(soundId);
    if (!sound) {
      return false;
    }

    if (this.activeTrack?.id === soundId) {
      return true;
    }

    const nextTrack = this.createTrack(sound);
    const now = this.context.currentTime;
    nextTrack.gain.gain.cancelScheduledValues(now);
    nextTrack.gain.gain.setValueAtTime(0, now);
    nextTrack.gain.gain.linearRampToValueAtTime(1, now + 0.9);

    if (this.activeTrack) {
      this.fadeOutAndStop(this.activeTrack, 1.1);
    }

    this.activeTrack = nextTrack;
    return true;
  }

  createTrack(sound) {
    const gain = this.context.createGain();
    gain.gain.value = 0;
    gain.connect(this.masterGain);

    const playStep = () => {
      const chord = sound.chords[Math.floor(Math.random() * sound.chords.length)];
      const now = this.context.currentTime;
      this.playChord({
        frequencies: chord,
        wave: sound.wave,
        duration: sound.noteSeconds,
        level: sound.level,
        when: now,
        target: gain,
      });

      if (sound.noiseLevel > 0) {
        this.playNoise({
          when: now,
          duration: Math.min(sound.noteSeconds, 2.4),
          level: sound.noiseLevel,
          tone: sound.noiseTone,
          target: gain,
        });
      }
    };

    playStep();
    const timer = window.setInterval(playStep, sound.stepMs);

    return {
      id: sound.id,
      gain,
      timer,
    };
  }

  playChord({ frequencies, wave, duration, level, when, target }) {
    frequencies.forEach((frequency, index) => {
      const osc = this.context.createOscillator();
      const amp = this.context.createGain();

      osc.type = wave;
      osc.frequency.setValueAtTime(frequency, when);
      osc.detune.setValueAtTime(randomBetween(-7, 7), when);

      const noteLevel = Math.min(Math.max(level * 2.2, 0.08), 0.32) / (1 + index * 0.35);
      amp.gain.setValueAtTime(0.0001, when);
      amp.gain.exponentialRampToValueAtTime(noteLevel, when + 0.35);
      amp.gain.exponentialRampToValueAtTime(0.0001, when + duration);

      osc.connect(amp);
      amp.connect(target);
      osc.start(when);
      osc.stop(when + duration + 0.05);
    });
  }

  playNoise({ when, duration, level, tone, target }) {
    const noiseBuffer = this.context.createBuffer(
      1,
      this.context.sampleRate * duration,
      this.context.sampleRate,
    );
    const channel = noiseBuffer.getChannelData(0);

    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = (Math.random() * 2 - 1) * 0.55;
    }

    const source = this.context.createBufferSource();
    source.buffer = noiseBuffer;

    const filter = this.context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(tone, when);
    filter.Q.value = 1.2;

    const amp = this.context.createGain();
    amp.gain.setValueAtTime(0.0001, when);
    amp.gain.exponentialRampToValueAtTime(level, when + 0.24);
    amp.gain.exponentialRampToValueAtTime(0.0001, when + duration);

    source.connect(filter);
    filter.connect(amp);
    amp.connect(target);

    source.start(when);
    source.stop(when + duration + 0.03);
  }

  fadeOutAndStop(track, fadeSeconds) {
    const now = this.context.currentTime;
    track.gain.gain.cancelScheduledValues(now);
    track.gain.gain.setValueAtTime(Math.max(track.gain.gain.value, 0.0001), now);
    track.gain.gain.linearRampToValueAtTime(0, now + fadeSeconds);
    window.clearInterval(track.timer);
    window.setTimeout(() => {
      track.gain.disconnect();
    }, (fadeSeconds + 0.15) * 1000);
  }
}

const effectsEngine = new EffectsEngine(dom.effectsLayer);
const audioEngine = new AmbientAudioEngine(SOUNDS);

setupControls();
setupEvents();
initializeMood();

function setupControls() {
  SCENES.forEach((scene) => {
    const option = document.createElement("option");
    option.value = scene.id;
    option.textContent = scene.name;
    dom.settingSelect.appendChild(option);
  });

  SOUNDS.forEach((sound) => {
    const option = document.createElement("option");
    option.value = sound.id;
    option.textContent = sound.name;
    dom.soundSelect.appendChild(option);
  });

  EFFECTS.forEach((effect) => {
    const label = document.createElement("label");
    label.className = "effect-pill";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "effect";
    checkbox.value = effect.id;

    const text = document.createElement("span");
    text.textContent = effect.label;

    label.append(checkbox, text);
    dom.effectsOptions.appendChild(label);
  });

  MOODS.forEach((mood, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mood-pill";
    button.textContent = mood.name;
    button.dataset.index = String(index);
    dom.moodList.appendChild(button);
  });
}

function setupEvents() {
  dom.settingSelect.addEventListener("change", () => {
    state.sceneId = dom.settingSelect.value;
    transitionScene(state.sceneId);
    syncMoodDisplayFromSelection();
  });

  dom.soundSelect.addEventListener("change", async () => {
    state.soundId = dom.soundSelect.value;
    const started = await audioEngine.play(state.soundId);
    if (started) {
      setAudioStatus(`Playing: ${getSoundName(state.soundId)}`, "on");
    } else if (!audioEngine.isEnabled) {
      setAudioStatus("Sound is off. Click Enable Sound.", "warning");
    } else if (audioEngine.lastError) {
      setAudioStatus(audioEngine.lastError, "warning");
    }

    syncMoodDisplayFromSelection();
  });

  dom.effectsOptions.addEventListener("change", () => {
    state.effects = getSelectedEffects();
    effectsEngine.setEffects(state.effects);
    syncMoodDisplayFromSelection();
  });

  dom.toggleAudioBtn.addEventListener("click", async () => {
    if (!audioEngine.isEnabled) {
      const enabled = await audioEngine.enable();
      if (!enabled) {
        setAudioStatus(audioEngine.lastError || "Audio could not start.", "warning");
        return;
      }

      dom.toggleAudioBtn.textContent = "Mute Sound";
      const started = await audioEngine.play(state.soundId);
      if (started) {
        setAudioStatus(`Playing: ${getSoundName(state.soundId)}`, "on");
      } else {
        setAudioStatus(audioEngine.lastError || "Audio could not start.", "warning");
      }

      return;
    }

    audioEngine.disable();
    dom.toggleAudioBtn.textContent = "Enable Sound";
    setAudioStatus("Sound muted.", "");
  });

  dom.shiftMoodBtn.addEventListener("click", () => {
    applyRandomMood();
  });

  dom.moodList.addEventListener("click", (event) => {
    const trigger = event.target.closest(".mood-pill");
    if (!trigger) {
      return;
    }

    const moodIndex = Number(trigger.dataset.index);
    if (Number.isNaN(moodIndex)) {
      return;
    }

    applyMoodByIndex(moodIndex);
  });
}

function initializeMood() {
  const initialMood = MOODS[0];
  state.sceneId = initialMood.sceneId;
  state.soundId = initialMood.soundId;
  state.effects = [...initialMood.effects];
  state.moodIndex = 0;

  dom.settingSelect.value = state.sceneId;
  dom.soundSelect.value = state.soundId;
  setCheckedEffects(state.effects);

  dom.sceneLayerA.style.background = sceneById.get(state.sceneId).background;
  dom.sceneLayerA.classList.add("is-visible");
  dom.sceneLayerB.classList.remove("is-visible");

  updateAccent(state.sceneId);
  effectsEngine.setEffects(state.effects);
  setMoodMeta(initialMood.name, initialMood.description);
  setActiveMoodButton(0);
  setAudioStatus("Sound is off. Click Enable Sound.", "");
  if (dom.appVersion) {
    dom.appVersion.textContent = `v${APP_VERSION}`;
  }
}

function applyRandomMood() {
  if (MOODS.length === 1) {
    applyMoodByIndex(0);
    return;
  }

  let nextMoodIndex = Math.floor(Math.random() * MOODS.length);
  while (nextMoodIndex === state.moodIndex) {
    nextMoodIndex = Math.floor(Math.random() * MOODS.length);
  }

  applyMoodByIndex(nextMoodIndex);
}

function applyMoodByIndex(index) {
  const mood = MOODS[index];
  if (!mood) {
    return;
  }

  state.sceneId = mood.sceneId;
  state.soundId = mood.soundId;
  state.effects = [...mood.effects];
  state.moodIndex = index;

  dom.settingSelect.value = state.sceneId;
  dom.soundSelect.value = state.soundId;
  setCheckedEffects(state.effects);

  transitionScene(state.sceneId);
  effectsEngine.setEffects(state.effects);
  if (audioEngine.isEnabled) {
    audioEngine.play(state.soundId).then((started) => {
      if (started) {
        setAudioStatus(`Playing: ${getSoundName(state.soundId)}`, "on");
      } else if (audioEngine.lastError) {
        setAudioStatus(audioEngine.lastError, "warning");
      }
    });
  }

  setMoodMeta(mood.name, mood.description);
  setActiveMoodButton(index);
}

function transitionScene(sceneId) {
  const scene = sceneById.get(sceneId);
  if (!scene) {
    return;
  }

  updateAccent(sceneId);

  const nextLayer = state.activeLayer === 0 ? dom.sceneLayerB : dom.sceneLayerA;
  const currentLayer = state.activeLayer === 0 ? dom.sceneLayerA : dom.sceneLayerB;

  nextLayer.style.background = scene.background;
  nextLayer.classList.add("is-visible");
  currentLayer.classList.remove("is-visible");

  window.clearTimeout(sceneSwapTimeout);
  sceneSwapTimeout = window.setTimeout(() => {
    state.activeLayer = state.activeLayer === 0 ? 1 : 0;
  }, 1000);
}

function syncMoodDisplayFromSelection() {
  const matchIndex = MOODS.findIndex(
    (mood) =>
      mood.sceneId === state.sceneId &&
      mood.soundId === state.soundId &&
      isSameEffectSet(mood.effects, state.effects),
  );

  if (matchIndex >= 0) {
    state.moodIndex = matchIndex;
    setMoodMeta(MOODS[matchIndex].name, MOODS[matchIndex].description);
    setActiveMoodButton(matchIndex);
    return;
  }

  state.moodIndex = -1;
  const sceneName = sceneById.get(state.sceneId)?.name ?? "Unknown Setting";
  const soundName = soundById.get(state.soundId)?.name ?? "Unknown Sound";
  const effectNames = state.effects
    .map((effectId) => EFFECTS.find((effect) => effect.id === effectId)?.label)
    .filter(Boolean);
  const actionText = effectNames.length ? effectNames.join(", ") : "No actions";

  setMoodMeta("Custom Mood", `${sceneName} with ${soundName}. Actions: ${actionText}.`);
  setActiveMoodButton(-1);
}

function setMoodMeta(name, description) {
  dom.moodName.textContent = name;
  dom.moodDescription.textContent = description;
}

function setActiveMoodButton(activeIndex) {
  const buttons = dom.moodList.querySelectorAll(".mood-pill");
  buttons.forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
}

function setCheckedEffects(effectIds) {
  const selected = new Set(effectIds);
  const checkboxes = dom.effectsOptions.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selected.has(checkbox.value);
  });
}

function getSelectedEffects() {
  const checkboxes = dom.effectsOptions.querySelectorAll('input[type="checkbox"]');
  return [...checkboxes].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
}

function isSameEffectSet(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const setA = new Set(a);
  return b.every((value) => setA.has(value));
}

function updateAccent(sceneId) {
  const accent = sceneById.get(sceneId)?.accent ?? "#ffc86f";
  document.documentElement.style.setProperty("--accent-color", accent);
}

function setAudioStatus(message, tone = "") {
  dom.audioStatus.textContent = message;
  dom.audioStatus.classList.toggle("is-on", tone === "on");
  dom.audioStatus.classList.toggle("is-warning", tone === "warning");
}

function getSoundName(soundId) {
  return soundById.get(soundId)?.name ?? "Ambient Track";
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}
