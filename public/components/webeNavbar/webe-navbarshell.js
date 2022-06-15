'use strict';

import { RenderNavbarTemplate } from './webe-navbar_renderer.js';
import { sharedStyles } from './sharedStyles.js';
import { setAttributes } from './tools/navbar_utilities.js';

const head = document.querySelector('head');
const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	src: '/components/webeNavbar/webe-navbar.js',
	content: 'text/javascript',
	alt: 'webe-navbar',
	crossorigin: 'anonymous'
});

export class WebeNavbarShell extends RenderNavbarTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || webe-navbar_shell.js is now connected',
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%);'
		);
		head.appendChild(script);
	}
	get template() {
		return `
			
            <webe-navbar class="webe-navbar"></webe-navbar>

            <style>
                ${sharedStyles.global}
            </style>
		`;
	}
}

customElements.define('webe-navbarshell', WebeNavbarShell);
