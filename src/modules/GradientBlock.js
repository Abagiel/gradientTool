import ColorBlock from './ColorBlock.js';
import { options, colorsOptions } from '../utils/config.js';
import selectGradientOptions from './templates/templates.js';
import { toCamelCase, mergeColors, mergeValues, getOptionName } from '../utils/functions.js';
import typesHandler from '../utils/typesHandler.js';
import { prevent, enter } from '../utils/eventHandlers.js';

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
		this.addEvents();
		this.renderChildern();
	}

	addEvents() {
		if (!this.isInit) {
			this.tool.addEvent([
				['input', this.inputHandler.bind(this)],
				['click', this.clickHandler.bind(this)],
				['submit', prevent],
				['keydown', enter]
			], this.root);
			this.isInit = true;
		}
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
		this.tool.insertHTML(selectGradientOptions(this.options), this.root);
		this.colors.forEach(g => this.tool.insertHTML(g.render(), this.root));
	}

	renderElements() {
		this.tool.renderElements(this.getGradient.bind(this), this.getBackgroudOption.bind(this));
	}

	removeColor(id) {
		this.colors = this.colors.filter(gr => gr.id !== id);
	}

	removeGradient() {
		this.tool.removeGradient(this._id);
	}

	getGradient(str = '') {
		this.tool.gradients.forEach(g => {
			const type = g.options.type;
			const colors = mergeColors(g.colors);

			str += typesHandler[type](g.options, colors);
		});

		return str.slice(1);
	}

	getBackgroudOption(str = '', key1, key2 ) {
		this.tool.gradients.forEach(g => {
			const k1 = g.options[key1];
			const k2 = g.options[key2];
			const option = mergeValues(k1, k2);

			str += option;
		});

		return str.slice(1);
	}

	changeOptions(idx, value){
		const option = getOptionName(idx);

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

		if (dataset && !e.target.dataset.gradient) {
			this.changeOptions(dataset, value);
		}


		this.renderElements();
	}

}