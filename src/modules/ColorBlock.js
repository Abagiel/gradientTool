export default class ColorBlock {
	constructor(id) {
		this.id = id;
		this.color = '#ffffff';
		this.number = 0;
	}

	render() {
		return `
			<form>
				<input value=${this.color} type="color" data-gradient="${this.id}" />
				<input value=${this.number} type="number" min="0" max="100" data-gradient="${this.id}" />
				<button id="remove-color" data-gradient="${this.id}">&times;</button>
			</form>
		`
	}
}