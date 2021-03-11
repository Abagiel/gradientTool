import GradientBlock from './GradientBlock.js';
import { selector } from '../utils/config.js';
import { copyToClipboard, createElement } from '../utils/functions.js';

export default class Test {
	constructor() {
		this.root = createElement('div', 'gradienT');
		this.id = -1;
		this.gradients = [];
		this.elements = Array.from(document.querySelectorAll(selector));
	}

	init() {
		this.createRoot();
		this.addGradient();
	}

	addGradient() {
		const root = this.addContainer();

		this.gradients.push(new GradientBlock(root, this));
		this.initGradients();
	}

	removeGradient(id) {
		this.removeContainer(id);
		this.gradients = this.gradients.filter(g => g._id !== id);
	}

	addContainer() {
		const container = createElement('div', 'con-' + ++this.id);

		this.root.append(container);

		return container;
	}
	removeContainer(id) {
		document.querySelector(`#${id}`).remove();
	}

	initGradients() {
		this.gradients.forEach(gr => gr.init());
	}

	copyCSS(e) {
		e.target.textContent = 'Copied!';

		copyToClipboard(this.elements[0].getAttribute('style'));

		setTimeout(() => e.target.textContent = 'Copy CSS', 1000);
	}

	createRoot() {
		const addGradientBtn = createElement('button', 'add-gradient', 'Add Gradient');
		const copyCSSBtn = createElement('button', 'copy-css', 'Copy CSS');

		this.root.append(copyCSSBtn);
		this.root.append(addGradientBtn);
		this.addEvent([['click', this.addGradient.bind(this)]], addGradientBtn);
		this.addEvent([['click', this.copyCSS.bind(this)]], copyCSSBtn);
		document.body.append(this.root);
	}

	clearRoot(root) {
		root.innerHTML = '';
	}

	insertHTML(html, root) {
		root.insertAdjacentHTML('beforeend', html);
	}

	addEvent(events, root) {
		events.forEach(e => root.addEventListener(e[0], e[1]));
	}

	renderElements(fn, option) {
		this.elements.forEach(el => {
			el.style.backgroundImage = fn();
			el.style.backgroundSize = option('', 'bgw', 'bgh');
			el.style.backgroundPosition = option('', 'bgx', 'bgy');
			el.style.backgroundRepeat = option('', 'repeat');
		})
	}
}