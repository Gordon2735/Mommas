'use strict';

import { RenderHomePageTemplate } from './home-page_renderer.js';
import { home_sharedStyles } from './home_sharedStyles.js';
import homeArray, { homeTextElements } from './home-page_services.js';
import appendChildren, { renderArray } from './tools/home_utilities.js';

export class HomePage extends RenderHomePageTemplate {
	constructor() {
		super();

		this.noShadow = false;
		const root = this.shadowRoot;

		console.info(
			`%c This Web Component has || ** FIRED ** || and the home-page.js is now rendered`,
			`Application STATE is minded by the store with event and data operations being monitored 
        for value changes; `,
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)'
		);
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		const RenderDOM = async () => {
			appendChildren(root, homeArray);
			renderArray(homeTextElements);
		};
		RenderDOM();
	}
	get template() {
		return `
    
      <style>
        ${home_sharedStyles.homePage}
      </style>
    
    `;
	}
}

customElements.define('home-page', HomePage);
