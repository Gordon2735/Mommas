'use strict';

import { RenderSidebarTemplate } from './sidebar_renderer.js';
import { sidebarSharedStyles as Styles } from './sidebarSharedStyles.js';
import { setAttributes } from './tools/sidebar_utilities.js';

export class SidebarShell extends RenderSidebarTemplate {
	constructor() {
		super();

		this.noShadow = true;

		const head = document.querySelector('head');
		const script = document.createElement('script');
		setAttributes(script, {
			type: 'module',
			src: '/components/webeSidebar/webe-sidebar.js',
			content: 'text/javascript',
			alt: 'webe-sidebar',
			crossorigin: 'anonymous'
		});
		head.appendChild(script);
	}
	connectedCallback() {
		super.connectedCallback();

		console.info(
			'%c This Web Component has || * FIRED * || sidebar-shell.js is now connected',
			'background: hsl(0, 0%, 2%); color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `
        
            <webe-sidebar class="webe-sidebar"></webe-sidebar>

			<style>
			
				${Styles.shell}
			
			</style>
        
        `;
	}
}

window.customElements.define('sidebar-shell', SidebarShell);
