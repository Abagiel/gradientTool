import GradientBlock from './GradientBlock.js';

import selectGradientOptions from './templates/templates.js';
import { selector } from '../utils/config.js';
import { linearGradientStyle, radialGradientStyle } from '../utils/functions.js';
import { 
	GRADIENT_LINEAR, 
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
		this.clearRoot();
		this.insertRootHTML(selectGradientOptions(this.options));

		this.gradients.forEach(g => this.insertRootHTML(g.render()));
	}

	renderElements() {
		this.elements.forEach(el => {
			el.style.backgroundImage = this.createGradient();
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
		this.gradients.push(new GradientBlock(++this.id));

		return this;
	}

	createGradient() {
		let gradient = '';
		const { type, angle, shape, x, y } = this.options;

		this.gradients.forEach(g => {
			gradient += ', ' + g.color + ' ' + g.number + '%';
		})

		if (type === GRADIENT_LINEAR) {
			return linearGradientStyle(type, angle, gradient);
		}

		return radialGradientStyle(type, shape, x, y, gradient);
	}

	clickHandler(e) {
		if (e.target.id !== 'add-gradient') return;

		this.addGradient();
		this.renderChildern();
	}

	changeGradientAngle(idx, value){
		const coord = idx.split('-')[1];

		this.options[coord] = value;
	}

	inputHandler(e) {
		if (e.target.dataset.line) {
			this.changeGradientAngle(e.target.id, e.target.value);
		}

		if (e.target.id === GRADIENT_TYPE_ID) {
			this.options.type = e.target.value;
			this.renderChildern();
		}

		if (e.target.id === RADIAL_SHAPE_ID) {
			this.options.shape = e.target.value;
		}

		if (e.target.dataset.gradient) {
			const id = +e.target.dataset.gradient;
			const type = e.target.type;

			this.gradients[id][type] = e.target.value;
		}

		this.renderElements();
	}
}