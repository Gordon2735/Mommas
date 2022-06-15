'use strict';

import actions from '/state/store/actions.js';
import mutations from '/state/store/mutations.js';
import state from '/state/store/state.js';
import Store from '/state/store/store.js';

export default new Store({
	actions,
	mutations,
	state
});
