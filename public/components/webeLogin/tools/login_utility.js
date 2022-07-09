'use strict';

function keys(objKeys) {
	return Object.keys(objKeys);
}
// create setAttributes with functional programming approach to set multiple attributes
export default function setAttributes(element, attributes) {
	keys(attributes).map(function (key) {
		element.setAttribute(key, attributes[key]);
	});
}
