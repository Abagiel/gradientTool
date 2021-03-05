function createButton(idx, text) {
	return `<button id="${idx}">${text}</button>`;
}

export const addColorBtn = createButton('add-color', 'Add Color');
export const removeGradient = createButton('remove-gradient', 'Remove Gradient');