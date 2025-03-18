const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const switchComponent = (/** @type {any} */ theme) => {
	const { base1, foreground } = getBaseColorsFromTheme(theme);
	return {
		'.switch': {
			'.switch-input': {
				borderColor: foreground,
				backgroundColor: base1,
				'&:checked': {
					backgroundColor: foreground
				}
			},
			'.switch-label': {
				borderColor: foreground,
				backgroundColor: base1,
				'&:before': {
					backgroundColor: foreground
				}
			},
			'.switch-handle': {},
			'.switch-label-text': {
				color: foreground
			}
		}
	};
};

module.exports = switchComponent;
