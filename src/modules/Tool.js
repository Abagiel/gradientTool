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
		const root = this.addContainer();

		this.gradients.push(new GradientBlock(root, this));
		this.initGradients();
	}

	removeGradient(id) {
		this.removeContainer(id);
		this.gradients = this.gradients.filter(g => g._id !== id);
	}

	addContainer() {
		const container = document.createElement('div');
		container.id = 'con-' + ++this.id;

		this.root.append(container);

		return container;
	}
	removeContainer(id) {
		document.querySelector(`#${id}`).remove();
	}

	initGradients() {
		this.gradients.forEach(gr => gr.init());
	}

	createRoot() {
		const addGradientBtn = document.createElement('button');
		addGradientBtn.id = 'add-gradient';
		addGradientBtn.textContent = 'Add Gradient';

		this.root.append(addGradientBtn);
		this.addEvent([['click', this.addGradient.bind(this)]], addGradientBtn);
		this.root.id = 'gradienT';
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
		console.log(option('', 'bgx', 'bgy'));
		this.elements.forEach(el => {
			el.style.backgroundImage = fn();
			el.style.backgroundSize = option('', 'bgw', 'bgh');
			el.style.backgroundPosition = option('', 'bgx', 'bgy');
			el.style.backgroundRepeat = option('', 'repeat');
		})
	}
}