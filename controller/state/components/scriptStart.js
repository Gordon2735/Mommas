'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';
import appendChildren, {
	setAttributes
} from '/src/js/tools/utility_functions.js';

const navbarShellScript = document.createElement('script');
setAttributes(navbarShellScript, {
	type: 'module',
	src: '/components/webeNavbar/webe-navbarshell.js',
	content: 'text/javascript',
	id: 'navbar-shell-script',
	crossorigin: 'anonymous',
	alt: 'webe-navbarshell'
});
const homePageShellScript = document.createElement('script');
setAttributes(homePageShellScript, {
	type: 'module',
	src: '/components/homePage/home-page_shell.js',
	content: 'text/javascript',
	id: 'home-page-shell-script',
	crossorigin: 'anonymous',
	alt: 'home-page-shell-script'
});
const webeSidebarShellScript = document.createElement('script');
setAttributes(webeSidebarShellScript, {
	type: 'module',
	src: '/components/webeSidebar/sidebar-shell.js',
	content: 'text/javascript',
	id: 'sidebar-shell-script',
	crossorigin: 'anonymous',
	alt: 'sidebar-shell'
});

export default class StartScripts extends Component {
	constructor() {
		super({
			store,
			element: document.getElementById('head')
		});
	}
	async render() {
		await appendChildren(this.element, [
			navbarShellScript,
			homePageShellScript,
			webeSidebarShellScript
		]);
		return;
	}
}
