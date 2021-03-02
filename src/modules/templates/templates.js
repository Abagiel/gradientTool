import { 
	GRADIENT_LINEAR, 
	GRADIENT_RADIAL, 
	ELLIPSE_SHAPE, 
	CIRCLE_SHAPE,
	RADIAL_Y,
	RADIAL_X,
	GRADIENT_TYPE_ID,
	RADIAL_SHAPE_ID
} from '../../utils/constants.js';


const addGradientBtn = `<button id="add-gradient">Add Gradient</button>`;

function createAngleLine(idx, max, value) {
	const dataset = idx.split('-')[0];

	return `<input id="${idx}" data-line="${dataset}" type="range" value="${value}" max="${max}"/>`
}

const linearGradientOptions = (d) => createAngleLine('linear-angle', 360, d);
const radialGradienOptions = (shape, x, y) => { 
	const coordLineX = createAngleLine(RADIAL_X, 100, x);
	const coordLineY = createAngleLine(RADIAL_Y, 100, y);

	return selectRadialShape(shape) + coordLineX + coordLineY;
}

function createOption(content, value, ie) {
	const selected = ie === value ? 'selected' : '';

	return `<option ${selected} value="${value}">${content}</option>`
}

function selectGradientType(type) {
	return `
		<select id="${GRADIENT_TYPE_ID}" >
			${createOption('Linear', GRADIENT_LINEAR, type)}
			${createOption('Radial', GRADIENT_RADIAL, type)}
		</select>
	`;
}
function selectRadialShape(shape) {
	return `
		<select id="${RADIAL_SHAPE_ID}" >
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