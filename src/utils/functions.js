export function linearGradientStyle(type, angle, colors) {
	return `${type}(${angle}deg${colors})`;	
}

export function radialGradientStyle(type, shape, x, y, colors) {
	return `${type}(${shape} at ${x}% ${y}%${colors})`;
}

export function conicGradientStyle(type, angle, x, y, colors) {
	return `${type}(from ${angle}deg at ${x}px ${y}px${colors})`;
}

function capitalize(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function toCamelCase(str) {
	if (!str.includes('-')) return;

	const strArr = str.split('-');

	return strArr[0] + capitalize(strArr[1]); 
}