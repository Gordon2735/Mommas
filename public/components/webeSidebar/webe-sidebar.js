'use strict';

import { RenderSidebarTemplate } from './sidebar_renderer.js';
import { sidebar_sharedStyles } from './sidebar_sharedStyles.js';
import sidebarNav, { sidebarTextArray } from './sidebar_service.js';
import { renderArray } from './tools/sidebar_utilities.js';

export class WebeSidebar extends RenderSidebarTemplate {
	constructor() {
		super();

		this.noShadow = false;

		console.info(
			`%c This Web Component has || ** FIRED ** || and the webe-sidebar.js is now rendered`,
			`Application STATE is minded by the store with event and data operations being monitored 
        for value changes; `,
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)'
		);
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		const RenderSidebar = async () => {
			root.appendChild(sidebarNav);
			renderArray(sidebarTextArray);
		};
		RenderSidebar();
	}
	get template() {
		return `

        <style>
            ${sidebar_sharedStyles.sidebar}
        </style>

    `;
	}
}

customElements.define('webe-sidebar', WebeSidebar);
