'use strict';

import { RenderNavbarTemplate } from './webe-navbar_renderer.js';
import { sharedStyles } from './sharedStyles.js';
import navbar, { init, aToggle, divLinks } from './webe-navbar_service.js';

export class WebeNavbar extends RenderNavbarTemplate {
	constructor() {
		super();

		this.noShadow = false;
		const root = this.shadowRoot;

		console.info(
			`${root}`,
			`%c This Web Component has rendered a || * Shadow DOM * || and webe-navbar.js is now connected',
		'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)`
		);
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		const RenderDOM = () => {
			init();
			root.appendChild(navbar);
		};
		RenderDOM();

		const toggleButton = document.querySelector('.toggle-button');
		const navbarLinks = document.querySelector('.navbar-links');

		aToggle.addEventListener('click', () => {
			divLinks.classList.toggle('active');
		});
	}
	get template() {
		return `
			<style>
				${sharedStyles.navbar}
			</style>		
        `;
	}

	// static get observedAttributes() {
	// 	return ['active', 'navbar-links'];
	// }
	// attributeChangedCallback(attrName, oldVal, newVal) {
	// 	console.log(`${attrName} changed from ${oldVal} to ${newVal}`);
	// }
}
customElements.define('webe-navbar', WebeNavbar);
