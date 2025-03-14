const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const loadingSpinnerComponent = (/** @type {any} */ theme) => {
	const { contrast, background3 } = getBaseColorsFromTheme(theme);
	return {
		'.loading-spinner': {
			'@apply block h-4 w-4 animate-spin rounded-full border-4 ease-linear': {},
			borderColor: background3,
			borderTopColor: contrast,
			...Object.keys(theme('colors')).reduce((acc, color) => {
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.loading-spinner-${color}`] = {
						borderColor: `var(--color-${color}-light)`,
						borderTopColor: `var(--color-${color})`
					};
				}

				return acc;
			}, {})
		}
	};
};

module.exports = loadingSpinnerComponent;
