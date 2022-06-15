'use strict';

export class RenderHomePageTemplate extends HTMLElement {
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render();
	}
	render(template) {
		if (this.noShadow) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.shadowRoot.innerHTML = template || this.template;
		}
	}
}

// Used to Render the component and instantiate it in the DOM or in
// the Shadow DOM "shadowRoot".
