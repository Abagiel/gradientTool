import { createInputNumber, createInputRange } from './inputs.js';
import { createH4 } from './headings.js';


const createForm = (content) => `<form>${content}</form>`;

export function backgroundSizeForm(h, w) {
	const inputs = `
		${createInputNumber(h, 'Height', 'bgh', '0')}
		${createInputNumber(w, 'Width', 'bgw', '0')}`;

	return createH4('Background Size') + createForm(inputs);
}

export function backgroundPositionForm(x, y) {
	const inputs = `
		${createInputNumber(x, 'X', 'bgx', '0')}
		${createInputNumber(y, 'Y', 'bgy', '0')}`;

	return createH4('Background Position') + createForm(inputs);
}

export function conicOptionsForm({deg, cx, cy}) {
	const inputs = `
		${createInputRange(deg, 'deg', '0', 360)}
		${createInputNumber(cx, 'X', 'cx', '0', null)}
		${createInputNumber(cy, 'Y', 'cy', '0', null)}`;

	return createForm(inputs);
}