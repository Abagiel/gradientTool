import ColorBlock from './ColorBlock.js';
import { options, colorsOptions } from '../utils/config.js';
import selectGradientOptions from './templates/templates.js';
import { toCamelCase, mergeColors } from '../utils/functions.js';
import typesHandler from '../utils/typesHandler.js';

export default class GradientBlock {
	constructor(root, tool) {
		this._id = 'con-' + tool.id;
		this.tool = tool;
		this.root = root;
		this.id = -1;
		this.colors = [];
		this.colorsOptions = [];
		this.options = options();
		this.elements = tool.elements;
		this.isInit = false;
	}

	init() {
		this.clearColors();
		this.addColor();
		this.addColor();

		if (!this.isInit) {
			this.tool.addEvent([
				['input', this.inputHandler.bind(this)],
				['click', this.clickHandler.bind(this)],
				['submit', e => e.preventDefault()]
			], this.root);
			this.isInit = true;
		}

		this.renderChildern();
	}

	clearColors() {
		this.colors = [];
		this.id = -1;
	}

	addColor() {
		if (!this.colorsOptions[this.id + 1]) {
			this.colorsOptions.push(colorsOptions());
		}
		
		this.colors.push(new ColorBlock(++this.id, this.colorsOptions[this.id]));
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

	removeGradient() {
		this.tool.removeGradient(this._id);
	}

	createGradient() {
		let gradients = '';

		this.tool.gradients.forEach(g => {
			const type = g.options.type;
			const colors = mergeColors(g.colors);

			gradients += typesHandler[type](g.options, colors);
		});

		return gradients.slice(1);
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
			const type = e.target.dataset.color;

			this.colors.forEach((col, id) => {
				if (col.id === idx) {
					col[type] = value;
					this.colorsOptions[id][type] = value;
				}
			});
		}

		if (dataset) {
			this.changeOptions(dataset, value);
		}


		this.renderElements();
	}

}