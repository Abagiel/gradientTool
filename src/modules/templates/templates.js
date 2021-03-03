import { addGradientBtn } from './buttons.js';
import { createInputNumber, createInputRange } from './inputs.js';
import { 
	GRADIENT_LINEAR, 
	GRADIENT_RADIAL,
	GRADIENT_LINEAR_R,
	GRADIENT_RADIAL_R, 
	ELLIPSE_SHAPE, 
	CIRCLE_SHAPE,
	RADIAL_Y,
	RADIAL_X,
	GRADIENT_TYPE_ID,
	RADIAL_SHAPE_ID
} from '../../utils/constants.js';


function backgroundSize(props) {
	const h = props['bg-h'];
	const w = props['bg-w'];

	return `
		<h4>Background Size</h4>
		<form>
			${createInputNumber(h, 'Height', 'bg-h', '0')}
			${createInputNumber(w, 'Width', 'bg-w', '0')}
		</form>
	`;
}
function backgroundPosition(props) {
	const x = props['bg-x'];
	const y = props['bg-y'];

	return `
		<h4>Background Position</h4>
		<form>
			${createInputNumber(x, 'X', 'bg-x', '0')}
			${createInputNumber(y, 'Y', 'bg-y', '0')}
		</form>
	`;
}
function backgroundRepeat(props) {
	const type = props.repeat;

	return `
		<h4>Background Repeat</h4>
		<select id="bg-repeat">
			${createOption('Repeat', 'repeat', type)}
			${createOption('Repeat X', 'repeat-x', type)}
			${createOption('Repeat Y', 'repeat-y', type)}
			${createOption('Revert', 'revert', type)}
			${createOption('Round', 'round', type)}
			${createOption('Space', 'space', type)}
			${createOption('No Repeat', 'no-repeat', type)}
		</select>
	`;
}

const linearGradientOptions = ({ angle }) => createInputRange(angle, 'angle', 0, 360, 'linear-angle' );

const radialGradienOptions = ({ shape, x, y }) => {
	const coordLineX = createInputRange(x, 'x', 0, 100, RADIAL_X);
	const coordLineY = createInputRange(y, 'y', 0, 100, RADIAL_Y); 

	return selectRadialShape(shape) + coordLineX + coordLineY;
}

function createOption(content, value, ie) {
	const selected = ie === value ? 'selected' : '';

	return `<option ${selected} value="${value}">${content}</option>`
}

function selectGradientType(type) {
	return `
		<h4>Select Gradient Type</h4>
		<select id="${GRADIENT_TYPE_ID}" >
			${createOption('Linear', GRADIENT_LINEAR, type)}
			${createOption('Radial', GRADIENT_RADIAL, type)}
			${createOption('Repeat Radial', GRADIENT_RADIAL_R, type)}
			${createOption('Repeat Linear', GRADIENT_LINEAR_R, type)}
		</select>
	`;
}
function selectRadialShape(shape) {
	return `
		<h4>Select Shape</h4>
		<select id="${RADIAL_SHAPE_ID}" >
			${createOption('Circle', CIRCLE_SHAPE, shape)}
			${createOption('Ellipse', ELLIPSE_SHAPE, shape)}
		</select>
	`;
}

function commonOptions(props) {
	return addGradientBtn + backgroundSize(props) + backgroundPosition(props) + backgroundRepeat(props);
}

const gradientTypes = {
	[GRADIENT_LINEAR]: linearGradientOptions,
	[GRADIENT_LINEAR_R]: linearGradientOptions,
	[GRADIENT_RADIAL]: radialGradienOptions,
	[GRADIENT_RADIAL_R]: radialGradienOptions
};

function selectGradientOptions(props) {
	const type = props.type;
	const options = gradientTypes[type](props);

	return commonOptions(props) + selectGradientType(type) + options;
}

export default selectGradientOptions;