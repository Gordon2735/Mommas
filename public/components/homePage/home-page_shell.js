'use strict';

import { RenderHomePageTemplate } from './home-page_renderer.js';
import { setAttributes } from './tools/home_utilities.js';

const head = document.querySelector('head');
const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	src: '/components/homePage/home-page.js',
	content: 'text/javascript',
	alt: 'home-page',
	crossorigin: 'anonymous'
});
head.appendChild(script);

export class HomePageShell extends RenderHomePageTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || home-page_shell.js is now connected',
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `
            <home-page class="home-page"></home-page>

          
        `;
	}
}

customElements.define('home-page_shell', HomePageShell);
