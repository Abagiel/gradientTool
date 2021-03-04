import ColorBlock from './ColorBlock.js';
import { options } from '../utils/config.js';
import selectGradientOptions from './templates/templates.js';
import { toCamelCase, linearGradientStyle, radialGradientStyle } from '../utils/functions.js';
import { GRADIENT_LINEAR, GRADIENT_LINEAR_R } from '../utils/constants.js';

export default class GradientBlock {
	constructor(root, tool) {
		this.tool = tool;
		this.root = root;
		this.id = -1;
		this.colors = [];
		this.options = options();
		this.elements = tool.elements;
	}

	init() {
		this.addColor();
		this.addColor();

		this.tool.addEvent([
			['input', this.inputHandler.bind(this)],
			['click', this.clickHandler.bind(this)],
			['submit', e => e.preventDefault()]
		]);

		this.renderChildern();
	}

	addColor() {
		this.colors.push(new ColorBlock(++this.id));
	}

	renderChildern() {
		this.tool.clearRoot(this.root);
		this.tool.insertRootHTML(selectGradientOptions(this.options), this.root);

		this.colors.forEach(g => this.tool.insertRootHTML(g.render(), this.root));
	}

	renderElements() {
		this.tool.renderElements(this.options, this.createGradient.bind(this));
	}

	removeColor(id) {
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

	changeOptions(idx, value){
		const option = idx.includes('-') ? idx.split('-')[1] : idx;

		this.options[option] = value;

		if (option === 'type') this.renderChildern();
	}

	clickHandler(e) {
		const method = toCamelCase(e.target.id);
		const id = +e.target.dataset.gradient;

		if (!this[method]) return;

		this[method](id);
		this.renderChildern();
		this.renderElements();
	}

	inputHandler(e) {
		const dataset = Object.values(e.target.dataset)[0];
		const value = e.target.value;

		if (e.target.dataset.gradient) {
			const idx = +e.target.dataset.gradient;
			const type = e.target.type;

			this.colors.forEach(gr => gr.id === idx ? gr[type] = value : null);
		}

		if (dataset) {
			this.changeOptions(dataset, value);
		}


		this.renderElements();
	}

}