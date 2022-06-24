'use strict';

import { RenderSidebarTemplate } from './sidebar-renderer.js';
import { sidebarSharedStyles as Styles } from './sidebarSharedStyles.js';
import { setAttributes } from './tools/sidebar_utilities.js';

export class SidebarSpecial extends RenderSidebarTemplate {
	constructor() {
		super();

		this.noShadow = false;

		console.info(
			`%c This Web Component has || ** FIRED ** || and the sidebar-special.js is now rendered`,
			`Application STATE is minded by the store with event and data operations being monitored 
        for value changes; `,
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)',
			`Gordon's TESTING ${new Date()}`
		);
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;
		const specialH3 = document.createElement('h3');
		setAttributes(specialH3, {
			id: 'special-h3',
			class: 'special-h3'
		});
		specialH3.innerText = 'Special';
		root.appendChild(specialH3);
	}
	get template() {
		return /*html*/ `
            <style>
                ${Styles.special}
            </style>


        `;
	}
}
customElements.define('sidebar-special', SidebarSpecial);
