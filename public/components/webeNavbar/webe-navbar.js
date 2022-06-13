'use strict';

import { RenderNavbarTemplate } from './webe-navbar_renderer.js';
import { sharedStyles } from './sharedStyles.js';
import navbar, { init, aToggle, divLinks } from './webe-navbar_service.js';

const body = document.querySelector('body');
export class WebeNavbar extends RenderNavbarTemplate {
	constructor() {
		super();

		this.noShadow = false;
		const root = this.shadowRoot;

		console.info(
			`${this.shadowRoot}`,
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
		console.log(navbar);

		const toggleButton = document.querySelector('.toggle-button');
		const navbarLinks = document.querySelector('.navbar-links');

		aToggle.addEventListener('click', () => {
			divLinks.classList.toggle('active');
			// const update = navbarLinks.classList.toggle('active');
			// try {
			// 	if (update === 'true') {
			// 		console.info(
			// 			update,
			// 			`%c Toggle Button is Active`,
			// 			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)'
			// 		);
			// 		navbarLinks.classList.toggle('active');
			// 	}
			// } catch (error) {
			// 	console.error(`Sorry, apparently there was an error with this toggle button,
			// 		${error}`);
			// }
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
