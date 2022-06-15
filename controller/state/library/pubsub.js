'use strict';

export default class PubSub {
	constructor() {
		this.events = [];
	}
	subscribe(event, callback) {
		if (!this.events.hasOwnProperty.call(this.events, event)) {
			this.events[event] = [];
		}

		return this.events[event].push(callback);
	}
	publish(event, data = {}) {
		if (!this.events.hasOwnProperty.call(this.events, event)) {
			return [];
		}
		return this.events[event].map(callback => callback(data));
	}
}
