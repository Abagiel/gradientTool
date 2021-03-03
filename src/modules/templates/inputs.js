function createTagAttr(options) {
	return Object
		.entries(options)
		.filter(option => option[1])
		.map(option => option.join('='))
		.join(' ');
}

function createInput(type, options) {
	options = { ...options, type };

	return `<input ${createTagAttr(options)} />`
}

export function createInputNumber(value, placeholder, data, min, max, id) {

	return createInput('number', { value, placeholder, min, 'data-number': data, min, max, id  });
}

export function createInputRange(value, data, min, max, id ) {
	return createInput('range', { value, 'data-range': data, min, max, id })
}