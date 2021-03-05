import { createH4 } from './headings.js';
import { addColorBtn, removeGradient } from './buttons.js';
import { createInputNumber, createInputRange } from './inputs.js';
import { backgroundRepeatSelect, gradientTypeSelect, radialShapeSelect } from './select.js';
import { backgroundSizeForm, backgroundPositionForm, conicOptionsForm } from './forms.js';
import { GRADIENT_LINEAR, GRADIENT_RADIAL, GRADIENT_LINEAR_R, GRADIENT_RADIAL_R, RADIAL_Y, RADIAL_X, GRADIENT_CONIC, GRADIENT_CONIC_R} from '../../utils/constants.js';


function backgroundSize({ 'bgh': h, 'bgw': w }) {
	return createH4('Background Size') + backgroundSizeForm(h, w);
}

function backgroundPosition({ 'bgx': x, 'bgy': y }) {
	return createH4('Background Position') + backgroundPositionForm(x, y);
}

function backgroundRepeat(props) {
	return createH4('Background Repeat') + backgroundRepeatSelect(props.repeat);
}

function backgroundOptions(props) {
	return backgroundSize(props) + backgroundPosition(props) + backgroundRepeat(props);
}


function linearGradientOptions({ angle }) {
	return createInputRange(angle, 'angle', 0, 360, 'linear-angle' );
} 

function radialGradienOptions({ shape, x, y }) {
	const coordLineX = createInputRange(x, 'x', 0, 100, RADIAL_X);
	const coordLineY = createInputRange(y, 'y', 0, 100, RADIAL_Y); 

	return radialShapeSelect(shape) + coordLineX + coordLineY;
}

function conicGradientOptions({ deg, cx, cy }) {
	return conicOptionsForm(deg, cx, cy);
}

function commonOptions(props) {
	const btns = `<div>${removeGradient + addColorBtn}</div>`
	return btns + backgroundOptions(props);
}

const gradientTypes = {
	[GRADIENT_LINEAR]: linearGradientOptions,
	[GRADIENT_LINEAR_R]: linearGradientOptions,
	[GRADIENT_RADIAL]: radialGradienOptions,
	[GRADIENT_RADIAL_R]: radialGradienOptions,
	[GRADIENT_CONIC]: conicGradientOptions,
	[GRADIENT_CONIC_R]: conicGradientOptions
};

function selectGradientOptions(props) {
	const type = props.type;
	const options = gradientTypes[type](props);

	return commonOptions(props) + gradientTypeSelect(type) + options;
}

export default selectGradientOptions;