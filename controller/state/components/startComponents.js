'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';
import appendChildren, {
	setAttributes
} from '/src/js/tools/utility_functions.js';

const webeNavbarShell = document.createElement('webe-navbarshell');
setAttributes(webeNavbarShell, {
	type: 'module',
	class: 'navbar-shell',
	id: 'navbar-shell',
	src: '/components/webeNavbar/webe-navbarshell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'webe-navbarshell'
});

const homePageShell = document.createElement('home-page_shell');
setAttributes(homePageShell, {
	type: 'module',
	class: 'home-page-shell',
	id: 'home-page-shell',
	src: '/components/homePage/home-page_shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'home-page-shell-script'
});

const webeSidebarShell = document.createElement('sidebar-shell');
setAttributes(webeSidebarShell, {
	type: 'module',
	class: 'sidebar-shell',
	id: 'sidebar-shell',
	src: '/components/webeSidebar/sidebar-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'sidebar-shell'
});

export default class StartComponents extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(webeNavbarShell);
		this.element.appendChild(webeSidebarShell);
		// this.element.appendChild(homePageShell);

		return;
	}
}
