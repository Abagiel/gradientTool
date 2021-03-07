import { addColorBtn, removeGradient } from './buttons.js';
import { linearGradientOptions, radialGradienOptions } from './inputs.js';
import { backgroundRepeatSelect, gradientTypeSelect } from './select.js';
import { backgroundSizeForm, backgroundPositionForm, conicOptionsForm } from './forms.js';
import { GRADIENT_LINEAR, GRADIENT_RADIAL, GRADIENT_LINEAR_R, GRADIENT_RADIAL_R, GRADIENT_CONIC, GRADIENT_CONIC_R} from '../../utils/constants.js';


function backgroundOptions({'bgh': h, 'bgw': w, 'bgx': x, 'bgy': y, repeat}) {
	return backgroundSizeForm(h, w) + backgroundPositionForm(x, y) + backgroundRepeatSelect(repeat);
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
	[GRADIENT_CONIC]: conicOptionsForm,
	[GRADIENT_CONIC_R]: conicOptionsForm
};

function selectGradientOptions(props) {
	const type = props.type;
	const options = gradientTypes[type](props);

	return commonOptions(props) + gradientTypeSelect(type) + options;
}

export default selectGradientOptions;