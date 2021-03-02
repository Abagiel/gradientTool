export function linearGradientStyle(type, angle, gradient) {
	return `${type}(${angle}deg${gradient})`;	
}

export function radialGradientStyle(type, shape, x, y, gradient) {
	return `${type}(${shape} at ${x}% ${y}%${gradient})`;
}