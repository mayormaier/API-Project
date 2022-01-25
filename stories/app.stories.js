import { html } from 'lit';
import '../src/HelloWorld.js';

export default {
  title: 'Hello World',
  component: 'hello-world',
  argTypes: {
    name: { control: 'text' },
  },
};

function Template({ name = 'cool', slot }) {
  return html` <hello-world name="${name}"> ${slot} </hello-world>`;
}
export const Hello = Template.bind({});

export const HelloJeb = Template.bind({});
HelloJeb.args = {
  name: 'jeb',
  slot: html`<p>Please clap..</p>`,
};
