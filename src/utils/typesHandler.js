import { linearGradientStyle, radialGradientStyle, conicGradientStyle } from './functions.js';
import { 
	GRADIENT_CONIC, GRADIENT_LINEAR, GRADIENT_RADIAL,
	GRADIENT_CONIC_R, GRADIENT_LINEAR_R, GRADIENT_RADIAL_R 
} from './constants.js';

export default {
	[GRADIENT_LINEAR]: linearGradientStyle,
	[GRADIENT_LINEAR_R]: linearGradientStyle,
	[GRADIENT_RADIAL]: radialGradientStyle,
	[GRADIENT_RADIAL_R]: radialGradientStyle,
	[GRADIENT_CONIC]: conicGradientStyle,
	[GRADIENT_CONIC_R]: conicGradientStyle
};