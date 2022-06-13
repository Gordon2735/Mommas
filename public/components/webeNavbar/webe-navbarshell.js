'use strict';

import { RenderNavbarTemplate } from './webe-navbar_renderer.js';
import { sharedStyles } from './sharedStyles.js';
import './webe-navbar.js';
import { setAttributes } from './tools/navbar_utilities.js';

const head = document.querySelector('head');
const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	src: '/components/webeNavbar/webe-navbar.js'
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

			
	
		<h1 class="title-h1">Coming Soon !</h1>

		<h4 class="title-h4">  Dresses <div class="section-sign">&#936;</div> made just the way they ought to be!</h4>

		  <img class="curtsy-img" src="/components/homePage/images/summers_IMG/curtsy_girl_2.png" alt="curtsy" />
		  <img class="marys-lamb" src="/components/homePage/images/summers_IMG/marys_lamb.png" alt="Mary's beautiful dress and her little lamb!" />
		`;
	}
}

customElements.define('webe-navbarshell', WebeNavbarShell);
