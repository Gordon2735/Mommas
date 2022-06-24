'use strict';

import { RenderSidebarTemplate } from './sidebar-renderer.js';
import { sidebarSharedStyles as Styles } from './sidebarSharedStyles.js';
import { serviceHTML } from './sidebar-service.js';

export class WebeSidebar extends RenderSidebarTemplate {
	constructor() {
		super();

		this.noShadow = false;

		console.info(
			`%c This Web Component has || ** FIRED ** || and the webe-sidebar.js is now rendered`,
			`Application STATE is minded by the store with event and data operations being monitored 
        for value changes; `,
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%)',
			`Gordon's TESTING ${new Date()}`
		);
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;
		const menuIconButton = root.querySelector('[data-menu-icon-btn]');
		const sidebar = root.querySelector('[data-sidebar]');

		this.menuIconButton = menuIconButton;
		this.sidebar = sidebar;
		this.menuIconButton.setAttribute('inprogress', 'false');

		this.menuIconButton.addEventListener('click', () => {
			if (this.menuIconButton.getAttribute('inprogress') === 'false') {
				this.menuIconButton.setAttribute('inprogress', 'true');
				this.sidebar.classList.toggle('open');
			} else if (
				this.menuIconButton.getAttribute('inprogress') === 'true'
			) {
				this.menuIconButton.setAttribute('inprogress', 'false');
				this.sidebar.classList.toggle('open');
			}
		});
	}
	get template() {
		return /*html*/ `
			
			<style>
				${Styles.sidebar}
			</style>

			${serviceHTML}

			<style>
				${Styles.home}
			</style>

		`;
	}
	static get observedAttributes() {
		return ['inprogress', 'open'];
	}
	set inprogress(progress) {
		if (progress) {
			this.setAttribute('inprogress', 'true');
		} else {
			this.removeAttribute('inprogress');
		}
	}
	get inprogress() {
		return this.getAttribute('inprogress');
	}
	set toggle(toggled) {
		if (toggled) {
			this.sidebar.classList.toggle('open') === 'true';
		} else {
			this.sidebar.classList.toggle('open') === 'false';
		}
	}
	get toggle() {
		return this.sidebar.classList.toggle('open');
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		if (newValue) {
			this.menuIconButton.inprogress = 'true';
			this.sidebar.classList.toggle('open');
		} else if (oldValue) {
			this.menuIconButton.inprogress = 'false';
			this.sidebar.classList.toggle('open') === 'false';
		}
	}
}

customElements.define('webe-sidebar', WebeSidebar);
