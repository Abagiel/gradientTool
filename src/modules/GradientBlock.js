export default class GradientBlock {
	constructor(id) {
		this.id = id;
		this.color = '#fff';
		this.number = 0;
	}

	render() {
		return `
			<form>
				<input value=${this.color} type="color" data-gradient="${this.id}" />
				<input value=${this.number} type="number" min="0" max="100" data-gradient="${this.id}" />
			</form>
		`
	}
}