import { GRADIENT_LINEAR, GRADIENT_RADIAL, ELLIPSE_SHAPE, CIRCLE_SHAPE } from '../../utils/constants.js';

const addGradientBtn = `<button id="add-gradient">Add Gradient</button>`;

function createAngleLine(idx, max, value) {
	return `<input id="${idx}" type="range" value="${value}" max="${max}"/>`
}

const linearGradientOptions = (d) => createAngleLine('linear-angle', 360, d);
const radialGradienOptions = (shape, x, y) => { 
	const coordLineX = createAngleLine('radial-x', 100, x);
	const coordLineY = createAngleLine('radial-y', 100, y);

	return selectRadialShape(shape) + coordLineX + coordLineY;
}

function createOption(content, value, ie) {
	const selected = ie === value ? 'selected' : '';

	return `<option ${selected} value="${value}">${content}</option>`
}

function selectGradientType(type) {
	return `
		<select id="gradient-type" >
			${createOption('Linear', GRADIENT_LINEAR, type)}
			${createOption('Radial', GRADIENT_RADIAL, type)}
		</select>
	`;
}
function selectRadialShape(shape) {
	return `
		<select id="radial-shape" >
			${createOption('Circle', CIRCLE_SHAPE, shape)}
			${createOption('Ellipse', ELLIPSE_SHAPE, shape)}
		</select>
	`;
}


function selectGradientOptions({ type, shape, x, y, angle }) {
	const options = type === GRADIENT_LINEAR 
		? linearGradientOptions(angle)
		: radialGradienOptions(shape, x, y);

	return addGradientBtn + selectGradientType(type) + options;
}

export default selectGradientOptions;