'use strict';
'use strict';

import appendChildren, { setAttributes } from './tools/sidebar_utilities.js';

// Build-up the navbar for the sidebar
const sidebarNav = document.createElement('nav'),
	// Build-up the sidebar header
	header = document.createElement('header'),
	image_textDiv = document.createElement('div'),
	headerSpan = document.createElement('span'),
	headerImage = document.createElement('img'),
	headerTextDiv = document.createElement('div'),
	headerSpanName = document.createElement('span'),
	headerProfessionSpan = document.createElement('span'),
	headerToggleI = document.createElement('i'),
	// Build-up the sidebar Menu-bar
	menubarDiv = document.createElement('div'),
	menuDiv = document.createElement('div'),
	searchboxLi = document.createElement('li'),
	boxIconI = document.createElement('i'),
	searchboxInput = document.createElement('input'),
	menuLinksUl = document.createElement('ul'),
	navLinkLiDash = document.createElement('li'),
	dashA = document.createElement('a'),
	dashI = document.createElement('i'),
	dashSpan = document.createElement('span'),
	revLi = document.createElement('li'),
	revA = document.createElement('a'),
	revI = document.createElement('i'),
	revSpan = document.createElement('span'),
	notifLi = document.createElement('li'),
	notifA = document.createElement('a'),
	notifI = document.createElement('i'),
	notifSpan = document.createElement('span'),
	analyticsLi = document.createElement('li'),
	analyticsA = document.createElement('a'),
	analyticsI = document.createElement('i'),
	analyticsSpan = document.createElement('span'),
	likesLi = document.createElement('li'),
	likesA = document.createElement('a'),
	likesI = document.createElement('i'),
	likesSpan = document.createElement('span'),
	walletsLi = document.createElement('li'),
	walletsA = document.createElement('a'),
	walletsI = document.createElement('i'),
	walletsSpan = document.createElement('span'),
	bottomContentDiv = document.createElement('div'),
	logoutLi = document.createElement('li'),
	logoutA = document.createElement('a'),
	logoutI = document.createElement('i'),
	logoutSpan = document.createElement('span'),
	// Light/Dark mode
	modeLi = document.createElement('li'),
	sunMoonDiv = document.createElement('div'),
	moonI = document.createElement('i'),
	sunI = document.createElement('i'),
	sunMoonSpan = document.createElement('span'),
	toggleDiv = document.createElement('div'),
	switchSpan = document.createElement('span');

// Set attributes for the sidebar nav
setAttributes(sidebarNav, {
	class: 'sidebar close'
});

// Set attributes for the sidebar header
setAttributes(header, {
	class: 'sidebar-header'
});
setAttributes(image_textDiv, {
	class: 'image-text'
});
setAttributes(headerSpan, {
	class: 'image'
});
setAttributes(headerImage, {
	src: '/components/webeSidebar/images/girl_chair_1.png',
	class: 'header-image'
});
setAttributes(headerTextDiv, {
	class: 'text logo-text'
});
setAttributes(headerSpanName, {
	class: 'name'
});
setAttributes(headerProfessionSpan, {
	class: 'profession'
});
setAttributes(headerToggleI, {
	class: 'bx bx-chevron-right toggle'
});

