import { createH4 } from './headings.js';
import { addGradientBtn, addColorBtn } from './buttons.js';
import { createInputNumber, createInputRange } from './inputs.js';
import { backgroundRepeatSelect, gradientTypeSelect, radialShapeSelect } from './select.js';
import { backgroundSizeForm, backgroundPositionForm } from './forms.js';
import { GRADIENT_LINEAR, GRADIENT_RADIAL, GRADIENT_LINEAR_R, GRADIENT_RADIAL_R, RADIAL_Y, RADIAL_X} from '../../utils/constants.js';


function backgroundSize({ 'bg-h': h, 'bg-w': w }) {
	return createH4('Background Size') + backgroundSizeForm(h, w);
}

function backgroundPosition({ 'bg-x': x, 'bg-y': y }) {
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

function commonOptions(props) {
	return addColorBtn + backgroundOptions(props);
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

	return commonOptions(props) + gradientTypeSelect(type) + options;
}

export default selectGradientOptions;