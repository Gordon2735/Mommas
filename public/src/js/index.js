'use strict';

import appendChildren, {
	setAttributes,
	renderArray
} from './tools/utility_functions.js';

const init = async () => {
	const head = document.querySelector('head');
	const navbarShellScript = document.createElement('script');
	const webeNavbarShell = document.createElement('webe-navbarshell');
	await setAttributes(navbarShellScript, {
		type: 'module',
		src: '/components/webeNavbar/webe-navbarshell.js',
		content: 'text/javascript'
	});
	await setAttributes(webeNavbarShell, {
		class: 'navbar-shell',
		id: 'navbar-shell',
		src: '/components/webeNavbar/webe-navbarshell.js'
	});
	await appendChildren(head, navbarShellScript);
};

window.addEventListener('DOMContentLoaded', init);
