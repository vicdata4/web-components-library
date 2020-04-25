import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { mediaQueryTablet } from './utils/constants';

export class SeedModal extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          overflow: hidden;
        }

        .modal {
          display: flex;
          justify-content: center;

          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;

          background-color: transparent;
          transition: all 0.3s;
          color: black;
          overflow: auto;

          z-index: 999;
        }

        .modal-content {
          background-color: white;
          width: 80%;
          transition: margin-top 0.3s;
          margin-top: -50px;
        }

        .content {
          display: block;
        }

        .closed {
          display: none;
          background-color: transparent;
        }

        .header::slotted(*), .footer::slotted(*), .content {
          padding: 0.8rem 1rem;
        }

        .close {
          height: fit-content;
        }

        .title {
          font-weight: bold;
        }

        .modal-content div p {
          margin: 0 !important;
        }

        @media (min-width: ${unsafeCSS(mediaQueryTablet)}) {
          .modal-content {
            width: 50%;
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      modalBackground: { type: String },
      alignWindow: { type: String }
    };
  }

  constructor() {
    super();
    this.modalBackground = 'rgba(0, 0, 0, .4)';
    this.alignWindow = 'flex-start';
  }

  /**
   * Open modal when click on modal button
   */
  openModal() {
    this.modal.className = 'modal';
    setTimeout(() => {
      this.modal.style.backgroundColor = this.modalBackground;
      this.shadowRoot.querySelector('.modal-content').style.marginTop = '20px';
    }, 10);
  }

  /**
   * Close modal when click on close button
   */
  closeModal() {
    this.modal.style.backgroundColor = 'transparent';
    this.modal.style.opacity = '0';
    this.shadowRoot.querySelector('.modal-content').style.marginTop = '-50px';
    setTimeout(() => {
      this.modal.className = 'modal closed';
      this.modal.style.opacity = '1';
    }, 300);
  }

  /**
   * Set onClickListener utility in order to close modal
   * onClick out of the modal-content
   */
  modalClickListener() {
    const content = this.shadowRoot.querySelector('.modal-content');

    this.modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.opacity = '0';
        this.style.backgroundColor = 'transparent';
        content.style.marginTop = '-50px';
        setTimeout(() => {
          this.className = 'modal closed';
          this.style.opacity = '1';
        }, 300);
      }
    });
  }

  /**
   * Set onClickListener to slotted buttons which contain .close class
   */
  async closeModalSlottedButton() {
    const footer = this.shadowRoot.querySelector('slot[name="footer"]');
    const header = this.shadowRoot.querySelector('slot[name="header"]');
    await footer.assignedElements()[0].updateComplete;

    footer.assignedElements().forEach(element => {
      if (element.querySelector('.close')) {
        element.querySelector('.close').addEventListener('click', this.closeModal.bind(this));
      }
    });

    header.assignedElements().forEach(element => {
      if (element.querySelector('.close')) {
        element.querySelector('.close').addEventListener('click', this.closeModal.bind(this));
      }
    });
  }

  async firstUpdated() {
    this.modal = this.shadowRoot.querySelector('.modal');
    this.modalClickListener();
    this.closeModalSlottedButton();
  }

  render() {
    return html`
      <slot name="button" @click='${this.openModal}'></slot>
      <div class="modal closed" style="align-items: ${this.alignWindow}">
        <div class="modal-content">
          <slot name="header" class="header"></slot>
          <slot name="content" class="content"></slot>
          <slot name="footer" class="footer"></slot>
        </div>
      </div>
    `;
  }
}
