'use strict';

import { format } from 'date-fns';

const dateFormat = () => {
	const yearNow = `${format(new Date(), 'yyyy')}`;
	return yearNow;
};

export default dateFormat;
