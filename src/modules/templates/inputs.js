import { radialShapeSelect } from './select.js';
import { RADIAL_X, RADIAL_Y } from '../../utils/constants.js';

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
	return createInput('number', { 
		value, 
		placeholder, 
		min, 
		'data-number': data, 
		min, 
		max, 
		id  
	});
}

export function createInputRange(value, data, min, max, id ) {
	return createInput('range', { value, 'data-range': data, min, max, id })
}


export function linearGradientOptions({ angle }) {
	return createInputRange(angle, 'angle', 0, 360, 'linear-angle' );
} 

export function radialGradienOptions({ shape, x, y }) {
	const coordLineX = createInputRange(x, 'x', 0, 100, RADIAL_X);
	const coordLineY = createInputRange(y, 'y', 0, 100, RADIAL_Y); 

	return radialShapeSelect(shape) + coordLineX + coordLineY;
}