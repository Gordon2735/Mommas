'use strict';

import appendChildren, {
	setAttributes,
	appender,
	renderArray
} from './tools/navbar_utilities.js';

const navbar = document.createElement('nav');
const aToggle = document.createElement('a');
const divLinks = document.createElement('div');

const init = () => {
	// navigation bar
	const divTitle = document.createElement('div');
	const span1 = document.createElement('span');
	const span2 = document.createElement('span');
	const span3 = document.createElement('span');
	const ulLinks = document.createElement('ul');
	const aHome = document.createElement('a');
	const aAbout = document.createElement('a');
	const aContact = document.createElement('a');
	const aLogin = document.createElement('a');
	const chairImg = document.createElement('img');

	setAttributes(navbar, {
		class: 'navbar',
		id: 'navbar'
	});
	setAttributes(divTitle, {
		class: 'navbar-title',
		id: 'navbar-title'
	});
	setAttributes(aToggle, {
		class: 'toggle-button',
		href: '#'
	});
	setAttributes(span1, {
		class: 'bar'
	});
	setAttributes(span2, {
		class: 'bar'
	});
	setAttributes(span3, {
		class: 'bar'
	});
	setAttributes(divLinks, {
		class: 'navbar-links',
		id: 'navbar-links'
	});
	setAttributes(ulLinks, {
		class: 'ul-links',
		id: 'ul-links'
	});
	setAttributes(aHome, {
		class: 'a-links',
		id: 'a-home',
		href: '#'
	});
	setAttributes(aAbout, {
		class: 'a-links',
		id: 'a-about',
		href: '#'
	});
	setAttributes(aContact, {
		class: 'a-links',
		id: 'a-contact',
		href: '#'
	});
	setAttributes(aLogin, {
		class: 'a-links',
		id: 'a-login',
		href: '#'
	});
	setAttributes(chairImg, {
		class: 'girl-chair',
		id: 'girl-chair',
		src: '/components/homePage/images/summers_IMG/girl_chair_1.png'
	});

	const titleText = (divTitle.innerHTML = `Summer's Dress`);
	const homeText = (aHome.innerHTML = `Home`);
	const aboutText = (aAbout.innerHTML = `About`);
	const contactText = (aContact.innerHTML = `Contact`);
	const loginText = (aLogin.innerHTML = `Login`);

	// Element Arrays
	const navbarArray = [divTitle, aToggle, divLinks, chairImg];
	const spanArray = [span1, span2, span3];
	const aArray = [aHome, aAbout, aContact, aLogin];
	const textArray = [titleText, homeText, aboutText, contactText, loginText];

	// Append and Render the navigation bar
	appender(aToggle, spanArray);
	appendChildren(navbar, navbarArray);
	divLinks.appendChild(ulLinks);

	const aLoopList = (list_a, attribute, element) => {
		list_a.forEach(item_a => {
			const li = document.createElement('li');
			li.append(item_a);
			li.setAttribute('class', attribute);
			element.appendChild(li);
		});
	};
	aLoopList(aArray, 'li-links', ulLinks);

	renderArray(textArray);
};

export { navbar as default, init, aToggle, divLinks };
