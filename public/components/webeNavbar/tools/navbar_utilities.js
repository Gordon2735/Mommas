'use strict';

// Append multiple children to a parent element
export default async function appendChildren(parent, children) {
	children.forEach(child => {
		parent.appendChild(child);
	});
}

// Remove multiple children from a parent element
export async function removeChildren(parent, children) {
	children.forEach(child => {
		parent.removeChild(child);
	});
}

// Quick getElementById function
export const elementById = id => document.getElementById(id);

// Quick getElementsByClassName function
export const getTagByClass = (appending, className) => {
	appending.getElementsByClassName(className);
};
// Set multiple Attributes
export async function setAttributes(tag, attributes) {
	for (const key in attributes) {
		await tag.setAttribute(key, attributes[key]);
	}
}

// Create a List
export const listMaker = async (list, element) => {
	list.forEach(item => {
		element.appendChild(item);
	});
};

// Create a list with attributes
export const loopList = async (list_li, attribute, element) => {
	list_li.forEach(item_li => {
		const li = document.createElement('li');
		li.append(item_li);
		li.setAttribute('class', attribute);
		element.appendChild(li);
	});
};

// Quick Append function
export const appender = async (parent, children) => {
	children.map(child => {
		parent.append(child);
	});
};

// Render several scripts to the Head Element
export const renderHeadScripts = async (scripts, renderNote) => {
	const head = document.querySelector('head');
	for (const script of scripts) {
		head.appendChild(script);
	}
	return renderNote;
};

// Iterate over an array and render each item to the DOM
export const renderArray = async array => {
	array.map(item => {
		return item;
	});
};
