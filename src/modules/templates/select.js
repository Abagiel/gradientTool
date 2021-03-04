import { createH4 } from './headings.js';
import { GRADIENT_TYPE_ID, GRADIENT_LINEAR, GRADIENT_RADIAL, GRADIENT_RADIAL_R, GRADIENT_LINEAR_R, RADIAL_SHAPE_ID, CIRCLE_SHAPE, ELLIPSE_SHAPE, GRADIENT_CONIC_R, GRADIENT_CONIC } from '../../utils/constants.js';

function createOption(content, value, ie) {
	const selected = ie === value ? 'selected' : '';

	return `<option ${selected} value="${value}">${content}</option>`
}

function createSelect(id, content) {
	return `
		<select id="${id}" data-select="${id}" >
			${content}
		</select>
	`;
}

export function backgroundRepeatSelect(type) {
	const options = `
		${createOption('Repeat', 'repeat', type)}
		${createOption('Repeat X', 'repeat-x', type)}
		${createOption('Repeat Y', 'repeat-y', type)}
		${createOption('Revert', 'revert', type)}
		${createOption('Round', 'round', type)}
		${createOption('Space', 'space', type)}
		${createOption('No Repeat', 'no-repeat', type)}`;
	
	return createSelect('bg-repeat', options);
}

export function gradientTypeSelect(type) {
	const options = `
		${createOption('Linear', GRADIENT_LINEAR, type)}
		${createOption('Radial', GRADIENT_RADIAL, type)}
		${createOption('Conic', GRADIENT_CONIC, type)}
		${createOption('Repeat Radial', GRADIENT_RADIAL_R, type)}
		${createOption('Repeat Linear', GRADIENT_LINEAR_R, type)}
		${createOption('Repeat Conic', GRADIENT_CONIC_R, type)}`;

	return createH4('Select Gradient Type') + createSelect(GRADIENT_TYPE_ID, options);
}

export function radialShapeSelect(shape) {
	const options = `
		${createOption('Circle', CIRCLE_SHAPE, shape)}
		${createOption('Ellipse', ELLIPSE_SHAPE, shape)}`;

	return createH4('Select Shape') + createSelect(RADIAL_SHAPE_ID, options);
}