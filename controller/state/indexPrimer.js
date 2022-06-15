'use strict';

import store from '/state/store/indexState.js';
import StartScripts from '/state/components/scriptStart.js';
import StartComponents from '/state/components/startComponents.js';

const webeNavbarShell = document.querySelector('.navbar-shell');
const homePageShell = document.querySelector('.home-page-shell');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkNavbar = async () => {
			webeNavbarShell.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('webeNavbarShell', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cNavbar Shell Element Loaded',
						'background: #222; color: #bada55'
					);
				}
			);
		};
		checkNavbar();

		const checkHomePage = async () => {
			homePageShell.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('homePageShell', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cHome Page Shell Element Loaded',
						'background: #222; color: #bada55'
					);
				}
			);
		};
		checkHomePage();
	}
};
currentDOM();

export const checkBody = async () => {
	if (store.state.checkBody === true) {
		const domBody = async () => {
			document.body.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('domBody', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					store.state('DOMContentLoaded', true);
				}
			);
		};
		domBody();
	} else {
		await new Promise(
			resolve => setTimeout(resolve, 100),
			() => {
				if (store.state.checkBody === false) {
					store.state('DOMContentLoaded', true);
				}
			}
		);
	}
};
checkBody();

const startScriptsInstance = new StartScripts();
const startComponentsInstance = new StartComponents();

startScriptsInstance.render();
startComponentsInstance.render();
