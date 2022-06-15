'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

export default class Status extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-status')
		});
	}
	render() {
		let suffix = store.state.items.length !== 1 ? 's' : '';
		this.element.innerHTML = `${store.state.items.length} item${suffix}`;
	}
}
