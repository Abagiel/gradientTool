import GradientBlock from './GradientBlock.js';
import selectGradientOptions from './templates/templates.js';
import { selector } from '../utils/config.js';
import { GRADIENT_LINEAR, CIRCLE_SHAPE } from '../utils/constants.js';

export default class Tool {
	constructor() {
		this.root = document.createElement('div');
		this.id = -1;
		this.gradients = [];
		this.elements = Array.from(document.querySelectorAll(selector));
		this.options = {
			angle: 0,
			type: GRADIENT_LINEAR,
			shape: CIRCLE_SHAPE,
			x: 0,
			y: 0
		};
	}

	init() {
		this.createRoot();
		this.addGradient().addGradient();

		this.root.addEventListener('input', this.inputHandler.bind(this));
		this.root.addEventListener('click', this.clickHandler.bind(this));
		this.root.addEventListener('submit', e => e.preventDefault());

		this.renderChildern();
	}

	renderChildern() {
		this.root.innerHTML = '';
		
		this.root.insertAdjacentHTML('beforeend', selectGradientOptions(this.options));
		this.gradients.forEach(g => {
			this.root.insertAdjacentHTML('beforeend', g.render());
		});
	}

	createRoot() {
		this.root.id = 'gradienT';
		document.body.append(this.root);
	}

	addGradient() {
		this.gradients.push(new GradientBlock(++this.id));

		return this;
	}

	createGradient() {
		const { type, angle, shape, x, y } = this.options;
		let gradient = '';

		this.gradients.forEach(g => {
			gradient += ', ' + g.color + ' ' + g.number + '%';
		})

		if (type === GRADIENT_LINEAR) {
			return `${type}(${angle}deg${gradient})`;
		}

		return `${type}(${shape} at ${x}% ${y}%${gradient})`;
	}

	clickHandler(e) {
		if (e.target.id !== 'add-gradient') return;

		this.addGradient();
		this.renderChildern();
	}

	inputHandler(e) {
		if (e.target.id === 'radial-x') {
			this.options.x = e.target.value;
			this.elements.forEach(el => {
				el.style.backgroundImage = this.createGradient();
			})
			return;
		}
		if (e.target.id === 'radial-y') {
			this.options.y = e.target.value;
			this.elements.forEach(el => {
				el.style.backgroundImage = this.createGradient();
			})
			return;
		}
		if (e.target.id === 'gradient-type') {
			this.options.type = e.target.value;
			this.renderChildern();
			return;
		}

		if (e.target.id === 'radial-shape') {
			this.options.shape = e.target.value;
			this.elements.forEach(el => {
				el.style.backgroundImage = this.createGradient();
			})
			return;
		}

		if (e.target.type === 'range') {
			this.options.angle = e.target.value;
			this.elements.forEach(el => {
				el.style.backgroundImage = this.createGradient();
			})
			return;
		}
		const id = +e.target.dataset.gradient;
		const type = e.target.type;

		this.gradients[id][type] = e.target.value;
		this.elements.forEach(el => {
				el.style.backgroundImage = this.createGradient();
		})
	}
}