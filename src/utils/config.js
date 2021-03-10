import { GRADIENT_LINEAR, CIRCLE_SHAPE } from './constants.js'; 

export const selector = '[data-gradient="gradienT"]';
export function colorsOptions() {
	return {
		color: '#ffffff',
		opacity: 1,
		degree: 0,
	}
}
export function options() {
	return {
		angle: 0,
		type: GRADIENT_LINEAR,
		shape: CIRCLE_SHAPE,
		x: 0,
		y: 0,
		repeat: 'repeat',
		bgh: '0',
		bgw: '0',
		bgx: '0',
		bgy: '0',
		deg: 0,
		cx: 0,
		cy: 0
	};
};