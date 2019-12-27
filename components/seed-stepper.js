import { LitElement, html, css } from 'lit-element';
import { empty } from './utils/constants';
import { seedStyle } from '../styles';

/** */
export class SeedStepper extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      seedStyle,
      css`
        :host {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-flow: row nowrap;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .dot {
          width: 15px;
          height: 15px;
          margin: 5px;
          border-radius: 100%;
          border: none;
          cursor: pointer;
          transition: background-color .7s;
        }

        .square {
          margin: 0;
          border-radius: unset;
        }
      `
    ];
  }

  static get properties() {
    return {
      index: { type: Number },
      size: { type: Number, reflect: true },
      array: { type: Array, attribute: false },
      colorBack: { type: String },
      square: { type: Boolean },
      selectedColor: { type: String }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.square = false;
    this.size = 0;
    this.array = [];

    this.colorBack = this.colorBack || 'rgba(255,255,255,.5)';
    this.selectedColor = this.selectedColor || 'white';
  }

  /**
    * Set new index and dispatchEvent to smarters-reviews component
    * @param {Number} index  Selected index
    */
  setPosition(index) {
    this.dispatchEvent(new CustomEvent('set-dot', { detail: index, composed: true }));
  }

  attributeChangedCallback() {
    super.connectedCallback();
    this.array = new Array(this.size).fill(empty);
  }

  render() {
    return html`${this.activeColor}
      ${this.array.map((x, i) => html`
        <button
          class="dot${this.square ? ' square' : empty}"
          @click="${() => this.setPosition(i)}" id="${`a${i}`}"
          .style="background-color: ${i === this.index ? this.selectedColor : this.colorBack}"
          aria-label="${i}"
          tabindex="0"
        >
        </button>
      `)}
    `;
  }
}
