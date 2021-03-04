import { GRADIENT_LINEAR, CIRCLE_SHAPE } from './constants.js'; 

export const selector = '[data-gradient="gradienT"]';
export function options() {
	return {
		angle: 0,
		type: GRADIENT_LINEAR,
		shape: CIRCLE_SHAPE,
		x: 0,
		y: 0,
		repeat: 'repeat',
		bgh: null,
		bgw: null,
		bgx: null,
		bgy: null
	};
}