'use strict';

import appendChildren, {
	setAttributes,
	appender,
	renderArray
} from './tools/home_utilities.js';

const h1Title = document.createElement('h1');
const h4Title = document.createElement('h4');
const divSymbol = document.createElement('div');
const imgCurtsy = document.createElement('img');
const imgMarysLamb = document.createElement('img');

setAttributes(h1Title, {
	class: 'title-h1',
	id: 'title-h1'
});
setAttributes(h4Title, {
	class: 'title-h4',
	id: 'title-h4'
});
setAttributes(divSymbol, {
	class: 'symbol',
	id: 'symbol'
});
setAttributes(imgCurtsy, {
	class: 'curtsy-img',
	id: 'curtsy-img',
	src: '/components/homePage/images/summers_IMG/curtsy_girl_2.png',
	alt: 'curtsy image'
});
setAttributes(imgMarysLamb, {
	class: 'marys-lamb',
	id: 'marys-lamb',
	src: '/components/homePage/images/summers_IMG/Marys_lamb.png',
	alt: `Mary's beautiful dress and her little lamb!`
});

const h1Text = (h1Title.innerHTML = `Coming Soon !`);
const h4Text = (h4Title.innerHTML = `Summer's Dress`);
const divSymbolText = (divSymbol.innerHTML = `&#936;`);

export const homeTextElements = [h1Text, h4Text, divSymbolText];
const homeArray = [h1Title, h4Title, divSymbol, imgCurtsy, imgMarysLamb];

export default homeArray;
