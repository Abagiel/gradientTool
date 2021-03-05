export default class ColorBlock {
	constructor(id, options) {
		this.id = id;
		this.color = options.color;
		this.degree = options.degree;
		this.opacity = options.opacity;
	}

	render() {
		return `
			<div id="color-block">
				<form class="color-form">
					<input value=${this.color} type="color" data-color="color" data-gradient="${this.id}" />
					<input value=${this.opacity} type="number" min="0" max="1" step="0.05" data-color="opacity" data-gradient="${this.id}" />
					<input value=${this.degree} type="number" min="0" max="100" data-color="degree" data-gradient="${this.id}" />
					<button id="remove-color" data-gradient="${this.id}">&times;</button>
				</form>
			</div>
		`
	}
}