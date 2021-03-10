const gradientData = '[data-gradient="gradienT"]';
const showSettings = document.querySelector('#showSettings');
const gradientSettings = document.querySelector('#gradienT');
const gradient = document.querySelector(gradientData);

function editStyle(target) {
	return (prop, value) => target.style[prop] = value;
}

function togglerGradientSettings() {
	const gradient = editStyle(gradientSettings);
	const toggler = editStyle(showSettings);

	return {
		show() {
			gradient('minWidth', '300px');
			gradient('maxWidth', '300px');
			gradient('border', '3px solid hsl(140 50% 40%)');
			toggler('display', 'none');
		},
		hide() {
			gradient('minWidth', '0px');
			gradient('maxWidth', '0px');
			gradient('border', 'none');
			toggler('display', 'block');
		}
	}
}

const toggler = togglerGradientSettings();

gradient.addEventListener('click', toggler.hide);
showSettings.addEventListener('click', toggler.show);