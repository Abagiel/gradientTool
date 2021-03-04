import { createInputNumber } from './inputs.js';


const createForm = (content) => `<form>${content}</form>`;

export function backgroundSizeForm(h, w) {
	const inputs = `
		${createInputNumber(h, 'Height', 'bgh', '0')}
		${createInputNumber(w, 'Width', 'bgw', '0')}`;

	return createForm(inputs);
}

export function backgroundPositionForm(x, y) {
	const inputs = `
		${createInputNumber(x, 'X', 'bgx', '0')}
		${createInputNumber(y, 'Y', 'bgy', '0')}`;

	return createForm(inputs);
}