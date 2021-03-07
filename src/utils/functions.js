export function linearGradientStyle({type, angle}, colors) {
	return `,${type}(${angle}deg${colors})`;	
}

export function radialGradientStyle({type, shape, x, y}, colors) {
	return `,${type}(${shape} at ${x}% ${y}%${colors})`;
}

export function conicGradientStyle({type, deg, cx, cy}, colors) {
	return `,${type}(from ${deg}deg at ${cx}px ${cy}px${colors})`;
}


function hexToRGBA(color, opacity) {
	const r = +parseInt(color.substr(1, 2), 16);
	const g = +parseInt(color.substr(3, 2), 16);
	const b = +parseInt(color.substr(5, 2), 16);

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function capitalize(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function toCamelCase(str) {
	if (!str.includes('-')) return;

	const strArr = str.split('-');

	return strArr[0] + capitalize(strArr[1]); 
}

export function mergeColors(colorsArr) {
	let colorsStr = '';

	colorsArr.forEach(c => {
		colorsStr += ', ' + hexToRGBA(c.color, c.opacity) + ' ' + c.degree + '%';
	});

	return colorsStr;
}

const toTwoValue = (v) => isNaN(+v) ? v + ' ' : v + 'px ';

export function mergeValues(...values) {
	let result = ',';

	values
		.filter(v => v)
		.forEach(v => result += toTwoValue(v));

	return result;
}

export function getOptionName(str) {
	return str.includes('-') ? str.split('-')[1] : str;
}