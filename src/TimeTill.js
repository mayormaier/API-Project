// dependencies / things imported
import { LitElement, html, css } from 'lit';
import { UserIP } from './UserIP.js';

export class TimeTill extends LitElement {
  static get tag() {
    return 'time-till';
  }

  constructor() {
    super();
    this.UserIpInstance = new UserIP();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  render() {
    return html`<h1>Hello</h1>`;
  }
}

customElements.define(TimeTill.tag, TimeTill);