// Set attributes for the sidebar menubar
setAttributes(menubarDiv, {
	class: 'menu-bar'
});
setAttributes(menuDiv, {
	class: 'menu'
});
setAttributes(searchboxLi, {
	class: 'search-box'
});
setAttributes(boxIconI, {
	class: 'bx bx-search icon'
});
setAttributes(searchboxInput, {
	type: 'text',
	placeholder: 'Search...'
});
setAttributes(menuLinksUl, {
	class: 'menu-links'
});
setAttributes(navLinkLiDash, {
	class: 'nav-link'
});
setAttributes(dashA, {
	href: '#'
});
setAttributes(dashI, {
	class: 'bx bx-home-alt icon'
});
setAttributes(dashSpan, {
	class: 'text nav-text'
});
setAttributes(revLi, {
	class: 'nav-link'
});
setAttributes(revA, {
	href: '#'
});
setAttributes(revI, {
	class: 'bx bx-bar-chart-alt-2 icon'
});
setAttributes(revSpan, {
	class: 'text nav-text'
});
setAttributes(notifLi, {
	class: 'nav-link'
});
setAttributes(notifA, {
	href: '#'
});
setAttributes(notifI, {
	class: 'bx bx-bell icon'
});
setAttributes(notifSpan, {
	class: 'text nav-text'
});
setAttributes(analyticsLi, {
	class: 'nav-link'
});
setAttributes(analyticsA, {
	href: '#'
});
setAttributes(analyticsI, {
	class: 'bx bx-pie-chart-alt icon'
});
setAttributes(analyticsSpan, {
	class: 'text nav-text'
});
setAttributes(likesLi, {
	class: 'nav-link'
});
setAttributes(likesA, {
	href: '#'
});
setAttributes(likesI, {
	class: 'bx bx-heart icon'
});
setAttributes(likesSpan, {
	class: 'text nav-text'
});
setAttributes(walletsLi, {
	class: 'nav-link'
});
setAttributes(walletsA, {
	href: '#'
});
setAttributes(walletsI, {
	class: 'bx bx-wallet icon'
});
setAttributes(walletsSpan, {
	class: 'text nav-text'
});
setAttributes(bottomContentDiv, {
	class: 'bottom-content'
});
setAttributes(logoutLi, {
	class: ''
});
setAttributes(logoutA, {
	href: '#'
});
setAttributes(logoutI, {
	class: 'bx bx-log-out icon'
});
setAttributes(logoutSpan, {
	class: 'text nav-text'
});
// Set attributes for the sidebar mode
setAttributes(modeLi, {
	class: 'mode'
});
setAttributes(sunMoonDiv, {
	class: 'sun-moon'
});
setAttributes(moonI, {
	class: 'bx bx-moon icon moon'
});
setAttributes(sunI, {
	class: 'bx bx-sun icon sun'
});
setAttributes(sunMoonSpan, {
	class: 'mode-text text'
});
setAttributes(toggleDiv, {
	class: 'toggle-switch'
});
setAttributes(switchSpan, {
	class: 'switch'
});

const headerSpanNameText = (headerSpanName.innerHTML = `Summer/n/s Dress`);
const headerSpanProfessionText =
	(headerProfessionSpan.innerHTML = `Beautiful Custom Dresses`);
const dashSpanText = (dashSpan.innerHTML = `Dashboard`);
const revSpanText = (revSpan.innerHTML = `Revenue`);
const notifSpanText = (notifSpan.innerHTML = `Notifications`);
const analyticsSpanText = (analyticsSpan.innerHTML = `Analytics`);
const likesSpanText = (likesSpan.innerHTML = `Likes`);
const walletsSpanText = (walletsSpan.innerHTML = `Wallets`);
const logoutSpanText = (logoutSpan.innerHTML = `Logout`);
const sunMoonSpanText = (sunMoonSpan.innerHTML = `Dark Mode`);

const sidebarTextArray = [
	headerSpanNameText,
	headerSpanProfessionText,
	dashSpanText,
	revSpanText,
	notifSpanText,
	analyticsSpanText,
	likesSpanText,
	walletsSpanText,
	logoutSpanText,
	sunMoonSpanText
];

// Append elements to the header
image_textDiv.appendChild(headerImage);
appendChildren(headerTextDiv, [headerSpanName, headerProfessionSpan]);
appendChildren(header, [image_textDiv, headerToggleI]);

// Append elements to the menubar
appendChildren(searchboxLi, [boxIconI, searchboxInput]);
appendChildren(dashA, [dashI, dashSpan]);
navLinkLiDash.appendChild(dashA);
appendChildren(revA, [revI, revSpan]);
revLi.appendChild(revA);
appendChildren(notifA, [notifI, notifSpan]);
notifLi.appendChild(notifA);
appendChildren(analyticsA, [analyticsI, analyticsSpan]);
analyticsLi.appendChild(analyticsA);
appendChildren(likesA, [likesI, likesSpan]);
likesLi.appendChild(likesA);
appendChildren(walletsA, [walletsI, walletsSpan]);
walletsLi.appendChild(walletsA);
appendChildren(menuLinksUl, [
	navLinkLiDash,
	revLi,
	notifLi,
	analyticsLi,
	likesLi,
	walletsLi
]);
appendChildren(menuDiv, [searchboxLi, menuLinksUl]);
appendChildren(logoutA, [logoutI, logoutSpan]);
logoutLi.appendChild(logoutA);
appendChildren(sunMoonSpan, [sunI, moonI]);
appendChildren(modeLi, [sunMoonDiv, sunMoonSpan, toggleDiv]);
appendChildren(bottomContentDiv, [logoutLi, modeLi, toggleDiv]);
appendChildren(menubarDiv, [menuDiv, bottomContentDiv]);

// Append the elements to the sidebar nav
appendChildren(sidebarNav, [header, menubarDiv]);

export { sidebarNav as default, sidebarTextArray };
