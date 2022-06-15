'use strict';

import Status from '/state/components/status.js';

const statusInstance = new Status();

statusInstance.render(),
	() => {
		console.info(`statusInstance rendered`);
	};
