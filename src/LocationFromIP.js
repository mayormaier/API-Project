// dependencies / things imported
import { LitElement, html, css } from 'lit';
import { UserIP } from './UserIP.js';
import '@lrnwebcomponents/wikipedia-query/wikipedia-query.js';

export class LocationFromIP extends LitElement {
  static get tag() {
    return 'location-from-ip';
  }

  constructor() {
    super();
    this.UserIpInstance = new UserIP();
    this.locationEndpoint = 'https://freegeoip.app/json/';
    this.long = null;
    this.lat = null;
    this.city = null;
    this.region = null;
    this.location = 'Map';
  }

  static get properties() {
    return {
      lat: { type: Number, reflect: true },
      long: { type: Number, reflect: true },
      city: { type: String, reflect: true },
      region: { type: String, reflect: true },
      location: { type: String, reflect: true },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.getGEOIPData();
  }

  async getGEOIPData() {
    const IPClass = new UserIP();
    const userIPData = await IPClass.updateUserIP();
    return fetch(this.locationEndpoint + userIPData.ip)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return false;
      })
      .then(data => {
        console.log(data);
        this.lat = data.latitude;
        this.long = data.longitude;
        this.city = data.city;
        this.region = data.region_name;
        this.location = `${this.city}, ${this.region}`;
        // add city and state vals
        console.log(`${this.lat} ${this.long}`);
        console.log(`Location: ${this.location}`);
        return data;
      });
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        iframe {
          height: 500px;
          width: 500px;
        }
      `,
    ];
  }

  render() {
    // this function runs every time a properties() declared variable changes
    // this means you can make new variables and then bind them this way if you like
    // google maps links can be formed like this: https://www.google.com/maps/@40.804,77.910,14z
    const url = `https://maps.google.com/maps?q=${this.lat},${this.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return html`
      <iframe title="Where you are" src="${url}"></iframe>
      <br /><a
        href="https://www.google.com/maps/@${this.lat},${this.long},15z"
        target="_blank"
        >Expand Map to ${this.location}</a
      >
      <br /><br />
      <wikipedia-query search="${this.location}"></wikipedia-query>
      <wikipedia-query search="${this.city}"></wikipedia-query>
      <wikipedia-query search="${this.region}"></wikipedia-query>
    `;
  }
}

customElements.define(LocationFromIP.tag, LocationFromIP);
