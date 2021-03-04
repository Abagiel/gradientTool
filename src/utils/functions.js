export function linearGradientStyle(type, angle, gradient) {
	return `${type}(${angle}deg${gradient})`;	
}

export function radialGradientStyle(type, shape, x, y, gradient) {
	return `${type}(${shape} at ${x}% ${y}%${gradient})`;
}

function capitalize(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function toCamelCase(str) {
	if (!str.includes('-')) return;

	const strArr = str.split('-');

	return strArr[0] + capitalize(strArr[1]); 
}