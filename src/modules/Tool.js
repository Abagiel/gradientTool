import ColorBlock from './ColorBlock.js';

import selectGradientOptions from './templates/templates.js';
import { selector, options } from '../utils/config.js';
import { linearGradientStyle, radialGradientStyle } from '../utils/functions.js';
import { 
	GRADIENT_LINEAR, 
	GRADIENT_LINEAR_R,
	CIRCLE_SHAPE,
	RADIAL_SHAPE_ID,
	GRADIENT_TYPE_ID,
	RADIAL_X,
	RADIAL_Y
} from '../utils/constants.js';


export default class Tool {
	constructor() {
		this.root = document.createElement('div');
		this.id = -1;
		this.colors = [];
		this.elements = Array.from(document.querySelectorAll(selector));
		this.options = options;
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
		this.clearRoot();
		this.insertRootHTML(selectGradientOptions(this.options));

		this.colors.forEach(g => this.insertRootHTML(g.render()));
	}

	renderElements() {
		this.elements.forEach(el => {
			el.style.backgroundImage = this.createGradient();
			el.style.backgroundSize = `${this.options['bg-w']}px ${this.options['bg-h']}px`;
			el.style.backgroundPosition = `${this.options['bg-x']}px ${this.options['bg-y']}px`;
			el.style.backgroundRepeat = this.options.repeat;
		})
	}

	insertRootHTML(html) {
		this.root.insertAdjacentHTML('beforeend', html);
	}

	clearRoot() {
		this.root.innerHTML = '';
	}

	createRoot() {
		this.root.id = 'gradienT';
		document.body.append(this.root);
	}

	addGradient() {
		this.colors.push(new ColorBlock(++this.id));

		return this;
	}
	removeGradient(id) {
		this.colors = this.colors.filter(gr => gr.id !== id);
	}

	createGradient() {
		let gradient = '';
		const { type, angle, shape, x, y } = this.options;

		this.colors.forEach(g => {
			gradient += ', ' + g.color + ' ' + g.number + '%';
		})

		if (type === GRADIENT_LINEAR || type === GRADIENT_LINEAR_R) {
			return linearGradientStyle(type, angle, gradient);
		}

		return radialGradientStyle(type, shape, x, y, gradient);
	}

	clickHandler(e) {
		if (e.target.tagName !== 'BUTTON') return;
		if (e.target.id === 'add-color') {
			this.addGradient();
		}

		if (e.target.id === 'remove-color') {
			const id = +e.target.dataset.gradient;

			this.removeGradient(id);
		}

		this.renderChildern();
		this.renderElements();
	}

	changeGradientAngle(idx, value){
		const coord = idx.split('-')[1];

		this.options[coord] = value;
	}

	inputHandler(e) {
		if (e.target.dataset.range) {
			this.changeGradientAngle(e.target.id, e.target.value);
		}

		if (e.target.id === GRADIENT_TYPE_ID) {
			this.options.type = e.target.value;
			this.renderChildern();
		}

		if (e.target.id === RADIAL_SHAPE_ID) {
			this.options.shape = e.target.value;
		}

		if (e.target.dataset.number) {
			this.options[e.target.dataset.number] = e.target.value;
		}

		if (e.target.id === 'bg-repeat') {
			this.options.repeat = e.target.value;
		}

		if (e.target.dataset.gradient) {
			const id = +e.target.dataset.gradient;
			const type = e.target.type;

			this.colors.forEach(gr => {
				if (gr.id === id) {
					gr[type] = e.target.value;
				}
			});
		}

		this.renderElements();
	}
}