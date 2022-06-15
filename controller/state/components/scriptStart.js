'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';
import { setAttributes } from '/components/homePage/tools/home_utilities.js';

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

export default class StartScripts extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('head')
		});
	}
	render() {
		this.element.appendChild(navbarShellScript);
		this.element.appendChild(homePageShellScript);

		return;
	}
}
