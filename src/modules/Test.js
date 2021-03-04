import GradientBlock from './GradientBlock.js';
import { selector } from '../utils/config.js';

export default class Test {
	constructor() {
		this.root = document.createElement('div');
		this.id = -1;
		this.gradients = [];
		this.elements = Array.from(document.querySelectorAll(selector));
	}

	init() {
		this.createRoot();
		this.addGradient();
	}

	addGradient() {
		this.clearRoot(this.root);
		this.gradients.push(new GradientBlock(this.addContainer(), this));
		this.initGradients();
	}

	addContainer() {
		const container = document.createElement('div');
		container.id = ++this.id;

		this.root.append(container);

		return container;
	}

	initGradients() {
		this.gradients.forEach(gr => gr.init());
	}

	createRoot() {
		this.root.id = 'gradienT';
		document.body.append(this.root);
	}

	clearRoot(root) {
		root.innerHTML = '';
	}

	insertRootHTML(html, root) {
		root.insertAdjacentHTML('beforeend', html);
	}

	addEvent(events) {
		events
		 .forEach(e => this.root.addEventListener(e[0], e[1]));
	}

	renderElements({ bgw, bgh, bgx, bgy, repeat }, fn) {
		this.elements.forEach(el => {
			el.style.backgroundImage = fn();
			el.style.backgroundSize = `${bgw}px ${bgh}px`;
			el.style.backgroundPosition = `${bgx}px ${bgy}px`;
			el.style.backgroundRepeat = repeat;
		})
	}
}