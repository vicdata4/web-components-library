import { LitElement, html } from 'lit-element';
import { styles } from './styles/styles.js';
import debounce from 'lodash.debounce';

import {
  videoSpinner,
  videoPlayPreview,
  videoPlayBtn,
  videoFullScreen,
  videoFullScreenExit,
  videoVolumeUp,
  settingsIcon,
  videoReplay,
  videoReplayBtn,
  seedLogo
} from './styles/svg-icons';

const pauseSvgCode = 'M6 19h4V5H6v14zm8-14v14h4V5h-4z';
const playSvgCode = 'M8 5v14l11-7z';

const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/****************
WORK IN PROGRESS
****************/
export class SeedVideoPlayer extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      src: { type: String },
      color: { type: String },
      autoPlay: { type: Boolean },
      mute: { type: Boolean },
      isLoadingData: { type: Boolean, attribute: false },
      duration: { type: Number, attribute: false },
      showController: { type: Boolean, attribute: false },
      videoVolume: { type: Number, attribute: false },
      videoVolumeInput: { type: Number, attribute: false },
      videoCurrentTime: { type: Number, attribute: false },
      hoverSecond: { type: Number, attribute: false },
      isFullScreen: { type: Boolean, attribute: false }
    };
  }

  constructor() {
    super();

    this.src = '';
    this.color = 'red';
    this.autoPlay = false;
    this.mute = false;
    this.duration = 0;
    this.videoVolume = 50;
    this.videoVolumeInput = 0.5;
    this.videoCurrentTime = 0;
    this.isLoadingData = true;
    this.showController = true;
    this.isFullScreen = false;

    this.addEventListener('dblclick', () => {
      this.fullScreenSwitch();
    });
  }

  firstUpdated() {
    const video = this.shadowRoot.querySelector('video');
    const progressBarContainer = this.shadowRoot.querySelector('.progress-bar-container');

    this.loadedDataListener(video);
    this.timeUpdateListener(video);

    this.volumeInputRangeListener(video);
    this.volumeButtonListeners();

    this.videoContainerMouseListeners(video, progressBarContainer);
    this.progressBarListeners(video, progressBarContainer);

    this.onEndedVideoListener(video, progressBarContainer);

    this.waitingForLoadedDataListeners(video);

    this.addEventListener('keydown', e => {
      if (this.isFullScreen && e.keyCode === 27) {
        this.fullScreenSwitch();
      }
    });

    this.style.setProperty('--video-main-color', this.color);
  }

  hideControllers() {
    const progressBarContainer = this.shadowRoot.querySelector('.progress-bar-container');
    const controller = this.shadowRoot.querySelector('.controller');

    progressBarContainer.classList.add('hide');
    controller.classList.add('hide');

    this.style.cursor = 'none';
  }

  showControllers(progressBarContainer) {
    const controller = this.shadowRoot.querySelector('.controller');

    progressBarContainer.classList.remove('hide');
    controller.classList.remove('hide');
    this.style.cursor = 'initial';
  }

  waitingForLoadedDataListeners(video) {
    const spinner = this.shadowRoot.querySelector('.spinner-container');

    video.addEventListener('waiting', () => {
      this.isLoadingData = true;
      spinner.style.display = 'flex';
    });

    video.addEventListener('playing', () => {
      this.isLoadingData = false;
      spinner.style.display = 'none';
    });
  }

  onEndedVideoListener(video, progressBarContainer) {
    video.addEventListener('ended', () => {
      this.showControllers(progressBarContainer);

      const playBtn = this.shadowRoot.querySelector('.btn-play-pause');
      const replayBtn = this.shadowRoot.querySelector('.btn-replay');
      const replayBtnPreview = this.shadowRoot.querySelector('.btn-replay-preview');

      playBtn.style.display = 'none';
      replayBtnPreview.style.display = 'block';
      replayBtn.style.display = 'flex';

      this.showController = true;
    });
  }

  progressBarListeners(video, progressBarContainer) {
    const progressBarHover = this.shadowRoot.querySelector('.progress-bar-hover');
    const hoverCurrentTime = this.shadowRoot.querySelector('.hover-time-indicator');

    progressBarContainer.addEventListener('mouseover', () => {
      progressBarContainer.style.height = '7px';
      this.showController = true;
    });

    progressBarContainer.addEventListener('mouseleave', () => {
      progressBarContainer.style.height = 'var(--progress-bar-height)';
      hoverCurrentTime.style.opacity = '0';

      if (!video.paused) this.showController = false;
    });

    progressBarContainer.addEventListener('mousemove', e => {
      const progressBarClientWidth = progressBarContainer.clientWidth;
      const percent = (e.offsetX * 100) / progressBarClientWidth;

      const second = (this.duration * parseFloat(percent.toFixed(2))) / 100;
      this.hoverSecond = parseInt(second);

      progressBarHover.style.width = `${percent}%`;
      hoverCurrentTime.style.opacity = '1';

      const isBoxTimeOverflowing = e.offsetX + hoverCurrentTime.clientWidth > progressBarClientWidth;
      hoverCurrentTime.style.left = !isBoxTimeOverflowing ? `${e.offsetX}px` : `${e.offsetX - hoverCurrentTime.clientWidth}px`;
    });
  }

  videoContainerMouseListeners(video, progressBarContainer) {
    const videoContainer = this.shadowRoot.querySelector('.video-container');
    const controller = this.shadowRoot.querySelector('.controller');

    controller.addEventListener('mouseover', () => { this.showController = true; });
    controller.addEventListener('mouseleave', () => {
      if (!video.paused) this.showController = false;
    });

    videoContainer.addEventListener('mousemove', () => {
      this.showControllers(progressBarContainer);
    });

    videoContainer.addEventListener('mouseleave', () => {
      if (!this.showController) this.hideControllers();
    });
  }

  loadedDataListener(video) {
    const spinner = this.shadowRoot.querySelector('.spinner-container');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');

    video.addEventListener('loadedmetadata', event => {
      this.duration = event.target.duration;
      this.isLoadingData = false;

      spinner.style.display = 'none';
      if (!this.autoPlay) {
        playPreview.style.display = 'block';
      } else {
        this.playPauseVideo();
      }
    });
  }

  setCurrentTime(video) {
    const progressBar = this.shadowRoot.querySelector('.progress-bar');
    const bufferBar = this.shadowRoot.querySelector('.progress-bar-buffer');

    const buffer = (video.buffered.end(0) / this.duration) * 100;
    const percent = (video.currentTime * 100) / this.duration;
    this.videoCurrentTime = Math.floor(video.currentTime);
    const scaleXValue = percent * 0.01;

    progressBar.style.transform = `scaleX(${scaleXValue})`;
    bufferBar.style.width = `${buffer}%`;
  }

  timeUpdateListener(video) {
    video.addEventListener('timeupdate', () => {
      this.setCurrentTime(video);
    });
  }

  volumeButtonListeners() {
    const btnVolume = this.shadowRoot.querySelector('.btn-volume');
    const inputRangeContainer = this.shadowRoot.querySelector('.input-range-container');

    btnVolume.addEventListener('mouseover', () => inputRangeContainer.classList.add('opened'));
    btnVolume.addEventListener('mouseleave', () => inputRangeContainer.classList.remove('opened'));
  }

  volumeInputRangeListener(video) {
    const volumeInput = this.shadowRoot.querySelector('.input-range-volume');

    if (this.mute) {
      volumeInput.value = 0;
      video.volume = 0;
      this.setVolumeButton(0);
    }

    volumeInput.addEventListener('input', e => {
      const percent = e.target.value * 0.01;
      video.volume = percent;

      this.videoVolumeInput = percent;
      this.videoVolume = e.target.value;

      this.setVolumeButton();
    });
  }

  setVolumeButton(level = this.videoVolumeInput) {
    const volumePath = this.shadowRoot.querySelector('.volume-path');
    const volumeUp = 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z';
    const volumeMute = 'M7 9v6h4l5 5V4l-5 5H7z';
    const volumeDown = 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z';

    if (level > 0) {
      if (level < 0.5) {
        volumePath.setAttribute('d', volumeDown);
      } else {
        volumePath.setAttribute('d', volumeUp);
      }
    } else {
      volumePath.setAttribute('d', volumeMute);
    }
  }

  switchVolume() {
    const video = this.shadowRoot.querySelector('video');
    const volumeInputRange = this.shadowRoot.querySelector('.input-range-volume');

    if (video.volume > 0) {
      video.volume = 0;
      volumeInputRange.value = 0;
    } else {
      video.volume = this.videoVolumeInput;
      volumeInputRange.value = this.videoVolume;
    }

    this.setVolumeButton(video.volume);
  }

  onSwitchVolume() {
    if (!isMobileDevice) {
      this.switchVolume();
    } else {
      const inputRange = this.shadowRoot.querySelector('.input-range-container');
      inputRange.style.width = (getComputedStyle(inputRange).width !== '0px') ? '0px' : '100%';
    }
  }

  hideReplay() {
    const replayBtn = this.shadowRoot.querySelector('.btn-replay-preview');
    replayBtn.style.display = 'none';
  }

  replayVideo() {
    this.hideReplay();
    const playBtn = this.shadowRoot.querySelector('.btn-play-pause');
    const replayBtn = this.shadowRoot.querySelector('.btn-replay');

    playBtn.style.display = 'block';
    replayBtn.style.display = 'none';

    this.hoverSecond = (Math.floor(this.duration) !== this.videoCurrentTime) ? this.videoCurrentTime : 0;

    this.setSelectedTime();
    this.playPauseVideo();
  }

  playPauseVideo() {
    const video = this.shadowRoot.querySelector('video');
    const playPreview = this.shadowRoot.querySelector('.btn-play-preview');
    const playSvg = this.shadowRoot.querySelector('.play-path');

    if (!this.isLoadingData) {
      if (video.paused) {
        video.play();
        playPreview.style.display = 'none';
        playSvg.setAttribute('d', pauseSvgCode);
        this.hideControllers();
        video.addEventListener('mousemove', debounce(() => {
          if (!this.showController) this.hideControllers();
        }, 2000), false);
        this.showController = false;
      } else {
        video.pause();
        playPreview.style.display = 'block';
        playSvg.setAttribute('d', playSvgCode);
        this.showController = true;
      }
    }
  }

  onTouchVideo() {
    if (!isMobileDevice) {
      this.playPauseVideo();
    } else {
      if (this.showController === false) {
        this.showController = true;
      } else {
        this.showController = false;
        this.hideControllers();
      }
    }
  }

  timeFormatter(seconds_) {
    const parseSeconds = parseInt(seconds_);
    let hours = Math.floor(parseSeconds / 3600);
    let minutes = Math.floor((parseSeconds - (hours * 3600)) / 60);
    let seconds = parseSeconds - (hours * 3600) - (minutes * 60);

    hours = (hours > 0) ? `${hours}:` : '';
    minutes = (hours > 0 && minutes < 10) ? `0${minutes}:` : `${minutes}:`;
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return `${hours}${minutes}${seconds}`;
  }

  fullScreenSwitch() {
    const video = this.shadowRoot.querySelector('.video-container');

    if (!this.isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
      this.isFullScreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
      this.isFullScreen = false;
    }
  }

  getVideoType() {
    return this.src.match(new RegExp('[^.]+$'));
  }

  setSelectedTime() {
    const video = this.shadowRoot.querySelector('video');
    const progressBar = this.shadowRoot.querySelector('.progress-bar');

    video.currentTime = this.hoverSecond;
    progressBar.classList.add('hide-transition');

    this.setCurrentTime(video);

    setTimeout(() => {
      progressBar.classList.remove('hide-transition');
    }, 500);
  }

  render() {
    return html`
      <div class="video-container">
        <video @click="${this.onTouchVideo}">
          <source src="${this.src}" type="video/${this.getVideoType()}">
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="hover-time-indicator"><span>${this.timeFormatter(this.hoverSecond)}</span></div>
        <div class="progress-bar-container" @click="${this.setSelectedTime}">
          <div class="progress-bar-container-relative">
            <div class="progress-bar-buffer"></div>
            <div class="progress-bar-hover"></div>
            <div class="progress-bar-position">
              <div class="progress-bar"></div>
            </div>
          </div>
        </div>
        <div class="controller">
          <div class="control-box">
            <div class="video-buttons">
              <button class="btn-play-pause" @click="${this.playPauseVideo}">${videoPlayBtn}</button>
              <button class="btn-replay" @click="${this.replayVideo}">${videoReplayBtn}</button>
              <button class="btn-volume" @click="${this.onSwitchVolume}">${videoVolumeUp}</button>
              <div class="input-range-container">
                <input class="input-range-volume" type="range" min="0" max="100" step="1" value="50">
              </div>
              <div class="timer">
                <span>${this.timeFormatter(this.videoCurrentTime)}</span>
                <span class="timer-separator">/</span>
                <span>${this.timeFormatter(this.duration)}</span>
              </div>
            </div>
            <div class="controller-options">
              <div>${seedLogo}</div>
              <div class="options-separator">
                <div class="options-separator-line"></div>
              </div>
              <div class="controller-options-buttons">
                <button class="btn-options">${settingsIcon}</button>
                <button class="btn-options" @click="${this.fullScreenSwitch}">
                  ${!this.isFullScreen ? videoFullScreen : videoFullScreenExit}
                </button>
              </div>
            </div>
          </div>
        </div>
        <button class="btn-play-preview" @click="${this.playPauseVideo}">${videoPlayPreview}</button>
        <button class="btn-replay-preview" @click="${this.replayVideo}">${videoReplay}</button>
        <div class="spinner-container">${videoSpinner}</div>
      </div>
    `;
  }
}