'use strict';

import { RenderSidebarTemplate } from './sidebar-renderer.js';
import { sidebarSharedStyles as Styles } from './sidebarSharedStyles.js';
import { setAttributes } from './tools/sidebar_utilities.js';

const head = document.querySelector('head');
const script = document.createElement('script');
setAttributes(script, {
	type: 'module',
	src: '/components/webeSidebar/webe-sidebar.js',
	content: 'text/javascript',
	alt: 'webe-sidebar',
	crossorigin: 'anonymous'
});
const scriptSpecial = document.createElement('script');
setAttributes(scriptSpecial, {
	type: 'module',
	src: '/components/webeSidebar/sidebar-special.js',
	content: 'text/javascript',
	alt: 'sidebar-special',
	crossorigin: 'anonymous'
});
const scriptService = document.createElement('script');
setAttributes(scriptService, {
	type: 'module',
	src: '/components/webeSidebar/sidebar-service.js',
	content: 'text/javascript',
	alt: 'sidebar-special',
	crossorigin: 'anonymous'
});
export class SidebarShell extends RenderSidebarTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || sidebar-shell.js is now connected',
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%);'
		);
		head.appendChild(script);
		head.appendChild(scriptSpecial);
	}
	get template() {
		return /*html*/ `
        
            <webe-sidebar class="webe-sidebar"></webe-sidebar>

			<style>
				${Styles.shell}			
			</style>        
        `;
	}
}

customElements.define('sidebar-shell', SidebarShell);
