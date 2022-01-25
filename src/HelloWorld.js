// dependencies / things imported
import { LitElement, html, css } from 'lit';

// this is just a file so you can define constants BUT
// because it's MODULAR javascript it ONLY lives in this file
const iLoveYou = 'I love you so.... so much';
// window.iLoveYou however WOULD be available in global scope
// though the timing of when it's available might be a bit off

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class HelloWorld extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'hello-world';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.name = 'stranger';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      name: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'name' && this[propName] === 'partner') {
        this.classList.add('cool');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([name='partner']) {
        color: yellow;
        background-color: black;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <h1>Welcome ${this.name}</h1>
      <slot></slot>
      <div>${iLoveYou}</div>
    `;
  }
}

customElements.define(HelloWorld.tag, HelloWorld);
