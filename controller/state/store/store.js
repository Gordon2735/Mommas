'use strict';

import PubSub from '/state/library/pubsub.js';

export default class Store {
	constructor(params) {
		const thiz = this;
		this.actions = {};
		this.mutations = {};
		this.state = {};
		this.status = 'resting';

		this.events = new PubSub();

		if (params.hasOwnProperty.call(params, 'actions')) {
			this.actions = params.actions;
		}
		if (params.hasOwnProperty.call(params, 'mutations')) {
			this.mutations = params.mutations;
		}

		// state is passed in
		this.state = new Proxy(params.state || {}, {
			set: function (target, key, value) {
				state[key] = value;

				console.log(`stateChange: ${key}: ${value}`);

				thiz.events.publish('stateChange', thiz.state);

				if (thiz.status !== 'mutation') {
					console.warn(`You should usse a mutation to set ${key}`);
				}
				thiz.status = 'resting';

				return true;
			}
		});
	}

	/**
	 * A dispatcher for actions that looks in the actions
	 * collection and runs the action if it can find it
	 *
	 * @param {string} actionKey
	 * @param {mixed} payload
	 * @returns {boolean}
	 * @memberof Store
	 */
	dispatch(actionKey, payload) {
		if (typeof this.actions[actionKey] !== 'function') {
			console.error(`Action "${actionKey}" doesn't exist`);
			return false;
		}
		console.groupCollapsed(`Action: ${actionKey}`);

		this.status = 'action';

		this.actions[actionKey](this, payload);

		console.groupEnd();

		return true;
	}

	/**
	 * Look for a mutation and modify the state object
	 * if that mutation exists by calling it
	 *
	 * @param {string} mutationKey
	 * @param {mixed} payload
	 * @returns {boolean}
	 * @memberof Store
	 */
	commit(mutationKey, payload) {
		if (typeof this.mutations[mutationKey] !== 'function') {
			console.log(`Mutation "${mutationKey}" doesn't exist`);
			return false;
		}
		this.status = 'mutation';

		let newState = this.mutations[mutationKey](this.state, payload);

		this.state = Object.assign(this.state, newState);

		return true;
	}
}
