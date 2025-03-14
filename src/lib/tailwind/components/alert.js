const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const alertComponent = (/** @type {any} */ theme) => {
	const { contrast, background1 } = getBaseColorsFromTheme(theme);
	return {
		'.alert': {
			'@apply rounded-xl border-4 p-6 w-full': {},
			borderColor: contrast,
			backgroundColor: background1,
			color: contrast,

			...Object.keys(theme('colors')).reduce((acc, color) => {
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.alert-${color}`] = {
						borderColor: `var(--color-${color}-light)`,
						backgroundColor: `var(--color-${color})`,
						color: `var(--color-${color}-contrast)`
					};
				}
				return acc;
			}, {})
		}
	};
};

module.exports = alertComponent;
