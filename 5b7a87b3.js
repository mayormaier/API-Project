import{s as e,r as t,$ as s}from"./631d0b4e.js";class r extends e{static get tag(){return"hello-world"}constructor(){super(),this.name="stranger"}static get properties(){return{name:{type:String,reflect:!0}}}updated(e){e.forEach(((e,t)=>{"name"===t&&"partner"===this[t]&&this.classList.add("cool")}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return t`:host{display:block}:host([name=partner]){color:#ff0;background-color:#000}`}render(){return s` <h1>Welcome ${this.name}</h1> <slot></slot> <div>${"I love you so.... so much"}</div> `}}customElements.define(r.tag,r);
