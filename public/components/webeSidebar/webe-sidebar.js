'use strict';

import { RenderSidebarTemplate } from './sidebar_renderer.js';
import { sidebarSharedStyles as Styles } from './sidebarSharedStyles.js';
import { html_InitialRender as pageHTML } from './sidebar_InitialRender.js';
import appendChildren, {
	setAttributes,
	appender
} from './tools/sidebar_utilities.js';

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

		const style = document.createElement('style');
		// const renderStyles = (style.innerHTML = Styles.sidebar);
		// root.append(renderStyles);
		style.innerHTML = `${Styles.sidebar}`;
		root.innerHTML = `${pageHTML}`;
		appender(root, [style]);

		const sidebar = root.querySelector('nav'),
			toggle = root.querySelector('.toggle'),
			searchBtn = root.querySelector('.search-box'),
			modeSwitch = root.querySelector('.toggle-switch'),
			modeText = root.querySelector('.mode-text');

		toggle.addEventListener('click', () => {
			sidebar.classList.toggle('close');
		});

		searchBtn.addEventListener('click', () => {
			sidebar.classList.remove('close');
		});

		modeSwitch.addEventListener('click', () => {
			root.classList.toggle('dark');

			if (root.classList.contains('dark')) {
				modeText.innerText = 'Light mode';
			} else {
				modeText.innerText = 'Dark mode';
			}
		});
	}
	// get template() {
	// 	render();
	// }
	// render() {}

	// get sidebar() {
	// 	return this.getAttribute('sidebar');
	// }
	// set sidebar(value) {
	// 	this.setAttribute('sidebar', value);
	// }
	// get modeText() {
	// 	return this.getAttribute(modeText);
	// }
	// set modeText(value) {
	// 	this.setAttribute('modeText', value);
	// }
	// static get observedAttributes() {
	// 	return ['sidebar', 'modeText'];
	// }
	// attributeChangedCallback(name, oldVal, newVal) {
	// 	this.render();
	// }
}

window.customElements.define('webe-sidebar', WebeSidebar);
