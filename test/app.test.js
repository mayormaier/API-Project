import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/HelloWorld.js';

describe('HelloWorld', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<hello-world name="Cooler">With text in the middle</hello-world>`
    );
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('cool');
  });
  it('name value set', () => {
    const { name } = element;
    expect(name).to.exist;
    expect(name).to.equal('Cooler');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
