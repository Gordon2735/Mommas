'use strict';

import { setAttributes } from './tools/utility_functions.js';

const init = async () => {
	const head = document.querySelector('head');
	const indexPrimerScript = document.createElement('script');
	setAttributes(indexPrimerScript, {
		type: 'module',
		src: '/state/indexPrimer.js',
		content: 'text/javascript',
		crossorigin: 'anonymous',
		alt: 'indexPrimer'
	});
	head.appendChild(indexPrimerScript);

	console.info(
		`%c The indexPrimer script has || **FIRED** || and is now loaded`,
		`background: #000; color: #bada55; font-size: 1.2em;`
	);
};

window.addEventListener('DOMContentLoaded', init);
