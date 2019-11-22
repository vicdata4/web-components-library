import { LitElement, html, css } from 'lit-element';

/** */
class SeedStepper extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .dot {
        width: 20px;
        height: 20px;
        margin: 5px;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }

      .active {
        background-color: #d8336d !important;
      }
    `;
  }

  static get properties() {
    return {
      index: { type: Number },
      nElements: { type: Number, reflect: true },
      dotsArray: { type: Array },
      colorActive: { type: String },
      colorBack: { type: String }
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.nElements = 0;
    this.dotsArray = [];
    this.colorActive = this.colorActive ||  '#d8336d';
    this.colorBack = this.colorBack || '#8e3b52';
  }

  firstUpdated() {

  }

  render() {
    return html`
      ${this.dotsArray.map((x, i) =>
        html`
            <button
                tabindex="0"
                @click="${() => this.setPosition(i)}" id="${'a' + i}"
                class="dot"
                .style="
                    background-color: ${this.colorBack}
                "
                aria-label="${i}">
            </button>
        `)
       }
    `;
  }

  firstUpdated() {
    this.setActive(this.index, 'dot active');
  }

  /**
  * Update index and dots
  * @param {Number} changedProps Update active class when the index changes
  */
  updated(changedProps) {
    if (this.index || changedProps.get('index')) {
      this.setActive(this.index, 'dot active');
      this.setActive(changedProps.get('index'), 'dot');
    }
  }

  attributeChangedCallback() {
    const n = this.nElements;
    const abc = new Array(n).fill('');
    this.dotsArray = abc;
  }
  /* eslint-enable require-jsdoc */

  /**
    * Set active class
    * @param {Number} i  Assign default index (0)
    * @param {String} mod Assign active class (dot active)
    */
  setActive(i, mod) {
    const currentDot = this.shadowRoot.querySelector('#a' + i);
    if (currentDot) currentDot.classList = mod;
  }

  /**
    * Set new index and dispatchEvent to smarters-reviews component
    * @param {Number} index  Selected index
    */
  setPosition(index) {
    this.dispatchEvent(new CustomEvent('set-index-value', { detail: index, composed: true }));
  }
}
customElements.define('seed-stepper', SeedStepper);
