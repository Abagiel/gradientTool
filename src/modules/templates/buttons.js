function createButton(idx, text) {
	return `<button id="${idx}">${text}</button>`;
}

const addColorBtn = createButton('add-color', 'Add Color');
const removeGradient = createButton('remove-gradient', 'Remove Gradient');

export { addColorBtn, removeGradient }