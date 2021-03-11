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


function autoOrNot(v, key) {
	return v || key === 'bgx' ? v + 'px ' : 'auto '; 
}

function toTwoValue(v, key) {
	return isNaN(+v) ? v + ' ' : autoOrNot(+v, key);
}

export function mergeValues(key, ...values) {
	let result = ',';

	values
		.filter(v => v !== undefined && v !== null)
		.forEach(v => result += toTwoValue(v, key));

	return result;
}

export function getOptionName(str) {
	return str.includes('-') ? str.split('-')[1] : str;
}

export function createElement(el, id, text = '') {
	const element = document.createElement(el);
	element.id = id;
	element.textContent = text;

	return element;
}

export function copyToClipboard(style) {
	const css = style.split(';').join(';\n');
	
	navigator.clipboard.writeText(css);
}