const instances = new Map();

export default class Sound {
  constructor(src) {
    this._src = src;
    this._el = null;
    this._playing = false;
    this._ready = false;
    this._tryElement();
  }

  static get(src) {
    const sound = instances[src] || new Sound(src);
    instances[src] = sound;
    return sound;
  }

  play(loop = false) {
    if (1 || this._playing || !this._ready) {
      return false;
    }
    this.stop();
    this._playing = true;
    requestAnimationFrame(() => {
      const el = this._tryElement();
      el.loop = !!loop;
      el.muted = false;
      el.autoplay = true;
      el.currentTime = 0;
      el.play().then(
        (played) => {
          //
        },
        (error) => {
          this.stop();
        }
      );
    });
    return true;
  }

  stop = () => {
    if (this._playing) {
      const el = this._tryElement();
      el.pause();
      el.muted = true;
      el.currentTime = 0;
      this._playing = false;
    }
  };

  _onEnd = () => {
    this.stop();
  };

  _onLoad = () => {
    this._ready = true;
    console.log('loaded sound', this._src);
  };

  _tryElement = () => {
    let el = this._el;
    if (el) {
      return el;
    }
    el = document.createElement('audio');
    el.setAttribute('preload', 'auto');
    el.setAttribute('controls', 'none');
    el.preload = true;
    el.loop = false;

    // el.style.display = 'none';
    el.onended = this._onEnd;
    el.oncanplay = this._onLoad;
    el.src = this._src;

    // el.muted = true;
    el.pause();
    this._el = el;
    if (!document.body) {
      window.addEventListener('load', this._renderEl, true);
    } else {
      this._renderEl();
    }
    return el;
  };

  _renderEl = (event) => {
    document.body.appendChild(this._el);
    if (event) {
      window.removeEventListener('load', this._renderEl, true);
    }
  };
}

// Preload sounds.
Sound.get('playing_1.mp3');
Sound.get('jump_2.mp3');
Sound.get('ohno_2.mp3');
