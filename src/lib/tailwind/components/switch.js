const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const switchComponent = (/** @type {any} */ theme) => {
	const { background1, contrast } = getBaseColorsFromTheme(theme);
	return {
		'.switch': {
			'.switch-input': {
				borderColor: contrast,
				backgroundColor: background1,
				'&:checked': {
					backgroundColor: contrast
				}
			},
			'.switch-label': {
				borderColor: contrast,
				backgroundColor: background1,
				'&:before': {
					backgroundColor: contrast
				}
			},
			'.switch-handle': {},
			'.switch-label-text': {
				color: contrast
			}
		}
	};
};

module.exports = switchComponent;
